import { defineStore } from 'pinia' // 引入

const loginStore = defineStore('loginStore', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      counter: 0,
      name: 'Eduardo',
      isAdmin: true
    }
  },
  // 相当于 vue 中的 computed 计算属性
  getters: {

  },
  // 相当于 vue 中的 methods 方法
  actions: {
    increment() {
      this.counter++
    }
  }
})
export default loginStore // 导出

