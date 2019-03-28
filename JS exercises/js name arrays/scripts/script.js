//1 create an array and fill it with name letters
//var myname = ['N','a','t','a','l','i','a'];
var nombre = "Natalia1";
myname=nombre.split('');
console.log(myname);

//show the length of array
console.log(myname.length);
//2 display in the console the item and its position in array
myname.forEach(function(item, index, array) {
  console.log(item, index);
});

//check for vocals and numbers
for (var i=0; i<myname.length; i++){
			if (myname[i] === 'a'|| myname[i] === 'i'|| myname[i] === 'e'|| myname[i] === 'u'|| myname[i] === 'o')console.log(myname[i], i, "vocal");
			//check if there are any numbers
			else if (!isNaN(myname[i])) {
					alert("Name cannot contain numbers!");
					console.log(myname[i],i, "number");
				}
			else console.log(myname[i], i, "consonant");	
}
//3 create a map
nameMap = new Map();
for(var i=0;i<myname.length;i++){
	//return value element from myname array
  	let number=nameMap.get(myname[i]);
  	//console.log(number, "number");
  	//if the letter already exists then increase value element
	if (number) {
   		nameMap.set(myname[i],number+1)
	}
	else {
		nameMap.set(myname[i],1)
	}
}
console.log(nameMap);


//4 create a full name array with a space separator
var surname = ['S','u','r','n','a','m','e'];
var fullname = [];
var sep = [' '];
fullname = Array.from(myname);
fullname.push.apply(fullname, sep);
fullname.push.apply(fullname, surname);
//fullname.push(surname);
console.log(fullname);
