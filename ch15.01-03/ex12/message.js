//送信ボタンを押すと、成功メッセージを表示する
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('expense-form').addEventListener('submit', function(event) {
        event.preventDefault();
        document.getElementById('success-message').style.display = 'block';
    });
});