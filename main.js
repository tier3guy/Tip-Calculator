const bill = document.getElementById("inputfield");
const people = document.getElementById("people");
const tip = document.getElementById("ans");
const seviceLevel = document.getElementById("serviceLevel");
const calc = document.getElementById("btn");

calc.addEventListener("click",() => {
    var totalBill = bill.value;
    var totalPeople = people.value;
    if(totalBill == "" || totalPeople == ""){
        alert("please fill required fields !");
    }
    else{
        var value = serviceLevel.selectedIndex;
        var tipPercentage = 0;
        if(value != 0){
            
            if(value == 1) {
                tipPercentage = 2;
            }
            else if(value == 2){
                tipPercentage = 3;
            }
            else{
                tipPercentage =  5;
            }

            var tipPerPerson = tipPercentage/100 * totalBill;
            tip.value = tipPerPerson * totalPeople;
        }
        else{
            alert("Select service level !")
        }
    }
    
})

