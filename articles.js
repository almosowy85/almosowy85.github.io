document.addEventListener("DOMContentLoaded", function () {

const articlesContainer = document.getElementById("articles-container");
const articlesCount = document.getElementById("articles-count");
const search = document.getElementById("search");

function normalize(text) {
    return (text || "")
        .toLowerCase()
        .replace(/[أإآ]/g, "ا")
        .replace(/ى/g, "ي")
        .replace(/ة/g, "ه")
        .replace(/[ًٌٍَُِّْ]/g, "");
}

function showArticles(list) {

    articlesContainer.innerHTML = "";
    articlesCount.textContent = list.length;

    if (list.length === 0) {
        articlesContainer.innerHTML = "<p>لا توجد مقالات.</p>";
        return;
    }

    list.forEach(article => {

        articlesContainer.innerHTML += `

<div class="book">

<img src="${article.image}" alt="${article.title}">

<div class="info">

<h2>${article.title}</h2>

<p><strong>👤 الكاتب:</strong> ${article.author}</p>

<p><strong>📅 التاريخ:</strong
