const app = Vue.createApp({
	template: '<h1> Hello, World!</h1>'
})


app.mount('#app')

const topMenu = Vue.createApp({
	template: '<div class="col-12">
		  <a href="#home" class="active">Logo</a>
		  <div id="myLinks">
		    <a href="#news">News</a>
		    <a href="#contact">Contact</a>
		    <a href="#about">About</a>
		  </div>
		  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
		    <i class="fa fa-bars"></i>
		  </a>
		</div>'
})

topMenu.mount('#topNav')