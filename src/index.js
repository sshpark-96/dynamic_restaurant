import './index.css';

// Top section with header + Welcome picture
const top = document.createElement('div');
top.className = "top";
//  make header with logo and tab buttons
const content = document.querySelector('#content');
const header = document.createElement('header');
const logo = document.createElement('div');
logo.className = "logo";
// menu items
const tabs = document.createElement('ul');
tabs.className = "tabs";
let tabs_items = ['Home', 'Menu', 'Contact Us'];
for(let item of tabs_items){
    let tab = document.createElement('li');
    let link = document.createElement('a');
    link.textContent = item;
    tab.appendChild(link);
    tabs.appendChild(tab);
}

header.appendChild(logo);
header.appendChild(tabs);
top.appendChild(header);

// make section with call to action text and buttons 

const welcome_text = document.createElement('div');
welcome_text.className = "welcome_text";
const welcome_text_content = document.createElement('p');
welcome_text_content.textContent = "The Freshest \r\nBake In Town";
welcome_text.appendChild(welcome_text_content);
top.appendChild(welcome_text);


content.appendChild(top);

