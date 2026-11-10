const form = document.getElementById("form");

form.addEventListener("submit", async function(event) {

    event.preventDefault();

    const email = document.getElementById("email").value;

    const response = await fetch("/subscribe", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            email: email
        })

    });

    const data = await response.json();

    document.getElementById("message").innerText = data.message;

});