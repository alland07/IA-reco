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
    message.textContent = 'Vous avez dit: ' + command ;

    /*if(command == 'choisis Alan'){
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
    } */
    if(command == 'qui es-tu'){
        reponse.textContent = "Je suis Yves, l'assistant proposé par le pôle et créé par des élèves de l'IIM.";
    }
    else if(command == 'où se trouve la salle 359'){//3D
        reponse.textContent = "Elle est au troisième étage, à droite des ascenseurs les plus à droite du batiment E.";
    }
    else if (command == 'où se trouve la salle 106'){//Com
        reponse.textContent = "Elle est au premier étage, au fond à gauche!";
    }
    else if (command == 'où se trouve la salle 312'){//JV
        reponse.textContent = "Elle est au troisième étage, à gauche des ascenseurs de droite.";
    }
    else if (command == 'où se trouve la salle 360'){//WEB
        reponse.textContent = "Elle est au troisième étage, à droite des ascenseurs les plus à droite du batiment E.";
    }
    else if (command == 'où se trouve la salle 306'){//Créa
        reponse.textContent = "Elle est au troisième étage, au fond à gauche!";
    }
    else if (command == 'où se trouve le Fab Lab'){//FabLab
        reponse.textContent = "Le FabLab est au quatrième étage en prenant l'ascenseur à côté de la séurité de l'entrée.";
    }
    else if (command == 'comment avoir des informations sur l\'axe 3D'){//infos 3d
        reponse.textContent = "Il faut aller en salle 359.";
    }
    else if (command == 'comment avoir des informations sur l\'axe communication digitale et e-business'){//infos com
        reponse.textContent = "Il faut aller en salle 106.";
    }
    else if (command == 'comment avoir des informations sur l\'axe jeu vidéo'){//infos JV
        reponse.textContent = "Il faut aller en salle 312.";
    }
    else if (command == 'comment avoir des informations sur l\'axe web'){//infos web
        reponse.textContent = "Il faut aller en salle 360.";
    }
    else if (command == 'comment avoir des informations sur l\'axe création design'){//infos créa
        reponse.textContent = "Il faut aller en salle 306.";
    }
    else if (command == 'où sont les amphi'){//lieux amphis
        reponse.textContent = "Ils sont situés en Rue Haute et en Rue Basse. La Rue Haute est en dessous des escalators de sécurité et la Rue Basse au niveau du dessous.";
    }
    else if (command == 'les informations du pôle Yves'){//taille pôle
        reponse.textContent = "Notre pôle possède une taille de 58 000 m² et a été créé en 1995, il y a actuellement 3 écoles: IIM, ESILV, EMLV. " + "Le nombre d'étudiants est de 58 000 avec les trois écoles";
    }
    else if (command == 'quels sont les événements proposés par le Pôle'){//nbr d'étudiants
        reponse.textContent = "Régulièrement, les différents BDE organisent des soirées dans des bars ou dans des boîtes qu'ils privatisent. Cette année, l'ESILV a privatisé l'aquaboulevard de Paris. Cependant, de temps en temps, il y a également des entreprises qui vienent afin de rencontrer voir recruter des étudiants, notamment à la fin des BAP.";
    }
    else if(command == 'le code'){
        let img= document.createElement("img");
        img.src = "img/jack.jpg";
        img.setAttribute("height","300");
        img.setAttribute("width","200");
        img.setAttribute("alt","même Jack");
        reponse.appendChild(img); 
    }
    else if(command == 'où se trouve le bureau de Virac'){
        reponse.textContent = "Il est au troisième étage, à gauche de celui de Karine, entre les ascenseurs à gauche et à droite du bâtiment.";
    }
    else if(command == 'y a-t-il une cantine ou des endroits pour manger sans sortir du pôle'){
        reponse.textContent = "En effet, nous possédons une cantine, le LOUNGE ainsi qu'une cafétéria.";
    }
    else if(command == 'quels sont les différents axes de l\'école IIM'){
        reponse.textContent = " Il y a 5 axes, WEB <le meilleur>, JV, Création Design, Communication digitale et e-business ainsi que 3D.";
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