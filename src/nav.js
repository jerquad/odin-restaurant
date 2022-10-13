// Creates a navigation bar to alternate between about, menu, and contact pages

import about from './about.js';
import menu from './menu.js';
import contact from './contact.js';


// generic button bindings
function bind(button, action) {
    button.addEventListener('click', () => {
        
        document.querySelector('.container').remove();
        switch (action) {
            case 'about':
                document.body.appendChild(about());
                break;
            case 'menu':
                document.body.appendChild(menu());
                break;
            case 'contact':
                document.body.appendChild(contact());
                break;
        }
    });
}

// Generic button maker
function makeButton(action) {
    const button = document.createElement('button');
    bind(button, action);
    button.innerHTML = action;
    button.setAttribute('type', 'button');
    button.setAttribute('id', `${action}`);
    return button;
}

export default function navBar() {
    const menuBox = document.createElement('div');
    menuBox.setAttribute('id', 'menu-box');
    
    const menuList = document.createElement('ul');
    menuList.setAttribute('id', 'menu-list');

    const toAdd = [ 'about', 'menu', 'contact' ];
    toAdd.forEach(item => {
        const li = document.createElement('li');
        li.appendChild(makeButton(item));
        menuList.appendChild(li);
    });

    menuBox.appendChild(menuList);
    
    return menuBox;
}