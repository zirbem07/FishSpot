angular.module('fishSpot.controllers', [])

.controller('SignInCtrl', function($scope, $location) {
    $scope.signIn = function(path){
        $location.path( path );
    };
    $scope.register = function(path){
        $location.path( path );
    };
})

.controller('RegisterCtrl', function($scope, $location) {

})

.controller('MapCtrl', function($scope) {
    function initialize() {
        var mapOptions = {
            center: new google.maps.LatLng(38.0000, -97.0000),
            zoom: 10,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var onSuccess = function(position) {
            $scope.map.center = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            };
        }

        var map = new google.maps.Map(document.getElementById("map"),
            mapOptions);
        $scope.map = map;

        google.maps.event.addListener(map, 'click', function(event) {
            placeMarker(event.latLng);
            //createPinDetails();
        });

        function placeMarker(location) {
            var marker = new google.maps.Marker({
                position: location,
                map: map,
                icon: image,
                draggable: true
            });
        }

        var image = {
            url: 'img/fishPin.jpeg',
            size: new google.maps.Size(71, 71),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(25, 25)
        };

        function onError(error) {
            console.log('code: '    + error.code    + '\n' + 'message: ' + error.message + '\n');
        }


        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }
    google.maps.event.addDomListener(window, 'load', initialize);  initialize();
})