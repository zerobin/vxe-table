<template>
  <div class="my-filter-content">
    <div class="my-fc-search">
      <div class="my-fc-search-top">
        <vxe-input v-model="demo1.option.data.sVal" placeholder="搜索"></vxe-input>
      </div>
      <div class="my-fc-search-content">
        <template v-if="demo1.valList.length">
          <ul class="my-fc-search-list my-fc-search-list-head">
            <li class="my-fc-search-item">
              <vxe-checkbox v-model="demo1.isAll" @change="changeAllEvent">全选</vxe-checkbox>
            </li>
          </ul>
          <ul class="my-fc-search-list my-fc-search-list-body">
            <li class="my-fc-search-item" v-for="(item, sIndex) in demo1.valList" :key="sIndex">
              <vxe-checkbox v-model="item.checked">{{ item.value }}</vxe-checkbox>
            </li>
          </ul>
        </template>
        <template v-else>
          <div class="my-fc-search-empty">无匹配项</div>
        </template>
      </div>
    </div>
    <div class="my-fc-footer">
      <vxe-button status="primary" @click="confirmFilterEvent">确认</vxe-button>
      <vxe-button @click="resetFilterEvent">重置</vxe-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive } from 'vue'
import { VxeGlobalRendererHandles } from '@types'
import XEUtils from 'xe-utils'

export default defineComponent({
  name: 'FilterContent',
  props: {
    params: Object as PropType<VxeGlobalRendererHandles.RenderFilterParams>
  },
  setup (props) {
    interface ColValItem {
      checked: boolean;
      value: string;
    }

    const demo1 = reactive({
      isAll: false,
      option: null as any,
      colValList: [] as ColValItem[],
      valList: [] as ColValItem[]
    })

    const load = () => {
      const { params } = props
      if (params) {
        const { $table, column } = params
        const { fullData } = $table.getTableData()
        const option = column.filters[0]
        const { vals } = option.data
        const colValList = Object.keys(XEUtils.groupBy(fullData, column.field)).map((val) => {
          return {
            checked: vals.includes(val),
            value: val
          } as ColValItem
        })
        demo1.option = option
        demo1.colValList = colValList
        demo1.valList = colValList
      }
    }

    const searchEvent = () => {
      const { option, colValList } = demo1
      if (option) {
        demo1.valList = option.data.sVal ? colValList.filter((item) => item.value.indexOf(option.data.sVal) > -1) : colValList
      }
    }

    const changeAllEvent = () => {
      const { isAll } = demo1
      demo1.valList.forEach((item) => {
        item.checked = isAll
      })
    }

    const confirmFilterEvent = () => {
      const { params } = props
      const { option, valList } = demo1
      if (params && option) {
        const { data } = option
        const { $panel } = params
        data.vals = valList.filter((item) => item.checked).map((item) => item.value)
        $panel.changeOption(null, true, option)
        $panel.confirmFilter()
      }
    }

    const resetFilterEvent = () => {
      const { params } = props
      if (params) {
        const { $panel } = params
        $panel.resetFilter()
      }
    }

    load()

    return {
      demo1,
      searchEvent,
      changeAllEvent,
      confirmFilterEvent,
      resetFilterEvent
    }
  }
})
</script>

<style>
.my-filter-content {
  padding: 10px;
  user-select: none;
}
.my-filter-content .my-fc-search .my-fc-search-top {
  position: relative;
  padding: 5px 0;
}
.my-filter-content .my-fc-search .my-fc-search-top > input {
  border: 1px solid #ABABAB;
  padding: 0 20px 0 2px;
  width: 200px;
  height: 22px;
  line-height: 22px;
}
.my-filter-content .my-fc-search .my-fc-search-content {
  padding: 2px 10px;
}
.my-filter-content .my-fc-search-empty {
  text-align: center;
  padding: 20px 0;
}
.my-filter-content .my-fc-search-list {
  margin: 0;
  padding: 0;
  list-style: none;
}
.my-filter-content .my-fc-search-list-body {
  overflow: auto;
  height: 120px;
}
.my-filter-content .my-fc-search-list .my-fc-search-item {
  padding: 2px 0;
  display: block;
}
.my-filter-content .my-fc-footer {
  text-align: right;
  padding-top: 10px;
}
.my-filter-content .my-fc-footer button {
  padding: 0 15px;
  margin-left: 15px;
}
</style>
