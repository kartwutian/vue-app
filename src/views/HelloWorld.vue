<template>

    <div class="hello">

        <m-slider autoplay="5000">
            <m-slider-item>
                <a href="http://www.ydcss.com">
                    <img src="http://static.ydcss.com/uploads/ydui/1.jpg">
                </a>
            </m-slider-item>
            <m-slider-item>
                <a href="http://www.ydcss.com">
                    <img src="http://static.ydcss.com/uploads/ydui/2.jpg">
                </a>
            </m-slider-item>
            <m-slider-item>
                <a href="http://www.ydcss.com">
                    <img src="http://static.ydcss.com/uploads/ydui/3.jpg">
                </a>
            </m-slider-item>
        </m-slider>
        <m-lazyload data-src="http://static.ydcss.com/uploads/ydui/1.jpg" class="test" noBgImage></m-lazyload>
        <m-lazyload data-src="http://static.ydcss.com/uploads/ydui/1.jpg" class="test" noBgImage></m-lazyload>
        <m-lazyload data-src="http://img0.imgtn.bdimg.com/it/u=3920398476,1501488149&fm=214&gp=0.jpg" class="test"></m-lazyload>
        <m-lazyload data-src="http://r1.ykimg.com/0510000059FB3229ADC0B0707701F370" ></m-lazyload>


    </div>
</template>

<script>
import { Slider, SliderItem } from '@/components/slider'
import { Lazyload } from '@/components/Lazyload'
import { BScroll } from '@/components/bscroll'
export default {
    name: 'HelloWorld',
    data () {
        return {
          msg: 'Welcome to Your Vue.js App'
        }
    },
    mounted(){

    },
    components: {
        'm-slider': Slider,
        'm-slider-item': SliderItem,
        'm-lazyload': Lazyload,
        'm-bscroll': BScroll
    },
    methods: {
        transition(el){
            el.style.cssText = el.style.cssText
        },
        slider(){
            Transform(this.$refs.demo)
            this.$refs.demo.translateX += 100
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
