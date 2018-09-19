<?php

class ArchivesClass {
	var $accountId;
	var $parser;
	var $providerId;
	var $filename;
	public function __construct($accountId, $parser, $filename, $providerId = 'null') {
		$this->accountId = $accountId;
    $this->parser = $parser;
    if(isset($providerId) && strlen($providerId) >= 0){
      $this->providerId = $providerId;
    }
    else {
      $this->providerId = 'false';
    }
		$this->filename = $filename;
	}

	public function filters() {

		$url = "http://influxtools.dealer.com/archiver_test/conf.php?file=parser_$this->parser.conf";
		$username = 'ddcluker';
		$password = 'xoxide101';

		$context = stream_context_create(array(
			'http' => array(
				'header' => "Authorization: Basic " . base64_encode("$username:$password"),
				'method' => "GET",
			),
		));

		$ch = curl_init($url);
		curl_setopt($ch, CURLOPT_FRESH_CONNECT, true);
		curl_setopt($ch, CURLOPT_USERPWD, $username . ":" . $password);
		curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 500);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		$filters = curl_exec($ch);
		$http = curl_getinfo($ch, CURLINFO_HTTP_CODE);
		if($http == 200) {
			$filter = array();
			if ($filters) {
				$filters = explode('#F', $filters);
				for ($i = 0; $i < sizeof($filters); $i++) {
					if (strpos($filters[$i], $this->accountId . ' ')) {
						  $tmp = explode("\nif", $filters[$i], 2);
				if(isset($tmp)) {
				  $array['task'] = $tmp[0];
				}
				if(isset($tmp[1])) {
				  $array['filter'] = 'if' . $tmp[1];
				}
						  $array['parser'] = $this->parser;
				array_push($filter, $array);
			  }
				}
				if (sizeof($filter) > 0) {
					$return[$this->parser] = $filter;
					return $return;
				}
			}
			return array();
		}else{
			echo "not working";
		}
  }

	function file_list() {
		$url = "http://influxtools.dealer.com/archiver_test/?provider=$this->parser&accountId=$this->accountId&providerId=$this->providerId";

		$username = 'ddcluker';
		$password = 'xoxide10';

		$context = stream_context_create(array(
			'http' => array(
				'header' => "Authorization: Basic " . base64_encode("$username:$password"),
			),
		));

		$data = file_get_contents($url, false, $context);
		$files['data'] = $data;
		$files['url'] = $url;

		return $files;
	}

	function header_map() {
		$url = "http://influxtools.dealer.com/archiver_test/conf.php?file=parser_$this->parser.conf";
		$username = 'ddcluker';
		$password = 'xoxide10';

		$context = stream_context_create(array(
			'http' => array(
				'header' => "Authorization: Basic " . base64_encode("$username:$password"),
				'method' => "GET",
			),
		));
		$map = file_get_contents($url, false, $context);
		$map2 = explode('@{$header_map}', $map);
		$map = $map2[1];
		$inv_del = $map2[0];
		$map = explode(');', $map);
		$map = $map[0];
		$map = $this->get_delimited($map);
		$headerMap = array();
		for ($i = 0; $i < sizeof($map); $i++) {
			if ($map[$i] == "null") {
				$tmp['prop'] = "$map[$i]-$i";
			} else {
				$tmp['prop'] = "$map[$i]";
			}
			$tmp['name'] = ucfirst($tmp['prop']);
			array_push($headerMap, $tmp);
		}
		$inv_map = $headerMap;
		return $inv_map;
	}
	function get_delimited($str, $delimiter = false) {
		if (!$delimiter) {
			$delimiter = "'";
		} else {
			$delimiter = $delimiter;
		}
		$escapedDelimiter = preg_quote($delimiter, '/');
		if ($delimiter == '\t') {
			$array = explode('\t', $str);
			return $array;
		} else if (($delimiter == "'" || $delimiter == '"') && preg_match_all('/' . $escapedDelimiter . '(.*?)' . $escapedDelimiter . '/s', $str, $matches)) {
			return $matches[1];
		} else if ($delimiter != "'" || $delimiter != '"') {
			if (strpos($str, '"')) {
				$array = explode("$delimiter", $str);
			} else {
				$array = explode(",", $str);
			}
			return $array;
		}
		return false;
	}

}
