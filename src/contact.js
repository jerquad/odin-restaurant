// Hardcoded text portion of the contact page... this could should be made dynamically :(
function makeContact() {
    const textBox = document.createElement('div');
    textBox.classList.add('text-box');
    textBox.classList.add('contact');

    const title = document.createElement('h1');
    title.innerHTML = 'CONTACT US'
    textBox.appendChild(title);

    const hoursTop = document.createElement('h2');
    hoursTop.innerHTML = 'HOURS';
    textBox.appendChild(hoursTop);
    const daily = document.createElement('p');
    daily.innerHTML = "Open Daily 5pm to 12am"
    textBox.appendChild(daily);
    const mon = document.createElement('p');
    mon.innerHTML = "CLOSED MONDAYS";
    textBox.appendChild(mon);


    const direct = document.createElement('a');
    direct.setAttribute('href', 'https://goo.gl/maps/JBjyjG25k6VWPQmHA');
    direct.innerHTML = "DIRECTIONS"
    // direct.setAttribute('type', 'button');
    textBox.appendChild(direct);

    const tel = document.createElement('p');
    tel.innerHTML = 'Telephone: 888.867.5309'
    textBox.appendChild(tel);

    return textBox;
}

export default function contact() {
    const container = document.createElement('div');
    container.classList.add('container');

    const image = document.createElement('div');
    image.classList.add('image-space');
    image.classList.add('contact-img');

    const contactArea = makeContact();

    container.appendChild(image);
    container.appendChild(contactArea);

    return container;
}