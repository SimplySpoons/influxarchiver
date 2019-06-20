<?php

Class NexusConnect {

	private $sql_host = 'vtse-dbnexus02.XXXXX.ddc';
	private $sql_name = 'nexus4'; // DB Name
	private $sql_user = 'nexus'; // SQL User Name
	private $sql_pass = 'next1one'; // SQL USER Pass

	var $nexusConnect;
	public function __construct() {
    $db = mysqli_init();
    $db = new mysqli($this->sql_host, $this->sql_user, $this->sql_pass, $this->sql_name);
		if (!$db) {
      echo mysqli_connection_error($db);
      $this->nexusConnect = false;
		  exit();
		} else {
      $db->set_charset("utf8");
		  $this->nexusConnect = $db;
    }
	}
	public function connect() {
		return $this->nexusConnect;
  }
  public function get($query = false) {
    if(!$query){
      return false;
    } else {
      $query = $this->GetQueryWithData($query);
    }
    $arr = array();
    $j = 0;
    if ($results = mysqli_query($this->nexusConnect, $query)) {
			while ($result = mysqli_fetch_array($results, MYSQLI_ASSOC)) {
        $arr[$j++] = $result;
      }
      function filter(&$value) {
        $value = htmlspecialchars($value, ENT_NOQUOTES, 'UTF-8');
      }
      array_walk_recursive($arr, "filter");
      return $arr;
		} else {
			return mysqli_error($this->nexusConnect);
    }
  }
  public function GetQueryWithData() {
		$Query = "";
		$ParameterNumber = 0;

		if (func_num_args() && $Query = func_get_arg($ParameterNumber++)) {
			while ($ParameterNumber < func_num_args()) {
				$NextParameter = func_get_arg($ParameterNumber++);
				$PlaceToInsertParameter = strpos($Query, '?');
				if ($PlaceToInsertParameter !== false) {
					$QuerySafeString = '';

					if (is_bool($NextParameter)) {
						$QuerySafeString = $NextParameter ? 'TRUE' : 'FALSE';
					} else if (is_float($NextParameter) || is_int($NextParameter)) {
						$QuerySafeString = $NextParameter;
					} else if (is_null($NextParameter)) {
						$QuerySafeString = 'NULL';
					} else {
						$QuerySafeString = "'" . mysqli_real_escape_string($this->nexusConnect, $NextParameter) . "'";
					}

					$Query = substr_replace($Query, $QuerySafeString, $PlaceToInsertParameter, 1);
				}
			}
		}
		return $Query;
	}
}
