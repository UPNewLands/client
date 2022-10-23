<?php

    class Database {

        const HOST = '127.0.0.1';
        const USER = 'root';
        const PASSWORD = 'p5Q2VHTQv&b3';
        const DATABASE = 'newlands';

        function __construct() {
            $this->db = new mysqli(self::HOST, self::USER, self::PASSWORD, self::DATABASE);

            if ($this->db->connect_error) {
                $this->dieWithMessage('username', 'Failed to connect.');
            }
        }

        function userExists($username) {
            $statement = $this->db->prepare('SELECT * FROM users WHERE username = ?');
            $statement->bind_param('s', $username);
            $statement->execute();

            $result = $statement->get_result();

            if ($result->num_rows) {
                return true;
            }
        }
        
        function checkALT($asn) {
            $statement = $this->db->prepare("SELECT `asn` FROM users WHERE `asn` = ?");
            $statement->bind_param('s', $asn);
            $statement->execute();

            $result = $statement->get_result();
			if (mysqli_num_rows($result) >= 3) {
				$this->dieWithMessage('username', 'You can only create 3 accounts!');
			}
        }
	    
	function checkCode($code) {
            $statement = $this->db->prepare('SELECT reward FROM redeem WHERE code = ? LIMIT 1');
            $statement->bind_param('s', $code);
            $statement->execute();
            $result = $statement->get_result();

            if (mysqli_num_rows($result) == 0) {
                die('"code": "invalid code"');
            }
	    if (!$statement->execute()) {
                die('"code": "Servers down?"');
            }
	    foreach ($result as $row) {
		$this->dieWithMessage('item', $row['reward']);
	    }
			
        }

        function insertUser($name, $email, $password, $asn) {

            if ($this->userExists($name)) {
                $this->dieWithMessage('username', 'That username is already taken.');
            }

            $password = $this->hashPassword($password);
            $username = strtolower($name);
            $statement = $this->db->prepare('INSERT INTO users (username, email, password, asn) VALUES (?, ?, ?, ?)');
            $statement->bind_param('ssss', $username, $email, $password, $asn);

            if (!$statement->execute()) {
                $this->dieWithMessage('username', 'There was an error.');
            }

            $this->dieWithMessage('success', true);
        }

        function hashPassword($password) {
            $password = password_hash($password, PASSWORD_BCRYPT);

            return str_replace('$2y$', '$2a$', $password);
        }

        function dieWithMessage($key, $message) {
            die(json_encode(array($key => $message)));
        }

    }

?>
