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
      // { text: 'متن', link: '/pricing' },
      // { text: 'متن', link: '/item' },
      {
        text: 'بیشتر ‌',
        items: [
          { text: 'امکانات و تعرفه‌ها', link: '/pricing' },
          { text: 'پشتیبانی', link: '/support' },
        ]
      },
      { text: 'پنل ‌ ‌', link: 'https://panel.appeditor.ir' }
    ],

    sidebar: [
      {
      text: 'شروع',
      //icon: "tip",
      // optional, link of group title
      //path: "/get-started/",
      // optional, will be appended to each item link
      //prefix: "/foo/",
      collapsed: true,
      items: [
        { text: '...', link: '/get-started/register' },
        { text: '...', link: '/get-started/first-app' },
      ]
    },
    {
      text: 'طراحی اپلیکیشن',
      collapsed: true,
      //path:'/application-design/page-design',
      items: [
        { text: '...', link: '/application-design/design-environment' },
        { text: '...', link: '/application-design/page-design' },
        { text: '...', link: '/application-design/widgets/introduction' },
        //'/application-design/widgets/layout',//به بخش معرفی ویجت منتقل شود
        //'/application-design/widgets/animation',//به بخش معرفی ویجت منتقل شود
        {
          text:'انواع ویجت',
          collapsed:true,
          //path:'/application-design/widgets/introduction',
          items:[
            /*{text:'#گروه',link:'under-construction'},//'/application-design/widgets/group',
            {text:'#متن',link:'under-construction'},//'/application-design/widgets/text',
            {text:'#متن پیشرفته',link:'under-construction'},//'/application-design/widgets/text',
            {text:'#دکمه',link:'under-construction'},//'/application-design/widgets/button',
            {text:'#عکس',link:'under-construction'},//'/application-design/widgets/image',
            {text:'#پخش کننده صوت',link:'under-construction'},//'/application-design/widgets/audio',
            {text:'#پخش کننده ویدئو',link:'under-construction'},//'/application-design/widgets/video',
            {text:'#نمایشگر وب(وب ویو)',link:'under-construction'},//'/application-design/widgets/webview',*/
            { text: '...', link: '/application-design/widgets/pdf' },
            { text: '...', link: '/application-design/widgets/tapsell' },
            { text: '...', link: '/application-design/widgets/rss-reader' },
            { text: '...', link: '/application-design/widgets/favorites' },
            { text: '...', link:  '/application-design/widgets/tab' },
            { text: '...', link: '/application-design/widgets/form' },
            { text: '...', link: '/application-design/widgets/slide' },
            
          ]
        },
        
        { text: '...', link: '/application-design/menu-design' },//انواع منو
        { text: '...', link: '/application-design/iab-items' },
        { text: '...', link: '/application-design/templates' },
        { text: '...', link: '/application-design/icons' },
        { text: '...', link: '/application-design/events' },
        { text: '...', link: '/application-design/actions' },
        { text: '...', link: '/application-design/conditions' },
        { text: '...', link: '/application-design/variables/' },
        { text: '...', link: '/application-design/javascript' },
      
      ]
    },
    {
      text: 'سرویس ها',
      collapsed: true,
      //collapsed:false,
      items: [
        { text: '...', link: '/services/shop-maker/' },
        { text: '...', link: '/services/form-builder' },
        { text: '...', link: '/services/account' },
        { text: '...', link: '/services/in-app-purchase' },
        { text: '...', link: '/services/online-content-update' },
        { text: '...', link: '/services/update-version' },
        { text: '...', link: '/services/notification' },
        { text: '...', link: '/services/ads' },
        { text: '...', link: '/services/wordpress' },
        { text: '...', link: '/services/woocommerce' },

        ,//فروشگاه ساز
        ,//فرم ساز
        ,//حساب کاربری
        ,//پرداخت درون برنامه ای
        ,//آپدیت آنلاین محتوا
        ,//آپدیت آنلاین محتوا
        ,
        ,//تبلیغات
        
      ]
    },
    {
      text: 'ساخت و دریافت خروجی',
      collapsed: true,
      //collapsed:false,
      items: [
        { text: '...', link: '/make-application/configs' },
        { text: '...', link: '/make-application/keystore' },
        { text: '...', link:  '/make-application/source-code' },
        { text: '...', link:  '/make-application/output' },
        
      ]
    },
    {
      text: 'آموزشهای متفرقه',
      collapsed: true,
      //collapsed:false,
      items: [
        { text: '...', link: '/other/how-to-embed-aparat-video' },
        { text: '...', link: '/other/how-to-turn-a-site-into-an-application' },
        
      ]
    },],

/* [
      {
        text: 'آشنایی اولیه',
        collapsed: false,
        items: [
          { text: 'مقدمه', link: '/Introduction' },
          { text: 'شروع به کار', link: '/hey' },
          { text: 'آشنایی با پنل', link: '/markdown-examples' },

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

    */

    aside: false,
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
      label: 'محتوای این صفحه ‌',
      level: 'deep',
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