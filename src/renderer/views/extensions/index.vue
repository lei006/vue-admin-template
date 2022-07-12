<template>
  <div >
    页面一·----状态使用示例:{{ustoreId.counter}}------
  <div @click="onClick">add</div>


    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>卡片名称</span>
        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
      </div>
      <div v-for="o in 4" :key="o" class="text item">
        {{'列表内容 ' + o }}
      </div>
    </el-card>


  </div>

</template>

<script>

import storeId from '@/store/index'  //storeId就是导出的那个值

export default {
  name: 'page01',

  data() {
    return {
      title: '主控面板',
      ustoreId:{},
    }
  },
  
  mounted(){
    this.ustoreId = storeId();
  },
  methods: {
    fetchData() {

    },
    onBtnJump(path_name, tool) {
      this.$router.push({ name: path_name, query: {tool:tool} })
    },
    onClick(){
      this.ustoreId.increment();
    }
  }

}
</script>


<style scoped>

.page-box {
  width: 100%;
  height: 100%;
  color: red;
}


</style>

