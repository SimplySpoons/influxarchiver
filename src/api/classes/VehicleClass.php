<?php

class VehicleClass {
	private $nexusConnect;
	private $influxConnect;
	var $accountId;
  var $classification = 0;
  var $uuid;
  var $type = 0;
  var $limit = 50;
  var $offset = 0;
  var $vehicles = array();
  var $term;
	public function __construct($accountId = null, $params, $term = null) {
		$influxConnection = new InfluxConnect();
		$nexusConnection = new NexusConnect();
		$this->influxConnect = $influxConnection->connect();
		$this->nexusConnect = $nexusConnection->connect();
    $this->accountId = $accountId;
    if($params){
      if($params['type'] >= 0){
        $this->type = (int) $params['type'];
      }
      if($params['classification'] >= 4){
        $this->classification = (int) $params['classification'];
      }
      if(isset($params['offset'])){
        $this->offset = $params['offset'];
      }
      if(isset($params['limit'])){
        $this->limit = $params['offset'];
      }
   }
	}

  function classMap($num){
            if($num === 1) {
                return 'Certified';
            }
            elseif($num === 4) {
                return 'Primary';
            }
            elseif($num === 5){
                return 'Fleet';
            }

            elseif($num === 6){
                return 'Exotic';
            }

            elseif($num === 7){
                return 'Wholesale';
            }

            elseif($num === 8){
                return 'Classified';
            }
    }

function setData($vehicle) {

}

function getAccountVehicles($uuid = null, $vin = null ){
        global $nexusConnect;
        $offset = 0;
        $typeQuery = "";
        $classQuery = "";
        if($this->type > 0){
          $typeQuery .= " AND type = $this->type";
        }
        if($this->classification > 0){
          $classQuery .= " AND classification = $this->classification";
        }
        if($this->limit === 0) {
          $limit = 50;
        }
        if($this->offset > 0){
          $offset = $this->offset;
        }
        $get_vehicle = mysqli_query( $this->nexusConnect, "SELECT id,parentid,vin,stocknumber,year,make,model,trimlevel,modelcode,bodystyle,transmission,doors,extcolor,extcolorcode,intcolor,intcolorcode,engine,enginesize,mileage,certified,retailvalue,invoiceprice,askingprice,wholesaleprice,internetprice,msrp,saleprice,source,type,status,classification,isremoved,createdby,created,lastmodifiedby,lastmodified,removedby,removed,lotdate,options,optioncodes,comments,image,warranty_description,usestockphoto,isartenabled,carfaxexpiration,contactid,jatoid,edmundsid,globalid,packagecode,video_id,fuel,wheelbase,city_mpg,highway_mpg,driveline,cab,bed,googlebaseid,jato_canada_id,autodata_id,autodata_canada_id FROM vehicle WHERE parentid = '$this->accountId'$typeQuery$classQuery ORDER BY isremoved,parentid,vin" );
        if( mysqli_num_rows( $get_vehicle ) ) {
            while($vehicle = mysqli_fetch_array( $get_vehicle, MYSQLI_ASSOC )){
            $vehicle['className'] = $this->classMap($vehicle['classification'] + 0);
            foreach($vehicle as $key => $value) {
                if($key !='image') {
                    $vehicle[$key] = preg_replace("/(?![-,.;])\p{P}/u", "", $value);
                }
            }
            $vehicle['title'] = $vehicle['year'] . ' ' . $vehicle['make'] . ' ' . $vehicle['model'] . ' ' . $vehicle['trimlevel'] . ' | ' . $vehicle['vin'] . ' | ' . $vehicle['stocknumber'];

            $vehicle['img_array'] = explode(";",$vehicle['image']);
            if($vehicle['type'] == 2) {
                $vehicle['vehichle_type'] = 'new';
            }
            elseif($vehicle['certified'] == 1) {
                $vehicle['vehichle_type'] = 'certified';
            }
            else {
                $vehicle['vehichle_type'] = 'used';
            }

            array_push($this->vehicles, $this->getVehicleModel($vehicle));
          }
        }
        else {
            $array = [
                'title' => 'Sorry! We could not find what you are looking for',
                'showPanel'=> false
            ];
             array_push($this->vehicles, $vehicle);
        }
        return $this->vehicles;
    }

    function getVehicleModel($vehicle){
        $vehicle_data = [
                'title' => $vehicle['title'],
                'uuid' => $vehicle['id'],
                'accountId' => $vehicle['parentid'],
                'vin' => $vehicle['vin'],
                'stockNumber' => $vehicle['stocknumber'],
                'year' => $vehicle['year'],
                'make' => $vehicle['make'],
                'model' => $vehicle['model'],
                'trim' => $vehicle['trimlevel'],
                'modelcode' => $vehicle['modelcode'],
                'bodystyle' => $vehicle['bodystyle'],
                'transmission' => $vehicle['transmission'],
                'doors' => $vehicle['doors'],
                'extcolor' => $vehicle['extcolor'],
                'extcolorcode' => $vehicle['extcolorcode'],
                'intcolor' => $vehicle['intcolor'],
                'intcolorcode' => $vehicle['intcolorcode'],
                'engine' => $vehicle['engine'],
                'engineSize' => $vehicle['enginesize'],
                'mileage' => $vehicle['mileage'],
                'certified' => $vehicle['certified'],
                'retailValue' => $vehicle['retailvalue'],
                'invoicePrice' => $vehicle['invoiceprice'],
                'askingPrice' => $vehicle['askingprice'],
                'wholesalePrice' => $vehicle['wholesaleprice'],
                'internetPrice' => $vehicle['internetprice'],
                'msrp' => $vehicle['msrp'],
                'salePrice' => $vehicle['saleprice'],
                'source' => $vehicle['source'],
                'type' => $vehicle['vehichle_type'],
                'vehicleType'=> $vehicle['type'] + 0,
                'status' => $vehicle['status'],
                'classification' => $vehicle['classification'],
                'isRemoved' => $vehicle['isremoved'],
                'createdBy' => $vehicle['createdby'],
                'created' => $vehicle['created'],
                'lastModifiedBy' => $vehicle['lastmodifiedby'],
                'lastmodified' => $vehicle['lastmodified'],
                'removedBy' => $vehicle['removedby'],
                'removed' => $vehicle['removed'],
                'lotdate' => $vehicle['lotdate'],
                'options' => $vehicle['options'],
                'optionCodes' => $vehicle['optioncodes'],
                'comments' => $vehicle['comments'],
                'image' => $vehicle['img_array'],
                'warranty_description' => $vehicle['warranty_description'],
                'useStockPhoto' => $vehicle['usestockphoto'],
                'contactId' => $vehicle['contactid'],
                'globalId' => $vehicle['globalid'],
                'packageCode' => $vehicle['packagecode'],
                'video_id' => $vehicle['video_id'],
                'fuel' => $vehicle['fuel'],
                'wheelbase' => $vehicle['wheelbase'],
                'city_mpg' => $vehicle['city_mpg'],
                'highway_mpg' => $vehicle['highway_mpg'],
                'driveline' => $vehicle['driveline'],
                'cab' => $vehicle['cab'],
                'bed' => $vehicle['bed'],
                'googlebaseid' => $vehicle['googlebaseid'],
                'autodata_id' => $vehicle['autodata_id'],
                'className' => $vehicle['className'],
                'showPanel'=> true
            ];
            return $vehicle_data;
    }

}

?>
