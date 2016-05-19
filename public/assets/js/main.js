jQuery(document).ready(function(){
    // $(".dropdown").hover(
        // function() { $('.dropdown-menu.mega-menu', this).fadeIn("fast");
        // },
        // function() { $('.dropdown-menu.mega-menu', this).fadeOut("fast");
    // });
});
$(".tog-cates").click(function(){
    $(".bff-pul-listing").toggle('fast');
});
$(".open-sub").click(function(){
    $(this).siblings('.sub-hidden').slideToggle('fast');
	$(this).toggleClass('active');
	if($(this).hasClass('active')){
		$(this).html('-');
		$(".dropdown-cat").addClass('this-open');
	}else{
		$(this).html('+');
		$(".dropdown-cat").removeClass('this-open');
	}
});
function toggleChevron(e) {
    $(e.target)
        .prev('.panel-heading')
        .find("i.indicator")
        .toggleClass('fa-sort-desc fa-sort-up');
}
$('#cart-panel').on('hidden.bs.collapse', toggleChevron);
$('#cart-panel').on('shown.bs.collapse', toggleChevron);
$(window).scroll(function (event) {
	// var widgetHeight = $(".widget.widget-left").offset().top;
	// var wind 		 = $(window).scrollTop();
 //    if((widgetHeight - wind) <= 0){
 //    	console.log('fixed')
 //    }else{
 //    	// console.log('fixed')
 //    }
});
$(function() {
  $('a#scrollTop[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});