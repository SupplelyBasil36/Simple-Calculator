
function hey() {
    alert("hey");
}

function clean() {
    document.getElementById("number1").innerHTML = '';
}

function insert(x) {
    document.getElementById("number1").innerHTML += x;
}

function operation(x) {
    document.getElementById("number1").innerHTML += x;
}

function showResult() {
    let all = document.getElementById("number1").innerHTML;
    let s = all.indexOf("+");
    let r = all.indexOf("-");
    let d = all.indexOf("÷");
    let m = all.indexOf("x");
    if (s !== -1) {
        arr = all.split("+", 2);
        res = parseInt(arr[0]) + parseInt(arr[1]);
        document.getElementById("number1").innerHTML = res;
    } else if (r !== -1) {
        arr = all.split("-", 2);
        res = arr[0] - arr[1];
        document.getElementById("number1").innerHTML = res;

    } else if (d !== -1) {
        arr = all.split("÷", 2);
        res = arr[0] / arr[1];
        document.getElementById("number1").innerHTML = res;

    } else if (m !== -1) {
        arr = all.split("x", 2);
        res = arr[0] * arr[1];
        document.getElementById("number1").innerHTML = res;

    }
}
