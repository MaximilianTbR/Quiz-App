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
        "right_answer": 2
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

let currentQuestion = 0;

function init() {
    document.getElementById("all-questions").innerHTML = questions.length;

    showQuestion();
}

function showQuestion() {
    let question = questions[currentQuestion];

    document.getElementById("questiontext").innerHTML = question['question'];
    document.getElementById("answer_1").innerHTML = question['answer_1'];
    document.getElementById("answer_2").innerHTML = question['answer_2'];
    document.getElementById("answer_3").innerHTML = question['answer_3'];
    document.getElementById("answer_4").innerHTML = question['answer_4'];
}