<?php

class Validate
{
	
	function __construct($data){
		$this->result = '';
        $this->CPF = $data->CPF;
	}

	public function validatecpf(){
        
            $this->CPF = preg_replace( '/[^0-9]/is', '', $this->CPF);

            $this->result = array(
                'status' => http_response_code(200),
                'validate' => 'invalid',
                'msg' => 'CPF Inválido'
            );
            
            if (strlen($this->CPF) != 11) {
                return $this->result;
            }

            // Verifica se foi informada uma sequência de digitos repetidos
            if (preg_match('/(\d)\1{10}/', $this->CPF)) {
                return $this->result;
            }

            // Faz o calculo para validar o CPF
            for ($t = 9; $t < 11; $t++) {
                for ($d = 0, $c = 0; $c < $t; $c++) {
                    $d += $this->CPF[$c] * (($t + 1) - $c);
                }
                $d = ((10 * $d) % 11) % 10;
                if ($this->CPF[$c] != $d) {
                    return $this->result;
                }
            }

            $this->result = array(
                'status' => http_response_code(200),
                'validate' => 'valid',
                'msg' => 'CPF Verificado'
            );
	}

}
?>