<?php

class VehicleController {
	var $testing;
	public function __construct() {
  }

  public function convertParams($params){
    $queryParams = explode(',',$params);
    $tmp = array();
    foreach ($queryParams as $key => $value) {
        $p = explode(':',$value);
        if(sizeof($p) > 0){
          $tmp[$p[0]] = $p[1];
        }
    }
    if(sizeof($tmp) > 0){
      return $tmp;
    }
    return false;
  }
	public function getAction($request) {
		if (isset($request->parameters['term'])) {
			$search = $request->parameters['term'];
			$data['term'] = $search;
			$acctSearch = new VehicleClass();
			$data['data'] = $acctSearch->findAccount($search);
			$data['message'] = sizeof($data['data']) . ' Results found';
		} else if (isset($request->url_elements[1])) {
			$account_id = $request->url_elements[1];
			if (isset($request->url_elements[2])) {
				$function = $request->url_elements[2];
        $acct = new VehicleClass($account_id);
        if(isset($request->url_elements[3])) {
          $params = $this->convertParams($request->url_elements[3]);
        }
        else {
          $params = false;
        }
        $d = $acct->$function($params);
        $data['params'] = $d;
        $data['vehicles'] = $d->returnVehicles();
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
}

?>
