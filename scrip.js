// let allStudents =["Adebayo", "Gbogunmi", "Lola", "Tanimola", "Orere", "ekundayo"]


// allStudents.pop();
// allStudents.shift();
// allStudents.push("Opomulero");
// allStudents.unshift("Precious")
// console.log(allStudents);


let cart = []

function Add() {
    if(item.value !== ""){

        cart.push(item.value)
        disp.innerHTML = ""
        // for (let i = 0; i < cart.length; i++) {
        //     disp.innerHTML += `<p> ${i + 1}. ${cart[i]} </p>`
        //     item.value = ""
        // }
        displayCart()
    }else {
        show.innerHTML = `<p> please fill up the input</p>`
        setTimeout(() => {
            show.innerHTML = ""
        }, 3000);
    }
    
}
function displayCart(){
    for (let i = 0; i < cart.length; i++) {
        disp.innerHTML += `<p> ${i + 1}. ${cart[i]} </p>`
        item.value = ""
    }
}
function begin() {
    if(disp.value !== "" && item.value !== ""){

        cart.unshift(item.value)
        disp.innerHTML = ""

        displayCart()
    }else {
        dip.innerHTML = `<p>Nothing to add to the begining</p>`
        setTimeout(() => {
            dip.innerHTML = ""
        }, 3000);
    }
    
}



function delFirst() {
    if(disp.innerHTML!== "" ){

        var confirmation = confirm("Are you sure you want to delete the first item?");
      if (confirmation) {
        cart.shift(item.value)
        disp.innerHTML = ""
        alert("confirmed!");
      } else {
    alert(" canceled!");
      }
        displayCart()
    }else {
        dip.innerHTML = `<p>There is nothing on the  list to delete</p>`
        setTimeout(() => {
            dip.innerHTML = ""
        }, 3000);
    }
    
}


function delLast() {
    if(disp.innerHTML !== ""){

        var confirmation = confirm("Are you sure you want to delete the last item?");
      if (confirmation) {
        cart.pop(item.value)
        disp.innerHTML = ""
        alert("confirmed!");
      } else {
    alert(" canceled!");
      }

        displayCart()
    }else {
        dip.innerHTML = `<p>There is nothing on the  list to delete</p>`
        setTimeout(() => {
            dip.innerHTML = ""
        }, 3000);
    }
    
}


function delAny() {
    if(disp.innerHTML !== ""){

        cart.push(item.value)
        disp.innerHTML = ""
        // for (let i = 0; i < cart.length; i++) {
        //     disp.innerHTML += `<p> ${i + 1}. ${cart[i]} </p>`
        //     item.value = ""
        // }
        displayCart()
    }else {
        dip.innerHTML = `<p>the list is already empty</p>`
        setTimeout(() => {
            dip.innerHTML = ""
        }, 3000);
    }
    
}


function Edit() {
    if(disp.value !== ""){

        cart.push(item.value)
        disp.innerHTML = ""
        // for (let i = 0; i < cart.length; i++) {
        //     disp.innerHTML += `<p> ${i + 1}. ${cart[i]} </p>`
        //     item.value = ""
        // }
        displayCart()
    }else {
        dip.innerHTML = `<p>the list is already empty</p>`
        setTimeout(() => {
            dip.innerHTML = ""
        }, 3000);
    }
    
}


function delAll() {
    if(disp.innerHTML !== ""){

    var confirmation = confirm("Are you sure you want to delete all the item?");
        if (confirmation) {
        cart.splice(item.value)
        disp.innerHTML = ""
        alert("confirmed!");
    } else {
    alert(" canceled!");
    }
        displayCart()
    }else {
        dip.innerHTML = `<p>The list is already empty</p>`
        setTimeout(() => {
            dip.innerHTML = ""
        }, 3000);
    }
    
}