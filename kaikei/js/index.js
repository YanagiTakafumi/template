// index.js
// aは注文数と全体の個数
// numberは商品名
// countは値段
var a = [0, 0, 0, 0, 0, 0, 0];
var number = ["number-1", "number-2", "number-3", "number-4", "number-5", "number-6"]
var count = [120, 150, 340, 640, 720, 320];

function count_plus(i) {
    if (a[6] < 5) {
        a[i] += 1;
        a[6] += 1;
        document.getElementById(number[i]).innerHTML = a[i];
    }
}

function count_minus(i) {
    if (a[i] > 0) {
        a[i] -= 1;
        a[6] -= 1;
        document.getElementById(number[i]).innerHTML = a[i];
    }
}

$(function() {
    $('.fa-minus-circle').click(function() {
        var gokei = a[0] * count[0] + a[1] * count[1] + a[2] * count[2] + a[3] * count[3] + a[4] * count[4] + a[5] * count[5];
        document.getElementById("count").innerHTML = gokei;
    });

    $('.fa-plus-circle').click(function() {
        var gokei = a[0] * count[0] + a[1] * count[1] + a[2] * count[2] + a[3] * count[3] + a[4] * count[4] + a[5] * count[5];
        document.getElementById("count").innerHTML = gokei;
    });

    $('#button').click(function() {
        // 初めは空文字
        var qrtext = "";
        for (var i = 0; i <= 5; i++) {
            if (a[i] >= 1) qrtext += `${number[i]}×${a[i]}\n`;
        }
        var utf8qrtext = unescape(encodeURIComponent(qrtext));
        $("#img-qr").html("").qrcode({ text: utf8qrtext }).show();
    });

    $('#reset').click(function() {
        var zero = 0;
        document.getElementById("count").innerHTML = zero;
        $('#img-qr').hide();
        for (var i = 0; i <= 6; i++) {
            a[i] = 0;
            document.getElementById(number[i]).innerHTML = a[i];
        }
    });
});