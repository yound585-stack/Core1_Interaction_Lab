var playBtn = document.querySelector('#play-btn');
var nextBtn = document.querySelector('#next-btn');

// 랜덤으로 재생할 음악 목록 (링크 또는 파일 경로를 넣으세요)
var playlist = [
    'https://vgmtreasurechest.com/soundtracks/animal-crossing-let-s-go-to-the-city/umdhyugt/235%20-%20K.K.%20House%20%28Live%29.mp3',
    'https://vgmtreasurechest.com/soundtracks/animal-crossing-let-s-go-to-the-city/hkckpwoe/196%20-%20K.K.%20Cruisin%27%20%28Live%29.mp3',
    'https://vgmtreasurechest.com/soundtracks/animal-crossing-let-s-go-to-the-city/ujjsldkn/172%20-%20K.K.%20Bossa%20%28Live%29.mp3',
    'https://vgmtreasurechest.com/soundtracks/animal-crossing-let-s-go-to-the-city/zfedhyuf/166%20-%20K.K.%20Jazz%20%28Live%29.mp3',
    'https://jetta.vgmtreasurechest.com/soundtracks/animal-crossing-wild-world-ds-gamerip-2005/uckougzkge/147.%20K.K.%20Soul%20%28Performance%29.mp3',
    'https://jetta.vgmtreasurechest.com/soundtracks/animal-crossing-wild-world-ds-gamerip-2005/nnbukwwnnf/117.%20K.K.%20Swing%20%28Performance%29.mp3',
    'https://jetta.vgmtreasurechest.com/soundtracks/animal-crossing-wild-world-ds-gamerip-2005/vvstwesacc/120.%20K.K.%20%C3%89tude%20%28Performance%29.mp3'
];

var audio = new Audio();
var lastIndex = -1;  

function playRandom() {
    var index;
    do {
        index = Math.floor(Math.random() * playlist.length);
    } while (playlist.length > 1 && index === lastIndex);

    lastIndex = index;
    audio.src = playlist[index];
    audio.play().catch(function (err) {
        console.error('재생 실패:', playlist[index], err);
    });
}


audio.addEventListener('ended', playRandom);

playBtn.addEventListener('click', function () {
    if (!audio.src) {
        playRandom();
    }
});

nextBtn.addEventListener('click', playRandom);