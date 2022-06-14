let questions = [{
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },
    {
        "question": "Welches Attribut kann man nicht für Textarea verwendet?",
        "answer_1": "readonly",
        "answer_2": "max",
        "answer_3": "from",
        "answer_4": "spellcheck",
        "right_answer": 1
    },
    {
        "question": "Wie wählst du alle Elemente vom Typ &lt;a&gt; mit dem Attribut title aus?",
        "answer_1": "a[title]{...}",
        "answer_2": "a > title {...}",
        "answer_3": "a.title {...}",
        "answer_4": "a = title {...}",
        "right_answer": 1
    },
    {
        "question": "Wie definiert man in JavaScript eine Variable?",
        "answer_1": "let 100 = rate;",
        "answer_2": "100 = let rate;",
        "answer_3": "rate = 100",
        "answer_4": "let rate = 100",
        "right_answer": 4
    },
    {
        "question": "Wofür nutzt man in JavaScript document.getElementById?",
        "answer_1": "Um eine Referenz zu einem Element anhand seiner ID zurückzugeben",
        "answer_2": "Um einen neuen Array zu erstellen",
        "answer_3": "Um etwas zu einem Array hinzuzufügen und anschließend zu rendern",
        "answer_4": "Um den Computer herunterzufahren",
        "right_answer": 1
    },
    {
        "question": "Wer hat JavaScript erfunden",
        "answer_1": "Wladimir Simonov",
        "answer_2": "Brendan Eich",
        "answer_3": "Vitalik Buterin",
        "answer_4": "Warren Buffet",
        "right_answer": 2
    },
    {
        "question": "Was ist KEIN CMS-System?",
        "answer_1": "Wordpress",
        "answer_2": "Joomla",
        "answer_3": "Adobe XD",
        "answer_4": "Contao",
        "right_answer": 3
    }
];

let rightQuestions = 0;

let currentQuestion = 0;

let audio_success = new Audio('audio/success.wav');

let audio_fail = new Audio('audio/fail.mp3');

function init() {
    document.getElementById("all-questions").innerHTML = questions.length;

    showQuestion();
}

function showQuestion() {

    if (gameIsOver()) {
        showEndscreen();
    } else {
        updateProgressBar();
        updateToNextQuestion();
    }
}

function gameIsOver() {
    return currentQuestion >= questions.length
}

function showEndscreen() {
    document.getElementById("end-screen").style = '';
    document.getElementById("question-body").style = 'display: none;';
    document.getElementById("amount-of-questions").innerHTML = questions.length;
    document.getElementById("amount-of-right-questions").innerHTML = rightQuestions;
    document.getElementById("header-img").src = 'img/endscreenwin.png';
}

function updateToNextQuestion() {

    let question = questions[currentQuestion]; // array questions [0]

    document.getElementById("question-number").innerHTML = currentQuestion + 1;
    document.getElementById("questiontext").innerHTML = question['question'];
    document.getElementById("answer_1").innerHTML = question['answer_1'];
    document.getElementById("answer_2").innerHTML = question['answer_2'];
    document.getElementById("answer_3").innerHTML = question['answer_3'];
    document.getElementById("answer_4").innerHTML = question['answer_4'];
}

function updateProgressBar() {
    let percent = (currentQuestion + 1) / questions.length;
    percent = Math.round(percent * 100);
    document.getElementById("progress-bar").innerHTML = `${percent}%`;
    document.getElementById("progress-bar").style = `width: ${percent}%;`;
}

function answer(selection) { // Funktion wird eingeleitet
    let question = questions[currentQuestion]; // Variable question sagt, dass die aktuelle Frage die Werte aus der Frage 0 (also der 1. Frage in normalen Zahlen) aus dem Array questions umfasst
    let selectedQuestionNumber = selection.slice(-1); // Die Variable selectedQuestionNumber gibt den letzten Buchstaben, bzw. die letzte Zahl von der vom Nutzer ausgewählten Frage wieder (Beispiel: wenn der Nutzer answer_1 auswählt, dann ist selection.slice(-1) die Zahl 1, weil 1 der letzte Buchstabe, bzw. die letzte Zahl von answer_1 ist)
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (rightAnswerSelected(selectedQuestionNumber)) { // If-Abfrage eingeleitet & es wird gesagt: WENN selectedQuestionNumber (also die Variable aus Zeile 80, die den letzten Buchstaben/die letzte Zahl der ausgewählten Frage wiedergibt) dieselbe Zahl ist, wie die richtige Antwort, die im JSON hinterlegt ist, dann... (nächste Zeile) 
        document.getElementById(selection).parentNode.classList.add('bg-success'); // zur Div der jeweilig ausgewählten Antwort wird, insofern die korrekte Antwort vom Nutzer ausgewählt worden ist, eine grüne Farbe hinzugefügt
        audio_success.play();
        rightQuestions++; // die Variable rightQuestions wird um eines erhöht, wenn der Nutzer die jew. Frage richtig beantwortet
    } else { // wenn letzte Zahl von der von Nutzer ausgewählten Frage aber nicht mit der im JSON hinterlegten richtigen Zahl übereinstimmt, dann...(siehe nächste Zeile)
        document.getElementById(selection).parentNode.classList.add('bg-danger'); // wenn der Nutzer die falsche Antwort ausgewählt hat, wird zur Div der falsche Antwort eine rote Farbe hinzugefügt
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success'); // wenn Nutzer die falsche Antwort ausgewählt hat, wird ihm die richtige Antwort, in diesen Fall die Antwort 3, direkt als Hilfe grün angeziegt
        audio_fail.play();
    }
    document.getElementById('next-button').disabled = false;
}

function rightAnswerSelected(selectedQuestionNumber) {
    let question = questions[currentQuestion]; // Variable question sagt, dass die aktuelle Frage die Werte aus der Frage 0 (also der 1. Frage in normalen Zahlen) aus dem Array questions umfasst

    selectedQuestionNumber == question['right_answer']
}

function nextQuestion() {
    currentQuestion++; // z.b. von 0 auf 1 erhöht
    document.getElementById('next-button').disabled = true;
    resetAnswerButtons();
    showQuestion();
}

function resetAnswerButtons() {
    document.getElementById("answer_1").parentNode.classList.remove('bg-success', 'bg-danger')
    document.getElementById("answer_2").parentNode.classList.remove('bg-success', 'bg-danger')
    document.getElementById("answer_3").parentNode.classList.remove('bg-success', 'bg-danger')
    document.getElementById("answer_4").parentNode.classList.remove('bg-success', 'bg-danger')
}

function restartGame() {
    document.getElementById('header-img').src = 'img/quizbg.jpg';
    document.getElementById("end-screen").style = 'display: none;'; // questionbody wieder anzeigen
    document.getElementById("question-body").style = ';'; // Endscreen ausblenden

    currentQuestion = 0;
    rightQuestions = 0;

    init();
}