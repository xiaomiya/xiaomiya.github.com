$(function(){
	var article = $('[data-skin="color"] article').length;
	var j = 0;
	for(var i = 0; i<article; i++){
		j++;
		$('[data-skin="color"] article').eq(i).addClass('c'+j);
		j = j >= 5 ? 0 : j;
	}

	// 回到顶部
	$(window).scroll(function(){
		if($(this).scrollTop() >= 300 ) {
			$('.btn').show()
		}else {
			$('.btn').hide()
		}
	})
	$('.returnTop').on('click',function(){
		$('html body').animate({'scrollTop':0},'fast')
	})
})