ymaps.ready(init);
    var myMap,
        myPlacemark;

    function init(){
        myMap = new ymaps.Map("map", {
            center: [59.93907420, 30.32047430],
            zoom: 17
        });

        myPlacemark = new ymaps.Placemark([59.93866102, 30.32307271], {}, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'img/marker.png',
            iconImageSize: [231, 190],
            iconImageOffset: [-50, -190]
          });

        myMap.geoObjects.add(myPlacemark);
    }
