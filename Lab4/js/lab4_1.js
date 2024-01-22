let promise = new Promise(function(resolve, reject) {
  resolve(1);

  setTimeout(() => resolve(2), 1000);
  
});

promise.then(alert);

/* Kết quả chạy ra 1 vì Promise đã được giải quyết ngay lập tức và không có lỗi (reject) xảy ra, 
 nên hàm alert() sẽ nhận giá trị 1 và hiển thị trong cửa sổ thông báo. */

