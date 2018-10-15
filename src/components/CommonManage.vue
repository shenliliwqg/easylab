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
            managementList:[
              {
                cateory:"仪器管理",
                list:[
                  {
                    name:'添加仪器',
                    url:"http://www.yikexue.com"
                  },
                  {
                    name:'所有仪器',
                    url:"http://yqgx.yikexue.com/"
                  }
                ]
              },
              {
                cateory:"服务管理",
                list:[
                  {
                    name:'添加服务',
                    url:"http://www.yikexue.com"
                  },
                  {
                    name:'服务列表',
                    url:"http://task.yikexue.com/service?ky="
                  }
                ]

              },
              {
                cateory:"交易管理",
                list:[
                  {
                    name:'添加服务',
                    url:"http://www.yikexue.com"
                  },
                  {
                    name:'服务列表',
                    url:"http://www.yikexue.com"
                  }
                ]

              },
              {
                cateory:"项目管理",
                list:[
                  {
                    name:'跟进中的项目',
                    url:""
                  },
                  {
                    name:'已开展的项目',
                    url:""
                  }
                ]
              }
            ]
          }
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
