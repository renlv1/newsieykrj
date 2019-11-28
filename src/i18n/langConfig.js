import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { messages } from './langData'

Vue.use(VueI18n)

const lansie = 'EN' // 默认为英文
export const i18n = new VueI18n({
  locale: lansie, // set locale
  messages // set locale langData
})
if (window.localStorage.getItem('sielan') === null) {
  i18n.locale = lansie
} else { // 根据用户上次的选择的语言来显示语言
  i18n.locale = window.localStorage.getItem('sielan')
}
