const name = document.getElementById("name");
const clas = document.getElementById("clas");
const sec = document.getElementById("sec");
const books = document.getElementById("books");
const add_more = document.getElementsByTagName("form");
const table = document.getElementsByTagName("table");
const tablecontent = document.getElementsByClassName(".tablecontent");

function alltask() {
    tasks.forEach((value, index) => {
    const tr = document.createElement("tr");

    const td1 = document.createElement("td");
    td1.innerText = value.name;
    tr.appendChild(td1);

    const td2 = document.createElement("td");
    td2.innerText = value.clas;
    tr.appendChild(td2);

    const td3 = document.createElement("td");
    td3.innerText = value.sec;
    tr.appendChild(td3);
            
    const td4 = document.createElement("td");
    td4.innerText = value.books;
    tr.appendChild(td4);

    table.appendChild(tr);
    tablecontent.appendChild(table);
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    tr.push({
        name : nam.value,
        clas : clas.value,
        sec : sec.value,
        books : books.value,
    });
    alltask();
    console.log(tasks);
    console.log("hello");
});

console.log("its running");

