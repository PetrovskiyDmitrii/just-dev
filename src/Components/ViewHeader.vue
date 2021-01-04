<template>
    <header class="view-header">
        <div class="view-header__logotype">
            <img src="../assets/images/logo.png" alt="Logotype">
        </div>
        <ViewNavigation :navigation="navigationTop"/>
        <ViewNavigation :navigation="navigationBottom"/>
    </header>
</template>

<script>
import ViewNavigation from './ViewNavigation';

export default {
    name: 'ViewHeader',
    components: {
        ViewNavigation
    },
    data() {
        return {
            navigationTop: [
                {
                    title: 'Home',
                    link: '/',
                    child: [
                        {
                            title: '1',
                            link: '1'
                        }, {
                            title: '2',
                            link: '2'
                        }, {
                            title: '3',
                            link: '4'
                        }
                    ]
                }, {
                    title: 'About',
                    link: '/about'
                }, {
                    title: 'Service',
                    link: '/service'
                }, {
                    title: 'Blog',
                    link: '/blog'
                }, {
                    title: 'Contacts',
                    link: '/contacts'
                }
            ],
            navigationBottom: [
                {
                    title: 'Home',
                    link: '/',
                }, {
                    title: 'About',
                    link: '/about'
                }, {
                    title: 'Service',
                    link: '/service'
                }, {
                    title: 'Blog',
                    link: '/blog'
                }, {
                    title: 'Contacts',
                    link: '/contacts'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    .view-header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        &__logotype {
            width: 100%;
            max-width: 125px;

            img {
                width: 100%;
            }
        }
    }
</style>