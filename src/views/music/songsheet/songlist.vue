<template>
    <div>
        <ul>
            <li class="song-list-item" v-for="item in songs" :key="item.songname">
                <h2 class="name">{{item.songname}}</h2>
                <p class="desc">{{item.singer[0].name + ' | '+ (item.singer[1]?item.singer[1].name:'')+ ' ' +item.songorig}}</p>
            </li>
        </ul>
    </div>
</template>

<script type="text/babel">
    export default {
        props: {
            songs: {
                type: Array
            }
        },
        computed: {

        }

    }
</script>

<style lang="less" >

    .song-list-item{
        padding: 0 .4rem;
        line-height: .5rem;
        .name{
            font-size: 14px;
            font-weight: normal;
            color: #d65252;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }
        .desc{
            font-size: 12px;
            color: #c5baba;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }
    }

</style>
