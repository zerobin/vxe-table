<template>
  <div>
    <h2>{{ $t('app.aside.nav.input') }}</h2>
    <p class="tip">
      输入框、选择器，查看 <router-link class="link" :to="{name: 'VXEAPI', params: {name: 'input'}}">API</router-link><br>
      <span class="red">（注：输入组件输出为字符串类型）</span>
      <span class="red">（注：日期组件支持label-format格式化时间格式）</span>
    </p>

    <h3>{{ $t('基础用法') }}</h3>
    <demo-block>
      <template v-slot:source>
        <p>
          <vxe-input v-model="demo1.value100" placeholder="默认尺寸"></vxe-input>
          <vxe-input v-model="demo1.value101" placeholder="中等尺寸" size="medium"></vxe-input>
          <vxe-input v-model="demo1.value102" placeholder="小型尺寸" size="small"></vxe-input>
          <vxe-input v-model="demo1.value103" placeholder="超小尺寸" size="mini"></vxe-input>
        </p>
      </template>
      <template v-slot:highlight><pre><pre-code class="xml">{{ demoCodes[0] }}</pre-code></pre></template>
    </demo-block>

    <h3>{{ $t('文本输入') }}</h3>
    <demo-block>
      <template v-slot:source>
        <p>
          <vxe-input v-model="demo1.value200" placeholder="可清除" clearable></vxe-input>
          <vxe-input v-model="demo1.value201" placeholder="带图标" prefix-icon="vxe-icon-question-circle-fill" suffix-icon="vxe-icon-question-circle-fill" clearable></vxe-input>
          <vxe-input v-model="demo1.value202" placeholder="只读的" suffix-icon="vxe-icon-question-circle-fill" readonly></vxe-input>
          <vxe-input v-model="demo1.value203" placeholder="禁用的" prefix-icon="vxe-icon-question-circle-fill" disabled></vxe-input>
        </p>
      </template>
      <template v-slot:highlight><pre><pre-code class="xml">{{ demoCodes[1] }}</pre-code></pre></template>
    </demo-block>

    <h3>{{ $t('搜索输入') }}</h3>
    <demo-block>
      <template v-slot:source>
        <p>
          <vxe-input v-model="demo1.value300" placeholder="搜索类型" type="search"></vxe-input>
          <vxe-input v-model="demo1.value301" placeholder="可清除" type="search" clearable></vxe-input>
        </p>
      </template>
      <template v-slot:highlight><pre><pre-code class="xml">{{ demoCodes[2] }}</pre-code></pre></template>
    </demo-block>

    <h3>{{ $t('密码输入') }}</h3>
    <demo-block>
      <template v-slot:source>
        <p>
          <vxe-input v-model="demo1.value302" placeholder="密码类型" type="password"></vxe-input>
          <vxe-input v-model="demo1.value303" placeholder="可清除" type="password" clearable></vxe-input>
        </p>
      </template>
      <template v-slot:highlight><pre><pre-code class="xml">{{ demoCodes[3] }}</pre-code></pre></template>
    </demo-block>

    <h3>{{ $t('日期选择器') }}</h3>
    <demo-block>
      <template v-slot:source>
        <p>
          <vxe-input v-model="demo1.value400" placeholder="日期选择" type="date"></vxe-input>
          <vxe-input v-model="demo1.value407" placeholder="禁用日期" type="date" :disabled-method="disabledDateMethod" transfer></vxe-input>
          <vxe-input v-model="demo1.value408" placeholder="小圆点" type="date" :festival-method="festivalNoticeMethod" transfer></vxe-input>
          <vxe-input v-model="demo1.value409" placeholder="农历节日" type="date" :festival-method="festivalCalendarMethod" transfer></vxe-input>
        </p>
      </template>
      <template v-slot:highlight><pre><pre-code class="xml">{{ demoCodes[4] }}</pre-code></pre></template>
    </demo-block>

    <h3>{{ $t('周选择器') }}</h3>
    <demo-block>
      <template v-slot:source>
        <p>
          <vxe-input v-model="demo1.value701" placeholder="周选择" type="week" :start-day="0"></vxe-input>
          <vxe-input v-model="demo1.value702" placeholder="周选择" type="week" :start-day="1"></vxe-input>
          <vxe-input v-model="demo1.value703" placeholder="周选择" type="week" :start-day="2"></vxe-input>
          <vxe-input v-model="demo1.value704" placeholder="周选择" type="week" :start-day="3" clearable></vxe-input>
          <vxe-input v-model="demo1.value705" placeholder="周选择" type="week" :start-day="4" clearable></vxe-input>
          <vxe-input v-model="demo1.value706" placeholder="周选择" type="week" :start-day="5" clearable></vxe-input>
          <vxe-input v-model="demo1.value707" placeholder="周选择" type="week" :start-day="6" clearable></vxe-input>
        </p>
      </template>
      <template v-slot:highlight><pre><pre-code class="xml">{{ demoCodes[5] }}</pre-code></pre></template>
    </demo-block>

    <h3>{{ $t('月选择器') }}</h3>
    <demo-block>
      <template v-slot:source>
        <p>
          <vxe-input v-model="demo1.value402" placeholder="月选择" type="month" valueFormat="yyyy-MM-dd"></vxe-input>
        </p>
      </template>
      <template v-slot:highlight><pre><pre-code class="xml">{{ demoCodes[6] }}</pre-code></pre></template>
    </demo-block>

    <h3>{{ $t('季选择器') }}</h3>
    <demo-block>
      <template v-slot:source>
        <p>
          <vxe-input v-model="demo1.value403" placeholder="季选择" type="quarter" clearable></vxe-input>
        </p>
      </template>
      <template v-slot:highlight><pre><pre-code class="xml">{{ demoCodes[7] }}</pre-code></pre></template>
    </demo-block>

    <h3>{{ $t('年选择器') }}</h3>
    <demo-block>
      <template v-slot:source>
        <p>
          <vxe-input v-model="demo1.value404" placeholder="年选择" type="year" clearable></vxe-input>
        </p>
      </template>
      <template v-slot:highlight><pre><pre-code class="xml">{{ demoCodes[8] }}</pre-code></pre></template>
    </demo-block>

    <h3>{{ $t('日期和时间选择器') }}</h3>
    <demo-block>
      <template v-slot:source>
        <p>
          <vxe-input v-model="demo1.value406" placeholder="日期和时间选择" type="datetime" transfer></vxe-input>
        </p>
      </template>
      <template v-slot:highlight><pre><pre-code class="xml">{{ demoCodes[9] }}</pre-code></pre></template>
    </demo-block>

    <h3>{{ $t('时间选择器') }}</h3>
    <demo-block>
      <template v-slot:source>
        <p>
          <vxe-input v-model="demo1.value405" placeholder="时间选择" type="time" clearable></vxe-input>
        </p>
      </template>
      <template v-slot:highlight><pre><pre-code class="xml">{{ demoCodes[10] }}</pre-code></pre></template>
    </demo-block>

    <h3>{{ $t('日期多选') }}</h3>
    <demo-block>
      <template v-slot:source>
        <p>
          <vxe-input v-model="demo1.value800" placeholder="日期多选" type="date" clearable multiple></vxe-input>
          <vxe-input v-model="demo1.value801" placeholder="月份多选" type="month" clearable multiple></vxe-input>
          <vxe-input v-model="demo1.value802" placeholder="季度多选" type="quarter" clearable multiple></vxe-input>
          <vxe-input v-model="demo1.value803" placeholder="年份多选" type="year" clearable multiple></vxe-input>
          <vxe-input v-model="demo1.value804" placeholder="周多选" type="week" clearable multiple></vxe-input>
          <vxe-input v-model="demo1.value805" placeholder="日期和时间多选" type="datetime" clearable multiple></vxe-input>
        </p>
      </template>
      <template v-slot:highlight><pre><pre-code class="xml">{{ demoCodes[11] }}</pre-code></pre></template>
    </demo-block>

    <h3>{{ $t('数值输入') }}</h3>
    <demo-block>
      <template v-slot:source>
        <p>
          <vxe-input v-model="demo1.value500" placeholder="数值类型" type="number"></vxe-input>
          <vxe-input v-model="demo1.value501" placeholder="数值间隔 1.4" type="number" step="1.4" clearable></vxe-input>
          <vxe-input v-model="demo1.value502" placeholder="数值范围限制 0-10" type="number" min="0" max="10" clearable></vxe-input>
          <vxe-input v-model="demo1.value509" placeholder="允许输入科学计数" type="number" exponential clearable></vxe-input>
        </p>
      </template>
      <template v-slot:highlight><pre><pre-code class="xml">{{ demoCodes[12] }}</pre-code></pre></template>
    </demo-block>

    <h3>{{ $t('整数输入') }}</h3>
    <demo-block>
      <template v-slot:source>
        <p>
          <vxe-input v-model="demo1.value506" placeholder="整数类型" type="integer"></vxe-input>
          <vxe-input v-model="demo1.value507" placeholder="整数间隔 5" type="integer" step="5" clearable></vxe-input>
          <vxe-input v-model="demo1.value508" placeholder="整数范围限制 0-100" type="integer" min="0" max="100" clearable></vxe-input>
        </p>
      </template>
      <template v-slot:highlight><pre><pre-code class="xml">{{ demoCodes[13] }}</pre-code></pre></template>
    </demo-block>

    <h3>{{ $t('小数输入') }}</h3>
    <demo-block>
      <template v-slot:source>
        <p>
          <vxe-input v-model="demo1.value503" placeholder="小数类型" type="float"></vxe-input>
          <vxe-input v-model="demo1.value504" placeholder="小数间隔 2.3" type="float" step="2.3" clearable></vxe-input>
          <vxe-input v-model="demo1.value505" placeholder="小数范围限制 0-50" type="float" min="0" max="50" clearable></vxe-input>
        </p>
      </template>
      <template v-slot:highlight><pre><pre-code class="xml">{{ demoCodes[14] }}</pre-code></pre></template>
    </demo-block>

    <h3>{{ $t('自定义插槽') }}</h3>
    <demo-block>
      <template v-slot:source>
        <p>
          <vxe-input v-model="demo1.value600" placeholder="自定义前缀图标">
            <template #prefix>
              <i class="vxe-icon-question-circle-fill my-red"></i>
            </template>
          </vxe-input>
          <vxe-input v-model="demo1.value601" placeholder="自定义后缀图标">
            <template #suffix>
              <i class="vxe-icon-question-circle-fill my-green"></i>
            </template>
          </vxe-input>
          <vxe-input v-model="demo1.value602" class="my-domain" placeholder="自定义前缀模板">
            <template #prefix>
              <span>Http://</span>
            </template>
          </vxe-input>
          <vxe-input v-model="demo1.value603" class="my-search" placeholder="自定义后缀模板">
            <template #suffix>
              <i class="vxe-icon-question-circle-fill"></i>
            </template>
          </vxe-input>
        </p>
      </template>
      <template v-slot:highlight><pre><pre-code class="xml">{{ demoCodes[15] }}</pre-code></pre></template>
    </demo-block>

    <pre>
      <pre-code>
        | Tab | 切换到上一个 |
        | Shift Tab | 切换到下一个 |
        | Arrow Up ↑ | 展开下拉面板、如果已展开则向上移动（用于日期类型...等） |
        | Arrow Down ↓ | 展开下拉面板、如果已展开则向下移动（用于日期类型...等） |
        | Arrow Left ← | 如果已展开则向左移动（用于日期类型...等） |
        | Arrow Right → | 如果已展开则向右移动（用于日期类型...等） |
        | Enter | 展开下拉面板、确定选中日期...等（用于日期类型...等） |
        | Page Up | 向前翻页（用于日期类型...等） |
        | Page Down | 向后翻页（用于日期类型...等） |
      </pre-code>
    </pre>

    <!-- <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <pre-code class="html">{{ demoCodes[0] }}</pre-code>
      <pre-code class="javascript">{{ demoCodes[1] }}</pre-code>
      <pre-code class="css">{{ demoCodes[2] }}</pre-code>
    </pre> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { VxeInputPropTypes, VxeInputDefines } from '@types'
import XEUtils from 'xe-utils'

export default defineComponent({
  setup  () {
    const demo1 = reactive({
      value100: '',
      value101: '',
      value102: '',
      value103: '',
      value200: '',
      value201: '',
      value202: '',
      value203: '',
      value300: '',
      value301: '',
      value302: '',
      value303: '',
      value400: '',
      value401: '',
      value402: '',
      value403: '',
      value404: '',
      value405: '',
      value406: '',
      value407: '',
      value408: '2020-10-01',
      value409: '2020-10-01',
      value500: '22',
      value501: '',
      value502: '',
      value503: '33.33',
      value504: '',
      value505: '',
      value506: '44',
      value507: '',
      value508: '',
      value509: '1e+2',
      value600: '',
      value601: '',
      value602: '',
      value603: '',
      value701: '',
      value702: '',
      value703: '',
      value704: '',
      value705: '',
      value706: '',
      value707: '',
      value800: '',
      value801: '',
      value802: '',
      value803: '',
      value804: '',
      value805: ''
    })

    const disabledDateMethod: VxeInputPropTypes.DisabledMethod = (params) => {
      const { date } = params
      const dd = date.getDate()
      return dd > 15
    }

    // 渲染日期小圆点
    const noticeMaps: { [key: string]: VxeInputDefines.DateFestivalInfo } = {
      20200910: {
        notice: true, // 显示小圆点事件通知
        important: true, // 是否标记为重要节日
        label: '活动'
      },
      20201015: {
        notice: true,
        important: true,
        label: '聚餐'
      },
      20201108: {
        notice: true,
        label: '爬山'
      },
      20201222: {
        notice: true,
        label: '游泳'
      }
    }
    const festivalNoticeMethod: VxeInputPropTypes.FestivalMethod = (params) => {
      const { date, viewType } = params
      if (viewType === 'day') {
        const ymd = XEUtils.toDateString(date, 'yyyyMMdd')
        return noticeMaps[ymd] || { label: '无' }
      }
    }

    // 显示日期农历节假日
    const calendarMaps: { [key: string]: VxeInputDefines.DateFestivalInfo } = {
      20200930: {
        label: '十四' // 显示节日名称
      },
      20201001: {
        label: '国庆节,中秋节', // 如果同一天拥有多个节日重叠，用逗号分开
        important: true, // 是否标记为重要节日
        extra: '休' // 右上角额外显示的名称
      },
      20201002: {
        label: '十六',
        extra: '休'
      },
      20201003: {
        label: '十七',
        extra: '休'
      },
      20201004: {
        label: '十八',
        extra: '休'
      },
      20201005: {
        label: '十九',
        extra: '休'
      },
      20201006: {
        label: '二十',
        extra: '休'
      },
      20201007: {
        label: '廿一',
        extra: '休'
      },
      20201008: {
        label: '寒霜',
        important: true,
        extra: '休'
      },
      20201009: {
        label: '廿三'
      },
      20201010: {
        label: '廿四',
        extra: {
          label: '班',
          important: true // 是否标记为重要节日
        }
      }
    }
    const festivalCalendarMethod: VxeInputPropTypes.FestivalMethod = (params) => {
      const { date, viewType } = params
      if (viewType === 'day') {
        const ymd = XEUtils.toDateString(date, 'yyyyMMdd')
        return calendarMaps[ymd] || { label: '无' }
      }
    }

    return {
      demo1,
      disabledDateMethod,
      festivalNoticeMethod,
      festivalCalendarMethod,
      demoCodes: [
        `
        <p>
          <vxe-input v-model="demo1.value100" placeholder="默认尺寸"></vxe-input>
          <vxe-input v-model="demo1.value101" placeholder="中等尺寸" size="medium"></vxe-input>
          <vxe-input v-model="demo1.value102" placeholder="小型尺寸" size="small"></vxe-input>
          <vxe-input v-model="demo1.value103" placeholder="超小尺寸" size="mini"></vxe-input>
        </p>

        import { defineComponent, reactive } from 'vue'

        export default defineComponent({
          setup  () {
            const demo1 = reactive({
              value100: '',
              value101: '',
              value102: '',
              value103: ''
            })
            return {
              demo1
            }
          }
        })
        `, `
        <p>
          <vxe-input v-model="demo1.value200" placeholder="可清除" clearable></vxe-input>
          <vxe-input v-model="demo1.value201" placeholder="带图标" prefix-icon="vxe-icon-question-circle-fill" suffix-icon="vxe-icon-question-circle-fill" clearable></vxe-input>
          <vxe-input v-model="demo1.value202" placeholder="只读的" suffix-icon="vxe-icon-question-circle-fill" readonly></vxe-input>
          <vxe-input v-model="demo1.value203" placeholder="禁用的" prefix-icon="vxe-icon-question-circle-fill" disabled></vxe-input>
        </p>

        import { defineComponent, reactive } from 'vue'

        export default defineComponent({
          setup  () {
            const demo1 = reactive({
              value200: '',
              value201: '',
              value202: '',
              value203: ''
            })
            return {
              demo1
            }
          }
        })
        `, `
        <p>
          <vxe-input v-model="demo1.value300" placeholder="搜索类型" type="search"></vxe-input>
          <vxe-input v-model="demo1.value301" placeholder="可清除" type="search" clearable></vxe-input>
        </p>

        import { defineComponent, reactive } from 'vue'

        export default defineComponent({
          setup  () {
            const demo1 = reactive({
              value300: '',
              value301: ''
            })
            return {
              demo1
            }
          }
        })
        `, `
        <p>
          <vxe-input v-model="demo1.value302" placeholder="密码类型" type="password"></vxe-input>
          <vxe-input v-model="demo1.value303" placeholder="可清除" type="password" clearable></vxe-input>
        </p>

        import { defineComponent, reactive } from 'vue'

        export default defineComponent({
          setup  () {
            const demo1 = reactive({
              value302: '',
              value303: ''
            })
            return {
              demo1
            }
          }
        })
        `, `
        <p>
          <vxe-input v-model="demo1.value400" placeholder="日期选择" type="date"></vxe-input>
          <vxe-input v-model="demo1.value407" placeholder="禁用日期" type="date" :disabled-method="disabledDateMethod" transfer></vxe-input>
          <vxe-input v-model="demo1.value408" placeholder="小圆点" type="date" :festival-method="festivalNoticeMethod" transfer></vxe-input>
          <vxe-input v-model="demo1.value409" placeholder="农历节日" type="date" :festival-method="festivalCalendarMethod" transfer></vxe-input>
        </p>

        import { defineComponent, reactive } from 'vue'
        import { VxeInputPropTypes, VxeInputDefines } from 'vxe-table'
        import XEUtils from 'xe-utils'
        export default defineComponent({
          setup  () {
            const demo1 = reactive({
              value400: '',
              value407: '',
              value408: '2020-10-01',
              value409: '2020-10-01'
            })

            const disabledDateMethod: VxeInputPropTypes.DisabledMethod = (params) => {
              const { date } = params
              const dd = date.getDate()
              return dd > 15
            }

            // 渲染日期小圆点
            const noticeMaps: { [key: string]: VxeInputDefines.DateFestivalInfo } = {
              20200910: {
                notice: true, // 显示小圆点事件通知
                important: true, // 是否标记为重要节日
                label: '活动'
              },
              20201015: {
                notice: true,
                important: true,
                label: '聚餐'
              },
              20201108: {
                notice: true,
                label: '爬山'
              },
              20201222: {
                notice: true,
                label: '游泳'
              }
            }
            const festivalNoticeMethod: VxeInputPropTypes.FestivalMethod = (params) => {
              const { date, viewType } = params
              if (viewType === 'day') {
                const ymd = XEUtils.toDateString(date, 'yyyyMMdd')
                return noticeMaps[ymd] || { label: '无' }
              }
            }

            // 显示日期农历节假日
            const calendarMaps: { [key: string]: VxeInputDefines.DateFestivalInfo } = {
              20200930: {
                label: '十四' // 显示节日名称
              },
              20201001: {
                label: '国庆节,中秋节', // 如果同一天拥有多个节日重叠，用逗号分开
                important: true, // 是否标记为重要节日
                extra: '休' // 右上角额外显示的名称
              },
              20201002: {
                label: '十六',
                extra: '休'
              },
              20201003: {
                label: '十七',
                extra: '休'
              },
              20201004: {
                label: '十八',
                extra: '休'
              },
              20201005: {
                label: '十九',
                extra: '休'
              },
              20201006: {
                label: '二十',
                extra: '休'
              },
              20201007: {
                label: '廿一',
                extra: '休'
              },
              20201008: {
                label: '寒霜',
                important: true,
                extra: '休'
              },
              20201009: {
                label: '廿三'
              },
              20201010: {
                label: '廿四',
                extra: {
                  label: '班',
                  important: true // 是否标记为重要节日
                }
              }
            }
            const festivalCalendarMethod: VxeInputPropTypes.FestivalMethod = (params) => {
              const { date, viewType } = params
              if (viewType === 'day') {
                const ymd = XEUtils.toDateString(date, 'yyyyMMdd')
                return calendarMaps[ymd] || { label: '无' }
              }
            }

            return {
              demo1,
              disabledDateMethod,
              festivalNoticeMethod,
              festivalCalendarMethod
            }
          }
        })
        `, `
        <p>
          <vxe-input v-model="demo1.value701" placeholder="周选择" type="week" :start-day="0"></vxe-input>
          <vxe-input v-model="demo1.value702" placeholder="周选择" type="week" :start-day="1"></vxe-input>
          <vxe-input v-model="demo1.value703" placeholder="周选择" type="week" :start-day="2"></vxe-input>
          <vxe-input v-model="demo1.value704" placeholder="周选择" type="week" :start-day="3" clearable></vxe-input>
          <vxe-input v-model="demo1.value705" placeholder="周选择" type="week" :start-day="4" clearable></vxe-input>
          <vxe-input v-model="demo1.value706" placeholder="周选择" type="week" :start-day="5" clearable></vxe-input>
          <vxe-input v-model="demo1.value707" placeholder="周选择" type="week" :start-day="6" clearable></vxe-input>
        </p>

        import { defineComponent, reactive } from 'vue'

        export default defineComponent({
          setup  () {
            const demo1 = reactive({
              value701: '',
              value702: '',
              value703: '',
              value704: '',
              value705: '',
              value706: '',
              value707: ''
            })
            return {
              demo1
            }
          }
        })
        `, `
        <p>
          <vxe-input v-model="demo1.value402" placeholder="月选择" type="month" valueFormat="yyyy-MM-dd"></vxe-input>
        </p>

        import { defineComponent, reactive } from 'vue'

        export default defineComponent({
          setup  () {
            const demo1 = reactive({
              value402: ''
            })
            return {
              demo1
            }
          }
        })
        `, `
        <p>
          <vxe-input v-model="demo1.value403" placeholder="季选择" type="quarter" clearable></vxe-input>
        </p>

        import { defineComponent, reactive } from 'vue'

        export default defineComponent({
          setup  () {
            const demo1 = reactive({
              value403: ''
            })
            return {
              demo1
            }
          }
        })
        `, `
        <p>
          <vxe-input v-model="demo1.value404" placeholder="年选择" type="year" clearable></vxe-input>
        </p>

        import { defineComponent, reactive } from 'vue'

        export default defineComponent({
          setup  () {
            const demo1 = reactive({
              value404: ''
            })
            return {
              demo1
            }
          }
        })
        `, `
        <p>
          <vxe-input v-model="demo1.value800" placeholder="日期多选" type="date" clearable multiple></vxe-input>
          <vxe-input v-model="demo1.value801" placeholder="月份多选" type="month" clearable multiple></vxe-input>
          <vxe-input v-model="demo1.value802" placeholder="季度多选" type="quarter" clearable multiple></vxe-input>
          <vxe-input v-model="demo1.value803" placeholder="年份多选" type="year" clearable multiple></vxe-input>
          <vxe-input v-model="demo1.value804" placeholder="周多选" type="week" clearable multiple></vxe-input>
          <vxe-input v-model="demo1.value805" placeholder="日期和时间多选" type="datetime" clearable multiple></vxe-input>
        </p>

        import { defineComponent, reactive } from 'vue'

        export default defineComponent({
          setup  () {
            const demo1 = reactive({
              value800: '',
              value801: '',
              value802: '',
              value803: '',
              value804: '',
              value805: ''
            })
            return {
              demo1
            }
          }
        })
        `, `
        <p>
          <vxe-input v-model="demo1.value406" placeholder="日期和时间选择" type="datetime" transfer></vxe-input>
        </p>

        import { defineComponent, reactive } from 'vue'

        export default defineComponent({
          setup  () {
            const demo1 = reactive({
              value406: ''
            })
            return {
              demo1
            }
          }
        })
        `, `
        <p>
          <vxe-input v-model="demo1.value405" placeholder="时间选择" type="time" clearable></vxe-input>
        </p>

        import { defineComponent, reactive } from 'vue'

        export default defineComponent({
          setup  () {
            const demo1 = reactive({
              value405: ''
            })
            return {
              demo1
            }
          }
        })
        `, `
        <p>
          <vxe-input v-model="demo1.value500" placeholder="数值类型" type="number"></vxe-input>
          <vxe-input v-model="demo1.value501" placeholder="数值间隔 1.4" type="number" step="1.4" clearable></vxe-input>
          <vxe-input v-model="demo1.value502" placeholder="数值范围限制 0-10" type="number" min="0" max="10" clearable></vxe-input>
          <vxe-input v-model="demo1.value509" placeholder="允许输入科学计数" type="number" exponential clearable></vxe-input>
        </p>

        import { defineComponent, reactive } from 'vue'

        export default defineComponent({
          setup  () {
            const demo1 = reactive({
              value500: '22',
              value501: '',
              value502: '',
              value509: '1e+2'
            })
            return {
              demo1
            }
          }
        })
        `, `
        <p>
          <vxe-input v-model="demo1.value506" placeholder="整数类型" type="integer"></vxe-input>
          <vxe-input v-model="demo1.value507" placeholder="整数间隔 5" type="integer" step="5" clearable></vxe-input>
          <vxe-input v-model="demo1.value508" placeholder="整数范围限制 0-100" type="integer" min="0" max="100" clearable></vxe-input>
        </p>

        import { defineComponent, reactive } from 'vue'

        export default defineComponent({
          setup  () {
            const demo1 = reactive({
              value506: '44',
              value507: '',
              value508: ''
            })
            return {
              demo1
            }
          }
        })
        `, `
        <p>
          <vxe-input v-model="demo1.value503" placeholder="小数类型" type="float"></vxe-input>
          <vxe-input v-model="demo1.value504" placeholder="小数间隔 2.3" type="float" step="2.3" clearable></vxe-input>
          <vxe-input v-model="demo1.value505" placeholder="小数范围限制 0-50" type="float" min="0" max="50" clearable></vxe-input>
        </p>

        import { defineComponent, reactive } from 'vue'

        export default defineComponent({
          setup  () {
            const demo1 = reactive({
              value503: '33.33',
              value504: '',
              value505: ''
            })
            return {
              demo1
            }
          }
        })
        `, `
        <p>
          <vxe-input v-model="demo1.value600" placeholder="自定义前缀图标">
            <template #prefix>
              <i class="vxe-icon-question-circle-fill my-red"></i>
            </template>
          </vxe-input>
          <vxe-input v-model="demo1.value601" placeholder="自定义后缀图标">
            <template #suffix>
              <i class="vxe-icon-question-circle-fill my-green"></i>
            </template>
          </vxe-input>
          <vxe-input v-model="demo1.value602" class="my-domain" placeholder="自定义前缀模板">
            <template #prefix>
              <span>Http://</span>
            </template>
          </vxe-input>
          <vxe-input v-model="demo1.value603" class="my-search" placeholder="自定义后缀模板">
            <template #suffix>
              <i class="vxe-icon-question-circle-fill"></i>
            </template>
          </vxe-input>
        </p>

        import { defineComponent, reactive } from 'vue'

        export default defineComponent({
          setup  () {
            const demo1 = reactive({
              value600: '',
              value601: '',
              value602: '',
              value603: ''
            })
            return {
              demo1
            }
          }
        })

        .my-red {
          color: red;
        }
        .my-green {
          color: green;
        }
        .my-domain.vxe-input {
          height: 34px;
          width: 300px;
        }
        .my-domain.vxe-input .vxe-input--prefix {
          width: 60px;
          height: 32px;
          top: 1px;
          text-align: center;
          border-right: 1px solid #dcdfe6;
          background-color: #f5f7fa;
        }
        .my-domain.vxe-input .vxe-input--inner {
          padding-left: 72px;
          border: 1px solid #dcdfe6;
        }
        .my-search.vxe-input {
          height: 34px;
          width: 300px;
        }
        .my-search.vxe-input .vxe-input--suffix {
          width: 60px;
          height: 32px;
          top: 1px;
          text-align: center;
          border-left: 1px solid #dcdfe6;
          background-color: #f5f7fa;
          cursor: pointer;
        }
        .my-search.vxe-input .vxe-input--inner {
          padding-right: 72px;
          border: 1px solid #dcdfe6;
        }
        `,
        `
        import { defineComponent, reactive } from 'vue'
        import { VxeInputPropTypes, VxeInputDefines } from 'vxe-table'
        import XEUtils from 'xe-utils'

        export default defineComponent({
          setup  () {
            const demo1 = reactive({
              value100: '',
              value101: '',
              value102: '',
              value103: '',
              value200: '',
              value201: '',
              value202: '',
              value203: '',
              value300: '',
              value301: '',
              value302: '',
              value303: '',
              value400: '',
              value401: '',
              value402: '',
              value403: '',
              value404: '',
              value405: '',
              value406: '',
              value407: '',
              value408: '2020-10-01',
              value409: '2020-10-01',
              value500: '22',
              value501: '',
              value502: '',
              value503: '33.33',
              value504: '',
              value505: '',
              value506: '44',
              value507: '',
              value508: '',
              value509: '1e+2',
              value600: '',
              value601: '',
              value602: '',
              value603: '',
              value701: '',
              value702: '',
              value703: '',
              value704: '',
              value705: '',
              value706: '',
              value707: '',
              value800: '',
              value801: '',
              value802: '',
              value803: '',
              value804: '',
              value805: ''
            })

            const disabledDateMethod: VxeInputPropTypes.DisabledMethod = (params) => {
              const { date } = params
              const dd = date.getDate()
              return dd > 15
            }

            // 渲染日期小圆点
            const noticeMaps: { [key: string]: VxeInputDefines.DateFestivalInfo } = {
              20200910: {
                notice: true, // 显示小圆点事件通知
                important: true, // 是否标记为重要节日
                label: '活动'
              },
              20201015: {
                notice: true,
                important: true,
                label: '聚餐'
              },
              20201108: {
                notice: true,
                label: '爬山'
              },
              20201222: {
                notice: true,
                label: '游泳'
              }
            }
            const festivalNoticeMethod: VxeInputPropTypes.FestivalMethod = (params) => {
              const { date, viewType } = params
              if (viewType === 'day') {
                const ymd = XEUtils.toDateString(date, 'yyyyMMdd')
                return noticeMaps[ymd] || { label: '无' }
              }
            }

            // 显示日期农历节假日
            const calendarMaps: { [key: string]: VxeInputDefines.DateFestivalInfo } = {
              20200930: {
                label: '十四' // 显示节日名称
              },
              20201001: {
                label: '国庆节,中秋节', // 如果同一天拥有多个节日重叠，用逗号分开
                important: true, // 是否标记为重要节日
                extra: '休' // 右上角额外显示的名称
              },
              20201002: {
                label: '十六',
                extra: '休'
              },
              20201003: {
                label: '十七',
                extra: '休'
              },
              20201004: {
                label: '十八',
                extra: '休'
              },
              20201005: {
                label: '十九',
                extra: '休'
              },
              20201006: {
                label: '二十',
                extra: '休'
              },
              20201007: {
                label: '廿一',
                extra: '休'
              },
              20201008: {
                label: '寒霜',
                important: true,
                extra: '休'
              },
              20201009: {
                label: '廿三'
              },
              20201010: {
                label: '廿四',
                extra: {
                  label: '班',
                  important: true // 是否标记为重要节日
                }
              }
            }
            const festivalCalendarMethod: VxeInputPropTypes.FestivalMethod = (params) => {
              const { date, viewType } = params
              if (viewType === 'day') {
                const ymd = XEUtils.toDateString(date, 'yyyyMMdd')
                return calendarMaps[ymd] || { label: '无' }
              }
            }

            return {
              demo1,
              disabledDateMethod,
              festivalNoticeMethod,
              festivalCalendarMethod
            }
          }
        }
        `,
        `
        .my-red {
          color: red;
        }
        .my-green {
          color: green;
        }
        .my-domain.vxe-input {
          height: 34px;
          width: 300px;
        }
        .my-domain.vxe-input .vxe-input--prefix {
          width: 60px;
          height: 32px;
          top: 1px;
          text-align: center;
          border-right: 1px solid #dcdfe6;
          background-color: #f5f7fa;
        }
        .my-domain.vxe-input .vxe-input--inner {
          padding-left: 72px;
          border: 1px solid #dcdfe6;
        }
        .my-search.vxe-input {
          height: 34px;
          width: 300px;
        }
        .my-search.vxe-input .vxe-input--suffix {
          width: 60px;
          height: 32px;
          top: 1px;
          text-align: center;
          border-left: 1px solid #dcdfe6;
          background-color: #f5f7fa;
          cursor: pointer;
        }
        .my-search.vxe-input .vxe-input--inner {
          padding-right: 72px;
          border: 1px solid #dcdfe6;
        }
        `
      ]
    }
  }
})
</script>

<style lang="scss" scoped>
.my-red {
  color: red;
}
.my-green {
  color: green;
}
.my-domain.vxe-input {
  height: 34px;
  width: 300px;
}
.my-domain.vxe-input:deep() .vxe-input--prefix {
  width: 60px;
  height: 32px;
  top: 1px;
  text-align: center;
  border-right: 1px solid #dcdfe6;
  background-color: #f5f7fa;
}
.my-domain.vxe-input:deep() .vxe-input--inner {
  padding-left: 72px;
  border: 1px solid #dcdfe6;
}
.my-search.vxe-input {
  height: 34px;
  width: 300px;
}
.my-search.vxe-input:deep() .vxe-input--suffix {
  width: 60px;
  height: 32px;
  top: 1px;
  text-align: center;
  border-left: 1px solid #dcdfe6;
  background-color: #f5f7fa;
  cursor: pointer;
}
.my-search.vxe-input:deep() .vxe-input--inner {
  padding-right: 72px;
  border: 1px solid #dcdfe6;
}
</style>
