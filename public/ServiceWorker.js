
self.addEventListener("install",event => {
    event.waitUntil(
    caches.open("static").then(cache => 
        cache.addAll([
            "App.styles.ts",
            "App.tsx",
            "index.tsx",
            "QuestionAPI.tsx",
            "QuestionCard.tsx",
            "Shuffler.tsx",
            '/'
        ])))
})

async function onFetch(event) {
    let request = event.request;

    if (navigator.onLine) {
        return fetch(request)
            .then(res =>
                caches.open('static-1')
                    .then(cache => cache.put(request, res.clone()))
                    .then(() => res) 
            );
    }

    const cachedRes = (await caches.match(request)) ?? null;

    return new Response(
        JSON.stringify({
            ...(await cachedRes.json()), 
            offline: true
        }),
        {
            status: cachedRes.status,
            statusText: cachedRes.statusText,
            headers: cachedRes.headers
        }
    );
}

function getFromCache(event) {

    return caches.match(event.request).then(resp => {
            if (!resp) {
                throw Error("Something Went Wrong")
            }

            return resp
        }
    )
}


function addToCache(key, response) {
    let copy = response.clone()
    if (response.ok) {
        caches.open(key).then(cache => cache.put(key, copy))
    }
    return response
}


self.addEventListener("fetch",event => {
    
    event.respondWith(onFetch(event))
})