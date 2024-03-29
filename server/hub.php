<?php 

error_reporting(E_ERROR);

$postData = json_decode(file_get_contents('php://input'));

include('./class/Dao.php');
include('./class/Pedido.php');
include('./class/PedidoProduto.php');

extract($_REQUEST);

if(empty($classe) || empty($func)){
	echo 'Sem parâmetros.';
	return;
}

try{

	$classe = new $classe($postData);
	
	$classe->$func();

} catch(Exception $e) {

	echo $e->getMessage();

} finally {
	echo json_encode($classe->result);
}