<?php

class PedidoProduto {

    public $idPedido;
    public $idProduto;
    private $table = 'pedido_produto';

    public function __construct($post = array()){
        $this->idPedido = $post->idPedido;
        $this->idProduto = $post->idProduto;
        $this->result = array();
        $this->dao = new Dao($post, $this->table);
    }

    public function list(){
        $this->result = $this->dao->list();
    }

    public function get(){
        $this->result = $this->dao->get('id_pedido');
    }

    public function insert(){
        $this->result = $this->dao->insert();
    }

    public function update(){
        $this->result = $this->dao->update();
    }
}