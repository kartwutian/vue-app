<template>
    <router-link tag="div" class="m-newtab-item" :to="link">
        <span class="m-newtab-item-link">{{ title }}</span>
    </router-link>
</template>

<script type="text/babel">

    export default {
        name: 'm-newtab-item',
        props: {
            link: [String, Object],
            title: String
        }
    }
</script>
