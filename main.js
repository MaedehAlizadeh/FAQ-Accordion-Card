const dropBtn = document.querySelectorAll('.dropdown-btn');

dropBtn.forEach( item => item.addEventListener('click' , openDropMenu) );

function openDropMenu(event){
    event.preventDefault();
    // start by closing every dropdown
    closeOpenDropdown();
    // Set dropdown menu icon 
    this.classList.toggle("active");
    const dropItem = this.nextElementSibling;
    // open the button was clicked
    if (dropItem.classList.contains('show-dropmenu')) {
        dropItem.classList.remove('show-dropmenu');
    } else {
        dropItem.classList.add('show-dropmenu' );
    };
    closeOpenDropdownIfClickOutsideElement(this , event);
}


// if a button is clicked and another dropdownMenu is open, it closes first
function closeOpenDropdown() {
    const dropMenu = document.querySelectorAll('.dropdown-menu');
    dropMenu.forEach( item => {
        item.classList.toggle('show-dropmenu' , false)

    });
}
