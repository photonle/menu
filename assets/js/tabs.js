window.tabs = {
	set: function(id){
		$(".container > .page").hide()
		$("#" + id).show()
	},

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

	var active = $(".sidebar li.active")
	// Set either the one marked as active.
	// Or if none are, fall back to the first sidebar element.
	if (active.length === 0){
		active = $(".sidebar li").first()
	} else {
		active = active.first()
	}
	tabs.set(active.attr("page"))
})
