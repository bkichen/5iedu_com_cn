jQuery(function($){
	//textarea init
	$('textarea,input[type="textfield"]').click(function(e){
		var $this=$(this);
		if(typeof($this.data('initValue'))==="undefined"){
			$this.data('initValue',$this.get(0).defaultValue);
		}
		//$this.val('');
		if($this.val()===$this.data('initValue')){
			$this.val('');
		}
		e.stopPropagation();
	});
	$(document).click(function(){
		$('textarea,input[type="textfield"]').each(function(){
			var $this=$(this);
			if($.trim($this.val())===""){
				$this.val($this.data('initValue'));
			}
		});
	});
});