  //from524
  var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

var processEntries = function () {
    "use strict";
    var header, html, required, msg, email, phone, country, contact, terms,
    //524
    name, addressType, address, roomNumber, city, state, zip, apartment,
    pizzaType, pizzaSize, cheesType, sauceType, toppings, requiredT;

    
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

    //
    // contact = "Text";
    // if ($("email").checked) {
    //     contact = "Email";
    // } else if ($("none").checked) {
    //     contact = "None";
    // }
    // terms = $("terms").checked;
    
    //Basic validation
    if (email === "") {
        email = required;
        header = msg;
    }
    if (phone === "") {
        phone = required;
        header = msg;
    }
    // if (country === "") {
    //     country = required;
    //     header = msg;
    // }
    if (terms === false) {
        terms = required;
        header = msg;
    }
    //524
    if (name === "") {
        name = required;
        header = msg;
    }
    // if (addressType === "") {
    //     addressType = required;
    //     header = msg;
    // }
//525
if (addressType === "") {
        addressType = required;
        header = msg;
    } else if (addressType === "other"){
var yourOtherAddressType =   prompt('Please enter your Address Type here:');
addressType === yourOtherAddressType;
    } 

    if (address === "") {
        address = required;
        header = msg;
    }
    if (city === "") {
        city = required;
        header = msg;
    }
    if (state === "") {
        state = required;
        header = msg;
    }
    if (zip === "") {
        zip = required;
        header = msg;
    }
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
//525checkb
// var costTopping;
// toppings;
// if ($('top-on').checked) {

// }
// // 519-topping-
var toppingTypeCost = 0;
if (toppings === "pepperoni") {
toppingTypeCost = 0.99;
}   else if (toppings === "sausage") {
toppingTypeCost = 0.99;
} else if (toppings === "ham") {
toppingTypeCost = 0.99;
}else if (toppings === "bacon") {
toppingTypeCost = 0.99;
}else if (toppings === "salami") {
toppingTypeCost = 0.99;
}else if (toppings === "peppers") {
toppingTypeCost = 0.99;
}else if (toppings === "olives") {
toppingTypeCost = 0.99;
}else if (toppings === "jalapenos") {
toppingTypeCost = 0.99;
}else if (toppings === "mushroom") {
toppingTypeCost = 0.99;
}else if (toppings === "pinapple") {
toppingTypeCost = 0.99;
}else if (toppings === "onion") {
toppingTypeCost = 0.99;
}


// console.log(toppingTypeCost);
//var priceTotal = 0;
var priceTotal = costChees + costSauce + toppingTypeCost;
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


// //525-checkboxes
// // 519-topping-get the value of the //checked radio button
// toppings = $('top-on').value;
// for(var i = 0; i < toppings.length; i++) {
//   if(toppings[i].checked == true) {
//     toppingItem = toppings[i].value;
//     console.log(toppingItem);
//   }
// }
// // 519-topping-convert string value to numeric equivalent on shipping
// var toppingTypeCost = 0;
// switch(toppingItem) {
// case 'pepperoni' :
//   toppingTypeCost = 0.99;
//   break;
// case 'sausage':
//   toppingTypeCost = 0.99;
//   break;
// case 'ham' :
//   toppingTypeCost = 0.99;
//   break;
//   case 'bacon' :
//   toppingTypeCost = 0.99;
//   break;
// case 'salami':
//   toppingTypeCost = 0.99;
//   break;
// case 'peppers' :
//   toppingTypeCost = 0.99;
//   break;
//   case 'olives' :
//   toppingTypeCost = 0.99;
//   break;
// case 'jalapenos':
//   toppingTypeCost = 0.99;
//   break;
// case 'mushroom' :
//   toppingTypeCost = 0.99;
//   break;
//   case 'pinapple' :
//   toppingTypeCost = 0.99;
//   break;
// case 'onion':
//   toppingTypeCost = 0.99;
//   break;
// }
// console.log(toppingTypeCost);

// toppings = $('order-form').top-on;
//   // get the value of the checked btn
//   for(var i = 0; i < toppings.length; i++) {
//   if(toppings[i].checked == true) {
//     toppingItems = toppings[i].value;
//     console.log(toppingItems);
//   }
// }


//524-pizzabuilding
html += "<tr><td>Dough Type:</td><td>" + pizzaType + "</td></tr>";
        html += "<tr><td>Size and Cost:</td><td>" + pizzaSize + "</td></tr>";
        html += "<tr><td>Type of Chees:</td><td>" + cheesType + "</td></tr>";
        html += "<tr><td>Type of Sauce:</td><td>" + sauceType + "</td></tr>";
        html += "<tr><td>Toppings: add each for $0.99: </td><td>" + "</td></tr>";
        // $("pizza_info").innerHTML = html;
        // $("registration_form").submit();
  

    $("order_header").innerHTML = header;
    // $("form7").innerHTML = header;

    // $("form7").innerHTML = "Dough Type: " + pizzaType + "Size and Cost: " + pizzaSize  + "Type of Chees: " + cheesType + "Type of Sauce: " + sauceType;
// $("form7").innerHTML = "Dough Type: " + pizzaType;
// $("form7").innerHTML += "<tr><td>Size and Cost:</td><td>" + pizzaSize + "</td></tr>";
// $("form7").innerHTML += "<tr><td>Type of Chees:</td><td>" + cheesType + "</td></tr>";
// $("form7").innerHTML += "<tr><td>Type of Sauce:</td><td>" + sauceType + "</td></tr>";

// $("price").value(priceTotal);
//$("price").innerHTML = "$ " + priceTotal;
    $("form7").innerHTML = "Dough Type: " + pizzaType;
    $("form7").innerHTML += "$$$ " +  + priceTotal;
    $("form7").innerHTML += " Size and Cost: " + pizzaSize ;
    $("form7").innerHTML += " Type of Chees: " + cheesType ;
    $("form7").innerHTML += " Type of Sauce: " + sauceType;
    // + "</br>"
    if (header === msg) {
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
$("order_info").innerHTML = html;
    } else {
        $("order_form").submit();
    }
};

window.addEventListener("load", function () {
    "use strict";
    $("order").addEventListener("click", processEntries);
    $("uname").focus();
});
//alert('Are you sure?');