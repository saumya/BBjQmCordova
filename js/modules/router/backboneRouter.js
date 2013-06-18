define('router/backboneRouter',
	[],
	function(){
		var BBRouter = Backbone.Router.extend({
			initialize: function(){
				console.log('BBRouter : initialize : ');
			},
			routes: {
				"": "index",
				"#": "index",
				"home": "homePage",
				"about": "aboutPage",
				"login": "loginPage"
			},
			//Routing functions
			index: function(){
				console.log('BBRouter : index : ');
				this.trigger('BBRouter:index');
			},
			homePage: function(){
				console.log('BBRouter : homePage : ');
			},
			aboutPage: function(){
				console.log('BBRouter : aboutPage : ');
			},
			loginPage: function(){
				console.log('BBRouter : loginPage : ');
				this.trigger('BBRouter:login');
			}

		});
		return BBRouter;
});