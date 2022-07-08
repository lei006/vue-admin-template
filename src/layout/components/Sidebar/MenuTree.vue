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

    <MenuTreeItem v-for="(item) in $router.options.routes" :item="item" :key="item.path">
    </MenuTreeItem>
    <!--
    <template v-for="(item) in routeMenus.items" >
      <el-sub-menu v-if="item.children" :key="item.path"  :index="item.path">
          <template #title>
              <el-icon ><location /></el-icon>
              <span>{{item.title}}</span>
          </template>
      </el-sub-menu>

      <el-menu-item v-if="!item.children" :key="item.path" :index="item.path">
        <el-icon><icon-menu /></el-icon>
        <span>{{item.title}}</span>
      </el-menu-item>

    </template>
    -->
  </el-menu>


</template>

<script setup>

import MenuTreeItem from './MenuTreeItem.vue'

import { computed, onMounted, reactive, ref } from 'vue'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

const isCollapse = ref(true)
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}


///////////////////////////////////
// 布局状态引入..
import layoutStore from '../../../store/layout'
const storeLayout = layoutStore();


///////////////////////////////////
// 路由菜单的处理
import { useRouter } from 'vue-router';


let routeMenus = reactive({items:[]});

function update_routes_to_menu(){
    const router = useRouter();
    const routes = router.options.routes;

    routeMenus.items=[];
    

    for (let i = 0; i < routes.length; i++) {
        const route_item0 = routes[i];

        if(route_item0.hidden){
            console.log("route_item0.hidden1", i)
            continue;
        }
        if(!route_item0.children){
            console.log("route_item0.hidden2", i)
            let tmp = {};
            tmp.title = route_item0.name;
            tmp.path = route_item0.path;
            routeMenus.items.push(tmp);
            continue;
        }
        if(route_item0.children){
            console.log("route_item0.hidden3", i)

            // 1. 找出重定向...只有一个，且是重定向的
            if(route_item0.children.length == 1 && route_item0.redirect == route_item0.children[0].path){
                let tmp = {};
                tmp.title = route_item0.children[0].name;
                tmp.path = route_item0.children[0].path;
                routeMenus.items.push(tmp);
                continue;
            }

            if(route_item0.children.length > 1){
                let tmp = {};
                tmp.children = [];

                // 找重定向的项
                let is_exist = false;
                for (let j = 0; j < route_item0.children.length; j++) {
                    const item1 = route_item0.children[j];
                    if(route_item0.redirect == item1.path){
                        tmp.title = item1.meta.title;
                        tmp.path = item1.path;
                        is_exist = true;
                    }
                }
                if(is_exist != true) {
                  continue;
                }

                //增加其它项
                for (let j = 0; j < route_item0.children.length; j++) {
                    const item1 = route_item0.children[j];
                    let tmp1 = {};
                    tmp1.title = item1.meta.title;
                    tmp1.path = item1.path;
                    tmp.children.push(tmp1);
                }
                routeMenus.items.push(tmp);
            }
            console.log("routeMenus", routeMenus)

            continue;
        }
    }

}

onMounted(()=>{
    update_routes_to_menu();
})

function RouteToMenu(routes) {
    let menuItems = [];
    for (let i = 0; i < routes.length; i++) {
        const routeItem = routes[i];
        let tmp = {};

        //要求隐藏...
        if(routeItem.hidden){
            continue;
        }

        if(!routeItem.children){
            tmp.title = routeItem.name;
            tmp.path = routeItem.path;
            menuItems.push(tmp);
        }
        else if(routeItem.children.length == 1 && routeItem.redirect == routeItem.children[0].path) {
            tmp.title = routeItem.children[0].meta.title;
            tmp.path = routeItem.children[0].path;
            menuItems.push(tmp);
        }else if(routeItem.children.length > 1){

            tmp.children = [];

            // 找重定向的项
            for (let j = 0; j < routeItem.children.length; j++) {
                const item1 = routeItem.children[j];
                if(routeItem.redirect == item1.path){
                    tmp.title = item1.meta.title;
                    tmp.path = item1.path;
                }
            }
            //增加其它项
            for (let j = 0; j < routeItem.children.length; j++) {
                const item1 = routeItem.children[j];
                if(routeItem.redirect != item1.path){
                    let tmp1 = {};
                    tmp1.title = item1.meta.title;
                    tmp1.path = item1.path;
                    tmp.children.push(tmp1);
                }
            }

            menuItems.push(tmp);
        }
    }
    console.log("menuItems", menuItems)
    return menuItems;
}




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