/**
 * Bài 1:
 * Tính tiền thuế
 */

var txtHoTen = document.getElementById("txtHoTen");
var txtThuNhap = document.getElementById("txtThuNhap");
var txtSoNguoiPT = document.getElementById("txtSoNguoiPT");
var btnTinhTienThue = document.getElementById("btnTinhTienThue");
var txtThue = document.getElementById("txtThue");

function thuNhapChiuThue(thuNhap, soNguoiPT) {
    return thuNhap - 4000000 - soNguoiPT * 1600000;
}

function tinhThue(thuNhap, soNguoiPT) {
    var ThuNhapChiuThue = thuNhapChiuThue(thuNhap, soNguoiPT);
    if (ThuNhapChiuThue <= 0) {
        return 0;
    }
    else if (ThuNhapChiuThue <= 60000000) {
        return ThuNhapChiuThue * 0.05;
    }
    else if (ThuNhapChiuThue <= 120000000) {
        return ThuNhapChiuThue * 0.1;
    }
    else if (ThuNhapChiuThue <= 210000000) {
        return ThuNhapChiuThue * 0.15;
    }
    else if (ThuNhapChiuThue <= 384000000) {
        return ThuNhapChiuThue * 0.2;
    }
    else if (ThuNhapChiuThue <= 624000000) {
        return ThuNhapChiuThue * 0.25;
    }
    else if (ThuNhapChiuThue <= 960000000) {
        return ThuNhapChiuThue * 0.3;
    }
    else {
        return ThuNhapChiuThue * 0.35;
    }
}

btnTinhTienThue.onclick = function () {
    //Đầu vào: Lấy input từ người dùng
    var hoTen = txtHoTen.value;
    var thuNhap = Number(txtThuNhap.value);
    var soNguoiPT = Number(txtSoNguoiPT.value);
    //Xử lý:
    var thue = tinhThue(thuNhap, soNguoiPT);
    var res = "Họ tên: " + hoTen + "; Thuế: " + new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(thue);
    //Đầu ra:
    txtThue.value = res;
}


/**
 * Bài 2:
 * Tính tiền cáp
 */

var slLoai = document.getElementById("slLoai");
var txtMaKH = document.getElementById("txtMaKH");
var txtSoKenhCC = document.getElementById("txtSoKenhCC");
var txtSoKetNoi = document.getElementById("txtSoKetNoi");
var btnTinhTienCap = document.getElementById("btnTinhTienCap");
var txtTienCap = document.getElementById("txtTienCap");

txtSoKetNoi.style.display = 'none';

slLoai.onchange = function () {
    var loai = slLoai.value;
    if (loai !== "2") {
        txtSoKetNoi.style.display = 'none';
    }
    else {
        txtSoKetNoi.style.display = 'block';
    }
}

function tienKetNoi(soKetNoi) {
    var res = 75;
    if (soKetNoi > 10) {
        res = res + (soKetNoi - 10) * 5;
    }
    return res;
}

function tienCap(loaiKH, soKenhCC, soKetNoi) {
    var res = 0;
    if (loaiKH === "1") {
        res += (4.5 + 20.5);
        res += (7.5 * soKenhCC);
    }
    else if (loaiKH === "2") {
        res += 15;
        res += tienKetNoi(soKetNoi);
        res += (50 * soKenhCC);
    }
    return res;
}

btnTinhTienCap.onclick = function () {
    //Đầu vào: Lấy input từ người dùng
    var loai = slLoai.value;
    var maKH = txtMaKH.value;
    var soKenhCC = Number(txtSoKenhCC.value);
    var soKetNoi = Number(txtSoKetNoi.value);
    //Xử lý:
    var tien = tienCap(loai, soKenhCC, soKetNoi);
    var res = "Họ tên: " + maKH + "; Tiền cáp: " + new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(tien);
    //Đầu ra: Hiển thị kết quả
    txtTienCap.value = res;
}


