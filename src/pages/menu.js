import '../css/menu.css';

const menu = (()=>{
    const content = document.querySelector('#content');
    const menu = document.createElement('div');
    menu.setAttribute("data-tab-content", "1");
    menu.classList.add("tab_content");
    const text = document.createElement('p');
    text.textContent = "Menu";
    menu.appendChild(text);
    content.appendChild(menu);
})();

export {menu};