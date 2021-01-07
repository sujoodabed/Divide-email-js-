var mailInput = document.getElementById('mail'); // تصل الي عنصر html
var nameInput = document.getElementById('name');
var domainInput = document.getElementById('domain');


function devideEmail(){
  var mailvalue = mailInput.value; //تاخد قيمة عنصر html
  var atIndex = mailvalue .indexOf('@');  // index of char (@)
  nameInput.value=mailvalue.slice(0,atIndex);  // تقتطع من السترينج من 0 لحتى الموقع المطلوب
  domainInput.value=mailvalue.slice(atIndex+1);
 // window.alert(atIndex);
}