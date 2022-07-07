<template>
  <el-tabs v-model="editableTabsValue" type="card" closable editable @tab-remove="removeTab" @edit="handleTabsEdit">
    <el-tab-pane
      v-for="(item, index) in editableTabs"
      :key="item.name + index"
      :label="item.title"
      :name="item.name"
    />
  </el-tabs>
</template>

<script>

export default {
  data() {
    return {
      editableTabsValue: '2',
      editableTabs: [{
        title: 'Tab 111',
        name: '1',
        content: 'Tab 1 content'
      }, {
        title: 'Tab 2',
        name: '2',
        content: 'Tab 2 content'
      }, {
        title: 'Tab 2',
        name: '3',
        content: 'Tab 2 content'
      }, {
        title: 'Tab 2',
        name: '4',
        content: 'Tab 2 content'
      }],
      tabIndex: 2
    }
  },

  methods: {
    addTab(targetName) {
      const newTabName = ++this.tabIndex + ''
      this.editableTabs.push({
        title: 'New Tab',
        name: newTabName,
        content: 'New Tab content'
      })
      this.editableTabsValue = newTabName
    },
    removeTab(targetName) {
      const tabs = this.editableTabs
      let activeName = this.editableTabsValue
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            const nextTab = tabs[index + 1] || tabs[index - 1]
            if (nextTab) {
              activeName = nextTab.name
            }
          }
        })
      }

      this.editableTabsValue = activeName
      this.editableTabs = tabs.filter(tab => tab.name !== targetName)
    },
    handleTabsEdit(targetName, action) {
      if (action === 'add') {
        const newTabName = ++this.tabIndex + ''
        this.editableTabs.push({
          title: 'New Tab',
          name: newTabName,
          content: 'New Tab content'
        })
        this.editableTabsValue = newTabName
      }
      if (action === 'remove') {
        const tabs = this.editableTabs
        let activeName = this.editableTabsValue
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              const nextTab = tabs[index + 1] || tabs[index - 1]
              if (nextTab) {
                activeName = nextTab.name
              }
            }
          })
        }
        this.editableTabsValue = activeName
        this.editableTabs = tabs.filter(tab => tab.name !== targetName)
      }
    }

  }
}
</script>

<style lang="scss" scoped>

</style>
