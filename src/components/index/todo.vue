<template>

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
</template>

<script>
    export default {
        name: "todo"
    }
</script>

<style scoped lang="less">

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
</style>
