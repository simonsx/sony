//注册
$(function(){
	$(".zhuce_btn").click(function(){
		var userphone = $("#userphone").val();
		var useremail = $("#useremail").val();
		var userpass = $("#userpass").val();
		if(userphone!=""&&userpass!=""){
			$.ajax({
				type:"POST",
				url:"../php/regSave.php",
				dataType:"JSON",
				data:{
					"userphone":$("#userphone").val(),
					"useremail":$("#useremail").val(),
					"userpass":userpass
				},
				success:function(data){
					switch(data){
						case 1://用户已存在
							alert("该用户已存在！请换一个用户名注册。")
							break;
						case 2://注册成功
							alert("注册成功！");
							$.cookie("user",userphone);
							$.cookie("limit",0);
							window.location.href="index.php";
							break;
						// case 0://验证码错误
						// 	alert("验证码不正确！");
						// 	break;
					}
				}
			})
		}else{
			alert("请检查你的输入！")
		}
	})
})