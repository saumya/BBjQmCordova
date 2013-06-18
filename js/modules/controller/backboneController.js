define('controller/backboneController',
	['router/backboneRouter','view/backboneEntryView','view/loginView'],
	function(BBRouter,BBEntryView,BBLoginView){
	var BBApplicationController = Backbone.View.extend({
		activeView:'',
		previousView:'',
		initialize: function(){
			console.log('BBApplicationController : initialize : ');
			

			
		},
		render: function(){
			console.log('BBApplicationController : render : ');
			//dispatch the creation complete event
			this.trigger('BBAppController:onCreationComplete');
		},
		initForApplication: function(){
			console.log('BBApplicationController : initForApplication : ');
			var router= new BBRouter();
			router.on('BBRouter:index',this.onIndex,this);
			router.on('BBRouter:login',this.onLogin,this);
			//var bb= new BBEntryView();
			//finally enable the Router
			Backbone.history.start();
		},
		//EventHandlers
		onIndex: function(event){
			console.log('BBApplicationController : onIndex : ');
			if(this.activeView){
				this.activeView.destroy();
			}
			
			var bb = new BBEntryView();
			bb.on('BBApplicationView:CreationComplete',this.onApplicationEntryCreation,this);
			bb.on('BBApplicationView:AnimationOutComplete',this.onApplicationEntryDestroy,this);
			bb.render();
		},
		onLogin: function(event){
			console.log('BBApplicationController : onLogin : ');
			//this.activeView.testLog();
			this.activeView.destroy();
			
		},
		onApplicationEntryCreation: function(dispatcher){
			console.log('BBApplicationController : onApplicationEntryCreation : ');
			this.activeView=dispatcher;
			//dispatcher.testLog();
			//bb.testLog();
			//TweenMax.fromTo(dispatcher, 2.5, {x:-1000},{x:0});
		},
		onApplicationEntryDestroy: function(dispatcher){
			console.log('BBApplicationController : onApplicationEntryDestroy : ');
			//dispatcher.testLog();
			//TODO: render new view
			var bb1 = new BBLoginView();
			bb1.render();
		},
		//
		destroy: function(){
			console.log('BBApplicationController : destroy : ');
		}
	});
	return BBApplicationController;
});