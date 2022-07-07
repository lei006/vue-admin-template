<template>
  <div :class="classObj" class="app-wrapper">
    <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside" />
    <sidebar class="sidebar-container" />
    <div class="main-container">
      <div class="navbar-box">
        <navbar />
      </div>
      <div class="tagbar-box">
        <TagsView />
      </div>
      <div class="app-main-box">
        <app-main />
      </div>
    </div>
    <FloatPanel />
  </div>
</template>

<script>
import { Navbar, Sidebar, AppMain, FloatPanel, Tagbar,TagsView } from './components'
import ResizeMixin from './mixin/ResizeHandler'

export default {
  name: 'Layout',
  components: {
    Navbar,
    Sidebar,
    AppMain,
    Tagbar,
    TagsView,
    FloatPanel
  },
  mixins: [ResizeMixin],
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar
    },
    device() {
      return this.$store.state.app.device
    },
    fixedHeader() {
      return this.$store.state.settings.fixedHeader
    },
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    }
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/styles/mixin.scss";
  @import "~@/styles/variables.scss";

  .app-wrapper {
    @include clearfix;
    height: 100%;
    width: 100%;
    overflow: hidden;

    display: flex;
  }

  .sidebar-container{
    height: 100%;
    width: 160px;
    background-color: rgb(48,65,86);
  }

  .main-container{
    flex:1;
    height: 100%;

    display: flex;
    flex-direction: column;
    overflow: auto;
  }

  .navbar-box{
    width: 100%;
    height: 50px;

    background-color: #fafafa;
  }
  .tagbar-box{
    width: 100%;
    height: 30px;
    background-color: #fafafa;
  }
  .app-main-box{
    width: 100%;
    flex:1;
    overflow: hidden;
  }
</style>
