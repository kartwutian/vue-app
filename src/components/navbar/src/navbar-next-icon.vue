<template>
    <span><slot></slot><i class="m-next-icon" :style="{color: color}"></i></span>
</template>

<script type="text/babel">

    export default {
        name: 'm-navbar-next-icon',
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
