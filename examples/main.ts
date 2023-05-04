import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'

import './assets/style/index.scss'
import './plugins'

import PreCode from './components/PreCode.vue'
import CodeLight from './components/CodeLight.vue'
import GridAPILink from './components/GridAPILink.vue'
import TableAPILink from './components/TableAPILink.vue'
import TableColumnAPILink from './components/TableColumnAPILink.vue'
import ToolbarAPILink from './components/ToolbarAPILink.vue'
import PagerAPILink from './components/PagerAPILink.vue'
import VirtualTreeAPILink from './components/VirtualTreeAPILink.vue'
import DemoBlock from './components/DemoBlock.vue'

import VXETable from 'vxe-table'

const app = createApp(App)

app.component('PreCode', PreCode)
app.component('CodeLight', CodeLight)
app.component(GridAPILink.name, GridAPILink)
app.component(TableAPILink.name, TableAPILink)
app.component(TableColumnAPILink.name, TableColumnAPILink)
app.component(ToolbarAPILink.name, ToolbarAPILink)
app.component(PagerAPILink.name, PagerAPILink)
app.component(VirtualTreeAPILink.name, VirtualTreeAPILink)
app.component(DemoBlock.name, DemoBlock)

app.use(VXETable)

app.use(store)
app.use(router)
app.use(i18n)

app.config.globalProperties.$t = i18n.global.t
app.config.globalProperties.$i18n = i18n.global

app.mount('#app')
