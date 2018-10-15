<template>
    <div id="mask">
        <div class="mask_content">
          <h1 class="title"></h1>
          <div class="content">

          </div>
          <div class="btns">
            <button class="save btn">
              保存
            </button>
            <button class="btn cancel">取消</button>
          </div>
        </div>
    </div>
</template>

<script>
  export default {
      name: "bounce",
    }


</script>

<style  lang="less">
  #mask{
    position: fixed;
    display: none;
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

  .storeState{
    padding-top: 20px;
    .img{
      width:54px;
      height:44px;
      display: block;
      margin: 0 auto 20px;
      background: url("../assets/images/3.jpg");
      background-size: 100%;
    }
    label{
      font-size: 14px;
      color: #333;
      cursor: pointer;
      margin-right: 10px;
    }
    p{
      span,b,input{
        width:14px;
        cursor: pointer;
        vertical-align: middle;
        height:14px;
        top: -1px;
        line-height: 10px;
        display: inline-block;
        position: relative;

      }
      b{
        border: 2px solid #e5e5e5;
        background: #fff;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
      }
      input{
        position: absolute;
        opacity: 0;
        z-index: 1;
        &:checked+b{
          background: #5D008B;
        }
      }
    }
  }
</style>
