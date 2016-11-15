			// Add tile layer to map
			var tiles = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', { attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>' });

			// Create variable for map, and give settings
			var map = L.map('map', { center: [-41.816939, 147.5], zoom: 7, layers: [tiles]});

			// create nested groups and layer control
			var parent2 = L.markerClusterGroup(),
				colhissit = L.featureGroup.subGroup(parent2),
				conauscul = L.featureGroup.subGroup(parent2),
				conhissit = L.featureGroup.subGroup(parent2),
				hisarc = L.featureGroup.subGroup(parent2),
				hishou = L.featureGroup.subGroup(parent2),
				hishut = L.featureGroup.subGroup(parent2),
				industrial = L.featureGroup.subGroup(parent2),
				museum = L.featureGroup.subGroup(parent2),
				natbea = L.featureGroup.subGroup(parent2),
				control2 = L.control.layers(null, null, { collapsed: false });

			var parent = L.markerClusterGroup(),
				galmusecol = L.featureGroup.subGroup(parent),
				histheritg = L.featureGroup.subGroup(parent),
				lmarkbld = L.featureGroup.subGroup(parent),
				mindustry = L.featureGroup.subGroup(parent),
				natparkres = L.featureGroup.subGroup(parent),
				pkgdncem = L.featureGroup.subGroup(parent),
				control = L.control.layers(null, null, { collapsed: false });

			parent2.addTo(map);
			// parent.addTo(map);

			// call heritage data High Level Category
			L.geoJSON(pointData, {
				filter: function(feature, layer) {
					return feature.properties.HighLevel == "Colonial Historic Site"
				},
				onEachFeature: function (feature, layer) {
					layer.bindPopup(feature.properties.name);
				}
			}).addTo(colhissit);

			L.geoJSON(pointData, {
				filter: function(feature, layer) {
					return feature.properties.HighLevel == "Contempory Australian Culture"
				},
				onEachFeature: function (feature, layer) {
					layer.bindPopup(feature.properties.name);
				}
			}).addTo(conauscul);

			L.geoJSON(pointData, {
				filter: function(feature, layer) {
					return feature.properties.HighLevel == "Convict Historic Site"
				},
				onEachFeature: function (feature, layer) {
					layer.bindPopup(feature.properties.name);
				}
			}).addTo(conhissit);

			L.geoJSON(pointData, {
				filter: function(feature, layer) {
					return feature.properties.HighLevel == "Historic Architecture"
				},
				onEachFeature: function (feature, layer) {
					layer.bindPopup(feature.properties.name);
				}
			}).addTo(hisarc);

			L.geoJSON(pointData, {
				filter: function(feature, layer) {
					return feature.properties.HighLevel == "Historic House"
				},
				onEachFeature: function (feature, layer) {
					layer.bindPopup(feature.properties.name);
				}
			}).addTo(hishou);

			L.geoJSON(pointData, {
				filter: function(feature, layer) {
					return feature.properties.HighLevel == "Historic Huts"
				},
				onEachFeature: function (feature, layer) {
					layer.bindPopup(feature.properties.name);
				}
			}).addTo(hishut);

			L.geoJSON(pointData, {
				filter: function(feature, layer) {
					return feature.properties.HighLevel == "Industrial"
				},
				onEachFeature: function (feature, layer) {
					layer.bindPopup(feature.properties.name);
				}
			}).addTo(industrial);

			L.geoJSON(pointData, {
				filter: function(feature, layer) {
					return feature.properties.HighLevel == "Museum"
				},
				onEachFeature: function (feature, layer) {
					layer.bindPopup(feature.properties.name);
				}
			}).addTo(museum);

			L.geoJSON(pointData, {
				filter: function(feature, layer) {
					return feature.properties.HighLevel == "Natural Beauty"
				},
				onEachFeature: function (feature, layer) {
					layer.bindPopup(feature.properties.name);
				}
			}).addTo(natbea);

			// add High Level overlays to layer control with naming convention
			control2.addOverlay(parent2, '<b>High Level Category</b>');
			control2.addOverlay(colhissit, 'Colonial Historic Site');
			control2.addOverlay(conauscul, 'Contempory Australian Culture');
			control2.addOverlay(conhissit, 'Convict Historic Site');
			control2.addOverlay(hisarc, 'Historic Architecture');
			control2.addOverlay(hishou, 'Historic House');
			control2.addOverlay(hishut, 'Historic Huts');
			control2.addOverlay(industrial, 'Industrial');
			control2.addOverlay(museum, 'Museum');
			control2.addOverlay(natbea, 'Natural Beauty');
			control2.addTo(map);

			// add High Level overlays to map
			parent2.addTo(map);
			colhissit.addTo(map);
			conauscul.addTo(map);
			conhissit.addTo(map);
			hisarc.addTo(map);
			hishou.addTo(map);
			hishut.addTo(map);
			industrial.addTo(map);
			museum.addTo(map);
			natbea.addTo(map);

			// call heritage data ATDW Category
			var marker = L.geoJSON(pointData, {
				filter: function(feature, layer) {
					return feature.properties.ATDWcat == "GALMUSECOL"
				},
				onEachFeature: function (feature, layer) {
					layer.bindPopup(feature.properties.name);
				}
			}).addTo(galmusecol);

			L.geoJSON(pointData, {
				filter: function(feature, layer) {
					return feature.properties.ATDWcat == "HISTHERITG"
				},
				onEachFeature: function (feature, layer) {
					layer.bindPopup(feature.properties.name);
				}
			}).addTo(histheritg);

			L.geoJSON(pointData, {
				filter: function(feature, layer) {
					return feature.properties.ATDWcat == "LMARKBLD"
				},
				onEachFeature: function (feature, layer) {
					layer.bindPopup(feature.properties.name);
				}
			}).addTo(lmarkbld);

			L.geoJSON(pointData, {
				filter: function(feature, layer) {
					return feature.properties.ATDWcat == "MINDUSTRY"
				},
				onEachFeature: function (feature, layer) {
					layer.bindPopup(feature.properties.name);
				}
			}).addTo(mindustry);

			L.geoJSON(pointData, {
				filter: function(feature, layer) {
					return feature.properties.ATDWcat == "NATPARKRES"
				},
				onEachFeature: function (feature, layer) {
					layer.bindPopup(feature.properties.name);
				}
			}).addTo(natparkres);

			L.geoJSON(pointData, {
				filter: function(feature, layer) {
					return feature.properties.ATDWcat == "PKGDNCEM"
				},
				onEachFeature: function (feature, layer) {
					layer.bindPopup(feature.properties.name);
				}
			}).addTo(pkgdncem);

			// add ATDW overlays to layer control with naming convention
			control.addOverlay(parent, '<b>ATDW Category</b>');
			control.addOverlay(galmusecol, 'Galleries, Museums and Collections');
			control.addOverlay(histheritg, 'Historical Sites and Heritage Locations');
			control.addOverlay(lmarkbld, 'Landmarks and Buildings');
			control.addOverlay(mindustry, 'Agri, Mining and Industry');
			control.addOverlay(natparkres, 'National Parks and Reserves');
			control.addOverlay(pkgdncem, 'Parks and Gardens');
			control.addTo(map);

			// add ATDW overlays to map
			// parent.addTo(map);
			// galmusecol.addTo(map);
			// histheritg.addTo(map);
			// lmarkbld.addTo(map);
			// mindustry.addTo(map);
			// natparkres.addTo(map);
			// pkgdncem.addTo(map);

			function title() {
				if (document.getElementById('cmn-toggle-0').checked) {
					map.addLayer(parent2);
				} else {
					map.removeLayer(parent2);
				}
			}
			document.getElementById('cmn-toggle-0').addEventListener('click',
				title
			);

			function child1() {
				if (document.getElementById('cmn-toggle-1').checked) {
					map.addLayer(colhissit);
				} else {
					map.removeLayer(colhissit);
				}
			}
			document.getElementById('cmn-toggle-1').addEventListener('click',
				child1
			);

			function child2() {
				if (document.getElementById('cmn-toggle-2').checked) {
					map.addLayer(conauscul);
				} else {
					map.removeLayer(conauscul);
				}
			}
			document.getElementById('cmn-toggle-2').addEventListener('click',
				child2
			);

			