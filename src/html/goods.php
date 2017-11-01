<<<<<<< HEAD
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
	// echo "连接成功";

	// 查询数据
	$sql = 'select * from goodlist';

	// 查询数据库获取数据
	$result = $conn->query($sql);

	// 使用查询结果集
	$row = $result->fetch_all(MYSQLI_ASSOC);


	echo json_encode($row);
=======
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
	// echo "连接成功";

	// 查询数据
	$sql = 'select * from goodlist';

	// 查询数据库获取数据
	$result = $conn->query($sql);

	// 使用查询结果集
	$row = $result->fetch_all(MYSQLI_ASSOC);


	echo json_encode($row);
>>>>>>> cc23603557d4f8e414ce3aa31a32c618863240ec
?>