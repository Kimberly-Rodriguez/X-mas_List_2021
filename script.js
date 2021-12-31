let giftItemInput = document.querySelector("#gift-item");
let buttonToAddToList = document.getElementById("add-to-list");
let needToBuyEl = document.querySelector("#need-to-buy");
let boughtEl = document.querySelector("#bought");

let itemsINeedToBuy = [];
let itemsIBought = [];

function init() {
  //take things out of local storage
  let storedItems = JSON.parse(localStorage.getItem("need-to-buy"));
  //console.log(storedItems);
 //make sure there is something inside the array otherwise exit the funtion
  if (!storedItems){
    return;
  }
  // if there is something inside make the array equal itemsINeeToBuy
  itemsINeedToBuy = storedItems;
  // calling the renderIteams INeedToBuy funtion to run the aray and make sure it stays after page load
  renderItemsINeedToBuy()
};


function renderItemsINeedToBuy() {
   // to eliminate duplicates
   needToBuyEl.textContent = "";

   //looping through the array of itemsINeedToBuy
   for (let i = 0; i < itemsINeedToBuy.length; i++) {
     //console.log(itemsINeedToBuy[i]);
 
     //element dinamically created
     let listEl = document.createElement("li");
     listEl.textContent = itemsINeedToBuy[i];
 
     //create a button
     let boughtButton = document.createElement("button");
     //giving the button text
     boughtButton.textContent = "BOUGHT";
     //giving the button a class
     boughtButton.setAttribute("class", "btn-danger");
     //giving the button a data attribute
     boughtButton.setAttribute("data-index", i); 
     //appending button to listEl 
     listEl.appendChild(boughtButton);
 
     // add onto the DOM by appending
     needToBuyEl.appendChild(listEl);
   }

}

//creting and event listener for the addToList button
buttonToAddToList.addEventListener("click", function (e) {
  e.preventDefault();

  //getting the valuue from giftItemInput
  let item = giftItemInput.value;

  //pushing itemsINeedToBuy onto the array
  itemsINeedToBuy.push(item);
  console.log(itemsINeedToBuy);

  //saving items on localstorage
  localStorage.setItem("need-to-buy", JSON.stringify(itemsINeedToBuy));

  renderItemsINeedToBuy(); 

});

init();