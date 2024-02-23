document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const formMessage = document.getElementById('form-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting traditionally

        // Clear previous messages
        formMessage.textContent = '';
        
        // Collect form data
        const formData = {
            name: form.elements['name'].value.trim(),
            email: form.elements['email'].value.trim(),
            message: form.elements['message'].value.trim()
        };
        
        let isValid = true;

        // Basic validation
        if (!formData.name) {
            isValid = false;
            formMessage.textContent += 'Name is required. ';
        }
        if (!formData.email) {
            isValid = false;
            formMessage.textContent += 'Email is required. ';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) { 
            isValid = false;
            formMessage.textContent += 'Email is invalid. ';
        }
        if (!formData.message) {
            isValid = false;
            formMessage.textContent += 'Message is required. ';
        }

        if (!isValid) {
            return;
        }

        // send formData to a server, log for demonstration
        console.log(formData); 
        
        // Display a confirmation message and reset form if valid
        formMessage.textContent = 'Thank you for your message!';
        form.reset();
    });
});
