let son1 = Number(prompt("0 dan katta son kiriting"))

let son3 = 0
if (son1 > 0) {
    for (let i = 2; i <= son1; i++) {
        let son2 = true
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                son2 = false
                break
            }
        }
        if (son2) {
            console.log(i,"tub son");
        }
    }

    let count = 0

    for (let i = 1; i < son1; i++) {
        if (son1 % i == 0) {
            count += i
        }
    }


    if (count == son1) {
        console.log(son1 ,"mukammal son");
    } else {
        console.log(son1, "mukammal son emas");
    }
} else {
    console.log("0 dan katta son kiriting");
}