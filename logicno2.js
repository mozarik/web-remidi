function atmBank(total, nominal) {
    if (total === 0) {
        return [];
    } else {
        if (total >= nominal[0]) {
            sisa = (total - nominal[0])
            return [nominal[0]].concat(atmBank(sisa, nominal))
        } else {
            nominal.shift();
            return atmBank(total, nominal)
        }
    }
}

function finalBank() {
    var inputanUser = parseInt(document.querySelector('#totalUang').value)
    var message = document.getElementById("p01");
    message.innerHTML = "";
    var nominal = [100000, 50000, 20000]
    try {
        console.log(atmBank(inputanUser, nominal))
    } catch (error) {
        message.innerHTML = "  “Maaf, nominal tersebut tidak dapat dikeluarkan oleh mesin ATM”       "
    }
}