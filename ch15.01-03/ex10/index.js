document.addEventListener('DOMContentLoaded', () => {
    const divElement = document.getElementById('editor-front');
    const inputElement = document.getElementById('editor-back');
  
    // 1. div 要素をクリックすると input 要素が focus される
    divElement.addEventListener('click', () => {
      inputElement.focus();
    });
  
    // 2. input 要素に focus されると div 要素の背景色を灰色 (silver) にする
    inputElement.addEventListener('focus', () => {
      divElement.style.backgroundColor = 'silver';
    });
  
    // input 要素から focus が外れると div 要素の背景色を白色に戻す
    inputElement.addEventListener('blur', () => {
      divElement.style.backgroundColor = 'white';
    });
  
    // 3. input 要素に入力された text を div 要素にも表示する
    inputElement.addEventListener('input', () => {
      divElement.textContent = inputElement.value;
    });
  });
  