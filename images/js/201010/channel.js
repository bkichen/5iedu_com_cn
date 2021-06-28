$(function(){
	$(".menu").hide();
	$("#Nav>li>a").mouseover(function () { 
		$(this).parent().find("ul.menu").show().css({left:$(this).position().left-1,top:$(this).position().top+32});
		$(this).parent().find("a").addClass("navHover")
		$(this).css("color","#000");
		$(this).next().find("a").css("color","#435f9a");
   })
   $("#Nav>li").hover(function () {},function () {
   		$(this).find("ul.menu").hide();
		$(this).find("a").removeClass("navHover")
		$(this).parent().find("a").css("color","#fff");		
   })
   $("#Nav>li>ul>li").mouseover(function(){
   		$(this).css("background","#dae7ff")
   })
   $("#Nav>li>ul>li").mouseout(function(){
   		$(this).css("background","")
   })
   
   //绿色风格开始
   $("#Nav.navgreen>li>a").mouseover(function () { 
		$(this).next().find("a").css("color","#000");
   })
   
    $("#Nav.navgreen>li>ul>li").mouseover(function(){
   		$(this).css("background","#e6f8dc")
   })
   $("#Nav.navgreen>li>ul>li").mouseout(function(){
   		$(this).css("background","")
   })
   //绿色风格结束
   
   //桔色风格开始
   $("#Nav.navOrange>li>a").mouseover(function () { 
		$(this).next().find("a").css("color","#000");
   })
   
    $("#Nav.navOrange>li>ul>li").mouseover(function(){
   		$(this).css("background","#f9ebd4")
   })
   $("#Nav.navOrange>li>ul>li").mouseout(function(){
   		$(this).css("background","")
   })
   //桔色风格结束
   
    //红色风格开始
   $("#Nav.navRed>li>a").mouseover(function () { 
		$(this).next().find("a").css("color","#000");
   })
   
    $("#Nav.navRed>li>ul>li").mouseover(function(){
   		$(this).css("background","#fed6d2")
   })
   $("#Nav.navRed>li>ul>li").mouseout(function(){
   		$(this).css("background","")
   })
   //红色风格结束
   
    //天蓝风格开始
   $("#Nav.navAzure>li>a").mouseover(function () { 
		$(this).next().find("a").css("color","#00063b");
   })
   
    $("#Nav.navAzure>li>ul>li").mouseover(function(){
   		$(this).css("background","#b3e9ff")
   })
   $("#Nav.navAzure>li>ul>li").mouseout(function(){
   		$(this).css("background","")
   })
   //天蓝风格结束
   
   //赫色风格开始
   $("#Nav.navKhaki>li>a").mouseover(function () { 
		$(this).next().find("a").css("color","#000");
   })
   
    $("#Nav.navKhaki>li>ul>li").mouseover(function(){
   		$(this).css("background","#f2dfbc")
   })
   $("#Nav.navKhaki>li>ul>li").mouseout(function(){
   		$(this).css("background","")
   })
   //赫色风格结束
   
   
   $(".searchMenu").hide();
   $("#serarch_select").mouseover(function () { 	
   		$("#search_list").show().css({left:$(this).position().left+1,top:$(this).position().top+$(this).height()});
   })
   $("#serarch_select").mouseleave(function(){
   		$("#search_list").hide();
   })
   $("#search_list").hover(function () {$(this).show();},function () {
   		$(this).hide();
   })
   $("#search_list li a").bind("click",function(){
  		$("#show_type").text($(this).text());
  		takepointclass($(this).attr("data_type"));
  		$("#search_list").css("display","none");
   })
   $("#search_Key").val("请输入关键词");
   $("#search_Key").bind("focus",function(){
   	if($("#search_Key").val()=="请输入关键词"){
   		$("#search_Key").val("");
   	}
   })
   $("#search_Key").bind("blur",function(){
   	if($("#search_Key").val()==""){
   		$("#search_Key").val("请输入关键词");
   	}
   })
})
function iconvsearch()
{
$("#SearchForm").attr("action",'http://search.51edu.com/search.do?keyword='+encodeURIComponent($("#search_Key").val())+'&type='+$("#bigsearchtype").val()); 
return true;
}
function takepointclass(id)
{
	var searchType = new Array();
	searchType[0] = "news";
	searchType[1] = "course";
	searchType[2] = "school";
	searchType[3] = "exam";
	searchType[4] = "bbs"; 
	$("#bigsearchtype").val(searchType[id]);
}   