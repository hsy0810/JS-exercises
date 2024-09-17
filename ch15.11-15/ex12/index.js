document.getElementById('uploadForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const accessToken = document.getElementById('accessToken').value;
    const fileInput = document.getElementById('fileInput').files[0];

    if (!fileInput) {
        alert('ファイルを選択してください。');
        return;
    }

    const fileName = fileInput.name;
    const uploadUrl = `https://graph.microsoft.com/v1.0/me/drive/root:/${fileName}:/content`;

    try {
        const response = await fetch(uploadUrl, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': fileInput.type
            },
            body: fileInput
        });

        if (!response.ok) {
            throw new Error(`アップロード失敗: ${response.statusText}`);
        }

        alert('ファイルが正常にアップロードされました。');
    } catch (error) {
        alert(error.message);
    }
});
