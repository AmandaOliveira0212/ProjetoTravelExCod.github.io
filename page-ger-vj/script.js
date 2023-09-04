var app = angular.module('myApp', []);

app.controller('cardAgenda', function ($scope) {
    $scope.cards = [
        {
            userName: 'Lucas Santiago',
            userId: 'lucas.santigo',
            userEmail: 'lucas.santigo@email.com',
            userTelefone: '11 9280-2090',
            userEndereco: 'Rua das Flores, Belo Horizonte, MG'
        },
        {
            userName: 'Vinicius Andrade',
            userId: 'vinicius.andrade',
            userEmail: 'vinicius.andrade@email.com',
            userTelefone: '11 5233-3000',
            userEndereco: 'Avenida do Sol, São Paulo, SP'
        },
        {
            userName: 'Pamela Vittorino',
            userId: 'lucas.vittorino',
            userEmail: 'lucas.vittorino@email.com',
            userTelefone: '11 3030-2000',
            userEndereco: 'Travessa da Paz, Rio de Janeiro, RJ'
        },
        {
            userName: 'Julia Santos',
            userId: 'julia.santos',
            userEmail: 'julia.santos@email.com',
            userTelefone: '11 4399-3002',
            userEndereco: 'Praça da Liberdade, Salvador, BA'
        },
        {
            userName: 'Sophia Oliveira',
            userId: 'sophia.oliveira',
            userEmail: 'sophia.oliveira@email.com',
            userTelefone: '31 9876-5432',
            userEndereco: 'Avenida Central, Belo Horizonte, MG'
        },
        {
            userName: 'Mateus Almeida',
            userId: 'mateus.almeida',
            userEmail: 'mateus.almeida@email.com',
            userTelefone: '51 3210-9876',
            userEndereco: 'Rua das Palmeiras, Porto Alegre, RS'
        },
        {
            userName: 'Isaac Silva',
            userId: 'isaac.silva',
            userEmail: 'isaac.silva@email.com',
            userTelefone: '21 5555-1234',
            userEndereco: 'Rua das Flores, Rio de Janeiro, RJ'
        },
        {
            userName: 'Enzo Souza',
            userId: 'enzo.souza',
            userEmail: 'enzo.souza@email.com',
            userTelefone: '62 7777-9876',
            userEndereco: 'Avenida Central, Goiânia, GO'
        }

    ];


    $scope.itemsPerPage = 5;
    $scope.currentPage = 1;

    $scope.updateDisplayedCards = function () {
        const startIndex = ($scope.currentPage - 1) * $scope.itemsPerPage;
        const endIndex = startIndex + $scope.itemsPerPage;

        $scope.displayedCards = $scope.cards.slice(startIndex, endIndex);
    };

    $scope.changePage = function (step) {
        if ($scope.currentPage + step >= 1 && $scope.currentPage + step <= $scope.totalPages) {
            $scope.currentPage += step;
            $scope.updateDisplayedCards();
        }
    };

    // Function to calculate the total pages
    $scope.calculateTotalPages = function () {
        $scope.totalPages = Math.ceil($scope.cards.length / $scope.itemsPerPage);
    };

    // Call the calculateTotalPages function initially
    $scope.calculateTotalPages();
    $scope.updateDisplayedCards();
});