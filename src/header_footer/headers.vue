<template>
  <div id="headers">
    <!--顶部导航-->
    <div id="top">
      <div class="container">
        <div class="fl">
          <div class="dropdown fl">
            <p class="dropdown_arrow"><a href="">甄老师</a></p>
            <div class="dropdown_content">
              <p><a href="">个人中心</a></p>
              <p><a href="">实验服务</a></p>
              <p><a href="">需求大厅</a></p>
            </div>
          </div>
          <div class="message fl">
            <a href="">
              <u></u>
              <span>新消息</span>
              <b>99</b>
            </a>
          </div>
        </div>
        <div class="fr">
          <div class="dropdown fl">
            <p class="dropdown_arrow"><a href="www.yikexue.com">易科学首页</a></p>
            <div class="dropdown_content fl">
              <p><a href="">仪器共享</a></p>
              <p><a href="">实验服务</a></p>
              <p><a href="">需求大厅</a></p>
            </div>
          </div>
          <div class="dropdown fl">
            <p class="dropdown_arrow"><a href="">我的易科学</a></p>
            <div class="dropdown_content fl">
              <p><a href="">卖家中心</a></p>
              <p><a href="">买家中心</a></p>
            </div>
          </div>
          <div class="help fl">
              <a href="">帮助中心</a>
          </div>
        </div>
      </div>
    </div>
    <!--nav-->
    <div id="nav">
      <div class="container">
        <div id="logo" class="fl">
          <img src="../assets/images/logo.png" alt="">
        </div>
        <div class="fl navs">
          <ul>
            <li class="fl">
                <a href="">首页</a>
            </li>
            <li class="fl dropdown">
              <p class="dropdown_arrow">
                <a href="">基础设置</a>
              </p>
              <div class="dropdown_content">
              </div>
            </li>
            <li class="fl">
                <a href="">获客渠道</a>
            </li>
            <li class="fl">
                <a href="">公司主页</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "headers",
    data(){
      return {
        msg:'headers'
      }

    }
  }
</script>

<style scoped lang="less">
  #top{
    width:100%;
    height:32px;
    background:rgba(240,240,240,1);
    .container{
      >.fl{
        width: 50%;
      }
      .fr{
        @width:4;
        width:(280+@width*3)/1200*100%;
        >div{
          margin-left:unit(@width,px);
        }
      }
      a{
        line-height: 32px;
        font-size: 12px;
      }
      .dropdown{
        min-width:100px ;
        p:after{
          border-top-color: #666 ;
        }
        p{
          background:rgba(240,240,240,1) ;
          &:hover{

            background:darken(rgba(240,240,240,1),10%) ;
          }
        }
        &:hover{
          >p{
            background:darken(rgba(240,240,240,1),10%) ;
          }
        }
      }
    }
    .message{
      text-align: center;
      *{
        font-weight: normal;
        display: inline-block;
        vertical-align: top;
        margin:0 2px;
        cursor: pointer;
      }
      u{
        width:13px;
        height:10px;
        background: #5E078C;
        line-height: 32px;
        position: relative;
        top: 11px;
      }
      b{
        color: #5E078C;
      }
      &:hover{
        background: darken(rgba(240,240,240,1),10%);
      }
    }
    .help{
      min-width: 80px;
      text-align: center;
      a{
        display: block;
        &:hover{
        background: darken(rgba(240,240,240,1),10%);
      }
      }
    }
  }
  #nav{
    width:100%;
    height:60px;
    background:rgba(94,7,140,1);
    margin-bottom: 15px;
    .navs{
      a{
        display: block;
        line-height: 60px;
        padding:0 20px ;
        color: #fff;
        font-size:16px;
        &:after{
          border-top-color: #fff;
        }
        &:hover{
          background:darken(rgba(94,7,140,1),10%);
        }
      }
      .dropdown{
        height: 60px;
      }
    }
  }
  #logo{
    width:183px;
    height:40px;
    margin:10px 46px 0 0;
    img{
      width: 100%;
      height: 100%;
    }
  }
</style>
