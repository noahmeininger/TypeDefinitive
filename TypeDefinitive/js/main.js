//starting function for the map
function createMap()
{
    //adds map attributions
    var mbAttr = '<a href="http://openstreetmap.org">OpenStreetMap</a> |' +' <a href="http://mapbox.com">Mapbox</a>';
    //store API key
    var apiToken = 'pk.eyJ1Ijoibm1laW4iLCJhIjoiY2xhYTAwdGVhMDMxbDNxcGpndXpxYmltZSJ9.nkxMhlsFRfY1bP2uxURteQ';
    //access standard Mapbox Styles
    var mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}';
    //access custom Mapbox Styles
    var mbStyleUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/256/{z}/{x}/{y}?access_token={token}';
    //access custom basemap
    var typeDefinitive = L.tileLayer(mbStyleUrl, {id: 'nmein/claa0uvvp004c15p7yz2bo75u', token: apiToken,  attribution: mbAttr});
    //access standard basemap
    var standardBasemap   = L.tileLayer(mbUrl, {id: 'mapbox.light', token: apiToken, attribution: mbAttr});
    
    //create map with specified center, zoom, and basemap
    var map = L.map('map', 
    {
        center: [29.187778, -82.130556],
        zoom: 9,
        layers: typeDefinitive
    });

    //adds layer control to basemap
    var basemap = 
    {
        "TypeDefinitive" : typeDefinitive
    };

    //markers for various cities
    var orlando = L.marker([28.54, -81.38]).bindPopup('This is Orlando, Florida');
    var ocala = L.marker([29.187778, -82.130556]).bindPopup('This is Ocala, Florida');
    var gainesville = L.marker([29.651997, -82.324992]).bindPopup('This is Gainesville, Florida');
    var cities = L.layerGroup([orlando, ocala, gainesville]);

    //markers for various land features
    var lakeApopka = L.marker([28.620556, -81.621944]).bindPopup('This is a lake (Lake Apopka to be exact)');
    var ocalaForest = L.marker([29.173611, -81.821667]).bindPopup('This is a forest (Ocala National Forest to be exact)');
    var places = L.layerGroup([lakeApopka, ocalaForest]);

    //adds layer control to overlays
    var overlays = 
    {
        'Some Cities' : cities,
        'Some Places' : places
    };
    //add layers to map
    L.control.layers(basemap, overlays).addTo(map);    
};

$(document).ready(createMap);