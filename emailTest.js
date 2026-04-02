

emailjs.init("SwcTgAnpiF9FzPzBe");


window.onload = function() {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const templateParams = {
            name: document.getElementById("firstName").value,
            email: document.getElementById("customerEmail").value,
            message: document.getElementById("customerMessage").value
        };

        emailjs.send("service_n95gjhb", "template_k0k9f9s", templateParams)
            .then(function(response) {
                alert("Email success");
                console.log("SUCCESS!", response.status, response.text);
            }, function(error) {
                alert("Email failed");
                console.error("FAILED...", error);
            });
    });
};