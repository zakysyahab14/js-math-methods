let menu = 0;
while(menu == 0) {
    let choose = prompt("do you want to use rounding decimal math java script? Y. Yes N. NO")
    switch (choose) {
        case 'Y':
            let newNumber = parseFloat(prompt("insert number with a decimal to know the rounding"))
            const a = newNumber
            alert(Math.floor(newNumber))
            break;

        case 'N':
            confirm("you want to know your today's lucky number?")
            alert(Math.round(Math.random()*90 + 10))
            confirm("REMEMBER THAT NUMBER !!!! YOU WILL GET UNEXPECTED THINGS TODAY !!!!")
            menu = 1;
            break;
    }
}

