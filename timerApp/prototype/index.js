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
function countdownChange(change) {
    let thingsToChange = document.getElementsByClassName('a');
    if(change == 'show'){
        for (let obj of thingsToChange) {
            obj.classList.add('show');
            try {
                obj.classList.remove('hide');
            } catch(err) {

            }
        }
    } else {
        for (let obj of thingsToChange) {
            obj.classList.add('hide');
            try {
                obj.classList.remove('show');
                setTimeout(function() {obj.style.filter = "opacity(0)";},900);
            } catch(err) {
                
            }
        }
    }
}

document.getElementById('playbtn').addEventListener('click', function() {

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

