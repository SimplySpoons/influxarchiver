<?php

class NexusClass {
	private $nexusConnect;
	private $influxConnect;
	var $accountId;

	public function __construct($accountId = null) {
		$influxConnection = new InfluxConnect();
		$nexusConnection = new NexusConnect();
		$this->influxConnect = $influxConnection->connect();
		$this->nexusConnect = $nexusConnection->connect();
		$this->accountId = $accountId;
	}
	public function account_info() {
		$get_address = mysqli_query($this->nexusConnect, "SELECT contact.ownerid,contact.company,contact.url,address.address1, address.address2, address.city, address.state, address.postalcode, address.country FROM address, contact WHERE address.isprimary = '1' AND address.parentid = contact.id AND contact.ownerid = '$this->accountId' GROUP BY ownerid;");
		if (mysqli_num_rows($get_address)) {
			$address = mysqli_fetch_array($get_address, MYSQLI_ASSOC);
			$internalUrl = 'http://' . $address['ownerid'] . '.cms.dealer.com';
			$publicUrl = 'http://' . $address['url'];
			$account = [
				'accountId' => $address['ownerid'],
				'name' => $address['company'],
				'publicUrl' => $publicUrl,
				'internalUrl' => $internalUrl,
				'address1' => $address['address1'],
				'address2' => $address['address2'],
				'city' => $address['city'],
				'state' => $address['state'],
				'zip' => $address['postalcode'],
				'country' => $address['country'],
        'num_configs' => $this->num_configs(),
        'num_vehicles'=> $this->inv_total(),
			];
		} else {
			$account = [
				'accountId' => 'no results found',
				'name' => 'Please try searching again',
				'address1' => 'Henrys House',
			];
		}
		return $account;
	}

	function classMapper($num) {
		if ($num === 1) {
			return 'Certified';
		}
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

	public function findAccount($name) {
		$namelower = strtolower($name);
		$array = array();
		$accountIds = array();
		$j = 0;
		$query = "SELECT company_name,account.id,count(*) as vehicle_count from account_metadata,vehicle,account WHERE (account_id LIKE '$namelower%' OR company_name LIKE '$namelower%') AND vehicle.parentid = account_id AND account.id = account_id AND vehicle.isremoved = 0 GROUP BY account_id LIMIT 5";
		if ($results = mysqli_query($this->nexusConnect, $query)) {
			while ($result = mysqli_fetch_array($results, MYSQLI_ASSOC)) {
				$accountId = $result['id'];
				$inv_counts = array();
				$vehicle_count = $result['vehicle_count'];
				$account = [
					'accountId' => $result['id'],
					'name' => $result['company_name'],
					'num_vehicles' => $vehicle_count,
					'num_configs' => $this->num_configs($accountId),
					'inventory_counts' => $inv_counts,
				];
				array_push($array, $account);
			}
		} else {
			echo mysqli_error($this->nexusConnect);
		}
		return $array;
	}

	function inv_total($account = null) {
		if ($account === null && isset($this->accountId)) {
			$account = $this->accountId;
		}
		$total = 0;
		if ($account !== null && $counts = mysqli_query($this->nexusConnect, "SELECT count(*) AS stagingcount from vehicle where parentid = '$account' AND isremoved = 0")) {
			$count = mysqli_fetch_array($counts, MYSQLI_ASSOC);
			$total += $count['stagingcount'];
		}
		return $total;
	}

	function inventory_counts($account = null) {
		if ($account === null && isset($this->accountId)) {
			$account = $this->accountId;
		}
		if ($account !== null && $counts = mysqli_query($this->nexusConnect, "SELECT count(*) AS stagingcount, classification, type, certified  from vehicle where parentid = '$account' and status > 0 and isremoved = 0 GROUP BY type, certified, classification")) {
			$arr = array();
			if (mysqli_num_rows($counts)) {
				$j = 0;
				$certifiedTotal = 0;
				while ($count = mysqli_fetch_array($counts, MYSQLI_ASSOC)) {
					if ((int) $count['certified'] === 1) {
						$classification = 1;
						$certifiedTotal = (int) $count['stagingcount'];
					} else {
						$classification = (int) $count['classification'];
					}
					$key = $count['type'] - 1;
					$arr[$key][$classification] = $count['stagingcount'];
				}
				for ($i = 0; $i < sizeof($arr); $i++) {
					$t = $arr[$i];
					$c = 0;
					foreach ($t as $key => $value) {
						if ($key !== '1') {
							$c += $value;
						}
					}
					$t['total'] = $c;
					$arr[$i] = $t;
				}
				return $arr;
			}
			return $arr;
		}
		return mysqli_error($nexusConnect);
	}

	public function num_configs($account = null) {
		if ($account === null && isset($this->accountId)) {
			$account = $this->accountId;
		}
		$numConfigs = 0;
		if ($account !== null && $acctConfigs = mysqli_query($this->influxConnect, "SELECT count(*) as numConfigs from importfeedconf where parentid = '$account' and status = 1")) {
			while ($acctConfig = mysqli_fetch_array($acctConfigs, MYSQLI_ASSOC)) {
				$numConfigs += (int) $acctConfig['numConfigs'];
			}
		}
		return $numConfigs;
	}

	public function api_configs() {
		$get_apis = mysqli_query($this->nexusConnect, "SELECT access type FROM aclentry WHERE accountid = '$this->accountId' and resource='VAuto' and not aclentry.isremoved and access=1");
		if (mysqli_num_rows($get_apis)) {
			$api = mysqli_fetch_array($get_apis, MYSQLI_ASSOC);
			$array = [
				'type' => $api['type'],
			];
			return $array;
		} else {
			$array = [
				'type' => 0,
			];
			return $array;
		}
	}

}

?>
