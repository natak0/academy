"use strict";
var Wheel = /** @class */ (function () {
    function Wheel(diameter, brand) {
        this.diameter = diameter;
        this.brand = brand;
		this.toString=function(){
			return "Diameter is "+diameter+ " and brand is "+brand + "<br>";
		}
    }
    return Wheel;
}());
