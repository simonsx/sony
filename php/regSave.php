<?php
	header("Content-type:text/html;charset=utf-8");
	$userphone = $_POST["userphone"];
	$useremail = $_POST["useremail"];
	$userpass = $_POST["userpass"];

	$con = mysql_connect("localhost","root","root");
	if(!$con){
		die("服务器端出错：数据库没有连接上");
	}else{
		mysql_select_db("sonyclub",$con);
	
	$sqlstr="insert into userinfo(userphone,useremail,userpass)
              values('$userphone','$useremail','$userpass')";
    $result = mysql_query($sqlstr,$con);
    mysql_close($con);
    echo $result;
	}
?>
