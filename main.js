


let imageUrl = 'https://collectionapi.metmuseum.org/public/collection/v1/objects?isPublicDomain=true'


async function fetchIndex() {
    try{    
        const res = await fetch(imageUrl);
        const data = await res.json();
        getImage(data);
    }
    catch(e){
        console.log(e);
    }

}



function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

fetchIndex();

async function getImage(images){
    console.log(images.objectIDs.length);
    
    let url = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/' + images.objectIDs[getRandomInt(images.objectIDs.length)];
    try{    
        const res = await fetch(url);
        const data = await res.json();
        displayArt(data);
    }
    catch(e){
        console.log(e);
    }
}

const main = document.querySelector('main');


function displayArt(art){
    console.log(art);

// display art title
let section = document.createElement('section');
let h2w = document.createElement('h2');
h2w.innerHTML = art.artistDisplayName;

// artist display name
let h3 = document.createElement('h3');
h3.innerHTML = `"${art.title}"`;

section.append(h2w,h3);

// image thumbnail

let figure = document.createElement('figure');
let img = document.createElement('img');
img.src = art.primaryImageSmall;
figureCaption = document.createElement('figcaption');
figureCaption.innerHTML = art.medium +' ' + art.dimensions;
figure.append(img, figureCaption);

// 

main.append(section, figure);

}