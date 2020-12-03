const refButton = document.getElementById('refresh')
const area = document.querySelector('.random-name')
function randomMap () {
    const mapList = ['Stealty Stronghold', 'Craggy Cliffs', 
                'Steamy Stacks', 'Dirty Docks', 'Retail Row', 'Catty Corner', 
                'Lazy Lake', "Hunter's Haven", 'Misty Meadows', 'Slurpy Swamp', 
                'Holly Hedges', 'Weeping Woods', 'Sweaty Sands', 'Coral Castle', 
                'Pleasent Park', 'Colossal Coliseum', 'Salty Towers'];
    let randomMap = mapList[Math.floor(Math.random()*mapList.length)];
    area.innerHTML = randomMap
    console.log(randomMap) //debugging
}

refButton.addEventListener('click', randomMap)