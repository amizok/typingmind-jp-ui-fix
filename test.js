console.log("Extension loaded successfully!"); // 拡張機能が読み込まれたか確認

const hours = new Date().getHours();
const greeting = hours < 12 ? 'Good Morning!' : hours < 18 ? 'Good Afternoon!' : 'Good Evening!';
console.log("Generated greeting:", greeting); // 生成された挨拶を確認

const button = document.querySelector('[data-element-id="new-chat-button-in-side-bar"]');
if (button) {
  console.log("Button found:", button); // ボタンが見つかったか確認
  const textSpan = button.querySelector('span:last-child');
  if (textSpan) {
    console.log("Text span found:", textSpan); // テキスト部分が見つかったか確認
    console.log("Original text:", textSpan.textContent); // 変更前のテキストを確認
    textSpan.textContent = greeting;
    console.log("Text changed to:", textSpan.textContent); // 変更後のテキストを確認
  } else {
    console.log("Text span not found inside button!");
  }
} else {
  console.log("Button not found!");
}
