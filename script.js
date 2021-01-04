//index (login sida)

const corrName = "email@gmail.com";

const corrPass = "password";

let passMax = 3;

let passCount = 1;

// kollar så email och lösenord stämmer. ifall det inte skulle stämma presenteras en alert

function checkLogin(){
	var userName = document.forms["loginForm"]["email"].value;

	var passWord = document.forms["loginForm"]["password"].value;

	if (passCount <= passMax) {

	if (userName != corrName || passWord != corrPass) {
		console.log(passCount);

		passCount ++;

		return false;


	}


}else {
	alert("You are out of tries! please refresh page. \n PS! \n Email = " +corrName 
	 +"\n Password = " + corrPass);
	return false;
}
}


/*toggleCheckbox är en funktion som hjälper användaren 
att få sitt användarnamn och lösenord inskrivet automatiskt
*/ 

function toggleCheckbox(){
	var checkBox = document.getElementById("checkBox");


	var inputBoxUsername = document.getElementById("email");

	var inputBoxPassword = document.getElementById("password");
	
	if (checkBox.checked == true) {
		inputBoxUsername.value = "email@gmail.com";

		inputBoxPassword.value = "password";

		
	}else{
		inputBoxUsername.value = null;
		inputBoxPassword.value = null;
	}

}

//huvudsida


//funktionen loadname visar upp vem som är inloggad på huvudsidan 

function loadName(){
	var createP = document.getElementById("myPopup");
	var createN = document.createTextNode(corrName);
	createP.appendChild(createN);
}

//hide name gömmer användarens namn så den inte kommer ivägen när användaren scrollar

function hideName(){

	setTimeout(document.getElementById("popUpDiv").style.display = "none", 3000);
}



// kalender

const date = new Date();
let month= date.getMonth();

const months = [
	"Januari",
	"Februari",
	"Mars",
	"April",
	"Maj",
	"Juni",
	"Juli",
	"Augusti",
	"September",
	"Oktober",
	"November",
	"December"
];

console.log(document.querySelector(".month").innerHTML);

document.querySelector(".month").innerHTML = months[month];

let days = "";

for(let i = 1;i <= 31; i++){
/* 
	days +=´<div>${i}</div<´;
	*/
	
}

//left visar upp alla index som har declareats i arrayen "months"

function left(){
	month=month-1;
if(month<0){
	month=11;
}	
	document.querySelector(".month").innerHTML
= months[month];
}

function right(){
	month=month+1;
if(month>11){
	month=0;
}
	document.querySelector(".month").innerHTML
= months[month];
}




//Alla sidor


// funktionen "openNav" öppnar meddelande fönstret på högra sidan och closeNav stänger den


function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginRight = "250px";  
}


function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginRight= "0";
}
