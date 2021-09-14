let app = Vue.createApp({
	data: function(){ return {
			links: [
				{name:'Home', url: "#a"},
				{name:'Play', url: "#a"},
				{name:'Solver', url: "#a"},
				{name:'Books', url: "#a"}],
			name: 'Baris',
			isVisible: false,
		}
	},
	methods: {
		toggleMenu: function(){
			this.isVisible = !this.isVisible
		}
	},
	template: `
				<style type="text/css" href="style.css"></style>
				<div class="row">
		        
				<button @click="toggleMenu" >≡</button> <div class= "col"></div>
		        {{links.name}}
		        </div>
		        <div class="row">
		            <div  v-show="isVisible"v-for="item in links" class = "nav-link">
		            <a :href="item.url" > <div>{{ item.name }} </div></a>
		            </div>
		        </div>
		        `
	})

/*app.component('navbar-component',{
	template: `
	<div class="row">
        {{name}}

        {{links.name}}
        </div>
        <div class="row">
            <div  v-show="isVisible"v-for="item in links"class="col" style = "display: grid">
            <a :href="`${item.url}`">{{ item.name }}</a>
            </div>
        </div>
        <button @click="toggleMenu" >Menu</button>
	`
}) */


app.mount('#navbar-app')

