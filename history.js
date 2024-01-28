const form = document.getElementById("registrationForm");
const naam = document.getElementById("name");
const clas = document.getElementById("clas");
const sec = document.getElementById("sec");
const books = document.getElementById("books");
const table = document.querySelector(".tbl");
const tablecontent = document.querySelector(".tablecontent");

form.addEventListener('submit', function (e) {
    e.preventDefault();
    alltask();
});

function alltask() {
    const tr = document.createElement("tr");

    const td1 = document.createElement("th");
    td1.innerText = naam.value;
    tr.appendChild(td1);

    const td2 = document.createElement("th");
    td2.innerText = clas.value;
    tr.appendChild(td2);

    const td3 = document.createElement("th");
    td3.innerText = sec.value;
    tr.appendChild(td3);

    const td4 = document.createElement("th");
    td4.innerText = books.value;
    tr.appendChild(td4);

    tablecontent.appendChild(tr);
    table.appendChild(tablecontent);
    // tablecontent.appendChild(table.cloneNode(true));
}
