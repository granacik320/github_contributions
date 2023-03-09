const plain = document.querySelector('.plain')
// $.getJSON('https://api.github.com/users/granacik320/repos', function(data) {
//     data.forEach(e => {
//         console.log(`${e.name} - ${e.created_at}`)
//     })
// })

let days = {
    'Jan': 28,
    'Feb': 30,
    'Mar': 31,
    'Apr': 30,
    'May': 31,
    'Jun': 30,
    'Jul': 31,
    'Aug': 31,
    'Sep': 30,
    'Oct': 31,
    'Nov': 30,
    'Dec': 31
}
Object.values(days).forEach(e => {
    for(let i = ((e - e%7)/7); i>0; i--){
        let row = document.createElement('div')
        row.classList.add('row')
        for(let j=0; j<7; j++){
            let cube = `
            <div class="cube color-rating-2" style="--depth: 60px;">
                <div class="cube-face cube-face-front"></div>
                <div class="cube-face cube-face-back"></div>
                <div class="cube-face cube-face-left"></div>
                <div class="cube-face cube-face-right"></div>
                <div class="cube-face cube-face-top"></div>
                <div class="cube-face cube-face-bottom"></div>
            </div>
            `
            row.innerHTML += cube;
        }
        plain.appendChild(row)
    }
})