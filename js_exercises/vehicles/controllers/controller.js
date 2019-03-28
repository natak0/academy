window.app={};
//if add a wheel button clicked
document.getElementById('wheelBtn').addEventListener('click', function (event) {
				var car= window.app.car;
				clicks=window.app.clicks;
				var wheelDiameter = parseFloat(document.getElementById("diameter").value);
				//console.log(wheelDiameter);
				if ((wheelDiameter>=0.4) & (wheelDiameter <= 2)){
					document.getElementById('wheel').style.display = "inline";
					var brand = document.getElementById("wheelBrand").value;
					var wheel =new Wheel(wheelDiameter, brand);
					
					
					if (car.wheels.length<4){
						car.addWheel(wheel);
						var divWheel = document.getElementById('wheelInfo');
						//divWheel.innerHTML += car.wheels.length + ". " + wheel.toString();
						divWheel.innerHTML += car.wheels.length + ". "+ "Diameter is "+wheelDiameter+ " and brand is "+brand + "<br>";
							//console.log(car.wheels.length);
					}else{
						alert("A car cannot have more than 4 wheels!");
					}
						
				}else{
					alert("A diameter of the wheel must be between 0.4 and 2.");
		}
		
});

function createCar() {
	//check if the number plate has 4 letters and 3 numbers
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
//function to check the format of Spanish number plate
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
