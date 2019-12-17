var message = document.querySelector('#message');

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;

var grammar = '#JSGF V1.0;'

    var recognition = new SpeechRecognition();
    var speechRecognitionList = new SpeechGrammarList();
    speechRecognitionList.addFromString(grammar, 1);
    recognition.grammars = speechRecognitionList;
    recognition.lang = 'fr';
    recognition.interimResults = false;

recognition.onresult = function(event) {
    var last = event.results.length - 1;
    var command = event.results[last][0].transcript;
    message.textContent = 'Voice Input: ' + command + '.';
    if(command.toLowerCase() === 'Choisi Allan'){
        document.querySelector('#chkAllan').checked = true;
    }
    else if (command.toLowerCase() === 'Choisi Eidan'){
        document.querySelector('#chkEidan').checked = true;
    }
        else if (command.toLowerCase() === 'Choisi Elise'){
        document.querySelector('#chkElise').checked = true;
    }
    else if (command.toLowerCase() === 'Choisi Noa'){
        document.querySelector('#chkNoa').checked = true;
    }   
};

recognition.onspeechend = function() {
    recognition.stop();
};

recognition.onerror = function(event) {
    message.textContent = 'Error occurred in recognition: ' + event.error;
}        

document.querySelector('#btnGiveCommand').addEventListener('click', function(){
    recognition.start();

});