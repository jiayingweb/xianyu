<template>
  <section class="contianer">
    <el-row type="flex" justify="space-between">
      <!-- 顶部过滤列表 -->
      <div class="flights-content">
        <!-- 过滤条件 -->
        <div></div>

        <!-- 航班头部布局 -->
        <div>
          <FlightsListHead />
        </div>

        <!-- 航班信息 -->
        <div>
          <FlightsItem v-for="(item,index) in dateList" :key="index" :data="item" />

          <!-- 分页 -->
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="pageNum"
            :page-sizes="[3, 5, 7, 10]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
          ></el-pagination>
        </div>
      </div>

      <!-- 侧边栏 -->
      <div class="aside">
        <!-- 侧边栏组件 -->
      </div>
    </el-row>
  </section>
</template>

<script>
import FlightsListHead from "@/components/air/flightsListHead.vue";
import FlightsItem from "@/components/air/flightsItem.vue";

export default {
  data() {
    return {
      flightList: {},
      dateList: [],
      total:0,
      pageNum:1,
      pageSize:5,
    };
  },
  components: {
    FlightsListHead,
    FlightsItem
  },
  mounted() {
    this.$axios({
      url: "/airs",
      params: this.$route.query
    }).then(res => {
      console.log(res);
      this.flightList = res.data; //航班的总数据

    //   this.dateList = this.flightList.flights;

    //   分页总数
    this.total=this.flightList.total
    // 根据上面默认的数据进行默认展示
    this.setdateList()
    });
  },
  methods:{

    //   因为这里数据不是不送请求的,是直接通过数组进行数据的操作获取的
    // 设置数据数组
    setdateList(){
        // 设置slice的参数.一个是从哪里开始剪切,到哪里结束(不包括本身)索引
        const start= (this.pageNum - 1)*this.pageSize; //哪里开始
        const end= this.pageNum * this.pageSize; //哪里结束
        this.dateList=this.flightList.flights.slice(start,end)
    },


      handleSizeChange(val) {9
        console.log(`每页 ${val} 条`);
        this.pageSize=val;
        // 回到第一页显示
         this.pageNum=1;

        this.setdateList()

        // 先默认第一页,给参数计算

      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
         this.pageNum=val;
        this.setdateList()
      }
  }
};
</script>

<style scoped lang="less">
.contianer {
  width: 1000px;
  margin: 20px auto;
}

.flights-content {
  width: 745px;
  font-size: 14px;
}

.aside {
  width: 240px;
}
</style>