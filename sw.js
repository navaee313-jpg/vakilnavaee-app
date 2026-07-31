/* ============================================================
   Service Worker حداقلی برای شمیم عدالت
   ------------------------------------------------------------
   این فایل عمداً هیچ کش آفلاینی انجام نمی‌دهد، چون تقویم، وضعیت
   بازه‌های بسته‌شده، و ثبت رزرو همگی به داده‌ی زنده‌ی Google Sheet
   وابسته‌اند؛ کش کردن HTML باعث می‌شود کاربر نسخه‌ی قدیمی را ببیند.
   تنها وظیفه‌اش این است که PWA قابل نصب باشد بدون شکستن fetchها.
   ============================================================ */

self.addEventListener('install', function(event){
  self.skipWaiting();
});

self.addEventListener('activate', function(event){
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(event){
  // عبور مستقیم — بدون کش، بدون تغییر رفتار شبکه
  event.respondWith(fetch(event.request));
});
