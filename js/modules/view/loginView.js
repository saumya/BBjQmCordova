define('view/loginView',
	[],
	function(){
		var LoginView=Backbone.View.extend({
			
			el: $('body'),
			events:{
				//'click #btnBack' : 'onBackClick',
				'click #id_login' : 'onLoginClick'
			},

			initialize:function(){
				console.log('LoginView : initialize : ');
				//compile the template and store
				this.templateString=$('#tpl_page_login').html();//get the template
				this.compiledTeamplate=_.template(this.templateString);//compile and save to use later with data
			},
			render:function(){
				console.log('LoginView : render : ');
				var idVal="id_page_2";
		        var idTotal = ('#'+idVal);
		        //send data to the compiled template
				var v = this.compiledTeamplate({ID:idVal,data:"Page2"});
				this.$el.append(v);
				var p=$(idTotal);
				
				$.mobile.changePage(idTotal, {transition: "none"});
				TweenMax.fromTo(p, 2.5, {x:-1000},{x:0});
				//this.trigger('LoginView:CreationComplete',this);
				
			},
			onLoginClick: function(){
				console.log('LoginView : onLoginClick : ');
				//change url
				//$.mobile.navigate( "#login" );
				//$.mobile.navigate( "" );
			},
			destroy:function(){
				console.log('LoginView : destroy : ');
			}
		});
		return LoginView;
});