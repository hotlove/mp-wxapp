<template>
  <div class="message-body">
    <div v-for="(item, index) in messageList" :key="index" class="m-t-10 message-content-border">
      <van-row>
        <van-row>
          <div class="m-t-5">
            <van-col span="12">{{ item.title }}</van-col>
            <van-col span="12">
              <div class="text-right">{{ item.time }}</div>
            </van-col>
          </div>
        </van-row>
        <van-row>
          <div class="m-t-10 m-b-5 text-fs-14 text-base">{{ item.value }}</div>
        </van-row>
      </van-row>
    </div>

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
  @import "../../static/css/main.css";

  .message-body {
    padding: 5px 10px;

    .message-content-border {
      border-top: 1px solid #ebecee;
    }

    .message-content-border:last-child {
      border-bottom: 1px solid #ebecee;
    }
  }
</style>
