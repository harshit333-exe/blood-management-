document.getElementById('donorForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const bloodType = document.getElementById('bloodType').value.trim();
    
    // Input Validation
    if (!fullName || !email || !phone || !bloodType) {
        alert('Please fill in all fields.');
        return;
    }

    const donorData = { fullName, email, phone, bloodType };

    try {
        const response = await fetch('http://localhost:3000/api/register',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(donorData),
        });

        const data = await response.json();

        if (response.ok) {
            alert('Donor registered successfully!');
            // Optionally, reset the form here
            event.target.reset();
        } else {
            alert(data.message || 'Error registering donor.');
        }
    } catch (error) {
        console.error('Error:', error.message); // Log the error message
        console.error('Stack Trace:', error.stack); // Log the stack trace
        alert('An error occurred while registering. Please try again.');
    }
});