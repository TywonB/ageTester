function ageTest() {
    var birthdate = document.getElementById("birthdate").value;
    var year = (birthdate.slice(0, 4));
    var month = (birthdate.slice(5, 7));
    var day = (birthdate.slice(8));
    var today = new Date();
    var age = today.getFullYear() - year;
    if (today.getMonth() + 1 < month || (today.getMonth() + 1 == month && today.getDate() < day)) {
      age--;
    }
    if (age < 21) {
        alert('YOU SHALL NOT PASS!!!!!')
    } else if (birthdate == '') {
        alert('INVALID INFORMATION')
    } else {
        alert('YOU ARE WELCOMED')
    }
    console.log(birthdate);
}