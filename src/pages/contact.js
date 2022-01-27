

const contact = (() => {
    const content = document.querySelector('#content');
    const contact = document.createElement('div');
    contact.classList.add("tab_content");
    contact.setAttribute("data-tab-content", "2");
    const text = document.createElement('p');
    text.textContent = "Hello World";
    contact.appendChild(text);
    content.appendChild(contact);
})();

export {contact};