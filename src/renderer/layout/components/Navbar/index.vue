<template>
    <div class="navbar-container">
        <div class="left">
            <Breadcrumb></Breadcrumb>
        </div>
        <div class="right">
            <SystemMenu></SystemMenu>
        </div>
    </div>
</template>

<script setup>

import Breadcrumb from './Breadcrumb.vue'
import SystemMenu from './SystemMenu.vue'



</script>

<style lang="scss" scoped>
  @import "../../../styles/variables.scss";

.navbar-container{
    width: 100%;
    height: 40px;
    background-color: $navbarBg;

    display: flex;
    flex-direction: row;
    justify-content:flex-start;
    align-items: center;
    .left{
        flex:1;
        height:100%;
    }  
    .right{
        height:100%;
    }
    
    border-bottom-style:solid;
	border-bottom-width:1px;
    border-bottom-color: #eee;
}


</style>