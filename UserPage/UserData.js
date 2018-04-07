function UserI() {
var x = $("#UserInfo").serializeArray();
console.log(x);

var PharmacyName = x[0].value;
var PharmicistName = x[1];
var PharmicyPhone = x[2];
var PECName = x[3];
var PECPhone = x[4];
var SECName = x[5];
var SECPhone = x[6];

console.log(SECPhone);
}
