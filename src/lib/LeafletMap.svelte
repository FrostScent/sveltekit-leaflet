<script lang='ts'>
    import { onMount } from 'svelte'
    import { browser } from '$app/environment'


    // Case2 vite-plugin-iso-import
    
    import L from 'leaflet?client'

    let map;
    let initialViewPosition = {
        lat: 37.57,
        lng: 126.983
    }
    let zoom = 17;

    onMount(()=>{
        map = L.map('map',{
                minZoom: 12,
                maxZoom: 18,
                zoomControl: false,
                closePopupOnClick: false,
            }).setView(initialViewPosition, zoom);

            // base map 'VWorld'
            L.tileLayer('https://xdworld.vworld.kr/2d/Base/service/{z}/{x}/{y}.png', {
                attribution: '© <a href="https://gsenc.com/">GS ENC</a> contributors'
            }).addTo(map);
    })
    

    // Case1 onMount()

    // let L;
    // let map;
    // let initialViewPosition = {
    //     lat: 37.57,
    //     lng: 126.983
    // };
    // let zoom = 17;

    // onMount( async () => {
    //     if(browser) {
    //         L = await import('leaflet')

    //         map = L.map('map',{
    //             // minZoom: 12,
    //             maxZoom: 18,
    //             zoomControl: false,
    //             closePopupOnClick: false,
    //         }).setView(initialViewPosition, zoom);

    //         // base map 'VWorld'
    //         L.tileLayer('https://xdworld.vworld.kr/2d/Base/service/{z}/{x}/{y}.png', {
    //             attribution: '© <a href="https://gsenc.com/">GS ENC</a> contributors'
    //         }).addTo(map);
            
    //     }
    // })

</script>


<div>
    <div id="map"></div>
</div>

<style>
    /* css required! */
    @import 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.css';
    #map {
        /* width: calc(100vw - 420px) ; */
        width: 100%;
        height: 100vh;
    }
</style>