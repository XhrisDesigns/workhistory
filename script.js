//ALERT
function validate(){
  if(document.myForm.Name.value == ""){
    alert("Please provide your name");
    document.myForm.Name.focus()
  }else if(document.myForm.Company.value == ""){
    alert("Please provide your Company's name");
    document.myForm.Company.focus()
  }else if(document.myForm.CompanyAdd.value == ""){
    alert("Please provide your Company's Address");
    document.myForm.CompanyAdd.focus()
  }else if(document.myForm.Email.value == ""){
    alert("Please provide your Email");
    document.myForm.Email.focus()
  }else if(document.myForm.Password.value == ""){
    alert("Please provide your Password");
    document.myForm.Password.focus()
  }else if(document.myForm.Desc.value == ""){
    alert("Please provide the date you stopped");
    document.myForm.Desc.focus()
  }else if(document.myForm.Start.value == ""){
      alert("Please provide the date you started");
      document.myForm.Start.focus()
    }else if(document.myForm.End.value == ""){
      alert("Please provide the date you stopped");
      document.myForm.End.focus()
  }else{
    alert("You have successfully submitted your form");
  }
}


//PRINTING
const Form = document.getElementById("myForm")
const Name = document.getElementById("name");
const C_Name = document.getElementById("c_name");
const C_Add = document.getElementById("c_add");
const Email = document.getElementById("email");
const Description = document.getElementById("desc");
const Start = document.getElementById("start");
const End = document.getElementById("end");

const Div = document.getElementById("myDiv") 

Form.addEventListener("submit", function (e) {
  e.preventDefault()
  let ul = document.createElement("ul");
  ul.classList.add("card", "col-12", "col-md-3", "bg-success", "text-light", "shadow", "border-1", "pl-2", "m-3", "p-3", "h-25",)
  
  ul.innerHTML = `
      <p><span>Name:</span> ${Name.value}</p>
      <p><span>Email:</span> ${Email.value}</p>
      <p><span>Company's Name:</span> ${C_Name.value}</p>
      <p><span>Company's Address:</span> ${C_Add.value}</p>
      <p><span>Position:</span> ${Description.value}</p>    
      <p><span>Start Date:</span> ${Start.value}</p>
      <p><span>End Date:</span> ${End.value}</p>
      `;
  Div.appendChild(ul)
  Form.reset()
})

