//Selecting DOM Elements
const logo = document.querySelector("#logo");
const inputTextArea = document.querySelector("#inputTextArea");
const outputTextArea = document.querySelector("#outputTextArea");
const loader = document.querySelector("#loader");
const copyText = document.querySelector("#copyText");
const messageCopy = document.querySelector("#messageCopy");
const enter = document.querySelector("#enter");
const messageEnter = document.querySelector("#messageEnter");
var outputText;
var inputText;

//Event Listeners
logo.addEventListener("click", reloadPage);
enter.addEventListener("click", convertTextCase);
copyText.addEventListener("click", copyTextToClip);

//Functions

//reloadPage() - to reload page when logo is clicked
function reloadPage() {
  window.location.reload();
}

//convertTextCase() - takes the value of inputTextArea as input - changes the cases to normal case - displays the new text as output in outputTextArea
function convertTextCase() {
  console.log(inputTextArea.value);
  if(inputTextArea.value == ""){
    messageEnter.classList.add("animate-vibrate");
    messageEnter.classList.remove("hidden");
    setTimeout(() => {
      messageEnter.classList.add("hidden")
    }, 2000);
  }
  else{
    inputText = inputTextArea.value;
    outputText = computeOutput(inputText);
    outputTextArea.innerHTML = outputText;
  }
}

function computeOutput(input) {
  let outputText = "";
  const sentencesArr = input.split(".");
  sentencesArr.forEach((sentence, index) => {
    let wordsArr = sentence.trim().split(" ");
    sentence = "";
    wordsArr.forEach((word, index) => {
      if (index == 0 || word.charAt(0) == "/" || word.charAt(0) == ":") {
        if(index == 0)
          word = word.charAt(0).toUpperCase() + word.slice(1);
        else if(word.charAt(0) == "/")
          word = word.charAt(1).toUpperCase() + word.slice(2);
        else
          word = word.slice(1).toUpperCase();
        
        sentence += word + " ";
      } else if (index == wordsArr.length - 1) {
        word = word.toLowerCase();
        sentence += word;
      } else {
        word = word.toLowerCase();
        sentence += word + " ";
      }
    });
    if(index == sentencesArr.length -1){
      if(sentence.charAt(sentence.length -1) == "."){
        outputText += sentence;
      }
      else{
        outputText += sentence + ".";
      }
    }
    else
      outputText += sentence + ". ";
  });

  return outputText;
}

function copyTextToClip() {
  if(outputText == undefined){
    messageCopy.classList.contains("bg-green-500")
      messageCopy.classList.remove("bg-green-500")
    messageCopy.classList.add("bg-red-500")
    messageCopy.classList.add("animate-vibrate");
    messageCopy.innerHTML = "Please Enter Input Text"
    messageCopy.classList.remove("hidden")
    setTimeout(() => {
      messageCopy.classList.add("hidden")
      messageCopy.classList.remove("animate-vibrate");
    }, 1500)
  }
  else{
    navigator.clipboard.writeText(outputText)
    .then(() => {
      if(messageCopy.classList.contains("bg-red-500"))
        messageCopy.classList.remove("bg-red-500")
      messageCopy.classList.add("bg-green-500")
      messageCopy.innerHTML = "Copied!"
      messageCopy.classList.remove("hidden")
      setTimeout(() => {
        messageCopy.classList.add("hidden")
      }, 2100)
    })
    .catch((err) => {
      console.log(err);
    }
  )
}  
}
