import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [
    [
      'link',
      { href: 'https://v1.fontapi.ir/css/Estedad', rel: 'stylesheet' }
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

    logo: 'src/appeditor.svg',
    siteTitle: false,

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
                buttonText: 'جست‌وجو... ‌ ‌ ‌',
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
      label: 'محتوای این نوشته'
    },
    docFooter: {
      prev: 'نوشته قبلی',
      next: 'نوشته بعدی'
    },
    darkModeSwitchLabel: 'حالت شب / روز',
    sidebarMenuLabel: 'لیست نوشته‌ها',
    returnToTopLabel: 'رفتن به بالای نوشته',
    
}
})