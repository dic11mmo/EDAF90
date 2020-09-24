
// see the link 
// https://developer.mozilla.org/en-US/docs/Web/API/Document 
// How to display a part of html code on the websid 
//console.log(document.title);// shows nothing in webpages console
//console.log(document);

/*var newEle = document.createElement("h3");
newEle.textContent = " New Element append text"; 
// querySelector apppend the test the place u want 
document.querySelector( " body ").appendChild(newEle);*/ 
var newEle = document.createElement("title");
newEle.textContent = " New Element append text"; 
// querySelector apppend the test the place u want 
document.querySelector( " title ").appendChild(newEle);


