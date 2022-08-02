// here are functions for the forms submission page

function showOrHideCommentBox() {
  if(document.getElementById("question").checked || document.getElementById("comment").checked) {
    document.getElementById("commentOrQuestionBox").hidden = false;
  }
  else {
    document.getElementById("commentOrQuestionBox").hidden = true;
  }
}

function validateForm() {
  console.log("entered 1")
  let returnVal = true
  if(!(/^([a-zA-Z]{2,})$/.test(document.forms["onlyForm"]["firstName"].value))) {
    console.log("entered 2")
    document.getElementById("firstNameErrorMessage").hidden = false;
    returnVal = false;

  }
  else {
    document.getElementById("firstNameErrorMessage").hidden = true;
  }

  if(!(/^([a-zA-Z]{2,})$/.test(document.forms["onlyForm"]["lastName"].value))) {
    document.getElementById("lastNameErrorMessage").hidden = false;
    returnVal = false;

  }
  else {
    document.getElementById("lastNameErrorMessage").hidden = true;
  }
  if(!(/^([vV]ija[yi])$/.test(document.forms["onlyForm"]["facilitator"].value))) {
    document.getElementById("passwordErrorMessage").hidden = false;
    returnVal = false;

  }
  else {
    document.getElementById("passwordErrorMessage").hidden = true;
  }

// document.getElementById("content").innerHTML = "<h1>Thanks for your submission!</h1> <p>Back end funcionality coming soon!</p>";
  return returnVal;
}