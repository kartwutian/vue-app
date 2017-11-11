<template>
    <router-link :to="href" class="m-list-item" v-if="type == 'link'">
        <div class="m-list-img">
            <slot name="img"></slot>
        </div>
        <div class="m-list-mes">
            <div class="m-list-title">
                <slot name="title"></slot>
            </div>
            <slot name="other"></slot>
        </div>
    </router-link>
    <a :href="href || 'javascript:;'" class="m-list-item" v-else-if="type == 'a'">
        <div class="m-list-img">
            <slot name="img"></slot>
        </div>
        <div class="m-list-mes">
            <div class="m-list-title">
                <slot name="title"></slot>
            </div>
            <slot name="other"></slot>
        </div>
    </a>
    <div class="m-list-item" v-else>
        <div class="m-list-img">
            <slot name="img"></slot>
        </div>
        <div class="m-list-mes">
            <div class="m-list-title">
                <slot name="title"></slot>
            </div>
            <slot name="other"></slot>
        </div>
    </div>
</template>

<script type="text/babel">
    export default {
        name: 'm-list-item',
        props: {
            type: {
                type: String,
                validator (value) {
                    return ['link', 'a', 'div'].indexOf(value) > -1;
                },
                default: 'a'
            },
            href: [String, Object]
        }
    }
</script>
