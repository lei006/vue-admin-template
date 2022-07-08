<template>
  <div class="app-wrapper" ref="tmp">
    <div class="sidebar-container">
        <Sidebar></Sidebar>
    </div>

    <div class="main-container">
        <Navbar></Navbar>
        <AppMain></AppMain>
    </div>
  </div>
  <FloatPanel></FloatPanel>
</template>

<script setup>

import {AppMain,Navbar,Sidebar, FloatPanel} from './components/index'


let obj = reactive({a:1,b:2,test:"awxxxxxxxxxxxx"});

let {test} = toRefs(obj);

let msg = ref("这是测试文本")

let onSet = ()=>{
    obj.a += 100;
    msg.value = "文本有改变";
    console.log(obj, msg)
    test.value += "-";
}
//return {obj, onSet};

onMounted(()=>{
    console.log("onMounted")
})

let msgChange = computed(()=>{
    return msg.value + "后坠" + test.value;
})

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

.sidebar-container{
    height: 100%;
    background-color: $sidebarBg;

    border-right-style:solid;
	border-right-width:1px;
    border-right-color: #eee;
}

.main-container{
    flex:1;
    height: 100%;
    background-color: $appMainBg;

    display: flex;
    flex-direction: column;
}


</style>