baronApp.controller("diaController", 
['$scope', 'toastFactory', 'dateService', 'pedidoFactory', '$location', 
function ($s, toastFactory, dateService, pedidoFactory, $location) {
    
    $s.oPedidos = {};
    $s.aSemanaLabel = ['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado'];
    
    $s.listPedidos = function(){
        $s.loading = true;

        pedidoFactory.list({
            "table": "pedido",
            "where": "WHERE DATE(data) = '" + dateService.dateToSQL($s.oDia) + "'",
            "fields": "*",
            "orderBy": "order by id desc",
        })
        .then(function(result){
            $s.oPedidos = result.data;
        })     
        .finally(() => {          
            $s.loading = false;
        });
    }

    $s.listPedidos();

}]);