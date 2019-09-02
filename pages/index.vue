<template>
  <div class="index">
    <el-carousel>
      <el-carousel-item v-for="(item,index) in banners" :key="index">
        <div
        arrow="always"
          class="arr-img"
          :style="`
                background:url(${$axios.defaults.baseURL+item.url}) center center no-repeat;
                background-size:contain contain;`"
        ></div>
      </el-carousel-item>
    </el-carousel>
<!-- (${ $axios.defaults.baseURL + item.url}) -->
    <!-- 搜索bar -->
    <div class="banner-content">
      <div class="search-bar">
        <!-- tab栏 -->
        <el-row type="flex" class="search-tab">
          <span
            v-for="(item,index) in options"
            :key="index"
            :class="{active:current===index}"
            @click="handleOption(index)"
          >
            <i>{{item.title}}</i>
          </span>
        </el-row>
        <!-- 搜索输入框 -->
        <el-row type="flex" align="middle" class="search-input">
          <input
            type="text"
            :placeholder="options[current].placeholder"
            @keyup.enter="handleSearch"
            v-model="searchValue"
          />
          <i class="el-icon-search" @click="handleSearch"></i>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchValue: "",
      current: 0,
      banners: [],
      // imgArr: [
      //   {
      //     url: "http://157.122.54.189:9095/assets/images/th03.jfif"
      //   },
      //   {
      //     url: "http://chuantu.xyz/t6/702/1567408689x3070492242.jpg"
      //   },
      //   {
      //     url: "http://chuantu.xyz/t6/702/1567408753x3070492242.jpg"
      //   },
      //   {
      //     url: "http://chuantu.xyz/t6/702/1567410042x3070492242.jpg"
      //   }
      // ],
      options: [
        {
          title: "攻略",
          placeholder: "搜索城市"
        },
        {
          title: "酒店",
          placeholder: "请输入城市搜索酒店"
        },
        {
          title: "机票",
          placeholder: ""
        }
      ]
    };
  },
  methods: {
    handleOption(index) {
      this.current = index;
      if (this.current === 2) {
        this.$router.push("/air");
      }
    },
    handleSearch() {}
  },
  mounted(){
    this.$axios({
      url:'/scenics/banners'
    })
    .then((res)=>{
      console.log(res);
      this.banners=res.data.data
      
    })
  }

};
</script>
<style lang="less" scoped>
// 生成乱码,...     /deep/

/deep/ .el-carousel__container {
  height: 700px;
}

.arr-img {
  width: 100%;
  height: 100%;
}

.banner-content {
  z-index: 9;
  width: 1000px;
  position: absolute;
  left: 50%;
  top: 45%;
  margin-left: -500px;
  border-top: 1px transparent solid;

  .search-bar {
    width: 552px;
    margin: 0 auto;
  }

  .search-tab {
    .active {
      i {
        color: #333;
      }
      &::after {
        background: #eee;
      }
    }

    span {
      width: 82px;
      height: 36px;
      display: block;
      position: relative;
      margin-right: 8px;
      cursor: pointer;

      i {
        position: absolute;
        z-index: 2;
        display: block;
        width: 100%;
        height: 100%;
        line-height: 30px;
        text-align: center;
        color: #fff;
      }

      &:after {
        position: absolute;
        left: 0;
        top: 0;
        display: block;
        content: "";
        width: 100%;
        height: 100%;
        border: 1px rgba(255, 255, 255, 0.2) solid;
        border-bottom: none;
        transform: scale(1.1, 1.3) perspective(0.7em) rotateX(2.2deg);
        transform-origin: bottom left;
        background: rgba(0, 0, 0, 0.5);
        border-radius: 1px 2px 0 0;
        box-sizing: border-box;
      }
    }
  }

  .search-input {
    width: 550px;
    height: 46px;
    background: #fff;
    border-radius: 0 4px 4px 4px;
    border: 1px rgba(255, 255, 255, 0.2) solid;
    border-top: none;
    box-sizing: unset;

    input {
      flex: 1;
      height: 20px;
      padding: 13px 15px;
      outline: none;
      border: 0;
      font-size: 16px;
    }

    .el-icon-search {
      cursor: pointer;
      font-size: 22px;
      padding: 0 10px;
      font-weight: bold;
    }
  }
}
</style>