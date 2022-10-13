import Data from './data/about.csv';

// creates the text portion of the about page, pulling all data from the about.csv
function makeText() {
    const textArea = document.createElement('div');
    textArea.classList.add('content-box');
    textArea.classList.add('text-box');
    Data.forEach(element => {
        const head = document.createElement('h2');
        console.log( element[0]);
        head.innerHTML = element[0];
        
        const body = document.createElement('p');
        body.innerHTML = element.slice(1).toString();
        
        textArea.appendChild(head);
        textArea.appendChild(body);
    });
    return textArea;
}

export default function about() {
    const container = document.createElement('div');
    container.classList.add('container');

    const textArea = makeText();
    
    const imageBox = document.createElement('div');
    imageBox.classList.add('image-space');
    imageBox.classList.add('about-img');

    container.appendChild(textArea);
    container.appendChild(imageBox);

    return container;
}