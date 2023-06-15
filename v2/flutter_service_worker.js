'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "9303c895cc5404eecc6e7247e3422e70",
"index.html": "92067e510cfbdc882896b27857acadb0",
"/": "92067e510cfbdc882896b27857acadb0",
"main.dart.js": "9ea20596a20eccfcb0aa25193718615b",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "20ce9f222549dbc19734d4a12fc86753",
"icons/Icon-192.png": "97d5cadec428f23960696cfd1e56d169",
"icons/Icon-maskable-192.png": "97d5cadec428f23960696cfd1e56d169",
"icons/Icon-maskable-512.png": "dc4f50ee1e9fa39f957ed6746bf79a3c",
"icons/Icon-512.png": "dc4f50ee1e9fa39f957ed6746bf79a3c",
"manifest.json": "78a62f65ad9c3d25a03626cdfb8052fc",
"assets/AssetManifest.json": "c4d7c6b7ae6721b0bc6093f7a72061d3",
"assets/NOTICES": "9a698cfb696ebe8772d31651dda5e63b",
"assets/FontManifest.json": "71a4a82de411f155107da3f8dac64ebd",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/home/developed.png": "56f67d88665ba4bd2c9008fdc79f4669",
"assets/assets/images/home/exposured.png": "aa87bc986722b125afe7db3fc6079f31",
"assets/assets/images/home/exposure.png": "6d3afc410fd072e81ffced9d7bdf992d",
"assets/assets/images/home/masks.png": "e2627f096c87d6d580660f6cf5d54124",
"assets/assets/images/home/soon.png": "b0fe04368eb1a19213edb25d0f1dde67",
"assets/assets/images/exposure/exposure_build.png": "5abdff04a6540807f3254475f09f3ccc",
"assets/assets/images/contact_modes/soft_contact.png": "74478ed13031c499caeb06421cbe3568",
"assets/assets/images/contact_modes/vacuum_contact.png": "21f911755c5b0cf8d05a545d5b2c57e7",
"assets/assets/images/contact_modes/proximity.png": "e3ff0efdca06b7f571a93d865cd3bcf5",
"assets/assets/images/contact_modes/hard_contact_thumbnail.png": "5687bdce8ef077e94d5b1a4984e5b37b",
"assets/assets/images/contact_modes/vacuum_contact_thumbnail.png": "f11a973c4b1e1d4876f229f14e01a3a4",
"assets/assets/images/contact_modes/soft_contact_thumbnail.png": "5842162b736b63182f9cdc38edbe7783",
"assets/assets/images/contact_modes/proximity_thumbnail.png": "a2cee9ed60a5f7d1bd46b31515089dec",
"assets/assets/images/contact_modes/hard_contact.png": "ab9030db2d2c4676912b072fb4839da3",
"assets/assets/images/aligner/mask_near_rotated.png": "b32c30233b7b196c8abf47200c550171",
"assets/assets/images/aligner/maskaligner.svg": "fae7030f29f12a7959e6154aa139e0fb",
"assets/assets/images/aligner/mask_near.png": "318535d89cfc24f71dfc0818da55f70f",
"assets/assets/images/aligner/structure.png": "b944e64ecd293f5e36e19632d51b6767",
"assets/assets/images/aligner/wafer_alignment.gif": "d15ead2ca3d01e069f164210a04b3075",
"assets/assets/images/aligner/mask_chuck.png": "25f1f660bb5e4cc786d00cb672d3451e",
"assets/assets/images/aligner/backside_alignment.png": "af8e574b88b66cde41173393a5607f7e",
"assets/assets/images/aligner/frontside_alignment.png": "970a17595eaa5e4ca78c39afd1bdc40c",
"assets/assets/images/aligner/chuck.svg": "22d1cd7170d14add7ebf6bbb74ef8c1f",
"assets/assets/images/aligner/flat_alignment.png": "9184205ee2776eaa76c3fdc4210e381c",
"assets/assets/introduction/mask_aligner_preview.png": "e2205be3490d6b7892ff4f10734618c0",
"assets/assets/processes/pressure_sensor/home/task.mp4": "c562e4aac85cd8b813ecbdc21ac41d55",
"assets/assets/processes/pressure_sensor/home/sensor.mp4": "08b3165d551943466b12474ac2f5cfcf",
"assets/assets/processes/pressure_sensor/pressure_sensor.png": "aa0798d474d234cf88edfa1c843602aa",
"assets/assets/processes/pressure_sensor/tasks/alignment_marks_backside.png": "321ac2971ec1f7b7e08c66eb55a92a21",
"assets/assets/processes/pressure_sensor/wafer/wafer_leiterbahnen.svg": "37f4ffca4324f81d2d03f340b09f1648",
"assets/assets/processes/pressure_sensor/wafer/wafer_widerst%25C3%25A4nde.svg": "333bd568a71088b28c22881dbe2a999e",
"assets/assets/processes/pressure_sensor/wafer/wafer_kontaktl%25C3%25B6cher.svg": "2990bc78190399879c883b56e098063c",
"assets/assets/processes/pressure_sensor/wafer/wafer_kavit%25C3%25A4ten.svg": "d86747331136620cb8bcdf27067f5353",
"assets/assets/processes/pressure_sensor/layers/kontaktl%25C3%25B6cher.svg": "abde0e12ef9f2624c9b580b3123e1edb",
"assets/assets/processes/pressure_sensor/layers/kavit%25C3%25A4ten.svg": "10a24c51cb39c95ebae38ce125ea1678",
"assets/assets/processes/pressure_sensor/layers/leiterbahnen.svg": "cb61bd7b2eab02f357c15533a2004aa8",
"assets/assets/processes/pressure_sensor/layers/widerst%25C3%25A4nde.svg": "f6709d61244df766bc2f3bc93c4f950f",
"assets/assets/processes/pressure_sensor/sensor_structure.jpg": "70eb08635715cbb8fc170a1fa866c39a",
"assets/assets/processes/pressure_sensor/sensor/print2.png": "4179e8bd904e3d7110133175f669b720",
"assets/assets/processes/pressure_sensor/sensor/print3.png": "4b4090090731633271646faa0632456b",
"assets/assets/processes/pressure_sensor/sensor/print1.png": "b7f74cda2a25dde0834090e06fb65bfc",
"assets/assets/processes/pressure_sensor/sensor/print4.png": "da219cce2794660c2cfde69c05f891e4",
"assets/assets/processes/pressure_sensor/datasheet/arp5910/arp5910-2.png": "e7bb8722c41270d41ab0c010f1c566b8",
"assets/assets/processes/pressure_sensor/datasheet/arp5910/arp5910-1.png": "c2a2a9c4b8c6b27c1faa00e04bdc6bc2",
"assets/assets/processes/pressure_sensor/datasheet/sio2/Drucksensor+Prozessanleitung+SiO2+2022_TJ-9.png": "1d8fd087161d1033b1bf263d802f66e1",
"assets/assets/processes/pressure_sensor/datasheet/sio2/Drucksensor+Prozessanleitung+SiO2+2022_TJ-8.png": "53ff53e7aef62e493b57a107cc8e3ea8",
"assets/assets/processes/pressure_sensor/datasheet/sio2/Drucksensor+Prozessanleitung+SiO2+2022_TJ-5.png": "7da50926313c4f9c0c50947a11167910",
"assets/assets/processes/pressure_sensor/datasheet/sio2/Drucksensor+Prozessanleitung+SiO2+2022_TJ-4.png": "d60c282d4014a24d3f84b3c1f5d2767b",
"assets/assets/processes/pressure_sensor/datasheet/sio2/Drucksensor+Prozessanleitung+SiO2+2022_TJ-6.png": "c071f734041ad93c29975f49201619e8",
"assets/assets/processes/pressure_sensor/datasheet/sio2/Drucksensor+Prozessanleitung+SiO2+2022_TJ-7.png": "4a36b9a00e100d2013e8718efd362d2e",
"assets/assets/processes/pressure_sensor/datasheet/sio2/Drucksensor+Prozessanleitung+SiO2+2022_TJ-3.png": "adaea47b3e82b4fe61aea140967aca03",
"assets/assets/processes/pressure_sensor/datasheet/sio2/Drucksensor+Prozessanleitung+SiO2+2022_TJ-2.png": "3cee4cca38483e9f606c6cb76dac1ac7",
"assets/assets/processes/pressure_sensor/datasheet/sio2/Drucksensor+Prozessanleitung+SiO2+2022_TJ-1.png": "d4b02382e2c9dcd203df7736a82a60a5",
"assets/assets/processes/pressure_sensor/datasheet/az1500/tds_az_1500_series-2.png": "b893178172d78f4ee7603f8ef954360d",
"assets/assets/processes/pressure_sensor/datasheet/az1500/tds_az_1500_series-3.png": "297ca9c4784fb68d36af749c9c14de99",
"assets/assets/processes/pressure_sensor/datasheet/az1500/tds_az_1500_series-1.png": "1d4ef350ad562795ad0ba768776486a7",
"assets/assets/processes/pressure_sensor/datasheet/az1500/tds_az_1500_series-4.png": "b7f5f272175fb1bf1638c0e390e1b0bc",
"assets/assets/processes/pressure_sensor/datasheet/az1500/tds_az_1500_series-5.png": "593a99236d2a3cace935b802a8beae91",
"assets/assets/processes/pressure_sensor/datasheet/az1500/tds_az_1500_series-7.png": "f6f1098e7eee6b40f9a02802d82b753f",
"assets/assets/processes/pressure_sensor/datasheet/az1500/tds_az_1500_series-6.png": "e0fa5a222d24227cfce9967479ed88fd",
"assets/assets/processes/pressure_sensor/drucksensor_querschnitt.png": "98ae9af3ac8b82f42cf6518a66d5e46e",
"assets/assets/processes/pressure_sensor/masks/maske_kavit%25C3%25A4ten.svg": "9798ffedfe05eaa2184b6a41840baec9",
"assets/assets/processes/pressure_sensor/masks/maske_widerst%25C3%25A4nde_sideview.png": "b972d37fb99fe9002d67fdc3e322616e",
"assets/assets/processes/pressure_sensor/masks/maske_kontaktl%25C3%25B6cher.svg": "75e0ab0f56bb25f3f2cd89f43277033e",
"assets/assets/processes/pressure_sensor/masks/maske_kavit%25C3%25A4ten_sideview.png": "5cb4831b73154d5f8cb2f5a4495db4e0",
"assets/assets/processes/pressure_sensor/masks/maske_kontaktl%25C3%25B6cher_sideview.png": "af93ee694b9729643ee7b861034abea6",
"assets/assets/processes/pressure_sensor/masks/maske_widerst%25C3%25A4nde.svg": "a1f3a1835eccb632e17cf7f8a5f03245",
"assets/assets/processes/pressure_sensor/masks/maske_leiterbahnen_sideview.png": "b50382d96a70ff884c5e54d74a961fa1",
"assets/assets/processes/pressure_sensor/masks/maske_leiterbahnen.svg": "c2f5c2da94c144300be601f7ab59277b",
"assets/assets/processes/pressure_sensor/pressure_sensor_preview.png": "5fd1007d05f41c8c1cce519ec86d22a6",
"assets/assets/videos/exposure/exposure.mp4": "2982121a7c2fb47cb57289ceac236f1f",
"assets/assets/videos/modes/backside.mp4": "24a0eef79197d6249b1f7b89c5c6c145",
"assets/assets/videos/modes/frontside.mp4": "006bd6f92b8cbf9e5a054b3a459af71b",
"assets/assets/videos/modes/flat.mp4": "58793ccbc0f2bf1ec9760ccf037d41e8",
"assets/assets/videos/program/exposure_gap.mp4": "18699de4fe63f129bf7e34c080620e29",
"assets/assets/videos/program/exposure_gap_sideview.mp4": "37126a1d3f2a8adb9e40979a2b108140",
"assets/assets/videos/program/exposure_time.mp4": "e7a78b888575f1d10b5ae78dbffb15a5",
"assets/assets/videos/aligner/microscope_phi.mp4": "23cc136231eb24d8f9f579d37f122d2a",
"assets/assets/videos/aligner/camera.mp4": "71e77d3ca0c61fbd0d7a522be4716b58",
"assets/assets/videos/aligner/camera_right.mp4": "28f407e22bdf6fdcf86bc15cb9c23f56",
"assets/assets/videos/aligner/chuck_phi.mp4": "ba2ae0e2e0d72f26c967d70cfae50744",
"assets/assets/videos/aligner/chuck.mp4": "20a9a77566fe2a13145dee7e66a76927",
"assets/assets/videos/aligner/microscope_blur.mp4": "e29af64287696f78eb52d6810877045f",
"assets/assets/videos/aligner/microscope.mp4": "da27ede7199602f6bc45432bbdca4b8d",
"assets/assets/videos/aligner/microscope_left.mp4": "e358c7aa753c42e44f8778e129084874",
"assets/assets/videos/aligner/camera_left.mp4": "6d417229dd30e1686d76f4dbfaadd4bb",
"assets/assets/videos/aligner/alignment.mp4": "b4811138ef2e08885aa35e2d586a072e",
"assets/assets/videos/aligner/microscope_right.mp4": "4a92e947b63b6b07eb96b9c017ab069e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
