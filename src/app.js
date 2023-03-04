console.log(new URL('./sw.js', import.meta.url).href)

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register(new URL('./sw.js', import.meta.url), { type: 'module', scope: '/' });
};
