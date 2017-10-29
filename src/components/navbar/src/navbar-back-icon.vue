<template>
    <span><i class="vfont icon-back" :style="{color: color}"></i><slot></slot></span>
</template>

<script type="text/babel">

    export default {
        name: 'm-navbar-back-icon',
        props: {
            color: {
                validator(value) {
                    if(!value) return true;
                    return $utils.isColor(value);
                },
                default: '#5C5C5C'
            }
        }
    }
</script>
