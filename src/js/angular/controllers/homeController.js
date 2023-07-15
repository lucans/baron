baronApp.controller("homeController", ['$scope', '$http', '$rootScope', 'toastFactory', 'dateService', '$location', function ($s, $http, $rs, toastFactory, dateService, $location) {

    $s.oSemana = [];
    let oData = new Date();
    
    $s.oSemana.push(dateService.addDiasDate(oData, -1));
    $s.oSemana.push(dateService.addDiasDate(oData, 0));
    $s.oSemana.push(dateService.addDiasDate(oData, 1));
    
}]);