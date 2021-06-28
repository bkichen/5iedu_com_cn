// JavaScript Document


$(document).ready(function(){
	var Abg=$("a");	 
    var  screenWidth=$(window).width();
	if(screenWidth<768){
		for(i=0;i<Abg.length;i++){
			
//上面为pc  下面为移动

			/*外语*/
		if($("a").eq(i).attr("href")=="http://p.qiao.baidu.com/im/index?siteid=9668370&ucid=570131&cp=&cr=&cw="){
			$("a").eq(i).attr("href","http://p.qiao.baidu.com/im/index?siteid=10171971&ucid=570131&cp=&cr=&cw=")
			}

			/*网教*/
		if($("a").eq(i).attr("href")=="http://p.qiao.baidu.com/im/index?siteid=2643085&ucid=570131&cp=&cr=&cw="){
			$("a").eq(i).attr("href","http://p.qiao.baidu.com/im/index?siteid=9777428&ucid=570131&cp=&cr=&cw=")
			}

			/*在职研*/
		if($("a").eq(i).attr("href")=="http://p.qiao.baidu.com/im/index?siteid=2326851&ucid=570131&cp=&cr=&cw="){
			$("a").eq(i).attr("href","http://p.qiao.baidu.com/im/index?siteid=9797072&ucid=570131&cp=&cr=&cw=")
			}

			/*留学*/
		if($("a").eq(i).attr("href")=="http://p.qiao.baidu.com/im/index?siteid=2324499&ucid=570131&cp=&cr=&cw="){
			$("a").eq(i).attr("href","http://p.qiao.baidu.com/im/index?siteid=9797075&ucid=570131&cp=&cr=&cw=")
			}

			/*高校*/
		if($("a").eq(i).attr("href")=="http://p.qiao.baidu.com/im/index?siteid=2324499&ucid=570131&cp=&cr=&cw="){
			$("a").eq(i).attr("href","http://p.qiao.baidu.com/im/index?siteid=9046239&ucid=570131&cp=&cr=&cw=")
			}

			/*中小学*/
		if($("a").eq(i).attr("href")=="http://p.qiao.baidu.com/im/index?siteid=2518748&ucid=570131&cp=&cr=&cw="){
			$("a").eq(i).attr("href","http://p.qiao.baidu.com/im/index?siteid=9797088&ucid=570131&cp=&cr=&cw=")
			}

			/*考研*/
		if($("a").eq(i).attr("href")=="http://p.qiao.baidu.com/im/index?siteid=10783559&ucid=570131&cp=&cr=&cw="){
			$("a").eq(i).attr("href","http://p.qiao.baidu.com/im/index?siteid=9797073&ucid=570131&cp=&cr=&cw=")
			}

			/*成考*/
		if($("a").eq(i).attr("href")=="http://p.qiao.baidu.com/im/index?siteid=2326857&ucid=570131&cp=&cr=&cw="){
			$("a").eq(i).attr("href","http://p.qiao.baidu.com/im/index?siteid=4823774&ucid=570131&cp=&cr=&cw=")
			}

			/*冬夏令营上pc下sj*/
		if($("a").eq(i).attr("href")=="http://p.qiao.baidu.com/im/index?siteid=2326864&ucid=570131&cp=&cr=&cw="){
			$("a").eq(i).attr("href","http://p.qiao.baidu.com/im/index?siteid=10612352&ucid=570131&cp=&cr=&cw=")
			}
			/*华侨生*/
		if($("a").eq(i).attr("href")=="http://p.qiao.baidu.com/im/index?siteid=10596719&ucid=7284961&cp=&cr=&cw="){
				$("a").eq(i).attr("href","http://p.qiao.baidu.com/im/index?siteid=10608880&ucid=7284961&cp=&cr=&cw=")
			}

			/*留学外地*/
			if($("a").eq(i).attr("href")=="http://p.qiao.baidu.com/im/index?siteid=10863310&ucid=7284961&cp=&cr=&cw="){
				$("a").eq(i).attr("href","http://p.qiao.baidu.com/im/index?siteid=10862677&ucid=7284961&cp=&cr=&cw=")
			}

			/*通用*/
		if($("a").eq(i).attr("href")=="http://p.qiao.baidu.com/im/index?siteid=2328929&ucid=570131&cp=&cr=&cw="){
			$("a").eq(i).attr("href","http://p.qiao.baidu.com/im/index?siteid=9797219&ucid=570131&cp=&cr=&cw=")
			}
			
		/*高校百度夜莺机器人*/
		if($("a").eq(i).attr("href")=="https://ikefu.baidu.com/web/hangkong"){
			$("a").eq(i).attr("href","https://ikefu.baidu.com/wise/hangkong")
			}
	}
  }		
})