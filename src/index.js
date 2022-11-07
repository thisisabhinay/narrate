import "./styles.sass"

const para = document.querySelector(".para")
const result = para?.innerText?.match(/[^\.!\?]+[\.!\?]+/g)
para.innerHTML = result
    ?.map((sentence) => `<span class="sentence">${sentence}</span>`)
    .join("")

const speaker = document.querySelector(".speaker")
const characterWidth = 128
const focus = document.querySelector(".focus")

console.log(result)
const dialog = document.querySelector(".dialog")
const { left, width } = dialog.getBoundingClientRect()
speaker.style.left = left - characterWidth + "px"
focus.style.width = width + "px"

const focusBox = focus.getBoundingClientRect()
let sum = ""
dialog.addEventListener("wheel", () => {
    document.querySelectorAll(".sentence").forEach((sentence) => {
        const rect = sentence.getBoundingClientRect()

        if (
            rect.bottom > focusBox.top &&
            rect.right > focusBox.left &&
            rect.top < focusBox.bottom &&
            rect.left < focusBox.right
        ) {
            sum = sentence?.innerText
            focus.innerText = sum
        } else {
            sum = ""
        }
    })
})
