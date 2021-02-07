let score = 0;
const moles = [
    {
        status: "sad",
        next: getSadInterval(),
        king: false,
        node: document.getElementById('hole-0')
    },
    {
        status: "sad",
        next: getSadInterval(),
        king: false,
        node: document.getElementById('hole-1')
    },
    {
        status: "sad",
        next: getSadInterval(),
        king: false,
        node: document.getElementById('hole-2')
    },
    {
        status: "sad",
        next: getSadInterval(),
        king: false,
        node: document.getElementById('hole-3')
    },
    {
        status: "sad",
        next: getSadInterval(),
        king: false,
        node: document.getElementById('hole-4')
    },
    {
        status: "sad",
        next: getSadInterval(),
        king: false,
        node: document.getElementById('hole-5')
    },
    {
        status: "sad",
        next: getSadInterval(),
        king: false,
        node: document.getElementById('hole-6')
    },
    {
        status: "sad",
        next: getSadInterval(),
        king: false,
        node: document.getElementById('hole-7')
    },
    {
        status: "sad",
        next: getSadInterval(),
        king: false,
        node: document.getElementById('hole-8')
    },
    {
        status: "sad",
        next: getSadInterval(),
        king: false,
        node: document.getElementById('hole-9')
    },
]
const win = function (e) {
    document.querySelector('.bg').classList.add('hide');
    document.querySelector('.win').classList.remove('hide');
}

function getSadInterval() {
    return Date.now() + 1000;
}

function getGoneInterval() {
    return Date.now() + Math.floor(Math.random() * 18000) + 2000;
}

function getHungryInterval() {
    return Date.now() + Math.floor(Math.random() * 3000) + 2000;
}

function getKingStatus() {
    return Math.random() > 0.9;
}

function getNextStatus(mole) {
    switch (mole.status) {
        case "sad":
        case 'fed':
            mole.next = getSadInterval();
            mole.status = 'leaving';

            if (mole.king) {
                mole.node.children[0].src = '../../images/mole/king-mole-leaving.png';
            } else {
                mole.node.children[0].src = '../../images/mole/mole-leaving.png';
            }
            break;

        case 'leaving':
            mole.next = getGoneInterval();
            mole.status = 'gone';
            mole.node.children[0].classList.add('gone');
            break;

        case 'gone':
            mole.status = 'hungry'
            mole.king = getKingStatus();
            mole.next = getHungryInterval();
            mole.node.children[0].classList.add('hungry');
            mole.node.children[0].classList.remove('gone');

            if (mole.king) {
                mole.node.children[0].src = '../../images/mole/king-mole-hungry.png';
            } else {
                mole.node.children[0].src = '../../images/mole/mole-hungry.png';
            }
            break;

        case 'hungry':
            mole.status = 'sad';
            mole.next = getSadInterval();
            mole.node.children[0].classList.remove('hungry');
            if (mole.king) {
                mole.node.children[0].src = '../../images/mole/king-mole-sad.png';
            } else {
                mole.node.children[0].src = '../../images/mole/mole-sad.png';
            }
            break;


    }
}

document.querySelector('.bg').addEventListener('click', feed);
function feed(e) {
    if (e.target.tagName !== 'IMG' ||
        !e.target.classList.contains('hungry')) {
        return;
    }

    const mole = moles[parseInt(e.target.dataset.index)];

    mole.status = 'fed';
    mole.next = getSadInterval();
    if (mole.king) {
        mole.node.children[0].src = '../../images/mole/king-mole-fed.png';
        score += 2;

    } else {
        mole.node.children[0].src = '../../images/mole/mole-fed.png';
        score++;
    }
    mole.node.children[0].classList.remove('hungry');

    if (score >= 10) {
        win();
    }

    document.querySelector('.worm-container').style.width = `${10 * score}%`;
}


let runAgainAt = Date.now() + 100;
const nexframe = function (params) {
    const now = Date.now();

    if (runAgainAt <= now) {
        for (let i = 0; i < moles.length; i++) {
            if (moles[i].next <= now) {
                getNextStatus(moles[i]);
            }

        }

        runAgainAt = now + 100;
    }
    requestAnimationFrame(nexframe);
}





nexframe();