//功能：保存cookie
//参数：
//key：键
//value：值
//dayCount：有效期（单位是天）
//返回值：无
function saveCookie(key,value,dayCount){
	var d = new Date();
	d.setDate(d.getDate()+dayCount);
	document.cookie = encodeURIComponent(key+"="+value)+";expires="+d.toGMTString();	
}


//功能：读取cookie（根据键读取对应的值）
//参数：
//key：键
//返回值：值，""：表示没有找到对应的cookie；

//cssfile=red; aauserName=ttt; userName=jzm
function getCookie(key){	
	var str = decodeURIComponent(document.cookie);
	//1、转换成数组
	var arr = str.split("; ");
	//2、根据键找到对应的数组元素
	var index=-1;
	for(var i=0;i<arr.length;i++){
		if(arr[i].indexOf(key+"=")==0){
			index = i;
			break;
		}
	}
	//3、截取出值
	if(index==-1){
		return "";
	}else{
		return arr[index].substring(key.length+1);
	}
}

//功能：删除cookie(根据键删除cookie)
//参数：
//key：键；
function removeCookie(key){
	saveCookie(key,"",-1);
}


