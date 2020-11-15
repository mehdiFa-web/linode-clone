









export default function (btnId,menuWrapperId,classToToggle="hidden",callback) {
    const button = document.querySelector(`#${btnId}`);
    const menu = document.querySelector(`#${menuWrapperId}`);

    button.addEventListener('click',function(){
        menu.classList.toggle(classToToggle)

        if(callback) {
            callback()
        }
    })
    
}