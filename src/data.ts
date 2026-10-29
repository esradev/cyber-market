import { Product, Collection, Course, Review, ChangelogItem, SavedAsset, ActivityLog } from './types';

export const products: Product[] = [
  {
    id: 'vanta-horizon',
    title: 'فریم‌ورک افق وانتا',
    engTitle: 'VANTA_HORIZON',
    type: 'قالب',
    price: 129,
    description: 'استاندارد طلایی برای عملکرد عالی وردپرس. بهینه‌سازی شده برای Core Web Vitals به همراه سیستم طراحی اختصاصی آبسیدین.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDzhPMxqXMkHa8uUfiwnM41zD-521_SeO7uX7GSzU_x1r5rn9TnZxe0FwYFXsHMxhP9zgMZNBSobQIsYTjW9QqHYanYL5mFXsdezAzF1FF4p-ScLXpfjVb1fIbL_B0LOyrfGnnOyA_o3Obs3ZI3jIEqgnUI1iQV0DxuesRvOAYtOP_sOl89UNSFvHRLLGS6lS2Y-R2ZEe2fAhpNePUDSuN7YD82M6dLmpvxO82IRiQs4PQU4QvGs0Mt',
    tags: ['وردپرس', 'سرعت_بالا', 'طراحی_سازگار'],
    rating: 5,
    featured: true
  },
  {
    id: 'quantum-flow',
    title: 'پوسته جریان کوانتوم',
    engTitle: 'QUANTUM_FLOW',
    type: 'قالب',
    price: 79,
    description: 'جریان کوانتوم فقط یک قالب نیست؛ یک فریم‌ورک با کارایی فوق‌العاده بالا برای وب مدرن است. با تمرکز بر توسعه‌دهنده و تجربه کاربری شگفت‌انگیز.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDzO-HqYJvhulbx5W-mSZIlQY4FmzHxft2Dt631DDH9G6iBHOYrHtGUP0_pOVpa5buxb6TqzRHvPJFhv6G90uSq8aMrOS3sxkNyB0WQpvkj_p-4NqXkzCbEaQI66CdJ3W9jGbgVVhk3sUGl2dLfGy44B8H2ob0L7mZaAhzV-sXzTn9BqMzjug5tAfoDdRg13agjpef3C7lHxcixc7rWDq2ycLDPxDpI8zYmcGIlen1pH9Yr4JgjsGK5',
    tags: ['VITE', 'WIND', 'RTL_SUPPORT', 'سبک_وزن'],
    rating: 5,
    size: '15 KB'
  },
  {
    id: 'neural-dash-v2',
    title: 'افزونه داشبورد عصبی نسخه ۲',
    engTitle: 'NEURAL_DASH_V2',
    type: 'افزونه',
    price: 49,
    description: 'رابط کاربری مدیریتی کامل با ماژول‌های ردیابی متریک به صورت زنده و بهینه‌سازی پیشرفته برای حالت تاریک.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFNPvwnoHXZWPhXPQuwf0tVlZrUbwGo_eQ8v5TdeTkyTffpX38WhCMGFRZwBDeNBPx2ZRbDEFWI4dibkI28iOidlP6RvOR__upTXczGxKO5N5tpygoFHg81Jp1xZDr-9ppqzG2H2uBqXfpkqG0Khk5s8thugIuAZFtiKOUjjsnMuWSX2jLlapMyPjujDq9Y5Nnc4eflaoCEirxeDTMyiyvu1zLDtYniepJwBXDkM-ZKiKNwfO4cqdT',
    tags: ['REACT_18', 'TAILWIND_V3', 'FRAMER_MOTION'],
    rating: 4.8,
    size: '124 KB'
  },
  {
    id: 'crypto-node-exp',
    title: 'افزونه رمزنگاری کریپتو نود',
    engTitle: 'CRYPTO_NODE_EXP',
    type: 'افزونه',
    price: 'رایگان',
    description: 'میان‌افزار رمزنگاری پرسرعت برای شبکه‌های توزیع‌شده با کارایی بالا. بهینه‌سازی شده برای محیط‌های Node.js.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkcXROdsH68G9DmJf7p_GMDZTYter07ZHBFh3WdyVRs-nnh7IWAZYwYLapjp-O9UCjvjUhQ9SgIMCkolobfal8_tNu27aZOC4_NZMkSd1FX5SzMMDG4bnQpOcvKiimIg55R5os8Px30OODRyXS1ZH2AcAn66znHBTeXiFu-tiJ1ISaRw8k82-mQc9Vd2qpWHKaXdobxq1BGg6CZwaZFPD22O8cntVt0-Oc47fLmxeQT7bOKKo40qCK',
    tags: ['TYPESCRIPT', 'WEB3', 'WASM'],
    rating: 4.7,
    size: '86 KB'
  },
  {
    id: 'voxel-gen-pro',
    title: 'ابزار تولید نقشه سه بعدی وکسل',
    engTitle: 'VOXEL_GEN_PRO',
    type: 'ابزار',
    price: 120,
    description: 'سیستم تولید زمین‌های سه‌بعدی رویه‌شناسی مبتنی بر Three.js در مرورگر با قابلیت تغییر لحظه‌ای سطح جزئیات (LOD).',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAoQV_wBjL4wRWrp3SMlLn4zePcYTn3-20wmCS7aiQnC7szV0Zf1eCaKMSu3XsXTtoHeBzCe3e6jfQmU9R6XlSXCZlfhZqtN1C1dIqaiEWnhMvtudc4uULlNpnPjhw2z-1RmB3dceXb7ETEgd7rNY7HqHdnD20bLrBW56kSUf2H5EZAUe7tP1jL3ZIP75bPWQutPDVoqPwRB2NuAhq2RMtgaxVVLGFoZsLYrU1x5EFIis-jMZUq9kLT',
    tags: ['THREE.JS', 'WEBGL', 'GLSL'],
    rating: 4.9,
    size: '1.2 MB'
  },
  {
    id: 'cyber-ui-mega-kit',
    title: 'کیت پیشرفته رابط کاربری سایبر',
    engTitle: 'CYBER_UI_MEGA_KIT',
    type: 'کتابخانه',
    price: 199,
    description: 'سیستم طراحی همه‌کاره برای توسعه‌دهندگان حرفه‌ای. شامل بیش از ۵۰۰ کامپوننت، ۵۰ قالب صفحه و خط فرمان اختصاصی برای نمونه‌سازی سریع.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCyDALwA9KlYq3LMdB1rzQDOP_N_SJGfyRe84MzJIHn8NHCQRDVovtOA-Ko9wdX63sN1aqFArq9PfNa2B1JivV_SgYUOSpOguFtrG2h-lwJDUuBQbTmacnjCzN8VEJS1Jun_caaMEJsLfzLypGWuRpAsZsqPjDdpiIRheAHXkRkPfZylMGAOBCEVRMCAbD4wN8bO-YcC4dp26azf781Ev7kzbuppAe0Jffms_qtYXh6-zBL8U8QVSHF',
    tags: ['FIGMA', 'SVELTE', 'VUE_3', 'REACT'],
    rating: 5,
    size: '8.4 MB'
  },
  {
    id: 'logger-stream-ui',
    title: 'ابزار لاگر استریم کیوبرنتیس',
    engTitle: 'LOGGER_STREAM_UI',
    type: 'ابزار',
    price: 29,
    description: 'ابزار بصری‌سازی لحظه‌ای لاگ‌ها برای کلاسترهای کیوبرنتیس به همراه قابلیت‌های پیشرفته جستجو و سیستم هشدار هوشمند.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfTEPk8j9woKiTkWHxKKH78ovovICtsnZ3mNG4IYo-lPNCQAH41KeDXM-21qof9BcJiHc_qlj-TfY8_9ZelQLjmopxm9IBRny6oMuLW9Rj9XFc4Susoc88g5ikGZ9fd4r3ikxoBLI99RSlzpOYh6fLpXIemhpK69WY3yZHIIrEK8LU_BszUf4myfw39l-uvZDQlb8iCFKmy7MT-59StzdKwGjlUHkwfuEMoBFc_pS2gnGrT1gHcy96',
    tags: ['GO_LANG', 'DOCKER', 'K8S'],
    rating: 4.6,
    size: '42 KB'
  },
  {
    id: 'nexus-modal-engine',
    title: 'افزونه موتور مدال نکسوس',
    engTitle: 'NEXUS_MODAL_ENGINE',
    type: 'افزونه',
    price: 49,
    description: 'بهینه‌سازی‌های نسل جدید لودینگ‌ها، پنجره‌های پاپ‌آپ هوشمند و بلوک‌های تعاملی گردش کار با هوش مصنوعی.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADOH7Mvi9xXKOPkAGEQRzbfCY08mdsJINtr5WNGN1TfDvhbSlIFQu8OJVlKC8n1hKtTincH-ZmkhJY4la9Mnmt4YmxC-_mFemXV1p81u6igDWrlvd9CATmqPpRUE6Ea4IAfHUrbXaUqjj4ONNPOLTPe0pyy9JIGtb__9yKsyzFRjT_ucszR2iuWRjwkdNpo7NPC8BbF_ldz4EWhm1ZjxDtxJ1AVMU7p2_FkOZsPbhREEioW4KmGpl1',
    tags: ['وردپرس', 'AI_INTEGRATION', 'سبک_وزن'],
    rating: 4.9,
    size: '24 KB'
  },
  {
    id: 'data-stream-vis',
    title: 'پوسته بصری‌سازی جریان داده',
    engTitle: 'DATA_STREAM_VIS',
    type: 'قالب',
    price: 35,
    description: 'قالب فوق سبک با گراف‌های متحرک وب‌جوال و رابط‌های کاربری چشم‌نواز با تم تیره و مدرن.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDx7TPoV1VjXr5MLa-mGD3H5Byb1dktRyC_kh_9ZoiD7F2ed2VTj0ib4kjY24YKG_L4tqoVyYiSTC35ZJx8Bcf5i3kqRSmSi0Tl04XL_l_JjdIglnZ4O5CtiMjFa6lm5Hm05QW-MkUpz7e32ANB9elCsMbTcWklB5v1kHmFwoGWvN_sE_hJtxLFLJ15Exj7huJjysHztHmbnoBiLjGbc3Lpn4NbfqZTdR_eKwTLyfJadW9HfO40zAcj',
    tags: ['HTML5', 'CSS_ART', 'WEBGL'],
    rating: 4.7,
    size: '312 KB'
  }
];

export const collections: Collection[] = [
  {
    id: 'ecommerce-essentials',
    title: 'بسته ضروری فروشگاهی',
    badge: 'FEATURED_BUNDLE',
    description: 'فریم‌ورک کامل برای طراحی نسل بعدی رابط‌های فروشگاهی، بهینه‌سازی شده برای نرخ تبدیل بالا و نمایش خیره‌کننده محصولات.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB63nwDNiSBTPfOCx7fYWzbyYJbfiegYU6EgovghYCIruCycnLrs5N1PfH_oJ2dKdFMd1xP1Xves8Iv4oIMWdOSoCnjLn2ykXmSYnPspMMPF_SVyuelJb6MndPC6yGY_KJzWhOhumUHBobKPxjJZ-y1eJ296x-fD2JRN-ytTIDpEiDjoNZgNXYdi_Pecr5prxwIfEhNidIWH9morb8j8GqT9e0UVw82RyAp5H2BoM2mLtDFnBTuo6cf',
    items: [
      { number: '01', name: 'کامپوننت‌های تسویه حساب پویا', ext: '.JSX' },
      { number: '02', name: 'کتابخانه چیدمان کارت‌های آبسیدین', ext: '.FIG' },
      { number: '03', name: 'مجموعه نمادهای درخشان', ext: '.SVG', badge: 'جدید' },
      { number: '04', name: 'هوک‌های پیشرفته منطق فروشگاهی', ext: '.TS' }
    ],
    priceLabel: 'به همراه ۱۲ دارایی ویژه',
    actionLabel: '_دریافت_لایسنس_بسته'
  },
  {
    id: 'saas-starter',
    title: 'پک شروع کسب‌وکارهای ساس (SaaS)',
    badge: 'ENTERPRISE_GRADE',
    description: 'زیرساخت‌های مقیاس‌پذیر و اجزای فرانت‌اند بهینه‌سازی شده برای شروع پرسرعت پروژه‌های نرم‌افزاری بزرگ.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAoc5pVN8bw3afekyDXNLaCSLSddv3dK0yjbeeE-UyG5ZsxQfTb5kA44UwYFd7e4ZXmH9DP3MYa3kSrZRP7n2cCqMJuAkC2qbMh2ys17HzPckyg-hYwddrknithVl-tb3n-W9CBYR43N5hp_GqNtjb8V7WxXKQs0FLIr7HrXGQuZMg0pLEk3ejB38fQ1qm4VemONMnQOMWarlAvASn1TblUASEYGYS1_VlRt6d1pycKmMvHTMe90nRi',
    items: [
      { number: '01', name: 'جریان احراز هویت چندمستأجری', ext: '.TSX' },
      { number: '02', name: 'کامپوننت‌های پیشرفته چارت داده', ext: '.TSX' },
      { number: '03', name: 'سیستم تراکنش مالی چندسطحی', ext: '.PHP' }
    ],
    priceLabel: 'رایگان برای اعضای ویژه',
    actionLabel: '_بررسی_محتویات_پک'
  },
  {
    id: 'ai-tooling-kit',
    title: 'بسته ابزار هوش مصنوعی و شبکه عصبی',
    badge: 'NEURAL_READY',
    description: 'ابزارها، قالب‌ها و اسکریپت‌های ادغام شده با مدل‌های بزرگ زبانی برای ایجاد وب‌سایت‌های هوشمند آینده.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuApOAmT-W_uNVopKPhgvhMI-Vxv_-eT1YtTitjl_C91x-uEdwCrr7JBJy6MB5HzYcOgis63vGASKg_SHE5aB6E4sGOnlCIPqukXM2f32nSXjjYq9TE-PGRfsZCqfpStgUTIPMX9Wj-avSc0ntKi3k3FMYV-u-wMg2aZ5o3gRp8KqTBrcGK7RYSNz0q9NPckrKsYW3EsBZMZKl7kG4860IgsDLpyHrdErqSyEJlo8abMawlrb8YnvIma',
    items: [
      { number: '01', name: 'سیستم‌های گردش کار پرامپت LLM', ext: '.JSON' },
      { number: '02', name: 'پس‌زمینه‌های متحرک الگوی عصبی', ext: '.GLSL' },
      { number: '03', name: 'ماژول‌های رابط کاربری دیتابیس وکتور', ext: '.TSX' }
    ],
    priceLabel: 'نیاز به خرید لایسنس تکی',
    actionLabel: '_خرید_و_فعال‌سازی'
  }
];

export const courses: Course[] = [
  {
    id: 'advanced-shaders',
    title: 'مهندسی پیشرفته شیدرهای وب‌جوال (WebGL)',
    duration: '۱۲ ساعت و ۴۵ دقیقه',
    description: 'تسلط بر خلق عناصر گرافیکی رویه‌شناسی و رندرهای وب‌جوال با کارایی بالا. راهنمای عمیق شتاب‌دهی گرافیکی GPU برای فرانت‌اند وب مدرن.',
    progress: 64,
    badge: 'FEATURED_COURSE',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTT_BvKj1uBplzUFM-6WwpKe6PDDY3cc7ebXYPKIM_n7zsdGZrFiLK9KvxuU99ux6xSba2iW-jPqQPvDG7DFJe86yKte0Nazlr_i7eloQKv5LAOYb7MeZdHTTefP3L8ovphK9uvu6LCZer-bzMS_YUDPgnKEmyvB78m4Nuef55D-9CeaRGpYVz-7XYlw_HqQem3i4BQfS_1TzOdcLn0oaXeSKr3LVvRZ1hteMmnjg6Ya6cv2TNinqv',
    status: 'درحال یادگیری'
  },
  {
    id: 'rust-fullstack',
    title: 'توسعه فول‌استک با فریم‌ورک‌های زبان راست (Rust)',
    duration: '۱۸ ساعت',
    description: 'یادگیری توسعه وب ایمن از نظر حافظه و سریع با استفاده از Actix-Web و Leptos همراه با سیستم خروجی وب‌اسمبلی.',
    progress: 10,
    rating: 4.9,
    badge: 'Premium',
    badge2: 'Bestseller',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAslu8bfmkU1xqAH9130cHeEU0RzFBGX1dYzVOJhVGkRTxRDfhMque-YLB8J5HAPNWqisf9Oe0AbYSz320_Bq-MicMA8I7vzrRBfBlf0YTG-IiUUAPWga_8Q6GahCkwZFr9VrSLPQdIkK9i5opsRzJIE-QxOMLeA9ayribU3kLMqfl1Rgpvr5_ieMgcIq3CLJ1AKTlsqiBmCwmTr2JiVCv8vh4Y5ITDeqAvX_eIH2DATkFJmzXzIkZL',
    status: 'ثبت‌نام نشده'
  },
  {
    id: 'intro-k8s',
    title: 'آموزش جامع و صفر تا صد کیوبرنتیس (Kubernetes)',
    duration: '۸ ساعت',
    description: 'مدیریت و ارکستریشن کانتینرها مانند یک متخصص حرفه‌ای به همراه پیکربندی پایپ‌لاین‌های استقرار خودکار.',
    progress: 100,
    badge: 'رایگان',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuZzm6uqt42FpGWkPLlHC7ka3H_3clZdb-ZJOu_mlu4UTmpRKWIdkVymjfKF18epsROpOOEtQk9wbU3yjafz5II10wYAkn33AUduLcFvkNOBnXksQLwOqV4lIZHL3v6PQ6_K0L-cHsJUtGO59-DzHRqn5Lpbx-vyWcjSlWD91G37ogaq2kwAzFNdlRSiqNzvhC2yWXlIyUZhSD_UJ1CL6Q2sXBF4N7WU6tSHhouV-lrmra8I-6Htca',
    status: 'تکمیل شده'
  },
  {
    id: 'supabase-production',
    title: 'استقرار بک‌اند بدون سرور با سوپابیس (Supabase)',
    duration: '۹ ساعت و ۳۰ دقیقه',
    description: 'مدیریت پایگاه‌ داده و فراخوانی داده‌های بلادرنگ با سرویس‌های مقیاس‌پذیر و امن سوپابیس.',
    progress: 0,
    badge: 'Premium',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMws3GsDbAVHs44mfdRQA6pcrZrDKREt40Tb0DfxqkUbVhBKeWs-bSBlfAiQPizVUADpYZl1jF3RXX4oagRr0vI_eZFD56hxAIKXbHYnoNrtSxLN9uPE7CpaCie0RZaYKGEnpUyeuXAhPL0kbqjeQgfy0RvDsoRG15BmKGfF0QaZKD_dynBB1biz6sjqTy0UebhyrkpTSMcu67hzyxKBxnEY7h-kAK3h-H7FjkxpZxlO9pi1RCNW5h',
    status: 'شروع نشده'
  },
  {
    id: 'nextjs-14',
    title: 'بررسی عمیق و پیشرفته نکست‌جی‌اس نسخه ۱۴',
    duration: '۱۴ ساعت',
    description: 'تسلط کامل بر کامپوننت‌های سرور، اکشن‌های نکست و معماری نوین فولدربندی بر اساس App Router.',
    progress: 35,
    badge: 'رایگان',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOoRIKTwLI9PFZl1Y7hAnBvEgw96gj1bU4oJzIADCzRYR1Zbqnxn3i9v9F8wCT177M85xCcAVUUHfRHC96g_ZSBo5OkdRSRecYbhxAAFsv2g0v8en7GMq90l47gz8FBHAzehtl6W9iZ2TIzswHwGQqEXOFXPsbZ7sGRUVH1JWv2b83pdejnOOMGBT79F0cApczZvLyNSO78C8V9KQ-u2d5tHmaJxCNq_uyu1FrMXxc1n5HJdrWYDmp',
    status: 'درحال یادگیری'
  },
  {
    id: 'microservices-architecture',
    title: 'معماری میکروسرویس‌های توزیع‌شده',
    duration: '۱۶ ساعت و ۱۵ دقیقه',
    description: 'طراحی سیستم‌های مقیاس‌پذیر با استفاده از زبان جالب Go، پروتکل gRPC و الگوهای مبتنی بر رویداد (Event-Driven).',
    progress: 0,
    badge: 'Premium',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuByGd9XrbIjgPnZFWJjBLWIbucoP22YzBjPItiLYRtW_WwvpBjcaj0_0FkNrc8_x8euAfshpDiZgnP980-ZtdLadZnWioBl5O4r6XQ2G_1njwkOH9VVUjiCqyKT8heamp-ZtL7W88F_2xoVB4rIPrXnPQVSxsi46N_-7SZxubsdc1KVvKdOK3mHOvk5IUKf_CTnbGaug66-nJrGMUjXgkaONl6KlDpjCR_IytwjE7u0kMyRyjwfa2yR',
    status: 'ثبت‌نام نشده'
  }
];

export const reviews: Review[] = [
  {
    id: 'review-1',
    avatar: 'JS',
    username: '_S_CORE_DEV',
    rating: 5,
    text: 'پاک‌ترین ساختار کدهای فرانت‌اند و دام (DOM) که تا به حال در یک فریم‌ورک وردپرس دیده‌ام. هوک‌های توسعه دقیقاً در جاهای درستی قرار گرفته‌اند و متغیرهای راست‌چین، شخصی‌سازی برند را بسیار ساده می‌کنند. تغییردهنده واقعی بازی!'
  },
  {
    id: 'review-2',
    avatar: 'AM',
    username: 'امیرحسین_راد',
    rating: 5,
    text: 'عملکرد فوق‌العاده قالب‌ها و بارگذاری زیر ۱ ثانیه. پشتیبانی فنی از طریق تیکت‌ها شگفت‌انگیز است و بسته‌های کد مرتب به‌روزرسانی می‌شوند.'
  }
];

export const changelog: ChangelogItem[] = [
  {
    version: 'v4.2.0',
    codename: 'NEON_WAVE',
    date: '۲۴ اکتبر ۲۰۲۴',
    changes: [
      '+ یکپارچه‌سازی پس‌زمینه‌های مبتنی بر وب‌جوال سه‌بعدی',
      '+ ۴۰٪ کاهش در زمان هیدراتاسیون و رندر کلاینت',
      '* برطرف کردن خطای سرریز استک منوها در نمایشگرهای موبایل'
    ]
  },
  {
    version: 'v4.1.8',
    codename: 'STABILITY_PATCH',
    date: '۱۲ سپتامبر ۲۰۲۴',
    changes: [
      '+ بهبود رندرهای راست‌چین متون فارسی',
      '* رفع برخی باگ‌های جزئی در کامپوننت داک پاپ‌آپ'
    ]
  }
];

export const savedAssets: SavedAsset[] = [
  {
    id: 'save-1',
    title: 'پک شیدرهای شبکه عصبی پیشرفته',
    size: '۴.۲ گیگابایت',
    date: '۲۴ ژوئن',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIxv06VPs6eLHhHhmJLwUuSIRhIhifAARS_4lYJ_p_SswUQ1NbTO6zv7xfitJBQKy4nCZWUhOEpDxXv8wtFL_c-IoHxyiS9Hay01ut9N5J72Ty7cqkOsRlYSBYgBWJr_1k7yxEpuFoGwva1mfvsXjuIZ6a4-YCKZT_05feO0ivGrs0xwZ1QNeJacOcotVKM18ZYcTRkN0Sp-jqCz8PKjwN_w4dD4KdE6m_KWBJywiGy7PnmKGjAh8O'
  },
  {
    id: 'save-2',
    title: 'بافت‌های سه‌بعدی فلز جیوه مایع',
    size: '۱.۸ گیگابایت',
    date: '۲۰ ژوئن',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBXz3ACaGZQGMDOXFfmhaqxAd7UPeamRejD0P1sCYGP-8jgpJKzBj5kCdzGeT2JxG9oBrxiRQuvLgBQu2HVKyRHNSRIHYmPbHcwHGzckzwzfh5Hg53yyOw469EJxzIDgK6YMra3HbGpgFEIr5zjqounnxjjN7jomXDWdCRb79iGYi4q8YWH1TmVjiqvj7PYb5og06gI2KOh3b3gwUlk1qdlaSwIpVxk80brp4OR7v7dKjnhwxDXOk8'
  }
];

export const activityLogs: ActivityLog[] = [
  {
    id: 'act-1',
    text: "دانلود پکیج هسته فریم‌ورک 'AI_Framework'",
    time: '۲ ساعت پیش',
    type: 'download'
  },
  {
    id: 'act-2',
    text: "به‌روزرسانی کلید امنیتی هویت کاربری 'Cipher_Key'",
    time: 'دیروز',
    type: 'update'
  },
  {
    id: 'act-3',
    text: "اتمام موفق دوره آموزشی 'اصول پایه وب‌جوال'",
    time: '۳ روز پیش',
    type: 'course'
  }
];
