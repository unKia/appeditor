// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import './custom.css'

import { h } from 'vue'
import NotFound from './NotFound.vue'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'aside-outline-before': () => h(NotFound)
    })
  }
}