

const contact = () => {
    const content = document.querySelector('#content');
    const text = document.createElement('p');
    text.textContent = "Hello World";
    content.appendChild(text);
}

export {contact};