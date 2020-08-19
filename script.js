/************************************************/
/********* ADD CHECKLIST FUNCTIONALITY **********/
/************************************************/

/* TODO: Add a variable to store the "my-list" element */
var fullItemList = document.getElementById('my-list');

fullItemList.addEventListener("click", checkOffItem); 

if (fullItemList) {
  fullItemList.addEventListener("click", checkOffItem, false);
}

function checkOffItem(clicked) {
  if (clicked.target.tagName == "LI") {
      clicked.target.classList.toggle("all-done");
    }
}