<template>
    <el-tabs :tab-position="tabPosition" style="height: 100%" class="demo-tabs">
        <el-tab-pane v-for="panel in panelArray" :key="panel" label="User">
            <template v-slot:label>
                <div class="tabs-button-box">
                    <div class="tabs-button-item" :class="{'is-active':panel.active}" @click="onItemClick(panel)">
                        <el-icon size="20px"><Apple /></el-icon>
                        {{panel.title}}
                    </div>
                </div>
            </template>

        </el-tab-pane>
    </el-tabs>
</template>

<script setup>


let logo_url = "../../../assets/logo.png";

const tabPosition = ref('left')

let panelArray = ref([{title:"首页", icon:"Check", active:true},{title:"Page0", icon:"Check"},{title:"Page1", icon:"Check"},{title:"Page2", icon:"Check"},])

const onItemClick = (item)=>{

    panelArray.value.forEach((panel) => {
        panel.active = false;
    });

    item.active = true;
}

///////////////////////////////////
// 父值传入
const props = defineProps({
    collapse:Boolean,
})
const {collapse} = toRefs(props)



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


</style>

