<template>
  <div>
    <p>子路由 3</p>

    <vxe-grid v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, nextTick } from 'vue'
import { VxeGridProps } from '@types'

export default defineComponent({
  setup () {
    const gridOptions = reactive({
      border: true,
      height: 400,
      loading: false,
      columns: [
        { type: 'checkbox', width: 50 },
        { field: 'role', title: 'Role' },
        { field: 'name', title: 'app.body.label.name' },
        { field: 'age', title: 'Age' }
      ],
      data: []
    } as VxeGridProps)

    nextTick(() => {
      gridOptions.loading = true
      setTimeout(() => {
        gridOptions.data = [
          { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, amount: 888, address: 'test abc' },
          { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, amount: 666, address: 'Guangzhou' },
          { id: 10003, name: 'Test3', role: 'PM', sex: '1', age: 32, amount: 89, address: 'Shanghai' },
          { id: 10004, name: 'Test4', role: 'Designer', sex: '0', age: 23, amount: 1000, address: 'test abc' },
          { id: 10005, name: 'Test5', role: 'Develop', sex: '0', age: 30, amount: 999, address: 'Shanghai' },
          { id: 10006, name: 'Test6', role: 'Designer', sex: '0', age: 21, amount: 998, address: 'test abc' },
          { id: 10007, name: 'Test7', role: 'Test', sex: '1', age: 29, amount: 2000, address: 'test abc' },
          { id: 10008, name: 'Test8', role: 'Develop', sex: '1', age: 35, amount: 999, address: 'test abc' }
        ]
        gridOptions.loading = false
      }, 300)
    })

    return {
      gridOptions
    }
  }
})
</script>
