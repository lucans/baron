// Lucas Sanches 13/07/2023
SERVER_PATH = "server/";

var baronApp = angular.module('baronApp', ['ngRoute', 'ngMask'])

.config(function($routeProvider) {
    $routeProvider
    .when("/home", {
        templateUrl : "src/pages/home.html",
        controller: "homeController",
        title: "baron - Home"
    })     
    .when("/pedidos", {
        templateUrl : "src/pages/pedido/list.html",
        controller: "pedidoController",
        title: "baron - Pedidos"
    })     
    .otherwise({
        redirectTo: '/home'
    });
})

.directive('baronLoading', function() {
return {
    templateUrl: "src/pages/directives/baron-loading.html"
}
})

.directive('diaCard', function() {
    return {
        templateUrl: "src/pages/data/dia.html",
        controller: "diaController"
    }
})

.service('dateService', function() {

    this.dateToSQL = function(oDate) {
        return [oDate.getFullYear(), oDate.getMonth() + 1, oDate.getDate()].join('-');
    };

    this.addDiasDate = function(oDate, iDias) {
        let oNewDate = new Date(oDate.getFullYear(), oDate.getMonth(), oDate.getDate());
        oNewDate.setDate(oNewDate.getDate() + iDias);
        return oNewDate;
    };
})

.factory('cepFactory', function ($http) {
    return {
        post: function(cep) {
            return $http.get("https://viacep.com.br/ws/" + cep.replace("-", "") + "/json/");
        }
    }
})

.factory('cepFactory', function ($http) {
    return {
        post: function(cep) {
            return $http.get("https://viacep.com.br/ws/" + cep.replace("-", "") + "/json/");
        }
    }
})

.factory('cpfFactory', function ($http) {
    return {
        validate: function(data) {
            return $http.post(SERVER_PATH + "hub.php?entity=validate&func=validatecpf", {
                data: data
            });
        }
    }
})

.factory('toastFactory', function () {
    return {
        alert: function(msg) {
            M.toast({html: msg})
        }
    }
})