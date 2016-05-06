angular.module('hello', [])
    .controller('home', function ($http) {
        var self = this;
        //make an http request to /resource/ then set greeting to the data
        //index.html home fields such as home.greeting and home.id should be populated
        $http.get('/resource/').then(function (response) {
            self.greeting = response.data;
        });
    })