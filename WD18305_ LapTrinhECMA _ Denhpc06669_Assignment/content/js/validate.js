function validateForm(event) {
    event.preventDefault(); // Ngăn chặn việc submit form mặc định

    var username = document.getElementById("username-login").value;
    var password = document.getElementById("password-login").value;

    var usernameError = document.getElementById("usernameError");
    var passwordError = document.getElementById("passwordError");

    var isValid = true;

    // Kiểm tra trường tên đăng nhập
    if (username === "") {
        usernameError.innerHTML = "Vui lòng nhập tên đăng nhập";
        isValid = false;
    } else {
        usernameError.innerHTML = "";
    }

    // Kiểm tra trường mật khẩu
    if (password === "") {
        passwordError.innerHTML = "Vui lòng nhập mật khẩu";
        isValid = false;
    } else {
        passwordError.innerHTML = "";
    }

    if (isValid) {
        document.getElementById("form_login").submit(); // Gửi form nếu hợp lệ
    }
}
function validateRegisterForm(event) {
    event.preventDefault(); // Ngăn chặn việc submit form mặc định
    
    // Lấy giá trị từ các trường nhập liệu
    var username = document.querySelector("#form_dang_ki input[name='username']").value;
    var fullName = document.querySelector("#form_dang_ki input[name='fullName']").value;
    var email = document.querySelector("#form_dang_ki input[name='email']").value;
    var password = document.querySelector("#form_dang_ki input[name='password']").value;
    
    // Lấy phần tử hiển thị lỗi
    var usernameError = document.getElementById("register-username-error");
    var fullNameError = document.getElementById("register-fullname-error");
    var emailError = document.getElementById("register-email-error");
    var passwordError = document.getElementById("register-password-error");
    
    // Khởi tạo biến kiểm tra hợp lệ
    var isValid = true;
    
    // Kiểm tra trường tên đăng nhập
    if (username.trim() === "") {
        usernameError.innerHTML = "Vui lòng nhập tên đăng nhập";
        isValid = false;
    } else {
        usernameError.innerHTML = "";
    }
    
    // Kiểm tra trường họ và tên
    if (fullName.trim() === "") {
        fullNameError.innerHTML = "Vui lòng nhập họ và tên";
        isValid = false;
    } else {
        fullNameError.innerHTML = "";
    }
    
    // Kiểm tra trường email
    if (email.trim() === "") {
        emailError.innerHTML = "Vui lòng nhập email";
        isValid = false;
    } else {
        emailError.innerHTML = "";
    }
    
    // Kiểm tra trường mật khẩu
    if (password.trim() === "") {
        passwordError.innerHTML = "Vui lòng nhập mật khẩu";
        isValid = false;
    } else {
        passwordError.innerHTML = "";
    }
    
    // Nếu form hợp lệ, tiến hành submit form
    if (isValid) {
        document.getElementById("form_dang_ki").submit();
    }
}