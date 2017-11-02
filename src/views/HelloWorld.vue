<template>

  <div class="hello">
    <m-slider autoplay="3000">
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

  </div>
</template>

<script>
import { Slider, SliderItem } from '@/components/slider'
console.log(Slider)
console.log(SliderItem)
export default {
    name: 'HelloWorld',
    data () {
        return {
          msg: 'Welcome to Your Vue.js App'
        }
    },
    components: {
        'm-slider': Slider,
        'm-slider-item': SliderItem
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .hello{
        height: 1000px;
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
</style>
