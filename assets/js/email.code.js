
window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate the contact number value
        this.contact_number.value = Math.random() * 100000 | 0;
        emailjs.sendForm('gmail_service', 'template_SiLLBxsa', this);
    });
}
