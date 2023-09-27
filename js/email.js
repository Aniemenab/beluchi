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

  // Email.send({
  //   SecureToken: "5e11c05b-0fc2-4d36-a559-f12278dd7820",
  //   To: 'aniemenabeluchi@gmail.com',
  //   From: "aniemenabeluchi@gmail.com",
  //   Subject: "testing mic",
  //   Body: "text done by me",
  // }).then(
  //   message => alert(message)
  // );
  // client.UseDefaultCredentials = true;

  let ebody = `<b>Name: </b> ${fname.value}&nbsp; ${lname.value}
  <br>
  <b>Email: </b>${email.value}
  <br>
  <b>Phone: </b>${phone.value}
  <br>
  <b>Message: </b>${texthelp.value}
  `
  Email.send({
    Host : "smtp.elasticemail.com",
    Username: "aniemenabeluchi@gmail.com",
    Password: "D120CE9D505742067C873A0E51AEEA09D936",
    To: 'aniemenabeluchi@gmail.com',
    From: 'aniemenabeluchi@gmail.com',
    Subject: texthelp.value + email.value,
    Body: ebody
  }).then(
    message => alert(mesAlt)
  );
})
// submit.addEventListener('submit', (e)=>{
//   e.preventDefault();
//   console.log("Clicked")
// })
