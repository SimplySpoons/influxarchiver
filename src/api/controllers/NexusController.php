<?php

class NexusController {
	var $testing;
	public function __construct() {
	}
	public function getAction($request) {
		if (isset($request->parameters['term'])) {
			$search = $request->parameters['term'];
			$data['term'] = $search;
			$acctSearch = new NexusClass();
			$data['data'] = $acctSearch->findAccount($search);
			$data['message'] = sizeof($data['data']) . ' Results found';
		} else if (isset($request->url_elements[1])) {
			$account_id = $request->url_elements[1];
			if (isset($request->url_elements[2])) {
				$function = $request->url_elements[2];
				$acct = new NexusClass($account_id);
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
		if (isset($request->url_elements[1])) {
			$r = $request->url_elements[1];
			switch ($r) {
			case 'search':
				if (isset($data['term'])) {
					$search = $data['term'];
					$acctSearch = new NexusClass();
					$data['data'] = $acctSearch->findAccount($search);
					$data['message'] = sizeof($data['data']) . ' Results found';
				}
				break;
			default:
				// do nothing, this is not a supported action
				break;
			}
		} else {
			$data["message"] = "you want a list of users";
		}
		return $data;
	}
}

?>