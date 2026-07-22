function addStudent() {

    let name = document.getElementById("studentName").value;

    if(name !== "") {

        let li = document.createElement("li");
        li.innerText = username;

        document.getElementById("studentList").appendChild(li);

        document.getElementById("studentName").value = "";
    }
}