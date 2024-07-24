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
      { text: ' پنل', link: 'https://panel.appeditor.ir' }
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

    /* socialLinks: [
      {
        icon: {
          svg: ''
        },
        link: '',
        // You can include a custom label for accessibility too (optional but recommended):
        ariaLabel: ''
      }
    ], */
    aside: 'left',
    search: {
      provider: 'local'
    }
  }
})
