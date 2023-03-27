// Créer la div pour contenir le lecteur vidéo
const container = document.createElement('div');
container.className = 'cont'

// Créer l'élément vidéo
const lecteur = document.createElement('video');
lecteur.id = 'lec'
lecteur.src = 'assets/video/test.mp4';

// Créer le bouton play/pause
const blec = document.createElement('button');
blec.className = 'blec'
blec.innerHTML = 'Play'


// Ajouter un gestionnaire d'événements pour le bouton play/pause
blec.addEventListener('click', function() {
  if (lecteur.paused) {
    blec.className = 'blec'
    blec.innerHTML = 'Pause';
    lecteur.play();  
    
  } else {
    lecteur.pause();
    blec.innerHTML = 'Play';
  }
});

// Créer la barre de progression
const timer = document.createElement('input');
timer.className = 'timer';
timer.type = 'range';
timer.min = '0';
timer.max = '100';
timer.value = '0';


// Ajouter un gestionnaire d'événements pour la barre de progression
timer.addEventListener('input', function() {
  lecteur.currentTime = lecteur.duration * (timer.value / 100);
});

// Ajouter un gestionnaire d'événements pour la vidéo
lecteur.addEventListener('timeupdate', function() {
  const progress = (lecteur.currentTime / lecteur.duration) * 100;
  timer.value = progress;
});

// Créer le bouton pour passer en arrière dans la vidéo
const back = document.createElement('button');
back.className = 'back'
back.innerHTML = '<<'

// Ajouter un gestionnaire d'événements pour le bouton de retour en arrière
back.addEventListener('click', function() {
  lecteur.currentTime -= 10;
});

// Créer le bouton pour passer en avant dans la vidéo
const forward = document.createElement('button');
forward.innerHTML = '>>'
forward.className = 'forward';

// Ajouter un gestionnaire d'événements pour le bouton d'avance rapide
forward.addEventListener('click', function() {
lecteur.currentTime += 10;
});


// Créer la barre de volume
const volume = document.createElement('input');
volume.className = 'volume';
volume.type = 'range';
volume.min = '0';
volume.max = '100';
volume.value = '100';


// Créer le bouton pour activer ou désactiver le mode plein écran
const fullscreen = document.createElement('button');
fullscreen.className = 'fullscreen';
fullscreen.innerHTML = '#'

// Ajouter un gestionnaire d'événements pour le bouton de mode plein écran
fullscreen.addEventListener('click', function() {
  if (lecteur.fullscreenElement) {
    lecteur.exitFullscreen();
  } else {
    lecteur.requestFullscreen();
  }
});

const titre = document.createElement('h1')
titre.innerHTML = 'MyMediaPlayer'

// Créer une nouvelle div pour les boutons
const buttonContainer = document.createElement('div');
buttonContainer.className = 'butc';

const timercont = document.createElement('div')
timercont.className = 'timerc'
timercont.append(back,timer,forward)

// Ajouter les boutons à la div de contrôle
buttonContainer.appendChild(blec);
buttonContainer.appendChild(timercont)
buttonContainer.appendChild(volume);
buttonContainer.appendChild(fullscreen);

// Ajouter les éléments au conteneur du lecteur vidéo
container.appendChild(titre)
container.appendChild(lecteur);
container.appendChild(buttonContainer);

// Ajouter le lecteur vidéo à la page
document.body.appendChild(container);