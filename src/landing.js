//Landing Page
import './landing.css';
// First Build HTML

const welcome_text = document.createElement('div');
welcome_text.className = "welcome_text";
const welcome_text_content = document.createElement('p');
welcome_text_content.textContent = "Feeling Hungry Yet?";
const welcome_button = document.createElement('button');
welcome_button.textContent = "It's Time To Eat";
welcome_button.classList.add("welcome_button");
welcome_text.appendChild(welcome_text_content);
welcome_text.appendChild(welcome_button);



export {welcome_text};

