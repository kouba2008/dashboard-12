function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const storedUser = JSON.parse(localStorage.getItem('user'));

  if (storedUser && storedUser.username === username && storedUser.password === password) {
    alert("تم تسجيل الدخول بنجاح!");
    window.location.href = "dashboard.html";
  } else {
    alert("البيانات غير صحيحة!");
  }
}

function register() {
  const username = document.getElementById('newUsername').value;
  const password = document.getElementById('newPassword').value;

  if (username && password) {
    localStorage.setItem('user', JSON.stringify({ username, password }));
    alert("تم إنشاء الحساب بنجاح!");
    window.location.href = "index.html";
  } else {
    alert("يرجى ملء جميع الحقول.");
  }
}
function showPlans() {
  document.getElementById('mainContent').innerHTML = `
    <h3>الخطط الاستثمارية</h3>
    <p>هنا سيتم عرض الخطط الاستثمارية.</p>
  `;
}

function showTasks() {
  document.getElementById('mainContent').innerHTML = `
    <h3>المهام اليومية</h3>
    <p>أكمل المهام اليومية لتحصل على أرباح.</p>
  `;
}

function showProfile() {
  document.getElementById('mainContent').innerHTML = `
    <h3>البروفايل</h3>
    <p>رصيدك: <strong>0 USDT</strong></p>
    <button onclick="deposit()">إيداع USDT (BEP20)</button>
    <button onclick="withdraw()">سحب USDT (BEP20)</button>
  `;
}

function deposit() {
  const wallet = prompt("أدخل عنوان محفظتك BEP20 للإيداع:");
  if (wallet) {
    alert("تم إرسال عنوان الإيداع الخاص بك، تأكد من الدفع على الشبكة BEP20.");
  }
}

function withdraw() {
  const wallet = prompt("أدخل عنوان محفظتك BEP20 للسحب:");
  const amount = prompt("كمية USDT التي تريد سحبها:");
  if (wallet && amount) {
    alert(`تم طلب سحب ${amount} USDT إلى المحفظة: ${wallet}`);
  }
}
let balance = 0;

function showPlans() {
  document.getElementById('mainContent').innerHTML = `
    <h3>الخطط الاستثمارية</h3>
    <p>اختر خطة للاستثمار وزيادة أرباحك.</p>
  `;
}

function showTasks() {
  document.getElementById('mainContent').innerHTML = `
    <h3>المهام اليومية</h3>
    <p>قم بإكمال المهام اليومية لتحصل على أرباح إضافية.</p>
    <button onclick="completeTask()">إكمال المهمة</button>
  `;
}

function showProfile() {
  document.getElementById('mainContent').innerHTML = `
    <h3>البروفايل</h3>
    <p>رصيدك: <strong>${balance} USDT</strong></p>
    <button onclick="deposit()">إيداع USDT (BEP20)</button>
    <button onclick="withdraw()">سحب USDT (BEP20)</button>
  `;
}

function completeTask() {
  balance += 1;
  alert("تم إكمال المهمة اليومية! +1 USDT");
  showProfile();
}

function deposit() {
  const address = prompt("أدخل عنوان محفظتك للإيداع (BEP20):");
  if (address && address.startsWith("0x") && address.length === 42) {
    alert("تم إرسال عنوان الإيداع، تأكد من استخدام شبكة BEP20.");
  } else {
    alert("عنوان غير صحيح! تأكد من أن يبدأ بـ 0x وطوله 42 حرف.");
  }
}

function withdraw() {
  const address = prompt("أدخل عنوان محفظتك للسحب (BEP20):");
  const amount = prompt("كمية USDT التي تريد سحبها:");
  if (address && amount && parseFloat(amount) <= balance) {
    balance -= parseFloat(amount);
    alert(`تم إرسال طلب السحب (${amount} USDT) إلى ${address}`);
    showProfile();
  } else {
    alert("تأكد من صحة العنوان والرصيد.");
  }
}