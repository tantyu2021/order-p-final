  //from524
  var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

var processOrder = function () {
    "use strict";
    var header, html, required, msg, email, phone,  terms,
    //524-531-country, contact,
    name, addressType, address, roomNumber, city, state, zip, apartment,
    pizzaType, pizzaSize, cheesType, sauceType, toppings, requiredT, html_pizza;

    //header = priceTotal;
    header = "";
    html = "";
    required = "<span>Required</span>";
    msg = "Table Info";
// msg = "Please complete all required fields.";
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

    html_pizza = '';
    //
    // contact = "Text";
    // if ($("email").checked) {
    //     contact = "Email";
    // } else if ($("none").checked) {
    //     contact = "None";
    // }
    // terms = $("terms").checked;
   
// 531-the handler for the click event of a submit button
// $("#email_form").submit(
// function(event) {
//     var isValid = true;   ....}

    // validation
//*********************** */
// validate the email entry with a regular expression
var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
    if (email === "") {
        email = required;
        //header = msg;
    } else if ( !emailPattern.test(email) ) {
        email = 'Must be a valid email';
//isValid = false;
//return false;
    } 
    // else if (inputtext.value.match(emailExp)) {
    //     return true;
    //     email.classList.add('borderGreen');
    //     //$('uemail').style.borderColor = 'green';
    // }
// validate the phone entry*********************

    if (phone === "") {
        phone = required;
    }
    // if (country === "") {
    //     country = required;
    //     header = msg;
    // }
    // if (terms === false) {
    //     terms = required;
    //    // header = msg;
    // }
 // validate the name entry*********************
    var alphaExp = /^[a-zA-Z]+$/;
    if (name === "") {
        name = required;
        //header = msg;
    } else if (!alphaExp.test(name)) {
        name = 'Please write a valid name';
        name.classList.add('borderRed');
      //  return false;
    } 
    
    // else { return true; 
    //     name.classList.add('borderGreen')}
    // if (addressType === "") {
    //     addressType = required;
    //     header = msg;
    // }
//525
if (addressType === "") {
        addressType = required;
       // header = msg;
    } else if (addressType === "other"){
var yourOtherAddressType =   prompt('Please enter your Address Type here:');
addressType === yourOtherAddressType;
    } 
// validate the address entry*********************
var alphaExp = /^[0-9a-zA-Z]+$/;
if (address === "") {
        address = required;
        //header = msg;
    } else if (!alphaExp.test(address)) {
        address = 'Please write a valid address';
        address.classList.add('borderRed');
      //  return false;
    } 
// validate the city entry*********************

    if (city === "") {
        city = required;
       // header = msg;
    }
// validate the state entry*********************
    if (state === "") {
        state = required;
       // isValid = false;
        //header = msg;
    } else if ( state.length != 2 ) {
       // $("#state").next().text("Use 2-character code.");
       state = '<span>Use 2-character code.</span>';
       $('ustate').style.borderColor = 'red';
       // isValid = false;
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
var numericExpression = /^[0-9]+$/;
if (zip === "") {
        zip = required;
        $('invalid').style.display='block';
        // $('valid').style.display='none';
       // isValid = false;
       // header = msg;
    } else if ( zip.length != 5 ) {
        zip = "<span>Use 99999 format.</span>";
        $('uzip').style.borderColor = 'red';
       // isValid = false;
    } else if (!numericExpression.test(zip)) {
        name = 'Please write a valid zip';
        zip.classList.add('borderRed');
    }
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
pizzaType = $('pizza-type').value;
pizzaSize = $('pizza-size').value;
cheesType = $('chees-type').value;
sauceType = $('sauce-type').value;
toppings = $('top-on').value;


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

 if (pizzaType === "") {
        pizzaType = required;
        // header = msg;
    }
    if (pizzaSize === "") {
        pizzaSize = required;
        // header = msg;
    }





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

$('order_header').innerHTML = 'Price: $' + priceTotal;
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
//    } 
  //  else {$("order_form").submit();}
};

window.addEventListener("load", function () {
    "use strict";
    $("order").addEventListener("click", processOrder);
    $("uname").focus();
});
//alert('Are you sure?');