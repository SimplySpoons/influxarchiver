<?php

class ArchivesClass {
	var $accountId;
	var $parser;
	var $providerId;
	var $filename;
	public function __construct($accountId, $parser, $filename, $providerId) {
		$this->accountId = $accountId;
		$this->parser = $parser;
		$this->providerId = $providerId;
		$this->filename = $filename;
	}

	public function filters() {

		$url = "http://influxtools.dealer.com/archiver_test/conf.php?file=parser_$this->parser.conf";
		$username = 'ddchenryl';
		$password = 'Dumptruck69!';

		$context = stream_context_create(array(
			'http' => array(
				'header' => "Authorization: Basic " . base64_encode("$username:$password"),
				'method' => "GET",
			),
		));

		$filters = file_get_contents($url, false, $context);
		$filter = array();
		if ($filters) {
			$filters = explode('#F', $filters);
			for ($i = 0; $i < sizeof($filters); $i++) {
				if (strpos($filters[$i], $this->accountId . ' ')) {
					$tmp = explode("\nif", $filters[$i], 2);
					$array['task'] = $tmp[0];
					$array['parser'] = $this->parser;
					$array['filter'] = 'if' . $tmp[1];
					array_push($filter, $array);
				}
			}
			if (sizeof($filter) > 0) {
				$return[$this->parser] = $filter;
				return $return;
			} else {
				return false;
			}
		}
		return $parser;
	}

	function file_list() {
		$url = "http://influxtools.dealer.com/archiver_test/?provider=$this->parser&accountId=$this->accountId&providerId=$this->providerId";

		$username = 'ddchenryl';
		$password = 'Dumptruck69!';

		$context = stream_context_create(array(
			'http' => array(
				'header' => "Authorization: Basic " . base64_encode("$username:$password"),
			),
		));

		$data = file_get_contents($url, false, $context);
		$return['url'] = $url;
		$return['data'] = json_decode($data);
		return $return;
	}

	function header_map() {
		$url = "http://influxtools.dealer.com/archiver_test/conf.php?file=parser_$this->parser.conf";
		$username = 'ddchenryl';
		$password = 'Dumptruck69!';

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