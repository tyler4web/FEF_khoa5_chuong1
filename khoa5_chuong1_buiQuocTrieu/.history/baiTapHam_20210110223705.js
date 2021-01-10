function tinhDiemTB(toan, ly, hoa) {
  var diemTB = (toan + ly + hoa) / 3;
  return diemTB;
}

function xepLoai() {
  var dtb = tinhDiemTB;
  if (dtb < 5) {
    console.log("Yeu");
  } else if (dtb >= 5 && dtb < 6) {
    console.log("Trung Binh");
  } else if (dtb >= 6 && dtb < 7) {
    console.log("Tb Kha");
  } else if (dtb >= 7 && dtb < 8) {
    console.log("Kha");
  } else if (dtb >= 8 && dtb < 9) {
    console.log("Gioi");
  } else if (dtb >= 9 && dtb <= 10) {
    console.log("Gioi");
  }
}
