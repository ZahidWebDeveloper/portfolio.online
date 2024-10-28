

let menuitem = document.querySelector('#menu-item');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
        }
    });
};

menuitem.onclick = () => {
    menuitem.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};



function send() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var subject = document.getElementById("subject").value;
    var textarea = document.getElementById("textarea").value;

    var body = "name:" + name + "<br/> email:" + email + "<br/> number: " + phone + "<br/> Subject:" + subject + "<br/> textarea:" + textarea
    console.log(body);
    Email.send({
        SecureToken: "dd020c72-ee01-429a-a3ec-5dfcb18e02c8",
        To: 'Zahidsuleman65@gmail.com',
        From: "Zahidsuleman65@gmail.com",
        Subject: subject,
        Body: body
    }).then(
        message => {
            //     if (message == '') {
            //         swal("Successful!", "your data successfully recieved", "success");
            //     }
            //     else {
            //         swal("Something Wrong", "your data not successfully recieved", "error");
            //     }
            // }

            if (email === '') {
                swal({
                    title: "Error!",
                    text: "Email is required to send a message.",
                    icon: "error",
                    confirmButtonText: "OK"
                });
                return;
            }
            if (message === '') {
                swal({
                    title: "Error!",
                    text: "Message cannot be empty.",
                    icon: "error",
                    confirmButtonText: "OK"
                });
                return;
            }
            swal({
                title: "Success!",
                text: "Message is being sent!",
                icon: "success",
                confirmButtonText: "OK"
            });
        }
    );

}


