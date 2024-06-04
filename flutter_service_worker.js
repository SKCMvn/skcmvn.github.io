'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "c820eadf405e85127f4c3c0d6f5ca2fd",
"version.json": "05cabb68a05bc57b2892b2d5dce8eae5",
"index.html": "1a3314b0316ded33b428e71996af25d4",
"/": "1a3314b0316ded33b428e71996af25d4",
"main.dart.js": "7cea7b9714a6fb779c875f7ac88c081d",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "8b227d784778be84e496f786f1f2ae43",
"assets/AssetManifest.json": "b8eb8afe05c71a5596e0b595a33efa41",
"assets/NOTICES": "a629e09c97753e92a08bb9434b5119eb",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "bc9a53a6b8d491540614e5c206cf9121",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "efa6d98aa54158ab20d5225895cff556",
"assets/fonts/MaterialIcons-Regular.otf": "736d8af430565097717db0ff8dce5f17",
"assets/assets/images/insight_lt.png": "b00eb86e68ee3862175730251215206c",
"assets/assets/images/cauhoi/ct18.gomacaoxuongsatmat.jpg": "a05854aa73e497cbb8659521f09422ee",
"assets/assets/images/cauhoi/ct15.muithap.png": "cbe55a857e01190e8be6d426622c707a",
"assets/assets/images/cauhoi/ch01.3Moc.jpg": "66061219a3302d77e8adfe91867d5601",
"assets/assets/images/cauhoi/ct15.muithap.jpg": "19232c418b209270b2b1728756c62433",
"assets/assets/images/cauhoi/ch01.2Kim.jpg": "e2c80ea4f20009a1e8e8528a10e860d3",
"assets/assets/images/cauhoi/ct1.11.quaihamthonnhieudathit.jpg": "0b9f8f0fbe8a134bacbaf51df6a341b3",
"assets/assets/images/cauhoi/ch12lm.kdkn.jpg": "03bdbffd0cc22e665a10ee0a4a9ffaac",
"assets/assets/images/cauhoi/ch11lm.hep.jpg": "7040d4a23c98788332da7b1c4b1b01a8",
"assets/assets/images/cauhoi/ct1.10.camday.jpg": "50582386f7b71e8d4c309427f3181042",
"assets/assets/images/cauhoi/ct16.loMuiKin.jpg": "a8e8f5127bbd94ec86dc987c69c23b15",
"assets/assets/images/cauhoi/ct16.loMuiLo.jpg": "2e7cc99ffe83faebbc38beb8ab45018c",
"assets/assets/images/cauhoi/ct19.moitrungbinh.jpg": "6906a5e7b0172ce5e06b900c3eddde84",
"assets/assets/images/cauhoi/ch12lm.ratnhat.jpg": "2d54b61a8b707fbe4ec536e3848a310e",
"assets/assets/images/cauhoi/ct18.gomathapphang.jpg": "7529e08a9ea1c3ace55b0ad7cde635d5",
"assets/assets/images/cauhoi/ch01.1Hoa.jpg": "5d999a7774b1563d102ee0a31d0800f8",
"assets/assets/images/cauhoi/ch01.4Tho.jpg": "b26eb13971ea17ea7ce3638c122cefff",
"assets/assets/images/cauhoi/ct18.gomatotronnhieuthit.jpg": "0f41d2992ad36d60553106547adf4542",
"assets/assets/images/cauhoi/ct1.11.quaihamvuongbanhloxuong.jpg": "6c658acda949c23b6230dff792017582",
"assets/assets/images/cauhoi/ch14.matnho.jpg": "dce8c11e58bee417a22c6cd98097afeb",
"assets/assets/images/cauhoi/ct1.10.camlem.jpg": "2081b334cf4092b12710ecb2b8fa0bf2",
"assets/assets/images/cauhoi/ct1.10.camdung.jpg": "a9c33d3b73f438da5e0c0948dea5123a",
"assets/assets/images/cauhoi/ch11lm.lm2nt.jpg": "75e0e7badc3e815a2030f6bc0190eaff",
"assets/assets/images/cauhoi/ct19.moiday.jpg": "cd2a15bdf2b5394e7694503d2f4c1d5b",
"assets/assets/images/cauhoi/ct15.muict.jpg": "ed58fdce12227e133d6856306fb97c6e",
"assets/assets/images/cauhoi/ch14.matto.jpg": "880e1652731b3e9c8077d3bca4fb50e9",
"assets/assets/images/cauhoi/ch11lm.hon2nt.jpg": "71b43f1adf3d7562ed4d8ea4a5d1116d",
"assets/assets/images/cauhoi/ct17.daumuitotron.jpg": "40624b5fa2e70d8bdf417aa643ad38fb",
"assets/assets/images/cauhoi/ch12lm.ratdam.jpg": "f300ae028ae3292a07c1ce44199f7cd2",
"assets/assets/images/cauhoi/ct19.moimong.jpg": "2454b47e799ddd80340485131959c940",
"assets/assets/images/cauhoi/ch11lm.conotruoi.jpg": "8f3c0cc5ba7ffcd9ef96980a685389a4",
"assets/assets/images/cauhoi/ch13.dmxt.jpg": "27aa40da3a92e7dbadfb60c98de8e021",
"assets/assets/images/cauhoi/ch13.dmngang.jpg": "c33104f0095e33d31f8c8f6f8731126c",
"assets/assets/images/cauhoi/ct15.muicaogk.jpg": "e25c86695c10ae6511cfa7cedb14d221",
"assets/assets/images/cauhoi/ch13.dmlc.jpg": "a4a37628f94922047b732d94d6fcd99a",
"assets/assets/images/cauhoi/ct17.daumuinhonhon.jpg": "7a2004696b631f3d8b213c0c014044d0",
"assets/assets/images/10681Insight.jpeg": "ad9a59d3e34c7bc2dd7782529ef2b55c",
"assets/assets/muiten.png": "b104851ce9cd1117b23780127c39c57d",
"assets/assets/env.development": "02923cdd208784f7bf0aa9d93d154061",
"assets/assets/env.production": "1cf828e05955286df0024801e03fc861",
"canvaskit/skwasm.js": "f17a293d422e2c0b3a04962e68236cc2",
"canvaskit/skwasm.js.symbols": "c6f605aa7f865f54f11010319bec4307",
"canvaskit/canvaskit.js.symbols": "b85fedc601db924025e7936d851e7e7e",
"canvaskit/skwasm.wasm": "bb26b4bea4c773ab97d048ab90d1a56b",
"canvaskit/chromium/canvaskit.js.symbols": "9f2dfa8c181a437290aa2b58e55da15d",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.wasm": "3eb16b5849637ebd0c498a865a04baec",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.wasm": "35bd73cf3f754ad2e50a8df18c8c5dea",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
