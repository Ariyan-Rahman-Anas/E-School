// Counter variable to keep track of the cart items
let cartItemsCounter = 0;

// //onClick event functionality for a cart
function handleBuyCourse(data, ImgSrc) {
  let courseName = data.children[1].innerText;
  let coursePrice = data.children[2].innerText;

  let selectedItemDiv = document.getElementById("selected-item-div");

  // Create a new div element
  let creatingDivForCartItem = document.createElement("div");
  creatingDivForCartItem.className =
    "flex items-center justify-between my-4 pr-1 hover:bg-gray-200 rounded-md duration-500 ";

  // Create the first children div for the image, paragraphs, and cancelButton
  let firstChildrenDiv = document.createElement("div");
  firstChildrenDiv.className = "flex flex-row gap-2 items-center";

  // Create an img tag
  let creatingImgForCourseIMG = document.createElement("img");
  creatingImgForCourseIMG.className = "w-[4rem] ";

  // Set the source and alt attributes for the image
  creatingImgForCourseIMG.src = ImgSrc;
  creatingImgForCourseIMG.alt = "Course Image";

  // Create a nested div for the paragraphs
  let creatingTextContainer = document.createElement("div");
  creatingTextContainer.className = "flex flex-col items-start";

  // Create two p tags
  let creatingPForCourseName = document.createElement("p");
  let creatingPForPrice = document.createElement("p");
  creatingPForPrice.className = "text-xs font-semibold ";

  // Set content for the paragraphs
  creatingPForCourseName.innerText = courseName;
  creatingPForPrice.innerHTML = coursePrice;

  // Create a button element
  let cancelButton = document.createElement("button");

  // Set content for the button
  cancelButton.innerText = "X";
  cancelButton.className =
    "font-semibold h-[2rem] w-[2rem] p-1 rounded-full hover:text-white hover:bg-[#ff3811] duration-500 ";

  // Add click event listener to the cancelButton
  cancelButton.addEventListener("click", function () {
    // Subtract the cardPrice from the total
    let total = document.getElementById("total");
    let totalNumber = parseFloat(total.innerText);
    let cardPriceNumber = parseFloat(coursePrice); // Use coursePrice directly
    let totalPay = totalNumber - cardPriceNumber;
    let totalDigitFixed = totalPay.toFixed(2);
    total.innerText = totalDigitFixed;

    // Remove the creatingDivForCartItem when cancelButton is clicked
    creatingDivForCartItem.remove();

    // Update the cart items counter and log the updated value
    cartItemsCounter--;
    console.log("Number of items in the cart:", cartItemsCounter);

    // Update the total-items element
    let totalItems = document.getElementById("total-items");
    totalItems.innerText = cartItemsCounter;
  });

  // Append the paragraphs to the text container
  creatingTextContainer.appendChild(creatingPForCourseName);
  creatingTextContainer.appendChild(creatingPForPrice);

  // Append the img and text container to the first children div
  firstChildrenDiv.appendChild(creatingImgForCourseIMG);
  firstChildrenDiv.appendChild(creatingTextContainer);

  // Create the second children div for the cancelButton
  let secondChildrenDiv = document.createElement("div");

  // Append the cancelButton to the second children div
  secondChildrenDiv.appendChild(cancelButton);

  // Append the first and second children divs to the main div
  creatingDivForCartItem.appendChild(firstChildrenDiv);
  creatingDivForCartItem.appendChild(secondChildrenDiv);

  // Append the new div to the body or any other parent element
  selectedItemDiv.appendChild(creatingDivForCartItem);

  //total payable calculating
  cardPrice = coursePrice; // Assign the value of coursePrice to cardPrice
  let total = document.getElementById("total");
  let totalNumber = parseFloat(total.innerText);
  let cardPriceNumber = parseFloat(cardPrice);
  let totalPay = totalNumber + cardPriceNumber;
  let totalDigitFixed = totalPay.toFixed(2);
  total.innerText = totalDigitFixed;

  // Update the cart items counter and log the updated value
  cartItemsCounter++;
  console.log("Number of items in the cart:", cartItemsCounter);

  // Update the total-items element
  let totalItems = document.getElementById("total-items");
  totalItems.innerText = cartItemsCounter;
}