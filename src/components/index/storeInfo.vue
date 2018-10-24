<template>
  <div id="user_info">
    <div class="storeInfo">
      <a href='http://task.yikexue.com/org/shop_index?uid=12301' style="cursor:pointer" class="clearfix">
        <div class="img">
          <img src="../../assets/images/detail.png" onerror="this.src='../assets/images/detail.png'" alt="">
          <span v-if="certified" class="certified">已认证</span>
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
              <b v-if="shopState || currentShopState" class="state opening" >营业中</b>
              <b v-else class="state rest" >暂停营业</b></span>
      <a href="#" class="btn" @click="editShopState" id="editState">修改</a>
    </p>
    <bounce :maskTitle="maskTitle" v-show="maskShow" @clickCancel="clickCancel" @clickSave="clickSave">
      <div class="storeState" slot="storeState">
        <div class="img opening">
        </div>
        <p>
          <span><input type="radio" id="opening" @click="selectShopState=true" name="storeState" checked><b></b></span>
          <label for="opening">营业中</label>
          <span>
             <input type="radio" @click="selectShopState=false" id="rest"  name="storeState">
             <b></b>
          </span>
          <label for="rest">暂停营业</label>
        </p>
      </div>
    </bounce>
  </div>
</template>

<script>
    export default {
        name: "store_info",
      data(){
          return {
            maskShow:false,
            maskTitle:'修改店铺状态',
            currentShopState:false,
            selectShopState:true,
          }
      },
      props:{
        certified:false,
        shopState:false
      },
      methods:{
        //  修改店铺状态
        editShopState:function () {
          //两个参数 1key 2.数据
          this.maskShow=true
        },
        //  保存店铺状态
        saveState:function () {
         this.maskShow=false;
        },
        clickCancel:function (data) {
          this.maskShow=data;
        },
        clickSave:function (data) {
          this.currentShopState=this.selectShopState;
          this.maskShow=data;
        }
      },
      // mounted(){
      //   this.saveState();
      // }
    }
</script>

<style scoped lang="less">

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

    .storeState{
      padding-top: 20px;
      .img{
        width:54px;
        height:44px;
        display: block;
        float: none;
        margin: 0 auto 20px;
        background: url("../../assets/images/3.jpg");
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
  }
</style>
