document.addEventListener('DOMContentLoaded', async () => {
    const infoTable = document.getElementById('info-table');

    const addRow = (label, value) => {
        const row = document.createElement('tr');
        const labelCell = document.createElement('td');
        const valueCell = document.createElement('td');

        labelCell.textContent = label;
        valueCell.textContent = value;

        row.appendChild(labelCell);
        row.appendChild(valueCell);
        infoTable.appendChild(row);
    };

    addRow('ご登録日', new Date().toLocaleDateString());
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    addRow('あなたのIPアドレス', data.ip);
    addRow('ユーザーエージェント', navigator.userAgent);
    addRow('言語', navigator.language);
    addRow('オンライン状態', navigator.onLine ? 'オンライン' : 'オフライン');
    addRow('クッキー有効', navigator.cookieEnabled ? '有効' : '無効');
    addRow('ハードウェアの並列処理能力', navigator.hardwareConcurrency);
    addRow('メモリ量 (GB)', navigator.deviceMemory);

});