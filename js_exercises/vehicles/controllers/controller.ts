

function createCar() {
	let plate = document.getElementById("plate").value;
    let brand = document.getElementById("brand").value;
    let color = document.getElementById("color").value;	
	console.log(plate,brand,color);
    let car = new Car(plate, color, brand);
    car.addWheel(new Wheel(2, "SEAT"));
    document.getElementById('carInfo').innerHTML = "Registered car:<br>" + "PLATE: " + car.plate + "<br>" + " COLOR: " + car.color + "<br>" +" BRAND: " + car.brand + "<br>" +
         " WHEELS: " + JSON.stringify(car.wheels);
}


