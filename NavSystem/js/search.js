(function(window){
	var searchEl = document.querySelector("#input");
	var labelEl = document.querySelector("#label");
	
	// register clicks and toggle classes
	labelEl.addEventListener("click",function(){
		if (classie.has(searchEl,"focus")) {
			classie.remove(searchEl,"focus");
			classie.remove(labelEl,"active");
		} else {
			classie.add(searchEl,"focus");
			classie.add(labelEl,"active");
		}
	});
	// register clicks outisde search box, and toggle correct classes
	document.addEventListener("click",function(e){
		var clickedID = e.target.id;
		if (clickedID != "search-terms" && clickedID != "search-label") {
			if (classie.has(searchEl,"focus")) {
				classie.remove(searchEl,"focus");
				classie.remove(labelEl,"active");
			}
		}
	});
'use strict';
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
	return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
	elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
	elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
	return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
	if ( !hasClass( elem, c ) ) {
	  elem.className = elem.className + ' ' + c;
	}
  };
  removeClass = function( elem, c ) {
	elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}
function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}
var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};
// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else {
  // browser global
  window.classie = classie;
}
})( window );