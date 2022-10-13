// Initial load-in for site, generates head, navigation, and loads the about page

import './style.css';
import head from './head.js';
import about from './about.js';
import navBar from './nav.js';

document.body.appendChild(head());
document.body.appendChild(navBar());
document.body.appendChild(about());