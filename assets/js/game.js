window.game = {
	lua: function(cmd){
		console.log("RUNLUA: " + cmd)
	},

	close: function(){
		game.lua('ClosePhotonMenu()')
	}
}
