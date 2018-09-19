<?php
    class AdminClass{
        private $url = "supporttoolbox";
        private $username = "sdev";
        private $password = "sdev";
        private $db = "influx_admin";
        private $conn;

        public function __construct(){

        }

        //Returns the username and password from the Database that needs to be
        //updated every thirty days.
        private function GetCredentials(){

        }

        public function CheckCredentials(){
            $url = "http://influxtools.dealer.com/archiver_test/conf.php";
            $username = 'ddcluker';
            $password = 'xoxide10';

            $ch = curl_init($url);
            curl_setopt($ch, CURLOPT_FRESH_CONNECT, true);
            curl_setopt($ch, CURLOPT_USERPWD, $username . ":" . $password);
            curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 500);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            $filters = curl_exec($ch);
            $http = curl_getinfo($ch, CURLINFO_HTTP_CODE);

            if($http == 200) {
                return true;
            }else{
                return false;
            }
        }
    }
?>