<template>
  <div class="navbar">
    <hamburger :is-active="sidebar.opened" class="hamburger-container not-allow-select" @toggleClick="toggleSideBar" />
    <breadcrumb class="breadcrumb-container" />
    <div class="navbar-search-box">

      <el-input v-model="inputSearchText" size="small" placeholder="请输入内容" class="input-with-select">
        <el-select slot="prepend" v-model="select" placeholder="请选择" style="width:100px">
          <el-option label="餐厅名" value="1" />
          <el-option label="订单号" value="2" />
          <el-option label="用户电话" value="3" />
        </el-select>
        <el-button slot="append" icon="el-icon-search" />
      </el-input>

    </div>
    <div class="right-menu not-allow-select">
      <el-button v-if="storeLayout.testBtn" type="text" size="mini" class="system-menu-item" @click="onSwitchHideBtn">缩小</el-button>
      <el-button v-if="!storeLayout.testBtn" type="text" size="mini" class="system-menu-item" @click="onSwitchHideBtn">放大</el-button>
      <el-button v-if="storeLayout.testBtn" type="text" class="system-menu-item" size="mini">测试按钮1</el-button>
      <el-button v-if="storeLayout.testBtn" type="text" class="system-menu-item" size="mini">测试按钮2</el-button>
      <el-button v-if="storeLayout.testBtn" type="text" class="system-menu-item" size="mini">测试按钮3</el-button>
      <el-button v-if="storeLayout.testBtn" type="text" class="system-menu-item" size="mini">测试按钮4</el-button>
      <div class="system-menu-item margin-right-mini">
        <el-dropdown trigger="click">
          <el-button type="text" size="mini">超小按钮</el-button>
          <el-dropdown-menu slot="dropdown" class="user-dropdown">
            <router-link to="/">
              <el-dropdown-item>
                个人中心
              </el-dropdown-item>
            </router-link>
            <!--
          <a target="_blank" href="https://github.com/PanJiaChen/vue-admin-template/">
            <el-dropdown-item>Github</el-dropdown-item>
          </a>
          <a target="_blank" href="https://panjiachen.github.io/vue-element-admin-site/#/">
            <el-dropdown-item>Docs</el-dropdown-item>
          </a>
          -->
            <el-dropdown-item divided @click.native="logout">
              <span style="display:block;">退出登录</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'

import storeLayout from '../../store/layout' // storeId就是导出的那个值

export default {
  components: {
    Breadcrumb,
    Hamburger
  },
  data() {
    return {
      storeLayout: {},
      select: '1',
      inputSearchText: '1111111111111'
    }
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar'
    ])
  },
  mounted() {
    this.storeLayout = storeLayout()
    console.log(this.storeLayout)
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    },
    onSwitchHideBtn() {
      this.storeLayout.switchTestBtn()
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  width:100%;
  height: 50px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 1px 4px rgba(0,21,41,.18);

  display: flex;
  flex-direction: row;

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;

    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }

  .breadcrumb-container {
    float: left;
  }
  .navbar-search-box{
    flex:1;
    height: 100%;

    padding: 10px 40px 10px 40px;

    display: flex;
    justify-content:flex-start;
    align-items: center;

  }

  .right-menu {
    height: 100%;
    line-height: 50px;

    display: flex;
    flex-direction: row;
    justify-content:center;
    align-items: center;

    &:focus {
      outline: none;
    }
  }
  .system-menu-item{
    margin: 3px 3px;
  }
}

  .el-select .el-input {
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }

</style>
