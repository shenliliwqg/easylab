<template>
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
</template>

<script>
    export default {
        name: "situation"
    }
</script>

<style scoped lang="less">

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
</style>
