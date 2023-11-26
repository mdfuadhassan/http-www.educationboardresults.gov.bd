let form = document.querySelector("form");
let examination = document.querySelector("#selectExamination");
let submitButton = document.querySelector("#btn");
let rollNumber = document.querySelector("#rollNo");
// let regNumber = document.querySelector("#regNo");
let sumNumber = document.querySelector("#sumNumber");
let randomNumberOne = document.querySelector("#randomNumberOne");
let randomNumberTwo = document.querySelector("#randomNumberTwo");

let randomNumber1 = Number(Math.floor(Math.random() * 9) + 1);
randomNumberOne.innerHTML = randomNumber1;

let randomNumber2 = Number(Math.floor(Math.random() * 9) + 1);
randomNumberTwo.innerHTML = randomNumber2;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const sumRandomNumber = randomNumber1 + randomNumber2;
  const sumNumberValue = sumNumber.value;
  const examName = examination.value;

  if (examName == "JSC/JDC" && sumNumberValue == sumRandomNumber) {
    location.href = "./index-2.html";
  } else if (
    examName == "HSC/Alim" &&
    rollNumber.value == 509305 &&
    sumNumberValue == sumRandomNumber
  ) {
    location.href = "./index-3.html";
  } else if (
    examName == "HSC/Alim" &&
    rollNumber.value == 509352 &&
    sumNumberValue == sumRandomNumber
  ) {
    location.href = "./sahan-result.html";
  } else if (
    examName == "HSC/Alim" &&
    rollNumber.value == 509303 &&
    sumNumberValue == sumRandomNumber
  ) {
    location.href = "./habib-result.html";
  }
});
