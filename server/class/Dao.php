<?php

class Dao
{
	private $dbname = 'db_blue';
	private $host = 'localhost';
	private $username = 'root';
	private $pass;
	private $connection;
	private $data;

    private $table;
	private $fields;
    private $where;
	private $orderBy;
	
	function __construct($data, $table){
		$this->id = $data->id;
        $this->table = $table;
        $this->fields = $data->fields;
        $this->where = $data->where;
        $this->orderBy = $data->orderBy;

		$this->data = $data->data;
		$this->result = array();
	}

	public function connect(){
		try {
            $dsn = "mysql:host=$this->host;dbname=$this->dbname;charset=utf8mb4";
            $options = [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_EMULATE_PREPARES => false,
            ];
            $this->connection = new PDO($dsn, $this->username, $this->pass, $options);
        } catch (PDOException $e) {
            die('Conexão PDO falhou: ' . $e->getMessage());
        }
	}

	public function close(){
		$this->connection = '';
	}

	public function exec($sQuery, $debug = ''){

		try{
			$this->connect();
			
			$stmt = $this->connection->query($sQuery);
			
			while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
				array_push($this->result, $row);
			}
			
			if(!empty($this->connection->lastInsertId())){
				$this->result = array(
					'id' => $this->connection->lastInsertId()
				);
			}
		} catch(Exception $exception){
			$this->result = array(
				'status' => 400,
				'msg' => 'Falha ao executar.'
			);
		}

		$this->close();

        return $this->result;
	}

	public function list(){
        $sQuery = "SELECT " . $this->fields . " FROM " . $this->table . " " . $this->orderBy;
        return $this->exec($sQuery);
    }

    public function get($key = 'id'){
        $sQuery = "SELECT " . $this->fields . " FROM " . $this->table . " WHERE " . $key . " = " . $this->id . " " . $this->orderBy;
		if($debug == 'die'){
			echo '<pre>'; print_r($sQuery); die();
			
		}
        return $this->exec($sQuery);
    }

    public function insert(){

        foreach($this->data as $key => $value){
            $aKeys[] = $key;
            $aValues[] = "'" . $value . "'";
        }

        $sQuery = "INSERT INTO " . $this->table . " (" . implode(',', $aKeys) . ") VALUES " . "(" . implode(',', $aValues) . ")";
        
		return $this->exec($sQuery);
    }

    public function update(){
		
        foreach($this->data as $key => $value){
            $aValues[] = $key . " = " . "'" . $value . "'";
        }
        
        $sQuery = "UPDATE " . $this->table . " SET " . implode(', ', $aValues) . " WHERE id = " . $this->id;	
        
		return $this->exec($sQuery);
    }
}