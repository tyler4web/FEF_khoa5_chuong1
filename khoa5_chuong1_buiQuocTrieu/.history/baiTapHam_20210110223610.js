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
    console.log("Trung Binh");
  }
}
