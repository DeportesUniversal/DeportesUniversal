document.addEventListener('DOMContentLoaded', function() {
    const filter = document.querySelector('#category-filter');
    const mlbContainer = document.querySelector('#mlb .articles-list');
    const nbaContainer = document.querySelector('#nba .articles-list');

    // Cargar los artículos del archivo JSON
    fetch('articles.json')
        .then(response => response.json())
        .then(data => {
            renderArticles(data);
        });

    // Renderizar los artículos dinámicamente
    function renderArticles(data) {
        mlbContainer.innerHTML = '';
        nbaContainer.innerHTML = '';

        // Renderizar artículos de MLB
        data.mlb.forEach(article => {
            const articleElement = document.createElement('div');
            articleElement.classList.add('article');
            articleElement.innerHTML = `
                <h3>${article.title}</h3>
                <p>${article.content}</p>
                <img src="${article.image}" alt="${article.title}" class="article-image">
                <iframe width="560" height="315" src="${article.video}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <a href="${article.link}">Leer más</a>
            `;
            mlbContainer.appendChild(articleElement);
        });

        // Renderizar artículos de NBA
        data.nba.forEach(article => {
            const articleElement = document.createElement('div');
            articleElement.classList.add('article');
            articleElement.innerHTML = `
                <h3>${article.title}</h3>
                <p>${article.content}</p>
                <img src="${article.image}" alt="${article.title}" class="article-image">
                <iframe width="560" height="315" src="${article.video}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <a href="${article.link}">Leer más</a>
            `;
            nbaContainer.appendChild(articleElement);
        });
    }

    // Filtro de categoría
    filter.addEventListener('change', function() {
        const selectedCategory = filter.value;
        
        if (selectedCategory === 'mlb') {
            mlbContainer.style.display = 'block';
            nbaContainer.style.display = 'none';
        } else if (selectedCategory === 'nba') {
            mlbContainer.style.display = 'none';
            nbaContainer.style.display = 'block';
        } else {
            mlbContainer.style.display = 'block';
            nbaContainer.style.display = 'block';
        }
    });
});
