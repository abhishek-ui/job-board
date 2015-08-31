$(document).ready(function(){
	//JS for cutom Scroll Bar
	$(".aside-menu").mCustomScrollbar();
	
	//Js for anchor prevent click
	$("a").click(function(e){
		e.preventDefault();
	});
	
	//JS For aside Menu
	$(".menu-icon").click(function(){
		//$("body").toggleClass("menu-expand");
		
	});
	
	//JS for active class
	$("li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");	
	});
	
	//JS for Seacrh toggle in mobile
	$(".mob-search").click(function(){
		$(".search-bar").slideToggle('slow');	
	});
	
	//Js for responsive menu in mobile
	function mobileMenu(){
	if( $(window).width() < 768 ){
		$("body").removeClass("menu-expand");
		$(".menu-icon").unbind('click').click(function(){
			$(".menu-dir").toggleClass("fa-angle-right");
			$(this).toggleClass("menu-active");
			$("body").removeClass("menu-expand");
			$("body").toggleClass("mob-menu-expand");
			
		});
	}else{
		$(".menu-icon").unbind('click').click(function(){
			$(".menu-dir").toggleClass("fa-angle-right");
			$(this).toggleClass("menu-active");
			$("body").removeClass("mob-menu-expand");
			$("body").toggleClass("menu-expand");
			
		});
	}
	}
	mobileMenu();
	$(window).resize(function(){
		mobileMenu();
	});
});