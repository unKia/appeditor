// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import './custom.css'

//export default DefaultTheme

import MyLayout from './MyLayout.vue'
import NotFou from './NotFou.vue'

export default {
  extends: DefaultTheme,
  // override the Layout with a wrapper component that
  // injects the slots
  Layout: MyLayout, NotFou
}