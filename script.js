AOS.init();
const quotes = document.getElementById("quotes");
const author = document.getElementById("author");
const newQ = document.getElementById("newQ");
const tweetMe = document.getElementById("tweetMe");

let realData ="";
let quotesData = "";

const getNewQuotes = () => {
    let rnum = Math.floor(Math.random() * 15); //because 16 is length
    // console.log(rnum);
    // console.log(realData[rnum].author.split(",")[0]);
    quotesData = realData[rnum];
    quotes.innerText = `${quotesData.text}`;
    quotesData.author == "type.fit" ?
    (author.innerText = "Unknown") :
    (author.innerText = `By ${quotesData.author.split(",")[0]}`);
}

const getQuotes = async () => {
const api = "https://type.fit/api/quotes";
try {
    let data = await fetch(api);
    realData = await data.json();
    // console.log(realData[1].text);
    // console.log(realData[1].author);
    // console.log(realData.length);
    getNewQuotes();
} catch(e) {
    console.log(e);
}
}

const tweetNow = () => {
    let tweetPost = `https://twitter.com/intent/tweet?text=${quotesData.text} ${quotesData.author}`;
    window.open(tweetPost);
}

newQ.addEventListener("click", getNewQuotes);
tweetMe.addEventListener("click", tweetNow);
getQuotes();
