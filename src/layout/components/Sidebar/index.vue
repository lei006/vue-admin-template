<template>
    <div class="container" >
        <div class="logo">
            <AppLogo  :collapse="!sideBarIsCollapse" v-if="storeLayout.appLogoShow === true"></AppLogo>
        </div>
        <div class="router">
            <Cascader :collapse="!sideBarIsCollapse" v-if="storeLayout.sideBarStyle === 'menu-tree'"></Cascader>
            <MenuTree :collapse="!sideBarIsCollapse" v-if="storeLayout.sideBarStyle === 'cascader'"></MenuTree>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

///////////////////////////////////
// 子组件引入..
import Cascader from './cascader.vue'
import MenuTree from './MenuTree.vue'
import AppLogo from './logo.vue'

///////////////////////////////////
// 布局状态引入..
import layoutStore from '../../../store/layout'
const storeLayout = layoutStore();

const {sideBarIsCollapse} = toRefs(storeLayout)


</script>

<style lang="scss" scoped>
  @import "../../../styles/variables.scss";


.container{
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items:flex-start;

    //background-color: rgb(67, 74, 80);
    background-color: #282a34;
}

.container .logo{
    height:64px;
    width:100%;
}
.container .router{
    flex:1;
    width:100%;
}




</style>