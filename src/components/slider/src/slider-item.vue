<template>
    <div class="slider-item">
        <slot></slot>
    </div>
</template>

<script type="text/babel">
    export default {
        name: 'm-slider-item',
        mounted() {
            this.$parent.init();
        }
    }
</script>
