var girlsName = ["Parisa", "Mahsa", "Nazanin", "Mina", "Sarina", "Maryam", "Sara", "Sanaz", "Mahtab", "Mehrsa", "Artmis", "Sahar", "Avisa", "Atena", "Armita", "Elnaz", "Pardis", "Negin", "Afsaneh", "Anahita", "Asal", "Hanane", "Tina", "Saman", "Parmida", "Batol", "Somayeh", "Elahe", "Ghazal", "Fereshte", "Atefeh", "Aida", "Masomeh", "Hanieh", "Sakineh", "Mobina", "Sadaf", "Darya", "Donya", "Mohadese", "Yalda", "Vida", "Hengameh", "Zahra", "Fatemeh", "Arezo", "Reyhaneh", "Narges", "Elham", "Yasamin", "Narges", "Leila", "Roya", "Sabah", "Taraneh", "Maede", "Sheyda", "Shahla","Sepideh","Samaneh"];
var boysName = ["Hasan", "Ali", "Ahmad", "Sam", "Mostafa", "Alireza", "Morteza", "Reza", "Abas", "Hossein", "Amir", "Jafar", "Mahdi", "Behnam", "Behzad", "Behroz", "Behrad", "Matin", "Mohammad", "Sirous", "Asghar", "Akbar", "Mohammad Ali", "Mohammad Hasan", "Mohammad Jafar", "Khosro", "Siavash", "Kiarash", "Arash", "Koroush", "Dariush", "Arya", "Mani", "Abolfazl", "Nima", "Baqher", "Mehrdad", "Pendar", "Pedram", "Ehsan", "Karim", "Keyvan", "Pouria", "Poyan", "Saeed", "Hamid", "Ali Asghar", "Vahid", "Amir Hossein", "Mojtaba", "Ghodrat", "Nosrat", "Vali-o-allah", "Meysam", "Esmaiil", "Mohammad Sam", "Artin", "Ramtin", "Masiha", "Ilya", "Peyman", "Nader", "Kazem", "Arash", "Ebrahim", "Jamshid", "Arsalan", "Kambiz", "Mehran", "Mehrab"];

let userNumber = document.getElementById("number");
let targetLabel = document.getElementById("targetLabel");
let gensiat = document.getElementById("gensiat");

function FindTarget() {
    var number = userNumber.value;
    var userGensiat = gensiat.value;
    if (userGensiat == "pesar") {
        var name = boysName[number % boysName.length];
        targetLabel.innerHTML = name;
    } else {
        var name = girlsName[number % girlsName.length];
        targetLabel.innerHTML = name;
    }
}

function FindRandom() {
    var userGensiat = gensiat.value;
    if (userGensiat == "pesar") {
        var name = boysName[Math.floor(Math.random() * boysName.length)];
        targetLabel.innerHTML = name;
    } else {
        var name = girlsName[Math.floor(Math.random() * girlsName.length)];
        targetLabel.innerHTML = name;
    }
}

function FindRandomSpeceficGender(str){
    var name="";
    if (str == "pesar") {
        name = boysName[Math.floor(Math.random() * boysName.length)];
    } else {
        name = girlsName[Math.floor(Math.random() * girlsName.length)];
    }

    return name;
}

function CreateChild(){
    var randomNumber = Math.floor(Math.random()*2);
    if(randomNumber==0){
        return FindRandomSpeceficGender("pesar");
    }else{
        return FindRandomSpeceficGender("dokhtar");
    }
}

function MakeFamilyTree(){
    var number = userNumber.value;
    var userGensiat = gensiat.value;
    if (userGensiat == "pesar") {
        var name = boysName[number % boysName.length];
        var wife = FindRandomSpeceficGender("dokhtar");
        
        targetLabel.innerHTML = name+"<->"+wife+"<br>|<br>|_>"+CreateChild()+"<->"+FindRandomSpeceficGender();
    } else {
        var name = girlsName[number % girlsName.length];
        targetLabel.innerHTML = name;
    }
}

