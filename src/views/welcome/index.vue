
<template>
    <dir class="welcome-container">
        <img src="../../assets/images/welcome.jpg" alt="">
    </dir>
</template>

<script>
export default {
  created () {
    this.$http.get('articles').then()
  }
}
</script>

<style lang="less">
.welcome-container{
text-align: center;
}

</style>
