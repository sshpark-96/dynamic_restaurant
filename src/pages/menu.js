import '../css/menu.css';
import burger from '../img/burger.jpg';
import cake from '../img/cake.jpg';
import ramen from '../img/ramen.jpg';
import salad from '../img/salad.jpg';
import toast from '../img/toast.jpg';

const menu = (()=>{
    let menu_items = [
        {
            "name": "Super Good Ramen",
            "desc": "It's pretty good. And it's ramen. That's all I need to say.",
            "price": 10.95,
            "pic": ramen
        },
        {
            "name": "Heart Attack Burger",
            "desc": "Redbull gives you wings, this burger gives you a heart attack. In a good way.",
            "price": 11.59,
            "pic": burger
        },
        {
            "name": "Berry Sweet Toast",
            "desc": "It has berries, and it's sweet. And bananas. Can't get any better than this for a toast.",
            "price": 10.95,
            "pic": toast
        },
        {
            "name": "Garden Green Salad",
            "desc": "It's grass. Lots of grass. And some eggs. I can feel the healthiness running through my veins.",
            "price": 9.95,
            "pic": salad
        },
        {
            "name": "Fruity Cake",
            "desc": "It has fruits. And cake. Classic.",
            "price": 6.59,
            "pic": cake
        },
    ];

    const content = document.querySelector('#content');
    const menu = document.createElement('div');
    menu.setAttribute("data-tab-content", "1");
    menu.classList.add("tab_content", "menu_items");

    menu_items.forEach((item, index)=>{
        let menu_item = document.createElement('div');
        menu_item.classList.add('menu_item');
        menu_item.setAttribute("data-menu-item", index);

        let item_img = document.createElement('img');
        item_img.setAttribute("src", item.pic);

        let item_text = document.createElement('div');
        item_text.classList.add('item_text');
        let item_name = document.createElement('h3');
        let item_desc = document.createElement('p');
        item_desc.classList.add('item_desc');
        let item_price = document.createElement('p');
        item_price.classList.add('item_price');
        item_name.textContent = item.name;
        item_desc.textContent = item.desc;
        item_price.textContent = item.price;

        item_text.appendChild(item_name);
        item_text.appendChild(item_desc);
        item_text.appendChild(item_price);

        menu_item.appendChild(item_img);
        menu_item.appendChild(item_text);

        menu.appendChild(menu_item);
    });


    
    content.appendChild(menu);
})();

export {menu};