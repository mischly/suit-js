function getPilComp() {
    // menangkap pilihan computer
    // membangkitkan bilangan random

    const comp = Math.random();

    if (comp < 0.34) return 'gajah'; 
    if (comp >= 0.34 && comp < 0.67) return 'semut';
    return 'orang';

}

function getHasil(comp, player) {
    if (player == comp) return 'SERI!';

    if (player == 'gajah') return (comp == 'orang') ? 'MENANG!' : 'KALAH!';

    if (player == 'orang') return (comp == 'gajah') ? 'KALAH!' : 'MENANG!';

    if (player == 'semut') return (comp == 'orang') ? 'KALAH!' : 'MENANG!';

}


function spin() {
    const imgComp = document.querySelector('.img-computer');
    const gambar = ['gajah', 'semut', 'orang'];
    let i = 0;
    const wMulai = new Date().getTime();

    setInterval(function() {
        if ( new Date().getTime() - wMulai > 1000) {
            clearInterval;
            return;
        }

        imgComp.setAttribute('src', 'img/' + gambar[i++] + '.png');
        if ( i == gambar.length) i = 0;
    }, 100); 
}

const pilih = document.querySelectorAll('li img');
pilih.forEach(function(pil) {
    pil.addEventListener('click', function() {
    const pilComp = getPilComp();
    const pilPlayer = pil.className;

    const hasil = getHasil(pilComp, pilPlayer);

    spin();

    setTimeout(function() {
        const imgComp = document.querySelector('.img-computer');
        imgComp.setAttribute('src', 'img/' + pilComp + '.png');

        const info = document.querySelector('.info');
        info.innerHTML = hasil;
    }, 1000);
    
    });
});



// Kurang efektif

// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', function() {
//     const pilComp = getPilComp();
//     const pilPlayer = pGajah.className;

//     const hasil = getHasil(pilComp, pilPlayer);

//     const imgComp = document.querySelector('.img-computer');

//     imgComp.setAttribute('src', 'img/' + pilComp + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });


