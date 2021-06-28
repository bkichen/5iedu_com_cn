//jqueryTab  begin

function tab(position,sum,now){

	for(i=1;i<=sum;i++){
		$("#tab"+position+"_"+i).removeClass("hover_style");
		$("#tab"+position+"_c"+i).css("display","none");
	}
	$("#tab"+position+"_"+now).addClass("hover_style");
	$("#tab"+position+"_c"+now).css("display","block");
}
//jqueryTab  end
//focus begin
//切换焦点图方法
function tabimages(num){
	$('#ifocus_btn li').each(function(){
			$(this).removeClass('current').removeClass('normal');
			$(this).addClass('normal');
	});
	$('#ifocus_btn li:eq('+num+')').removeClass('normal').addClass('current');
	$("#ifocus_piclist").stop();

			$("#ifocus_piclist").animate({top: -(225*num)}, { duration: 100 });
			//焦点图文字当前位置
			var num=$("#ifocus_btn ul li").index($("#ifocus_btn .current")[0]);
			$('#ifocus_tx li').each(function(j){
				$(this).removeClass('current').removeClass('normal');
				$(this).addClass('normal');
			});
			$('#ifocus_tx li:eq('+num+')').removeClass('normal').addClass('current');

}
$(document).ready(function(){
	//初始化
	var initnum=-1;
	//获取总图数量
	var initsum=$('#ifocus_btn li').length-1;
	//定时切换方法
	function beginshow(){
		tabtimer=setInterval(function(){
			if(initnum==initsum){
				initnum=0;
			}else{
				initnum++;
			}
        tabimages(initnum);
		}, 3000);
	}
	//初始化执行定时切换
   beginshow();
   //循环添加鼠标移入与移出时操作
   $('#ifocus_btn li').each(function(i){
		$(this).mouseover(function(){
			var num=$("#ifocus_btn ul li").index(this);
			tabimages(num);
			initnum=num;
			clearInterval(tabtimer);
			});
	}).mouseout(function(){beginshow();});
})
//focus end
function redirect(url)
{
	if(url.lastIndexOf('/.') > 0) url = url.replace(/\/(\.[a-zA-Z]+)([0-9]+)$/g, "/$2$1");
	if(url.indexOf('://') == -1 && url.substr(0, 1) != '/' && url.substr(0, 1) != '?') url = $('base').attr('href')+url;
	location.href = url;
}

function getSearchName(refer){
        sreturn={};
        var sosuo=refer.split(".")[1];
        var grep=null;
        var str=null;
        var keyword=null;
        switch(sosuo){
            case "baidu":
                grep=/wd\=.*\&/i;
                str=refer.match(grep)
                keyword=str.toString().split("=")[1].split("&")[0];
                //console.log(decodeURIComponent(keyword));
                break;
            case "google":
                grep=/&q\=.*\&/i;
                str=refer.match(grep)
                keyword=str.toString().split("&")[1].split("=")[1];
                //console.log(decodeURIComponent(keyword));
                break;
        }

        sreturn.name=sosuo;
        sreturn.kw=keyword;
        return sreturn;

    }
