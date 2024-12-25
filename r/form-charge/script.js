document.getElementById('submitBtn').addEventListener('click', function() {
    // Show the loading popup
    document.getElementById('popup').style.display = 'flex';
    
    // Simulate form submission delay
    setTimeout(function() {
        document.getElementById('popup').style.display = 'none'; // Hide loading popup
        document.getElementById('confirmation-popup').style.display = 'flex'; // Show confirmation popup
    }, 2000); // 2 seconds delay
});

// Handle exit button click
document.getElementById('exit-btn').addEventListener('click', function() {
    window.location.href = 'https://www.google.com'; // Redirect to Google
});
