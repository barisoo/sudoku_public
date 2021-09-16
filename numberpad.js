let numberpad = Vue.createApp({
	template: `<table width="360">
  			<tr>
  				<td><button onclick="insertValFromInput(1)"> 1</button> </td>
  				<td><button onclick="insertValFromInput(2)"> 2</button> </td>
  				<td><button onclick="insertValFromInput(3)"> 3</button> </td>
			</tr>
			<tr>
  				<td> <button onclick="insertValFromInput(4)">4 </button></td>
  				<td> <button onclick="insertValFromInput(5)">5 </button></td>
  				<td> <button onclick="insertValFromInput(6)">6 </button></td>
			</tr>
			<tr>
  				<td> <button onclick="insertValFromInput(7)">7</button> </td>
  				<td> <button onclick="insertValFromInput(8)">8</button> </td>
  				<td> <button onclick="insertValFromInput(9)">9</button> </td>
  			</tr>

  			<tr>
  				<td><button class = "numberpad-control" onclick="shouldCheckAnswers =!shouldCheckAnswers"> Check</button> </td>
  				<td><button class = "numberpad-control" onclick="insertValFromInput(0)"> Erase</button> </td>
  				<td><button class = "numberpad-control" onclick="clear_i()">Clear</button> </td>
  			</tr>
  		</table>`
});

numberpad.mount("#numberpad-component");
