var mymap = L.map('mapid');
var options = {
  key: geocoder_api_key,
  limit: 10
};
var control = L.Control.openCageSearch(options).addTo(mymap);

// Fullscreen plugin from Mapbox
mymap.addControl(new L.Control.Fullscreen());

//L.Control.MousePosition(options).addTo(mymap);

var edgeMarkerLayer = L.edgeMarker({
     icon: L.icon({ // style markers
         iconUrl: 'Map Icons/arrow-down-icon-png-6696.png',
         clickable: true,
         iconSize: [48, 48],
         iconAnchor: [24, 24]
     }),
     rotateIcons: true, // rotate EdgeMarkers depending on their relative position
     layerGroup: null // you can specify a certain L.layerGroup to create the edge markers from.
   }).addTo(mymap);

var select = L.countrySelect({exclude:"French Southern and Antarctic Lands"});
			select.addTo(mymap);

			select.on('change', function(e){
				if (e.feature === undefined){ //Do nothing on title
					return;
				}
				var country = L.geoJson(e.feature);
				if (this.previousCountry != null){
					mymap.removeLayer(this.previousCountry);
				}
				this.previousCountry = country;
				mymap.addLayer(country);
				mymap.fitBounds(country.getBounds());
      });

/* MAPBOX TILE LAYER
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  maxZoom: 18,
  id: 'mapbox.mapbox-traffic-v1',
  accessToken: 'pk.eyJ1IjoiYnJhZGxleS1qb2huc29uIiwiYSI6ImNrMWgyejA2dTAzNm0zYnBrdGRrcmEzdmkifQ.E1WOZPDYa7gggZF0gCYy6w'
}).addTo(mymap);
*/

L.tileLayer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png',{}).addTo(mymap);

/*var sevenWonders = [
  ["India's Taj Mahal", 27.174961, 78.042385],
  ["Great Wall of China", 40.334245, 116.477652],
  ["Petra in Jordan", 30.328611, 35.441944],
  ["Brazil's statue of Christ the Redeemer", -22.951389, -43.2108334],
  ["Peru's Machu Picchu", 13.163056, -72.545556],
  ["Mexico's Chichen Itza pyramid", 20.682778, -88.569167],
  ["The Colosseum in Rome", 41.890169, 12.492269]
];
*/


var one = L.icon({
  iconUrl: "Map Icons/number_1.png",
  iconSize: ['100px', '100px'],
  iconAnchor: [20, 40]
});

var two = L.icon({
  iconUrl: "Map Icons/number_2.png",
  iconSize: ['100px', '100px'],
  iconAnchor: [20, 40]
});

var three = L.icon({
  iconUrl: "Map Icons/number_3.png",
  iconSize: ['100px', '100px'],
  iconAnchor: [20, 40]
});

var four = L.icon({
  iconUrl: "Map Icons/number_4.png",
  iconSize: ['100px', '100px'],
  iconAnchor: [20, 40]
});

var five = L.icon({
  iconUrl: "Map Icons/number_5.png",
  iconSize: ['100px', '100px'],
  iconAnchor: [20, 40]
});

var six = L.icon({
  iconUrl: "Map Icons/number_6.png",
  iconSize: ['100px', '100px'],
  iconAnchor: [20, 40]
});

var seven = L.icon({
  iconUrl: "Map Icons/number_7.png",
  iconSize: ['100px', '100px'],
  iconAnchor: [20, 40]
});

var tajMahal = L.marker([27.174961, 78.042385], {icon: one}).addTo(mymap);
var greatWall = L.marker([40.334245, 116.477652], {icon: two}).addTo(mymap);
var petra = L.marker([30.328611, 35.441944], {icon: three}).addTo(mymap);
var christStatue = L.marker([-22.951389, -43.2108334], {icon: four}).addTo(mymap);
var machuPicchu = L.marker([-13.163056, -72.545556], {icon: five}).addTo(mymap);
var pyramid = L.marker([20.682778, -88.569167], {icon: six}).addTo(mymap);
var colosseum = L.marker([41.890169, 12.492269], {icon: seven}).addTo(mymap);

tajMahal.bindPopup("<b>India's Taj Mahal</b><br><img src = 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Taj_Mahal_%28Edited%29.jpeg' alt = 'Taj Mahal' height = '150px' width = '225px'><br>The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor Shah Jahan (reigned from 1628 to 1658) to house the tomb of his favourite wife, Mumtaz Mahal.").openPopup();
greatWall.bindPopup("<b>Great Wall of China</b><br><img src = 'https://upload.wikimedia.org/wikipedia/commons/2/23/The_Great_Wall_of_China_at_Jinshanling-edit.jpg' alt = 'Great Wall of China' height = '150px' width = '225px'><br>The Great Wall of China is the collective name of a series of fortification systems generally built across the historical northern borders of China to protect and consolidate territories of Chinese states and empires against various nomadic groups of the steppe and their polities.").openPopup();
petra.bindPopup("<b>Petra in Jordan</b><br><img src = 'https://upload.wikimedia.org/wikipedia/commons/2/24/P%C3%A9tra_de_nuit%2C_Jordanie.jpg' alt = 'Petra at nighttime' height = '150px' width = '300px'><br>Petra is a historical and archaeological city in southern Jordan. Petra lies on the slope of Jabal Al-Madbah in a basin among the mountains which form the eastern flank of the Arabah valley that runs from the Dead Sea to the Gulf of Aqaba.").openPopup();
christStatue.bindPopup("<b>Brazil's statue of Christ the Redeemer</b><br><img src = 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Rio_de_Janeiro_Helicoptero_47_Feb_2006.jpg' alt = 'Christ the Redeemer statue' height = '150px' width = '225px'><br>Christ the Redeemer is an Art Deco statue of Jesus Christ in Rio de Janeiro, Brazil, created by French sculptor Paul Landowski and built by Brazilian engineer Heitor da Silva Costa, in collaboration with French engineer Albert Caquot.").openPopup();
machuPicchu.bindPopup("<b>Peru's Machu Picchu</b><br><img src = 'https://cdn.tourcms.com/a/62/1810/1/large.jpg' alt = 'Machu Picchu' height = '150px' width = '225px'><br>Machu Picchu is a 15th-century Inca citadel, located in the Eastern Cordillera of southern Peru, on a 2,430-metre (7,970 ft) mountain ridge.").openPopup();
pyramid.bindPopup("<b>Mexico's Chichen Itza pyramid</b><br><img src = 'https://upload.wikimedia.org/wikipedia/commons/5/51/Chichen_Itza_3.jpg' alt = 'Chichen Itza pyramid' height = '150px' width = '300px'><br>Chichen Itza was a large pre-Columbian city built by the Maya people of the Terminal Classic period. The archaeological site is located in Tinúm Municipality, Yucatán State, Mexico.").openPopup();
colosseum.bindPopup("<b>The Colosseum in Rome</b><br><img src = 'https://upload.wikimedia.org/wikipedia/commons/5/53/Colosseum_in_Rome%2C_Italy_-_April_2007.jpg' alt = 'Roman Colosseum' height = '150px' width = '225px'><br>The Colosseum, is an oval amphitheatre in the centre of the city of Rome, Italy. Built of travertine limestone, tuff, and brick-faced concrete, it was the largest amphitheatre ever built at the time and held 50,000 spectators.").openPopup();

/*
var marker = L.marker([51.5, -0.09]).addTo(mymap);
var circle = L.circle([51.508, -0.11], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 500
}).addTo(mymap);
var polygon = L.polygon([
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047]
]).addTo(mymap);

var polyline = L.polyline([
  [51.506, -0.08],
  [51.502, -0.06],
  [51.507, -0.047]
]).addTo(mymap);

marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");

marker.on('click', function(e){
  mymap.setView(e.latlng, 14);
});

circle.on('click', function(e){
  mymap.setView(e.latlng, 13);
});

polygon.on('click', function(e){
  mymap.setView(e.latlng, 14);
});
*/
var ZoomViewer = L.Control.extend({
  onAdd: function(){
    var gauge = L.DomUtil.create('div');
    gauge.style.width = '200px';
    gauge.style.background = 'rgba(255,255,255,0.5)';
    gauge.style.textAlign = 'left';
    mymap.on('zoomstart zoom zoomend', function(ev){
      gauge.innerHTML = 'Zoom level: ' + mymap.getZoom();
    })
    return gauge;
  }
});

(new ZoomViewer).addTo(mymap);

mymap.setView([0, 0], 1);
