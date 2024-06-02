'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "1bfbda777d9b9fc45b158a76b8a5885f",
"version.json": "881ff8f0be58c4a655f514f19b4ac9b0",
"index.html": "f36a35d158e495cb9a04c5772ff75445",
"/": "f36a35d158e495cb9a04c5772ff75445",
"main.dart.js": "dedf2fe9b6b51df63a4110bcf8618c06",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "8b227d784778be84e496f786f1f2ae43",
"assets/AssetManifest.json": "903b01cca41eb9ad1b5e54f9efb48e38",
"assets/NOTICES": "a629e09c97753e92a08bb9434b5119eb",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "0e99b5963d4efe6e8ef9b4ee85ccc6a1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "4910947e3d57cd9c5607f704ebc12bd3",
"assets/fonts/MaterialIcons-Regular.otf": "736d8af430565097717db0ff8dce5f17",
"assets/assets/images/insight_lt.png": "b00eb86e68ee3862175730251215206c",
"assets/assets/images/cauhoi/ct18.gomacaoxuongsatmat.jpg": "a05854aa73e497cbb8659521f09422ee",
"assets/assets/images/cauhoi/ct15.muithap.png": "cbe55a857e01190e8be6d426622c707a",
"assets/assets/images/cauhoi/ch01.2Kim.png": "87c2d6e245a82e9e95b16045885fb73a",
"assets/assets/images/cauhoi/ch01.3Moc.png": "37dda0da21da8284b8d1e62610387663",
"assets/assets/images/cauhoi/ct1.11.quaihamthonnhieudathit.jpg": "0b9f8f0fbe8a134bacbaf51df6a341b3",
"assets/assets/images/cauhoi/ch12lm.kdkn.png": "6a5d7ff86f82217f713ba14c3c8e14b7",
"assets/assets/images/cauhoi/ct1.10.camday.jpg": "50582386f7b71e8d4c309427f3181042",
"assets/assets/images/cauhoi/ct16.loMuiKin.jpg": "a8e8f5127bbd94ec86dc987c69c23b15",
"assets/assets/images/cauhoi/ct16.loMuiLo.jpg": "2e7cc99ffe83faebbc38beb8ab45018c",
"assets/assets/images/cauhoi/ct19.moitrungbinh.jpg": "6906a5e7b0172ce5e06b900c3eddde84",
"assets/assets/images/cauhoi/ct18.gomathapphang.jpg": "7529e08a9ea1c3ace55b0ad7cde635d5",
"assets/assets/images/cauhoi/ch12lm.ratnhat.png": "b7c80ad796c97ed92f41427610d665b9",
"assets/assets/images/cauhoi/ch01.1Hoa.png": "71ce512382c9c8b83891879dd4931ba7",
"assets/assets/images/cauhoi/ct18.gomatotronnhieuthit.jpg": "0f41d2992ad36d60553106547adf4542",
"assets/assets/images/cauhoi/ch01.4Tho.png": "cc3b2a1dba4df0aeedb1616dc3e5f184",
"assets/assets/images/cauhoi/ct1.11.quaihamvuongbanhloxuong.jpg": "6c658acda949c23b6230dff792017582",
"assets/assets/images/cauhoi/ch14.matnho.png": "ee75533c3e1d73c6d0d2df390d61b032",
"assets/assets/images/cauhoi/ct1.10.camlem.jpg": "2081b334cf4092b12710ecb2b8fa0bf2",
"assets/assets/images/cauhoi/ct1.10.camdung.jpg": "a9c33d3b73f438da5e0c0948dea5123a",
"assets/assets/images/cauhoi/ct19.moiday.jpg": "cd2a15bdf2b5394e7694503d2f4c1d5b",
"assets/assets/images/cauhoi/ct15.muict.png": "d752e9871572b1e43463fdabc37cec31",
"assets/assets/images/cauhoi/ch14.matto.png": "8973d02f4bceab26a8eb6a760a5be1ee",
"assets/assets/images/cauhoi/ct17.daumuitotron.jpg": "40624b5fa2e70d8bdf417aa643ad38fb",
"assets/assets/images/cauhoi/ch12lm.ratdam.png": "2dd390ab86acec69b4b85bbe0f7a7f42",
"assets/assets/images/cauhoi/ct19.moimong.jpg": "2454b47e799ddd80340485131959c940",
"assets/assets/images/cauhoi/ch11lm.4.png": "09284d5380cd5a178b5d6fb672735a52",
"assets/assets/images/cauhoi/ch13.dmxt.png": "51b3169afdd37d9c0a091d92003bea1a",
"assets/assets/images/cauhoi/ch13.dmngang.png": "c5d739499757e55c023e2f4c35d94a7b",
"assets/assets/images/cauhoi/ct15.muicaogk.png": "57bbc8d9a037d22e9652d8470c6780eb",
"assets/assets/images/cauhoi/ch13.dmlc.png": "96386f526bd5b9a70a02f146f8105d32",
"assets/assets/images/cauhoi/ch11lm.3.png": "0f1cd199b0123010061cfb2439c374c9",
"assets/assets/images/cauhoi/ch11lm.2.png": "bcc591f57be94b2f44bd085d9235398b",
"assets/assets/images/cauhoi/ct17.daumuinhonhon.jpg": "7a2004696b631f3d8b213c0c014044d0",
"assets/assets/images/cauhoi/ch11lm.1.png": "df547428b414ce83ac409de424c1a026",
"assets/assets/images/10681Insight.jpeg": "ad9a59d3e34c7bc2dd7782529ef2b55c",
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
