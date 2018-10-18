<template>
  <div>
    <h1><span>预约动态</span><a target="_blank" href="javascript:void(0)" class="more">更多&gt;</a></h1>
    <ul>
      <li>
        <a href="/news/detail?id=257&amp;type=3" class="clearfix">
          <span class="item-content">天津市人民政府办公厅关于天津市人民政府办公厅关于天津市人民政府办公厅关于</span>
        </a>
      </li>
      <li>
        <a href="/news/detail?id=257&amp;type=3" class="clearfix">
          <span class="item-content">天津市人民政府办公厅关于天津市人民政府办公厅关于天津市人民政府办公厅关于</span>
        </a>
      </li>
      <li>
        <a href="/news/detail?id=257&amp;type=3" class="clearfix">
          <span class="item-content">天津市人民政府办公厅关于天津市人民政府办公厅关于天津市人民政府办公厅关于</span>
        </a>
      </li>
      <li>
        <a href="/news/detail?id=257&amp;type=3" class="clearfix">
          <span class="item-content">天津市人民政府办公厅关于天津市人民政府办公厅关于天津市人民政府办公厅关于天津市人民政府办公厅关于天津市人民政府办公厅关于天津市人民政府办公厅关于天津市人民政府办公厅关于天津市人民政府办公厅关于天津市人民政府办公厅关于天津市人民政府办公厅关于天津市人民政府办公厅关于天津市人民政府办公厅关于</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "appointment"
    }
</script>

<style scoped lang="less">
  .information{
    ul{
      padding: 8px 27px 8px 22px;
      li{
        font-size: 12px;
        line-height: 26px;
        color: #666;
        a{
          display: block;
          color: #666;
        }
        span.item-content{
          float: left;
          position: relative;
          padding-left: 10px;
          max-width: 100%;
          -ms-text-overflow: ellipsis;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        &:before{
           content: '.';
           display: inline-block;
           font-size: 24px;
           top: -8px;
           left: 0;
           position: absolute;
         }
        }
        &:hover{
          a{
            color: #5E078C;
            &:before{
              color: #5E078C;
            }
          }
        }
      }
    }
  }
</style>
