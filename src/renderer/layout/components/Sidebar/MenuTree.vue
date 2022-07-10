<template>
    <el-menu
        router 
        class="el-menu-vertical-demo"
        :collapse="collapse"
        active-text-color="#ffd04b"
        background-color="#282a34"   
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
    >

        <MenuTreeItem v-for="(item) in $router.options.routes" :item="item" :key="item.path">
        </MenuTreeItem>
    </el-menu>


</template>

<script setup>

import MenuTreeItem from './MenuTreeItem.vue'

import { computed, onMounted, reactive, ref } from 'vue'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

const isCollapse = ref(true)
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}


///////////////////////////////////
// 父值传入
const props = defineProps({
    collapse:Boolean,
})
const {collapse} = toRefs(props)






</script>



<style lang="scss" scoped>

.menutree{
    width:100%;
    height:100%;
}


.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}


</style>