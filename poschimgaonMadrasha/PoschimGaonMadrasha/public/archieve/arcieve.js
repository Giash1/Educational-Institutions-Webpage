console.log('script.js loaded');


document.querySelector('.dropbtn').addEventListener('click', function (event) {
    event.preventDefault();
    var dropdownContent = this.nextElementSibling;
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
});
