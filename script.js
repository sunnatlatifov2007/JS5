
// let userName = prompt("Введите ваше имя:");

// switch (userName) {
// case "Alex": 
// let password = Number(prompt("Введите ваш пароль:")); 
// switch (password) {
// case 7777: 
// let amount = Number(prompt("Сколько вы хотите снять?")); 
// switch (true) {
// case amount > 0 && amount <= balance: balance -= amount; 
// alert(`Вы сняли: ${amount}.\nОстаток на вашем счете: ${balance}.`); 
// break; 
// case amount > balance: 
// alert("Недостаточно средств."); 
// break; 
// default: alert("Некорректная сумма."); 
// } break; 
// } break;
//  default: alert("Пользователь не найден!"); } 

let userName = "Alex";
let accountPassword = "7777"; 
let balance = 10000;

let enteredName = prompt("Your name?");

switch (enteredName) {
    case userName:
        let enteredPassword = prompt("Your password:"); 
        switch (enteredPassword) {
            case accountPassword: 
                let amount = parseFloat(prompt("How much money u wanna get?"));
                switch (true) {
                    case isNaN(amount) || amount <= 0:
                        alert("Write the correct amount of money");
                        break;
                    case amount <= balance:
                        balance -= amount;
                        alert(`GOT ${amount} $. LEFT: ${balance} $.`);
                        break;
                    default:
                        alert("Not enough money!");
                }
                break;
            default:
                alert("Wrong password!");
        }
        break;
    default:
        alert("Incorrect name!");
}