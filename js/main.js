var url = window.location.pathname;
var filename = url.substring(url.lastIndexOf('/')+1);

function title(){
    if (filename === 'index.html'){
        t = "Packages and Pricing";
        b = "Insert money grabbing scheme text here";
    } else if (filename === 'about.html'){
        t = "About the Visioneers";

        b = "We are a team of engineering students that are inspired by the need for an efficient online tool that can meet all of our learning needs. Our inspiration brought us to the idea of creating Smart Vision. We want to help like minded students to gain the most knowledge possible while schooling remotely. Given that we are students ourselves, we understand what other students want and need, and we are using that knowledge to make our product more tailored toward student use. We also wanted to benefit teachers and people in charge of larger institutions so as to maintain their level of leadership in a given environment.";
    } else if (filename === 'packages.html'){
        t = "Packages and Pricing";
        b = "Below are the packages that are available for the use of our software";

        b = "Our goal is to offer a customizable software to facilitate classes and make online learning easier and more organized for students and teachers.";
    } else if (filename === 'packages.html'){
        t = "Packages and Pricing";
        b = "Find the one that suits you best";

    }
    document.all['jumbotron'].innerHTML = '<h1 class="display-4" id="title">' + t + '</h1><p class="lead">' + b + '</p>';
}

title();