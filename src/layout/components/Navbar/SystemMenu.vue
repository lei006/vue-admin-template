
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
            <el-icon color="#409EFC" class="is-loading"><Setting /></el-icon>
        </div>
    </div>
</template>



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

        display: flex;
        justify-content: center;
        align-items: center;
    }
    .item:hover{
        background-color: #aaaaaa44;
        border-radius: 3px;
    }
}
</style>
