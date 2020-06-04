  //from524
  var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

var processOrder = function () {
    "use strict";
    var header, html, required, msg, email, phone,  
    //524-531-country, contact,terms,
    name, addressType, address, roomNumber, city, state, zip, apartment,
    pizzaType, pizzaSize, cheesType, sauceType, toppings, requiredT, html_pizza;

    header = "";
    html = "";
    required = "<span>Required</span>";
    msg = "<span>Please fill all required fields</span>";
    email = $("uemail").value;
    phone = $("uphone").value;
    // country = $("country").value;
    //524
    name = $('uname').value;
    addressType = $('address-type').value;
    address = $('uaddress').value;
    apartment = $('uapartment').value;
    roomNumber = $('room-number').value;
    city = $('ucity').value;
    state = $('ustate').value;
    zip = $('uzip').value;
    requiredT = 'Required!!!'

    pizzaType = $('pizza-type');//or #p-type
    pizzaSize = document.getElementsByClassName('sss');
    html_pizza = '';

    // validation
//*********************** */
// validate the email entry with a regular expression: https://www.formget.com/form-validation-using-javascript/
var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
//orL: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//or:  /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
//or?:  /^[w-.+]+@[a-zA-Z0-9.]+.[a-zA-Z0-9]{2,4}$/;
    if (email === "") {
        email = required;
        header = msg;
        $('nova-em').innerHTML = required;
    } else if ( !emailPattern.test(email) ) {
       // email = 'Must be a valid email';
       email = "<span>Please write a valid email</span>";
       $('nova-em').innerHTML = '<span>Please write a valid email</span>';
        $('uemail').style.borderColor = 'red';
       header = msg;
//isValid = false;
//return false;
    } else {
        $('uemail').style.borderColor = 'green';
         $('invalid-e').classList.add('hidden');
        $('valid-e').classList.add('show');
        $('nova-em').classList.add('green');
        $('nova-em').innerHTML = 'Valid';
       // email.style.borderColor = 'green';
    }
 
// validate the phone entry*********************
//or: regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
var numericExpression = /^[0-9]+$/;
    if (phone === "") {
        phone = required;
        $('nova-p').innerHTML = required;
        header = msg;
    //    $('valid-p').classList.add('hidden');
    } else if ( phone.length != 10 ) {
        phone = "<span>Use 10 digital format.</span>";
        $('uphone').style.borderColor = 'red';
        $('nova-p').innerHTML = '<span>Use 10 digital format</span>';
        header = msg;
       // isValid = false;
    } else if (!numericExpression.test(phone)) {
        phone = 'Please write a valid phone';
        $('nova-p').innerHTML = '<span>Please write a valid phone</span>';
       header = msg;
        //zip.classList.add('borderRed');
    } else {
        $('uphone').style.borderColor = 'green';
        // $('invalid').style.visibility = 'hidden';
        // $('invalid').style.display = 'none';
        // $('valid').style.visibility = 'hidden';
        $('invalid-p').classList.add('hidden');
        $('valid-p').classList.add('show');
        $('nova-p').classList.add('green');
        $('nova-p').innerHTML = 'Valid';
    }
    // if (country === "") {
    //     country = required;
    //     header = msg;
    // }
// validate the name entry*********************
    var alphaExp = /^[a-zA-Z]+$/;
    if (name === "") {
        name = required;
        header = msg;
        $('nova-name').innerHTML = required;
    } else if (!alphaExp.test(name)) {
        name = 'Please write a valid name';
       $('uname').classList.add('borderRed');
       $('nova-name').innerHTML = '<span>Please write a valid name</span>';
      header = msg;
      //  return false;
    } else {
        $('uname').style.borderColor = 'green';
        $('invalid-n').classList.add('hidden');
        $('valid-n').classList.add('show');
        $('nova-name').innerHTML = 'Valid';
        $('nova-name').classList.add('green');
    }
    
//525
// address type*********************
if (addressType === "") {
        addressType = required;
        header = msg;
    } 
    else if (addressType === "other"){
var yourOtherAddressType =   prompt('Please enter your Address Type here:');
addressType === yourOtherAddressType;
    } else {
         $('invalid-at').classList.add('hidden');
        $('valid-at').classList.add('show');
        $('nova-adt').classList.add('green');
        $('nova-adt').innerHTML = 'Valid';
    }
// validate the address entry*********************
var alphaExp = /^[0-9a-zA-Z]+$/;
if (address === "") {
        address = required;
        header = msg;
        $('nova-adr').innerHTML = required;
    } else if (!alphaExp.test(address)) {
        address = 'Please write a valid address';
        $('uaddress').style.borderColor = 'red';
        $('nova-adr').innerHTML = '<span>Please write a valid address</span>';
      //  header = msg;
       // address.classList.add('borderRed');
      //  return false;
    } else {
        $('uaddress').style.borderColor = 'green';
         $('invalid-a').classList.add('hidden');
        $('valid-a').classList.add('show');
        $('nova-adr').classList.add('green');
        $('nova-adr').innerHTML = 'Valid';
    }
// validate the city entry*********************
//or: /^[a-zA-Z\s,.'-]{5,}$/;
var alphaExp = /^[a-zA-Z]+$/;
    if (city === "") {
        city = required;
        header = msg;
        $('nova-ci').innerHTML = required;
    } else if (!alphaExp.test(city)) {
        city = 'Please write a valid city';
        $('ucity').style.borderColor = 'red';
        $('nova-ci').innerHTML = '<span>Please write a valid city</span>';
      header = msg;
        //('ucity').classList.add('borderRed');
      //  return false;
    } else {
        $('ucity').style.borderColor = 'green';
         $('invalid-c').classList.add('hidden');
        $('valid-c').classList.add('show');
        $('nova-ci').classList.add('green');
        $('nova-ci').innerHTML = 'Valid';
    }
// validate the state entry*********************
//or: regex = /^[A-Za-z]{2}$/;-for 2 length
var alphaExp = /^[a-zA-Z]+$/;    
if (state === "") {
        state = required;
        $('nova-st').innerHTML = required;
       // isValid = false;
        header = msg;
    } else if ( state.length != 2 ) {
       // $("#state").next().text("Use 2-character code.");
       state = '<span>Use 2-character code.</span>';
       $('ustate').style.borderColor = 'red';
       $('nova-st').innerHTML = '<span>Use 2-character code.</span>';
      header = msg;
       // isValid = false;
    } else if (!alphaExp.test(state)) {
       state = 'Please write a valid state';
      header = msg;
       // ('ustate').classList.add('borderRed');
      //  return false;
    } else {
            $('ustate').style.borderColor = 'green';
             $('invalid-s').classList.add('hidden');
        $('valid-s').classList.add('show');
        $('nova-st').classList.add('green');
        $('nova-st').innerHTML = 'Valid';
        }
//     else { 
//  //   { $("ustate").next().text(""); }
// //  state = $("ustate").val(state);
// $('invalid').style.display = 'none';
//     $('ustate').style.borderColor = 'green';
//    // state.classList.add('borderGreen');
// }
    // if (targetVal == "") {
    //     document.getElementById('deliveryAdd_8').style.borderColor = 'red';
    // } else {
    //     document.getElementById('deliveryAdd_8').style.borderColor = '#ced4da';
    // }
// validate the zip-code entry**********************
//or: /(^\d{5}$)|(^\d{5}-\d{4}$)/;  
var numericExpression = /^[0-9]+$/;
if (zip === "") {
        zip = required;
        $('nova-z').innerHTML = required;
        //$('invalid').style.display='block';
        // $('valid').style.display='none';
       // isValid = false;
        header = msg;
    } else if ( zip.length != 5 ) {
        zip = "<span>Use 99999 format.</span>";
        $('uzip').style.borderColor = 'red';
        header = msg;
        $('nova-z').innerHTML = '<span>Use 5-character format</span>';
       // isValid = false;
    } else if (!numericExpression.test(zip)) {
        zip = 'Please write a valid zip';
        header = msg;
        $('nova-z').innerHTML = '<span>Please write a valid zip</span>';
        //zip.classList.add('borderRed');
    } else {
        $('uzip').style.borderColor = 'green';
         $('invalid-z').classList.add('hidden');
        $('valid-z').classList.add('show');
        $('nova-z').classList.add('green');
        $('nova-z').innerHTML = 'Valid';
    }


// pizza*********************
if (pizzaType === "") {
    pizzaType = required;
     header = msg;
     $('nova-ptype').innerHTML = required;
} else if (pizzaType === "other"){
    var otherPt =   prompt('enter your info here:');
    pizzaType === otherPt;
    $('pizza-type').style.borderColor = 'red';
    }
   // else if ("input[name='p-type']:checked") {
else  {
    $('pizza-type').style.borderColor = 'green';
    $('invalid-pt').classList.add('hidden');
   // $('valid-ptype').classList.add('show');
   $('nova-ptype').classList.add('green');
   $('nova-ptype').innerHTML = 'Valid';
    }
if (pizzaSize === "") {
pizzaSize = required;
 header = msg;
 $('nova-psize').innerHTML = required;
} else if (pizzaSize === "other"){
    var otherPs =   prompt('enter your info here:');
    pizzaSize === otherPs;
    }
else {
    $('invalid-ps').classList.add('hidden');
    $('valid-ps').classList.add('show');
    $('nova-psize').classList.add('green');
    $('nova-psize').innerHTML = 'Valid';
    }



var pizzaSizeInType = {
    'hand-tossed': [{'size': 'Small', 'price': 9.99},
                    {'size': 'Medium', 'price': 12.99},
                    {'size': 'Large', 'price': 14.99}],
    'thin-crust':  [{'size': 'Medium', 'price': 11.99},
                    {'size': 'Large', 'price': 13.99}],
    'new-york': [{'size': 'Large', 'price': 16.99},
                 {'size': 'Extra Large', 'price': 19.99}],
    'gluten-free': [{'size': 'Small', 'price': 10.99}]
  }
//61*********************************
//61*********************************
//61*********************************
//selection option name every pizza in1 

//-select-pizza-size-cost --- pizza-type

//document.getElementsByName("input[name='p-type']").click(function(){
    function findYourPizza() {
       
    showPizzaSelections();

    // $('#invalid-dough').hide();
    // $('#invalid-dough').removeClass('is-invalid');

    const doughChoice = document.querySelectorAll("input[name='p-type']:checked").val();  //value    
    // $('pizza-size').children('option:not(:first)').remove();//select ; remove el
    $('template').children('option:not(:first)').remove();//select ; remove el


switch (doughChoice) {
    case "hand-tossed":            
      for (var p = 0; p < pizzaSizeInType['hand-tossed'].length; p++) {            
        $("template").append("<option>"+ pizzaSizeInType['hand-tossed'][p].size + pizzaSizeInType['hand-tossed'][p].price +"</option>"); 
      }            
      break;
    case "thin-crust":                          
      for (var p = 0; p < pizzaSizeInType['thin-crust'].length; p++) {            
        $("template").append("<option>"+ pizzaSizeInType['thin-crust'][p].size + pizzaSizeInType['thin-crust'][p].price +"</option>"); 
      }            
      break;
    case "new-york":                
      for (var p = 0; p < pizzaSizeInType['new-york'].length; p++) {            
        $("template").append("<option>"+ pizzaSizeInType['new-york'][p].size + pizzaSizeInType['new-york'][p].price +"</option>"); 
      }            
      break;
    case "gluten-free":                
      for (var p = 0; p < pizzaSizeInType['gluten-free'].length; p++) {            
        $("template").append("<option>"+ pizzaSizeInType['gluten-free'][p].size + pizzaSizeInType['gluten-free'][p].price +"</option>"); 
      }            
    }

// if (doughChoice === "hand-tossed") {
// $('hand-div').classList.add('show');
// $('template').classList.add('hidden');
// } else if (doughChoice === "thin-crust"){
// $('thin-div').classList.add('show');
// $('template').classList.add('hidden');
// pizzaType === otherPt;
// } else if (doughChoice === "new-york"){
//     $('ny-div').classList.add('show');
//     $('template').classList.add('hidden');
// } else if (doughChoice === "gluten-free"){
//     $('free-div').classList.add('show');;
//     $('template').classList.add('hidden');
//     }

// else if ("input[name='p-type']:checked") {
//         $('invalid-pt').classList.add('hidden');
//     //$('valid-pt').classList.add('show');
// }





}

//document.querySelectorAll("p-type").addEventListener("click",  findYourPizza);
//-..document.getElementsByName("input[name='p-type']").click(function(){

document.querySelectorAll('input[name=p-type]').forEach (p => { p.onclick = function() {
    findYourPizza();
}});  

// // top-on = p-type  
// function findYourPizza(){
//     var pItems=document.getElementsByName('pizza-type');
//     var pickedItems='';
//     for (var p=0; p<pItems.length; p++) {
//         if (pItems[p].type == 'option' && pItems[p].picked == true)
//         pickedItems += pItems[p].value +'\n';
    
//         document.getElementById("checkValue").innerHTML += pickedItems +'<br>';
//     }
//                 }


//62
//     else { 
// //      {
// //         $("#zip").next().text("");
// //     }
// //    $("uzip").val(zip);
//     $('uzip').style.borderColor = 'green';
//     $('invalid').style.display='none';
//     // $('valid').style.display='block';
// }
    //
 //524-pizza
//pizzaType = $('pizza-type').value;
//pizzaSize = $('pizza-size').value;
cheesType = $('chees-type').value;
sauceType = $('sauce-type').value;
//toppings = $('top-on').value;
toppings = document.getElementsByName('top-on').value;


var costChees = 0;
if (cheesType === "Light (no charge)" ) {
costChees = 0;
} else if (cheesType === "Normal (no charge)") {
costChees = 0;
}else if (cheesType === "Extra (+$2.99)") {
costChees = 2.99;
}else if (cheesType === "Double (+3.99)") {
costChees = 3.99;
}

var costSauce = 0;
if (sauceType === "Light Tomato(no charge)" ) {
costSauce = 0;
} else if (sauceType === "Regular Tomato (no charge)") {
costSauce = 0;
}else if (sauceType === "Hearty Tomato: +$0.99") {
costSauce = 0.99;
}else if (sauceType === "BBQ Sauce: +$1.99") {
costSauce = 1.99;
}

var costPizza = 0;
if (pizzaSize === "small ($9.99)" ) {
costPizza = 9.99;
} else if (pizzaSize === "large ($16.99)") {
costPizza = 16.99;
}else if (pizzaSize === "extralarge ($19.99)") {
costPizza = 19.99;
}
//525checkb
// var costTopping;
// toppings;
// if ($('top-on').checked) {
// }
// // 519-topping-

//531
var toppingTypeCost = 0;
var toppingsChecked = document.querySelectorAll("input:checked").length;
var toppingTypeCost  =  toppingsChecked * .99;
//var priceTotal = 0;

var priceTotal = costChees + costSauce + toppingTypeCost + costPizza;
// $('price').val(priceTotal);
// $("price").innerHTML = "$ " + priceTotal;


// 531
function printChecked(){
    var items=document.getElementsByName('top-on');
    var checkedItems='';
    for (var i=0; i<items.length; i++) {
        if (items[i].type == 'checkbox' && items[i].checked == true)
        checkedItems += items[i].value +'\n';
    
        document.getElementById("checkValue").innerHTML = checkedItems +'<br>';
    }
                }
        document.querySelectorAll('input[name=top-on]').forEach (i => { i.onclick = function() {
            printChecked();
        }});           
                


//524-pizzabuilding
//$("order_header").innerHTML = header;

$('order_price').innerHTML = 'Price: $' + priceTotal;
// html_pizza += "<tr><td>Price:</td><td>" + priceTotal + "</td></tr>";
html_pizza += "<tr><td>Dough Type:</td><td>" + pizzaType + "</td></tr>";
        html_pizza += "<tr><td>Size and Cost:</td><td>" + pizzaSize + "</td></tr>";
        html_pizza += "<tr><td>Type of Chees:</td><td>" + cheesType + "</td></tr>";
        html_pizza += "<tr><td>Type of Sauce:</td><td>" + sauceType + "</td></tr>";
        html_pizza += "<tr><td>Toppings: </td><td>" + "</td></tr>";
        $('order_info').innerHTML = html_pizza;
        // $("pizza_info").innerHTML = html;
        // $("registration_form").submit();
  

   
    // $("form7").innerHTML = header;

    // $("form7").innerHTML = "Dough Type: " + pizzaType + "Size and Cost: " + pizzaSize  + "Type of Chees: " + cheesType + "Type of Sauce: " + sauceType;
// $("form7").innerHTML = "Dough Type: " + pizzaType;
// $("form7").innerHTML += "<tr><td>Size and Cost:</td><td>" + pizzaSize + "</td></tr>";
// $("form7").innerHTML += "<tr><td>Type of Chees:</td><td>" + cheesType + "</td></tr>";
// $("form7").innerHTML += "<tr><td>Type of Sauce:</td><td>" + sauceType + "</td></tr>";

// $("price").value(priceTotal);
//$("price").innerHTML = "$ " + priceTotal;
   // $("form7").innerHTML = "Dough Type: " + pizzaType;
    $("form7").innerHTML = "Price: $" + priceTotal;
   // $("form7").innerHTML += " Size and Cost: " + pizzaSize ;
    // $("form7").innerHTML += " Type of Chees: " + cheesType ;
    // $("form7").innerHTML += " Type of Sauce: " + sauceType;
    // + "</br>"
   // if (header === msg) {
        // html += "<tr><td>Country:</td><td>" + country + "</td></tr>";
        // html += "<tr><td>Contact:</td><td>" + contact + "</td></tr>";
        // html += "<tr><td>Terms:</td><td>" + terms + "</td></tr>";
//524
html += "<tr><td>Name:</td><td>" + name + "</td></tr>";
html += "<tr><td>Address Type:</td><td>" + addressType + "</td></tr>";
html += "<tr><td>Address:</td><td>" + address + "</td></tr>";
html += "<tr><td>Apartment:</td><td>" + apartment + "</td></tr>";
html += "<tr><td>Room Number:</td><td>" + roomNumber + "</td></tr>";
html += "<tr><td>City:</td><td>" + city + "</td></tr>";
html += "<tr><td>States:</td><td>" + state + "</td></tr>";
html += "<tr><td>Zip Code:</td><td>" + zip + "</td></tr>";
html += "<tr><td>Phone:</td><td>" + phone + "</td></tr>";
html += "<tr><td>Email:</td><td>" + email + "</td></tr>";
$("delivery_info").innerHTML = html;


  $("order_header").innerHTML = header;
  if (header === msg) {
  } else {
      $("order_form").submit();
  }
};

window.addEventListener("load", function () {
    "use strict";
    $("order").addEventListener("click", processOrder);
    //$("uname").focus();
    //alert('Are you sure?');
});




// 612020/////////////////////////////////////////////
// 61- BILLING PAGE*********************
// 61- BILLING PAGE*********************
// 61- BILLING PAGE*********************

var processBilling = function () {

var fullName, card, cvc, expMonth, expYear, required, header, html, msg;
fullName = $('f-name').value;
card = $('ucard').value;
cvc = $('ucvc').value;
expMonth = $('exp-month').value;
expYear = $('exp-year').value;
required = "<span>Required</span>";

header = "";
    html = "";
    required = "<span>Required</span>";
    msg = "Please fill all required fields.";
//***validation 
// 61- fullname validation*********************
//or: regex = /^[A-Za-z]([-']?[A-Za-z]+)*( [A-Za-z]([-']?[A-Za-z]+)*)+$/;      
var regFullName = /^\b[A-Z]+.+[?^ ][A-Z].{1,19}|\b[A-Z]+.+[?^,][A-Z].{1,19}/;
//var alphaExp = /^[a-zA-Z]+$/;
if (fullName === "") {
   // fullName = required;
    $('nova-name').innerHTML = required;
    header = msg;
    //header = msg;
} else if (!regFullName.test(fullName)) {
   // fullName = 'Please write a valid name';
   $('f-name').classList.add('borderRed');
   $('nova-name').innerHTML = 'Please write a valid name';
   header = msg;
//    $('invalid-n').classList.add('show');
//    $('valid-n').classList.add('hidden');
  //  return false;
} else {
    $('f-name').style.borderColor = 'green';
    $('invalid-n').classList.add('hidden');
    $('valid-n').classList.add('show');
    $('nova-name').classList.add('hidden');
    $('va-name').innerHTML = 'Valid';

    // $('invalid-z').classList.add('hidden');
    // $('valid-z').classList.add('show');
}
// 61- creditcard validation*********************
//var numericExpression = /^[0-9]+$/;
var regCardExp = /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/;
    if (card === "") {
        //card = required;
        $('nova-card').innerHTML = required;
        header = msg;
    } else if ( card.length != 16 ) {
        $('nova-card').innerHTML = "<span>Use 16 digital format</span>";
        $('ucard').style.borderColor = 'red';
        header = msg;
       // isValid = false;
    // } else if (!regCardExp.test(card)) {
    //    // card = 'Please write a valid number';
    //     $('nova-card').innerHTML = "<span>Please write a valid number</span>";
    } else {
        $('ucard').style.borderColor = 'green';
        $('invalid-card').classList.add('hidden');
        $('valid-card').classList.add('show');
        $('nova-card').classList.add('hidden');
        $('va-card').innerHTML = 'Valid';
    }
// 61- cvc validation*********************
//var numericExpression = /^[0-9]+$/;
var reqExpCvc = /^[0-9]{3}?$/;
    if (cvc === "") {
        //cvc = required;
        $('nova-cvc').innerHTML = required;
        header = msg;
    //    // isValid = false;
    } else if (!reqExpCvc.test(cvc)) {
       // cvc = 'Please write a valid cvc number';
        $('ucvc').style.borderColor = 'red';
        $('nova-cvc').innerHTML =  "<span>Please write a valid CVC</span>";
        header = msg;
        //zip.classList.add('borderRed');
    } else {
        $('ucvc').style.borderColor = 'green';
        $('invalid-cvc').classList.add('hidden');
        $('valid-cvc').classList.add('show');
        $('va-cvc').innerHTML = 'Valid';
        $('nova-cvc').classList.add('hidden');
    }
// 61- exp month validation*********************
if (expMonth === "" && expYear === "") {
    expMonth = required;
    $('nova-mo').innerHTML = required;
    expYear = required;
    $('nova-ye').innerHTML = required;
    header = msg;
} else if (expMonth === "other" || expYear === "other"){
var otherY =   prompt('enter your info here:');
expYear === otherY;
} else {
     $('invalid-em').classList.add('hidden');
    $('valid-em').classList.add('show');
    $('nova-mo').classList.add('hidden');
    $('va-mo').innerHTML = 'Valid';
    
    $('invalid-ey').classList.add('hidden');
    $('valid-ey').classList.add('show');
    $('nova-ye').classList.add('hidden');
    $('va-ye').innerHTML = 'Valid';
}


$("billing_header").innerHTML = header;
if (header === msg) {
} else {
    $("billing_form").submit();
}
//61
  //5 or 9 digit zip
  //regZip = /^[0-9]{5}(?:-[0-9]{4})?$/;
   //Credit Card Regex
   //regCredit = 
   //regexp = /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/;
   // Check for 3 numbers for CCV
   //reqCCV = /^[0-9]{3}?$/;

// 61- BILLING PAGE*********************

  
}

window.addEventListener("load", function () {
    "use strict";
    $("bill").addEventListener("click", processBilling);
    $("f-name").focus();
});