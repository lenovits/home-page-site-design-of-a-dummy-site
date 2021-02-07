$(document).ready(function(){
		$('.btn1').click(function(){
			$('.menu').slideToggle();
		})
			
		$(window).resize(function(){
			var x=$(window).width();
			if (x>768){
				$('.menu').removeAttr('style');
			}
		})
			 
		$("footer a[href='#myPage']").on('click', function(event) {
			if (this.hash !== "") {
				event.preventDefault();
				var hash = this.hash;
				$('html, body').animate({scrollTop: $(hash).offset().top}, 900, function(){
				window.location.hash = hash;
				});
			}
		});	 
	})
	
	
	
var $newsletter=$('.newsletter');
var $news=$('.news');
$newsletter.waypoint(function(){
	$newsletter.addClass('newsletter-animate');
	$news.css('display','block');
},{offset:'50%'});



$('#btn1').click(function(){
	$bottom=$newsletter.css('bottom');
	var news=document.getElementById('news');
	if(($bottom=='0px')&&(news.className=="newsletter newsletter-animate")){
		$newsletter.css('bottom','-189px');
		$('#btn1').html('<i class="fa fa-window-maximize" aria-hidden="true"></i>');
	}
	else if (($bottom=='-189px')&&(news.className=="newsletter newsletter-animate")){
		$newsletter.css('bottom','0px');	
		$('#btn1').html('<i class="fa fa-window-minimize" aria-hidden="true"></i>');
	}
	else if (news.className=="newsletter2"){
		$newsletter.css('bottom','-189px');
		$('#btn1').html('<i class="fa fa-window-maximize" aria-hidden="true"></i>');	
		news.className=news.className.replace('newsletter2','newsletter newsletter-animate');
		var header=document.getElementById('header');
		header.className=header.className.replace('newsletterheader2','newsletterheader');
		var body=document.getElementById('body');
		body.className=body.className.replace('newsletterbody2','newsletterbody');
		$('.news').css('background','transparent');
		$('.news').css('position','absolute');
	}
});


	
function B()
	{
		var news=document.getElementById('news');
		news.style.display="none";
		$('.news').css('background','transparent');
		$('.news').css('position','absolute');
	}



function D(){
	var news=document.getElementById('news');
	if (news.className=="newsletter newsletter-animate")
	{
		news.className=news.className.replace('newsletter newsletter-animate','newsletter2');
		var t=document.getElementById('header');
		t.className=t.className.replace('newsletterheader','newsletterheader2');
		var x=document.getElementById('body');
		x.className=x.className.replace('newsletterbody','newsletterbody2');
		$('.news').css('height','100%');
		$('.news').css('background','rgba(90, 94, 104,0.5)');
		$('.news').css('position','fixed');
		$('#btn1').html('<i class="fa fa-window-minimize" aria-hidden="true"></i>');
	}
	else if (news.className=="newsletter2")
	{
		news.className=news.className.replace('newsletter2','newsletter newsletter-animate');
		var header=document.getElementById('header');
		header.className=header.className.replace('newsletterheader2','newsletterheader');
		var body=document.getElementById('body');
		body.className=body.className.replace('newsletterbody2','newsletterbody');
		$('.news').css('background','transparent');
		$('.news').css('position','absolute');
	}
}	
	
	
	
	
	
	