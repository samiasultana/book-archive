const searchBooks = () => {
    const searchField = document.getElementById('search-field');
    searchText = searchField.value;
    searchField.value = '';

    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.docs))
}

const displaySearchResult = books => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    books.forEach(book => {
        const div = document.createElement('div');
        div.classList.add("col");
        div.innerHTML = `
            <div class="col">
                <div class="card h-100">
                    <img class="img-fluid" src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h3 class="card-title fw-bold"> ${book.title}</h3>
                        <h5>By ${book.author_name}</h5>
                        <p class="fw-bold">Publisher: <span class="fw-normal fst-italic text-dark"> ${book.publisher}</span></p>
                        <p class="fw-bold">First Published On: ${book.first_publish_year}</p>
                    </div>
                </div>
            </div>
        `;
        searchResult.appendChild(div);
    });
}
