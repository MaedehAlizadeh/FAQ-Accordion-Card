const dropBtn = document.querySelectorAll('.dropdown-btn');
dropBtn.forEach( item => item.addEventListener('click' , openDropMenu) );

function openDropMenu(event){
    event.preventDefault();
    this.classList.toggle("active");
    const dropMenu = this.nextElementSibling;
    if (dropMenu.classList.contains('show-dropmenu')) {
        dropMenu.classList.remove('show-dropmenu');
        this.style.fontWeight = "normal";
    } else {
        dropMenu.classList.add('show-dropmenu');
        this.style.fontWeight = "700";
    };
}