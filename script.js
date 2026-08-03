
document.addEventListener("DOMContentLoaded", function () {

const booksContainer = document.getElementById("books-container");
const booksCount = document.getElementById("books-count");

if (!booksContainer) return;

booksCount.textContent = books.length;

if (books.length === 0) {

booksContainer.innerHTML = "<p>لا توجد كتب منشورة حالياً.</p>";

return;

}

books.forEach(book => {

booksContainer.innerHTML += `

<div class="book">

<img src="${book.image}" alt="${book.title}">

<div class="info">

<h2>${book.title}</h2>

<p><strong>👤 المؤلف:</strong> ${book.author}</p>

<p><strong>📄 عدد الصفحات:</strong> ${book.pages}</p>

<p><strong>📅 سنة الطباعة:</strong> ${book.year}</p>

<p><strong>🏷️ التصنيف:</strong> ${book.category}</p>

<p>${book.description}</p>

<a class="button" href="${book.pdf}" target="_blank">
📖 قراءة الكتاب
</a>

<a class="button" href="${book.pdf}" download>
📥 تحميل PDF
</a>

</div>

</div>

`;

});

});
