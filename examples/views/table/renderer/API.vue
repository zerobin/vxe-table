<template>
  <div>
    <h1>{{ $t('app.aside.nav.renderer') }}</h1>
    <p class="tip">
      通过渲染器你可以轻松实现筛选、单元格的复用，可以根据不同业务实现不一样的渲染器，这个功能将非常实用；比如这些插件 <a class="link" href="https://www.npmjs.com/package/vxe-table-plugin-element" target="_blank">vxe-table-plugin-element</a><br>
      <span class="orange">渲染器：抽象一切可复用的功能（类似组件的概念），实现非常简单的可配置化；</span><br>
      <span class="orange">插槽：自定义程度高，但需要重复写冗余代码，比较繁琐；</span><br>
      <span class="green">支持通过 JSX 自定义渲染，返回数组格式的 JSX</span><br>
      <span class="green">实际开发中应该将业务封装成一个组件，不要把复杂的渲染逻辑写在渲染器中，渲染器只负责表格与自定义组件之间的对接关系</span><br>
      <span class="red">（注：高级功能难度极高，不适合非前端和初级前端使用，一旦封装出错，将会全局影响功能）</span>
    </p>
    <h2>API</h2>
    <vxe-table
      :row-config="{isHover: true}"
      :column-config="{resizable: true}"
      :data="tableData">
      <vxe-column field="name" title="app.api.title.prop" min-width="280" tree-node></vxe-column>
      <vxe-column field="desc" title="app.api.title.desc" min-width="200"></vxe-column>
      <vxe-column field="type" title="app.api.title.type" min-width="140"></vxe-column>
      <vxe-column field="enum" title="app.api.title.enum" min-width="150"></vxe-column>
      <vxe-column field="defVal" title="app.api.title.defVal" min-width="160"></vxe-column>
    </vxe-table>
    <h2>原生渲染器</h2>
    <vxe-table
      :row-config="{isHover: true}"
      :column-config="{resizable: true}"
      :data="nativeRenderList">
      <vxe-column field="name" title="渲染器名称" min-width="100">
        <template #default="{ row }">
          <a class="link" :href="row.url" target="_blank">{{ row.name }}</a>
        </template>
      </vxe-column>
      <vxe-column field="desc" title="说明" min-width="280"></vxe-column>
    </vxe-table>
    <h2>内置渲染器</h2>
    <vxe-table
      :row-config="{isHover: true}"
      :column-config="{resizable: true}"
      :data="xRenderList">
      <vxe-column field="name" title="渲染器名称" min-width="100">
        <template #default="{ row }">
          <router-link class="link" :to="{name: 'VXEAPI', params: { name: row.compName }}">{{ row.name }}</router-link>
        </template>
      </vxe-column>
      <vxe-column field="desc" title="说明" min-width="280"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    return {
      nativeRenderList: [
        {
          name: 'input',
          url: 'https://www.w3school.com.cn/tags/tag_input.asp',
          desc: '原生-输入框'
        },
        {
          name: 'textarea',
          url: 'https://www.w3school.com.cn/tags/tag_textarea.asp',
          desc: '原生-文本域'
        },
        {
          name: 'select',
          url: 'https://www.w3school.com.cn/tags/tag_select.asp',
          desc: '原生-下拉框'
        }
      ],
      xRenderList: [
        {
          name: '$button',
          compName: 'button',
          desc: '功能模块-按钮'
        },
        {
          name: '$buttons',
          compName: 'button',
          desc: '功能模块-按钮列表'
        },
        {
          name: '$input',
          compName: 'input',
          desc: '功能模块-输入框'
        },
        {
          name: '$select',
          compName: 'select',
          desc: '功能模块-下拉框'
        },
        {
          name: '$radio',
          compName: 'radio',
          desc: '功能模块-复选框列表'
        },
        {
          name: '$checkbox',
          compName: 'checkbox',
          desc: '功能模块-复选框列表'
        },
        {
          name: '$switch',
          compName: 'switch',
          desc: '功能模块-开关'
        }
      ],
      tableData: [
        {
          name: 'add(name, options)',
          desc: '添加一个',
          version: '',
          type: '',
          enum: '',
          defVal: 'name, options',
          list: []
        },
        {
          name: 'mixin(options)',
          desc: '添加多个',
          version: '',
          type: '',
          enum: '',
          defVal: 'options',
          list: []
        },
        {
          name: 'delete(name)',
          desc: '删除',
          version: '',
          type: '',
          enum: '',
          defVal: 'name',
          list: []
        }
      ]
    }
  }
})
</script>
