<template>
    <div :class="lazyClass" :style="styles">
        <img class="m-lazy-img" :class="imgClass" :data-src="dataSrc" :data-srcset="dataSrcset" :data-backgroundImage="dataBackgroundImage" alt="">
    </div>
</template>

<script type="text/babel">
    export default {
        name: 'm-lazyload',
        data () {
            return {
                colors: ['#f8d5ed','#d7d2cc','#7f8881','#68af7e','#876662','#eadacd','#ced8d9','#cfd7da','#bac4b4','#c2abb2','#beab93','#e9edf2','#b5c0d3']
            }
        },
        props: {
            'dataSrc': String,
            'dataSrcset': String,
            'dataBackgroundImage': String,
            'noBgImage': Boolean,
            'imgClass': {
                type: String,
                default: 'lozad'
            },
            'width': Number,
            'height': Number,
            'radio': Number
        },
        mounted () {
            const observer = lozad('.'+this.imgClass, {
                rootMargin: '10px 0px', // syntax similar to that of CSS Margin
                threshold: 0.1, // ratio of element convergence
                load: function load(element) {
                    if (element.getAttribute('data-src')) {
                        element.src = element.getAttribute('data-src');
                    }
                    if (element.getAttribute('data-srcset')) {
                        element.srcset = element.getAttribute('data-srcset');
                    }
                    if (element.getAttribute('data-background-image')) {
                        element.style.backgroundImage = 'url(' + element.getAttribute('data-background-image') + ')';
                    }
                    element.onload = function () {
                        this.className += ' m-lazy-img-loaded'
                    }
                    element.onerror = function () {
                        this.src = 'http://static.ydcss.com/uploads/ydui/2.jpg'
                        this.className += ' m-lazy-img-loaded'
                    }
                }
            })
            observer.observe()
        },
        computed: {
            styles (){
                return {
                    backgroundColor: this.randomColor()
                }
            },
            lazyClass (){
               return this.noBgImage ? 'm-lazy': 'm-lazyBg'
            }
        },
        methods: {
            randomColor () {
                return this.colors[Math.round(Math.random()*this.colors.length)]
            }
        }
    }
</script>

<style lang="less">
    @import "../../../styles/components/lazyload.less";
</style>
