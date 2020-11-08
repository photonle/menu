windows.tabs = {
	set: function(id){
		$(".container > .page").hide()
		$("#" + id).show()
	}

	bind: function(){
		$(".sidebar li").click(function(){
			tabs.set($(this).attr("page"))
			$(this).siblings().removeClass("active")
			$(this).addClass("active")
		})
	}
}

$(document).ready(function(){
	tabs.bind()
	tabs.set("usage")
})
