let story =
    'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(" ");
let unnecessaryWord = "literally";
let misspelledWord = "beautifull";
let badWord = "freaking";

// To count words - count variable will be incremented by 1 for each word in the storyWords array.

let count = 0;
storyWords.forEach((word) => {
    count++;
});
// console.log(count);

//Filtering the word "literally" which is declared as a vallue for the unnecessaryWord variable

storyWords = storyWords.filter((word) => {
    return word != unnecessaryWord;
});

// Replacing the misspelledWord with correct spelling

storyWords = storyWords.map((word) => {
    return word === misspelledWord ? "beautiful" : word;
});

// Replacing the bad word and logging it's index

let badWordIndex = storyWords.findIndex((word) => {
    return word === badWord;
});
// console.log(badWordIndex);

// Replacing the badWord

storyWords[78] = "really";

// Finding words longer than 10 letters and replacing it

// If false - another iterator to find the long word  and replace it with a shorter one

let lengthCheck = storyWords.every((word) => {
    return word.length < 10;
});
// console.log(lengthCheck)


// To find the word greater than 10 chars

storyWords.forEach((word) => {
    word.length > 10 && console.log(word)
});

// Finding index of the big word
let bigWord = 'breathtaking';

let bigWordIndex = storyWords.findIndex((word) => {
    return word === bigWord;
});
console.log(bigWordIndex);

// Replacing the bigWord
storyWords[111] = "glorious";


console.log(storyWords.join(" "));
