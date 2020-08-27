let modal = document.getElementsByClassName("poora")[0]
let button = document.getElementsByClassName("btn12")[0]
let button0 = document.getElementsByClassName("btn11")[0]
let span = document.getElementsByClassName("close")
let span2 = document.getElementsByClassName("closed")
let gallery = document.getElementsByClassName("gallery")[0]
let galleryBook = document.getElementsByClassName("galleries")[0]
let gallery2 = document.getElementById("gallery")
let hamburger = document.getElementById("hamburger")
let nav = document.getElementsByTagName("ul")
let search = document.getElementsByClassName("search")[0]
let searchimg = document.getElementById("searchimg")
let GradBox = document.getElementsByClassName("gradient-box")[0]
// let modal = document.getElementsByClassName("poora")[0]
let doubleOccurance = false;

//  When the user clicks the button, open the modal 
button.onclick = function() {
  modal.style.display = "block";
  gallery2.style.display = "none"
  GradBox.style.display = 'none';

}
button0.onclick = function() {
  gallery2.style.display = "block"
  modal.style.display = "none";

  gallery.style.display = "block";
  galleryBook.style.display = "block";
  span[2].style.display = "block"
  GradBox.style.display = 'none';

}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    gallery2.style.display = "none"
    GradBox.style.display = 'block';
  }
};
// When the user clicks on <span> (x), close the modal
span[0].onclick = function() {
  modal.style.display = "none";
  GradBox.style.display = 'block';

}
span[1].onclick = function() {
  modal.style.display = "none";
  GradBox.style.display = 'block';
  
}
span2[0].onclick =function (){
  modal.style.display = "none";
  GradBox.style.display = 'block';
  
}
span[2].onclick = function() {
  gallery.style.display = "none";
  gallery2.style.display = "none"
  galleryBook.style.display = "none";
  span[2].style.display = "none"
  GradBox.style.display = 'block';
  }
  
gallery.onclick = function (){
    gallery.style.display = "block";
    GradBox.style.display = 'none';
}

hamburger.onclick = function(){
  nav[0].classList.toggle('show');
  if (doubleOccurance){
    doubleOccurance = false;
    GradBox.style.display = 'block';}
    else{
      doubleOccurance = true;
      GradBox.style.display = 'none';
  }
}
searchimg.onclick = function(){
  search.classList.toggle('show');
}