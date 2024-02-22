
const allBtn = document.getElementsByClassName("btn-seat");
let count = 0;
for (const btn of allBtn) {

    btn.addEventListener('click', function () {
        if (count !== 4) {
            btn.style.backgroundColor = "#1DD100";
            condition();
            count++;
            btn.disabled = true;
            const tbody = document.getElementById("seatSummary");
            const tr = document.createElement('tr');
            const td = document.createElement('td');
            const td1 = document.createElement('td');
            const td2 = document.createElement('td');
            td.innerText = btn.innerText;
            td1.innerText = "Economy";
            td2.innerText = "550";
            tr.appendChild(td);
            tr.appendChild(td1);
            tr.appendChild(td2);
            tbody.appendChild(tr);
            totalCost();
            seatAvaliable();

        }


    })
}

function buyTicketButton() {
    document.getElementById('paribahan').scrollIntoView({ behavior: 'smooth' });
}

function seatAvaliable() {
    const phoneNumber = document.getElementById("phone");
    phoneNumber.addEventListener("keyup", function () {

        const seatUp = getConvertedValue("SeatIncrease");
        if (seatUp !== 0 && phoneNumber.value != '') {
            const nextBtn = document.getElementById("btnNext");
            nextBtn.removeAttribute("disabled");

        }
    })
}

//  document.getElementById("couponCode").addEventListener("keyup", function(){
//     const totalCost = getConvertedValue("totalCost");

//     const couponcode = document.getElementById("couponCode");
//     if (couponcode.value == 'NEW 15') {
//         const discount = totalCost * 0.15;
//         document.getElementById("grandTotal").innerText = totalCost - discount;
//     }

//     else if (couponcode.value == 'Couple 20') {
//         const discount = totalCost * 0.2;
//         document.getElementById("grandTotal").innerText = totalCost - discount;
//     } else {
//         alert("please enter a valid coupon code")
//         document.getElementById("grandTotal").innerText=totalCost;
//     }
//  })
function grandTotal(status) {
    const totalCost = getConvertedValue("totalCost");

    const couponcode = document.getElementById("couponCode");
    if (couponcode.value == 'NEW 15') {
        const discount = totalCost * 0.15;
        document.getElementById("grandTotal").innerText = totalCost - discount;
    }

    else if (couponcode.value == 'Couple 20') {
        const discount = totalCost * 0.2;
        document.getElementById("grandTotal").innerText = totalCost - discount;
    } else {
        alert("please enter a valid coupon code")
        document.getElementById("grandTotal").innerText=totalCost;
    }

}







// function grandTotal(status){
//     const totalCost=getConvertedValue("totalCost");
//     if(status){
//         const couponcode=document.getElementById("couponCode");
//         if(couponcode.value=='NEW 15'){
//             const discount=totalCost*0.15;
//             document.getElementById("grandTotal").innerText=totalCost-discount;
//         }else{
//             alert("please enter a valid coupon code")
//         }
//     }
//     else if(status){
//         const couponcode=document.getElementById("couponCode");
//         if(couponcode.value=='Couple 20'){
//             const discount=totalCost*0.15;
//             document.getElementById("grandTotal").innerText=totalCost-discount;
//         }else{
//             alert("please enter a valid coupon code")
//         }
//     }
//     else{

//         document.getElementById("grandTotal").innerText=totalCost;
//     }
// }


function totalCost() {
    const count = 550;
    const totalCost = getConvertedValue("totalCost");
    let sum = totalCost + count;
    document.getElementById("totalCost").innerText = sum;
    console.log(sum);
    document.getElementById("grandTotal").innerText=sum;
}


function condition() {
    let seatLeft = getConvertedValue("seatLeft");
    seatLeft = seatLeft - 1;
    document.getElementById("seatLeft").innerText = seatLeft;
    let seatIncrease = getConvertedValue("SeatIncrease");
    seatIncrease = seatIncrease + 1;
    document.getElementById("SeatIncrease").innerText = seatIncrease;
}

function getElement(id) {
    document.getElementById(id);
}

function getConvertedValue(id) {
    const setAvaliable = document.getElementById(id).innerText;
    const convertedSetAvaliable = parseInt(setAvaliable);
    return convertedSetAvaliable;

}