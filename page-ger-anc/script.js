var app = angular.module('myApp', []);

app.controller('cardPagamentos', function ($scope) {
    $scope.cardAprovados = [
        {
            nomeViagem: 'Viagem para Paris',
            dataIda: '10/03/2023',
            dataVolta: '15/03/2023',
        },
        {
            nomeViagem: 'Viagem para São Paulo',
            dataIda: '05/07/2023',
            dataVolta: '20/07/2023',
        },
        {
            nomeViagem: 'Visita a Nova Iorque',
            dataIda: '22/09/2023',
            dataVolta: '28/09/2023',
        },
        {
            nomeViagem: 'Passeio em Tóquio',
            dataIda: '03/04/2023',
            dataVolta: '10/04/2023',
        },
        {
            nomeViagem: 'Explorando Los Angeles',
            dataIda: '12/06/2023',
            dataVolta: '20/06/2023',
        }
    ];

    $scope.cardPendentes = [
        {
            nomeViagem: 'Aventura em Londres',
            dataIda: '15/04/2023',
            dataVolta: '25/04/2023',
        },
        {
            nomeViagem: 'Viagem Relaxante a Bali',
            dataIda: '08/06/2023',
            dataVolta: '20/06/2023',
        },
        {
            nomeViagem: 'Exploração em Roma',
            dataIda: '02/09/2023',
            dataVolta: '10/09/2023',
        },
        {
            nomeViagem: 'Descobrindo Sydney',
            dataIda: '12/10/2023',
            dataVolta: '20/10/2023',
        },
        {
            nomeViagem: 'Fim de Semana em Dubai',
            dataIda: '05/11/2023',
            dataVolta: '07/11/2023',
        },
        {
            nomeViagem: 'Viagem Cultural a Kyoto',
            dataIda: '18/02/2023',
            dataVolta: '25/02/2023',
        },
        {
            nomeViagem: 'Explorando Istambul',
            dataIda: '06/07/2023',
            dataVolta: '15/07/2023',
        },
        {
            nomeViagem: 'Descanso em Malibu',
            dataIda: '28/09/2023',
            dataVolta: '02/10/2023',
        }
    ];

    $scope.cardReembolsados = [
        {
            nomeViagem: 'Passeio em Amsterdã',
            dataIda: '10/05/2023',
            dataVolta: '18/05/2023',
        },
        {
            nomeViagem: 'Viagem Gastronômica a Barcelona',
            dataIda: '03/08/2023',
            dataVolta: '12/08/2023',
        },
        {
            nomeViagem: 'Exploração em Bangkok',
            dataIda: '22/11/2023',
            dataVolta: '30/11/2023',
        },
        {
            nomeViagem: 'Descanso em Honolulu',
            dataIda: '14/12/2023',
            dataVolta: '22/12/2023',
        }
    
    ];


    /* Show more button */
    $scope.mostrandoAprovados = 3;
    $scope.mostrandoPendentes = 3;
    $scope.mostrandoReembolsados = 3;

    $scope.indiceInicialAp = 0;
    $scope.indiceInicialPen = 0;
    $scope.indiceInicialRem = 0;

    $scope.mostrarMaisTextoAp = 'Mostrar Mais';
    $scope.mostrarMaisTextoPen = 'Mostrar Mais';
    $scope.mostrarMaisTextoRem = 'Mostrar Mais';

    
    $scope.mostrarMaisAprovados = function() {
        $scope.indiceInicialAp += 3;
    
        if ($scope.indiceInicialAp >= $scope.cardAprovados.length) {
            $scope.indiceInicialAp = 0;
        }

        $scope.mostrarMaisTextoAp = $scope.indiceInicialAp === 0 ? 'Mostrar Mais' : 'Mostrar Menos';
    };

    $scope.mostrarMaisPendentes = function() {
        $scope.indiceInicialPen += 3;
    
        if ($scope.indiceInicialPen >= $scope.cardPendentes.length) {
            $scope.indiceInicialPen = 0;
        }

        $scope.mostrarMaisTextoPen = $scope.indiceInicialPen === 0 ? 'Mostrar Mais' : 'Mostrar Menos';
    };
    $scope.mostrarMaisReembolsados = function() {
        $scope.indiceInicialRem += 3;
    
        if ($scope.indiceInicialRem >= $scope.cardReembolsados.length) {
            $scope.indiceInicialRem = 0;
        }

        $scope.mostrarMaisTextoRem = $scope.indiceInicialRem === 0 ? 'Mostrar Mais' : 'Mostrar Menos';
    };
});