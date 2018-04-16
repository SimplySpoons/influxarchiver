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
      $t = $acctSearch->findAccount($search,$request->parameters['ignore']);
      $data['data'] = $t['data'];
      $data['query'] = $t['query'];
      $data['notIn'] = $request->parameters['ignore'];
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

  public function correctParams($params) {
    $arr = array();
    foreach ($params as $key => $value) {
        if($key === "ignore"){
          $value = str_replace('[','',$value);
          $value = str_replace(']','',$value);
        }
        if($key != "url_elements"){
          $arr[$key] = $value;
        }
    }
    return $arr;
  }

  public function optionsAction($request) {
    return "You made an options request you dunst";
  }

	public function postAction($request) {
    $request->parameters = $this->correctParams($request->parameters);
		if (isset($request->url_elements[1])) {
			$r = $request->url_elements[1];
			switch ($r) {
			case 'search':
				if (isset($request->parameters['term'])) {
          return $this->getAction($request);
				}
				break;
			default:
				// do nothing, this is not a supported action
				break;
			}
		} else {
			$data["message"] = "you want a list of users";
		}
		return $request;
	}
}

?>
