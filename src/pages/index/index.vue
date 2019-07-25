<template>
  <div class="container" @click="clickHandle">
    <div class="message">{{msg}}</div>
    <div @click="skipPage">
      点我跳转页面
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'Hello'
      }
    },

    methods: {
      clickHandle () {
        this.msg = 'Clicked!!!!!!'
      },
      skipPage() {
        this.$router.push({path: '/pages/count/index'});
      }
    }
  }
</script>

<style scoped>
  .message {
    color: red;
    padding: 10px;
    text-align: center;
  }
</style>
