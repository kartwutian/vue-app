<template>

    <div class="hello" @scroll="scroll()" ref="index0">
        <m-slider autoplay="50000">
            <m-slider-item>
                <a href="http://www.ydcss.com">
                    <m-lazyload data-src="http://img0.imgtn.bdimg.com/it/u=3920398476,1501488149&fm=214&gp=0.jpg" class="test"></m-lazyload>
                </a>
            </m-slider-item>
            <m-slider-item>
                <a href="http://www.ydcss.com">
                    <m-lazyload data-src="http://r1.ykimg.com/0510000059FB3229ADC0B0707701F370" class="test"></m-lazyload>
                </a>
            </m-slider-item>
            <m-slider-item>
                <a href="http://www.ydcss.com">
                    <m-lazyload data-src="http://static.ydcss.com/uploads/ydui/3.jpg" class="test"></m-lazyload>
                </a>
            </m-slider-item>
            <m-slider-item>
                <a href="http://www.ydcss.com">
                    <m-lazyload data-src="http://static.ydcss.com/uploads/ydui/3.jpg" class="test"></m-lazyload>
                </a>
            </m-slider-item>
            <!--<m-slider-item>-->
            <!--<a href="http://www.ydcss.com">-->
            <!--<img src="http://r1.ykimg.com/0510000059FB3229ADC0B0707701F370">-->
            <!--</a>-->
            <!--</m-slider-item>-->
            <!--<m-slider-item>-->
            <!--<a href="http://www.ydcss.com">-->
            <!--<img src="http://static.ydcss.com/uploads/ydui/3.jpg">-->
            <!--</a>-->
            <!--</m-slider-item>-->
        </m-slider>
        <m-lazyload data-src="http://static.ydcss.com/uploads/ydui/1.jpg" class="test" noBgImage></m-lazyload>
        <m-lazyload data-src="http://static.ydcss.com/uploads/ydui/1.jpg" class="test" noBgImage></m-lazyload>
        <m-lazyload data-src="http://img0.imgtn.bdimg.com/it/u=3920398476,1501488149&fm=214&gp=0.jpg" class="test"></m-lazyload>
        <m-lazyload data-src="http://r1.ykimg.com/0510000059FB3229ADC0B0707701F370" ></m-lazyload>



    </div>
</template>

<script>
    import { Slider, SliderItem } from '@/components/slider'
    export default {
        name: 'm-index0',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        mounted(){
            this.loading()
//        this.$dialog.confirm({
//            title: '选填标题',
//            mes: '我有一个小毛驴我从来也不骑！',
//            opts: () => {
//                this.$dialog.toast({mes: '你点了确定', timeout: 1000});
//            }
//        });

//        this.$dialog.alert({mes: '消息一出，休想滚动屏幕[移动终端]！'});

//        this.$dialog.toast({
//            mes: '鼠标不错哟！',
//            timeout: 1500,
//            icon: 'success'
//        });

//        this.$dialog.notify({
//            mes: '5秒后自动消失，点我也可以消失！',
//            timeout: 5000,
//            callback: () => {
//                console.log('我走咯！');
//            }
//        });
        },
        components: {
            'm-slider': Slider,
            'm-slider-item': SliderItem
        },
        methods: {
            loading () {
                this.$dialog.preload.open()
                setTimeout( () => {
                    this.$dialog.preload.close()
                },300)
            }

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .hello{
    }
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
    .test{
        width: 100%;
        height: 400px;
    }
    .demo{
        width: 100px;
        height: 10px;
        background-color: #f36;
        transition: all 2s;

    }
</style>
