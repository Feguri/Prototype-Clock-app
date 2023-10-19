function jump(e, o) {
    let v = document.getElementById(e).value;

        o ? v++ : v--;
        v < 0 ? v = 0 : v;

    document.getElementById(e).value = v;
}




for (let btn of document.getElementsByTagName('svg')) {
    btn.addEventListener('click', function() {

        if(this.id == "hu") {

            jump('down_h', true);

        } else if (this.id == "hd") {
            jump('down_h', false);

        } else if (this.id == "mu") {
            jump('down_m', true)
            
        } else if (this.id == "md") {
            jump('down_m', false)

        } else if (this.id == "su") {
            jump('down_s', true)
            
        } else if (this.id == "sd") {
            jump('down_s', false)
            
        }
    })

}

// pause/play button
let currentState = 'play';

function changeInputFieldBehavior(state) {
    let inputFields = document.getElementsByTagName('input');
    if (state == 'play'){
        for(let input of inputFields){
            input.style.pointerEvents = 'none';
        }
    } else {
        for(let input of inputFields){
            input.style.pointerEvents = 'all';
        }

    }
}
function decideSetTimeout(info, element){
    if(info[0] == "filter"){
        setTimeout(function() {element.style.filter = info[1];},900);
    } else if(info[0] == "padding") {
        setTimeout(function() {element.style.padding = info[1];},900);
    } else if(info[0] == "border-color"){
        setTimeout(function() {element.style.borderColor = info[1];},900);
        changeInputFieldBehavior(currentState);
    }
}
function applyAnimation(objArray, toAdd, toRemove, setTimeoutInfo){
    for (let obj of objArray) {
        obj.classList.add(toAdd);
        try {
            obj.classList.remove(toRemove);
            decideSetTimeout(setTimeoutInfo, obj);
        } catch(err) {

        }
    }
}
function countdownChange(change) {
    let thingsToChange = document.getElementsByClassName('a');
    let paddingToChange = document.getElementsByClassName('semicolon')
    let bordersToChange = document.getElementsByClassName('num-input')
    if(change == 'show'){ 
        applyAnimation(thingsToChange, "show", "hide", ["filter", "opacity(1)"]);
        applyAnimation(paddingToChange, "padding", "unpadding", ["padding", "0.5em"]);
        applyAnimation(bordersToChange, "border", "unborder", ["border-color", "white"]);
    } else {
        applyAnimation(thingsToChange, "hide", "show", ["filter", "opacity(0)"]);
        applyAnimation(paddingToChange, "unpadding", "padding", ["padding", "0.2em"]);
        applyAnimation(bordersToChange, "unborder", "border", ["border-color", "transparent"]);
    }
}

// play button animation
document.getElementById('down_start').addEventListener('click', function() {

    if (currentState == 'play') {
        document.getElementById('pa').classList.remove('out')
        document.getElementById('pl').classList.add('out')

        // function to change the countdown timer's appearance
        countdownChange('hide')
        currentState = 'pause';
    } else {
        document.getElementById('pa').classList.add('out')
        document.getElementById('pl').classList.remove('out')

        // function to change the countdown timer's appearance
        countdownChange('show')
        currentState = 'play'
    }
})

// Playbtn animation
document.getElementById('watch_start').addEventListener('click', function() {
    if (currentState == 'play') {
        document.getElementById('watch-pa').classList.remove('out')
        document.getElementById('watch-pl').classList.add('out')

        // function to change the countdown timer's appearance
        countdownChange('hide')
        currentState = 'pause';
    } else {
        document.getElementById('watch-pa').classList.add('out')
        document.getElementById('watch-pl').classList.remove('out')

        // function to change the countdown timer's appearance
        countdownChange('show')
        currentState = 'play'
    }
})
