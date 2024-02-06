// withを利用する場合
function testWith() {
    with(document.forms[0]){
            name.value = "Jack";
            address.value = "NewYork City";
            email.value = "example@example.com";
        }
    "use strict";
}

testWith();

// function testWithOut() {
//     let f = document.forms[0];
//     f.name.value = "Jack";
//     f.address.value = "NewYork City";
//     f.email.value = "example@exampl.com";
// }