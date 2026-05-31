
emailjs.init("SwcTgAnpiF9FzPzBe");


window.onload = function() {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        firstNameEle = document.getElementById("firstName");
        lastNameEle = document.getElementById("lastName");
        userEmailEle = document.getElementById("customerEmail");
        userMSGEle = document.getElementById("customerMessage")

        if (isValidEmail(userEmailEle.value) == false) {
            alert("Invalid Email!")
            return;
        }

        const templateParams = {
            first: firstNameEle.value,
            last: lastNameEle.value,
            email: userEmailEle.value,
            message: userMSGEle.value
        };

        emailjs.send("service_n95gjhb", "template_k0k9f9s", templateParams)
            .then(function(response) {
                alert("Email success");
                console.log("SUCCESS!", response.status, response.text);
                firstNameEle.value = "";
                lastNameEle.value = "";
                userEmailEle.value = "";
                userMSGEle.value = "";
            }, function(error) {
                alert("Email failed");
                console.error("FAILED...", error);
            });
    });
};

function isValidEmail(email) {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function addEvents() {
    let burger = document.getElementById("menu-image");
    let overlay = document.getElementById("overlayMenu");

    burger.addEventListener('click', () => {
        overlay.style.display = 'flex';
    });

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.style.display = 'none';
        }
    });
}

function main() {
    addEvents();
}

window.addEventListener("DOMContentLoaded", main);