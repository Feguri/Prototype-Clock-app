document.getElementById('b').addEventListener('click', function(){
    document.getElementById('Layer_4').classList.add('animate')
    const myTimeout = setTimeout(removeClass, 2000);

    function removeClass() {
        document.getElementById('Layer_4').classList.remove('animate')
    }
})