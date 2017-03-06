<<<<<<< HEAD
var count = 0
function Nav() {
	if (count==0){
		count = 2;
		openNav();
	}else if(count==1){
		count = 2;
		closefav();
		closeNav();
	}else{
		count = 0;
		closeNav();
	}	
}
function openNav() {
=======
function openNav() {
	document.getElementById("fav").style.width = "0";
	document.getElementById("easteregg").style.width = "0";
>>>>>>> origin/master
    document.getElementById("mySidenav").style.width = "250px";
	document.getElementById("main").style.marginLeft = "300px";
	document.getElementById("main2").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}
<<<<<<< HEAD
=======

>>>>>>> origin/master
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
	document.getElementById("main").style.marginLeft= "50px";
	document.getElementById("main2").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
}
function openfav() {
	closeNav();
<<<<<<< HEAD
	count = 1;
	document.getElementById("fav").style.width = "100%";
=======
	document.getElementById("fav").style.width = "100%";
	document.getElementById("sidenav1").style.zIndex = "510";
	document.getElementById("img1").style.zIndex = "100";
>>>>>>> origin/master
	document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}
function closefav() {
	document.getElementById("fav").style.width = "0";
<<<<<<< HEAD
=======
	document.getElementById("sidenav1").style.zIndex = "1%";
	document.getElementById("main").style.zIndex = "100*";
	document.body.style.backgroundColor = "white";
}
function openeasteregg() {
	closeNav();
    document.getElementById("easteregg").style.width = "175px";
	document.getElementById("main").style.marginLeft = "225px";
	document.getElementById("main2").style.marginLeft = "175px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}
function closeeasteregg() {
	document.getElementById("easteregg").style.width = "0";
	document.getElementById("main").style.marginLeft= "50px";
	document.getElementById("main2").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
>>>>>>> origin/master
	document.body.style.backgroundColor = "white";
}