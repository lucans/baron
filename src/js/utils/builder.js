class Builder {

    constructor(oData, componentType, nameDiv) {
        this.oData = oData;
        this.componentType = componentType;
        this.nameDiv = nameDiv;
    }

    build(){
        console.log(this.oData);
        switch(this.componentType){
            case 'list':          
                oData.forEach(function(item){
                    $("." + this.nameDiv).append('<li class="list-group-item">' + item.nome + '</li>')
                })
                break;
            default:
                console.error('Sem componente definido.');
        }
    }

}