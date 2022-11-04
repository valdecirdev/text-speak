const utterance = new SpeechSynthesisUtterance();

let text = 'Seu texto aqui';
let state = 'stopped';

utterance.lang = "pt-BR";

const button_speak = document.getElementById('speak')
const button_stop = document.getElementById('stop')
const content = document.getElementById('content')

utterance.addEventListener('end', function(event) {
    state = 'stopped';
    button_speak.textContent = 'Falar';
});

button_speak.addEventListener('click', function(event) {
    let utterance_rate = document.getElementById('rate').value

    console.log(utterance_rate)
    if(state === 'stopped') {
        utterance.rate = utterance_rate;
        utterance.text = text;
        speechSynthesis.speak(utterance);
        state = 'playing';
        button_speak.textContent = 'Pausar';
    }
    else if(state === 'playing') {
        speechSynthesis.pause();
        state = 'paused';
        button_speak.textContent = 'Continuar';
    }
    else if(state === 'paused') {
        utterance.rate = utterance_rate;
        speechSynthesis.resume();
        state = 'playing';
        button_speak.textContent = 'Pausar';
    }
});

button_stop.addEventListener('click', function(event) {
    speechSynthesis.cancel();
    state = 'stopped';
    button_speak.textContent = 'Falar';
});

content.addEventListener('input', function(event) {
    text = event.target.value
});
