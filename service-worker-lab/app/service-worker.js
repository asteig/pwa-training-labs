self.addEventListener('install', event => {
	//good place to cache static assets
	console.log('Service worker is installing...');
	// add call to skipWaiting
});

self.addEventListener('activate', event => {
	console.log('Service worker activating...');
});

self.addEventListener('fetch', event => {
	console.log('Fetching:', event.request.url)
});