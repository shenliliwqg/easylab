<template>
  <div id="footers">
    <div class="footers_main">
      <div class="ykx_intro">
        <div class="fl">
          <dl>
            <dt>关于我们</dt>
            <dd><a href="/team/gywm">公司介绍</a></dd>
            <dd><a href="/team/joinus">加入我们</a></dd>
            <dd><a href="/team/media">媒体报道</a></dd>
          </dl>
          <dl>
            <dt>平台服务</dt>
            <dd><a href="/team/service">用户协议</a></dd>
            <dd><a href="/team/privacy">隐私声明</a></dd>
          </dl>
          <dl>
            <dt>联系我们</dt>
            <dd class="help"><a href="http://www.yikexue.com/help" target="_blank">新手帮助</a></dd>
            <dd>商务合作：market@yikexue.com</dd>
            <dd>公司地址：北京市丰台区总部基地17区18号楼501,502,508</dd>
          </dl>
        </div>
        <div class="fl">
          <span class="kefu"></span><h1>010-86468614</h1>
        </div>
        <div class="fr">
          <img src="http://www.yikexue.com/images/index_icon/QR_code.png" alt="">
        </div>
      </div>
      <div class="blogroll">
        <span class="fl">友情链接：</span>
        <div class="fl " id="links">
          <a href="http://www.biodiscover.com/">生物探索</a>
          <a href="http://www.bio360.net/">生物360</a>
          <a href="http://www.iivd.net">小桔灯</a>
          <a href="http://www.seq.cn">测序中国</a>
          <a href="http://www.17025.org/">检测认证网</a>
          <a href="http://www.933.com.tw/">文华轩</a>
          <a href="http://www.blarc.com.cn/  ">北京实验动物研究中心</a>
          <a href="http://www.medicilon.com.cn">美迪西生物医药</a>
          <a href="http://www.vantlab.com/ ">凡特网</a>
          <a href="http://kj.zbj.com?from=10.1">八戒科技服务</a>
          <a href="http://www.ifuhua.com.cn">孵化圈</a>
          <a href="http://www.highjy.com">经验海</a>
          <a href="http://www.hights.cn">高企云</a>
          <a href="http://www.51science.cn/">大学问网</a>
          <a href="http://www.biomedworld.com">沃登医学</a>
          <a href="http://www.techina2025.com">飞天众智</a>
          <a href="http://www.zqtip.com">竹蜻蜓知识产权</a>
          <a href="http://www.shengxin.ren">生信人</a>
          <a href="https://s.yaozh.com/">药智通</a>
          <a href="http://www.51jishu.com">浙江技术市场</a>
          <a href="https://www.pharmacodia.com">药渡网</a>
          <a href="http://www.ebiomall.com">蚂蚁淘</a>
        </div>
      </div>
      <div class="icp_no">
        <p class="">京ICP备15013316号-3  &nbsp;&nbsp;Copyright©2018
          www.yikexue.com All Rights Reserved&nbsp;&nbsp;  北京科天科技有限公司</p>
        <!-- <div class="Trust_Website_Seal">
            <a href="http://webscan.360.cn/index/checkwebsite/url/www.yikexue.com">
                <img src="http://img.webscan.360.cn/status/pai/hash/067d4fb3911c16ba67df822eaf8438d8"/>
            </a>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "footers"
    }
</script>

<style>

  #footers {
    margin-top: 36px;
    background: #383d41;
    font-size: 14px;
    clear: both;
  }
  #footers .footers_main {
    width: 1200px;
    margin: 0 auto;
  }
  #footers .footers_main .ykx_intro {
    padding: 36px 0 20px 0;
    border-bottom: 1px solid #62676b;
  }
  #footers .footers_main .ykx_intro:after {
    display: block;
    height: 0;
    content: '';
    clear: both;
  }
  #footers .footers_main .ykx_intro dl {
    float: left;
    margin-right: 50px;
    text-align: left;
  }
  #footers .footers_main .ykx_intro dl dt {
    font-size: 15px;
    color: #fff;
    font-weight: 400;
    margin-bottom: 15px;
  }
  #footers .footers_main .ykx_intro dl dd {
    line-height: 30px;
    font-size: 14px;
    color: #b3b3b3;
  }
  #footers .footers_main .ykx_intro dl dd a {
    color: #b3b3b3;
  }
  #footers .footers_main .ykx_intro dl dd a:hover {
    color: #fe954c;
  }
  #footers .footers_main .ykx_intro h1 {
    font-size: 40px;
    color: #b3b3b3;
    font-weight: 700;
    padding-top: 30px;
    display: inline-block;
  }
  #footers .footers_main .ykx_intro span.kefu {
    display: inline-block;
    width: 26px;
    height: 33px;
    background: url(http://www.yikexue.com//images/index_icon/kf.png) no-repeat;
    margin-right: 15px;
  }
  #footers .footers_main .ykx_intro:after {
    display: block;
    height: 0;
    content: '';
    clear: both;
  }
  #footers .footers_main .blogroll {
    color: #b3b3b3;
    padding-top: 20px;
  }
  #footers .footers_main .blogroll:after {
    display: block;
    height: 0;
    content: '';
    clear: both;
  }
  #footers .footers_main .blogroll span.fl {
    display: block;
    width: 8.83%;
  }
  #footers .footers_main .blogroll a {
    margin-right: 20px;
  }
  #footers .footers_main .blogroll #links {
    width: 90.33%;
  }
  #footers .footers_main .blogroll #links a {
    color: #b3b3b3;
    float: left;
    font-size: 14px;
  }
  #footers .footers_main .blogroll #links a:hover {
    color: #fe954c;
  }
  #footers .footers_main .icp_no {
    line-height: 64px;
    color: #b3b3b3;
    position: relative;
  }
  #footers .footers_main .icp_no .Trust_Website_Seal {
    width: 95px;
    height: 35px;
    position: absolute;
    right: 0;
    top: 20px;
  }
  #footers .footers_main .icp_no .Trust_Website_Seal img {
    width: 100%;
    height: 100%;
    vertical-align: top;
    margin-top: -4px;
  }
  #msg-notice {
    display: none;
    position: absolute;
    right: -16px;
    top: -4px;
    color: #fff;
    font-size: 12px;
    background-color: #f60;
    width: 15px;
    height: 15px;
    line-height: 15px;
    letter-spacing: -1px;
    border-radius: 50%;
    text-align: center;
  }

</style>
