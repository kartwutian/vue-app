<template>
    <div class="singer">
        <div>singer</div>
    </div>
</template>

<script type="text/babel">
    import {getSingerList } from '@/api/singer'

    const HOT_NAME = '热门'
    const HOT_SINGER_LEN = 10
    export default {
        name: 'm-singer',
        data () {
            return{
                singers: []
            }
        },
        created () {
            getSingerList().then( (res) => {
                this._normalizeSinger(res.data.list)
            })
        },
        methods: {
            _normalizeSinger(list){
                let map = {
                    hot: {
                        title: HOT_NAME,
                        items: []
                    }
                }
                list.forEach(function(item, index){
                    let singer = {
                        id: item.Fsinger_mid,
                        name: item.Fsinger_name,
                        avatar: `http://y.gtimg.cn/music/photo_new/T001R150x150M000${item.Fsinger_mid}.jpg?max_age=2592000`
                    }
                    if(index < HOT_SINGER_LEN){
                        map.hot.items.push(singer)
                    }
                    const key = item.Findex
                    if(!map[key]){
                        map[key] = {
                            title: key,
                            items: []
                        }
                    }
                    map[key].items.push(singer)
                })
                let hot = []
                let ret = []
                let others = []
                for(let key in map){
                    let val = map[key]
                    if(val.title.match(/[a-zA-Z]/)) {
                        ret.push(val)
                    }else if (val.title === HOT_NAME){
                        hot.push(val)
                    }else{

                        val.title = '#'
                        others.push(val)
                        console.log(others)
                    }
                }
                ret.sort((a,b)=>{
                    return a.title.charCodeAt(0)-b.title.charCodeAt(0)
                })
                console.log((hot.concat(ret)).concat(others))
                return (hot.concat(ret)).concat(others)

            }
        }
    }
</script>

<style >

</style>
