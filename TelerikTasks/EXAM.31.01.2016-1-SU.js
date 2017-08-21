function solve(args) {

let courseSearched = args.pop();
let sum = 0;
let count = 0;

  for (var i = 0; i < args.length; i++) {
    
    let [student, course, examPts, courseBonus] = args[i].split(' ');
    let coursePts = (examPts/5) + Number(courseBonus);

    coursePts = coursePts.toFixed(1);
    coursePts = Math.round(coursePts*10)/10;

    let grade = ((coursePts / 80) * 4) + 2;
    if (grade > 6) {
      grade = 6.00;
    }
    grade = grade.toFixed(2);

    if (courseSearched === course) {
        sum += Number(examPts);
        count += 1;
    }

    if (examPts < 100) {
      console.log(`${student} failed at "${course}"`);
    }
    else {
      if (course !== undefined) {
        console.log(`${student}: Exam - "${course}"; Points - ${coursePts}; Grade - ${grade}`);
      }
      
    }
  }

  let avrgPts = (sum / count);
  avrgPts = (avrgPts * 100) / 100;
  if (avrgPts !== NaN && avrgPts !== undefined) {
    
    console.log(`"C#-Advanced" average points -> ${avrgPts}`);
  }
  
  }
    



solve([
  'Pesho C#-Advanced 100 3',
  'Gosho Java-Basics 157 3',
  'Tosho HTML&CSS 317 12',
  'Minka C#-Advanced 57 15',
  'Stanka C#-Advanced 157 15',
  'Kircho C#-Advanced 300 0',
  'Niki C#-Advanced 400 10',
  'C#-Advanced'
]);


