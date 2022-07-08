import { defineStore } from 'pinia' // 引入

const layoutStore = defineStore('layoutStore', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      sideBarMinExten:false,
      sideBarStyle:"menu-tree",  //cascader 
    }
  },
  // 相当于 vue 中的 computed 计算属性
  getters: {

  },
  // 相当于 vue 中的 methods 方法
  actions: {
    setSideBarStyle(style : any){
        if(style) {
            this.sideBarStyle = style;
        }else if(style === 'menu-tree'){
            this.sideBarStyle = 'cascader';
        }else if(style === 'cascader'){
            this.sideBarStyle = 'menu-tree';
        }else{
            this.sideBarStyle = 'menu-tree';
        }
        console.log("this.sideBarStyle", this.sideBarStyle);
    },
    switchSidebarExten() {
      this.sideBarMinExten = !this.sideBarMinExten
    }
  }
})
export default layoutStore // 导出
