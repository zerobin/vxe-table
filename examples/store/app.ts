/*
 * @Date: 2023-05-04 14:56:37
 * @LastEditors: 庄鸿斌
 * @LastEditTime: 2023-05-04 15:18:06
 */
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state () {
    return {
      docsVersion: '4',
      baseApiUrl: process.env.VUE_APP_MAIN_URL,
      pluginApiUrl: `${process.env.VUE_APP_MAIN_URL}plugins/`,
      serveApiUrl: 'https://api.vxetable.cn/demo',
      showSupportQQ: false
    }
  },
  actions: {
    setSupportQQ (visible: any) {
      this.showSupportQQ = !!visible
    }
  }
})
