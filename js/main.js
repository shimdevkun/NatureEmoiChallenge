let open = document.querySelector('.open');
let close = document.querySelector('.close');
let dropdown = document.querySelector('.container--dropdown');

let links = document.querySelectorAll('nav li');

open.addEventListener('click', function(e) {
  dropdown.style.display = 'block';
});

close.addEventListener('click', closeDropdown);

links.forEach(link => {
  link.addEventListener('click', closeDropdown);
})

function closeDropdown(e) {
  dropdown.style.display = 'none';
}