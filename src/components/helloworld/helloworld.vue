<template>
    <div class="helloworld">
        <h2>{{ message }}</h2>
    </div>
</template>

<script>
    export default {
        name: "helloworld",
        components: {},
        props: {},
        data() {
            return {
                message: "Hello helloworld"
            }
        },
        created() {

        },
        mounted() {

        },
        computed: {

        },
        methods: {

        }
    }
</script>

<style scoped>
    .helloworld {}
</style>