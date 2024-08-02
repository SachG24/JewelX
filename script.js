
function highlight(event) {
    event.target.classList.toggle('highlighted');
}


function searchById() {
    const searchInput = document.getElementById('searchInput').value;
    const imgElement = document.getElementById(searchInput);

    if (imgElement) {
        imgElement.classList.add('highlighted');
    } else {
        alert('No product found with the given ID.');
    }
}