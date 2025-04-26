// Firebase SDK
import { getDatabase, ref, get, set, push } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

// إعدادات Firebase (من ملف firebaseConfig.js)
import { db } from './firebaseConfig.js';

// جلب المستخدمين
const usersRef = ref(db, 'users/');
get(usersRef).then((snapshot) => {
  if (snapshot.exists()) {
    const users = snapshot.val();
    let usersHtml = '';
    Object.keys(users).forEach(userId => {
      const user = users[userId];
      usersHtml += `
        <tr>
          <td>${user.username}</td>
          <td>${user.email}</td>
          <td>${user.status}</td>
          <td>
            <button onclick="editUser('${userId}')">تعديل</button>
            <button onclick="deleteUser('${userId}')">حذف</button>
          </td>
        </tr>
      `;
    });
    document.getElementById("userList").innerHTML = usersHtml;
  }
});

// وظيفة لتعديل المستخدم
function editUser(userId) {
  alert("تعديل المستخدم: " + userId);
}

// وظيفة لحذف المستخدم
function deleteUser(userId) {
  alert("حذف المستخدم: " + userId);
}

// جلب الإيداعات
const depositsRef = ref(db, 'deposits/');
get(depositsRef).then((snapshot) => {
  if (snapshot.exists()) {
    const deposits = snapshot.val();
    let depositsHtml = '';
    Object.keys(deposits).forEach(depositId => {
      const deposit = deposits[depositId];
      depositsHtml += `
        <tr>
          <td>${deposit.user}</td>
          <td>${deposit.amount}</td>
          <td>${deposit.status}</td>
          <td>
            <button onclick="approveDeposit('${depositId}')">قبول</button>
            <button onclick="rejectDeposit('${depositId}')">رفض</button>
          </td>
        </tr>
      `;
    });
    document.getElementById("depositList").innerHTML = depositsHtml;
  }
});

// قبول الإيداع
function approveDeposit(depositId) {
  const depositRef = ref(db, 'deposits/' + depositId);
  set(depositRef, { status: "مقبول" });
  alert("تم قبول الإيداع");
}

// رفض الإيداع
function rejectDeposit(depositId) {
  const depositRef = ref(db, 'deposits/' + depositId);
  set(depositRef, { status: "مرفوض" });
  alert("تم رفض الإيداع");
}

// جلب الإحصائيات
get(usersRef).then((snapshot) => {
  if (snapshot.exists()) {
    document.getElementById("userCount").textContent = Object.keys(snapshot.val()).length;
  }
});

// إضافة خطة استثمارية جديدة
function addPlan() {
  const planName = document.getElementById('planName').value;
  const planAmount = document.getElementById('planAmount').value;

  if (planName && planAmount) {
    const newPlanRef = push(plansRef);
    set(newPlanRef, { name: planName, amount: planAmount });
  }
// مثال بسيط للعرض التجريبي
const withdrawalsList = document.getElementById("withdrawalsList");

const withdrawals = [
  { user: "Ahmed", amount: 50, date: "2025-04-25" },
  { user: "Sara", amount: 120, date: "2025-04-26" }
];

withdrawals.forEach(w => {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${w.user}</td>
    <td>${w.amount} USDT</td>
    <td>${w.date}</td>
  `;
  withdrawalsList.appendChild(tr);
});