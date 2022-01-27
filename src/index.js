import { tab_display } from "./pages/tabs";
import {landing_page} from "./pages/landing";
import { menu } from "./pages/menu";
import { contact } from "./pages/contact";


const content = document.querySelector("#content");

tab_display();
landing_page();

const buttons = document.querySelectorAll('.link');

buttons.forEach(button =>{
    button.addEventListener('click', ()=>{
        content.removeChild(content.lastChild);
        if(button.id === "Home"){
            landing_page();
        } else if(button.id === "ContactUs"){
            contact();
        } else {
            menu();
        }
    });
});