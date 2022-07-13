'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "16f229b372edc08e09aefb08d42f686a",
"assets/assets/images/HardContact.png": "0c5d94106e8f410dc754015241531fcb",
"assets/assets/images/Maske_1.svg": "c47f1b991ad04fbb235a1c97aad91fa2",
"assets/assets/images/Maske_2.svg": "f753a900061197d757bde25a1ac26c84",
"assets/assets/images/Maske_3.svg": "c6883e404d2ff0e6c9d034ad0dc178aa",
"assets/assets/images/Maske_4.svg": "74dc374df14c0625396294698a91f95a",
"assets/assets/images/mask_aligner.jpg": "8d0e1496e11bc20d3c8937feb22dd211",
"assets/assets/images/ProximityModus.png": "b51ead524008a2e6775b84d20e8bf4a1",
"assets/assets/images/SoftContact.png": "98bcdcbe05532bdc5966e2f32100137a",
"assets/assets/images/VacuumContact.png": "9c8205c9160ca90d84e76a701546ab2b",
"assets/assets/images/Wafer_1.svg": "976af330f5724077d14424b82fab71fc",
"assets/assets/images/Wafer_2.svg": "6bf6c9d389b5960a015194bfc39ea74f",
"assets/assets/images/Wafer_3.svg": "03ff806c6dff59118d6025f2162abe46",
"assets/assets/images/Wafer_4.svg": "87aa8ecb67afe24d6fc5361adabaff0d",
"assets/assets/videos/Aligner.mp4": "40e01ee4ac47a9af26cb1ad132b1f136",
"assets/assets/videos/insert_mask/01_Maskenhalter_herausnehmen.mp4": "0c36d786120f250bc795d0330eff0edc",
"assets/assets/videos/insert_mask/02_Maske_auflegen.mp4": "ab0c8f0a1fdb84be00bd1bdcfa072a61",
"assets/assets/videos/insert_mask/03_Maske_wenden.mp4": "3dd4009c5c6fe2beed0ad438feed361e",
"assets/assets/videos/insert_mask/04_Maske_drehen.mp4": "907cee9a943b6cf03d741667eeb21f5b",
"assets/assets/videos/insert_mask/05_Vakuum_ein.mp4": "279b0101f8647ecad508cd18e9eed8ab",
"assets/assets/videos/insert_mask/06_Maskenhalter_einlegen.mp4": "fcc438ad2ab2a9e5e67b4ae041c27461",
"assets/assets/videos/insert_wafer/01_Mittlelpostionen_ausrichten.mp4": "c3c71d3a187efb89dcaf8b26a605601b",
"assets/assets/videos/insert_wafer/02_Waferhalter_ausrichten.mp4": "dcdf94e71e86d4db927e474033151f5b",
"assets/assets/videos/insert_wafer/03_Wafer_auflegen.mp4": "5085b427eefaf06aee1ce07ae1f60e83",
"assets/assets/videos/insert_wafer/04_Schublade_einschieben.mp4": "9c4833f90aa2697b1f2496ba0daf9b13",
"assets/assets/videos/insert_wafer/05_Wedge_error_compensation.mp4": "cf687e6a79431a902a2abc8f1ed73f05",
"assets/assets/videos/Lampentest.mp4": "3ac9f07f5a3b292e53e19dec282f2d54",
"assets/assets/videos/Lampe_An.mp4": "7b733c1c5d1693f93924ee8c307bbb55",
"assets/assets/videos/Lampe_Aus.mp4": "9ff5fdabcaba9d78da8dc21d424453eb",
"assets/assets/videos/Netzteil_An.mp4": "e59030a87731c500c6b679c3dee96024",
"assets/assets/videos/Netzteil_Aus.mp4": "869c17b32bebc53101c0d2c55356bc1a",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "4e2b529694427f010a73630b1db6ad03",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "4880662f8b3f34ad9f60f78f72eacd95",
"/": "4880662f8b3f34ad9f60f78f72eacd95",
"main.dart.js": "b22aa46d8abdedd85123c9ae7c8da6cf",
"manifest.json": "294e60b526ec98fff925d84905a764a7",
"version.json": "aa7352a938cba688d149860ca269a4c0"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
