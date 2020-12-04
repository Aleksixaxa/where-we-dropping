const refButton = document.getElementById('refresh')
const area = document.querySelector('.random-name')
const dot = document.getElementById('dot')
const map = document.getElementById('map')

function styles (left, top) {
    dot.style.display = 'inline-block';
    dot.style.left = left + 'px';
    dot.style.top = top + 'px';
}


function randomMap () {
    const mapList = ['Stealty Stronghold', 'Craggy Cliffs', 
                'Steamy Stacks', 'Dirty Docks', 'Retail Row', 'Catty Corner', 
                'Lazy Lake', "Hunter's Haven", 'Misty Meadows', 'Slurpy Swamp', 
                'Holly Hedges', 'Weeping Woods', 'Sweaty Sands', 'Coral Castle', 
                'Pleasant Park', 'Colossal Coliseum', 'Salty Towers'];
     let randomMap = mapList[Math.floor(Math.random()*mapList.length)];
     
     if (randomMap === 'Stealty Stronghold') {
        map.src = 'https://i.imgur.com/rWHugEZ.png'
    } else if (randomMap == 'Craggy Cliffs') {
        map.src = 'https://i.imgur.com/UH2IxNk.png'
    } else if (randomMap == 'Steamy Stacks') {
        map.src = 'https://i.imgur.com/y5siwKY.png'
    } else if (randomMap == 'Dirty Docks') {
        map.src = 'https://i.imgur.com/8qu6QMl.png'
    } else if (randomMap == 'Retail Row') {
        map.src = 'https://i.imgur.com/TqYNzsJ.png'
    } else if (randomMap == 'Catty Corner') {
        map.src = 'https://i.imgur.com/3KrJXDb.png'
    } else if (randomMap == 'Lazy Lake') {
        map.src = 'https://i.imgur.com/oyjYF8R.png'
    } else if (randomMap == "Hunter's Haven") {
        map.src = 'https://i.imgur.com/dFcGwzt.png'
    } else if (randomMap == 'Misty Meadows') {
        map.src = 'https://i.imgur.com/krJeFSN.png'
    } else if (randomMap == 'Slurpy Swamp') {
        map.src = 'https://i.imgur.com/FRbWiaz.png'
    } else if (randomMap == 'Holly Hedges') {
        map.src = 'https://i.imgur.com/09iGwGG.png'
    } else if (randomMap == 'Weeping Woods') {
        map.src = 'https://i.imgur.com/LgYOZvj.png'
    }else if (randomMap == 'Sweaty Sands') {
        map.src = 'https://i.imgur.com/VfA8mBP.png'
    } else if (randomMap == 'Coral Castle') {
        map.src = 'https://i.imgur.com/1Riazjt.png'
    } else if (randomMap == 'Pleasant Park') {
        map.src = 'https://i.imgur.com/nSZPFte.png'
    } else if (randomMap == 'Colossal Coliseum') {
        map.src = 'https://i.imgur.com/eZSx1WD.png'
    } else if (randomMap == 'Salty Towers') {
        map.src = 'https://i.imgur.com/E58RIbe.jpg'
    }
     area.innerHTML = randomMap
    console.log(randomMap) //debugging


}
// randomMap()
refButton.addEventListener('click', randomMap)

refButton.addEventListener('click', function (e)  {
    refButton.style.transform = 'rotateZ(360deg)';
});

