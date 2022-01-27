import "../css/tabs.css";

const tab_display = () =>{
    const content = document.querySelector('#content');
    const nav_bar = document.createElement('nav');
    nav_bar.className = "nav_bar";
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
        link.classList.add("link");
        link.id = item.replace(/\s/g, '');
        link.textContent = item;
        tab.appendChild(link);
        tabs.appendChild(tab);
    }

    nav_bar.appendChild(logo);
    nav_bar.appendChild(tabs);
    content.appendChild(nav_bar);
}

export {tab_display};
