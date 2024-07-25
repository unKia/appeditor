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
      { text: 'تغییرات اخیر', link: '/changelog' },
      {
        text: 'بیشتر',
        items: [
          { text: 'تعرفه‌ها', link: '/item-1' },
          { text: 'پشتیبانی', link: '/item-2' },
          { text: 'درباره‌ما', link: '/item-3' }
        ]
      },
      { text: 'پنل ‌ ‌', link: 'https://panel.appeditor.ir' }
    ],

    sidebar: [
      {
        text: 'نوشته‌ها',
        items: [
          { text: 'سلام رفیق  👋', link: '/hey' },
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
      label: 'محتوای این نوشته ‌'
    },
    docFooter: {
      prev: 'نوشته قبلی',
      next: 'نوشته بعدی'
    },
    darkModeSwitchLabel: 'حالت شب / روز',
    sidebarMenuLabel: '‌ ‌ لیست نوشته‌ها',
    returnToTopLabel: 'رفتن به بالای نوشته',
    footer: {
      message: 'توسعه داده شده با ‌ ❤️ و کمی بی‌خوابی! ‌ 😁',
      copyright: 'این پایگاه، منبع‌باز بوده و در <a href="https://github.com/unKia/appeditor">گیت‌هاب</a> در دسترس است.'
    }
    
}
})