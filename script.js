let quote = document.getElementById("quote");
let author_name = document.getElementById("name");
let btn = document.getElementById("btn");
let soundBtn = document.getElementById("sound");
let twitterBtn = document.getElementById("twitter");

const url = "https://api.quotable.io/random";

let getQuote = () => {
    btn.classList.add("loading");
    btn.innerText = "Loading Quote..."
    fetch(url)
        .then((data) => data.json())
        .then((item) => {
            quote.innerText = item.content;
            author_name.innerText = item.author;
            btn.innerText = "New Quote!"
            btn.classList.remove("loading");
        });
}

soundBtn.addEventListener('click', () => {
    let utterance = new SpeechSynthesisUtterance(`${quote.innerText} by ${author_name.innerText}`);
    speechSynthesis.speak(utterance)
})

twitterBtn.addEventListener('click', () => {
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quote.innerText}`;
    window.open(tweetUrl, "_blank");
})

window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);