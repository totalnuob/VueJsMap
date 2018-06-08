new Vue ({
    el: '#app',
    data: {
        /*Data will go here*/
        map: null,
        tileLayer: null,
        treeList: [
            {
                id: 0,
                label: 'USA',
                children: [
                    {
                        id: 1,
                        label: 'Alabama',
                        children: [
                            {
                                id: 11,
                                label: 'Birmingham',
                                active: false,
                                population: 212237,
                                coords: [33.543682, -86.779633]
                            }
                        ]

                    },

                    {
                        id: 2,
                        label: 'Alaska',
                        children: [
                            {
                                id: 21,
                                label: 'Anchorage',
                                active: false,
                                population: 291826,
                                coords: [61.217381, -149.863129]
                            }
                        ]
                    },

                    {
                        id: 3,
                        label: 'Arizona',
                        children: [
                            {
                                id: 31,
                                label: 'Phoenix',
                                active: false,
                                population: 1445632,
                                coords: [33.448376, -112.074036]
                            }
                        ]
                    },

                    {
                        id: 4,
                        label: 'Arkansas',
                        children: [
                            {
                                id: 41,
                                label: 'Little Rock',
                                active: false,
                                population: 193524,
                                coords: [34.746483, -92.289597]
                            }
                        ]
                    },

                    {
                        id: 5,
                        label: 'California',
                        children: [
                            {
                                id: 51,
                                label: 'Los Angeles',
                                active: false,
                                population: 3792621,
                                coords: [34.052235, -118.243683]
                            }
                        ]
                    },

                    {
                        id: 6,
                        label: 'Colorado',
                        children: [
                            {
                                id: 61,
                                label: 'Denver',
                                active: false,
                                population: 600158,
                                coords: [39.742043, -104.991531]
                            }
                        ]
                    },

                    {
                        id: 7,
                        label: 'Connecticut',
                        children: [
                            {
                                id: 71,
                                label: 'Bridgeport',
                                active: false,
                                population: 144229,
                                coords: [41.187386, -73.195734]
                            }
                        ]
                    },

                    {
                        id: 8,
                        label: 'Delaware',
                        children: [
                            {
                                id: 81,
                                label: 'Wilmington',
                                active: false,
                                population: 70851,
                                coords: [39.739071, -75.539787]
                            }
                        ]
                    },

                    {
                        id: 9,
                        label: 'Florida',
                        children: [
                            {
                                id: 91,
                                label: 'Jacksonville',
                                active: false,
                                population: 880619,
                                coords: [30.332184, -81.655647]
                            }

                        ]
                    },

                    {
                        id: 10,
                        label: 'Maine',
                        children: [
                            {
                                id: 101,
                                label: 'Portland',
                                active: false,
                                coords: [43.65744, -70.257568]
                            },
                            {
                                id: 102,
                                label: 'Lewiston',
                                active: false,
                                coords: [44.098928, -70.215168]
                            },
                            {
                                id: 103,
                                label: 'Bangor',
                                active: false,
                                coords: [44.800109, -68.776474]
                            }
                        ]
                    },
                    {
                        id: 11,
                        label: 'New Hampshire',
                        children: [
                            {
                                id: 111,
                                label: 'Manchester',
                                active: false,
                                coords: [42.987572, -71.460571]

                            },
                            {
                                id: 112,
                                label: 'Nashua',
                                active: false,
                                coords: [42.757096, -71.463318]
                            }
                        ]
                    },
                    {
                        id: 12,
                        label: 'Vermont',
                        children: [
                            {
                                id: 121,
                                label: 'Burlington',
                                active: false,
                                coords: [44.468091, -73.203278]
                            },
                            {
                                id: 122,
                                label: 'Rutland',
                                active: false,
                                coords: [43.609731, -72.973251]
                            }
                        ]
                    }
                ]
            },

        ],
        markers: [],
        popups: [],
        labels: [],
        defaultProps: {
            children: 'children',
            label: 'label'
        }
    },
    mounted() {
        /*This code will run when app is mounted*/
        this.initiateMap();
        this.initiateMarkers();
    },
    methods: {
        /*Here goes any app-specific functions*/
        initiateMap() {
            this.map = L.map('mapid').setView([37.8, -96], 4);

            this.tileLayer = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
                maxZoom: 18,
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
                '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                id: 'mapbox.light'
            });

            this.tileLayer.addTo(this.map);
        },
        initiateMarkers() {

        },
        getCheckedNodes() {
            console.log(this.$refs.tree.getCheckedNodes());
        },
        handleCheckChange(data, checked, subtreeChecked) {
            console.log(data, checked, subtreeChecked);
            if (checked && data.coords != null) {
                this.markers = data.coords;
                this.popups = data.population;
                this.labels = data.label;
                L.marker(this.markers).addTo(this.map).bindPopup(this.labels + '. Population is: ' + this.popups);
            }
        },
        handleHover() {
            marker.on('mouseover', function (e) {
                this.openPopup();
            });
            marker.on('mouseout', function (e) {
                this.closePopup();
            })
        },
        handleCheck(data, status) {
            /* console.log(data, status); */
        }
    }

});
