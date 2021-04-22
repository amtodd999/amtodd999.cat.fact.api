const catFactUrl = 'https://cat-fact.herokuapp.com/facts/random';
const catPicUrl = 'https://source.unsplash.com//random?cat'
let catFact = document.querySelector('#cat-fact');
let catImg = document.querySelector('.cat-image');
let catBtn = document.querySelector('#cat-btn');

catBtn.addEventListener("click", (e) => {
    e.preventDefault()
    async function retrieveCatFact() {
        const response = await fetch(catFactUrl)
        const data = await response.json();
        console.log(data);
        catFact.innerText = data.text;
    }
    async function retrieveCatPhoto() {
        const response2 = await fetch(catPicUrl)
        const data2 = await response2.blob();
        var catBlobUrl = URL.createObjectURL(data2);
        console.log(catBlobUrl);
        catImg.src = catBlobUrl;
    }
    retrieveCatFact();
    retrieveCatPhoto();
})