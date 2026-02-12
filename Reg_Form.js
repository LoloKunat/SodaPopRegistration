document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');

    const setError = (element, message) => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');

        errorDisplay.innerText = message;
        inputControl.classList.add('error');
        inputControl.classList.remove('success');
    }

    const setSuccess = (element) => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');

        errorDisplay.innerText = '';
        inputControl.classList.add('success');
        inputControl.classList.remove('error');
    }

    const isValidEmail = email => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const isValidContact = contact => {
        const re = /^(09|\+639)\d{9}$/;
        return re.test(String(contact).replace(/\s/g, ''));
    }

    const validateInputs = () => {
        const firstName = document.getElementById("first-name");
        const lastName = document.getElementById("last-name");
        const email = document.getElementById("email");
        const contact = document.getElementById("contact");
        const bday = document.getElementById("bday");
        
        const fnameValue = firstName.value.trim();
        const lnameValue = lastName.value.trim();
        const emailValue = email.value.trim();
        const contactValue = contact.value.trim();
        const bdayValue = bday.value.trim();

        
        if (fnameValue === '') {
            setError(firstName, 'First Name is required');
        } else {
            setSuccess(firstName);
        }
        
       
        if (lnameValue === '') {
            setError(lastName, 'Last Name is required');
        } else {
            setSuccess(lastName);
        }

        
        if (emailValue === '') {
            setError(email, 'Email is required');
        } else if (!isValidEmail(emailValue)) {
            setError(email, 'Provide a valid email address');
        } else {
            setSuccess(email);
        }

       
        if (contactValue === '') {
            setError(contact, 'Contact number is required');
        } else if (!isValidContact(contactValue)) {
            setError(contact, 'Provide a valid PH mobile number (e.g., 09123456789 or +639123456789)');
        } else {
            setSuccess(contact);
        }
        
        
        if (bdayValue === '') {
            setError(bday, 'Date of Birth is required');
        } else {
            setSuccess(bday);
        }

       
        const allInputs = [firstName, lastName, email, contact, bday];
        const allValid = allInputs.every(input => 
            input.parentElement.classList.contains('success')
        );

        if (allValid) {
            document.getElementById('result-message').innerText = 'Registration Successful!';
            document.getElementById('result-percent').innerText = 'All fields are valid.';
        } else {
            document.getElementById('result-message').innerText = 'Please fix the errors above.';
            document.getElementById('result-percent').innerText = '';
        }
    };

    form.addEventListener('submit', e => {
        e.preventDefault();
        validateInputs();
    });
});