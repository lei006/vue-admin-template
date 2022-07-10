<template>
    <div class="system-button text-no-select" :style="{  'color': color, }" @click="onClick">
        <div v-if="state=='stop'" class="system-button-icon" ><slot name="icon"><span class="icon iconfont icon-stop-circle-full"></span></slot></div>
        <div v-if="state=='run'" class="system-button-icon" style="color:green;"><slot name="icon"><span class="icon iconfont icon iconfont icon-yunhang"></span></slot></div>
        <div v-if="state=='error'" class="system-button-icon" style="color:red;"><slot name="icon"><span class="icon iconfont icon-yichang_weixian"></span></slot></div>
        <div class="system-button-text"><slot>状态</slot></div>
    </div>
</template>

<script>

export default {

    props: {
        text: {
          type: String,
          default: ''
        },
        color: {
          type: String,
          default: '#222'
        },
        state:{
          type: String,
          default: 'stop'
        }
    },



    data() {
        return {
        }
    },
    methods: {
        onClick(e){
            this.$emit("click", e);
        }
    }
}
</script>

<style lang="scss" scoped>


.system-button {

    min-width: 34px;
    height:34px;
    line-height: 34px;
  
    padding: 5px;

    border-radius: 3px;

    margin-right: 5px;

    display: flex;
    justify-content: center;
    align-items: center;

  cursor: pointer;   
}

.system-button:hover {
  background-color: #ccc;
  color: #fff;
}


.system-button-icon{
    font-size: 24px;
    display: flex;
}

.system-button-text{
    margin-left: 5px;
}


</style>
