<template>
    <nav class="view-navigation">
        <ul class="view-navigation__list">
            <li 
                v-for="(item, index) in navigation"
                :key="index"
                class="view-navigation__list__item"
            >
                <a :href="item.link">{{ item.title }}</a>

                <template
                    v-if="item.child"    
                >
                    <div 
                        v-for="(child, index) in item.child"
                        :key="index"
                    >
                        {{ child.title }}
                    </div>
                </template>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'ViewNavigation',
    props: {
        navigation: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            
        }
    }
}
</script>

<style lang="scss">
    .view-navigation {

        &__list {
            margin: 0 -25px;
            padding: 0;
            list-style: none; 
            font-size: 18px;

            &__item {
                display: inline-block;
                margin: 0 25px;
            }
        }
    }
</style>