function toggleChatBox() {
  var chatBox = document.getElementById("chatBox");
  if (chatBox.style.display === "none" || chatBox.style.display === "") {
    chatBox.style.display = "block"; // Show the chat box
  } else {
    chatBox.style.display = "none"; // Hide the chat box
  }
}

function sendMessage() {
  // Get user input message
  const userInput = document.getElementById("userInput").value.trim();

  if (userInput !== "") {
    // Display user message in chatbox
    displayMessage(userInput, "user");

    // Get bot response
    const botResponse = getBotResponse(userInput);

    // Display bot response in chatbox after a short delay (simulating bot response time)
    setTimeout(() => {
      displayMessage(botResponse, "bot");
    }, 1000);

    // Clear input field after sending message
    document.getElementById("userInput").value = "";
  }
}

function handleKeyPress(event) {
  if (event.keyCode === 13) {
    // Trigger sendMessage() when Enter key is pressed
    sendMessage();
  }
}
document
  .getElementById("userInput")
  .addEventListener("keypress", handleKeyPress);

function displayMessage(message, sender) {
  const chatBox = document.getElementById("chatBox");

  // Create message element
  const messageElement = document.createElement("div");
  messageElement.className = `chat-message ${sender}-message`;
  messageElement.innerHTML = `<span class="message-content">${message}</span>`;

  // Append message to chatbox
  chatBox.appendChild(messageElement);

  // Scroll chatbox to bottom
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(input) {
  let botResponse;

  switch (input.toLowerCase()) {
    case "i need help":
      botResponse = "How can I assist you?";
      break;
    case "credit card":
      botResponse =
        "Please email us at infoneedcreditcard@bank.com for assistance with credit cards.";
      break;
    case "address":
      botResponse = "Our office address is 72/10, Ville Parle, Mumbai, India.";
      break;
    case "hello":
      botResponse = "Hi! How can I help you?";
      break;
    case "goodbye":
      botResponse = "Goodbye! Have a great day!";
      break;
    case "services":
      botResponse =
        "We offer a range of services including banking, loans, investments, and more.";
      break;
    case "hours":
      botResponse =
        "Our business hours are from 9:00 AM to 5:00 PM, Monday to Friday.";
      break;
    case "contact":
      botResponse =
        "You can reach us at +91-1234567890 or email us at info@bank.com.";
      break;
    case "website":
      botResponse = "Visit our website at www.bank.com for more information.";
      break;
    case "net banking":
      botResponse = "You can access net banking services through our website.";
      break;
    case "banking":
      botResponse = "You can access net banking services through our website.";
      break;
    case "banking":
      botResponse = "You can access net banking services through our website.";
      break;
    case "loan application":
      botResponse =
        "To apply for a loan, please visit our nearest branch or apply online on our website.";
      break;
    case "loan":
      botResponse =
        "To apply for a loan, please visit our nearest branch or apply online on our website.";
      break;
    case "application":
      botResponse =
        "To apply for a loan, please visit our nearest branch or apply online on our website.";
      break;
    case "investment options":
      botResponse =
        "We offer various investment options including mutual funds, fixed deposits, and more. Visit our website for details.";
      break;
    case "investment":
      botResponse =
        "We offer various investment options including mutual funds, fixed deposits, and more. Visit our website for details.";
      break;
    case "options":
      botResponse =
        "We offer various investment options including mutual funds, fixed deposits, and more. Visit our website for details.";
      break;
    case "balance inquiry":
      botResponse =
        "You can check your account balance through our mobile app or by visiting an ATM.";
      break;
    case "balance":
      botResponse =
        "You can check your account balance through our mobile app or by visiting an ATM.";
      break;
    case "inquiry":
      botResponse =
        "You can check your account balance through our mobile app or by visiting an ATM.";
      break;

    case "mortgage":
      botResponse =
        "For mortgage inquiries, please contact our mortgage department at mortgageteam@bank.com.";
      break;
    default:
      botResponse =
        "I'm sorry, I didn't quite catch that. Could you please ask something else?";
      break;
  }

  return botResponse;
}
