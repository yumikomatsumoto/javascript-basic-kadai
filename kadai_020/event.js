// btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
  // id=textのHTML要素の文字を変更
  text.textContent = 'ボタンをクリックしました';
});