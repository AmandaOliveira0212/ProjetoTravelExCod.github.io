var app = angular.module('myApp', []);

app.controller('cardPagamentos', function ($scope) {
    $scope.cardAprovados = [
        {
            nomeViajante: 'Carlos Alberto',
            viagemContratada: 'Viagem para Cancún',
            dataPagamento: '01/01/2023',
        },
        {
            nomeViajante: 'André Soares',
            viagemContratada: 'Viagem para Roma',
            dataPagamento: '02/02/2023',
        },
        {
            nomeViajante: 'Rosa Fernandez',
            viagemContratada: 'Viagem para São Paulo',
            dataPagamento: '08/03/2023',
        },
        {
            nomeViajante: 'Fernanda Lucas',
            viagemContratada: 'Viagem para Amazonas',
            dataPagamento: '19/08/2023',
        },
        
    ];

    $scope.cardPendentes = [
        {
            nomeViajante: 'José Andrade',
            viagemContratada: 'Viagem para Rio de Janeiro',
            dataPagamento: '11/04/2023',
        },
        {
            nomeViajante: 'Sandra Augusto',
            viagemContratada: 'Viagem para Salvador',
            dataPagamento: '23/05/2023',
        },
        {
            nomeViajante: 'Mariana Silva',
            viagemContratada: 'Viagem para Chile',
            dataPagamento: '29/06/2023',
        },
        {
            nomeViajante: 'André Soares',
            viagemContratada: 'Viagem para Roma',
            dataPagamento: '02/02/2023',
        }
    ];

    $scope.cardReembolsados = [
        {
            nomeViajante: 'Rodrigos Santos',
            viagemContratada: 'Viagem para Pernambuco',
            dataPagamento: '11/06/2023',
        },
        {
            nomeViajante: 'André Ferreira',
            viagemContratada: 'Viagem para Mato Grosso',
            dataPagamento: '12/07/2023',
        },
        {
            nomeViajante: 'Aline Bueno',
            viagemContratada: 'Viagem para Argentina',
            dataPagamento: '21/07/2023',
        },
        {
            nomeViajante: 'Carlos Alberto',
            viagemContratada: 'Viagem para Cancún',
            dataPagamento: '01/01/2023',
        },
        {
            nomeViajante: 'José Andrade',
            viagemContratada: 'Viagem para Rio de Janeiro',
            dataPagamento: '11/04/2023',
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