$(".post-body").click(function(e){
		var n=Math.round(Math.random()*20);//随机数
		var getRandomColor = function(){ //随机颜色
			return '#'+Math.floor(Math.random()*16777215).toString(16);
		}
		var $i=$("<b>").text("+"+n);//添加到页面的元素
		var x=e.pageX,y=e.pageY;//鼠标点击的位置
		$i.css({
			"z-index":99999,
			"top":y-15,
			"left":x,
			"position":"absolute",
			"color": getRandomColor
		});
		$("body").append($i);
		$i.animate(
			{"top":y-180,"opacity":0},
			1300,
			function(){$i.remove();}
		);
		e.stopPropagation();
});