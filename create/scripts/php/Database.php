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
        
        function checkALT($as) {
            $statement = $this->db->prepare("SELECT `as` FROM users WHERE `as` = ?");
            $statement->bind_param('s', $as);
            $statement->execute();

            $result = $statement->get_result();
			if (mysqli_num_rows($result) >= 3) {
				$this->dieWithMessage('username', 'You can only create 3 accounts!');
			}
        }
	    
	function checkCode($code) {
            $statement = $this->db->prepare('SELECT * FROM `redeem` WHERE `code` = ? LIMIT 1');
            $statement->bind_param('s', $code);
            $statement->execute();
            $result = $statement->get_result();

            if (mysqli_num_rows($result) == 0) {
                $this->dieWithMessage('code', 'Invalid code');
            }
			if (!$statement->execute()) {
                $this->dieWithMessage('code', 'Code not found!');
            }
			foreach ($result as $row) {
				$this->dieWithMessage('code', $row['code']);
			}
			
        }

        function insertUser($username, $email, $password, $as) {
            if ($this->userExists($username)) {
                $this->dieWithMessage('username', 'That username is already taken.');
            }

            $password = $this->hashPassword($password);

            $statement = $this->db->prepare('INSERT INTO users (username, email, password, as) VALUES (?, ?, ?, ?)');
            $statement->bind_param('ssss', $username, $email, $password, $as);

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
