<?php

class InfluxClass {
	private $influxConnect;
	private $nexusConnect;

	var $accountId;

	public function __construct($accountId) {
		$influxConnection = new InfluxConnect();
		$nexusConnection = new NexusConnect();
		$this->influxConnect = $influxConnection->connect();
		$this->nexusConnect = $nexusConnection->connect();
		$this->accountId = $accountId;
	}
	public function influx_configs() {
		$j = 0;
		$influxConfigs = array();
		$acctConfigs = mysqli_query($this->influxConnect, "SELECT * from importfeedconf where parentid = '$this->accountId' and isremoved = 0");
		while ($acctConfig = mysqli_fetch_array($acctConfigs, MYSQLI_ASSOC)) {
			$p = $acctConfig;
			$influxConfigs[$j]['name'] = $p['provider'];
			$influxConfigs[$j]['data'] = $p;
			$j++;
		}
    $arr = array();
    $holder = "";
		foreach ($influxConfigs as $key => $value) {
			$tmp = $value['data'];
			$new = $this->getConfig($tmp);
      $new['comments'] = $tmp['comments'];
      if( $tmp['provider'] !== $holder && !isset($archived[$tmp['provider']]) ){
        $archived[$tmp['provider']] = new ArchivesClass($this->accountId, $tmp['provider'], $tmp['filename'], $tmp['providerid']);
        $a[$tmp['provider']]['filters'] = $archived[$tmp['provider']]->filters();
        $a[$tmp['provider']]['files'] = $archived[$tmp['provider']]->file_list();
        $holder = $tmp['provider'];
      }
      $new['filters'] = array();
      if(isset( array_values($a[$tmp['provider']]['filters'])[0])) {
        $new['filters'] = array_values($a[$tmp['provider']]['filters'])[0];
      }
      $new['files'] = (array) $a[$tmp['provider']]['files'];
      if(isset($new['files']['data'][0])){
         $new['lastRun'] = $new['files']['data'][0];
      } else {
        $new['lastRun'] = false;
      }
			array_push($arr, $new);
		}
		return $arr;
	}

	public function getConfig($config) {
		$attsArray = [
			'Year' => '',
			'Make' => '',
			'Model' => '',
			'Mileage' => '',
			'BodyStyle' => '',
			'AskingPrice' => '',
			'Options' => '',
			'Trim' => '',
			'Doors' => '',
			'Engine' => '',
			'EngineSize' => '',
			'Transmission' => '',
			'Comments' => '',
			'WholesalePrice' => '',
			'InvoicePrice' => '',
			'SalePrice' => '',
			'RetailValue' => '',
			'ExteriorColor' => '',
			'InteriorColor' => '',
			'Certified' => '',
			'Image' => '',
			'ModelCode' => '',
			'StockNumber' => '',
			'MSRP' => '',
			'LotDate' => '',
			'OptionCodes' => '',
			'ExtColorCode' => '',
			'IntColorCode' => '',
			'PackageCode' => '',
			'Wheelbase' => '',
			'Fuel' => '',
			'DriveLine' => '',
			'WarrantyDescription' => '',
			'HighwayMPG' => '',
			'CityMPG' => '',
			'Cab' => '',
			'Bed' => '',
		];
		$inv_types = $this->getInventoryTypes($config['exclusivetypes']);
		$feedWins = $config['mergeattributemap'];
		$scrubAtts = $config['scrubattributemap'];
		$provider = $config['provider'];
		if (strlen($config['providerid']) > 0) {
			$provider_id = $config['providerid'];
		} else {
			$provider_id = false;
		}
		if (strlen($config['filename']) > 0) {
			$filename = $config['filename'];
		} else {
			$filename = false;
		}
		// $getLatestRun = getRecentFiles($accountId, $provider, true);
		$feedMap = $this->getFeedWins($feedWins);
		$scrubMap = $this->getFeedWins($scrubAtts, $attsArray);
		$config_array = [
			'provider' => $provider,
			'providerid' => $provider_id,
			'accountId' => $this->accountId,
			'filename' => str_replace('/', '-', $filename),
			'feedWins' => $feedMap,
			'scrubAtts' => $scrubMap,
			'inventory_types' => $inv_types,
			'scrubString' => $scrubAtts,
			'inserts' => $config['noadds'] == 0,
			'deletes' => $config['nodeletes'] == 0,
		];
		return $config_array;
	}

	function classMap($num) {
		if ($num === 4) {
			return 'Primary';
		} elseif ($num === 5) {
			return 'Fleet';
		} elseif ($num === 6) {
			return 'Exotic';
		} elseif ($num === 7) {
			return 'Wholesale';
		} elseif ($num === 8) {
			return 'Classified';
		}
	}

	function getInventoryName($type) {
		$type = trim($type, " ");

		if ($type === '4-1') {
			$typeName = "Primary Used";
		} elseif ($type === '5-1') {
			$typeName = "Fleet Used";
		} elseif ($type === '6-1') {
			$typeName = "Exotic Used";
		} elseif ($type === '7-1') {
			$typeName = "Wholesale Used";
		} elseif ($type === '8-1') {
			$typeName = "Classified Used";
		} elseif (strpos($type, '4-2') || $type == '4-2') {
			$typeName = "Primary New";
		} elseif ($type === '5-2') {
			$typeName = "Fleet New";
		} elseif ($type === '6-2') {
			$typeName = "Exotic New";
		} elseif ($type === '7-2') {
			$typeName = "Wholesale New";
		} elseif ($type === '8-2') {
			$typeName = "Classified New";
		} else {
			$typeName = "Type Not Found";
		}
		$typeArray = explode('-', $type);
		if (isset($typeArray[1])) {
			$classification = $typeArray[0];
			$type = $typeArray[1];
		} else {
			$count['count'] = 0;
			$classification = 0;
			$type = 0;
		}
		$typeMap = [
			'name' => $typeName,
			'classification' => (int) $classification,
			'type' => (int) $type,
			'count' => 0,
		];
		return $typeMap;
	}

	function getInventoryCounts($type, $classification) {
		$counts = mysqli_query($this->nexusConnect, "SELECT count(*) AS stagingcount from vehicle where parentid = '$this->accountId' and type = $type and classification = $classification and status > 0 and isremoved = 0");
		if (mysqli_num_rows($counts)) {
			$count = mysqli_fetch_array($counts, MYSQLI_ASSOC);
			$invCount = $count['stagingcount'];
			$returnCounts = [
				'type' => $type,
				'classification' => $classification,
				'count' => $invCount,
				'accountId' => $this->accountId,
			];
			return $returnCounts;
		}
		return false;
	}

	function getInventoryTypes($types) {
		$typesArray = explode(",", $types);
		$size = sizeof($typesArray);
		$return = array();
		for ($i = 0; $i < $size; $i++) {
			$returnName = $this->getInventoryName($typesArray[$i]);
			$return[$i] = $returnName;
		}
		// $return['size'] = sizeOf($typesArray);
		return $return;
	}

	function getFeedWins($wins, $array = null) {
		if ($array == null) {
			$feedWinsArray = [
				'Year' => '',
				'Make' => '',
				'Model' => '',
				'Mileage' => '',
				'BodyStyle' => '',
				'AskingPrice' => '',
				'Options' => '',
				'Trim' => '',
				'Doors' => '',
				'Engine' => '',
				'EngineSize' => '',
				'Transmission' => '',
				'Comments' => '',
				'WholesalePrice' => '',
				'InvoicePrice' => '',
				'SalePrice' => '',
				'RetailValue' => '',
				'ExteriorColor' => '',
				'InteriorColor' => '',
				'Certified' => '',
				'Image' => '',
				'ModelCode' => '',
				'StockNumber' => '',
				'MSRP' => '',
				'LotDate' => '',
				'OptionCodes' => '',
				'ExtColorCode' => '',
				'IntColorCode' => '',
				'PackageCode' => '',
				'Wheelbase' => '',
				'Fuel' => '',
				'DriveLine' => '',
				'WarrantyDescription' => '',
				'HighwayMPG' => '',
				'CityMPG' => '',
				'Cab' => '',
				'Bed' => '',
			];
		} else {
			$feedWinsArray = $array;
		}
		$feedMap = array();
		$strlen = strlen($wins);
		$char_array = array();
		for ($i = 0; $i <= $strlen; $i++) {
			$char = substr($wins, $i, 1);
			$char_array[$i] = $char;
		}
		$j = 0;
		foreach ($feedWinsArray as $key => $value) {
			if (isset($char_array[$j])) {
				$feedWinsArray[$key] = $char_array[$j];
				$j = $j + 1;
			}
		}
		$important = $this->getImportFields($feedWinsArray);
		return $important;
	}
	function getImportFields($obj) {
		$wins = array();
		$i = 0;
		foreach ($obj as $key => $value) {
			if ($value == 'F' || $value == 'Y') {
				$wins[$i]['key'] = $key;
				$wins[$i]['value'] = true;
			} else {
				$wins[$i]['key'] = $key;
				$wins[$i]['value'] = false;
			}
			$i++;
		}
		return $wins;
	}

}

?>
