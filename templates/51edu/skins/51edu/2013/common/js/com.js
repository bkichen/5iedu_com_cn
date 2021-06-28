$("#xiala").click(function(){
		$(".show").toggle();
})

$("#junior").click(function(){
		$(".juniors").toggle();
})

$("#high").click(function(){
		$(".highs").toggle();
})

$("#zuowen").click(function(){
		$(".zuowens").toggle();
})

$("#it").click(function(){
		$(".its").toggle();
})

$("#caiyi").click(function(){
		$(".caiyis").toggle();
})

$("#shangxue").click(function(){
		$(".shangxues").toggle();
})

$("#border").click(function(){
		$(".borders").toggle();
})

$("#jiaoshi").click(function(){
		$(".jiaoshis").toggle();
})

$("#jiazhang").click(function(){
		$(".jiazhangs").toggle();
})

$("#headerCenterUlId").find("a").click(function() {

			removeClassAll();

			$(this).addClass("current");

		})

		$("#headerCenterUlId").find("a").mouseover(function() {
			removeClassAll();
			$(this).addClass("current");

		})

		function removeClassAll() {

			$("#headerCenterUlId").find("a").each(function() {

				$(this).removeClass("current");

			})

		}
		
		function removeAllOl(){
		
				$(".jump").find("li").each(function() {

				$(this).removeClass("current");

			})
		
		
		}
