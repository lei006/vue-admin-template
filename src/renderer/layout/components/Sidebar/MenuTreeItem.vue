
<template>
    <template v-if="!item.hidden">
        <el-menu-item v-if="!item.children" :key="item.path" :index="item.path">
            <el-icon><icon-menu /></el-icon>
            <span>{{item.name}}</span>
        </el-menu-item>
        <el-menu-item v-else-if=" (item.children.length == 1) && (item.children[0].path == item.redirect)" :key="item.children[0].path" :index="item.path">
            <el-icon><icon-menu /></el-icon>
            <span>{{item.children[0].meta.title}}</span>
        </el-menu-item>
        <el-sub-menu v-else :index="item.path">
            <template #title>
                <el-icon ><location /></el-icon>
                <span>{{item.name}}</span>
            </template>
            <MenuTreeItem v-for="(children_item) in item.children" :item="children_item" :key="children_item.path">
            </MenuTreeItem>
        </el-sub-menu>

    </template>
</template>
<script setup>

import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'


import MenuTreeItem from './MenuTreeItem.vue'

const props = defineProps(["item"])
const item = props.item;



</script>
