// Use JavaScript to obtain a reference to the first article header and change its text with textContent property to "Welcome the {insert your name here} blog"
const articleHeader = document.querySelector('.article__header');
articleHeader.textContent = 'Welcome the Robert blog';

// Use JavaScript to obtain a reference to all article__header elements and change their classList property value to "article__header important".

const articleHeaderAll = document.querySelectorAll('.article__header');
for (let i=0; i<articleHeaderAll.length; i++) {
    articleHeaderAll[i].classList.replace('article__header', 'article__header__important');
    console.log(articleHeaderAll[i].classList)
}
