function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    
    if (userInput.trim() !== "") {
      var chatLog = document.getElementById("chat-log");
      chatLog.innerHTML += "<p><strong>Вы:</strong> " + userInput + "</p>";
      document.getElementById("user-input").value = "";
      
      var botResponse = "Привет! Я бот. Как я могу помочь?";
      chatLog.innerHTML += "<p><strong>Бот:</strong> " + botResponse + "</p>";
      
      chatLog.scrollTop = chatLog.scrollHeight;
    }
  }








