document.addEventListener("DOMContentLoaded", async function () {

const params = new URLSearchParams(window.location.search);
const file = params.get("file");

const title = document.getElementById("article-title");
const content = document.getElementById("article-content");

if (!file) {
    title.textContent = "المقال غير موجود";
    content.innerHTML = "<p>لم يتم تحديد أي مقال.</p>";
    return;
}

try {

    const response = await fetch(file);

    if (!response.ok) {
        throw new Error("File not found");
    }

    const markdown = await response.text();

    const firstTitle = markdown.match(/^#\s+(.+)$/m);

    if (firstTitle) {
        title.textContent = firstTitle[1];
    }

    content.innerHTML = marked.parse(markdown);

}
catch (error) {

    title.textContent = "خطأ";

    content.innerHTML = `
        <p>
        تعذر تحميل المقال.
        </p>
    `;

}

});
