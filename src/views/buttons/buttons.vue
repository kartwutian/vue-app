<template>
    <m-layout>
        <m-navbar bgcolor="#fff" color="#f36" title="buttons" ref="navbar" slot="top" >
            <m-navbar-back-icon slot="left"></m-navbar-back-icon>
            <m-navbar-next-icon slot="right"  link="/buttons"></m-navbar-next-icon>
        </m-navbar>
        <m-button-group >

            <m-button type="primary" >primary</m-button>
            <m-button type="danger" >danger</m-button>
            <m-button type="warning" >warning</m-button>
            <m-button type="hollow" >hollow</m-button>

            <m-button @click.native="show1 = true" size="large" type="primary" >primary</m-button>
            <m-button @click.native="show2 = true" size="large" type="danger" >danger</m-button>
            <m-button size="large" type="warning" >warning</m-button>
            <m-button size="large" type="disabled" disabled >disabled</m-button>
            <m-button size="large" type="hollow" >hollow</m-button>
            <m-button size="large" bgcolor="#000" color="#FFF" >Custom Color</m-button>

        </m-button-group>

        <m-actionsheet :items="myItems1" v-model="show1" cancel="取消"></m-actionsheet>

        <m-actionsheet :items="myItems2" v-model="show2"></m-actionsheet>
    </m-layout>

</template>

<script>
export default {
    name: 'm-buttons',
    data() {
        return {
            show1: false,
            show2: false,
            myItems1: [
                {
                    label: '拍照',
                    callback: () => {
                        this.$dialog.toast({mes: '咔擦，此人太帅！', timeout: 1000});
                        //注意： callback: function() {} 和 callback() {}  这样是无法正常使用当前this的
                    }
                },
                {
                    label: '从相册中偷取',
                    callback: () => {
                        this.$dialog.toast({mes: '看到了不该看到的东西！', timeout: 1000});
                    }
                }
            ],
            myItems2: [
                {
                    label: '示例菜单一 - 我是不会关闭的',
                    callback: () => {
                        this.$dialog.toast({mes: 'Say: 我是不会关闭的！', timeout: 1000});
                    },
                    stay: true // 不关闭
                },
                {
                    label: '示例菜单二 - 自动关闭',
                    callback: () => {
                        this.$dialog.toast({mes: 'Say: 我关闭啦啦啦！', timeout: 1000});
                    }
                },
                {label: '示例菜单三 - 自动关闭'},
                {label: '示例菜单四 - 自动关闭'}
            ]
        }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
