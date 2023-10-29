//Model object nhân viên
function NhanVien(
  _taiKhoan,
  _ten,
  _email,
  _matKhau,
  _ngay,
  _luong,

  _chucVuText,
  _chucVuValue,
  _gioLam
) {
  this.taiKhoan = _taiKhoan;
  this.ten = _ten;
  this.email = _email;
  this.matKhau = _matKhau;
  this.ngay = _ngay;
  this.luong = _luong;
  this.chucVuText = _chucVuText;
  this.chucVuValue = _chucVuValue;
  this.gioLam = _gioLam;
  this.tongLuong = function () {
    return this.chucVuValue * this.luong;
  };
  this.xepLoai = function () {
    switch (true) {
      case this.gioLam >= 192:
        return "nhân viên xuất sắc";
      case this.gioLam >= 176:
        return "nhân viên giỏi";
      case this.gioLam >= 160:
        return "nhân viên khá";
      case this.gioLam < 160:
        return "nhân viên trung bình";
    }
  };
}
