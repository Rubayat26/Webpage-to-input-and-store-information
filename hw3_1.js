


document.getElementById('btn').addEventListener('click', addRow);

function addRow(e){
    e.preventDefault();
    let tableRef = document.getElementById('table1');
    

    let newRow = tableRef.insertRow(-1);

    let newCell1 = newRow.insertCell(0);
    let newCell2 = newRow.insertCell(1);
    let newCell3 = newRow.insertCell(2);
    let newCell4 = newRow.insertCell(3);

    var studentName = document.getElementById('name').value;
    var studentAge = document.getElementById('age').value;
    var studentPhoneNo = document.getElementById('phone').value;
    var studentAdress = document.getElementById('adress').value;

    newCell1.innerHTML =  studentName;   
    newCell2.innerHTML =  studentAge;   
    newCell3.innerHTML =  studentPhoneNo;   
    newCell4.innerHTML =  studentAdress;   

   


}

l


