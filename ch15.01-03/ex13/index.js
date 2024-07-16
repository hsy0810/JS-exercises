// 1. nav 要素内のリンク
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => console.log(link));

// 2. 商品リスト (.product-list) 内の最初の商品 (.product-item)
const firstProductItem = document.querySelector('.product-list .product-item');
console.log(firstProductItem);

// 3. カートアイコンの画像
const cartIcon = document.querySelector('.cart img');
console.log(cartIcon);

// 4. 商品リスト (.product-list) 内の価格 (.price) を表示する要素
const priceElements = document.querySelectorAll('.product-list .price');
priceElements.forEach(price => console.log(price));

// 5. 商品リスト (.product-list) 内の全ての商品 (.product-item) の画像
const productImgs = document.querySelectorAll('.product-list .product-item img');
productImgs.forEach(img => console.log(img));

// 6. 検索バー (.search-bar) 内の検索ボタン
const searchButton = document.querySelector('.search-bar button');
console.log(searchButton);

// 7. フッター (footer) 内のパラグラフ (<p>) 要素
const footerPh = document.querySelector('footer p');
console.log(footerPh);

// 8. 商品リスト (.product-list) 内の偶数番目の商品 (.product-item)
const productItems = document.querySelectorAll('.product-list .product-item:nth-child(even)');
productItems.forEach(item => console.log(item));

// 9. ヘッダー (header) 内のアカウントリンク (.account) の画像
const accountImg = document.querySelector('header .account img');
console.log(accountImg);

// 10. ナビゲーションリンクのうち、"会社情報" のリンク
const companyLink = document.querySelector('nav a[href="#about"]');
console.log(companyLink);
