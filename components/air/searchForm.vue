<template>
  <div class="search-form">
    <!-- 头部tab切换 -->
    <el-row type="flex" class="search-tab">
      <span
        v-for="(item, index) in tabs"
        :key="index"
        @click="handleSearchTab(index)"
        :class="{active: index === currentTab}"
      >
        <i :class="item.icon"></i>
        {{item.name}}
      </span>
    </el-row>

    <el-form class="search-form-content" ref="form" label-width="80px">
      <el-form-item label="出发城市">
        <!-- fetch-suggestions 返回输入建议的方法 -->
        <!-- select 点击选中建议项时触发 -->
        <el-autocomplete
          v-model="form.departCity"
          :fetch-suggestions="queryDepartSearch"
          placeholder="请搜索出发城市"
          @select="handleDepartSelect"
          @blur="handleDepartblur"
          class="el-autocomplete"
        ></el-autocomplete>
      </el-form-item>
      <el-form-item label="到达城市">
        <el-autocomplete
          v-model="form.destCity"
          :fetch-suggestions="queryDestSearch"
          placeholder="请搜索到达城市"
          @select="handleDestSelect"
          @blur="handleDestblur"
          class="el-autocomplete"
        ></el-autocomplete>
      </el-form-item>
      <el-form-item label="出发时间">
        <!-- change 用户确认选择日期时触发 -->

        <el-date-picker
          type="date"
          v-model="form.departDate"
          placeholder="请选择日期"
          style="width: 100%;"
          @change="handleDate"
        ></el-date-picker>
      </el-form-item>
      <el-form-item label>
        <el-button style="width:100%;" type="primary" icon="el-icon-search" @click="handleSubmit">搜索</el-button>
      </el-form-item>
      <div class="reverse">
        <span @click="handleReverse">换</span>
      </div>
    </el-form>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  data() {
    return {
      tabs: [
        { icon: "iconfont icondancheng", name: "单程" },
        { icon: "iconfont iconshuangxiang", name: "往返" }
      ],
      currentTab: 0,
      form: {
        departCity: "", // 出发城市
        departCode: "", // 出发城市代码
        destCity: "", // 到达城市
        destCode: "", // 到达城市代码
        departDate: "" // 日期字符串
      },
      // 因为要两个不同的函数,全局拿不到数据数组,索引在里面赋值
      
      departDate:[],
      destDate:[]
    };
  },
  methods: {

    // 解决没完成输入时,就自动默认值bug
    handleDepartblur(){
          // 防止报错,应该判断一下是否为空
          this.form.departCity = this.departDate[0]? this.departDate[0].value:'';
          this.form.departCode =this.departDate[0]? this.departDate[0].slot:'';

    },
    handleDestblur(){
          this.form.destCity = this.destDate[0]? this.destDate[0].value:'';
          this.form.destCode =this.destDate[0]? this.destDate[0].slot:'';

    },
    // tab切换时触发
    handleSearchTab(index) {
      if (index === 1) {
        this.$alert("此功能正在开发中,暂不对外开放", "提示");
      }
    },

    // 出发城市输入框获得焦点时触发
    // value 是选中的值，cb是回调函数，接收要展示的列表
    queryDepartSearch(value, cb) {
      if (!value) {
        cb([]);
        return;
      }
      // 求value值
      this.$axios({
        url: "/airs/city",
        method: "GET",
        params: {
          name: value
        }
      }).then(res => {
        // 数组
        const { data } = res.data;

        // 需要的是
        const downList = [];
        // 循环拿出value值
        data.forEach(v => {
          // 给数组增加value,并且删除市字,replace参数1是要修改的,参数二是改为''
          v.value = v.name.replace("市", "");
          downList.push(v);
        });
        this.departDate=downList
        // 当用户不选中是默认选择第一项
        // if (downList.length > 0) {
        //   this.form.departCity = downList[0].value;
        //   this.form.departCode = downList[0].sort;
        // }
        console.log(downList);
        // cb返回[{value:1}]格式的数据
        cb(downList);
      });
    },

    // 目标城市输入框获得焦点时触发
    // value 是选中的值，cb是回调函数，接收要展示的列表
    queryDestSearch(value, cb) {
        console.log(value);
      if (!value) {
        cb([]);
        return;
      }
      // 求value值
      this.$axios({
        url: "/airs/city",
        method: "GET",
        params: {
          name: value
        }
      }).then(res => {
        // 数组
        const { data } = res.data;

        // 需要的是
        const downList = [];
        // 循环拿出value值
        data.forEach(v => {
          // 给数组增加value,并且删除市字,replace参数1是要修改的,参数二是改为''
          v.value = v.name.replace("市", "");
          downList.push(v);
        });
        this.destDate=downList
        // 当用户不选中是默认选择第一项
        // if (downList.length > 0) {
        //   this.form.destCity = downList[0].value;
        //   this.form.destCode = downList[0].sort;
        // }
        console.log(downList);
        // cb返回[{value:1}]格式的数据
        cb(downList);
      });
    },

    // 出发城市下拉选择时触发
    handleDepartSelect(item) {
      this.form.departCity = item.value;
      this.form.departCode = item.sort;
    },

    // 目标城市下拉选择时触发
    handleDestSelect(item) {
      // console.log(item,123);

      this.form.destCity = item.value;
      this.form.destCode = item.sort;
    },

    // 确认选择日期时触发
    handleDate(value) {
       this.form.departDate= moment(value).format('YYYY-MM-DD')
    },

    // 触发和目标城市切换时触发
    handleReverse() {
    const {destCity,destCode,departCity,departCode} = this.form
      this.form.departCity =destCity;
      this.form.departCode =destCode;
      this.form.destCity =departCity;
      this.form.destCode =departCode;
    },

    // 提交表单是触发
    handleSubmit() {
    const {destCity,departCity,departDate} = this.form
    // if(!destCity){
    //     this.$alert('出发地点不能为空','输入提示')
    //     return;

    // }
    //     if(!departCity){
    //     this.$alert('目的地点不能为空','输入提示')
    //     return;

    // }
    //     if(!departDate){
    //     this.$alert('出发时间不能为空','输入提示')
    //     return;

    // }

     const rules = {
                    depart: {
                        value: this.form.departCity, 
                        message: "请选择出发城市"
                    },
                    dest: {
                        value: this.form.destCity, 
                        message: "请选择到达城市"
                    },
                    departDate: {
                        value: this.form.departDate, 
                        message: "请选择出发时间"
                    },
                }

                let valid = true; // 表单验证结果
                console.log(Object.keys(rules));
                

                Object.keys(rules).forEach(v => {
                    // 只要有一个结果不通过，就停止循环
                    if(!valid) return;
                    const item = rules[v];

                    // 数据字段为空
                    if(!item.value){
                        valid = false;

                        this.$confirm(item.message, '提示', {
                            confirmButtonText: '确定',
                            showCancelButton: false,
                            type: 'warning'
                        })
                    }
                });

                // 不通过验证，不需要往下执行
                if(!valid) return;

      console.log(this.form);

    //   发送搜索请求
    this.$axios({
        url:'',
        method:'GET',
        params:this.form
        
    })
    .then(res=>{
        this.$router.push({
            path:'/air/flights',
            // url携带的参数
            data:this.form
        })
    })
    }
  },
  mounted() {}
};
</script>

<style scoped lang="less">
.search-form {
  border: 1px #ddd solid;
  border-top: none;
  width: 360px;
  height: 350px;
  box-sizing: border-box;
}

.search-tab {
  span {
    display: block;
    flex: 1;
    text-align: center;
    height: 48px;
    line-height: 42px;
    box-sizing: border-box;
    border-top: 3px #eee solid;
    background: #eee;
  }

  .active {
    border-top-color: orange;
    background: #fff;
  }

  i {
    margin-right: 5px;
    font-size: 18px;

    &:first-child {
      font-size: 16px;
    }
  }
}

.search-form-content {
  padding: 15px 50px 15px 15px;
  position: relative;

  .el-autocomplete {
    width: 100%;
  }
}

.reverse {
  position: absolute;
  top: 35px;
  right: 15px;

  &:after,
  &:before {
    display: block;
    content: "";
    position: absolute;
    left: -35px;
    width: 25px;
    height: 1px;
    background: #ccc;
  }

  &:after {
    top: 0;
  }

  &:before {
    top: 60px;
  }

  span {
    display: block;
    position: absolute;
    top: 20px;
    right: 0;
    font-size: 12px;
    background: #999;
    color: #fff;
    width: 20px;
    height: 20px;
    line-height: 18px;
    text-align: center;
    border-radius: 2px;
    cursor: pointer;

    &:after,
    &:before {
      display: block;
      content: "";
      position: absolute;
      left: 10px;
      width: 1px;
      height: 20px;
      background: #ccc;
    }

    &:after {
      top: -20px;
    }

    &:before {
      top: 20px;
    }
  }
}
</style>