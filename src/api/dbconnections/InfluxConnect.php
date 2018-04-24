<?php

Class InfluxConnect {
	private $sql_host = 'influx-services-rw.dealer.ddc';
	private $sql_name = 'influx4'; // DB Name
	private $sql_user = 'nexus'; // SQL User Name
	private $sql_pass = 'next1one'; // SQL USER Pass
	var $influxConnect;
	public function __construct() {
    $dbConnect = mysqli_connect($this->sql_host, $this->sql_user, $this->sql_pass, $this->sql_name);
    mysqli_set_charset($dbConnect,"utf8");
    $this->influxConnect = $dbConnect;
		if (!$this->influxConnect) {exit();}
	}
	public function connect() {
		return $this->influxConnect;
	}
}
