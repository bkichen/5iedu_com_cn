
function addCookie(objName,objValue,objHours){//添加cookie
var str = objName + "=" + escape(objValue);
if(objHours > 0){//为0时不设定过期时间，浏览器关闭时cookie自动消失
var date = new Date();
var ms = objHours*3600*1000;
date.setTime(date.getTime() + ms);
str += "; expires=" + date.toGMTString() + ";path=/;domain=.yuloo.com;";
}
document.cookie = str;
//alert("添加cookie成功");
}

function getCookie(objName){//获取指定名称的cookie的值
var arrStr = document.cookie.split("; ");
	for(var i = 0;i < arrStr.length;i ++){
		var temp = arrStr[i].split("=");
		if(temp[0] == objName) return unescape(temp[1]);
	} 
}


function delCookie(name){//为了删除指定名称的cookie，可以将其过期时间设定为一个过去的时间
	var date = new Date();
	date.setTime(date.getTime() - 10000);
	document.cookie = name + "=a; expires=" + date.toGMTString();
}

function allCookie(){//读取所有保存的cookie字符串
	var str = document.cookie;
	if(str == ""){
	str = "没有保存任何cookie";
	}
	alert(str);
}


function getUrlParam(name){   
	  var   reg   =   new   RegExp("(^|&)"+   name   +"=([^&]*)(&|$)");   
	  var   r   =   window.location.search.substr(1).match(reg);   
	  if   (r!=null)   return   unescape(r[2]);   return   null;
}

/*
  2014/2/18  yxl  增加判断 访客终端 的功能
*/
var flag = '';
if((navigator.userAgent.match(/(iPhone|iPod|Android|ios|iOS|iPad|Backerry|WebOS|Symbian|Windows Phone|Phone)/i))) {
	flag = 'mobile';
}else{
	flag = 'pc';
}


//var old = getCookie('seofrom');

//if(old === undefined){
	var str = document.referrer;
	//alert(getCookie('seofrom'));
	//var str = 'w123.sogou.com';
	var baidu = new RegExp('baidu.com'); //主意是非全局匹配
	var bing = new RegExp('bing.com'); //主意是非全局匹配
	var sogou = new RegExp('sogou.com'); //主意是非全局匹配
	var sll = new RegExp('so.com'); //主意是非全局匹配
	var haosou = new RegExp('haosou.com'); //主意是非全局匹配
	var sm = new RegExp('sm.cn'); //主意是非全局匹配

	var from = '';

	if(baidu.test(str)){
		if(flag == 'mobile'){
			from = 'baidu mobile';
		}else{
			from = 'baidu pc';
		}
	}
	if(bing.test(str)){
		if(flag == 'mobile'){
			from = 'bing mobile';
		}else{
			from = 'bing pc';
		}
	}
	if(sogou.test(str)){
		if(flag == 'mobile'){
			from = 'sogou mobile';
		}else{
			from = 'sogou pc';
		}
	}
	if(sll.test(str)){
		if(flag == 'mobile'){
			from = '360 mobile';
		}else{
			from = '360 pc';
		}
	}
	if(haosou.test(str)){
		if(flag == 'mobile'){
			from = 'haosou mobile';
		}else{
			from = 'haosou pc';
		}
	}
	if(sm.test(str)){
		if(flag == 'mobile'){
			from = 'sm mobile';
		}else{
			from = 'sm pc';
		}
	}
	if(from != ''){
		addCookie('seofrom',from,1);
	}

//}

//解决获取推广链接参数的测试方案  2016.06.23 by sfl
function GetQueryString(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}

var utm_source = GetQueryString('utm_source');
var utm_term = GetQueryString('utm_term');
var utm_campaign = GetQueryString('utm_campaign');
var myurl = window.location.href;
addCookie('myurl',myurl,1);//定制给sili,记录提交报名邮件的url参数
if(utm_source !=null && utm_source.toString().length>1)
{
   addCookie('utm_source',utm_source,1);
}
if(utm_term !=null && utm_term.toString().length>1)
{
   addCookie('utm_term',utm_term,1);
}
if(utm_campaign !=null && utm_campaign.toString().length>1)
{
   addCookie('utm_campaign',utm_campaign,1);
}



//加入竞价判断


var strseo = window.location.search;

if(strseo != null && strseo != "" && strseo !== undefined){
	seo = getUrlParam('seo');
	if(seo == 'yes'){
		addCookie('seo',seo,1);
	}
	if(seo == 't'){
		addCookie('seo',seo,1);
	}
	if(seo == 'wx'){
		addCookie('seo',seo,1);
	}
}