//Render dsnv ra bảng
function renderDSNV(dsnv) {
  var contentHTML = "";
  for (var i = 0; i < dsnv.length; i++) {
    var data = dsnv[i];
    var trString = `<tr>
                          <td>${data.taiKhoan}</td>
                          <td>${data.ten}</td>
                          <td>${data.email}</td>
                          <td>${data.ngay}</td>
                          <td>${data.chucVuText}</td>
                          <td>${data.tongLuong()}</td>
                          <td>${data.xepLoai()}</td>
                          <td>
                          <button onclick = "xoaNV('${
                            data.taiKhoan
                          }')" class = "btn btn-danger">Xóa</button>
                          <button onclick = "suaNV('${
                            data.taiKhoan
                          }')" class = "btn btn-warning" data-toggle="modal" data-target="#myModal">Sửa</button>
                          </td>
                          </tr>`;
    contentHTML += trString;
  }
  document.getElementById("tableDanhSach").innerHTML = contentHTML;
}

//Chuyển đổi và lưu xuống local

function saveLocal() {
  //Load lại trang không mất data
  //Chuyển array thành JSON
  var dataJon = JSON.stringify(dsnv);
  //Lưu xuống
  localStorage.setItem("DSNV_LOCAL", dataJon);
  renderDSNV(dsnv);
}
