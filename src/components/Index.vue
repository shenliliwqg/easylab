<template>
    <div class="container content" >
      <!--常用管理-->
      <div id="commonManage" class="fl">
        <commonManage></commonManage>
      </div>
      <div id="mainContent" class="fl">
        <!--平台公告-->
        <div id="platformAnnouncement">
          <b></b><span>平台公告：2018年8月1日起，平台将对所有服务方店铺进行审查，没有认证的店铺将被强制停业整顿，直到认证通过!</span>
        </div>
        <!--概况-->
        <div id="overview" class="clearfix">
          <span class="fl">概况</span>
          <ul class="flex">
            <li class="apparatus flex-1">
              <div class="img">
                <img src="" alt="">
              </div>
              <div class="count">
                <h2>仪器数量</h2>
                <div class="flex">
                  <p class="flex-1">
                    <span>上架</span> <b>230</b>
                  </p>
                  <p class="flex-1 total">
                    <span>总数</span> <u>320</u>
                  </p>
                </div>
              </div>
            </li>
            <li class="service flex-1">
              <div class="img">
                <img src="" alt="">
              </div>
              <div class="count">
                <h2>仪器数量</h2>
                <div class="flex">
                  <p class="flex-1">
                    <span>上架</span> <b>230</b>
                  </p>
                  <p class="flex-1 total">
                    <span>总数</span> <u>320</u>
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <!--待办事项-->
        <div id="todo">
          <span class="fl">待办事项</span>
          <ul class="flex">
            <li class="flex-1">
              <div>
                <h2>新咨询</h2>
                <p>
                  <b>23</b>
                  <span>条</span>
                </p>
              </div>
            </li>
            <li class="flex-1">
              <div>
                <h2>新咨询</h2>
                <p>
                  <b>23</b>
                  <span>条</span>
                </p>
              </div>
            </li>
            <li class="flex-1">
              <div>
                <h2>新咨询</h2>
                <p>
                  <b>23</b>
                  <span>条</span>
                </p>
              </div>
            </li>
            <li class="flex-1">
              <div>
                <h2>新咨询</h2>
                <p>
                  <b>23</b>
                  <span>条</span>
                </p>
              </div>
            </li>
          </ul>
        </div>
        <!--预约动态-->
        <div id="appointment" class="information">
          <appointment></appointment>
        </div>
        <!--商机速递-->
        <div id="businessDelivery" class="information">
          <h1>
            <span>商机速递</span>
          </h1>
          <businessDelivery></businessDelivery>
        </div>
      </div>
      <div id="rightContent" class="fl">
        <!--店铺信息-->
        <div id="user_info">
          <div class="storeInfo">
            <a href='http://task.yikexue.com/org/shop_index?uid=12301' style="cursor:pointer" class="clearfix">
              <div class="img">
                <img src="../assets/images/detail.png" onerror="this.src='../assets/images/detail.png'" alt="">
                <span v-if="true" class="certified">已认证</span>
                <span v-else class="uncertified">未认证</span>
              </div>
              <div class="scoreName">
                <h1>中关村●分析测试中心</h1>
                <div class="evaluate">
                  <p class=""><label>服务次数：</label><b>8538</b><label>次</label></p>
                  <p>
                    <span>综合评价：</span>
                    <span class="stars">
                      <b class="active"></b>
                      <b class="active"></b>
                      <b class="active"></b>
                      <b class=""></b>
                      <b class=""></b>
                    </span>
                  </p>
                </div>
              </div>
            </a>
          </div>
          <p id="edit">
            <span>店铺状态：
              <b v-show="shopState=='opening'" class="state opening" >营业中</b>
              <b v-show="shopState=='rest'" class="state rest" >暂停营业</b></span>
            <a href="#" class="btn" @click="editShopState" id="editState" >修改</a>
          </p>
        </div>
        <!--立即报名-->
        <div class="signUpImmediately">
          <div class="img">
            <a href="">
              <img src="../assets/images/3.jpg" alt="">
            </a>
          </div>
          <p>
            <a href="" class="btn">立即报名</a>
          </p>
        </div>
        <!--易科学公开课-->
        <div id="public" class="information">
          <h1>
           <span>易科学公开课</span>
            <a href="" class="more">更多&gt;</a>
          </h1>
          <div class="swiperParent">
            <swiper :options="swiperOption" >
              <!-- slides -->
              <swiper-slide>
                <img src="../assets/images/banner4.jpg" alt="">
              </swiper-slide>
              <swiper-slide>
                <img src="../assets/images/banner_service.jpg" alt="">
              </swiper-slide>
              <swiper-slide>
                <img src="../assets/images/banner5.jpg" alt="">
              </swiper-slide>
              <!-- Optional controls -->
              <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
          </div>
        </div>
        <!--增值业务-->
        <div id="valueAdded" class="information">
          <h1>
            <span>增值业务</span>
            <a href="" class="more">更多&gt;</a>
          </h1>
          <ul>
            <li>
              <a href="">
                <b class="purple">业务系统</b>
                <span>易科学CRM管理系统</span>
              </a>
            </li>
            <li>
              <a href="">
                <b class="purple">业务系统</b>
                <span>易科学CRM管理系统</span>
              </a>
            </li>
            <li>
              <a href="">
                <b class="purple">业务系统</b>
                <span>易科学CRM管理系统</span>
              </a>
            </li>
            <li>
              <a href="">
                <b class="purple">业务系统</b>
                <span>易科学CRM管理系统</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
  import CommonManage from './CommonManage'
  import appointment from './appointment'
  import businessDelivery from './businessDelivery'
    export default {
      name: "index",
      components:{
        CommonManage,
        appointment,
        businessDelivery
      },
      data () {
        return {
          shopState:'opening',
          swiperOption: {
            loop:true,
            autoplay:true,
            pagination: {
              el: '.swiper-pagination',
              clickable :true,
            }
          },
        }
      },
      methods:{
      //  修改店铺状态
        editShopState:function () {
          document.querySelector('#mask').style.cssText='display:block';
        },
      //  保存店铺状态
        saveState:function () {
          document.querySelector('#mask .save').onclick=function(){
            let $className=this.shopState= document.querySelector('#mask input[name="storeState"]:checked').id;
            document.querySelectorAll('b.state').forEach(function (value,item) {
              value.style.cssText='display:none';
            });
            document.querySelector('b.state.'+$className).style.cssText='display:inline';
            console.log( document.querySelector('b.state.'+$className));
            document.querySelector('#mask').style.cssText="display:none";
          }
        }
      },
      mounted(){
        this.saveState();
        let elem='<div class="storeState">' +
          '<div class="img opening">\n' +
          '            </div>\n' +
          '            <p>\n' +
          '\n' +
          '            <span>\n' +
          '              <input type="radio" id="opening" name="storeState" checked>\n' +
          '              <b></b>\n' +
          '            </span>\n' +
          '              <label for="opening">营业中</label>\n' +
          '              <span>\n' +
          '              <input type="radio" id="rest"  name="storeState">\n' +
          '              <b></b>\n' +

          '            </span>\n' +
          '              <label for="rest">暂停营业</label>\n' +
          '            </p>' +
          '</div>';
        this.bounce('修改店铺状态',elem);
        document.getElementById('opening').onclick=function(){
          document.querySelector('.storeState .img').className='img opening';
        };
        document.getElementById('rest').onclick=function(){
          document.querySelector('.storeState .img').className='img rest';
        }
      }
    }
</script>

<style scoped lang="less">
  .btn{
    display: inline-block;
    padding: 0 15px;
    height:18px;
    background:rgba(255,255,255,1);
    border:1px solid rgba(255,102,0,1);
    border-radius:9px;
    font-size: 12px;
    color: #f60;
    text-align: center;
  }
  #commonManage{
    width:190/1200*100%;
  }
  #mainContent{
    width:740/1200*100%;
    margin:0 15/1200*100%;
  }
  #rightContent{
    width:240/1200*100%;
  }
  /**/
  #platformAnnouncement{
    background: #fff;
    height:36px;
    line-height:36px;
    padding: 0 18px;
    color: #C11920;
    margin-bottom: 15px;
    b{
      display: inline-block;
      width:20px;
      background: #DC2229;
      vertical-align: top;
      position: relative;
      top: 10px;
      margin-right: 10px;
      height:16px;
    }
  }
  #overview{
    height: 90px;
    margin-bottom: 15px;
    >span{
      width: 40px;
      height: 100%;
      padding:26px 12px ;
      background: #1976D2;
      color: #fff;
      font-size: 16px;
    }
    ul.flex{
      background: #fff;
      height: 100%;
      li.flex-1{
        padding:17px 40px;
        @color:rgba(25,118,210,1);
        &.service{
          @color:#49C68C;
          .img{
            background:@color;
          }
          h2{
            color:@color;
          }
          b{
            color: @color;
          }
        }
        .img{
          float: left;
          width:56px;
          height:56px;
          background:@color;
          border-radius:50%;
          margin-right: 18px;
        }
        h2{
          font-size:16px;
          font-weight:400;
          color:@color;
          line-height:21px;
          margin-bottom: 7px;
        }
        b{
          color: @color;
        }
        span{
          color: #9999;
          font-size: 14px;
        }
        b{
            font-size: 24px;
            font-weight: normal;
          margin-left: 4px;
          }
        u{
          font-size: 18px;
          color: #666;
          margin-left: 4px;
        }
        .flex-1{
          width: 100%;
          &.total{
            padding-top: 6px;
          }
        }
      }
    }
  }
  /*代办事项*/
  #todo{
    height:132px ;
    background: #fff;
    margin-bottom: 15px;
    >span{
      width: 40px;
      height: 100%;
      padding:26px 12px ;
      background: #78C3D3;
      color: #fff;
      font-size: 16px;
    }
    ul{
      height: 100%;
    }
    li{
      padding:16px;
      height: 100%;
      div{
        height: 100%;
        padding: 26px 16px;
        background: #78C3D3;
        color: #fff;
        *{
          font-weight: normal;
        }
        h2{
          font-size: 16px;
        }
        p{
          font-size: 14px;
          b{
            font-size: 24px;
            margin-right: 4px;

          }
        }
      }
    }
  }
  /*预约动态*/
  #businessDelivery,#appointment{
    background: #fff;
    margin-bottom: 15px;
  }
  /*右侧样式*/
  #user_info{
    background: #fff;
    padding: 14px 16px 0;
    >a{
      display: block;
    }
    div.img{
      float: left;
      width: 50/208*100%;
      >img{
        width: 50px;
        height: 50px;
        display: block;
        margin-bottom: 12px;
      }
      span{
        display: block;
        width:46px;
        height:16px;
        background: #5E078C;
        font-size: 12px;
        color: #fff;
        margin: 0 auto;
        text-align: center;
      }
    }
    div.scoreName{
      width: (208-50)/208*100%;
      float: left;
      padding-left: 17px;
      h1{
        font-size:14px;
        font-weight:bold;
        color:rgba(102,102,102,1);
        line-height:20px;
        margin: 10px 0;
      }
      .evaluate{
        font-size:12px;
        font-weight:500;
        color:rgba(153,153,153,1);
        line-height:18px;
        b{
          font-weight: normal;
          color: #f60;
        }
      }
    }
    #edit{
      border-top: 1px solid #dcdcdc;
      width: 240px;
      margin-left: -16px;
      padding: 8px 16px;
      font-size: 12px;
      color: #666;
      margin-top: 16px;
      b{
        font-weight: normal;
        color: #5E078C;
        &.rest{
          color: #999;
        }
      }
      .btn{
        float: right;
      }
    }
  }
  .signUpImmediately{
    background: #fff;
    margin-top: 15px;
    .img{
      width: 100%;
      height: 96px;
      a{
        display: block;
      }
      img{
        width: 100%;
        height: 96px;
      }
    }
    p{
      height: 30px;
      text-align: center;
      padding: 6px ;
    }
  }
  /*公开课*/
   #valueAdded, #public{
      background: #fff;
      margin-top: 15px;
      h1{
        color: #666;
        font-size: 14px;
      }
   }
  .swiperParent{
    width: 100%;
    height: 80px;
    img{
      width: 100%;
      height: 80px;
    }
  }
  #valueAdded{
    ul{
      padding: 0 16px 12px;
    }
    li{
      padding-top:12px ;
      b{
        display: inline-block;
        width:62px;
        height:16px;
        background:rgba(94,7,140,1);
        -webkit-border-radius: 2px;
        -moz-border-radius: 2px;
        border-radius: 2px;
        font-size: 12px;
        color: #fff;
        font-weight: normal;
        line-height: 16px;
        text-align: center;
        &.green{
          background:#2AC63D;
        }
      }
    }
  }
</style>
