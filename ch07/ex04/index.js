const data = [
    { name: "Alice", class: "A", math: 10, chemistry: 30, geography: 20 },
    { name: "Bob", class: "A", math: 50, chemistry: 50, geography: 60 },
    { name: "Carol", class: "A", math: 70, chemistry: 55, geography: 30 },
    { name: "Dave", class: "B", math: 40, chemistry: 20, geography: 60 },
    { name: "Ellen", class: "B", math: 60, chemistry: 70, geography: 40 },
    { name: "Frank", class: "B", math: 90, chemistry: 70, geography: 80 },
    { name: "Isaac", class: "C", math: 70, chemistry: 40, geography: 50 },
    { name: "Justin", class: "C", math: 80, chemistry: 40, geography: 30 },
    { name: "Mallet", class: "C", math: 60, chemistry: 70, geography: 90 },
];

// `math`の全員の合計点
const mathPointsTotal = data.reduce((total, student) => {
    return total + student.math;
}, 0);

console.log(mathPointsTotal);

// クラスAの`chemistry`の平均点
const chemistryPointsTotal = data.filter(student => student.class === 'A')
    .reduce((total, student) => total + student.chemistry, 0)

const numOfClassA = data.filter(student => student.class === 'A').length;
const chemistryPointsAve = chemistryPointsTotal / numOfClassA;
console.log(chemistryPointsAve);

// 3科目合計点のクラスC内での平均点
const pointsTotalInClassC = data.filter(student => student.class === 'C')
    .reduce((total, student) => total + student.math + student.chemistry + student.geography, 0);
const numOfClassC = data.filter(student => student.class === 'C').length;
const pointsAveInClassC = pointsTotalInClassC / numOfClassC;
console.log(pointsAveInClassC);

// 3科目合計点が最も高い人の`name`
const highest = data.reduce((highest, student) => {
    const totalScore = student.math + student.chemistry + student.geography;
    if (totalScore > highest.totalScore) {
      return { name: student.name, totalScore: totalScore };
    } else {
      return highest;
    }
  }, { name: "", totalScore: 0 });
  
  const topStudent = highest.name;
  console.log(topStudent);

// 全体の`geography`の標準偏差=>要確認
const geographyPointsAve = data.reduce((total, student) => total + student.geography, 0) / data.length;
const squaredDifferencesSum = data.reduce((sum, student) => {
  const difference = student.geography - geographyPointsAve;
  return sum + (difference * difference);
}, 0);
const standardDeviation = Math.sqrt(squaredDifferencesSum / data.length);
console.log(standardDeviation);