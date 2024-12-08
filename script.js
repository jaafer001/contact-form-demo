document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 


    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;


    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        document.getElementById('error-message').style.display = 'block';
    } else {
        document.getElementById('error-message').style.display = 'none';
        

        alert('Form submitted successfully!');
        document.getElementById('contactForm').reset(); 
    }
});
