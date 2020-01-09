let message = document.querySelector('#message');

let reponse = document.querySelector('#reponse');

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList

let grammar = '#JSGF V1.0;'

let recognition = new SpeechRecognition();
let speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.lang = 'fr';
recognition.interimResults = false;


recognition.onresult = function(event) {

let last = event.results.length - 1;
let command = event.results[last][0].transcript;
message.textContent = 'Vous avez dit: ' + command + '.';

if(command == 'choisis Alan'){
    document.querySelector('#chkAllan').checked = true;
} else if (command == 'choisis Eden'){
    document.querySelector('#chkEidan').checked = true;
} else if (command == 'choisis Élise'){
    document.querySelector('#chkElise').checked = true;
} else if (command == 'choisis Noah'){
    document.querySelector('#chkNoa').checked = true;
}
 else if (command == 'sélectionne Alan'){
    document.querySelector('#chkAllan').checked = false;
} else if (command == 'sélectionne Eden'){
    document.querySelector('#chkEidan').checked = false;
} else if (command == 'sélectionne Élise'){
    document.querySelector('#chkElise').checked = false;
} else if (command == 'sélectionne Noah'){
    document.querySelector('#chkNoa').checked = false;
} 
}

recognition.onspeechend = function() {
    recognition.stop();
};

recognition.onerror = function(event) {
    message.textContent = 'La reconnaissance n\'a pas fonctionnée ' + event.error;
}        

document.querySelector('#btnGiveCommand').addEventListener('click', function(){
    recognition.start();
});