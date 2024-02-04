console.log("file connected!");

function handleBuyCourse(data, ImgSrc) {
  console.log(data);
  let courseName = data.children[1].innerText;
  let coursePrice = data.children[2].innerText;
  let coursePicture = data.children[0].children[0];
  console.log(coursePicture);

  let selectedItemDiv = document.getElementById("selected-item-div");

  // Create a new div element
  let creatingDivForCartItem = document.createElement("div");
  creatingDivForCartItem.className =
    "flex items-center justify-between my-4";

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

  // Set content for the paragraphs
  creatingPForCourseName.innerText = courseName;
  creatingPForPrice.innerHTML = coursePrice;

  // Create a button element
  let cancelButton = document.createElement("button");

  // Set content for the button
    cancelButton.innerText = "X";
    cancelButton.className ="font-semibold"

  // Add click event listener to the cancelButton
  cancelButton.addEventListener("click", function () {
    // Remove the creatingDivForCartItem when cancelButton is clicked
    creatingDivForCartItem.remove();
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
}