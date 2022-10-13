// Creates the site's header, details are hardcoded

export default function head() {
    const head = document.createElement('div');
    head.setAttribute('id', 'header');

    const nameBox = document.createElement('div');
    nameBox.setAttribute('id', 'name-box');

    const name1 = document.createElement('h1');
    name1.textContent = 'The Forest Critter'
    const name2 = document.createElement('h4');
    name2.textContent = 'and the';
    const name3 = document.createElement('h1');
    name3.textContent = 'The Cooking Utensil';
    const name4 = document.createElement('h5');
    name4.textContent = 'a  new concept restaurant concept';

    nameBox.appendChild(name1);
    nameBox.appendChild(name2);
    nameBox.appendChild(name3);
    nameBox.appendChild(name4);
    head.appendChild(nameBox);

    return head;
}