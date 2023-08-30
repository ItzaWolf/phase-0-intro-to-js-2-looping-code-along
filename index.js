// Code your solutions in this file
function writeCards(names, event) {
    const thankYouMessages = [];
    for (let i = 0; i < names.length; i++) {
      thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return thankYouMessages;
  }

  function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }

const names = ["Guadalupe", "Ollie", "Aki"];
const event = "surprise";
const thankYouMessages = writeCards(names, event);
console.log(thankYouMessages);

countDown(10);