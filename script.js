// ×ボタンで画像を消す機能の追加
document.addEventListener("DOMContentLoaded", function() {
    const closeButtons = document.querySelectorAll('.close-btn',);

    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const img = button.parentElement.querySelector('img'); // ×ボタンの親要素内の画像を取得
            img.style.display = 'none'; // ×ボタンが押されたら画像を消す
            button.style.display = 'none'; // ボタン自体も消す
        });
    });
});
// ×ボタンで画像を消す機能の追加
document.addEventListener("DOMContentLoaded", function() {
    const closeButtons = document.querySelectorAll('.close-btn1',);

    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const img = button.parentElement.querySelector('img'); // ×ボタンの親要素内の画像を取得
            img.style.display = 'none'; // ×ボタンが押されたら画像を消す
            button.style.display = 'none'; // ボタン自体も消す
        });
    });
});
// ×ボタンで画像を消す機能の追加
document.addEventListener("DOMContentLoaded", function() {
    const closeButtons = document.querySelectorAll('.close-btn2',);

    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const img = button.parentElement.querySelector('img'); // ×ボタンの親要素内の画像を取得
            img.style.display = 'none'; // ×ボタンが押されたら画像を消す
            button.style.display = 'none'; // ボタン自体も消す
        });
    });
});
// ×ボタンをクリックしたら画像を消す機能
document.querySelectorAll('.close-btn11').forEach(function(btn11) {
    btn11.addEventListener('click', function(e) {
        e.stopPropagation(); // クリックイベントが親要素に伝播しないようにする
        var image = this.parentElement;
        image.style.display = 'none';
    });
});
