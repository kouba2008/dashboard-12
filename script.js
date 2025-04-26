
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;
    
    // هنا يمكن إضافة عمليات تحقق من البيانات أو إرسالها إلى خادم
    console.log("اسم المستخدم:", username);
    console.log("كلمة المرور:", password);
    
    alert("تم تسجيل الدخول بنجاح!");
});
