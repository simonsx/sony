<?php
	header("content-type","text/html;charset=utf-8");
	
	//1接收数据
	$userphone= $_POST["userphone"];
	$userpass = $_POST["userpass"];
	$con = mysql_connect("localhost","root","root");
	mysql_select_db("sonyclub",$con);
	$sqlStr="select * from userinfo where userphone='".$userphone."' and userPass='".$userpass."'";
	$result=mysql_query($sqlStr,$con);
	   
	//3)、关闭连接
	   mysql_close($con);
	//3、响应结果
	//获得$result的行数
	echo mysql_num_rows($result);
?>