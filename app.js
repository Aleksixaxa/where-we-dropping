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
                'Pleasent Park', 'Colossal Coliseum', 'Salty Towers'];
     let randomMap = mapList[Math.floor(Math.random()*mapList.length)];
     
     if (randomMap === 'Stealty Stronghold') {
        map.src = 'Maps/stealthy-stronghold.png'
    } else if (randomMap == 'Craggy Cliffs') {
        map.src = 'Maps/craggy-cliffs.png'
    } else if (randomMap == 'Steamy Stacks') {
        map.src = 'Maps/steamy-stacks' + '.png'
    } else if (randomMap == 'Dirty Docks') {
        map.src = 'Maps/dirty-docks' + '.png'
    } else if (randomMap == 'Retail Row') {
        map.src = 'Maps/retail-row' + '.png'
    } else if (randomMap == 'Catty Corner') {
        map.src = 'Maps/catty-corner' + '.png'
    } else if (randomMap == 'Lazy Lake') {
        map.src = 'Maps/lazy-lake' + '.png'
    } else if (randomMap == "Hunter's Haven") {
        map.src = 'Maps/hunters-rave' + '.png'
    } else if (randomMap == 'Misty Meadows') {
        map.src = 'Maps/misty-meadows' + '.png'
    } else if (randomMap == 'Slurpy Swamp') {
        map.src = 'Maps/slurpy-swamp' + '.png'
    } else if (randomMap == 'Holly Hedges') {
        map.src = 'Maps/holly-hedges' + '.png'
    } else if (randomMap == 'Weeping Woods') {
        map.src = 'Maps/weeping-woods' + '.png'
    }else if (randomMap == 'Sweaty Sands') {
        map.src = 'Maps/sweaty-sands' + '.png'
    } else if (randomMap == 'Coral Castle') {
        map.src = 'Maps/coral-castle' + '.png'
    } else if (randomMap == 'Pleasent Park') {
        map.src = 'Maps/pleasent-park' + '.png'
    } else if (randomMap == 'Colossal Coliseum') {
        map.src = 'Maps/colossal-coliseum' + '.png'
    } else if (randomMap == 'Salty Towers') {
        map.src = 'Maps/salty-towers' + '.png'
    }
     area.innerHTML = randomMap
    console.log(randomMap) //debugging


}
// randomMap()
refButton.addEventListener('click', randomMap)