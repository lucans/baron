<?php

class Categoria {

    public $id;
    private $table = 'categoria';

    public function __construct($post){        
        $this->id = $post->id;
        $this->result = array();
        $this->dao = new Dao($post, $this->table);
    }

    public function list(){
        
        $this->result = $this->dao->list();
    }

    public function get(){
        $this->result = $this->dao->get();
    }

    public function insert(){
        $this->result = $this->dao->insert();
    }

    public function update(){
        $this->result = $this->dao->update();
    }
}