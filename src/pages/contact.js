import '../css/contact.css';

const contact = (() => {
    const content = document.querySelector('#content');
    const contact = document.createElement('div');
    contact.classList.add("tab_content", "contact_page");
    contact.setAttribute("data-tab-content", "2");
    
    const map = document.createElement('div');
    map.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7101541.931922254!2d20.196066924056538!3d-29.645817088872853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e957201659e7bf3%3A0xa23df0d0307e54dd!2sMcDonald&#39;s%20Mall%20of%20Africa!5e0!3m2!1sen!2sus!4v1643329779190!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
    map.classList.add('map');

    const form = document.createElement('form');
    form.classList.add("contact_form");
    form.setAttribute("action", "#");
    form.innerHTML= '<label for="name">Your Name:</label><br><input type="text" name="name""><br><label for="phone">Your Number:</label><br><input type="tel" name="phone"><br><label for="text">Your Message</label><br><textarea name="text" class="form_text" rows="4" cols="50" value="What would you like to tell us?"></textarea><br><input type="submit" value="Submit"></input>';

    contact.appendChild(map);
    contact.appendChild(form);

    content.appendChild(contact);

})();

export {contact};