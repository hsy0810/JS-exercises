javascript:(function() {
    let data = {
        'date': '2024-07-10', 
        'amount': '30000', 
        'description': '出張のため', 
    };
    function fillForm() {
        document.querySelector('input[name="date"]').value = data.date;
        document.querySelector('input[name="amount"]').value = data.amount;
        document.querySelector('textarea[name="description"]').value = data.description;
    }
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', fillForm);
    } else {
        fillForm();
    }
})();
