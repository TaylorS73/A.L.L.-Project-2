var count = 0
var direct = 0
function Nav() {
	if (count==0){
		count = 2;
		openNav();
	}else if(count==1){
		count = 2;
		closefav();
		closedirect();
		closeNav();
	}else{
		count = 0;
		closeNav();
	}	
}
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
	document.getElementById("main").style.marginLeft = "300px";
	document.getElementById("main2").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
	document.getElementById("main").style.marginLeft= "50px";
	document.getElementById("main2").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
}
function openfav() {
	closeNav();
	count = 1;
	document.getElementById("fav").style.width = "100%";
	document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}
function closefav() {
	document.getElementById("fav").style.width = "0";
	document.body.style.backgroundColor = "white";
}
function opendirect1(){
	if (direct==0){
		opendirect();
	}else{
		direct = 0;
		closedirect();
	}	
}
function opendirect() {
	closeNav();
	count = 1;
	direct = 1;
	document.getElementById("directions").style.width = "275px";
	document.getElementById("main").style.marginLeft = "325px";
	document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}
function closedirect() {
	document.getElementById("directions").style.width = "0";
	document.getElementById("main").style.marginLeft= "50px";
	document.body.style.backgroundColor = "white";
}