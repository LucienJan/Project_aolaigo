<?php
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = 'aolaigo';

	// 创建连接
	$conn = new mysqli($servername, $username, $password, $dbname);


	// 检测连接
	if ($conn->connect_error) {
	    die("连接失败: " . $conn->connect_error);
	} 
	echo "连接成功";


	// 接收表单传递的用户名和密码
	$username = $_POST['username'];
	$pwd = $_POST['password'];
	$repwd = $_POST['repassword'];

	// 选择数据库
	mysql_select_db("aolaigo");

	// 设置客户端和连接字符集
	mysql_query("set names 'utf8'");

	//通过php进行insert操作
	$seqinsert = "insert into users"
?>