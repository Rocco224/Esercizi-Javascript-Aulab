const students = [
  'Thomas Armao',
  'Carlo Sinatra',
  'Tommaso Coppolino',
  'Giovanni De Cola',
  'Alexis_',
  'Alessandra Manara',
  'Sulayman',
  'Chiara Cassarà',
  'Antonio Annunziata',
  'Papa_Mbath',
  'Alessio Canella',
  'Brian Luis Ramirez',
  'Umberto Benzoni',
  'Silvio Gravina',
  'Alessandro Codega',
  'Guilherme Nicacio',
  'Rocco Clemente',
  'Michele Depalma',
  'Valerio Gemelli',
  'Bamogo Tewende',
  'Alioune Gueye',
  'Francesco Ziccardi',
  'Francesco Margarito',
  'Alessandro Soccio',
  'Paola9666',
  'Elisa Moratto',
  'Marilù Moscato',
  'Cristina Murga',
  'Synixa_',
  'Antony De Lellis',
  'FrancescoMazzanti',
  'Cristian Dessolis',
  'Biagio Trotta',
  'Pierluigi Palmisano',
  'salvatore.dandrea',
  'Massimiliano Attianese',
  'Ahmed Mansour',
  'Amir Ahmic',
  'Nunzrigl',
  'Vinicius Gomes',
  'Elisa95d',
  'Cristina Strigini',
  'Ayoub Gasmi',
  'Loreno Lopez',
  'Stefano Simonetti',
  'Davide Savo'
];

function randomizeStudents(studentsArray) {
  let mixedStudents = [];
  let numbersAlreadyOut = [];

  let numbersAlreadyOutIsFull = false;
  let i = 0;
  while (numbersAlreadyOutIsFull == false) {
    let randomIndex = Math.floor(Math.random() * ((studentsArray.length - 1) - 0 + 1) + 0);

    if (!numbersAlreadyOut.includes(randomIndex)) {
      numbersAlreadyOut.push(randomIndex);
      mixedStudents.push(studentsArray[numbersAlreadyOut[i]]);
      i++;
    }

    if (numbersAlreadyOut.length == studentsArray.length) {
      numbersAlreadyOutIsFull = true;
    }
  }

  return mixedStudents
}

console.log(randomizeStudents(students));

const classesForm = document.getElementById("classesForm");
const classesRow = document.getElementById("classesRow");

/*
  <div class="col-md-3 mb-4 mx-1 p-3 border border-warning rounded-bottom text-center">
                            <h3>Aula studio 1</h3>
                            <ul class="p-0">
                                <li>Francesco Margarito</li>
                                <li>Rocco Clemente</li>
                                <li>Antonio Annunziata</li>
                                <li>Amir Ahmic</li>
                            </ul>
                        </div>
*/

function generateClasses(students) {
  let n = 1;
  for (let i = 0; i < students.length; i += 4) {
    const classBody = document.createElement("div");
    classBody.classList.add("col-md-3", "mb-4", "mx-1", "p-3", "border", "border-warning", "rounded-bottom", "text-center", "bg-dark", "bg-gradient", "shadow", "bg-opacity-50");
    classesRow.appendChild(classBody);

    const classTitle = document.createElement("h3");
    classTitle.textContent = `Aula studio ${n}`;
    classBody.appendChild(classTitle);

    const studentsList = document.createElement("ul");
    studentsList.classList.add("p-0");
    classBody.appendChild(studentsList);

    for (let k = 0; k < 4; k++) {
      const student = document.createElement("li");
      student.textContent = students[i + k];
      studentsList.appendChild(student);
    };

    n++;
  }
}

generateClasses(randomizeStudents(students));

classesForm.addEventListener("submit", (event) => {
  event.preventDefault();

  while (classesRow.hasChildNodes()) {
    classesRow.removeChild(classesRow.firstChild)
  };

  generateClasses(randomizeStudents(students));
})