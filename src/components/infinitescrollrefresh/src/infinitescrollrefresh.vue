<template>
    <div>
        <div ref="dragBox">
            <slot></slot>
            <div class="m-pullrefresh-dragtip" ref="dragTip"
                 v-show="touches.isDraging"
                 :class="dragTip.animationTiming"
                 :style="{ 'transform': 'translate3d(0, ' + dragTip.translate + 'px, 0) scale(' + dragTip.scale + ')' }"
            >
                <span :class="dragTip.loadingIcon"
                      :style="{ 'transform': 'rotate(' + dragTip.iconRotate + 'deg)', opacity: dragTip.iconOpacity }"
                ></span>
            </div>
        </div>
        <div class="m-pullrefresh-draghelp" v-if="showHelpTag" @click="showHelpTag = false">
            <div><span>下拉更新</span></div>
        </div>


        <!--  无限滚动加载 -->
        <div ref="tag" style="height: 1px;"></div>

        <div class="m-list-loading" v-if="!isDone">
            <div v-show="isLoading">
                <slot name="loadingTip">
                    <loading></loading>
                </slot>
            </div>
        </div>

        <div class="m-list-donetip" v-show="!isLoading && isDone">
            <slot name="doneTip">没有更多数据了</slot>
        </div>

    </div>
</template>

<script type="text/babel">
    import Loading from './loading.vue';

    export default {
        name: 'm-infinitescrollrefresh',
        components: {Loading},
        props: {
            onRefresh: {
                type: Function
            },
            refreshCallback: {
                type: Function
            },
			stopDrag: {
                type: Boolean,
                default: false
            },

            onInfinite: {
                type: Function
            },
            infiniteCallback: {
                type: Function
            },
            distance: {
                default: 0,
                validator(val) {
                    return /^\d*$/.test(val);
                }
            },
            scrollTop: {
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                showHelpTag: false,
                dragTip: {
                    iconOpacity: 0.5,
                    iconRotate: 0,
                    loadingIcon: '',
                    animationTiming: '',
                    scale: 1,
                    translate: 0,
                    distance: 100
                },
                touches: {
                    loading: false,
                    startClientY: 0,
                    moveOffset: 0,
                    isDraging: false
                },
                limitSpeed: 0,

                isLoading: false,
                isDone: false,
                num: 1
            }
        },
        methods: {
            init() {
                this.offsetTop = this.$refs.dragBox.getBoundingClientRect().top;

                this.bindEvents();

                this.$on('ydui.pullrefresh.finishLoad', this.finishLoad);

                this.showHelp();

                this.initInfinite();
            },
            showHelp() {
                const _key = 'PULLREFRESH-TIP';
                const storage = window.localStorage;

                if (storage.getItem(_key) != 1) {
                    this.showHelpTag = true;
                    setTimeout(() => {
                        this.showHelpTag = false;
                    }, 5000);
                }
                storage.setItem(_key, 1);
            },
            bindEvents() {
                const dragBox = this.$refs.dragBox;

                dragBox.addEventListener('touchstart', this.touchStartHandler);
                dragBox.addEventListener('touchmove', this.touchMoveHandler);
                dragBox.addEventListener('touchend', this.touchEndHandler);

                document.body.addEventListener('touchmove', this.stopDragEvent);
            },
            unbindEvents() {
                const dragBox = this.$refs.dragBox;

                dragBox.removeEventListener('touchstart', this.touchStartHandler);
                dragBox.removeEventListener('touchmove', this.touchMoveHandler);
                dragBox.removeEventListener('touchend', this.touchEndHandler);

                document.body.removeEventListener('touchmove', this.stopDragEvent);
            },
            stopDragEvent(event) {
                this.touches.isDraging && event.preventDefault();
            },
            touchStartHandler(event) {
                if (this.stopDrag) return;

                if (this.touches.loading) {
                    event.preventDefault();
                    return;
                }

                if (this.scrollview.scrollTop > 0 || this.$refs.dragBox.getBoundingClientRect().top < this.offsetTop) {
                    return;
                }

                this.touches.startClientX = event.touches[0].clientX;
                this.touches.startClientY = event.touches[0].clientY;
            },
            touchMoveHandler(event) {
                const touches = this.touches;

                if (this.stopDrag) return;

                if (this.touches.loading) {
                    event.preventDefault();
                    return;
                }

                if (this.scrollview.scrollTop > 0) {
                    this.dragTip.translate = 0;
                    this.resetParams();
                    return;
                }

                const currentY = event.touches[0].clientY;
                const currentX = event.touches[0].clientX;

                if (touches.startClientY > currentY || this.$refs.dragBox.getBoundingClientRect().top < this.offsetTop) {
                    return;
                }

                touches.isDraging = true;

                const touchAngle = Math.atan2(Math.abs(currentY - touches.startClientY), Math.abs(currentX - touches.startClientX)) * 180 / Math.PI;

                let deltaSlide = currentY - touches.startClientY;

                if (90 - touchAngle > 45) return;

                this.dragTip.iconOpacity = deltaSlide / 100;

                if (deltaSlide >= this.dragTip.distance) {
                    deltaSlide = this.dragTip.distance;
                }

                this.dragTip.iconRotate = deltaSlide / 0.25;

                this.limitSpeed += 10;
                if (this.limitSpeed < deltaSlide) {
                    deltaSlide = this.limitSpeed;
                }
                touches.moveOffset = this.dragTip.translate = deltaSlide;
            },
            touchEndHandler(event) {
                if (this.stopDrag) return;

                const touches = this.touches;

                if (touches.loading) {
                    event.preventDefault();
                    return;
                }

                this.limitSpeed = 0;

                if (this.$refs.dragBox.getBoundingClientRect().top < this.offsetTop) {
                    return;
                }

                this.dragTip.animationTiming = 'm-pullrefresh-animation-timing';

                if (touches.moveOffset >= this.dragTip.distance) {
                    this.dragTip.translate = this.dragTip.distance / 1.5;
                    this.dragTip.loadingIcon = 'm-pullrefresh-loading';
                    this.triggerLoad();
                    return;
                }

                this.dragTip.translate = 0;
                this.resetParams();
            },
            triggerLoad() {
                this.touches.loading = true;
                this.onRefresh && this.onRefresh();
                this.refreshCallback && this.refreshCallback();
            },
            finishLoad() {
                setTimeout(() => {
                    this.dragTip.iconRotate = 0;
                    this.dragTip.scale = 0;
                    this.resetParams();
                }, 200);
            },
            resetParams() {
                setTimeout(() => {
                    const touches = this.touches;
                    const dragTip = this.dragTip;
                    touches.isDraging = false;
                    touches.loading = false;
                    touches.moveOffset = 0;
                    dragTip.animationTiming = '';
                    dragTip.iconOpacity = 0.5;
                    dragTip.translate = 0;
                    dragTip.scale = 1;
                    dragTip.loadingIcon = '';
                }, 150);
            },

            initInfinite() {
                this.scrollview = $utils.getScrollview(this.$el);

                if (this.scrollTop) {
                    if (this.scrollview === window) {
                        window.scrollTo(0, 0)
                    } else {
                        this.scrollview.scrollTop = 0;
                    }
                }

                this.scrollview.addEventListener('scroll', this.throttledCheck, false);

                this.$on('ydui.infinitescroll.loadedDone', () => {
                    this.isLoading = false;
                    this.isDone = true;
                });

                this.$on('ydui.infinitescroll.finishLoad', (ret) => {
                    this.isLoading = false;
                });

                this.$on('ydui.infinitescroll.reInit', () => {
                    this.isLoading = false;
                    this.isDone = false;
                });
            },
            scrollHandler() {
                if (this.isLoading || this.isDone) return;

                const scrollview = this.scrollview;
                const contentHeight = document.body.offsetHeight;
                const isWindow = scrollview === window;
                const offsetTop = isWindow ? 0 : scrollview.getBoundingClientRect().top;
                const scrollviewHeight = isWindow ? contentHeight : scrollview.offsetHeight;

                if (!scrollview) {
                    console.warn('Can\'t find the scrollview!');
                    return;
                }

                if (!this.$refs.tag) {
                    console.warn('Can\'t find the refs.tag!');
                    return;
                }

                const tagOffsetTop = Math.floor(this.$refs.tag.getBoundingClientRect().top) - 1;
                const distance = !!this.distance && this.distance > 0 ? ~~this.distance : Math.floor(contentHeight / 10);

                if (tagOffsetTop > offsetTop && tagOffsetTop - (distance + offsetTop) * this.num <= contentHeight && this.$el.offsetHeight > scrollviewHeight) {
                    this.isLoading = true;
                    // TODO 参数更名，即将删除
                    this.onInfinite && this.onInfinite();
                    this.infiniteCallback && this.infiniteCallback();
                    this.num++;
                }
            },
            throttle(method, context) {
                clearTimeout(method.tId);
                method.tId = setTimeout(() => {
                    method.call(context);
                }, 30);
            },
            throttledCheck() {
                this.throttle(this.scrollHandler);
            }
        },
        mounted() {
            this.scrollview = $utils.getScrollview(this.$el);

            this.$nextTick(this.init);
        },
        beforeDestroy() {
            this.unbindEvents();
        },
        destroyed() {
            this.scrollview.removeEventListener('scroll', this.throttledCheck);
        }
    }
</script>

<style lang="less">
    @import '../../../styles/components/pullrefresh.less';
    @import '../../../styles/components/infinitescroll.less';
</style>
