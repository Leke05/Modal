const btn = document.querySelector(".btn");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const fill = document.querySelector("#pid");
const tbody = document.querySelector("#tid")

function addData() {
    fill.innerHTML +=` <div class="row">
    <div class="col-lg-6 mx-auto">
        <div class="card mt-5">
            <div class="card-body">
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Enter your ID" id="Id" required>
                </div>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Enter your Name" id="Name" required>
                </div>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Enter your Age" id="Age" required>
                </div>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Enter your Dept" id="Dept" required>
                </div>
                <div class="input-group mb-3">
                    <input type="number" class="form-control" placeholder="Enter your Phonenumber" id="Phonenumber" required>
                </div>
                <div class="input-group mb-3">
                    <input type="number" class="form-control" placeholder="Enter your Salary" id="Salary" required>
                </div>
                <div class="text-center btn-group btn-group-lg" role="group" aria-label="Large button group">
                    <input type="button" value="AddNew" class="btn btn-info btn-block" id="btn1" role="button" onclick="AddNew()">
                    <input type="button" value="Reset" class="btn btn-danger " id="btn2" role="button" onclick="Reset()">
                </div>
            </div>
        </div>
    </div>
</div>`
}

function AddNew(){
    let inputId = Id.value;
    let inputName = Name.value;
    let inputAge = Age.value;
    let inputDept = Dept.value;
    let inputPhonenumber = Phonenumber.value;
    let inputSalary = Salary.value;
    if(Id.value == "", Name.value =="", Age.value =="", Dept.value =="", Salary.value =="", Phonenumber.value ==""){
       alert("Please Input Your Data")  
    }else{
        tbody.innerHTML +=` <tr>
        <td>${inputId}</td>
        <td>${inputName}</td>
        <td>${inputAge}</td>
        <td>${inputDept}</td>
        <td>${inputPhonenumber}</td>
        <td>${inputSalary}</td>
        </tr>`  
    }
};

function Reset(){
   Id.value = ""
    Name.value = ""
    Age.value = ""
    Dept.value = ""
    Phonenumber.value = ""
    Salary.value = ""
}