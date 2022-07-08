
<template>
    <div class="app-main-container">
        <el-scrollbar height="100%">
            <router-view v-slot="{ Component }">
                <transition>
                    <component :is="Component" ></component>
                </transition>
            </router-view>
        </el-scrollbar>
    </div>
</template>

<script setup>

/*
let routePath = computed(()=>{
    let {currentRoute } = useRouter()
      return currentRoute.value.path;
})

onMounted(()=>{

})
*/
</script>

<style lang="scss" scoped>


.app-main-container{
    width: 100%;
    flex:1;

    overflow: auto;
}



</style>