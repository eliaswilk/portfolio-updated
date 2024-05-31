document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".row ul li a");

    links.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            
            links.forEach(function(link) {
                link.classList.remove("active");
            });

            link.classList.add("active");
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("home-link").classList.add("active");

});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

let scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopBtn.classList.add("show");
    } else {
        scrollToTopBtn.classList.remove("show");
    }
}

scrollToTopBtn.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};


document.getElementById("openButton1").addEventListener("click", function() {
    var popup = document.getElementById("popup");
    if (popup.classList.contains("show")) {
      popup.classList.remove("show");
    } else {
      popup.classList.add("show");
    }
  });
  
  document.getElementById("openButton2").addEventListener("click", function() {
    document.getElementById("popup").classList.add("show");
  });
  
  document.getElementById("closeButton").addEventListener("click", function() {
    document.getElementById("popup").classList.remove("show");
  });

    // POPUP TEXT
    document.getElementById('sendButton').addEventListener('click', function() {
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        const sendButton = document.getElementById('sendButton');

        // Check if empty
        if (nameInput.value === '' || emailInput.value === '' || messageInput.value === '') {
            alert('Please fill all spaces before clicking send! 😁');
            return;
        }

        nameInput.value = '';
        emailInput.value = '';
        messageInput.value = '';

        sendButton.textContent = 'Sent';

        setTimeout(function() {
            sendButton.textContent = 'Send';
        }, 2000);
    });
