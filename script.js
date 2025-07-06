
const quiz = [
  {
    step: "1-bosqich: Tayyorgarlik",
    question: "Qaysi harakat tashrifga tayyorgarlik bosqichiga tegishli?",
    answers: [
      { text: "Mijozga mahsulotni taqdim etish", score: 0 },
      { text: "Mijozning oldingi buyurtmalarini ko‘rib chiqish", score: 10 },
      { text: "Buyurtmani rasmiylashtirish", score: 0 },
      { text: "Yetkazib berishdan keyin qo‘ng‘iroq qilish", score: 0 }
    ],
    recommendation: "Har bir tashrifdan oldin mijoz haqidagi ma'lumotlarni o‘rganing – bu ishonchli savdo kalitidir."
  },
  {
    step: "2-bosqich: Kirish",
    question: "Quyidagi iboralardan qaysi biri kirish bosqichida ishlatiladi?",
    answers: [
      { text: "“Sizga qancha kerak?”", score: 0 },
      { text: "“Assalomu alaykum, men Fozilbekman, ‘EPA’ kompaniyasidan.”", score: 10 },
      { text: "“Buyurtmani rasmiylashtiraylikmi?”", score: 0 },
      { text: "“Bu nasos 370 Vt quvvatga ega.”", score: 0 }
    ],
    recommendation: "Kirishda iliq va samimiy aloqa o‘rnatish — ishonch asosidir."
  },
  {
    step: "3-bosqich: Ehtiyojni aniqlash",
    question: "Quyidagilardan qaysi biri ehtiyojni aniqlash bosqichiga mos savol?",
    answers: [
      { text: "“Siz bu mahsulotni qanday ishlatasiz?”", score: 10 },
      { text: "“Buyurtmani rasmiylashtiraylikmi?”", score: 0 },
      { text: "“Yetkazib berish payshanba bo‘ladimi?”", score: 0 },
      { text: "“Bu nasos 370 Vt.”", score: 0 }
    ],
    recommendation: "Savollar berish orqali mijozning muammosini tushunish – sotuvning asosi."
  },
  {
    step: "4-bosqich: Taqdimot",
    question: "Taqdimot bosqichida mahsulot qanday taqdim etilishi kerak?",
    answers: [
      { text: "Texnik xususiyatlar bilan", score: 5 },
      { text: "Mijoz ehtiyojiga mos foyda bilan", score: 10 },
      { text: "Narxni aytib", score: 0 },
      { text: "Raqobatchilarni tanqid qilib", score: 0 }
    ],
    recommendation: "Mahsulotni mijoz muammosiga moslashtirib taqdim eting – u yechim sotib oladi."
  },
  {
    step: "5-bosqich: E’tirozlar bilan ishlash",
    question: "Mijoz: “Bu mahsulot qimmat.” Sizning javobingiz?",
    answers: [
      { text: "“To‘g‘ri, lekin u 2 yil kafolatli va elektr sarfi past.”", score: 10 },
      { text: "“Narxga gap bo‘lmasin.”", score: 0 },
      { text: "“Xohlamasangiz olmasangiz ham bo‘ladi.”", score: 0 },
      { text: "“Boshqa arzonrog‘ini ko‘rasizmi?”", score: 5 }
    ],
    recommendation: "E’tiroz — bu qiziqish belgisi. Mantiqiy, foydali javob bering."
  },
  {
    step: "6-bosqich: Buyurtmani yakunlash",
    question: "Quyidagi iboralardan qaysi biri buyurtmani yakunlashga mos?",
    answers: [
      { text: "“Yana o‘ylab ko‘ring.”", score: 0 },
      { text: "“Buyurtmani rasmiylashtirsak bo‘ladimi?”", score: 10 },
      { text: "“Bu sizga qimmatga tushadi.”", score: 0 },
      { text: "“Men boshqa mijozga ham shuni taklif qilganman.”", score: 0 }
    ],
    recommendation: "Sotuv — bu faqat gaplashish emas, yakunlash hamdir."
  },
  {
    step: "7-bosqich: Tashrifdan keyingi monitoring",
    question: "Tashrifdan keyingi monitoring nima uchun muhim?",
    answers: [
      { text: "Mijozni eslatmasdan qo‘yish uchun", score: 0 },
      { text: "Keyingi ehtiyojlarni aniqlash va ishonchni mustahkamlash uchun", score: 10 },
      { text: "Yangi narxlarni bildirish uchun", score: 5 },
      { text: "Har safar yangi savdo boshlash uchun", score: 5 }
    ],
    recommendation: "Tashrifdan keyingi aloqa — uzoq muddatli hamkorlikning asosi."
  }
];

let current = 0;
let totalScore = 0;
let minScore = 10;
let minStep = "";
let minRecommendation = "";

const quizContainer = document.getElementById("quiz-container");
const resultContainer = document.getElementById("result-container");

function showQuestion() {
  const q = quiz[current];
  quizContainer.innerHTML = `
    <h2>${q.step}</h2>
    <p>${q.question}</p>
    ${q.answers.map((a, i) =>
      `<button onclick="selectAnswer(${a.score}, '${q.step}', \`${q.recommendation}\`)">${a.text}</button>`).join("")}
  `;
}

function selectAnswer(score, step, recommendation) {
  totalScore += score;
  if (score < minScore) {
    minScore = score;
    minStep = step;
    minRecommendation = recommendation;
  }
  current++;
  if (current < quiz.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  quizContainer.classList.add("hidden");
  resultContainer.classList.remove("hidden");
  resultContainer.innerHTML = `
    <h2>Test natijasi</h2>
    <p>Jami ball: ${totalScore} / ${quiz.length * 10}</p>
    <p>Eng zaif bosqich: ${minStep}</p>
    <p>Tavsiyalar: ${minRecommendation}</p>
  `;
}

showQuestion();
