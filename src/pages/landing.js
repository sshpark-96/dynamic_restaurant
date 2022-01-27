//Landing Page
import '../css/landing.css';

const landing_page = (()=>{
    const content = document.querySelector('#content');
    //Create welcome text and button
    const welcome_text = document.createElement('div');
    welcome_text.setAttribute("data-tab-content", "0");
    welcome_text.className = "welcome_text";
    welcome_text.classList.add("open", "tab_content");
    const welcome_text_content = document.createElement('p');
    welcome_text_content.textContent = "Feeling Hungry Yet?";
    const welcome_button = document.createElement('button');
    welcome_button.textContent = "It's Time To Eat";
    welcome_button.classList.add("welcome_button");
    welcome_text.appendChild(welcome_text_content);
    welcome_text.appendChild(welcome_button);

    content.appendChild(welcome_text);
})();

export {landing_page};