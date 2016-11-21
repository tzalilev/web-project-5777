app.directive('flowerList', function() {
    return {
        controller: 'flowerListCtrl',
        controllerAs: '$ctrl',
        templateUrl: 'flower-list.html'
    };
});
app.controller('flowerListCtrl', ['$http', function ($http) {
    var self = this;
    var url = 'http://localhost:8081/flowers';
    $http.get(url).success(function (data) {
        self.flowers = data;
        console.log(data);
    });



    //     [
    //     {
    //         id: 0,
    //         name: 'Rose',
    //         snippet: 'You can\'t go wrong with a bouquet of roses! They are always a perfect choice, whether you want to spoil a friend on her birthday or send love to your significant other. Hand-delivered by a local florist.',
    //         color: 'pink',
    //         image: 'http://www.freeimageslive.co.uk/files/images006/Rose.jpg',
    //         price: 54
    //     }, {
    //         id: 1,
    //         name: 'Narcissus',
    //         snippet: 'Nothing says spring quite like daffodils! And there\'s no better way to present them than in a simple, clear glass cube vase with minimal decoration. Send this seasonal spring flower at Easter, or any time you want to brighten someone\'s day.',
    //         color: 'white',
    //         image: 'http://sbstatic.org/img/1382134082ia_30566487_Subscription_XL.jpg',
    //         price: 33
    //     }, {
    //         id: 2,
    //         name: 'Anemone',
    //         snippet: 'When it comes to looking delicate and graceful, Anemone flowers are experts. These charming blooms inspired poets, artists, and songwriters for centuries with their colorful cup shaped petals and contrasting dark or yellow center. ',
    //         color: 'red',
    //         image: 'http://media.istockphoto.com/photos/red-anemone-coronaria-flower-red-white-picture-id525495972?k=6&m=525495972&s=170667a&w=0&h=AYYFWx-DYA50d9NceebPfkoNZ1ZLNJ11kfQCFLqvt2U=',
    //         price: 48
    //     }, {
    //         id: 3,
    //         name: 'Violet',
    //         snippet: 'When it comes to looking delicate and graceful, Anemone flowers are experts. These charming blooms inspired poets, artists, and songwriters for centuries with their colorful cup shaped petals and contrasting dark or yellow center. ',
    //         color: 'purple',
    //         image: 'https://s-media-cache-ak0.pinimg.com/736x/29/52/d5/2952d56059eb6e1c22ebc39fce63d553.jpg',
    //         price: 35
    //     }, {
    //         id: 4,
    //         name: 'Sunflower',
    //         snippet: 'No flower can lift someone’s spirits quite like sunflowers. They are bright and cheery, and as warm and inviting as the sweet summer sun. With brilliant yellow petals, also known as rays, sunflowers have an unmistakable sun-like appearance that has made them a crowd favorite, especially in the summer months.',
    //         color: 'yellow',
    //         image: 'http://cafe.themarker.com/thumbnails/t/246/341/4/file_0_b.jpg?1364624294',
    //         price: 46
    //     }
    //
    // ];
}]);