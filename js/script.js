		$(document).ready(function(){
			$(window).scroll(function(){
                var floors=$('#content').find('.floor');
                var menu=$('#menu');
                var top=$(document).scrollTop();
                var currentId='';
                floors.each(function(){
                	var m=$(this);
                	if (top>m.offset().top-200) 
                	{
                        currentId='#'+m.attr('id');
                	} else {
                		return false;
                	}
                });
                var currentLink=menu.find('.current');
                if (currentId && currentLink.attr('href')!=currentId) {
                	currentLink.removeClass('current');
                	menu.find('[href='+currentId+']').addClass('current');
                } 
			});
		});