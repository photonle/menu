
var photon = {
	init: function() {
		photon.fix_styles();
		photon.tab_control.init();
	},
	run_lua: function(cmd) {
		console.log( "RUNLUA: " + cmd );
	},
	close_menu: function() {
		photon.run_lua("ClosePhotonFRMenu()");
	},
	fix_styles: function() {
		$(".page").css( "height", ($("body").height() - 32 - 64) );
	},
	tab_control: {
		init: function() {
			photon.tab_control.bind();
			photon.tab_control.setTab("usage");
		},
		bind: function() {
			$(".sidebar li").click(function(){
				photon.tab_control.setTab($(this).attr("page"));
				$(".sidebar > li").removeClass("active");
				$(this).addClass("active");
			});
		},
		setTab: function(id) {
			$(".container > .page").hide();
			$("#" + id).show();
		}
	}
}

$(document).ready(function(){
	photon.init();
});