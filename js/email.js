// function sendEmail(){
//     Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "aniemenabeluchi@gmail.com",
//         Password : "8B22831EAEF9BB9948A0168DEBC0D2BDB0D0",
//         To : 'aniemenabeluchi@gamail.com',
//         From : document.getElementById("email").value,
//         Subject : "This is the subject",
//         Body : "And this is the body"
//     }).then(
//       message => alert(message)
//     );
// }
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const texthelp = document.getElementById('message')
const submit = document.getElementsByClassName('form-contact');
const mesAlt = 'Message Successful'
document.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log("Clicked");



  let ebody = `<b>Name: </b> ${fname.value}&nbsp; ${lname.value}
  <br>
  <b>Email: </b>${email.value}
  <br>
  <b>Phone: </b>${phone.value}
  <br>
  <b>Message: </b>${texthelp.value}
  `


  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "aniemenabeluchi@gmail.com",
    Password: "D120CE9D505742067C873A0E51AEEA09D936",
    To: 'aniemenabeluchi@gmail.com',
    From: 'aniemenabeluchi@gmail.com',
    Subject: texthelp.value + email.value,
    Body: ebody
  }).then(
    message => alert(mesAlt)
  );
  fname.value = "";
  lname.value = "";
  email.value = "";
  phone.value = "";
  texthelp.value = "";
})

// const btn = document.getElementById('btn2');
// btn.addEventListener('click', function handleClear(event) {
//   event.preventDefault();
//   const fname = document.getElementById('fname');
//   const lname = document.getElementById('lname');
//   const email = document.getElementById('email');
//   const phone = document.getElementById('phone');
//   const texthelp = document.getElementById('message');
  
//   console.log(fname.value)

// })


// submit.addEventListener('submit', (e)=>{
//   e.preventDefault();
//   console.log("Clicked")
// })