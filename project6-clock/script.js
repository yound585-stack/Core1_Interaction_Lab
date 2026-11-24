 // STEP 1: Find the element where the time goes.
    var clock = document.querySelector('#clock');
    var scenes = document.querySelectorAll('.scene');

var musicByHour = [
    'https://jetta.vgmtreasurechest.com/soundtracks/animal-crossing-wild-world-3ds-ds-wii-u-gamerip-2005/bkbqjfkzhe/45.%20Midnight.mp3', // 0
    'https://jetta.vgmtreasurechest.com/soundtracks/animal-crossing-wild-world-3ds-ds-wii-u-gamerip-2005/occjirjrrg/46.%201am.mp3', // 1
    'https://jetta.vgmtreasurechest.com/soundtracks/animal-crossing-wild-world-3ds-ds-wii-u-gamerip-2005/satyjticpw/47.%202am.mp3', // 2
    'https://jetta.vgmtreasurechest.com/soundtracks/animal-crossing-wild-world-3ds-ds-wii-u-gamerip-2005/jjjjtwrvif/48.%203am.mp3', // 3
    'https://jetta.vgmtreasurechest.com/soundtracks/animal-crossing-wild-world-3ds-ds-wii-u-gamerip-2005/gqoyqpaebv/49.%204am.mp3', // 4
    'https://jetta.vgmtreasurechest.com/soundtracks/animal-crossing-wild-world-3ds-ds-wii-u-gamerip-2005/awhoaraqrc/50.%205am.mp3', // 5
    'https://jetta.vgmtreasurechest.com/soundtracks/animal-crossing-wild-world-3ds-ds-wii-u-gamerip-2005/qeoicvonmk/51.%206am.mp3', // 6
    'https://jetta.vgmtreasurechest.com/soundtracks/animal-crossing-wild-world-3ds-ds-wii-u-gamerip-2005/cnubuemmag/52.%207am.mp3', // 7
    'https://jetta.vgmtreasurechest.com/soundtracks/animal-crossing-wild-world-3ds-ds-wii-u-gamerip-2005/dulwonxzzs/53.%208am.mp3', // 8
    'https://jetta.vgmtreasurechest.com/soundtracks/animal-crossing-wild-world-3ds-ds-wii-u-gamerip-2005/sjunavyzzw/54.%209am.mp3', // 9
    'https://jetta.vgmtreasurechest.com/soundtracks/animal-crossing-wild-world-3ds-ds-wii-u-gamerip-2005/tajhrtvgfg/55.%2010am.mp3', // 10
    'https://jetta.vgmtreasurechest.com/soundtracks/animal-crossing-wild-world-3ds-ds-wii-u-gamerip-2005/hgqcjzbguu/56.%2011am.mp3', // 11
    'https://jetta.vgmtreasurechest.com/soundtracks/animal-crossing-wild-world-3ds-ds-wii-u-gamerip-2005/pgbmteizeo/57.%20Noon.mp3', // 12
    'https://jetta.vgmtreasurechest.com/soundtracks/animal-crossing-wild-world-3ds-ds-wii-u-gamerip-2005/dhrgyrnpta/58.%201pm.mp3', // 13
    'https://jetta.vgmtreasurechest.com/soundtracks/animal-crossing-wild-world-3ds-ds-wii-u-gamerip-2005/sfcdmfhmgt/59.%202pm.mp3', // 14
    'https://jetta.vgmtreasurechest.com/soundtracks/animal-crossing-wild-world-3ds-ds-wii-u-gamerip-2005/wpjvgvkgsc/60.%203pm.mp3', // 15
    'https://jetta.vgmtreasurechest.com/soundtracks/animal-crossing-wild-world-3ds-ds-wii-u-gamerip-2005/qdcqbybyww/61.%204pm.mp3', // 16
    'https://jetta.vgmtreasurechest.com/soundtracks/animal-crossing-wild-world-3ds-ds-wii-u-gamerip-2005/aaleowvlxt/62.%205pm.mp3', // 17
    'https://jetta.vgmtreasurechest.com/soundtracks/animal-crossing-wild-world-3ds-ds-wii-u-gamerip-2005/cimveqhlab/63.%206pm.mp3', // 18
    'https://jetta.vgmtreasurechest.com/soundtracks/animal-crossing-wild-world-3ds-ds-wii-u-gamerip-2005/rmfbxwmuai/64.%207pm.mp3', // 19
    'https://jetta.vgmtreasurechest.com/soundtracks/animal-crossing-wild-world-3ds-ds-wii-u-gamerip-2005/sdxnhcnlal/65.%208pm.mp3', // 20
    'https://jetta.vgmtreasurechest.com/soundtracks/animal-crossing-wild-world-3ds-ds-wii-u-gamerip-2005/zviuqlmtrg/66.%209pm.mp3', // 21
    'https://jetta.vgmtreasurechest.com/soundtracks/animal-crossing-wild-world-3ds-ds-wii-u-gamerip-2005/arjujrverr/67.%2010pm.mp3', // 22
    'https://jetta.vgmtreasurechest.com/soundtracks/animal-crossing-wild-world-3ds-ds-wii-u-gamerip-2005/xlbaxqeamr/68.%2011pm.mp3'  // 23
];
var audio = new Audio();
audio.loop = true;
var started = false;       
var currentHour = -1;       
var waiting = false;        

function playForHour(h) {
    audio.src = musicByHour[h];
    currentHour = h;
    audio.play().then(function () {
        started = true;
    }).catch(function (err) {
        started = false;
        console.error('재생 실패:', musicByHour[h], err);
        waitForUserGesture();
    });
}

function waitForUserGesture() {
    if (waiting) return;
    waiting = true;
    var events = ['click', 'keydown', 'touchstart'];
    function unlock() {
        events.forEach(function (e) { document.removeEventListener(e, unlock); });
        waiting = false;
        playForHour(new Date().getHours());
    }
    events.forEach(function (e) { document.addEventListener(e, unlock); });
}

// STEP 2: A function that reads the time and shows it.
function tick() {
    var now = new Date();
    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();

    var hh = String(h).padStart(2, '0');
    var mm = String(m).padStart(2, '0');
    var ss = String(s).padStart(2, '0');

    clock.textContent = hh + ':' + mm + ':' + ss;

    // 재생이 시작된 뒤, 시간대가 바뀔 때만 곡 교체
    if (started && h !== currentHour) {
        playForHour(h);
    }

     // STEP 3: Your design.
    var period;
    if (h < 4) {
        period = 'night';
    } else if (h < 7) {
        period = 'dawn';
    } else if (h < 16) {
        period = 'day';
    } else if (h < 20) {
        period = 'evening';
    } else {
        period = 'night';
    }

    // 현재 시간대 이미지만 보이게
    scenes.forEach(function (img) {
        img.classList.toggle('active', img.id === period);
    });
}   // ← tick 함수를 닫는 괄호 (이게 빠져 있었어요)

playForHour(new Date().getHours());
tick();
setInterval(tick, 1000);