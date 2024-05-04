function headerDate()
{
    const timeElement = document.querySelector(".header__date--times")
    const moonElement = document.querySelector(".header__date--moon")

    const date = new Date()
    const localeDate = date.toLocaleDateString().split('/')
    const days  = ["senin", "selasa", "rabu", "kamis", "jum'at", "sabtu", "minggu"]
    const moons = ["januari", "febuari", "maret", "april", "mei", "juni", "juli", "agustus", "september", "oktober", "desember"]

    const time = date.getHours() + ':' + date.getMinutes()
    const moon = `${days[date.getDay() - 1]}, ${date.getMonth()} ${moons[localeDate[1] - 1]}`

    timeElement.textContent = time
    moonElement.textContent = moon


}

setInterval(headerDate, 1000)


let i = 0
const text = [
    `
    Selamat bertambah usia sayang, segala doa baik aku 
    panjatkan untuk kamu, semoga segala hal yang menjadi
    impian kamu bisa tercapai.

    Maaf ya cuman bisa ngasih ginian, gua tau ini ngak sebagus 
    yang kamu pernah liat ditiktok atau diyoutube, tapi ya cuman
    bisa segini yang aku buat maaf ya :),

    I LOVE YOUU!
    `
]
const id = "typedMessage"
const speed = 80

function effectTyped(index)
{
    if (i < text[index].length)  {
        document.getElementById(id).innerHTML += text[index].charAt(i)
        i++
        setTimeout(() => effectTyped(index), speed)
    }
}



const messageElement = document.querySelector(".section__notify")
const btn = document.createElement("button");

btn.classList.add("footer__button")
btn.innerText = "Lihat Pesan"

document.getElementById("btn-notify").appendChild(btn)

const buttonElement = document.querySelector(".footer__button")

buttonElement.addEventListener("click", () => {
    document.getElementById("soundNotify").play()
    document.getElementById("soundMusic").play()

    setTimeout(() => {
        messageElement.classList.add("active")
        btn.textContent = "udah gitu doang 🗿"
        effectTyped(0)
    }, 400)
})
