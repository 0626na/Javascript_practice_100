const inputMessage = document.querySelector("#message");
const inputBtn = document.querySelector("#submitBtn");
const message = document.querySelector(".message-content");
const emptyMessage = document.querySelector(".feedback");

function handleMessageOutput(event) {
  event.preventDefault();
  if (inputMessage.value === "") {
    showEmptyMessage();
    setTimeout(deleteEmptyMessage, 2000);
  } else {
    message.innerHTML = inputMessage.value;
    inputMessage.value = "";
  }
}

function showEmptyMessage() {
  emptyMessage.classList.remove("feedback");
  emptyMessage.classList.add("show");
}

function deleteEmptyMessage() {
  emptyMessage.classList.add("feedback");
  emptyMessage.classList.remove("show");
}

inputBtn.addEventListener("click", handleMessageOutput);
