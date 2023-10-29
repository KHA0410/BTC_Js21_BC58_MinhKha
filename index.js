//Tạo mảng danh sách nhân viên
var dsnv = [];
//Lấy ra
var dataJon = localStorage.getItem("DSNV_LOCAL");
//chuyển JSON thành array để sử dụng
if (dataJon != null) {
  var result = JSON.parse(dataJon);
  var dsnv = result.map(function (item) {
    return new NhanVien(
      item.taiKhoan,
      item.ten,
      item.email,
      item.matKhau,
      item.ngay,
      item.luong,
      item.chucVuText,
      item.chucVuValue,
      item.gioLam
    );
  });
  renderDSNV(dsnv);
}
//Thêm nhân viên
document.getElementById("btnThemNV").onclick = function themNV() {
  //Lấy data nhân viên từ ô input
  var _taiKhoan = document.getElementById("tknv").value;
  var _ten = document.getElementById("name").value;
  var _email = document.getElementById("email").value;
  var _matKhau = document.getElementById("password").value;
  var _ngay = document.getElementById("datepicker").value;
  var _luong = document.getElementById("luongCB").value * 1;
  var _gioLam = document.getElementById("gioLam").value * 1;
  var e = document.getElementById("chucvu");
  var _chucVuValue = e.value;
  var _chucVuText = e.options[e.selectedIndex].text;

  //Tạo object nhân viên
  var nv = new NhanVien(
    _taiKhoan,
    _ten,
    _email,
    _matKhau,
    _ngay,
    _luong,
    _chucVuText,
    _chucVuValue,
    _gioLam
  );

  //Kiểm tra điều kiện nhập
  //Kiểm tra tài khoản
  var kiemTra =
    kiemTraDeTrong(nv.taiKhoan, "tbTKNV") &&
    kiemTraSo(nv.taiKhoan) &&
    kiemTraTonTai(nv.taiKhoan, dsnv) &&
    kiemTraDoDai(nv.taiKhoan, "tbTKNV", 4, 6);

  //Kiểm tra tên
  kiemTra = kiemTraDeTrong(nv.ten, "tbTen") && kiemTraTen(nv.ten);

  //Kiểm tra email
  kiemTra = kiemTraDeTrong(nv.email, "tbEmail") & kiemTraEmail(nv.email);

  //Kiểm tra mật khẩu
  kiemTra =
    kiemTraDeTrong(nv.matKhau, "tbMatKhau") &&
    kiemTraDoDai(nv.matKhau, "tbMatKhau", 6, 10) &&
    kiemTraMatKhau(nv.matKhau);

  //Kiểm tra định dạng ngày
  kiemTra = kiemTraDeTrong(nv.ngay, "tbNgay") && kiemTraNgay(nv.ngay);

  //Kiểm tra lương
  kiemTra =
    kiemTraDeTrong(nv.luong, "tbLuongCB") &&
    kiemTraGiaTri(nv.luong, "tbLuongCB", 1000000, 20000000);

  //Kiểm tra giờ làm
  kiemTra =
    kiemTraDeTrong(nv.gioLam, "tbGiolam") &&
    kiemTraGiaTri(nv.gioLam, "tbGiolam", 80, 200);

  //Kiểm tra chức vụ
  kiemTra = kiemTra & kiemTraChucVu(nv.chucVuValue);

  if (kiemTra) {
    //Đẩy object nhân viên lên mảng
    dsnv.push(nv);
    saveLocal();
    $("#myModal").modal("hide");
  }
};

//Chức năng xóa
function xoaNV(id) {
  var viTri = dsnv.findIndex(function (item) {
    return item.taiKhoan == id;
  });
  dsnv.splice(viTri, 1);
  renderDSNV(dsnv);
  saveLocal();
}

//Chức năng sửa
function suaNV(id) {
  var viTri = dsnv.findIndex(function (item) {
    return item.taiKhoan == id;
  });
  var nv = dsnv[viTri];
  document.getElementById("tknv").value = nv.taiKhoan;
  document.getElementById("tknv").readOnly = true;
  document.getElementById("name").value = nv.ten;
  document.getElementById("email").value = nv.email;
  document.getElementById("password").value = nv.matKhau;
  document.getElementById("datepicker").value = nv.ngay;
  document.getElementById("luongCB").value = nv.luong;
  document.getElementById("gioLam").value = nv.gioLam;
  document.getElementById("chucvu").value = nv.chucVuValue;
}

//Chức năng cập nhật
document.getElementById("btnCapNhat").onclick = function capNhat() {
  var id = document.getElementById("tknv").value;
  var viTri = dsnv.findIndex(function (item) {
    return item.taiKhoan == id;
  });
  //Lấy data nhân viên từ ô input

  var _ten = document.getElementById("name").value;
  var _email = document.getElementById("email").value;
  var _matKhau = document.getElementById("password").value;
  var _ngay = document.getElementById("datepicker").value;
  var _luong = document.getElementById("luongCB").value * 1;
  var _gioLam = document.getElementById("gioLam").value * 1;
  var e = document.getElementById("chucvu");
  var _chucVuValue = e.value;
  var _chucVuText = e.options[e.selectedIndex].text;
  $("#myModal").modal("hide");

  //Cập nhật
  var nv = dsnv[viTri];
  nv.ten = _ten;
  nv.email = _email;
  nv.matKhau = _matKhau;
  nv.luong = _luong;
  nv.ngay = _ngay;
  nv.gioLam = _gioLam;
  nv.chucVuText = _chucVuText;
  nv.chucVuValue = _chucVuValue;
  saveLocal();
  renderDSNV(dsnv);
};
//Chức năng tìm
document.getElementById("btnTimNV").onclick = function search() {
  var keySearch = document.getElementById("searchName").value.toLowerCase();

  // Sử dụng hàm filter để lọc ra các nhân viên có xếp hạng trùng với keySearch
  var ketQuaTimKiem = dsnv.filter(function (nv) {
    return nv.xepLoai().toLowerCase().includes(keySearch);
  });

  // In danh sách kết quả tìm kiếm ra bảng
  renderDSNV(ketQuaTimKiem);
};
