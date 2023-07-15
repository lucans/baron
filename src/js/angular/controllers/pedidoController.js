baronApp.factory('pedidoFactory', function ($http, $location) {
    return {
        list: function(data){
            return $http.post(SERVER_PATH + "hub.php?classe=pedido&func=list&location=" + $location.path(), {
                data: data
            });
        },
        get: function(){
            return $http.get(SERVER_PATH + "hub.php?classe=pedido&func=get&location=" + $location.path());
        },
        insert: function(data) {
            return $http.post(SERVER_PATH + "hub.php?classe=pedido&func=insert&location=" + $location.path(), {
                data: data
            });
        },
        update: function(data) {
            return $http.post(SERVER_PATH + "hub.php?classe=pedido&func=update&location=" + $location.path(), {
                data: data
            });
        },
        delete: function(data) {
            return $http.post(SERVER_PATH + "hub.php?classe=pedido&func=delete&location=" + $location.path(), {
                data: data
            });
        },
        export: function(data) {
            return $http.post(SERVER_PATH + "hub.php?classe=pedido&func=export&location=" + $location.path(), {
                data: data
            });
        }
    }
})

baronApp.controller("pedidoController", ['$scope', '$http', '$rootScope', 
'cepFactory', 'toastFactory', 'pedidoFactory', 'cpfFactory', 'dateService', '$location', function ($s, $http, $rs, cepFactory, toastFactory, pedidoFactory, cpfFactory, dateService, $location) {

    $s.oPedidos = {};
    
    $s.list = function(){
        $s.loading = true;

        pedidoFactory.list({
            "table": "pedido",
            "where": "WHERE data BETWEEN " + Date.to,
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

    $s.get = function(){

        $s.loading = true;

        pedidoFactory.get()
        .then(function(result){
            $s.oUser = result.data[0];            
        })     
        .finally(() => {          
            $s.loading = false;
        });
    }

    $s.insert = function(data){
    
        $s.loading = true;

        if($s.CPFValidation == false){
            toastFactory.alert('Digite um CPF válido.')
            return;
        }

        pedidoFactory.insert(data)
        .then(function(){
            $location.path('/users');
            toastFactory.alert('Usuário cadastrado.')
        })     
        .finally(() => {          
            $s.loading = false;
        });
    }

    $s.update = function(data){
    
        $s.loading = true;

        pedidoFactory.update(data)
        .then(function(){
            $location.path('/user/update/' + data.Id);
            toastFactory.alert('Usuário atualizado.')
        })
        .finally(() => {          
            $s.loading = false;
        });
    }

    $s.delete = function(data){
    
        $s.loading = true;

        pedidoFactory.delete(data)
        .then(function(){
            $location.path('/users');
            toastFactory.alert('Usuário alterado.')
        })     
        .finally(() => {          
            $s.loading = false;
        });
    }

    $s.export = function(format){
    
        $s.loading = true;

        pedidoFactory.export({format : format})
        .then(function(result){
            $s.sFilePath = SERVER_PATH + result.data.filePath;        
        })     
        .finally(() => {
            $s.loading = false;
        });
    }

}]);