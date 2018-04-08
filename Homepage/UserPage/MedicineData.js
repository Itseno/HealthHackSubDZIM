var Med = function(){
  var y = $("#MedicineInfo").serializeArray();
  console.log(y);

  // console.log(PharmacyName);
  localStorage.setItem('MedData', JSON.stringify(y));
}



var MedFunction = function (){
  MedicineName = localStorage.getItem(y[0]);
  Manufacturer = localStorage.getItem(y[1]);
  MedDesc = localStorage.getItem(y[2]);
  datetime = localStorage.getItem(y[3]);
}

// var PharmacyName = localStorage.getItem(x[0]);
// var PharmicistName = localStorage.getItem(x[1]);
// var PharmicyPhone = localStorage.getItem(x[2]);
// var PECName = localStorage.getItem(x[3]);
// var PECPhone = localStorage.getItem(x[4]);
// var SECName = localStorage.getItem(x[5]);
// var SECPhone = localStorage.getItem(x[6]);
