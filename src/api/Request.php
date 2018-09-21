<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
header('Content-type: application/json');

include_once 'classes/AdminClass.php';
include_once 'index.php';

$checker = new AdminClass();
$request = new Request();
$controller_name = ucfirst($request->url_elements[0]) . 'Controller';
if (class_exists($controller_name)) {
	$controller = new $controller_name();

	if($controller_name == "AdminController"){
		if($checker->CheckCredentials()){
			$result = array();
			$result['TYPE'] = 'SUCCESS';
			echo json_encode($result, JSON_PRETTY_PRINT);
		}else{
			$result = array();
			$result['TYPE'] = 'FAILURE';

			//SEND AN EMAIL TO IST ASKING TO UPDATE THE DATABASE.
			mail("CAIinventorysupport@coxautoinc.com","Archiver Password Reset","This is an automated e-mail sent from the Influx Archiver 2.0 requesting the password in the database be updated.");

			echo json_encode($result, JSON_PRETTY_PRINT);
		}
	}else{
		$action_name = strtolower($request->verb) . 'Action';
		$result = $controller->$action_name($request);
		echo json_encode($result, JSON_PRETTY_PRINT);
	}
}

?>