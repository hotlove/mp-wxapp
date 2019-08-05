<template>
  <div>
    <van-cell-group>
      <van-cell v-for="(item, index) in messageList"
                :title="item.title"
                :value="item.time"
                :label="item.value"
                :border="true"
                :key="index"/>
    </van-cell-group>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        messageList: [
          {
            title: '消息1',
            time: '2019-8-5',
            value: '这是一条普通得商城消息没什么得'
          },{
            title: '消息1',
            time: '2019-8-5',
            value: '这是一条普通得商城消息没什么得'
          },{
            title: '消息1',
            time: '2019-8-5',
            value: '这是一条普通得商城消息没什么得'
          },{
            title: '消息1',
            time: '2019-8-5',
            value: '这是一条普通得商城消息没什么得'
          },{
            title: '消息1',
            time: '2019-8-5',
            value: '这是一条普通得商城消息没什么得'
          },{
            title: '消息1',
            time: '2019-8-5',
            value: '这是一条普通得商城消息没什么得'
          }
        ]
      };
    },
    methods: {}
  };
</script>

<style lang="scss">
</style>
