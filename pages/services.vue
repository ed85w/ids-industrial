<template>
    <div class="page-content">
        <h1>services</h1>
    </div>
</template>

<script>
export default {
    mounted () {
        // add class to navbar to identify not home page 
        document.getElementById('nav-menu').classList.add('not-home')
    },
    destroyed () {
        document.getElementById('nav-menu').classList.remove('not-home')
    }

}
</script>

<style lang="scss">

</style>