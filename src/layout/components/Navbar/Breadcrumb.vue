<template>
    <div class="container">
        <div class="zoom" @click="onClickSwitchSidebarHide">
            <el-icon v-if="storeLayout.sideBarMinExten"><ArrowLeftBold /></el-icon>
            <el-icon v-if="!storeLayout.sideBarMinExten"><ArrowRightBold /></el-icon>
        </div>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">management</a></el-breadcrumb-item>
            <el-breadcrumb-item>list</el-breadcrumb-item>
            <el-breadcrumb-item>detail</el-breadcrumb-item>
        </el-breadcrumb>
  </div>
</template>

<script setup>


///////////////////////////////////
// 布局状态，切换
import layoutStore from '../../../store/layout'
const storeLayout = layoutStore();
const onClickSwitchSidebarHide = ()=>{
    storeLayout.switchSidebarExten();
}



</script>

<style lang="scss" scoped>
.container{
    width: 100%;
    height:100%;

    display: flex;
    align-items: center;

    .zoom{
        font-size: 30px;
        padding: 16px 10px 10px 12px;
        color: #aad;
        cursor: pointer;
        :hover{
            color: #aaa;
            background-color: #eee;
            border-radius: 3px;
        }
    }


}
</style>