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


