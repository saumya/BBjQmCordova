define('view/backboneEntryView',
	[],
	function(){
		//get the template
		
		var BBApplicationView = Backbone.View.extend({

			//el: $('#idSlides'),
			el: $('body'),
			//el: $('#id_appContainer'),
			events:{
				//'click #btnBack' : 'onBackClick',
				'click #id_ok' : 'onOkClick'
			},

			initialize: function(){
				console.log('BBApplicationView : initialize : ');
				//compile the template and store
				this.templateString=$('#tpl_page_general').html();//get the template
				this.compiledTeamplate=_.template(this.templateString);//compile and save to use later with data
				//
				

				//hack render now
				//this.render();
			},
			render: function(){
				console.log('BBApplicationView : render : ');
				//$('body').html('Hello World!');
				/*
				$(document).on('pageinit',function(event){
					console.log('BBApplicationView : Page : pageinit : ###########');
					//console.log(event);
					//$.mobile.changePage("#id_page_1", {allowSamePageTransition: true,transition: "slide"});
					//$( "#id_page_1" ).page("removeContainerBackground");
					//$('#id_page_1').addClass('ui-page-active');
					$(event.target).addClass('ui-page-active');
					//$('#id_page_1').trigger('pagecreate');
					//$.mobile.changePage("#id_page_1", {allowSamePageTransition: true,transition: "slide"});
					return false;
				});
				$(document).on('pagecreate',function(event){
					console.log('BBApplicationView : Page : pagecreate : #########');
					//$.mobile.changePage("#id_page_1", {allowSamePageTransition: true,transition: "slide"});
					return false;
				});
				$(document).on('pageload',function(event){
					console.log('BBApplicationView : Page : pageload : ###########');
					//$.mobile.changePage("#id_page_1", {allowSamePageTransition: true,transition: "slide"});
					return false;
				});*/
				//
		        //$.mobile.navigate( "#bar" ); // change the URL
		        //$.mobile.changePage( "#one");// chagne the jquery mobile page
		        var idVal="id_page_1";
		        var idTotal = ('#'+idVal);
				//send data to the compiled template
				var v = this.compiledTeamplate({ID:idVal,data:"BackboneJS"});
				//render the compiled template with data
				//$('body').append(v);
				this.$el.append(v);
				var p=$(idTotal);
				/*
				p.on('pagecreate',function(event){
					console.log('BBApplicationView : pagecreate : ');
					//p.addClass('ui-page-active');
					$.mobile.changePage(idTotal, {transition: "none",role:"page"});
				});
				//$( "#id_page_1" ).page({ theme: "a" });
				*/
				//p.page();//initialise without any options

				$.mobile.changePage(idTotal, {transition: "none"});
				TweenMax.fromTo(p, 2.5, {x:-1000},{x:0});
				this.trigger('BBApplicationView:CreationComplete',this);//dispatching an event with arguements passed
				
				//
				/*
				//$('#id_page_1').on('pageload',function(event){
				$('body').on('pageload',function(event){
					console.log('BBApplicationView : Page : #################### : ');
					//$.mobile.changePage("#id_page_1", {allowSamePageTransition: true,transition: "slide"});
				});*/
				//
				//$('#id_page_1').trigger('create');




				//$('#id_page_1').addClass('ui-page-active');
				//$('#id_page_1').trigger('create');
				//$('#id_page_1').trigger('updatelayout');
				//$.mobile.changePage("#id_page_1");
				//
				//$.mobile.changePage("#hackPage", {allowSamePageTransition: true,transition: "slide"});
				
				//change url
				//$.mobile.navigate( "#one" );
				//change jquery page
				//$.mobile.changePage("#one");
				//console.log($('#hackPage'));
				//$('#hackPage').trigger('create');
			},
			testLog:function(){
				console.log('BBApplicationView : testLog : ');
			},
			//Event handlers
			onOkClick: function(){
				console.log('BBApplicationView : onOkClick : ');
				//change url
				$.mobile.navigate( "#login" );
			},
			//finally
			destroy: function(){
				console.log('BBApplicationView : destroy : ');
				var idVal="id_page_1";
		        var idTotal = ('#'+idVal);
		        var p=$(idTotal);
		        //
		        var that = this;
		        TweenMax.fromTo(p, 2.5, {x:0},{x:-1000,onComplete:function(event){
		        	console.log('Animation completed');
		        	that.trigger('BBApplicationView:AnimationOutComplete',that);
		        	p.remove();
		        }});
		        //this.$el.remove(p);
		        //p.remove();
			}
		});
		return BBApplicationView;

});