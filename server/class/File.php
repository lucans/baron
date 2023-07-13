<?php

class File
{
	
	function __construct(){
		$this->result = '';
        $this->path = "./exports/";
	}

	public function export($format, $name, $data){

        if($format == 'CSV'){
            
            $filePath = $this->path . $name . '.csv';
            
            $file = fopen($filePath, 'w');                
            
            $header = array('Id', 'Nome', 'CPF', 'DataNascimento', 'Email', 'Telefone', 'CEP', 'Estado', 'Cidade', 'Bairro', 'Endereco', 'Status');
            
            fputcsv($file, $header);
            
            foreach($data as $item){                
                fputcsv($file, $item);
            }
            
            fclose($file);
            
            return array('filePath' => $filePath);
        }
	}

}
?>