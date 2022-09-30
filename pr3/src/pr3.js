alert("First exe")
let firstRow = prompt("Enter the row", "мама мыла раму");
let secondRow = prompt("Enter the row", "собака друг человека");
let a = prompt("Enter the letter", "а");

function Rows(firstRow,secondRow){
    countFirst = 0;
    countSecond = 0;
    for (let i=0;i<firstRow.length;i++){
        if (firstRow[i] === a){
            countFirst++;
        }
    }
    for (let i=0;i<secondRow.length;i++){
        if (secondRow[i] === a ){
            countSecond++;
        }
    }
    if(countFirst>countSecond){
        return "Second row < first row on "+countFirst
    }else if(countFirst<countSecond){
        return "Second row > first row on "+countSecond
    }else{
        return "they equal"
    }
}
a = Rows(firstRow,secondRow);
alert(a);

alert("Second exe")
let phoneNumber = prompt("Enter the phone number", "+390966250418");

function Resstructure_numbers(phoneNumber){
    if(phoneNumber.length == 13){
        if (phoneNumber.charAt(0) != "+" && phoneNumber.charAt(1) == "3" && phoneNumber.charAt(2) =="8" || phoneNumber.charAt(0) == "+" && phoneNumber.charAt(1) != "3" && phoneNumber.charAt(2) =="8" || phoneNumber.charAt(0) != "+" && phoneNumber.charAt(1) != "3" && phoneNumber.charAt(2) !="8" || phoneNumber.charAt(0) == "+" && phoneNumber.charAt(1) != "3" && phoneNumber.charAt(2) !="8" || phoneNumber.charAt(0) == "+" && phoneNumber.charAt(1) == "3" && phoneNumber.charAt(2) !="8" || phoneNumber.charAt(0) == "+" && phoneNumber.charAt(1) == "3" && phoneNumber.charAt(2) =="8"){
            phoneNumber = '+38' + phoneNumber.substring(3);
        }
    }else if(phoneNumber.length == 11){
        if(phoneNumber.charAt(0) == "+"){
            temp ='';
            for (let i = 0; i < phoneNumber.length; i++) {
                if (phoneNumber.charAt(i) != "+"){
                    temp += phoneNumber.charAt(i);
                }
            }
            phoneNumber = temp;
            phoneNumber = "+38"+phoneNumber;
        }else{
            alert('Error format');
            return "";
        }
    }else if(phoneNumber.length == 12){
        if(phoneNumber.charAt(0) != "+"){
            phoneNumber = "+"+phoneNumber;
        }else{
            alert('Error format');
            return "";
        }
    }else if(phoneNumber.length == 10){
        if(phoneNumber.charAt(0) != "+" && phoneNumber.charAt(1) != "3" && phoneNumber.charAt(2) !="8"){
            phoneNumber = "+38"+phoneNumber;
        }else{
            alert('Error format');
            return "";
        }
    }else{
        alert('Error format');
        return "";
    }
    num = ''
    for (let i = 0; i < phoneNumber.length; i++) {
        if (i == 3){
            num += " ("
        }
        else if(i == 6){
            num += ") "
        }
        else if(i == 9){
            num += "-"
        }
        else if(i == 11){
            num += "-"
        }
        num += phoneNumber.charAt(i);
    }
    return num
}
phoneNumber = Resstructure_numbers(phoneNumber);
console.log(phoneNumber);
alert(phoneNumber);