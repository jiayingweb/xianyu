<template>
  <div class="tab" style="margin-left:100px;margin-top:100px;">
    <div class="tabs">
      <span v-for="(item, index) in ['新闻', '体育', '娱乐']" :key="index" @click="handleClick(index)" :class="{ active:current===index}">{{item}}</span>
      <!-- v-for="(item, index) in ['新闻', '体育', '娱乐']" :key="index" -->
    </div>

    <div v-show="current=== 0">
      <ul >
        <li>中秋</li>
        <li>中秋</li>
        <li>中秋</li>
      </ul>
    </div>
    <div v-show="current===1">
      <ul>
        <li>国庆</li>
        <li>国庆</li>
        <li>国庆</li>
      </ul>
    </div>

    <div v-show="current=== 2">
      <ul>
        <li>端午</li>
        <li>端午</li>
        <li>端午</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            current:0
        }
    },
    methods:{
        handleClick(index){
            this.current=index;
        }
    }
};
</script>

<style lang='less' scoped>
.tabs {
  margin-bottom: 15px;
  span{
      padding: 10px;
      cursor: pointer;
  }
}
.active{
    color:red;
}
</style>