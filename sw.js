self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
});

self.addEventListener('fetch', (e) => {
    // Tạm thời bỏ qua cache để luôn lấy dữ liệu mới nhất từ Google Sheets
});
