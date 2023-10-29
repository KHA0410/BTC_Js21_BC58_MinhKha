//Kiểm tra tài khoản có tồn tại không
function kiemTraTonTai(id, dsnv) {
  var viTri = dsnv.findIndex(function (item) {
    return item.taiKhoan == id;
  });
  if (viTri != -1) {
    document.getElementById("tbTKNV").innerHTML = "Tài khoản đã tồn tại !";
    return false;
  } else {
    document.getElementById("tbTKNV").innerHTML = "";
    return true;
  }
}

//Kiểm tra độ dài
function kiemTraDoDai(object, spanErr, min, max) {
  var length = object.length;
  if (min <= length && length <= max) {
    document.getElementById(spanErr).innerHTML = "";
    return true;
  } else {
    document.getElementById(
      spanErr
    ).innerHTML = `Độ dài phải từ ${min} đến ${max} !`;
    return false;
  }
}

//Kiểm tra giá trị nhập
function kiemTraGiaTri(object, spanErr, min, max) {
  if (min <= object && object <= max) {
    document.getElementById(spanErr).innerHTML = "";
    return true;
  } else {
    document.getElementById(
      spanErr
    ).innerHTML = `Gía trị nhập phải từ ${min} đến ${max} !`;
    return false;
  }
}

//Kiểm tra mật khẩu
function kiemTraMatKhau(matKhau) {
  const re = /^(?=.*\d)(?=.*[A-Z])(?=.*\W).+$/;
  var kiemTra = re.test(matKhau);
  if (kiemTra) {
    document.getElementById("tbMatKhau").innerText = "";
    return true;
  } else {
    document.getElementById("tbMatKhau").innerText =
      "Mật khẩu phải có ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặt biệt !";
    return false;
  }
}

//Kiểm tra tên
function kiemTraTen(ten) {
  const re = /^[A-Za-z\s]+$/;
  var kiemTra = re.test(ten);
  if (kiemTra) {
    document.getElementById("tbTen").innerText = "";
    return true;
  } else {
    document.getElementById("tbTen").innerText = "Tên nhân viên phải là chữ !";
    return false;
  }
}

//Kiểm tra định dạng email
function kiemTraEmail(email) {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  var kiemTra = re.test(email);
  if (kiemTra) {
    document.getElementById("tbEmail").innerText = "";
    return true;
  } else {
    document.getElementById("tbEmail").innerText = "Email không hợp lệ !";
    return false;
  }
}

//Kiểm tra định dạng ngày
function kiemTraNgay(ngay) {
  const re = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
  var kiemTra = re.test(ngay);
  if (kiemTra) {
    document.getElementById("tbNgay").innerText = "";
    return true;
  } else {
    document.getElementById("tbNgay").innerText = "Sai định dạng mm/dd/yyyy !";
    return false;
  }
}

//Kiểm tra chức vụ
function kiemTraChucVu(value) {
  var kiemTra = value;
  if (kiemTra == 1 || kiemTra == 2 || kiemTra == 3) {
    document.getElementById("tbChucVu").innerText = "";
    return true;
  } else {
    document.getElementById("tbChucVu").innerText = "Vui lòng chọn chức vụ !";
    return false;
  }
}

//Kiểm tra không được để trống
function kiemTraDeTrong(value, span) {
  var kiemTra = value;
  if (kiemTra == "") {
    document.getElementById(span).innerText = "Không được để trống !";
    return false;
  } else {
    document.getElementById(span).innerText = "";
    return true;
  }
}

//Kiểm tra tài khoản có phải số
function kiemTraSo(id) {
  if (!isNaN(id)) {
    document.getElementById("tbTKNV").innerText = "";
    return true;
  } else {
    document.getElementById("tbTKNV").innerText = "Tài khoản phải là số !";
    return false;
  }
}
