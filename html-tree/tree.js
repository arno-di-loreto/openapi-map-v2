document.querySelectorAll('.node').forEach(item => {
  item.addEventListener('click', event => {
    //handle click
    const node = event.target.closest(".node");
    const children = node.nextElementSibling;
    children.classList.toggle("closed");
    console.log(children);
  })
})