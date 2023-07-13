class Pedido {

    constructor() {    
        this.classe = 'pedido';  
    }
        
    list(funcao, data){
        return $.ajax({
            url: './server/hub.php?classe=' + this.classe + '&func=' + funcao,
            method: 'POST',
            data: data,
            success: function(response) {
                return response;
            },
            error: function(xhr, status, error) {              
                console.log('Erro: ' + status);
            }
        })     
    }
}