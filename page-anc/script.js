var app = angular.module('myApp', []);

app.directive('fileInput', function () {
    return {
        require: 'ngModel',
        link: function (scope, element, attrs, ngModel) {
            element.on('change', function (event) {
                var files = event.target.files;
                if (files.length > 0) {
                    ngModel.$setViewValue(files[0]);
                } else {
                    ngModel.$setViewValue(null);
                }
                ngModel.$render();
            });
        }
    };
});


app.controller('ImageController', function ($scope) {
    $scope.imagePreview = false;
    $scope.previewURL = '';

    $scope.$watch('dados.image', function (newVal) {
        if (newVal) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $scope.$apply(function () {
                    $scope.previewURL = e.target.result;
                    $scope.imagePreview = true;
                });
            };
            reader.readAsDataURL(newVal);
        } else {
            $scope.imagePreview = false;
            $scope.previewURL = '';
        }
    });
});

app.controller('AnuncioController', function ($scope, $http) {
    $scope.dados = {
        titulo: '',
        partida: '',
        destino: '',
        ida: '',
        volta: '',
        vagas: '',
        detalhes: '',
        image: ''
    };

    $scope.enviarDados = function () {
        console.log('Antes da alteração:', $scope.dados.image);
        if (!$scope.dados.image) {
            alert('Por favor, adicione uma imagem antes de publicar o anúncio.');
            return;
        }

        console.log('Depois da alteração:', $scope.dados.image);

        var dados = angular.copy($scope.dados);

        // Ajustar o formato da data 'ida'
        dados.ida = new Date(dados.ida.split('/').reverse().join('-'));

        // Ajustar o formato da data 'volta'
        dados.volta = new Date(dados.volta.split('/').reverse().join('-'));

        console.log(dados);

        $scope.dados = {
            titulo: '',
            partida: '',
            destino: '',
            ida: '',
            volta: '',
            vagas: '',
            detalhes: '',
            image: ''
        };

        $scope.publicacaoSucesso = true;
    };
    
});

