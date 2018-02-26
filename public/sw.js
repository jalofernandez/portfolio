var CACHE_NAME = 'jalofernandez-cache';
var urlsToCache = [
    '/',
    '/index.html',
    '/css/index.css',
    '/css/portfolio.css',
    '/js/jquery.min.js',
    '/js/main.js',
    '/js/scripts.min.js'
];

self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', function(event) {
    console.log(event.request.url);
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
