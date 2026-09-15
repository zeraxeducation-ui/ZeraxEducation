// =====================
// SEARCH FUNCTION
// =====================
function searchSite() {
    let input = document.getElementById("searchBox").value.toLowerCase();

    if (input.includes("jee main")) {
        window.location.href = "jee-main.html";
    }
    else if (input.includes("jee advanced")) {
        window.location.href = "jee-advanced.html";
    }
    else if (input.includes("college")) {
        window.location.href = "colleges.html";
    }
    else if (input.includes("article")) {
        window.location.href = "articles.html";
    }
    else {
        alert("No results found");
    }
}


// =====================
// CHAT TOGGLE BUTTON
// =====================
function toggleChat() {
    const box = document.getElementById("chatBox");

    if (box.classList.contains("active")) {
        box.classList.remove("active");
    } else {
        box.classList.add("active");
    }
}


// =====================
// ENTER KEY SUPPORT
// =====================
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("chatInput")
        .addEventListener("keypress", function (e) {
            if (e.key === "Enter") {
                sendMsg();
            }
        });
});
function sendMsg() {
    let input = document.getElementById("chatInput");
    let body = document.getElementById("chatBody");

    let msg = input.value;

    if (!msg) return;

    body.innerHTML += "<p><b>You:</b> " + msg + "</p>";

    let reply = "I don't understand.";

    if (msg.toLowerCase().includes("jee")) {
        reply = "JEE has Main and Advanced.";
    }
    else if (msg.toLowerCase().includes("college")) {
        reply = "Check the Colleges section.";
    }
    else if (msg.toLowerCase().includes("hi")) {
        reply = "Hello! Welcome to Zerax.";
    }

    body.innerHTML += "<p><b>Zerax:</b> " + reply + "</p>";

    input.value = "";
    body.scrollTop = body.scrollHeight;
}
new Date("May 21, 2026 09:00:00")

