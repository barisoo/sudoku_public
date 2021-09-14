let numberpad = Vue.createApp({
	template: `<table width="360">
  			<tr>
  				<td><button> 1</button> </td>
  				<td><button> 2</button> </td>
  				<td><button> 3</button> </td>
  			</tr>
  			<tr>
  				<td> <button>4 </button></td>
  				<td> <button>5 </button></td>
  				<td> <button>6 </button></td>
  			</tr>
  			<tr>
  				<td> <button>7</button> </td>
  				<td> <button>8</button> </td>
  				<td> <button>9</button> </td>
  			</tr>

  			<tr>
  				<td><button class = "numberpad-control"> Enter</button> </td>
  				<td><button class = "numberpad-control"> Erase</button> </td>
  				<td><button class = "numberpad-control"> Note</button> </td>
  			</tr>
  		</table>`
});

numberpad.mount("#numberpad-component");