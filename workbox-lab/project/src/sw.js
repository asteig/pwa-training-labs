importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js');

if(workbox) {
	console.log('Yay! Workbox is loaded!');
	workbox.precaching.precacheAndRoute([]);
} else {
	console.log('Boo! Workbox didn\'t load :(');
}

workbox.routing.registerRoute(
  /(.*)articles(.*)\.(?:png|gif|jpg)/,
  workbox.strategies.cacheFirst({
    cacheName: 'images-cache',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 50,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
      })
    ]
  })
);