import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "مستندات اپ‌ادیتور",
  description: "توضیحات",
  cleanUrls: true,
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      dir: 'rtl'
    },
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
