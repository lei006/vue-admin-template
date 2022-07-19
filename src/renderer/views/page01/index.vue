<template>
  <div >
    页面一·----状态使用示例:{{ustoreId.counter}}------
  <div @click="onClick">add</div>
  </div>

</template>

<script>


export default {
  name: 'page01',

  data() {
    return {
      title: '主控面板',
      ustoreId:{},
    }
  },
  
  mounted(){
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

