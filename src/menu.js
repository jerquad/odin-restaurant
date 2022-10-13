// Builds the menu page, pulling food items off of food.csv and drinks from drinks.csv

import foodData from './data/food.csv';
import bevData from './data/drinks.csv';

function makeMenu(data, head) {
    const container = document.createElement('div');
    container.classList.add('text-box');

    const header = document.createElement('h1');
    header.innerHTML = head;
    container.appendChild(header);

    data.forEach(element => {
        const name = document.createElement('h3');
        name.innerHTML = element[0];
        const desc = document.createElement('p');
        desc.innerHTML = element.slice(1).toString();
        container.appendChild(name);
        container.appendChild(desc);
    });

    return container;
}

export default function menu() {
    const container = document.createElement('div');
    container.classList.add('container');

    const foodArea = makeMenu(foodData, 'FOOD');

    const topImage = document.createElement('div');
    topImage.classList.add('image-space');
    topImage.classList.add('menu-top-img');

    const bevArea = makeMenu(bevData, 'DRINK');

    const bottomImage = document.createElement('div');
    bottomImage.classList.add('image-space');
    bottomImage.classList.add('menu-bottom-img');

    container.appendChild(foodArea);
    container.appendChild(topImage);
    container.appendChild(bottomImage);
    container.appendChild(bevArea);
    
    return container;
}