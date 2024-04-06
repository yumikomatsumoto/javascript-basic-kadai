// btnのidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

// textのidを持つHTML要素を取得し、定数に代入する
const text = document.getElementById('text');

// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
  setTimeout(() => {
    // id=textのHTML要素の文字を変更
    text.textContent = 'ボタンをクリックしました';
  }, 2000);
});