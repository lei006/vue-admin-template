<template>
  <el-menu
    router 
    class="el-menu-vertical-demo"
    :collapse="!storeLayout.sideBarMinExten"
    active-text-color="#ffd04b"
    background-color="#282a34"   
    text-color="#fff"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-sub-menu v-for="(item,index) in routeMenus" :key="item.path"  :index="item.path">
        <template #title>
            <el-icon><location /></el-icon>
            <span>{{item.title}}-{{item.path}}</span>
        </template>
        <template #title1 v-if="item.children">

        </template>
    </el-sub-menu>

  </el-menu>
</template>

<script lang="ts" setup>
import { computed, reactive, ref } from 'vue'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

const isCollapse = ref(true)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}


///////////////////////////////////
// 布局状态引入..
import layoutStore from '../../../store/layout'
const storeLayout = layoutStore();


///////////////////////////////////
// 路由菜单的处理
import { useRouter } from 'vue-router';

let routeMenus = computed(()=>{

    const router = useRouter();
    function RouteToMenu(routes:any) : any {
        let menuItems:Array<any> = [];
        for (let i = 0; i < routes.length; i++) {
            const routeItem = routes[i];
            let tmp:any = {};

            //要求隐藏...
            if(routeItem.hidden){
                continue;
            }

            if(!routeItem.children){
                tmp.title = routeItem.name;
                tmp.path = routeItem.path;
            }else{
                tmp.title = routeItem.children[0].meta.title;
                tmp.path = routeItem.children[0].meta.path;
            }
            console.log("i",i, routeItem, "===>", tmp)

            menuItems.push(tmp);
        }
        return menuItems;
    }

    return RouteToMenu(router.options.routes);
    /*

    for (let i = 0; i < router.options.routes.length; i++) {
        const route_item = router.options.routes[i];
        if(route_item.children){
        let tmpItem = new Map();
        
        if(route_item.children.length == 1) {
            if(route_item.children[0].meta){
                tmpItem.set("title",route_item.children[0].meta.title);
            }
        }
        if(route_item.children.length > 1) {

        }
        tmpMenu.push(tmpItem);
        console.log("route_item", i, route_item)
        }
    }

    return tmpMenu;
    */
})



</script>



<style lang="scss" scoped>

.menutree{
    width:100%;
    height:100%;
}


.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}


</style>