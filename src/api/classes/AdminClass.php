<?php
    class AdminClass{
        private $url = "supporttoolbox";
        private $username = "sdev";
        private $password = "sdev";
        private $db = "influx_admin";
        private $conn;

        public $InfluxUsername;
        public $InfluxPassword;

        public function __construct(){
            $this->GetCredentials();
        }

        //Returns the username and password from the Database that needs to be
        //updated every thirty days.
        private function GetCredentials(){
            $this->conn = new mysqli($this->url,$this->username,$this->password,$this->db);

            if ($this->conn->connect_error) {
                die("Connection failed: " . $this->conn->connect_error);
            }else{
                $sql = "SELECT * FROM admin_credentials WHERE _id=1";

                $result = $this->conn->query($sql);

                if($result->num_rows > 0){
                    while($row = $result->fetch_assoc()){
                        $this->InfluxUsername = $row['username'];
                        $this->InfluxPassword = $row['password'];
                    }
                }
            }
        }

        public function CheckCredentials(){
            $url = "http://influxtools.dealer.com/archiver_test/conf.php";
            $username = $this->InfluxUsername;
            $password = $this->InfluxPassword;

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