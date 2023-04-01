const filterBtn = document.querySelector('.filter')
const items = document.querySelector('.items')
const likebtn = document.querySelector('.likebtn')
const dislikebtn = document.querySelector('.dislikebtn')
const URL = "http://localhost:3000/POSTS"

const getData = async (url) => {
    const res = await fetch(url)
    const data = await res.json()

    return data
}

likebtn.addEventListener('click', async () => {
    let data = await getData(URL)
    data.forEach(el => {
        let j = document.querySelector(".j")
        j.innerHTML = 385 
})
})
dislikebtn.addEventListener('click', async () => {
    let data = await getData(URL)
    data.forEach(el => {
        let d = document.querySelector(".d")
        d.innerHTML = 26 
})
})
filterBtn.addEventListener('click', async () => {
    let data = await getData(URL)
    data.forEach(el => {
        let likes = el.likes;
        let like = Number(likes);
        let dislikes = el.dislikes;
        let dislike = Number(dislikes);
        items.insertAdjacentHTML(`beforeend`, `
        <div class=line><h4>NAME:${el.name}</h4></div>
        <div class="post">
        <img src="${el.img}">
        </div>
        <div class="item">
            <h4 >LIKES:<span class = "j">${like}</span></h4>
            <h4>DISLIKES:<span class = "d">${dislike}</span></h4>
            <h4>COMMENTS:${el.comments}</h4>
        </div>`
        );

    })
    
})

