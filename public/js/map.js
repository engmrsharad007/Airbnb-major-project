    
    mapboxgl.accessToken = mapToken;
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v12',
        center: listing.geometry.coordinates,
        zoom: 9,
    });

const popup = new mapboxgl.Popup({ offset: 25 })
    .setHTML(
        `<h3>${listing.title}</h3><br><p>Exact location provided after booking<p>`
    );

const marker = new mapboxgl.Marker({ color: "red" })
    .setLngLat(listing.geometry.coordinates)
    .setPopup(popup)
    .addTo(map);

console.log(listing);