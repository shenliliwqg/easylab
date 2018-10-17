<!--模板-->
<template>
  <div id="app">
    <headers></headers>
    <router-view></router-view>
    <footers></footers>
    <bounce></bounce>
  </div>
</template>
<!--行为-->
<script>
  import Headers from './header_footer/headers'
  import Footers from './header_footer/footers'
export default {
  name: 'App',
  components:{
    Headers,Footers
  }

}
</script>
<!--样式-->
<style lang="less">
  *{
    padding: 0;
    margin: 0;
    list-style: none;
    font-family: 'microsoft yahei';
    text-decoration: none;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  body{
    background: #F0F0F0;
    font-size: 12px;
  }
  a{
    color: #666;
  }
  .container{
    width:1200px ;
    margin: 0 auto;
    &:after{
      content: '';
      clear: both;
      display: block;
      height: 0;
    }
  }
  .fl{
    float: left;
  }
  .fr{
    float: right;
  }
  .text-center{
    text-align: center;
  }
  .text-left{
    text-align: left;
  }
  .text-right{
    text-align: right;
  }
  .clearfix{
    clear: both;
    &:after{
      content: '';
      clear: both;
      display: block;
      height: 0;
    }
  }
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
  /*下拉样式*/
  .dropdown{
    position: relative;
    z-index: 1;
    text-align: center;
    left: 0;
    min-width: 100px;
    a{
      display: block;
    }
    .dropdown_arrow a:after{
      content: '';
      margin-left: 4px;
      display: inline-block;
      border: 4px solid transparent;
      border-top-color: #666 ;
    }
    &:hover{
        .dropdown_content{
          display: block;
        }
    }
    .dropdown_content {
      position: absolute;
      width: 100%;
      top: 100%;
      display: none;
      border-left: 1px solid #ddd;
      border-right: 1px solid #ddd;
      border-bottom: 1px solid #ddd;
    }
  }
  /*flex*/
  .flex{
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    .flex-1{
      -webkit-box-flex: 1;/*2,3*/
      -moz-box-flex: 1;/*2,3*/
      -ms-flex: 1;/*2,3*/
    }
  }
  .information h1{
    line-height: 36px;
    padding:0 16px ;
    color: #333;
    font-size: 16px;
    font-weight: normal;
    border-bottom: 1px solid #eee;
    .more{
      font-size: 12px;
      line-height: 36px;
      color: #666;
      float: right;
    }
  }
  /*评价*/
  .stars b{
    width: 12px;
    height: 12px;
    display: inline-block;
    vertical-align: middle;
    margin-top: -2px;
    background: url(./assets/images/star-off.png) no-repeat 0 0;
    background-size: 100%;
    &.active{
      background: url(./assets/images/star-on.png) no-repeat 0 0;
      background-size: 100%;
    }
  }

  .swiper-pagination-bullet{
    width: 6px;
    height: 6px;
  }
  .swiper-pagination-bullet-active{
    background: #fff;
  }
</style>
