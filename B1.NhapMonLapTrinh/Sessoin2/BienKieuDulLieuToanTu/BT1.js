let Diemvatly = parseInt(prompt("Nhap diem vat ly: "));
document.write("Diem vat ly:" + Diemvatly+"<br>");

let Diemhoahoc = parseInt(prompt("Nhap diem hoa hoc"));
document.write("Diem hoa hoc:" + Diemhoahoc+"<br>");

let Diemsinhhoc = parseInt(prompt("Nhap diem sinh hoc:"));
document.write("Diem sinh hoc:" + Diemsinhhoc+"<br>");

document.write("Diem trung binh:" + (Diemvatly+Diemhoahoc+Diemsinhhoc)/3+"<br>");