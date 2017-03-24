var count = 0
var direct = 0
var search = 0
function Nav() {
	if (count==0){
		count = 2;
		openNav();
	}else if(count==1){
		count = 2;
		closefav();
		closedirect();
		closeNav();
		closesearch()
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
	closefav()
	closesearch()
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
function opensearch1(){
	if (search==0){
		opensearch();
	}else{
		search = 0;
		closesearch();
	}	
}
function opensearch() {
	closeNav();
	closedirect()
	closefav()
	count = 1;
	search = 1;
	document.getElementById("search").style.width = "100%";
	document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}
function closesearch() {
	document.getElementById("search").style.width = "0";
	document.getElementById("main").style.marginLeft= "50px";
	document.body.style.backgroundColor = "white";
}