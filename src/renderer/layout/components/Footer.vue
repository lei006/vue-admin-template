<template>
  <div class="footer-box text-no-select">
    <div class="footer-box-left">
      <div v-if="cur_Version == last_version">当前版本: {{cur_Version}}</div>
      <div v-if="cur_Version != last_version" style="color:#ff0066;cursor: pointer;" @click="onBtnDownload">下载最新版本: {{last_version}}</div>
    </div>
    <div class="footer-box-right">
      <div class="server-state-group">
        <StateButton :state="state.db" @click="onClickDb">数据库</StateButton>
        <StateButton :state="state.web" @click="onClickWeb">服务器</StateButton>
      </div>
    </div>
  </div>
</template>

<script>

import {StateButton} from '@/components/ButtonCustom'


export default {
  components: {
    StateButton
  },

  data() {
    return {
      url_bottom:"",
      cur_Version:"2021.02.27",
      last_version:"2021.02.27",
      state:{
        db:"stop",
        web:"stop",
      }
    }
  },

  async mounted(){
    let _self = this;

  },

  methods: {
    async logout() {

    },
    onClickDb(){
      if(this.state.db == 'stop') this.state.db = "run";
      else if(this.state.db == 'run') this.state.db = "error";
      else this.state.db = "stop";
    },
    onClickWeb(){
      if(this.state.web == 'stop') this.state.web = "run";
      else if(this.state.web == 'run') this.state.web = "error";
      else this.state.web = "stop";
    },
    onBtnDownload(){

    },
  }
}
</script>

<style lang="scss" scoped>
  .footer-box {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    background: #fff;
    box-shadow: 0 1px 4px rgba(0,21,41,.08);


    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .footer-box-left {
    flex:1;
    padding-left:10px;
  }

  .footer-box-right{
    padding-right:10px;
  }

  .server-state-group{
    display: flex;
  }

  .frame-class{
    width:100%;
    height:100%;
  }


</style>
