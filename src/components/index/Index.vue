<template>
    <div class="container content" >
      <!--常用管理-->
      <div id="commonManage" class="fl">
        <commonManage :managementList="managementList"></commonManage>
      </div>
      <div id="mainContent" class="fl">
        <!--平台公告-->
        <platformAnnouncement></platformAnnouncement>
        <!--概况-->
        <Situation></Situation>
        <!--待办事项-->
        <Todo></Todo>
        <!--预约动态-->
        <appointment></appointment>
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
        <StoreInfo :certified="certified"></StoreInfo>
        <!--立即报名-->
        <div class="signUpImmediately">
          <div class="img">
            <a href="">
              <img src="../../assets/images/3.jpg" alt="">
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
                <img src="../../assets/images/banner4.jpg" alt="">
              </swiper-slide>
              <swiper-slide>
                <img src="../../assets/images/banner_service.jpg" alt="">
              </swiper-slide>
              <swiper-slide>
                <img src="../../assets/images/banner5.jpg" alt="">
              </swiper-slide>
              <!-- Optional controls -->
              <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
          </div>
        </div>
        <!--增值业务-->
        <div v-if="valueAdded.length>0" id="valueAdded" class="information">
          <h1>
            <span>增值业务</span>
            <a href="" class="more">更多&gt;</a>
          </h1>
          <ul>
            <li v-for="item in valueAdded">
              <a href="">
                <b class="purple">{{item.type}}</b>
                <span>{{item.name}}</span>
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
  import Situation from './situation'
  import Todo from './todo'
  import StoreInfo from './storeInfo'
  import platformAnnouncement from './platformAnnouncement'

    export default {
      name: "index",
      components:{
        CommonManage,
        appointment,
        businessDelivery,
        Situation,
        Todo,
        StoreInfo,
        platformAnnouncement
      },
      data () {
        return {
          shopState:'opening',
          certified:true,
          valueAdded:[],
          swiperOption: {
            loop:true,
            autoplay:true,
            pagination: {
              el: '.swiper-pagination',
              clickable :true,
            }
          },
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
                  name:'添加交易',
                  url:"http://www.yikexue.com"
                },
                {
                  name:'交易列表',
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
      },
      methods:{
      },
      created(){
        this.valueAdded=[
          {
            type:'业务系统',
            name:'易科学CRM管理系统'
          }
        ]
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
  /*预约动态*/
  #businessDelivery{
    background: #fff;
    margin-bottom: 15px;
  }
  /*右侧样式*/
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
