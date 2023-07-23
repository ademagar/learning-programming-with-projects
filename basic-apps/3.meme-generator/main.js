
const generateMemeBtn = document.querySelector('.meme-generator__button'); 
const memeImage = document.querySelector('.meme-generator img');
const memeTitle = document.querySelector('.meme-generator__title p');
const memeAuthor = document.querySelector('.meme-generator__author span');

const updateDetails = (url, title, author) => {
    memeImage.setAttribute("src", url);
    memeTitle.innerHTML= title;
    memeAuthor.innerHTML= `Meme by: ${author}`;
};

const generateMeme = () => {
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then((response) => response.json())
    .then((data) => {
        updateDetails (data.url, data.title, data.author);
    });
};

generateMemeBtn.addEventListener("click", generateMeme);

generateMeme();