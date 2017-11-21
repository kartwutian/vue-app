<template>
    <div>
        <ul>
            <li class="song-list-item" v-for="item in songs" :key="item.songname">
                <h2 class="name">{{item.songname}}</h2>
                <p class="desc">{{item.songorig}}</p>
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
        }
    }
</script>

<style lang="less" >

    .song-list-item{
        padding: 0 .4rem;
        line-height: .5rem;
        .name{
            font-size: 14px;
            color: #f36;
        }
        .desc{
            font-size: 12px;
            color: #666;
        }
    }

</style>
