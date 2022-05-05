const dropBtn = document.querySelectorAll('.dropdown-btn');
dropBtn.forEach( item => item.addEventListener('click' , openDropMenu) );

function openDropMenu(event){
    event.preventDefault();
    const dropMenu = this.nextElementSibling;
    if (dropMenu.style.display === "block") {
        dropMenu.style.display = "none";
    } else {
        dropMenu.style.display = "block";
        dropBtn.style.fontW
    };
}