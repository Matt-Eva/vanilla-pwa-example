const addResourcesToCache = async (resources) => {
    console.log("adding to cache")
    try {
        const cache = await caches.open("v1");
        await cache.addAll(resources);
        console.log("success")
    } catch(error){
        console.error(error)
    }
}

self.addEventListener("install", (event) =>{
    console.log("Inside the install handler:", event);
    event.waitUntil(
        addResourcesToCache([
            "/",
            "/index.html",
            "/assets/index-9f1bda10.css",
            "/assets/index-9f1bda10.css",
            "/assets/Lato-Light-fb5343c4.ttf",
            "/android-chrome-192x192.png",
            "/android-chrome-512x512.png",
            "/apple-touch-icon-180x180.png",
            "/maskable-icon-512x512.png",
            "/pwa-64x64.png"
        ])
    )
});

self.addEventListener("activate", (event) =>{
    console.log("inside the activate handler:", event);
});

self.addEventListener(fetch, (event) => {
    console.log('Inside the fetch handler:', event);
  });