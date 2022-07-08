<template>
    <div class="side-bar" >
        <Cascader v-if="storeLayout.sideBarStyle === 'menu-tree'"></Cascader>
        <MenuTree v-if="storeLayout.sideBarStyle === 'cascader'"></MenuTree>
    </div>
</template>

<script setup>
import { ref } from 'vue'

///////////////////////////////////
// 子组件引入..
import Cascader from './cascader.vue'
import MenuTree from './MenuTree.vue'

///////////////////////////////////
// 布局状态引入..
import layoutStore from '../../../store/layout'
const storeLayout = layoutStore();


///////////////////////////////////
// 路由列表
import { useRouter } from 'vue-router';
const router = useRouter();
console.log(router)


</script>

<style lang="scss" scoped>
  @import "../../../styles/variables.scss";

.tabs-button-box{
    width: 64px;
    height: 64px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;

    margin:1px;
}

.tabs-button-item{
    width: 54px;
    height: 54px;
    color: #eee;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;    

    font-size: 14px;
    border-radius: 3px;

    transition: background-color .2s;

}

.tabs-button-item:hover{
    background-color: rgba(24, 144, 255, 0.6);
}

.is-active {
    background-color: rgb(24, 144, 255);
}




.side-bar{
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items:flex-start;

    //background-color: rgb(67, 74, 80);
    background-color: #282a34;

}

.app-logo{
    width: 54px;
    height:54px;
}

.list-box{
    width:100%;
    height: 100%;
}

.list-item{
    width:100%;
    height: 40px;
    color: aquamarine;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items:center;
}

.list-item:hover {
    background-color: #708196;
}

</style>