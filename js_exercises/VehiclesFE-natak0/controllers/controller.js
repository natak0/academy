window.app={clicks:0};
//if add a wheel button clicked
document.getElementById('wheelBtn').addEventListener('click', function (event) {
				var car= window.app.car;
				clicks=window.app.clicks;
				var wheelDiameter = document.getElementById("diameter").value;
				if ((wheelDiameter>=0.4) & (wheelDiameter <= 2)){
					document.getElementById('wheel').style.display = "inline";
					var brand = document.getElementById("brand").value;
					var wheel =new Wheel(wheelDiameter, brand);
					car.addWheel(wheel);
					var divWheel = document.getElementById('wheelInfo');
					if (car.wheels.length<=4){
						divWheel.innerHTML += car.wheels.length + ". " + wheel.toString();
					}else{
						alert("A car cannot have more than 4 wheels!");
					}
						
				}else{
			alert("A diameter of the wheel must be between 0.4 and 2.");
		}
		
});



function createCar() {
    var plate = checkPlate();
	if (plate) {
			
			var brand = document.getElementById("brand").value;
			var color = document.getElementById("color").value;
			var car = new Car(plate, color, brand);
			console.log(car);
			document.getElementById('carInfo').innerHTML = "Registered car:" + "<br>" + "<br>" + "PLATE: " + car.plate  + "<br>" + " BRAND: " + car.brand + "<br>" + " COLOR: " + car.color +"<br>";
			document.querySelector(".form-wheel").style.display = "block";
			document.getElementById('wheelInfo').innerHTML = "";
			document.getElementById('wheel').style.display = "none";
		    window.app.car=car;
					        
}	
}

function checkPlate(){
	var plate = document.getElementById("plate").value;
	var regex1 = /^\d{4}\s{0}[A-Za-z]{3}/;
	//var regex2 = /^\d{4}\s{1}[A-Za-z]{3}/;
	var length = plate.length;
	var result1 = plate.match(regex1);
	if (((result1!=null)&(plate.length == 7))){
		console.log(result1);
		return result1[0];
	}
	else{
		alert("Car plate must have 4 numbers and 3 letters")
	}
}
