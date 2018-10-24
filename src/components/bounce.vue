<template>
    <div id="mask">
        <div class="mask_content" >
          <h1 class="title">{{maskTitle}}</h1>
          <div class="content">
            <slot name="storeState"></slot>
          </div>
          <div class="btns">
            <button class="save btn" @click="clickSave">
              保存
            </button>
            <button class="btn cancel" @click="maskHide">取消</button>
          </div>
        </div>
    </div>
</template>

<script>
  export default {
      name: "bounce",
      props:{
        maskTitle:{
          type:String,
          default:'标题'
        }
      },
    methods:{
      maskHide:function () {
        //两个参数：参数1 key 参数2：数据集
        this.$emit('clickCancel',false)
      },
      clickSave:function () {
        //两个参数：参数1 key 参数2：数据集
        this.$emit('clickSave',false)
      }
    }
  }


</script>

<style  lang="less" scoped>
  #mask{
    position: fixed;
    /*display: none;*/
    height: 100%;
    width: 100%;
    background: rgba(0,0,0,0.6);
    top: 0;
    left: 0;
    z-index: 100;
    .mask_content{
      width: 450px;
      background: #fff;
      text-align: center;
      padding-bottom: 36px;
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%,-50%);
      -moz-transform: translate(-50%,-50%);
      -ms-transform: translate(-50%,-50%);
      -o-transform: translate(-50%,-50%);
      transform: translate(-50%,-50%);
      .title{
        border-bottom: 1px solid #ddd;
        height:50px;
        font-size:16px;
        font-weight:400;
        color:rgba(85,85,85,1);
        line-height:50px;
      }
      .btns{
        margin-top:22px ;
        .btn{
          width:103px;
          height:36px;
          line-height: 34px;
          border: 1px solid #ddd;
          color: #666;
          background: #fff;
          cursor: pointer;
          margin: 0 4px;
          &:hover{
            opacity: 0.8;
          }
          &.save{
            border: 1px solid #f60;
            background:rgba(255,102,0,1);
            color: #fff;
            &:hover{
              background: lighten(rgba(255,102,0,1),10%);
            }
          }

        }
      }
    }
  }

</style>
