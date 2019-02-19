//手机验证
//邮箱验证
$("#useremail").blur(function(){
	var str = $("#useremail").val();
	var ret = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
	if(ret.test(str)){
		$(this).next(".status").css("display","inline")	
		$(this).next(".status").next("p").css("display","")
	}else{
		$(this).next(".status").next("p").css("display","block")	
	}
});
//密码
$("#userpass").blur(function(){
	var str = $("#userpass").val();
	var ret = /^[a-zA-Z][a-zA-Z0-9_]{8,40}$/;
	if(ret.test(str)){
		$(this).next(".status").css("display","inline")	
		$(this).next(".status").next("p").css("display","")
	}else{
		$(this).next(".status").next("p").css("display","block")	
	}
 });
$("#userpassp").blur(function(){
	var str = $("#userpass").val();
	var strp = $("#userpassp").val();
	if(str==strp){
		$(this).next(".status").css("display","inline")	
		$(this).next(".status").next("p").css("display","")
	}else{
		$(this).next(".status").next("p").css("display","block")	
	}
});

$(".check").click(function(){
	if($(this).attr("checked")){
		$(".tishi").css("display","none")
	}else{
		$(".tishi").css("display","block")
	}
})

