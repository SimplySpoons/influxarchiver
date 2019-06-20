<?php

class Vehicle {

var $title;
var $uuid;
var $accountId;
var $vin;
var $stockNumber;
var $year;
var $make;
var $model;
var $trim;
var $modelcode;
var $bodystyle;
var $transmission;
var $doors;
var $extcolor;
var $extcolorcode;
var $intcolor;
var $intcolorcode;
var $engine;
var $engineSize;
var $mileage;
var $certified;
var $retailValue;
var $invoicePrice;
var $askingPrice;
var $wholesalePrice;
var $internetPrice;
var $msrp;
var $salePrice;
var $source;
var $type;
var $vehicleType;
var $status;
var $classification;
var $isRemoved;
var $createdBy;
var $created;
var $lastModifiedBy;
var $lastmodified;
var $removedBy;
var $removed;
var $lotdate;
var $options;
var $optionCodes;
var $comments;
var $image;
var $warranty_description;
var $useStockPhoto;
var $contactId;
var $globalId;
var $packageCode;
var $video_id;
var $fuel;
var $wheelbase;
var $city_mpg;
var $highway_mpg;
var $driveline;
var $cab;
var $bed;
var $googlebaseid;
var $autodata_id;
var $className;
var $showPanel;

	public function __construct($vehicle) {
      if(isset($vehicle) && sizeof($vehicle > 0)){
        self::setVehcile($vehicle);
      }
	}

function setVehicle($vehicle){
      $this->title = $vehicle['title'];
      $this->uuid = $vehicle['uuid'];
      $this->accountId = $vehicle['accountId'];
      $this->vin = $vehicle['vin'];
      $this->stockNumber = $vehicle['stockNumber'];
      $this->year = $vehicle['year'];
      $this->make = $vehicle['make'];
      $this->model = $vehicle['model'];
      $this->trim = $vehicle['trim'];
      $this->modelcode = $vehicle['modelcode'];
      $this->bodystyle = $vehicle['bodystyle'];
      $this->transmission = $vehicle['transmission'];
      $this->doors = $vehicle['doors'];
      $this->extcolor = $vehicle['extcolor'];
      $this->extcolorcode = $vehicle['extcolorcode'];
      $this->intcolor = $vehicle['intcolor'];
      $this->intcolorcode = $vehicle['intcolorcode'];
      $this->engine = $vehicle['engine'];
      $this->engineSize = $vehicle['engineSize'];
      $this->mileage = $vehicle['mileage'];
      $this->certified = $vehicle['certified'];
      $this->retailValue = $vehicle['retailValue'];
      $this->invoicePrice = $vehicle['invoicePrice'];
      $this->askingPrice = $vehicle['askingPrice'];
      $this->wholesalePrice = $vehicle['wholesalePrice'];
      $this->internetPrice = $vehicle['internetPrice'];
      $this->msrp = $vehicle['msrp'];
      $this->salePrice = $vehicle['salePrice'];
      $this->source = $vehicle['source'];
      $this->type = $vehicle['type'];
      $this->vehicleType = $vehicle['vehicleType'];
      $this->status = $vehicle['status'];
      $this->classification = $vehicle['classification'];
      $this->isRemoved = $vehicle['isRemoved'];
      $this->createdBy = $vehicle['createdBy'];
      $this->created = $vehicle['created'];
      $this->lastModifiedBy = $vehicle['lastModifiedBy'];
      $this->lastmodified = $vehicle['lastmodified'];
      $this->removedBy = $vehicle['removedBy'];
      $this->removed = $vehicle['removed'];
      $this->lotdate = $vehicle['lotdate'];
      $this->options = $vehicle['options'];
      $this->optionCodes = $vehicle['optionCodes'];
      $this->comments = $vehicle['comments'];
      $this->image = $vehicle['image'];
      $this->warranty_description = $vehicle['warranty_description'];
      $this->useStockPhoto = $vehicle['useStockPhoto'];
      $this->contactId = $vehicle['contactId'];
      $this->globalId = $vehicle['globalId'];
      $this->packageCode = $vehicle['packageCode'];
      $this->video_id = $vehicle['video_id'];
      $this->fuel = $vehicle['fuel'];
      $this->wheelbase = $vehicle['wheelbase'];
      $this->city_mpg = $vehicle['city_mpg'];
      $this->highway_mpg = $vehicle['highway_mpg'];
      $this->driveline = $vehicle['driveline'];
      $this->cab = $vehicle['cab'];
      $this->bed = $vehicle['bed'];
      $this->googlebaseid = $vehicle['googlebaseid'];
      $this->autodata_id = $vehicle['autodata_id'];
      $this->className = $vehicle['className'];
      $this->showPanel = $vehicle['showPanel'];
  }
}

?>
