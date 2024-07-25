import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [
    [
      'link',
      { href: 'https://v1.fontapi.ir/css/Estedad', rel: 'stylesheet' }
    ]
  ],
  
  title: "پایگاه دانش اپ‌ادیتور ‌ ‌ ‌ ‌ ‌",
  description: "توضیحات",
  cleanUrls: true,
  locales: {
    root: {
      label: 'fa',
      lang: 'fa',
      dir: 'rtl',
    },
  },
  markdown: {
    image: {
      // image lazy loading is disabled by default
      lazyLoading: true
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {light: 'https://raw.githubusercontent.com/unKia/appeditor/main/docs/src/light.svg', dark: 'https://raw.githubusercontent.com/unKia/appeditor/main/docs/src/dark.svg', alt: 'appeditor',},

    nav: [
      { text: 'خانه', link: '/' },
      {
        text: 'توسعه',
        items: [
          { text: 'تغییرات اخیر', link: '/changelog' },
          { text: 'نقشه راه', link: '/hey' },
        ]
      },
      {
        text: 'بیشتر',
        items: [
          { text: 'تعرفه‌ها', link: '/pricing' },
          { text: 'پشتیبانی', link: '/item-2' },
          { text: 'درباره‌ما', link: '/item-3' }
        ]
      },
      { text: 'پنل ‌ ‌', link: 'https://panel.appeditor.ir' }
    ],

    sidebar: [
      {
        text: 'نوشته‌ها',
        collapsed: false,
        items: [
          { text: 'سلام رفیق  👋', link: '/hey' },
          { text: 'مثال نوشته‌ها', link: '/markdown-examples' },

        ]
      },
      {
        text: 'بیشتر',
        collapsed: false,
        items: [
          { text: 'تغییرات اخیر', link: '/changelog' },
          { text: 'تعرفه‌ها', link: '/pricing' },

        ]
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
                buttonAriaLabel: 'جست‌وجو... ‌ ‌ ‌'
              },
              modal: {
                displayDetails: 'جزئیات نتایج',
                resetButtonTitle: 'تنظیم مجدد',
                backButtonTitle: 'پاک کردن',
                noResultsText: 'نتیجه‌ای یافت نشد برای',
                footer: {
                  selectText: 'انتخاب نتیجه',
                  selectKeyAriaLabel: 'انتخاب کردن',
                  navigateText: 'جابه‌جایی بین نتایج',
                  navigateUpKeyAriaLabel: 'بالا رفتن',
                  navigateDownKeyAriaLabel: 'پایین آمدن',
                  closeText: 'بستن پنجره جست‌وجو',
                  closeKeyAriaLabel: 'بستن'
                }
              }
            }
          }
        }
      }
    },
    outline: {
      label: 'محتوای این صفحه ‌'
    },
    docFooter: {
      prev: 'نوشته قبلی',
      next: 'نوشته بعدی'
    },
    darkModeSwitchLabel: 'حالت شب / روز',
    sidebarMenuLabel: '‌ ‌ لیست محتوا',
    returnToTopLabel: 'رفتن به بالای صفحه',
    footer: {
      message: 'توسعه داده شده با ‌ ❤️',
      copyright: 'اپ‌ادیتور | ۱۴۰۳-۱۳۹۷'
    }
    
}
})