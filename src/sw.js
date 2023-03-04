import { weather } from "./data/weather";
import nuageImg from './asset/img/nuage.png';
import soleilImg from './asset/img/soleil.png';
import orageImg from './asset/img/orage.png';
import pluieImg from './asset/img/pluie.png';
import icon512 from './asset/img/icon512.png';
import icon1024 from './asset/img/icon1024.png';
import weatherIcon from './asset/img/weatherIcon.png';


// Files to cache
const cacheName = 'meteo-v1';
const appShellFiles = [
    './src/',
    './src/index.html',
    './src/index.js',
    './src/data/weather.js',
    './src/createDay.js',
    './src/app.js',
    './src/index.css',
    './src/meteoWebmanifest.json',
];
const weatherImg = [icon512,
    icon1024,
    nuageImg,
    orageImg,
    pluieImg,
    soleilImg,
    weatherIcon,];

const contentToCache = appShellFiles.concat(weatherImg);

// Installing Service Worker
self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
    e.waitUntil((async () => {
        const cache = await caches.open(cacheName);
        console.log('[Service Worker] Caching all: app shell and content');
        await cache.addAll(contentToCache);
    })());
});

// Fetching content using Service Worker
self.addEventListener('fetch', (e) => {
    e.respondWith((async () => {
        const r = await caches.match(e.request);
        console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
        if (r) return r;
        const response = await fetch(e.request);
        const cache = await caches.open(cacheName);
        console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
        cache.put(e.request, response.clone());
        return response;
    })());
});