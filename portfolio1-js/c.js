function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "choudhary02akash@gmail.com",
        Password : "Akash@24082002",
        To : 'choudhary02akash@gmail.com',
        From : document.getElementById("email"),
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}