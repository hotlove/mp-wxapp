<template>
  <div class="container" @click="clickHandle">
    <div class="message">{{msg}}</div>
    <div>
        <i-button @click="skipPage" type="success" size="small">点击跳转</i-button>
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
