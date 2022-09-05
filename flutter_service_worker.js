'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "8185ece463026f5db81071d724cb3dd2",
"assets/assets/images/alignment/back_side_alignment.png": "cf33833e8ea652588a7720e6f392fd54",
"assets/assets/images/alignment/front_side_alignment.png": "057110fc19e0fb8bb9553bf49bc4184d",
"assets/assets/images/align_wafer/Mask1_Solution.png": "63b971484b800b8153be9bc13d1fdf07",
"assets/assets/images/align_wafer/Mask2_Solution.png": "bc085a8b514eb477188b3466e555da96",
"assets/assets/images/align_wafer/Mask3_Solution.png": "f293bc7d9f6bdfbdcb380879ae681c85",
"assets/assets/images/align_wafer/Mask4_Solution.png": "208cbcdd56925ffb5a0a414b829a5ca4",
"assets/assets/images/exposure/05s_20x_15%25C2%25B5m_K.png": "ee487bedb6265cefe88038bd88ff25d2",
"assets/assets/images/exposure/05s_20x_15%25C2%25B5m_L.png": "420eb5df64802ff960684257a58f81da",
"assets/assets/images/exposure/15s_20x_15%25C2%25B5m_K.png": "33768bab0981a2ed99a9509c7bce96b0",
"assets/assets/images/exposure/15s_20x_15%25C2%25B5m_L.png": "8971949a2c604e164cbfece399120cd7",
"assets/assets/images/exposure/5s_20x_15%25C2%25B5m_K.png": "af60d122952bd3d51b2d25ec289c90a9",
"assets/assets/images/exposure/5s_20x_15%25C2%25B5m_L.png": "890ad4866d25b22f3048f4946419e406",
"assets/assets/images/exposure/AZ1518.png": "7891f2fe77a70ac14893c55f00310aca",
"assets/assets/images/exposure/belichtungs_ergebnisse.png": "37e492c752a5e65423c3dcb79bdac912",
"assets/assets/images/exposure/completed.png": "2445a369ef2e691b469133425fa64198",
"assets/assets/images/exposure/completed_final.png": "efce6ddd0b1633f930e4d2ca6303abcf",
"assets/assets/images/exposure/correct_exposure.png": "c3c419c3559a017ff99a1b81c82e5e22",
"assets/assets/images/exposure/high_exposure.png": "d30c327048de740a080fab38ea523212",
"assets/assets/images/exposure/low_exposure.png": "679867156360b147b14e65a35fc18eed",
"assets/assets/images/exposureSettings/15%25C2%25B5m/1Prox70%25C2%25B5m50x.png": "34b77d21b74e0ab6573d757b92f60f1f",
"assets/assets/images/exposureSettings/15%25C2%25B5m/1Softcontact50x.png": "31ee0ee3a7500dad83bf35c0136bf577",
"assets/assets/images/exposureSettings/15%25C2%25B5m/2Hardcontact50x.png": "d64e4d4b93d764263f6eaa5a3b789dea",
"assets/assets/images/exposureSettings/15%25C2%25B5m/2Prox50%25C2%25B5m50x.png": "aace4cad86b8146f272ec7ecef7a467f",
"assets/assets/images/exposureSettings/15%25C2%25B5m/3LowVaccontact50x.png": "c7eaf9997ff1843753e74ac3cd0b5bfa",
"assets/assets/images/exposureSettings/15%25C2%25B5m/3Prox30%25C2%25B5m50x.png": "70d034c1f99619f34b297a6ea4ea1019",
"assets/assets/images/exposureSettings/15%25C2%25B5m/4Prox10%25C2%25B5m50x.png": "953309e499e578b30db0c1bb66bac1c5",
"assets/assets/images/exposureSettings/15%25C2%25B5m/4Vaccontact50x.png": "7645f50d07f849709da2a62ca1895091",
"assets/assets/images/exposureSettings/15%25C2%25B5m/maskenbild.png": "38d0855943500f0bb8a4df7ce8e34464",
"assets/assets/images/exposureSettings/30%25C2%25B5m/1Prox70%25C2%25B5m50x.png": "4da34ffa24dd92829721c8b7f07071d0",
"assets/assets/images/exposureSettings/30%25C2%25B5m/1Softcontact50x.png": "feb74d21b952ccdbd6528bbdf75cc35a",
"assets/assets/images/exposureSettings/30%25C2%25B5m/2Hardcontact50x.png": "f07827b48801b8682a4ab4ed74da535e",
"assets/assets/images/exposureSettings/30%25C2%25B5m/2Prox50%25C2%25B5m50x.png": "f8a8c78ef3271f4608e5d393f500f6d9",
"assets/assets/images/exposureSettings/30%25C2%25B5m/3LowVaccontact50x.png": "0d1749d1da333014677f4bfadebd330e",
"assets/assets/images/exposureSettings/30%25C2%25B5m/3Prox30%25C2%25B5m50x.png": "df7d3c9ba4811d67909b92280158d42b",
"assets/assets/images/exposureSettings/30%25C2%25B5m/4Prox10%25C2%25B5m50x.png": "968676731e26ef410c15693a96c3de0b",
"assets/assets/images/exposureSettings/30%25C2%25B5m/4Vaccontact50x.png": "d4346911b29f63f90851032d68296176",
"assets/assets/images/exposureSettings/30%25C2%25B5m/maskenbild.png": "e8fbaef3f5f90f52cbb7de164a975cfd",
"assets/assets/images/exposureSettings/50x.png": "74d238195ab006f4cb4e60017fce3671",
"assets/assets/images/exposureSettings/50x.svg": "8f29faf482eb492a616d2b41effcc7db",
"assets/assets/images/exposureSettings/8%25C2%25B5m/1Vac_Cont.png": "dc83914984aeb9c8928aeab5ebf15d40",
"assets/assets/images/exposureSettings/8%25C2%25B5m/2Low_Vac_Cont.png": "53f71fff6a1008c4f867b6a10cfa9bdd",
"assets/assets/images/exposureSettings/8%25C2%25B5m/3Hard_Cont.png": "8d135e65ac9b8afce43110e726ae47af",
"assets/assets/images/exposureSettings/8%25C2%25B5m/4Soft_Cont.png": "8d6fb11e53d8162be0f3e4df46ebb6e7",
"assets/assets/images/exposureSettings/8%25C2%25B5m/5Prox_10%25C2%25B5m.png": "ae39e23a888658e451a4845675c29279",
"assets/assets/images/exposureSettings/8%25C2%25B5m/6Prox_30%25C2%25B5m.png": "b8ef32d66822c744c13238e880b4f381",
"assets/assets/images/exposureSettings/8%25C2%25B5m/7Prox_50%25C2%25B5m.png": "aac431035b10c040463ca9d0bf4a4d35",
"assets/assets/images/exposureSettings/8%25C2%25B5m/8Prox_70%25C2%25B5m.png": "38231608e0ad898212b2d71907f1391d",
"assets/assets/images/exposureSettings/8%25C2%25B5m/maskenbild.png": "3e7cda4abc38bf132b85470c9c3498d5",
"assets/assets/images/exposureSettings/maskenbild.png": "4ed82de1860a5bc48ef91329e84a2813",
"assets/assets/images/HardContact.png": "ab9030db2d2c4676912b072fb4839da3",
"assets/assets/images/innovet_logo_bmx.png": "110518c29db1443cb0131007faf853e9",
"assets/assets/images/Maske_1.svg": "a1f3a1835eccb632e17cf7f8a5f03245",
"assets/assets/images/Maske_2.svg": "9798ffedfe05eaa2184b6a41840baec9",
"assets/assets/images/Maske_3.svg": "75e0ab0f56bb25f3f2cd89f43277033e",
"assets/assets/images/Maske_4.svg": "c2f5c2da94c144300be601f7ab59277b",
"assets/assets/images/mask_aligner.jpg": "8d0e1496e11bc20d3c8937feb22dd211",
"assets/assets/images/mask_aligner_preview.png": "e2205be3490d6b7892ff4f10734618c0",
"assets/assets/images/ProximityModus.png": "e3ff0efdca06b7f571a93d865cd3bcf5",
"assets/assets/images/rating/rating_1_empty.png": "12a80abbc0289a0b04dd5dbdf2c28828",
"assets/assets/images/rating/rating_1_filled.png": "52967dc6d15864125cc88579e365fc59",
"assets/assets/images/rating/rating_2_empty.png": "2545ff57b1f549277811987221e52898",
"assets/assets/images/rating/rating_2_filled.png": "41ebea1b860f7049e9f9cb26005596e6",
"assets/assets/images/rating/rating_3_empty.png": "735995cd9fae33ae0df9122386524dc5",
"assets/assets/images/rating/rating_3_filled.png": "c17b23126c5a21974b9fae2d6018054b",
"assets/assets/images/rating/rating_4_empty.png": "2e2a19ac7d9d570ab04af3298d3c7bad",
"assets/assets/images/rating/rating_4_filled.png": "f87f86b27fa50fa2aa0a455f7e04245c",
"assets/assets/images/rating/rating_5_empty.png": "52a04c214191ef586a8699ae0c7c45ca",
"assets/assets/images/rating/rating_5_filled.png": "0d8826173f1cb8178e677a0543088fff",
"assets/assets/images/settings/formula.png": "1678269684dd511a11983c3843a90c7b",
"assets/assets/images/settings/kavit%25C3%25A4ten.svg": "d1e71fdd3befbd4a192002c10f95a661",
"assets/assets/images/settings/kavit%25C3%25A4ten_justage.svg": "c27d6fdc14aab7b920520283b30a41b3",
"assets/assets/images/settings/kontaktl%25C3%25B6cher.svg": "3f030b0b330d0221db0a066f56dea728",
"assets/assets/images/settings/kontaktl%25C3%25B6cher_justage.svg": "c408e8c81b17eb2fb73e97217b9b20f0",
"assets/assets/images/settings/leiterbahnen.svg": "8256f60662aa1307fc3d6617e6fbe63a",
"assets/assets/images/settings/leiterbahnen_justage.svg": "24c06bde4d5f940825fca2a1ca2a063c",
"assets/assets/images/settings/widerst%25C3%25A4nde.svg": "e5f717500fde1783e2eff03c98ac45a2",
"assets/assets/images/settings/widerst%25C3%25A4nde_justage.png": "362c6c55533259365b3addcd23b8ec9d",
"assets/assets/images/settings/widerst%25C3%25A4nde_justage.svg": "026f57b90b35e8eca05ce8a682b2c096",
"assets/assets/images/SoftContact.png": "74478ed13031c499caeb06421cbe3568",
"assets/assets/images/Substrathalter.svg": "22d1cd7170d14add7ebf6bbb74ef8c1f",
"assets/assets/images/VacuumContact.png": "21f911755c5b0cf8d05a545d5b2c57e7",
"assets/assets/images/Wafer_1.svg": "03d3b12332a78ba047cab83b2c1a8ca9",
"assets/assets/images/Wafer_2.svg": "ea6ffa9c2768679edea35ebd3224c673",
"assets/assets/images/Wafer_3.svg": "86c7acd9dd947c55f84b945486d9b85f",
"assets/assets/images/Wafer_4.svg": "92d028c99b906ed8935ad7f370d4399c",
"assets/assets/videos/alignment/Backside.mp4": "24a0eef79197d6249b1f7b89c5c6c145",
"assets/assets/videos/alignment/Frontside.mp4": "006bd6f92b8cbf9e5a054b3a459af71b",
"assets/assets/videos/align_wafer/wafer_alignment.mp4": "b4811138ef2e08885aa35e2d586a072e",
"assets/assets/videos/align_wafer/Wafer_Pfeiltasten.mp4": "20a9a77566fe2a13145dee7e66a76927",
"assets/assets/videos/align_wafer/Wafer_Phi.mp4": "ba2ae0e2e0d72f26c967d70cfae50744",
"assets/assets/videos/exposure/Exposure.mp4": "9300da66e378be79c9bd27b3aed6cd79",
"assets/assets/videos/home/Simulation_Aufgabe.mp4": "7a2ea3ff600916e89c28d106b862d07d",
"assets/assets/videos/insert_mask/Maskenhalter_raus.mp4": "088abd333633caf373e42e101994802d",
"assets/assets/videos/insert_mask/Maskenhalter_rein.mp4": "452b768b33e825a634abdaa60f2a759e",
"assets/assets/videos/insert_mask/Maske_auflegen.mp4": "d8210ac18de6d54bbca7590836dbdf31",
"assets/assets/videos/insert_mask/Maske_drehen_1.mp4": "2a4924291a526ee54a14382a5c14b49c",
"assets/assets/videos/insert_mask/Maske_drehen_2.mp4": "64907e607a13f4f02651ba8cf685724b",
"assets/assets/videos/insert_mask/Vacuum_ON.mp4": "b39601ccdced1bebd7a8ae530017dc47",
"assets/assets/videos/insert_wafer/Dreher_einstellen.mp4": "782af580b548d881dcdf251c2efde477",
"assets/assets/videos/insert_wafer/Maske_hoch.mp4": "e7764cd8e9bce096dd437349aea27efd",
"assets/assets/videos/insert_wafer/Schublade_raus+anpassen.mp4": "808b9e9d53c40100bb9d02fcd5d8ae52",
"assets/assets/videos/insert_wafer/Schublade_rein.mp4": "8375aebc5059730e734206dbef7f4c6f",
"assets/assets/videos/insert_wafer/Zange_auflegen.mp4": "8e44fe553efd0f091510501cbe2995e7",
"assets/assets/videos/precheck/Lampentest.mp4": "8797c4de5223662d36447d3d7a4b83e4",
"assets/assets/videos/precheck/Lampe_zuenden.mp4": "115f292cecdb4ad319281a7ca5b414a5",
"assets/assets/videos/precheck/Netzteil_ON.mp4": "654625fdc1481b2178ac2743b5403191",
"assets/assets/videos/precheck/precheck_preview.mp4": "581ee1d2896654e28dccdaed486724c6",
"assets/assets/videos/precheck/Ready_ON.mp4": "06612939e14ded161434d4fd5a130ea6",
"assets/assets/videos/search_marker/Kamera_Ganz.mp4": "71e77d3ca0c61fbd0d7a522be4716b58",
"assets/assets/videos/search_marker/Kamera_Links.mp4": "6d417229dd30e1686d76f4dbfaadd4bb",
"assets/assets/videos/search_marker/Kamera_Rechts.mp4": "28f407e22bdf6fdcf86bc15cb9c23f56",
"assets/assets/videos/search_marker/Maske_Fokus.mp4": "e29af64287696f78eb52d6810877045f",
"assets/assets/videos/search_marker/Maske_Phi.mp4": "23cc136231eb24d8f9f579d37f122d2a",
"assets/assets/videos/search_marker/Mikroskop_Ganz.mp4": "da27ede7199602f6bc45432bbdca4b8d",
"assets/assets/videos/search_marker/Mikroskop_Links.mp4": "e358c7aa753c42e44f8778e129084874",
"assets/assets/videos/search_marker/Mikroskop_Rechts.mp4": "4a92e947b63b6b07eb96b9c017ab069e",
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
"index.html": "6e010b50422e14ced511b80bbeb8ae55",
"/": "6e010b50422e14ced511b80bbeb8ae55",
"main.dart.js": "b6abec8c5d3c1fbb8101526391f5bc6f",
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
