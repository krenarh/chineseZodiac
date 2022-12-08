// let yearOfBirth = prompt("Please enter your year of birth");
// let parsedYOB = parseInt(yearOfBirth);
// let chineseYear = (parsedYOB - 4) % 12;
// if ((parsedYOB > 2022) || (parsedYOB < 1900)) {
//     alert(`Come on, we both know you haven't been born in the year ${parsedYOB}, its simply impossible`)
//     //I chose alert instead of console.log because not everyone knows how to access the console.
// } else if ((parsedYOB >= 1900) && (parsedYOB <= 2022)) {
//     if (chineseYear === 0) {
//         alert("Your Chinese Zodiac sign is: Rat")
//     } else if (chineseYear === 1) {
//         alert("Your Chinese Zodiac sign is: Ox");
//     } else if (chineseYear === 2) {
//         alert("Your Chinese Zodiac sign is: Tiger");
//     } else if (chineseYear === 3) {
//         alert("Your Chinese Zodiac sign is: Rabbit");
//     } else if (chineseYear === 4) {
//         alert("Your Chinese Zodiac sign is: Dragon");
//     } else if (chineseYear === 5) {
//         alert("Your Chinese Zodiac sign is: Snake");
//     } else if (chineseYear === 6) {
//         alert("Your Chinese Zodiac sign is: Horse");
//     } else if (chineseYear === 7) {
//         alert("Your Chinese Zodiac sign is: Goat");
//     } else if (chineseYear === 8) {
//         alert("Your Chinese Zodiac sign is: Monkey");
//     } else if (chineseYear === 9) {
//         alert("Your Chinese Zodiac sign is: Rooster");
//     } else if (chineseYear === 10) {
//         alert("Your Chinese Zodiac sign is: Dog");
//     } else if (chineseYear === 11) {
//         alert("Your Chinese Zodiac sign is: Pig");
//     }
// } else {
//     alert("Thats not a year, refresh and try again.")
// }


let zodiacSign = ["Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"];
let yearOfBirth = prompt("Please enter your year of birth");
let parsedYOB = parseInt(yearOfBirth);
let chineseYear = (parsedYOB - 4) % 12;
if ((parsedYOB >= 1900) && (parsedYOB <= 2022)) {
    chineseYear = zodiacSign[chineseYear];
    alert(`Your Chinese Zodiac sign is: ${chineseYear}`)
} else if ((parsedYOB > 2022) || (parsedYOB < 1900)) {
    alert(`Come on, we both know you haven't been born in the year ${parsedYOB}, its simply impossible`);
} else {
    alert("Thats not a year, refresh and try again.");
}
