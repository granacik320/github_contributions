const plain = document.querySelector('.plain')
let url = new URLSearchParams(window.location.search);

$.getJSON(`https://api.github.com/users/${url.getAll('user')}/repos`, function(data) {
    let date = new Date();
    date.setDate(date.getDate()-364);
    for(let i = 52; i>0; i--){
        let row = document.createElement('div')
        row.classList.add('row')
        for(let j=0; j<7; j++){
            date.setDate(date.getDate()+1);
            let cube = `
            <div class="cube" data-date="${date.getFullYear()}-${('0' + (date.getMonth()+1)).slice(-2)}-${('0' + (date.getDate())).slice(-2)}">
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
    data.forEach(e => {
        $(`div[data-date="${e.created_at.slice(0,-10)}"]`).attr({
            "style":`--depth: 60px`,
            "class":`cube color-rating-2`
        });
    })
}).fail(function() {
    document.body.innerHTML = '404'
})
// color-rating-2" style="--depth: 60px;"${e.created_at.slice(0,-10)}