import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [
    [
      'link',
      { href: 'https://cdn.jsdelivr.net/gh/rastikerdar/sahel-font@v3.4.0/dist/font-face.css', rel: 'stylesheet' }
    ]
  ],
  
  title: "مستندات اپ‌ادیتور ‌ ‌ ‌ ‌ ‌",
  description: "توضیحات",
  cleanUrls: true,
  locales: {
    root: {
      label: 'fa',
      lang: 'fa',
      dir: 'rtl',
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'خانه', link: '/' },
      { text: 'پنل ‌ ‌', link: 'https://panel.appeditor.ir' }
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
      {
        icon: {
          svg: ''
        },
        link: '',
        // You can include a custom label for accessibility too (optional but recommended):
        ariaLabel: ''
      }
    ],
    aside: 'left',
    search: {
      provider: 'local',
      options: {
        locales: {
          root: { // make this `root` if you want to translate the default locale
            translations: {
              button: {
                buttonText: '1',
                buttonAriaLabel: '2'
              },
              modal: {
                displayDetails: '3',
                resetButtonTitle: '4',
                backButtonTitle: '5',
                noResultsText: '6',
                footer: {
                  selectText: '7',
                  selectKeyAriaLabel: '8',
                  navigateText: '9',
                  navigateUpKeyAriaLabel: '10',
                  navigateDownKeyAriaLabel: '11',
                  closeText: '12',
                  closeKeyAriaLabel: '13'
                }
              }
            }
          }
        }
      }
    },

    outline: {
      label: 'محتوای این صفحه:'
    }
  }
})