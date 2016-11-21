app.directive('flowerDetail', function() {
    return {
        controller: 'flowerDetailController',
        controllerAs: '$ctrl',
        templateUrl: 'flower-detail.html'
    };
});

app.controller('flowerDetailController', ['$routeParams','$http',
function ($routeParams, $http) {
    this.flowerId = $routeParams.flowerId;
this.flowers = [];
    var url = 'http://localhost:8081/flowers/' + this.flowerId;
    var self = this;
    $http.get(url).success(function (data) {
        //self.flowers = data;
        //self.length = self.flowers.length;
        // self.flower = self.flowers[self.flowerId];
        self.flower = data.flower;
        self.length = data.length;
        self.next = parseInt(self.flowerId) + 1;
        self.previous = parseInt(self.flowerId) - 1;
        if(self.previous < 0)
            self.previous = self.length - 1;
        if(self.next === self.length)
            self.next = 0;
        console.log(data);
    });
}
]);

