
                    var map = L.map('map').setView([55.76239378474318, 37.85664198038579], 13);
        
                    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        }).addTo(map);
                        
                    L.marker([55.76239378474318, 37.85664198038579]).addTo(map)
                        .bindPopup('Реутов- Наукоград!')
                        .openPopup();
            