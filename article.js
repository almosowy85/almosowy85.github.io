document.addEventListener("DOMContentLoaded", async function () {

const params = new URLSearchParams(window.location.search);
const file = params.get("file");

const titleElement = document.getElementById("article-title");
const contentElement = document.getElementById("article-content");

if (!file) {
    titleElement.textContent = "المقال غير موجود";
    contentElement.innerHTML = "<p>لم يتم تحديد المقال.</p>";
    return;
}

try {

    const response = await fetch(file);

    if (!response.ok) {
        throw new Error();
    }

    const markdown = await response.text();

    const titleMatch = markdown.match(/^#\s+(.+)$/m);

    if (titleMatch) {
        titleElement.textContent = titleMatch[1];
    }

    contentElement.innerHTML = marked.parse(markdown);

} catch {

    titleElement.textContent = "خطأ";

    contentElement.innerHTML = `
        <p>تعذر تحميل المقال.</p>
        <p>تأكد من وجود الملف في مجلد articles.</p>
    `;

}

});
