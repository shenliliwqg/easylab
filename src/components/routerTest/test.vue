<template>
  <div class="container">
        <ul class="fl">
          <li>
            <router-link :to="{ name: 'js', params: { plan: 'private' }}">
             js
            </router-link>
          </li>
          <li>
            <router-link :to="{ name:'css', params:{count:123}}">
             css
            </router-link>
          </li>
        </ul>
      <div class="fl">
        <!--视图区域-->
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
  export default {
    name: "test",

  }
</script>

<style scoped lang="less">
ul.fl{
  width: 100px;
  margin-bottom: 20px;
  li{
    height: 30px;
    line-height: 30px;
    background: #f6f6f6;
    text-align: center;
    a{
      display: block;
      &:not(.active):hover{
      background: #f90;
        color: #fff;
    }
    }

  }
  div.fl{
    width: 1000px;
    background: #fff;
    padding:10px;

  }
  .active{
    color: #f00;
  }
}
</style>
