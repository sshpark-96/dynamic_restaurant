import './index.css';
import { welcome_text } from './landing';
import { test } from './menu';

// Top section with header + Welcome picture
const top = document.createElement('div');
top.className = "top";
//  make header with logo and tab buttons
const content = document.querySelector('#content');
const header = document.createElement('header');
const logo = document.createElement('div');
logo.className = "logo";
logo.textContent = "HungryHippo"
// menu items
const tabs = document.createElement('ul');
tabs.className = "tabs";
let tabs_items = ['Home', 'Menu', 'Contact Us'];
for(let item of tabs_items){
    let tab = document.createElement('li');
    let link = document.createElement('a');
    link.classList.add("tab_a");
    link.id = item.replace(/\s/g, '');
    link.textContent = item;
    tab.appendChild(link);
    tabs.appendChild(tab);
}

header.appendChild(logo);
header.appendChild(tabs);
top.appendChild(header);

// Here, depending on what button is clicked, It should display different stuff

top.appendChild(welcome_text);
content.appendChild(top);

const buttons = document.querySelectorAll(".tab_a");
buttons.forEach(button =>{
    button.addEventListener('click', ()=>{
        let top_update = document.querySelector(".top");
        top_update.removeChild(top_update.lastChild);
        if(button.id === "Home"){
            top_update.appendChild(welcome_text);
        } else if(button.id === "Menu"){
            top_update.appendChild(test);
        } else if(button.id === "ContactUs"){
            top_update.appendChild(welcome_text);
        }
    });
});

