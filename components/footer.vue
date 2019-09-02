<template>
  <div class="footer">
    <div class="fmian">
      <el-row type="flex" class='mtop'>
        <dl>
          <dt>闲云旅游旅游网</dt>
          <dd>上亿旅行者共同打造的"旅行神器"</dd>
          <dd>以视觉方式显示信息的装置</dd>
          <dd>60,000 多个全球旅游目的地</dd>
          <dd>600,000 个细分目的地新玩法</dd>
          <dd>760,000,000 次攻略下载</dd>
          <dd>38,000 家旅游产品供应商</dd>
        </dl>

        <dl>
          <dt>关于我们</dt>
          <dd>隐私政策 商标声明</dd>
          <dd>服务协议 游记协议</dd>
          <dd>商城平台服务协议</dd>
          <dd>网络信息侵权通知指引</dd>
          <dd>闲云旅游旅游网服务监督员</dd>
          <dd>网站地图加入闲云旅游</dd>
        </dl>

        <dl>
          <dt>旅行服务</dt>
          <dd>旅游攻略 酒店预订</dd>
          <dd>旅游特价 国际租车</dd>
          <dd>旅游问答 旅游保险</dd>
          <dd>旅游指南 订火车票</dd>
          <dd>旅游资讯 APP下载</dd>
        </dl>

        <div class="erweima">
          <img src="../assets/images/1556522965.png" alt />

          <p>关注我们</p>
        </div>
      </el-row>
      <div class="copy">京ICP备08001421号 京公网安备110108007702 Copyright © 2016-2019 博学谷 All Rights Reserved</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang='less'>
.footer {
  background-color: #333333;
  padding: 0 45px;
}
.fmian {
  width: 1000px;
  margin: 0 auto;
  color: #cccccc;

  .mtop{
    border-bottom: 1px solid #666;
    padding: 30px;
  dl {

    flex: 1;
    dt {
      margin-bottom: 18px;
    }
    dd {
      height: 20px;
      font-size: 12px;
    }
  }
  }
}

.erweima {
  text-align: center;
  img {
    width: 140px;
  }
}

.copy{
  text-align: center;
  
    padding: 50px 0;
      font-size: 12px;

}
</style>