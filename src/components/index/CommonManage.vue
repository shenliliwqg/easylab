<template>
  <div class="CommonManage">
    <h1>常用管理</h1>
    <dl v-for="list in managementList">
      <dt>
        {{list.cateory}}
      </dt>
      <dd>
        <a v-for="v in list.list" target="_blank" :href="v.url">{{v.name}}</a>
      </dd>
    </dl>
  </div>
</template>

<script>
    export default {
      name: "CommonManage",
      data(){
          return {
          }
      },
      props:{
        managementList: {
          type: Array,
          // 对象或数组且一定会从一个工厂函数返回默认值
          default: function () {
          }
        },

      }

    }
</script>

<style lang="less" scoped>
  .CommonManage{
    background: #fff;
    h1{
      height:40px;
      padding-left: 47px;
      line-height:40px;
      font-size:16px;
      font-weight:400;
      color:rgba(94,7,140,1);
      position: relative;
      &:before{
        content: '';
        display: inline-block;
        width:19px;
        height:18px;
        background: #000;
        position: absolute;
        top: 11px;
        left: 15px;
      }
    }
    dl{
      border-top: 1px solid #f0f0f0;
      padding: 15px;
      dt{
        font-size: 14px;
        color: #333;
        margin-bottom: 6px;
      }
      dd a{
        color: #999;
        margin-right: 10px;
        &:hover{
          color: rgba(94,7,140,1);
        }
      }
    }
  }

</style>
