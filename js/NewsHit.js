var page = {
	newsType:{list:[{text:'推荐',type:'guoneinews'},{text:'热点',type:'worldnews'}]},
	init:function(){
		this.loadNews();
	},

	loadNews:function(){
		var _this = this;
		$.ajax({
			url:'json/guoneinews1.json',
			dataType:'json',
			success:function(res){
				console.info(res);
				_this.renderTmp(res);
				myScroll.refresh();
			}
		})
	},


	renderTmp:function(data){
		if(!data || data.error_code !== 0){
			return;
		}
		//temp变量获取页面上的模板内容
		var temp = $("#tmpList1").html();
		if(data.result[0].picUrl){
			temp = $("#tmpList2").html();
		}
		var htmlStr = Mustache.render(temp, data);
		$(".contentList").html(htmlStr);
	}


}

jQuery(function($){
	page.init();
}); 


// $(function(){

// })

// $(document).ready(function(){

// })