let banner = Vue.createApp({
	data: function(){ return{
		title: 'SUDOKU'
	}
	},

	template: `
	<div class="col-sm">
	    <h1>{{title}}</h1>
	</div>
	`
})

banner.mount('#sudoku-banner')
