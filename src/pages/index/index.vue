<template>
  <div>
    <i-tab-bar :fixed="true" current="mine">
      <i-tab-bar-item key="remind" icon="remind" current-icon="remind_fill" title="主页"></i-tab-bar-item>
      <i-tab-bar-item key="mine" icon="mine" current-icon="mine_fill" title="我的"></i-tab-bar-item>
    </i-tab-bar>
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
