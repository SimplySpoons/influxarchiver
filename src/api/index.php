<?php

spl_autoload_register('apiAutoload');
function apiAutoload($classname) {
	if (preg_match('/[a-zA-Z]+Controller$/', $classname)) {
		include __DIR__ . '/controllers/' . $classname . '.php';
		return true;
	} elseif (preg_match('/[a-zA-Z]+Class$/', $classname)) {
		include __DIR__ . '/classes/' . $classname . '.php';
		return true;
	} elseif (preg_match('/[a-zA-Z]+Connect$/', $classname)) {
		include __DIR__ . '/dbconnections/' . $classname . '.php';
		return true;
  }
  elseif (preg_match('/[a-zA-Z]+Model$/', $classname)) {
		include __DIR__ . '/dbconnections/' . $classname . '.php';
		return true;
	}
}
class Request {
	public $url_elements;
	public $verb;
	public $parameters;

	public function __construct() {
		$this->verb = $_SERVER['REQUEST_METHOD'];
		if (isset($_SERVER['PATH_INFO'])) {
			$this->url_elements = explode('/', $_SERVER['PATH_INFO']);
		} else {
			$this->url_elements = array();
		}
		$this->parseIncomingParams();
		// initialise json as default format
		$this->format = 'json';
		if (isset($this->parameters['format'])) {
			$this->format = $this->parameters['format'];
		}
		return true;
	}

	public function parseIncomingParams() {
		$parameters = array();

		// first of all, pull the GET vars
		if (isset($_SERVER['QUERY_STRING'])) {
			parse_str($_SERVER['QUERY_STRING'], $parameters);
		}

		$body = file_get_contents("php://input");
		$content_type = false;
		if (isset($_SERVER['CONTENT_TYPE'])) {
			$content_type = $_SERVER['CONTENT_TYPE'];
		}
		switch ($content_type) {
		case "application/json":
			$body_params = json_decode($body);
			if ($body_params) {
				foreach ($body_params as $param_name => $param_value) {
					$parameters[$param_name] = $param_value;
				}
			}
			$this->format = "json";
			break;
		case "application/x-www-form-urlencoded":
			parse_str($body, $postvars);
			foreach ($postvars as $field => $value) {
				$parameters[$field] = $value;
			}
			$this->format = "html";
			break;
		default:
			// we could parse other supported formats here
			break;
		}
		foreach ($parameters as $key => $value) {
			$params = array();
			if ($key == 'url_elements') {
				$val = explode('/', $value);
				foreach ($val as $k => $v) {
					array_push($this->url_elements, $v);
				}
			} else {
				$params[$key] = $value;
			}
		}
		$this->parameters = $params;
	}
}
// route the request to the right place

?>
