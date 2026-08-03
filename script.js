document.addEventListener("DOMContentLoaded", function () {

const booksContainer = document.getElementById("books-container");
const booksCount = document.getElementById("books-count");
const search = document.getElementById("search");

function normalize(text){

return text
.toLowerCase()
.replace(/[أإآ]/g,"ا")
.replace(/ى/g,"ي")
.replace(/ة/g,"ه")
.replace(/[ًٌٍَُِّْ]/g,"");

}

function showBooks(list){

booksContainer.innerHTML="";

booksCount.textContent=list.length;

if(list.length===0){

booksContainer.innerHTML="<p>❌ لا توجد نتائج.</p>";

return;

}

list.forEach(book=>{

booksContainer.innerHTML+=`

<div class="book">

<img src="${book.image}" alt="${book.title}">

<div class="info">

<h2>${book.title}</h2>

<p><strong>👤 المؤلف:</strong> ${book.author}</p>

<p><strong>📄 عدد الصفحات:</strong> ${book.pages}</p>

<p><strong>📅 سنة الطباعة:</strong> ${book.year}</p>

<p><strong>🏷️ التصنيف:</strong> ${book.category}</p>

<p>${book.description}</p>

<a class="button" href="${book.pdf}" target="_blank">📖 قراءة الكتاب</a>

<a class="button" href="${book.pdf}" download>📥 تحميل PDF</a>

</div>

</div>

`;

});

}

showBooks(books);

search.addEventListener("input",function(){

const value=normalize(this.value.trim());

const result=books.filter(book=>{

return normalize(book.title).includes(value)

|| normalize(book.author).includes(value)

|| normalize(book.category).includes(value)

|| normalize(book.description).includes(value);

});

showBooks(result);

});

});
