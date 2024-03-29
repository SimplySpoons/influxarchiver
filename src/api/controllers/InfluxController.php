<?php
	include_once 'classes/AdminClass.php';

class InfluxController {
	private $AdminCheck;

	public function __construct($dbConnect = false) {
		$this->AdminCheck = new AdminClass();
	}

	public function getAction($request) {
		if (isset($request->url_elements[1])) {
			$account_id = $request->url_elements[1];
			if (isset($request->url_elements[2])) {
				$function = $request->url_elements[2];

				//Check if the credentials for accessing the configs is valid.
				if($this->AdminCheck->CheckCredentials()){
					$acct = new InfluxClass($account_id);
					$data['data'] = $acct->$function();
				}else{
					$data['data'] = "ERROR";
				}
			} else {
				// $data["message"] = "here is the info for user " . $account_id;
				$acct = new NexusClass($account_id);
			}
		} else {
			$data["message"] = "you want a list of users";
		}
		return $data;
	}

	public function postAction($request) {
		$data = $request->parameters;
		$data['message'] = "This data was submitted";
		return $data;
	}
}

?>