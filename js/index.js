$(function(){

/*合作伙伴轮播*/
	var logos = $('.Partne-logos-box');
	var logosbtn = $('#btns2 ul li');
	var index2 = 0;
	function logo(type2){
		if(type2=='r'){
			index2++;
			if(index2>=logos.length){
				index2 = 0; 
			}
		}
		else if(type2=='l'){
			index2--;
			if(index2<=-1){
				index2=logos.length-1;
			}
		}
		logos.hide();
		logos.eq(index2).fadeIn();
		logosbtn.css({background:'#757474'})
		logosbtn.eq(index2).css({background:'#2a2a2a'})
	}
	var t2 = setInterval(function(){
		logo('r')
	},3250);
	$('#Partne-logo').hover(function(){
		clearInterval(t2);
	},function(){
		t2=setInterval(function(){
			logo('r')
		},3250)
	})
	$('#arrow-left2').click(function(){
		logo('l');
	})
	$('#arrow-right2').click(function(){
		logo('r');
	})
	logosbtn.click(function(){
		var index3=$(this).index();
		logos.hide();
		logos.eq(index3).fadeIn();
		logosbtn.css({background:"#757474"});
		logosbtn.eq(index3).css({background:"#2a2a2a"});
	 		index2=$(this).index();
	})

	console.log($().jquery);
	var $jq = jQuery.noConflict(true);
	console.log($().jquery);
	$(".example").imgbox({
		'speedIn'		: 0,
		'speedOut'		: 0,
		'alignment'		: 'center',
		'overlayShow'	: true,
		'allowMultiple'	: false
	});

})
