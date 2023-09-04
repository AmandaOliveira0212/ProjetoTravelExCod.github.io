var app = angular.module('myApp', []);

app.controller('cardAccess', function ($scope) {
    $scope.cards = [
        {
            imagem: 'images\\Loudspeaker.svg',
            title: 'Gerenciar anúncios',
            descricao: 'Veja seus anúncios de viagens publicados e edite',
            url: 'page-ger-anc/geranuncio.html'
        },
        {
            imagem: 'images\\User.svg',
            title: 'Gerenciar viajantes',
            descricao: 'Clique aqui para visualizar viajantes com reservas',
            url: 'page-ger-vj/viajantes.html'
        },
        {
            imagem: 'images\\agend.svg',
            title: 'Gerenciar agenda',
            descricao: 'Confira toda a agenda de viagens realizadas ou previstas',
            url: 'page-ger-agd/agenda.html'
        },
        {
            imagem: 'images\\money.png',
            title: 'Gerenciar pagamentos',
            descricao: 'Gerencie todo o histórico de pagamentos de viajantes',
            url: 'page-ger-pag/pagamentos.html'
        }
    ];
});
