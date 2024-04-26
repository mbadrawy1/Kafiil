import { Input } from "@/ui/input"
import { Button } from "@/ui/button"
import { CardContent, Card } from "@/ui/card"

export default function Services() {
  return (
    <>
    <div dir="rtl">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">اكتشف خدماتنا على الانترنت</h1>
            <p className="text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            ابحث عن الخدمة الحرة المثالية لاحتياجات مشروعك. تصفح اختيارنا اليدوي لأفضل الخدمات المصنفة حسب فئات متنوعة.
            </p>
            <form className="flex max-w-xl items-center rounded-md bg-white shadow-sm dark:bg-gray-950">
              <SearchIcon className="ml-4 h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-400" />
              <Input
                className="w-full rounded-md border-none py-3 pl-3 pr-4 text-gray-900 placeholder:text-gray-500 focus:ring-0 dark:bg-gray-950 dark:text-gray-50 dark:placeholder:text-gray-400"
                placeholder="ابحث فى الخدمات"
                type="search"
              />
            </form>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">التصميم</h2>
              <p className="mt-2 text-gray-500 dark:text-gray-400 md:text-lg">
                أحضر افكارك للحياة
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <Card>
                <CardContent className="space-y-4">
                  <BrushIcon className="h-10 w-10 text-gray-500 dark:text-gray-400" />
                  <h3 className="text-lg font-semibold">تصميم اللوجوهات</h3>
                  <p className="text-gray-500 dark:text-gray-400">أنشئ شعارًا فريدًا وذاكرًا لعلامتك التجارية.</p>
                  <Button size="sm" variant="link">
                    عرض الخدمة
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="space-y-4">
                  <PaletteIcon className="h-10 w-10 text-gray-500 dark:text-gray-400" />
                  <h3 className="text-lg font-semibold">التصميم الجرافيكي</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    ارتقى بتصاميك
                  </p>
                  <Button size="sm" variant="link">
                    عرض الخدمة
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="space-y-4">
                  <ImageIcon className="h-10 w-10 text-gray-500 dark:text-gray-400" />
                  <h3 className="text-lg font-semibold">تعديل الصور</h3>
                  <p className="text-gray-500 dark:text-gray-400">تحسن و تعديل الصور</p>
                  <Button size="sm" variant="link">
                    عرض الخدمة
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="space-y-4">
                  <VideoIcon className="h-10 w-10 text-gray-500 dark:text-gray-400" />
                  <h3 className="text-lg font-semibold">تعديل الفيديو</h3>
                  <p className="text-gray-500 dark:text-gray-400">ُحسن فيديوهاتك</p>
                  <Button size="sm" variant="link">
                    View Service
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="space-y-8 pt-12">
            <div>
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">التسويق الرقمى</h2>
              <p className="mt-2 text-gray-500 dark:text-gray-400 md:text-lg">
                تواصل مع جمهورك و ابنى وجود قوى على وسائل التواصل الاجتماعى

              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <Card>
                <CardContent className="space-y-4">
                  <MegaphoneIcon className="h-10 w-10 text-gray-500 dark:text-gray-400" />
                  <h3 className="text-lg font-semibold">التسويق على السوشيال ميديا</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    ابنى وجود قوى على وسائل التواصل الاجتماعى
                  </p>
                  <Button size="sm" variant="link">
                    عرض الخدمة
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="space-y-4">
                  <RocketIcon className="h-10 w-10 text-gray-500 dark:text-gray-400" />
                  <h3 className="text-lg font-semibold">تحسين محرك البحث</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    ارتقى بموقعك على محركات البحث
                  </p>
                  <Button size="sm" variant="link">
                    عرض الخدمة
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="space-y-4">
                  <BarChartIcon className="h-10 w-10 text-gray-500 dark:text-gray-400" />
                  <h3 className="text-lg font-semibold">ادفع حسب الضغط</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    
                  </p>
                  <Button size="sm" variant="link">
                    عرض الخدمة
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="space-y-4">
                  <MailIcon className="h-10 w-10 text-gray-500 dark:text-gray-400" />
                  <h3 className="text-lg font-semibold">التسويق عن طريق الايميل</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    تواصل مع عملائك عبر الايميل
                  </p>
                  <Button size="sm" variant="link">
                    عرض الخدمة
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="space-y-8 pt-12">
            <div>
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">الكتابة و الترجمة</h2>
              <p className="mt-2 text-gray-500 dark:text-gray-400 md:text-lg">
                ابهر جمهورك بمحتوى مميز و جذاب
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <Card>
                <CardContent className="space-y-4">
                  <PencilIcon className="h-10 w-10 text-gray-500 dark:text-gray-400" />
                  <h3 className="text-lg font-semibold">كتابة المحتوى</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    
                  </p>
                  <Button size="sm" variant="link">
                    عرض الخدمة
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="space-y-4">
                  <GlobeIcon className="h-10 w-10 text-gray-500 dark:text-gray-400" />
                  <h3 className="text-lg font-semibold">Translation</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    صلح محتواك ليصل لجمهور اوسع
                  </p>
                  <Button size="sm" variant="link">
عر ض الخدمة 
                 </Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="space-y-4">
                  <BookIcon className="h-10 w-10 text-gray-500 dark:text-gray-400" />
                  <h3 className="text-lg font-semibold">التدقيق اللغوى</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    تأكد من خلو محتواك من الأخطاء و انه مصقول
                  </p>
                  <Button size="sm" variant="link">
                    عرض الخدمة
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="space-y-4">
                  <FileEditIcon className="h-10 w-10 text-gray-500 dark:text-gray-400" />
                  <h3 className="text-lg font-semibold"> التدقيق اللغوى </h3>
                  <p className="text-gray-500 dark:text-gray-400">تأكد من خلو محتواك من الاخطاء </p>
                  <Button size="sm" variant="link">
                    عرض الخدمة
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="space-y-8 pt-12">
            <div>
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">الخدمات المميزة</h2>
              <p className="mt-2 text-gray-500 dark:text-gray-400 md:text-lg">
                تصفح عددا من خدماتنا المميزة
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="relative overflow-hidden">
                <img
                  alt="Featured Service"
                  className="absolute inset-0 h-full w-full object-cover"
                  height={400}
                  src="/g.png"
                  style={{
                    aspectRatio: "600/400",
                    objectFit: "cover",
                  }}
                  width={600}
                />
                <div className="relative z-10 bg-gradient-to-t from-gray-900/80 to-transparent p-6 text-white">
                  <h3 className="text-xl font-semibold">تصميم المواقع</h3>
                  <p className="mt-2 text-gray-300">
                   ابنى موقع مميز يحسن علامتك التجارية
                  </p>
                  <Button className="mt-4 text-white" size="sm" variant="link">
                   عرض الخدمة
                  </Button>
                </div>
              </Card>
              <Card className="relative overflow-hidden">
                <img
                  alt="Featured Service"
                  className="absolute inset-0 h-full w-full object-cover"
                  height={400}
                  src="/g.png"
                  style={{
                    aspectRatio: "600/400",
                    objectFit: "cover",
                  }}
                  width={600}
                />
                <div className="relative z-10 bg-gradient-to-t from-gray-900/80 to-transparent p-6 text-white">
                  <h3 className="text-xl font-semibold">تطوير تطبيقات الهاتف</h3>
                  <p className="mt-2 text-gray-300">
                    احضر فكرتك للتكنولوجيا
                  </p>
                  <Button className="mt-4 text-white" size="sm" variant="link">
                    عرض الخدمة
                  </Button>
                </div>
              </Card>
              <Card className="relative overflow-hidden">
                <img
                  alt="Featured Service"
                  className="absolute inset-0 h-full w-full object-cover"
                  height={400}
                  src="/g.png"
                  style={{
                    aspectRatio: "600/400",
                    objectFit: "cover",
                  }}
                  width={600}
                />
                <div className="relative z-10 bg-gradient-to-t from-gray-900/80 to-transparent p-6 text-white">
                  <h3 className="text-xl font-semibold">العلامة التجارية</h3>
                  <p className="mt-2 text-gray-300">قم بتطوير هوية علامة تجارية قوية وذات ذاكرة دائمة لعملك.</p>
                  <Button className="mt-4 text-white" size="sm" variant="link">
                    عرض الخدمة
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

function BarChartIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  )
}


function BookIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  )
}


function BrushIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" />
      <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z" />
    </svg>
  )
}


function FileEditIcon(props : any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5" />
      <polyline points="14 2 14 8 20 8" />
      <path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z" />
    </svg>
  )
}


function GlobeIcon(props :any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}


function ImageIcon(props : any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  )
}


function MailIcon(props :any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}


function MegaphoneIcon(props :any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 11 18-5v12L3 14v-3z" />
      <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
    </svg>
  )
}


function PaletteIcon(props :any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="13.5" cy="6.5" r=".5" />
      <circle cx="17.5" cy="10.5" r=".5" />
      <circle cx="8.5" cy="7.5" r=".5" />
      <circle cx="6.5" cy="12.5" r=".5" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
    </svg>
  )
}


function PencilIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
      <path d="m15 5 4 4" />
    </svg>
  )
}


function RocketIcon(props :any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  )
}


function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function VideoIcon(props : any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 8-6 4 6 4V8Z" />
      <rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
    </svg>
  )
}
