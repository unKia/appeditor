import { defineConfig } from 'vitepress'
import type { ComputedRef, Ref, ShallowRef } from 'vue'

export interface DocSidebar {
  isOpen: Ref<true>
  sidebar: ComputedRef<['Markdown Examples', 'Runtime API Examples']>
  sidebarGroups: ComputedRef<[]>
  hasSidebar: ComputedRef<true>
  hasAside: ComputedRef<true>
  leftAside: ComputedRef<false>
  isSidebarEnabled: ComputedRef<true>
  open: () => void
  close: () => void
  toggle: () => void
}
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "مستندات اپ‌ادیتور",
  description: "توضیحات",
  cleanUrls: true,
  locales: {
    root: {
      label: 'English',
      lang: 'en'
    },
    rtl: {
      label: 'فارسی',
      lang: 'rtl', // optional, will be added  as `lang` attribute on `html` tag
      link: '/rtl' // default /fr/ -- shows on navbar translations menu, can be external

      // other locale specific properties...
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'خانه', link: '/' },
      { text: 'پنل کاربری', link: 'https://panel.appeditor.ir' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/unKia/appeditor' }
    ]
  }
})
