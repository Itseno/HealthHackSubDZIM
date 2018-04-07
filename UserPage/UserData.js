var UserI = function(){
  var x = $("#UserInfo").serializeArray();
  console.log(x);

  // console.log(PharmacyName);
  localStorage.setItem('formData', JSON.stringify(x));
}

window.onload = UserI();

var saveToLocalStorage = function (){
  PharmacyName = localStorage.getItem(x[0]);
  PharmicistName = localStorage.getItem(x[1]);
  PharmicyPhone = localStorage.getItem(x[2]);
  PECName = localStorage.getItem(x[3]);
  PECPhone = localStorage.getItem(x[4]);
  SECName = localStorage.getItem(x[5]);
  SECPhone = localStorage.getItem(x[6]);
}

// var PharmacyName = localStorage.getItem(x[0]);
// var PharmicistName = localStorage.getItem(x[1]);
// var PharmicyPhone = localStorage.getItem(x[2]);
// var PECName = localStorage.getItem(x[3]);
// var PECPhone = localStorage.getItem(x[4]);
// var SECName = localStorage.getItem(x[5]);
// var SECPhone = localStorage.getItem(x[6]);
