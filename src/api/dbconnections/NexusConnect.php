<?php

Class NexusConnect {

	private $sql_host = 'vtse-dbnexus02.dealer.ddc';
	private $sql_name = 'nexus4'; // DB Name
	private $sql_user = 'nexus'; // SQL User Name
	private $sql_pass = 'next1one'; // SQL USER Pass

	var $nexusConnect;
	public function __construct() {

		$this->nexusConnect = mysqli_connect($this->sql_host, $this->sql_user, $this->sql_pass, $this->sql_name);
		if (!$this->nexusConnect) {
			echo mysqli_connection_error();
			exit();
		}
	}
	public function connect() {
		return $this->nexusConnect;
	}
}