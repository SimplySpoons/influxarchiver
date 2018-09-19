<?php

class ArchivesController {
	var $testing;
	public function __construct() {

	}
	public function getAction($request) {
		var_dump($request);
		if (isset($request->url_elements[1])) {
			$account_id = $request->url_elements[1];
			if (isset($request->url_elements[2])) {
				$provider = $request->url_elements[2];
			}
			if (isset($request->url_elements[3])) {
				$filename = $request->url_elements[3];
			}
			if (isset($request->url_elements[4])) {
				$providerId = $request->url_elements[4];
			}
			if (isset($request->url_elements[5]) && $request->url_elements[5] != 'get_config_data' && $request->url_elements[5] != 'false') {
				$function = $request->url_elements[5];
				$acct = new ArchivesClass($account_id, $provider, $filename, $providerId);
				$data = $acct->$function();
			} else {
				// $data["message"] = "here is the info for user " . $account_id;
				$acct = new ArchivesClass($account_id, $provider, $filename, $providerId);
				$files = $acct->file_list();
				$data['url'] = $files['url'];
				$data['files'] = $files['data'];
				$meta = $acct->filters();
				$data['filters'] = $meta;
			}
		} else {
			$data["message"] = "you want a list of users";
		}
		return $data;
	}
	public function getUpdatedFeed($params) {
		$accountId = $params->accountId;
		$fileSize = $params->fileSize;
		$filename = $params->filename;
		$offset = $params->offset;
    $provider = $params->provider;
   // === false ? true : false;
   if(isset($params->providerId)){
    $providerId = $params->providerId;
   } else {
     $providerId = false;
   }
		$full = $params->full;
		$start = $params->start;
		$end = $params->end;

		$url = "http://influxtools.dealer.com/archiver_test/test.php?provider=$provider&filename=$filename&providerId=$providerId&accountId=$accountId&offset=$offset&full=$full&start=$start&end=$end";
		$username = 'ddcluker';
		$password = 'xoxide10';

		$context = stream_context_create(array(
			'http' => array(
				'header' => "Authorization: Basic " . base64_encode("$username:$password"),
				'method' => "GET"
			),
		));

		$data = file_get_contents($url, false, $context);
		$data = json_encode(json_decode($data));
		$data = json_decode($data);
		$data->url = $url;
		return $data;
	}

	public function postAction($request) {
		$params = $request->parameters['fileRequest'];
		$data = $this->getUpdatedFeed($params);
		return $data;
	}
}

?>
