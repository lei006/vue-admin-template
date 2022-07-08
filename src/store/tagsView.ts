import { defineStore } from 'pinia' // 引入

const tagsViewStore = defineStore('tagsViewStore', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      counter: 0,
      name: 'Eduardo',
      isAdmin: true,
      sideBarMinExten:false,
      testBtn: false
    }
  },
  // 相当于 vue 中的 computed 计算属性
  getters: {

  },
  // 相当于 vue 中的 methods 方法
  actions: {
    increment() {
      this.counter++
    },
    hideTestBtn() {
      this.testBtn = false
    },
    switchTestBtn() {
      this.testBtn = !this.testBtn
    },
    switchSidebarExten() {
      this.sideBarMinExten = !this.sideBarMinExten
    }
  }
})
export default tagsViewStore // 导出
