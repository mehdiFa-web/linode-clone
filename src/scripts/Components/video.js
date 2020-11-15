export default function (id) {
    const video = document.querySelector(`#${id}`)
    video.controls = false
}