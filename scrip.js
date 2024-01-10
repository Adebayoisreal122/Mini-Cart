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
        for (let i = 0; i < cart.length; i++) {
            disp.innerHTML += `<p> ${i + 1}. ${cart[i]} </p>`
            item.value = ""
        }
    }else {
        show.innerHTML = `<p> please fill up the input</p>`
        setTimeout(() => {
            show.innerHTML = ""
        }, 3000);
    }
    
}