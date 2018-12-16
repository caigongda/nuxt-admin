
export default ({ app }) => {
	app.router.beforeEach((to,from,next)=>{
		let userinfo=window.localStorage.getItem('userinfo');
		if (to.path=="/membercenter") {
			if (userinfo) {
	  			next();
	  		}else{
				next(false)
	  		}
		}
		next();
	});

	app.router.afterEach((to,from)=>{
		
	});

}