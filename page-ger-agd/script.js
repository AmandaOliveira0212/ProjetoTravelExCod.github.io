var app = angular.module('myApp', []);

app.controller('cardAgenda', function ($scope) {
    $scope.cards = [
        {
            tituloViagem: 'Viagem para Cancún',
            totalViajantes: '30',
            dataIda: '20/01/2023',
            dataVolta: '27/01/2023',
            totalGanhos: 'R$ 60.788,00'
        },
        {
            tituloViagem: 'Viagem para São Paulo',
            totalViajantes: '15',
            dataIda: '20/01/2023',
            dataVolta: '27/01/2023',
            totalGanhos: 'R$ 6.788,00'
        },
        {
            tituloViagem: 'Viagem para Roma',
            totalViajantes: '10',
            dataIda: '20/01/2023',
            dataVolta: '27/01/2023',
            totalGanhos: 'R$ 98.338,00'
        },
        {
            tituloViagem: 'Viagem para Jamaica',
            totalViajantes: '25',
            dataIda: '20/01/2023',
            dataVolta: '27/01/2023',
            totalGanhos: 'R$ 86.230,00'
        },
        {
            tituloViagem: 'Viagem para Fortaleza',
            totalViajantes: '40',
            dataIda: '20/01/2023',
            dataVolta: '27/01/2023',
            totalGanhos: 'R$ 17.900,00'
        },

        {
            tituloViagem: 'Viagem para Chile',
            totalViajantes: '30',
            dataIda: '20/01/2023',
            dataVolta: '27/01/2023',
            totalGanhos: 'R$ 46.798,00'
        },
        {
            tituloViagem: 'Viagem para Porto Alegre',
            totalViajantes: '15',
            dataIda: '20/01/2023',
            dataVolta: '27/01/2023',
            totalGanhos: 'R$ 11.696,00'
        },
        {
            tituloViagem: 'Viagem para Salvador',
            totalViajantes: '30',
            dataIda: '20/01/2023',
            dataVolta: '27/01/2023',
            totalGanhos: 'R$ 15.348,00'
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