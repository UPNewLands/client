<?php
include 'Database.php';
include 'Validator.php';

$v = new Validator();

$code = $_POST['code'];
$db = new Database();
$db->checkCode($code);
?>
