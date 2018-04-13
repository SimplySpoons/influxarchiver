<?php

class InfluxController {
	var $testing;
	public function __construct($dbConnect = false) {

	}
	public function getAction($request) {
		if (isset($request->url_elements[1])) {
			$account_id = $request->url_elements[1];
			if (isset($request->url_elements[2])) {
				$function = $request->url_elements[2];
				$acct = new InfluxClass($account_id);
				$data['data'] = $acct->$function();
			} else {
				// $data["message"] = "here is the info for user " . $account_id;
				$acct = new NexusClass($account_id);
				$data['data'] = $acct->getAccountInfo();
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