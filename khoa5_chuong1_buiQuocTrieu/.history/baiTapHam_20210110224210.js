function tinhDiemTB(toan, ly, hoa) {
  var diemTB = (toan + ly + hoa) / 3;
  return diemTB;
}

function xepLoai(dtb) {
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
    console.log("Xuat Sac");
  }
}

function hamChinh() {
  var toan = 7;
  var ly = 6;
  var hoa = 6;
  var diemTB = tinhDiemTB(toan, ly, hoa);

  console.log("diem toan:" + toan);
  console.log("diem ly:" + ly);
  console.log("diem ly:" + hoa);
  console.log("Xep loai hoc luc:");
  xepLoai(diemTB);
}

hamChinh();
