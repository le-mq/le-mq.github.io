/*Name this external file gallery.js*/

function upDate(previewPic) {
    // Lấy phần tử có id là 'image'
    let imageDiv = document.getElementById("image");

    // Thay đổi nền của div thành ảnh được hover
    imageDiv.style.backgroundImage = `url('${previewPic.src}')`;

    // Cập nhật văn bản của div thành alt của ảnh
    imageDiv.innerHTML = previewPic.alt;
}

function unDo() {
    // Lấy phần tử có id là 'image'
    let imageDiv = document.getElementById("image");

    // Đặt lại nền về trạng thái mặc định (dùng CSS để xác định trạng thái gốc nếu cần)
    imageDiv.style.backgroundImage = "";

    // Đặt lại văn bản về trạng thái gốc
    imageDiv.innerHTML = "Di chuột qua hình ảnh bên dưới để hiển thị tại đây";
}