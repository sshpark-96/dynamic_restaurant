import { tab_display } from "./pages/tabs";
import {landing_page} from "./pages/landing";
import { menu } from "./pages/menu";
import { contact } from "./pages/contact";

import './css/index.css';

const tab_triggers = document.querySelectorAll('.tab_link');

tab_triggers.forEach(tab =>{
    console.log(tab.textContent);
    tab.addEventListener('click',()=>{
        let tab_number = tab.dataset.tabTrigger;
        let tab_content = document.querySelector(`.tab_content[data-tab-content = "${tab_number}"]`);
        document.querySelector('.tab_link.active').classList.remove('active');
        document.querySelector('.tab_content.open').classList.remove('open');
        tab.classList.add('active');
        tab_content.classList.add('open');
    });
});
