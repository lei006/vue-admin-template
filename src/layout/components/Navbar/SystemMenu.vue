
<template>
    <div class="container">
        <div class="item">
            <el-icon color="#409EFC" :size="20"><Edit /></el-icon>
        </div>
        <div class="item">
            <el-icon><RefreshRight /></el-icon>
        </div>

        <div class="item">
            <el-icon><FullScreen /></el-icon>
        </div>
        <div class="item">
            <el-icon><Delete /></el-icon>
        </div>
        <div class="item">
            <el-icon color="#409EFC" class="is-loading"><Loading /></el-icon>
        </div>
        <div class="item">
            <el-dropdown>
                <span class="el-dropdown-link">
                    <el-icon color="#409EFC" :size="25"><User /></el-icon>
                    <el-icon class="el-icon--right"><arrow-down /></el-icon>
                </span>
                <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item :icon="Plus">Action 1</el-dropdown-item>
                    <el-dropdown-item :icon="CirclePlusFilled">Action 2</el-dropdown-item>
                    <el-dropdown-item :icon="CirclePlus">Action 3</el-dropdown-item>
                    <el-dropdown-item :icon="Check">Action 4</el-dropdown-item>
                    <el-dropdown-item :icon="CircleCheck">退出登录</el-dropdown-item>
                </el-dropdown-menu>
                </template>
            </el-dropdown>


        </div>
    </div>
</template>

<script lang="ts" setup>
import {
  ArrowDown,
  Check,
  CircleCheck,
  CirclePlus,
  CirclePlusFilled,
  Plus,
} from '@element-plus/icons-vue'
</script>


<style lang="scss" scoped>
.container{
    width: 100%;
    height:100%;
    padding-right:10px;

    display: flex;
    align-items: center;
    .item{
        
        min-width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        color:"#409EFC";
        cursor: pointer;
        font-size: 18px;
        padding-left: 10px;
        padding-right: 10px;

        display: flex;
        justify-content: center;
        align-items: center;

        .el-dropdown-link {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    .item:hover{
        background-color: #aaaaaa44;
        border-radius: 3px;
    }
}
</style>
