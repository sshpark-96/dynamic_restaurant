import { tab_display } from "./pages/tabs";
import {landing_page} from "./pages/landing";
import { menu } from "./pages/menu";
import { contact } from "./pages/contact";

import './css/index.css';

const tab_triggers = document.querySelectorAll('.tab_link');
tab_triggers.forEach(tab =>{
    tab.addEventListener('click', ()=>{
        let current_tab = document.querySelector(`.link[data-tab-content = "'${tab.dataset.tabTrigger}'"]`);
        console.log(tab.textContent);
        document.querySelector('.list.active').classList.remove('active');
        document.querySelector('.tab_content.open').classList.remove('open');
        current_tab.classList.add('open');
        tab.classList.add('active');
    })
})