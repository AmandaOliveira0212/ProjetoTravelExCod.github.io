var app = angular.module('myApp', []);

app.controller('cardComentario', function($scope) {
    $scope.cardComentario = [
        {
            userImage: '/images/Ellipse 1.png',
            userComentario: 'Minha viagem foi simplesmente incrível! Explorar novos lugares e culturas é uma experiência que todos deveriam vivenciar. Mal posso esperar para a próxima aventura!'
        },
        {
            userImage: '/images/Ellipse 2.png',
            userComentario: 'Essa viagem foi uma jornada inesquecível. Desde paisagens deslumbrantes até encontros com pessoas fascinantes, cada momento foi uma nova descoberta.'
        },
        {
            userImage: '/images/Ellipse 3.png',
            userComentario: 'Viajar me ensinou que o mundo é vasto e cheio de possibilidades emocionantes. Conhecer diferentes modos de vida é uma lição que levarei para sempre. Adorei!'
        },
        {
            userImage: '/images/Ellipse 4.png',
            userComentario: 'Viajar me ensinou que o mundo é vasto e cheio de possibilidades emocionantes. Conhecer diferentes modos de vida é uma lição que levarei para sempre. Adorei!'
        }
    ];

    $scope.mostrandoMais = 3;
    $scope.indiceInicial = 0;
    $scope.mostrarMaisTexto = 'Mostrar Mais';

    $scope.mostrarMaisCards = function() {
        $scope.indiceInicial += 3;
    
        if ($scope.indiceInicial >= $scope.cardComentario.length) {
            $scope.indiceInicial = 0;
        }
    
        $scope.mostrarMaisTexto = $scope.indiceInicial === 0 ? 'Mostrar Mais' : 'Mostrar Menos';
    };

});
