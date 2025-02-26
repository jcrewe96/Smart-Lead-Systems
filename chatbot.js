document.addEventListener("DOMContentLoaded", function() {
    const chatbotBox = document.getElementById("chatbot-box");
    const chatBody = document.getElementById("chat-body");

    function toggleChat() {
        chatbotBox.style.display = chatbotBox.style.display === "block" ? "none" : "block";
        if (chatBody.innerHTML === "") {
            appendMessage("bot", "Hi there! How can I help you today?");
        }
    }

    function sendMessage() {
        let input = document.getElementById("chat-input").value.trim();
        if (!input) return;

        appendMessage("user", input);
        document.getElementById("chat-input").value = "";

        setTimeout(() => {
            let botResponse = getBotResponse(input);
            appendMessage("bot", botResponse);
        }, 1000);
    }

    function appendMessage(sender, message) {
        let chatMessage = document.createElement("div");
        chatMessage.className = sender === "user" ? "user-message" : "bot-message";
        chatMessage.innerText = message;
        chatBody.appendChild(chatMessage);
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    function getBotResponse(input) {
        const responses = {
            "hello": "Hi there! How can I assist you today?",
            "pricing": "Our pricing starts at £250 for AI chatbots. Want a tailored quote?",
            "services": "We offer AI chatbots, lead capture forms, and targeted ad campaigns.",
            "contact": "You can reach us via our contact form or email info@smartleadsystems.co.uk.",
            "default": "I'm here to help! What do you need assistance with?"
        };
        return responses[input.toLowerCase()] || responses["default"];
    }

    function handleKeyPress(event) {
        if (event.key === "Enter") sendMessage();
    }

    window.toggleChat = toggleChat;
    window.sendMessage = sendMessage;
    window.handleKeyPress = handleKeyPress;
});
