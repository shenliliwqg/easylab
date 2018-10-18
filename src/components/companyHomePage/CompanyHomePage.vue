<template>
<div class="CompanyHomePage">
  <div id="banner">
    <div class="swiperParent">
      <swiper :options="swiperOption" >
        <!-- slides -->
        <swiper-slide>
          <img src="../../assets/images/banner4.jpg" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/images/banner5.jpg" alt="">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
  <div class="container">
    <div id="ad">
      <!--<img src="../assets/images/banner5.jpg" alt="">-->
    </div>
    <div class="">
      <h1 class="title">
        热门推荐
      </h1>
      <ul class="item">
        <li>
          <router-link to="/">
            <div class="img">

            </div>
          </router-link>
        </li>
      </ul>
    </div>

  </div>
</div>
</template>

<script>
    export default {
        name: "CompanyHomePage",
      data(){
          return {
            swiperOption: {
              loop:true,
              autoplay:true,
              pagination: {
                el: '.swiper-pagination',
                clickable :true,
              }
            }
          }
      }

    }
</script>

<style scoped lang="less">
  #banner {
    margin-bottom: 15px;
    min-width: 1200px;
    img{
      width: 100%;
      min-width: 1200px;
      max-height: 360px;
    }
  }
  #ad{
    height:70px ;
    background: #000;
    margin-bottom: 15px;
    overflow: hidden;
    img{
      overflow: hidden;
    }
  }
  .title{
    line-height: 92px;
    color: #333;
    font-size: 26px;
    text-align: center;
    font-weight: normal;
  }
</style>
