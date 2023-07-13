$(document).ready(function() {
    
    var oCategoria = new Categoria();
    var oProduto = new Produto();
    var oPedido = new Pedido();

    let categorias = {};
    let produtos = {};

    $(".btn_list_categoria").click(function(){
        oCategoria.list('list', {
            "fields": "*",
            "orderBy": "order by id asc"
        }).then(function(result){
            categorias = JSON.parse(result);
            build(categorias, 'list', 'categorias');
        });
    })

    $(".btn_list_produto").click(function(){
        oProduto.list('list', {
            "fields": "*",
            "orderBy": "order by nome asc"
        }).then(function(result){
            produtos = JSON.parse(result);
            build(produtos, 'list', 'produtos');
        });
    })

    $(".btn_list_pedido").click(function(){
        oPedido.list('list', {
            "fields": "*",
            "orderBy": "order by id desc"
        }).then(function(result){
            pedidos = JSON.parse(result);
            build(pedidos, 'card', 'pedidos');
        });
    })
    
    $(".btn_list_categoria").click();
    $(".btn_list_produto").click();
    $(".btn_list_pedido").click();
   
    function build(oData, componentType, nameDiv){
        console.table(oData);
        switch(componentType){
            case 'list':          
                oData.forEach(function(item){
                    $("." + nameDiv).append('<li class="list-group-item">' + item.nome + '</li>')
                })
                break;
            case 'card':
                oData.forEach(function(item){
                    $("." + nameDiv).append(
                        '<div class="card" style="width: 18rem;">' +                            
                            '<div class="card-body">' +
                                '<h5 class="card-title">Pedido: ' + item.id + 
                                    '<span class="badge badge-success m-2">' + item.status + '</span>' +
                                '</h5>' +
                                '<p class="card-text">' + item.data + '</p>' +
                                '<a href="#" class="btn btn-primary">Clonar pedido</a>' +
                            '</div>' +
                        '</div>'
                    )
                })
                break;
            default:
                console.error('Sem componente definido.');
        }
    }

});
