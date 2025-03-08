document.addEventListener('DOMContentLoaded', () => {
  const hours = new Date().getHours();
  const greeting = hours < 12 ? 'Good Morning!' : hours < 18 ? 'Good Afternoon!' : 'Good Evening!';
  const button = document.querySelector('[data-element-id="new-chat-button-in-side-bar"]');
  if (button) {
    button.childNodes[2].textContent = greeting; // childNodes[2] が正しい <span>
  } else {
    console.log("Button not found!");
  }
});
