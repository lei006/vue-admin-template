<template>
  <div class="app-wrapper" ref="tmp">
    <div class="left-container">
        <Sidebar></Sidebar>
    </div>

    <div class="right-container">
        <Navbar></Navbar>
        <AppMain></AppMain>
    </div>
  </div>
  <FloatPanel></FloatPanel>
</template>

<script setup>
import {AppMain,Navbar,Sidebar, FloatPanel, TagsView} from './components/index'

</script>


<style lang="scss" scoped>
  @import "../styles/variables.scss";

.app-wrapper{
    position: relative;
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: row;
}

.left-container{
    height: 100%;
    background-color: $sidebarBg;

    border-right-style:solid;
	border-right-width:1px;
    border-right-color: #eee;
}

.right-container{
    flex:1;
    height: 100%;
    background-color: $appMainBg;

    display: flex;
    flex-direction: column;
}


</style>