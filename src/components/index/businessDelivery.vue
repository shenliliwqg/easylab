<template>
<div class="businessDelivery">
  <p>你的联系方式被查看了<b>165次</b>，请及时联系不要错过商机，超过3天的商机将隐藏，如需重新获取请联系易科学平台。</p>
  <div class="scaners">
    <div>
      <span class="checkbox"><input type="checkbox" :checked="checked"  @click="checkedAll"  id="selectAll"><b></b></span>
      <button v-on:click="alreadConnect">设为已联系</button>
      <b>是否已联系</b>
      <select name="" id=""  v-model="selectYesOrNo">
        <option value="all">全部</option>
        <option value='false'>否</option>
        <option value="true">是</option>
      </select>
    </div>
    <table width="100%">
      <thead>
        <tr>
          <th width="20%">时间</th>
          <th width="15%">用户昵称</th>
          <th width="20%">联系方式</th>
          <th width="30%">查看仪器/服务</th>
          <th width="15%">是否已联系</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in businessList" v-show="item.isChecked==showOrHide || selectYesOrNo=='all'">
          <td>
            <span class="checkbox"><input v-model='checkboxModel[index]' type="checkbox"><b></b></span>
            <span class="time">{{item.time}}</span>
          </td>
          <td>{{item.uname}}</td>
          <td>{{item.phone}}</td>
          <td>{{item.apparatus_service}}</td>
          <td>
            <section class="model-3">
              <div class="checkbox">
                <input v-model="item.isChecked" class="yesOrNo" type="checkbox"
                                 v-bind:data-target="index"/>
                <label></label>
                <span class="yes">是</span>
                <span class="no">否</span>
              </div>
            </section>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</template>
<script>
    export default {
      name: "businessDelivery",
      data(){
          return {
            checkboxModel:[],
            businessList:[],
            checked:false,
            isConnect:[],
            yesOrNo:[],
            len:0,
            selectYesOrNo:"all",
            showOrHide:true
          }
      },
      //定义方法
      methods:{
        alreadConnect:function () {
            for(let i=0;i<this.len;i++){
              if(this.checkboxModel[i]){
                this.businessList[i].isChecked=true
              }
            }
        },
        //如果选中了全选
        checkedAll:function () {
          this.checked=!this.checked
          if(this.checked){
            for(let i=0;i<this.len;i++) {
              this.checkboxModel[i]=true
            }
          }else{
            for(let i=0;i<this.len;i++) {
              this.checkboxModel[i]=false
            }
          }
        },
        checkedOne:function (checkboxModel) {
          if(checkboxModel.indexOf(false)==-1){
            this.checked=true
          }else{
            this.checked=false
          }
        },
        selectChange:function (selectYesOrNo) {
         if(selectYesOrNo=='false'){
           this.showOrHide=false
         }else if(selectYesOrNo=='true'){
           this.showOrHide=true
         }
        }
      },
      watch:{
        checkboxModel(index){
          this.checkedOne(index)
        },
        selectYesOrNo(value){
          this.selectChange(value)
        }
      },
      created(){
        this.businessList=[
          {
            time:'2018-02-06 10:12',
            uname:'张老师',
            phone:'15600231689',
            apparatus_service:'XRF X射线荧光光谱测试',
            isChecked:true
          },
          {
            time:'2018-02-06 10:12',
            uname:'刘老师',
            phone:'15100231434',
            apparatus_service:'一荧光光谱测试',
            isChecked:false
          },
          {
            time:'2018-02-06 10:12',
            uname:'张老师',
            phone:'15300264490',
            apparatus_service:'XRF X射线荧光光谱测试',
            isChecked:true
          }
        ];
        this.len=this.businessList.length;
        for(let i=0;i<this.len;i++) {
          this.checkboxModel.push(false)
          this.yesOrNo.push(false)
        }
      }
    }
</script>

<style scoped lang="less">
  @import "../../assets/css/default.css";
  @import "../../assets/css/normalize.css";
  @import "../../assets/css/styles.css";

  #businessDelivery{
    background: #fff;
    margin-bottom: 15px;
  }
  .businessDelivery{
    background: #fff;
    padding-bottom: 26px;
    >p{
      padding: 15px;
      font-size: 12px;
      color: #999;
      b{
        color: #5E078C;
        font-weight: normal;
      }
    }
    .scaners{
      padding: 0 16px;
      >div{
        padding: 0 12px;
        button{
          width:80px;
          height:18px;
          background:rgba(255,255,255,1);
          border:1px solid rgba(229,229,229,1);
          border-radius:9px;
          font-size:12px;
          font-weight:400;
          color:rgba(102,102,102,1);
          line-height:16px;
          vertical-align: middle;
          cursor: pointer;
          margin: 0 12px ;
          outline: none;
          &:hover{
            background: #5E078C;
            border-color: #5E078C;
            color: #fff;
          }
        }
        >b{
          font-weight: normal;
          font-size:12px;
          color:rgba(102,102,102,1);
          line-height:18px;
          margin-right: 10px;
        }
        select{
          width:58px;
          cursor: pointer;
          height:20px;
          background:rgba(255,255,255,1);
          border:1px solid rgba(229,229,229,1);
          font-size:12px;
          font-weight:400;
          color:rgba(102,102,102,1);
          line-height:18px;
        }
      }
      span.checkbox{
        position: relative;
        width:14px;
        vertical-align: middle;
        height:14px;
        display: inline-block;
        input,b{
          width:14px;
          height:14px;
          background:rgba(255,255,255,1);
          border:2px solid rgba(211,211,211,1);
          border-radius:2px;
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          cursor: pointer;
        }
        input{
          z-index:1;
          opacity: 0;
          &:checked+b{
            background: url('../../assets/images/checked.png') -2px -2px;
            border: none;
          }
        }
      }
      table{
        margin-top:10px;
        border-collapse: collapse;
        text-align: center;
        th{
          height: 36px;
          font-weight: normal;
          background: #f4f4f4;
          color: #333;
        }
        td{
          padding: 10px 0;
          font-size: 12px;
          color: #666;
        }
        span.time{
          display: inline-block;
          vertical-align: middle;
        }
        tbody tr:nth-child(even){
          background: #f4f4f4;
        }
      }
    }
  }
</style>
