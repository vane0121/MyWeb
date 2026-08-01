// =========================================================
// Vanessa Battung — Challenge / Quiz Section JS
// =========================================================

const challengeData = {
  general: [
    { question: "What is the capital of France?", answers: ["London", "Paris", "Berlin", "Madrid"], correct: 1 },
    { question: "Which planet is known as the Red Planet?", answers: ["Venus", "Mars", "Jupiter", "Saturn"], correct: 1 },
    { question: "Who painted the Mona Lisa?", answers: ["Van Gogh", "Picasso", "Leonardo da Vinci", "Michelangelo"], correct: 2 },
    { question: "What is the largest ocean?", answers: ["Atlantic", "Indian", "Arctic", "Pacific"], correct: 3 },
    { question: "In what year did World War II end?", answers: ["1943", "1944", "1945", "1946"], correct: 2 },
    { question: "Which country invented pizza?", answers: ["France", "Italy", "USA", "Greece"], correct: 1 },
    { question: "Tallest mountain in the world?", answers: ["K2", "Everest", "Kilimanjaro", "Denali"], correct: 1 },
    { question: "Language with most native speakers?", answers: ["English", "Mandarin", "Spanish", "Hindi"], correct: 1 },
    { question: "Smallest country in the world?", answers: ["Monaco", "San Marino", "Vatican City", "Liechtenstein"], correct: 2 },
    { question: "Sahara Desert is in?", answers: ["Asia", "Africa", "Australia", "South America"], correct: 1 },
    { question: "Who wrote 'Hamlet'?", answers: ["Shakespeare", "Dickens", "Homer", "Tolstoy"], correct: 0 },
    { question: "Currency of Japan?", answers: ["Yuan", "Yen", "Won", "Ringgit"], correct: 1 },
    { question: "Fastest land animal?", answers: ["Lion", "Cheetah", "Horse", "Tiger"], correct: 1 },
    { question: "Which country hosted 2016 Olympics?", answers: ["China", "Brazil", "UK", "Japan"], correct: 1 },
    { question: "Largest desert in the world?", answers: ["Sahara", "Gobi", "Antarctica", "Kalahari"], correct: 2 },
    { question: "Who discovered America?", answers: ["Columbus", "Magellan", "Cook", "Vespucci"], correct: 0 },
    { question: "Which is the longest river?", answers: ["Amazon", "Nile", "Yangtze", "Mississippi"], correct: 1 },
    { question: "Which country has the maple leaf flag?", answers: ["USA", "Canada", "UK", "Australia"], correct: 1 },
    { question: "Which planet has rings?", answers: ["Mars", "Earth", "Saturn", "Venus"], correct: 2 },
    { question: "Which is the largest continent?", answers: ["Africa", "Asia", "Europe", "Australia"], correct: 1 }
  ],
  academic: [
    { question: "Symbol for Gold?", answers: ["Go", "Gd", "Au", "Ag"], correct: 2 },
    { question: "Theory of evolution?", answers: ["Newton", "Darwin", "Einstein", "Hawking"], correct: 1 },
    { question: "Powerhouse of the cell?", answers: ["Nucleus", "Ribosome", "Mitochondria", "Chloroplast"], correct: 2 },
    { question: "Formula for photosynthesis?", answers: ["6CO₂ + H₂O = C₆H₁₂O₆ + O₂", "C₆H₁₂O₆ + O₂ = CO₂ + H₂O", "H₂O + O₂ = H₂O₂", "CO₂ = C + O₂"], correct: 0 },
    { question: "Smallest unit of life?", answers: ["Atom", "Molecule", "Cell", "Organ"], correct: 2 },
    { question: "Who discovered penicillin?", answers: ["Fleming", "Pasteur", "Curie", "Mendel"], correct: 0 },
    { question: "Speed of light?", answers: ["300,000 km/s", "150,000 km/s", "1,000 km/s", "30,000 km/s"], correct: 0 },
    { question: "Gas absorbed in photosynthesis?", answers: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], correct: 1 },
    { question: "Father of modern physics?", answers: ["Newton", "Einstein", "Galileo", "Bohr"], correct: 1 },
    { question: "H₂O is?", answers: ["Hydrogen", "Water", "Oxygen", "Salt"], correct: 1 },
    { question: "Who discovered gravity?", answers: ["Einstein", "Newton", "Galileo", "Kepler"], correct: 1 },
    { question: "Which organ pumps blood?", answers: ["Lungs", "Brain", "Heart", "Kidney"], correct: 2 },
    { question: "DNA stands for?", answers: ["Deoxyribonucleic Acid", "Dynamic Nucleic Acid", "Digital Nucleic Acid", "None"], correct: 0 },
    { question: "What is the boiling point of water?", answers: ["50°C", "75°C", "100°C", "120°C"], correct: 2 },
    { question: "Who invented the telephone?", answers: ["Bell", "Edison", "Tesla", "Marconi"], correct: 0 },
    { question: "Which planet is closest to the Sun?", answers: ["Venus", "Mercury", "Earth", "Mars"], correct: 1 },
    { question: "What is the hardest natural substance?", answers: ["Gold", "Iron", "Diamond", "Steel"], correct: 2 },
    { question: "Which blood type is universal donor?", answers: ["A", "B", "O", "AB"], correct: 2 },
    { question: "Which scientist proposed relativity?", answers: ["Einstein", "Newton", "Bohr", "Darwin"], correct: 0 },
    { question: "Which vitamin is produced by sunlight?", answers: ["A", "B", "C", "D"], correct: 3 }
  ],
  biblical: [
    { question: "Books in New Testament?", answers: ["27", "39", "66", "73"], correct: 0 },
    { question: "First man?", answers: ["Noah", "Abraham", "Adam", "Moses"], correct: 2 },
    { question: "How many disciples?", answers: ["10", "11", "12", "13"], correct: 2 },
    { question: "Shortest book?", answers: ["Obadiah", "Philemon", "3 John", "2 John"], correct: 2 },
    { question: "City of Jesus' birth?", answers: ["Nazareth", "Jerusalem", "Bethlehem", "Capernaum"], correct: 2 },
    { question: "Who built the ark?", answers: ["Moses", "Noah", "Abraham", "David"], correct: 1 },
    { question: "First book of the Bible?", answers: ["Exodus", "Genesis", "Psalms", "Matthew"], correct: 1 },
    { question: "Last book of New Testament?", answers: ["Acts", "Revelation", "Hebrews", "Romans"], correct: 1 },
    { question: "Who led Israelites out of Egypt?", answers: ["Abraham", "Moses", "Joshua", "David"], correct: 1 },
    { question: "Ten Commandments given to?", answers: ["Moses", "Noah", "Abraham", "Jacob"], correct: 0 },
    { question: "Jesus turned water into?", answers: ["Milk", "Wine", "Oil", "Bread"], correct: 1 },
    { question: "Who betrayed Jesus?", answers: ["Peter", "Judas", "Thomas", "John"], correct: 1 },
    { question: "Who was swallowed by a big fish?", answers: ["Jonah", "Job", "Joseph", "Jacob"], correct: 0 },
    { question: "Who killed Goliath?", answers: ["Saul", "David", "Solomon", "Samuel"], correct: 1 },
    { question: "Which prophet confronted Baal prophets?", answers: ["Elijah", "Isaiah", "Jeremiah", "Daniel"], correct: 0 },
    { question: "Who was Abraham’s wife?", answers: ["Sarah", "Rachel", "Leah", "Rebecca"], correct: 0 },
    { question: "Which gospel is longest?", answers: ["Matthew", "Mark", "Luke", "John"], correct: 2 },
    { question: "Who denied Jesus 3 times?", answers: ["Peter", "John", "James", "Thomas"], correct: 0 },
    { question: "Who wrote most letters in NT?", answers: ["Paul", "Peter", "John", "James"], correct: 0 },
    { question: "Which king built the temple?", answers: ["David", "Solomon", "Saul", "Hezekiah"], correct: 1 }
  ],
  math: [
    { question: "√144?", answers: ["10", "11", "12", "13"], correct: 2 },
    { question: "15% of 200?", answers: ["20", "25", "30", "35"], correct: 2 },
    { question: "x+5=12, x=?", answers: ["5", "6", "7", "8"], correct: 2 },
    { question: "π rounded to 2 decimals?", answers: ["3.12", "3.14", "3.16", "3.18"], correct: 1 },
    { question: "Degrees in a triangle?", answers: ["90", "180", "270", "360"], correct: 1 },
    { question: "9 × 9?", answers: ["72", "81", "99", "108"], correct: 1 },
    { question: "Simplify: 2(3+4)", answers: ["12", "14", "16", "18"], correct: 1 },
    { question: "25% of 400?", answers: ["50", "75", "100", "125"], correct: 2 },
    { question: "Solve: 5²", answers: ["20", "25", "30", "35"], correct: 1 },
    { question: "What is 7×8?", answers: ["54", "56", "58", "60"], correct: 1 },
    { question: "Solve: 100 ÷ 4", answers: ["20", "25", "30", "40"], correct: 1 },
    { question: "Area of a square with side 6?", answers: ["24", "30", "36", "42"], correct: 2 },
    { question: "Perimeter of a rectangle 4×7?", answers: ["18", "20", "22", "24"], correct: 2 },
    { question: "Solve: 2³", answers: ["6", "8", "9", "12"], correct: 1 },
    { question: "What is 1/2 of 90?", answers: ["30", "40", "45", "50"], correct: 2 },
    { question: "Convert 0.75 to fraction?", answers: ["1/2", "2/3", "3/4", "4/5"], correct: 2 },
    { question: "Solve: 12 ÷ 3", answers: ["2", "3", "4", "5"], correct: 2 },
    { question: "What is 11×11?", answers: ["111", "120", "121", "132"], correct: 2 },
    { question: "Circumference formula?", answers: ["πr²", "2πr", "πd", "r²"], correct: 1 },
    { question: "Solve: 6×12", answers: ["60", "66", "72", "78"], correct: 2 }
  ],
  grammar: [
    { question: "Which sentence is grammatically correct?", answers: ["She don't like coffee", "She doesn't like coffee", "She doesn't likes coffee", "She do not like coffee"], correct: 1 },
    { question: "Correct verb form: 'I have _____ the book'?", answers: ["read", "readed", "reading", "reads"], correct: 0 },
    { question: "Which word is spelled correctly?", answers: ["Recieve", "Recieve", "Receive", "Recieve"], correct: 2 },
    { question: "Correct subject-verb agreement?", answers: ["The team are ready", "The team is ready", "The team are ready to go", "The team have left"], correct: 1 },
    { question: "Plural of 'child'?", answers: ["Childs", "Childes", "Children", "Childer"], correct: 2 },
    { question: "Past tense of 'go'?", answers: ["goed", "gone", "went", "going"], correct: 2 },
    { question: "Which is a proper noun?", answers: ["city", "dog", "London", "river"], correct: 2 },
    { question: "Identify the adjective: 'The tall building'", answers: ["The", "tall", "building", "none"], correct: 1 },
    { question: "Plural of 'mouse'?", answers: ["mouses", "mice", "mouse", "mices"], correct: 1 },
    { question: "Choose correct sentence:", answers: ["He have a car", "He has a car", "He haves a car", "He having a car"], correct: 1 },
    { question: "Correct spelling?", answers: ["Definately", "Definitely", "Defanitely", "Definetly"], correct: 1 },
    { question: "Past tense of 'eat'?", answers: ["ate", "eated", "eaten", "eat"], correct: 0 },
    { question: "Which is an interjection?", answers: ["Wow", "Run", "Fast", "Blue"], correct: 0 },
    { question: "Correct article: 'She bought ___ apple'", answers: ["a", "an", "the", "none"], correct: 1 },
    { question: "Plural of 'tooth'?", answers: ["tooths", "teeth", "tooth", "teeths"], correct: 1 },
    { question: "Correct sentence:", answers: ["Its raining", "It's raining", "Its' raining", "It rains"], correct: 1 },
    { question: "Past tense of 'write'?", answers: ["writed", "wrote", "written", "writing"], correct: 1 },
    { question: "Identify the verb: 'She runs fast'", answers: ["She", "runs", "fast", "none"], correct: 1 },
    { question: "Correct comparative form of 'happy'?", answers: ["happier", "more happy", "most happy", "happyest"], correct: 0 },
    { question: "Correct sentence:", answers: ["They was late", "They were late", "They is late", "They are late"], correct: 1 }
  ],
  philippines: [
    { question: "What is the capital of the Philippines?", answers: ["Manila", "Quezon City", "Cebu", "Davao"], correct: 0 },
    { question: "Who is known as the national hero of the Philippines?", answers: ["Andres Bonifacio", "Jose Rizal", "Emilio Aguinaldo", "Lapu-Lapu"], correct: 1 },
    { question: "What is the longest river in the Philippines?", answers: ["Agusan", "Cagayan", "Pasig", "Pampanga"], correct: 1 },
    { question: "Which volcano erupted in 1991?", answers: ["Mayon", "Taal", "Pinatubo", "Kanlaon"], correct: 2 },
    { question: "What is the national language?", answers: ["English", "Tagalog", "Filipino", "Bisaya"], correct: 2 },
    { question: "What is the national bird?", answers: ["Maya", "Philippine Eagle", "Kingfisher", "Parrot"], correct: 1 },
    { question: "What is the national flower?", answers: ["Sampaguita", "Rose", "Waling-waling", "Sunflower"], correct: 0 },
    { question: "Which city is known as the 'Summer Capital'?", answers: ["Baguio", "Tagaytay", "Cebu", "Davao"], correct: 0 },
    { question: "What is the oldest city in the Philippines?", answers: ["Manila", "Cebu", "Vigan", "Iloilo"], correct: 1 },
    { question: "Which island is the largest?", answers: ["Luzon", "Visayas", "Mindanao", "Palawan"], correct: 0 },
    { question: "Which is the smallest province?", answers: ["Batanes", "Camiguin", "Guimaras", "Siquijor"], correct: 0 },
    { question: "Who was the first president?", answers: ["Emilio Aguinaldo", "Manuel Quezon", "Jose Laurel", "Andres Bonifacio"], correct: 0 },
    { question: "What is the national sport?", answers: ["Basketball", "Arnis", "Boxing", "Sepak Takraw"], correct: 1 },
    { question: "Which city is called the 'Queen City of the South'?", answers: ["Cebu", "Davao", "Iloilo", "Zamboanga"], correct: 0 },
    { question: "What is the national dish?", answers: ["Adobo", "Sinigang", "Lechon", "Kare-Kare"], correct: 0 },
    { question: "Which province is famous for Chocolate Hills?", answers: ["Bohol", "Palawan", "Leyte", "Negros"], correct: 0 },
    { question: "Which island is known for white sand beaches?", answers: ["Boracay", "Palawan", "Siargao", "Bohol"], correct: 0 },
    { question: "Which city is known as the 'Walled City'?", answers: ["Intramuros", "Vigan", "Cebu", "Iloilo"], correct: 0 },
    { question: "Which Philippine hero is called 'The Great Plebeian'?", answers: ["Jose Rizal", "Andres Bonifacio", "Emilio Aguinaldo", "Apolinario Mabini"], correct: 1 },
    { question: "Which is the national tree?", answers: ["Narra", "Mahogany", "Molave", "Acacia"], correct: 0 }
  ],
  music: [
    { question: "Who is known as the 'King of Pop'?", answers: ["Elvis Presley", "Michael Jackson", "Prince", "Freddie Mercury"], correct: 1 },
    { question: "Which band sang 'Hey Jude'?", answers: ["The Beatles", "Rolling Stones", "Queen", "ABBA"], correct: 0 },
    { question: "What instrument has 88 keys?", answers: ["Guitar", "Piano", "Violin", "Drums"], correct: 1 },
    { question: "Who sang 'Shape of You'?", answers: ["Ed Sheeran", "Justin Bieber", "Adele", "Bruno Mars"], correct: 0 },
    { question: "Which genre is BTS known for?", answers: ["Rock", "Pop", "K-Pop", "Jazz"], correct: 2 },
    { question: "Who is known as the 'Queen of Soul'?", answers: ["Aretha Franklin", "Whitney Houston", "Mariah Carey", "Diana Ross"], correct: 0 },
    { question: "Which band sang 'Bohemian Rhapsody'?", answers: ["Queen", "The Beatles", "Pink Floyd", "Led Zeppelin"], correct: 0 },
    { question: "Who sang 'Rolling in the Deep'?", answers: ["Adele", "Beyoncé", "Taylor Swift", "Kelly Clarkson"], correct: 0 },
    { question: "Which instrument is stringed?", answers: ["Drums", "Trumpet", "Guitar", "Flute"], correct: 2 },
    { question: "Who is known as the 'King of Rock and Roll'?", answers: ["Elvis Presley", "Chuck Berry", "Buddy Holly", "Little Richard"], correct: 0 },
    { question: "Which band sang 'Hotel California'?", answers: ["The Eagles", "Fleetwood Mac", "Queen", "U2"], correct: 0 },
    { question: "Who sang 'Thriller'?", answers: ["Michael Jackson", "Prince", "Stevie Wonder", "Lionel Richie"], correct: 0 },
    { question: "Which singer is known as 'Material Girl'?", answers: ["Madonna", "Lady Gaga", "Britney Spears", "Cher"], correct: 0 },
    { question: "Which instrument is played with a bow?", answers: ["Piano", "Violin", "Drums", "Flute"], correct: 1 },
    { question: "Who sang 'Poker Face'?", answers: ["Lady Gaga", "Madonna", "Britney Spears", "Katy Perry"], correct: 0 },
    { question: "Which band sang 'Smells Like Teen Spirit'?", answers: ["Nirvana", "Pearl Jam", "Metallica", "Green Day"], correct: 0 },
    { question: "Who is known as the 'Prince of Pop'?", answers: ["Justin Timberlake", "Justin Bieber", "Shawn Mendes", "Harry Styles"], correct: 1 },
    { question: "Which singer is known for 'Hello'?", answers: ["Adele", "Lionel Richie", "Beyoncé", "Taylor Swift"], correct: 0 },
    { question: "Which band sang 'Wonderwall'?", answers: ["Oasis", "Blur", "Coldplay", "Radiohead"], correct: 0 },
    { question: "Who sang 'Uptown Funk'?", answers: ["Bruno Mars", "Mark Ronson", "Justin Timberlake", "Pharrell"], correct: 0 }
  ],
  celebrity: [
    { question: "Who played Iron Man in Marvel movies?", answers: ["Chris Evans", "Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo"], correct: 1 },
    { question: "Which actress starred in 'Pretty Woman'?", answers: ["Julia Roberts", "Sandra Bullock", "Jennifer Aniston", "Nicole Kidman"], correct: 0 },
    { question: "Who is known as 'Queen of Pop'?", answers: ["Madonna", "Lady Gaga", "Britney Spears", "Taylor Swift"], correct: 0 },
    { question: "Which actor starred in 'Mission Impossible'?", answers: ["Tom Cruise", "Brad Pitt", "Keanu Reeves", "Matt Damon"], correct: 0 },
    { question: "Who was the highest-paid actress in 2020?", answers: ["Scarlett Johansson", "Angelina Jolie", "Jennifer Lawrence", "Gal Gadot"], correct: 0 },
    { question: "Who played Captain Jack Sparrow?", answers: ["Johnny Depp", "Orlando Bloom", "Hugh Jackman", "Brad Pitt"], correct: 0 },
    { question: "Which actress starred in 'Titanic'?", answers: ["Kate Winslet", "Julia Roberts", "Nicole Kidman", "Sandra Bullock"], correct: 0 },
    { question: "Who played Neo in 'The Matrix'?", answers: ["Keanu Reeves", "Tom Cruise", "Brad Pitt", "Matt Damon"], correct: 0 },
    { question: "Which actor starred in 'The Revenant'?", answers: ["Leonardo DiCaprio", "Brad Pitt", "Tom Hardy", "Christian Bale"], correct: 0 },
    { question: "Who is known as 'The Rock'?", answers: ["John Cena", "Dwayne Johnson", "Vin Diesel", "Jason Momoa"], correct: 1 },
    { question: "Which actress starred in 'La La Land'?", answers: ["Emma Stone", "Jennifer Lawrence", "Anne Hathaway", "Natalie Portman"], correct: 0 },
    { question: "Who played Thor in Marvel movies?", answers: ["Chris Hemsworth", "Chris Evans", "Tom Hiddleston", "Henry Cavill"], correct: 0 },
    { question: "Which actor starred in 'John Wick'?", answers: ["Keanu Reeves", "Tom Cruise", "Matt Damon", "Christian Bale"], correct: 0 },
    { question: "Who played Black Widow?", answers: ["Scarlett Johansson", "Natalie Portman", "Anne Hathaway", "Gal Gadot"], correct: 0 },
    { question: "Which actress starred in 'The Hunger Games'?", answers: ["Jennifer Lawrence", "Emma Watson", "Anne Hathaway", "Natalie Portman"], correct: 0 },
    { question: "Who played Captain America?", answers: ["Chris Evans", "Chris Hemsworth", "Mark Ruffalo", "Tom Holland"], correct: 0 },
    { question: "Which actor starred in 'The Dark Knight'?", answers: ["Christian Bale", "Ben Affleck", "Michael Keaton", "Robert Pattinson"], correct: 0 },
    { question: "Who played Wonder Woman?", answers: ["Gal Gadot", "Scarlett Johansson", "Natalie Portman", "Anne Hathaway"], correct: 0 },
    { question: "Which actress starred in 'Harry Potter'?", answers: ["Emma Watson", "Emma Stone", "Natalie Portman", "Anne Hathaway"], correct: 0 },
    { question: "Who played Spider-Man in the MCU?", answers: ["Andrew Garfield", "Tobey Maguire", "Tom Holland", "Chris Evans"], correct: 2 }
  ]
};

let currentCategory = null;
let currentQuestions = [];
let currentAnswers = [];
let currentQuestionIndex = 0;

const categorySelect = document.getElementById('categorySelect');
const quizContainer = document.getElementById('quizContainer');
const resultsContainer = document.getElementById('resultsContainer');
const categoryBtns = document.querySelectorAll('.category-btn');
const categoryTitle = document.getElementById('categoryTitle');
const questionText = document.getElementById('questionText');
const answersContainer = document.getElementById('answersContainer');
const questionCount = document.getElementById('questionCount');
const progressFill = document.getElementById('progressFill');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const quitBtn = document.getElementById('quitBtn');
const retryBtn = document.getElementById('retryBtn');
const anotherBtn = document.getElementById('anotherBtn');

// ===== Event Listeners =====
categoryBtns.forEach(btn => {
  btn.addEventListener('click', startChallenge);
});

nextBtn.addEventListener('click', nextQuestion);
prevBtn.addEventListener('click', previousQuestion);
quitBtn.addEventListener('click', quitChallenge);
retryBtn.addEventListener('click', retryChallenge);
anotherBtn.addEventListener('click', resetChallenge);

// ===== Start Challenge =====
function startChallenge(e) {
  currentCategory = e.currentTarget.dataset.category;
  const categoryName = e.currentTarget.textContent.trim();

  currentQuestions = shuffleArray([...challengeData[currentCategory]]);
  currentAnswers = new Array(currentQuestions.length).fill(null);
  currentQuestionIndex = 0;

  categoryTitle.textContent = categoryName;
  categorySelect.style.display = 'none';
  quizContainer.style.display = 'block';
  resultsContainer.style.display = 'none';

  displayQuestion();
}

// ===== Shuffle the Challenge =====
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; 
  }
  return array;
}

// ===== Display Question =====
function displayQuestion() {
  const question = currentQuestions[currentQuestionIndex];

  questionText.textContent = question.question;
  answersContainer.innerHTML = '';

  question.answers.forEach((answer, index) => {
    const btn = document.createElement('button');
    btn.className = 'answer-btn';
    btn.textContent = answer;
    btn.dataset.index = index;

    if (currentAnswers[currentQuestionIndex] === index) {
      btn.classList.add('selected');
    }

    btn.addEventListener('click', () => selectAnswer(index, btn));
    answersContainer.appendChild(btn);
  });

  updateProgress();
  updateButtons();

  // Add animation
  questionText.style.animation = 'none';
  setTimeout(() => {
    questionText.style.animation = 'fadeIn 0.5s ease-in';
  }, 10);
}

// ===== Select Answer =====
function selectAnswer(index, btn) {
  currentAnswers[currentQuestionIndex] = index;

  // Remove previous selection styles
  document.querySelectorAll('.answer-btn').forEach(b => {
    b.classList.remove('selected', 'correct', 'incorrect');
    b.disabled = true; // disable all buttons after answering
  });

  // Mark selected
  btn.classList.add('selected');

  // Immediate feedback
  const correctIndex = currentQuestions[currentQuestionIndex].correct;
  const feedbackBox = document.createElement('p');
  feedbackBox.className = 'answer-feedback';

  if (index === correctIndex) {
    btn.classList.add('correct'); // green highlight
    feedbackBox.textContent = "✅ Correct!";
  } else {
    btn.classList.add('incorrect'); // red highlight
    document.querySelectorAll('.answer-btn')[correctIndex].classList.add('correct');
    feedbackBox.textContent = "❌ Wrong! The correct answer is: " + currentQuestions[currentQuestionIndex].answers[correctIndex];
  }

  // Append feedback text below the answers
  answersContainer.appendChild(feedbackBox);
}

// ===== Next Question =====
function nextQuestion() {
  if (currentQuestionIndex < currentQuestions.length - 1) {
    currentQuestionIndex++;
    displayQuestion();
  } else {
    showResults();
  }
}

// ===== Previous Question =====
function previousQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    displayQuestion();
  }
}

// ===== Update Progress =====
function updateProgress() {
  const progress = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
  progressFill.style.width = progress + '%';
  questionCount.textContent = `Question ${currentQuestionIndex + 1} of ${currentQuestions.length}`;
}

// ===== Update Buttons =====
function updateButtons() {
  prevBtn.style.display = currentQuestionIndex > 0 ? 'inline-flex' : 'none';

  if (currentQuestionIndex === currentQuestions.length - 1) {
    nextBtn.innerHTML = 'Finish <i class="fa-solid fa-check"></i>';
  } else {
    nextBtn.innerHTML = 'Next <i class="fa-solid fa-chevron-right"></i>';
  }
}

// ===== Show Results =====
function showResults() {
  let score = 0;
  const resultsList = document.getElementById('resultsList');
  resultsList.innerHTML = '';

  currentQuestions.forEach((question, index) => {
    const isCorrect = currentAnswers[index] === question.correct;
    if (isCorrect) score++;

    const resultItem = document.createElement('div');
    resultItem.className = `result-item ${isCorrect ? 'correct' : 'incorrect'}`;
    resultItem.innerHTML = `
      <div class="result-header">
        <span class="result-number">Q${index + 1}</span>
        <i class="fa-solid fa-${isCorrect ? 'check' : 'xmark'}"></i>
      </div>
      <p class="result-question">${question.question}</p>
      <p class="result-answer">Your answer: <strong>${question.answers[currentAnswers[index]] || 'Not answered'}</strong></p>
      ${!isCorrect ? `<p class="result-correct">Correct answer: <strong>${question.answers[question.correct]}</strong></p>` : ''}
    `;
    resultsList.appendChild(resultItem);
  });

  const percentage = Math.round((score / currentQuestions.length) * 100);
  document.getElementById('finalScore').textContent = score; 
  document.getElementById('scoreTotal').textContent = `/ ${currentQuestions.length}`;  
  document.getElementById('scorePercentage').textContent = percentage + '%';  

  let message = '';
  if (percentage === 100) {
    message = "Perfect! You're a genius! 🎉";
  } else if (percentage >= 80) {
    message = "Excellent work! You know your stuff! 👏";
  } else if (percentage >= 60) {
    message = "Good job! You did pretty well. Keep learning! 📚";
  } else if (percentage >= 40) {
    message = "Not bad! There's always room to improve. 💪";
  } else {
    message = "Keep practicing! You'll get better. 🚀";
  }
  document.getElementById('scoreMessage').textContent = message;

  quizContainer.style.display = 'none';
  resultsContainer.style.display = 'block';
}

// ===== Quit Challenge =====
function quitChallenge() {
  if (confirm('Are you sure you want to quit? Your progress will be lost.')) {
    resetChallenge();
  }
}

// ===== Retry Challenge =====
function retryChallenge() {
  currentAnswers = new Array(currentQuestions.length).fill(null);
  currentQuestionIndex = 0;

  quizContainer.style.display = 'block';
  resultsContainer.style.display = 'none';

  displayQuestion();
}

// ===== Reset Challenge =====
function resetChallenge() {
  currentCategory = null;
  currentQuestions = [];
  currentAnswers = [];
  currentQuestionIndex = 0;

  categorySelect.style.display = 'block';
  quizContainer.style.display = 'none';
  resultsContainer.style.display = 'none';
}

// ===== Fade-in Animation =====
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;
document.head.appendChild(style);
