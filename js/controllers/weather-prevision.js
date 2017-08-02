angular.module('aplicacao')
.controller('WeatherPrevision', function ($scope,$resource) {
    var WeatherChannel = $resource('http://api.openweathermap.org/data/2.5/weather?lat=-9.93&lon=-36.55&units=metric&APPID=a5d81f31d1c04720048e9357a0205c7d')
//[-9.93,-36.55] lat=-9.93&lon=-36.55
    var getWeather = function () {
        WeatherChannel.get().$promise.then(function (response) {
            $scope.tempo = response;
            console.log(response);
        }, function (promise) {
            alert("Erro");
        });
    }

    getWeather();
});