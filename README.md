Example

Example.js

import { Printer } from "./index";

// import { Printer } from "asgar-printer";

const pdf\_details={

`   `name:"Asgar Aliyev",

`   `skills:[

`       `{

`           `name:"HTML"

`       `},

`       `{

`           `name:"CSS"

`       `}

`   `]

}

const printer = new Printer({url: "/public/my-pdf.html"});

await printer.init();

await printer.print(pdf\_details);




/public/my-pdf.html

<!DOCTYPE html>

<html lang="en">

<head>

`   `<meta charset="UTF-8">

`   `<meta http-equiv="X-UA-Compatible" content="IE=edge">

`   `<meta name="viewport" content="width=device-width, initial-scale=1.0">

`   `<link rel="stylesheet" href="https://raw.githubusercontent.com/asgaraliyev/printer/main/style.css">

`   `<title>Document</title>

</head>

<body>

`   `<h1>Salam {{name}}</h1>

`   `<ul>

`       `{{#each skills}}

`           `<li>{{name}}</li>

`       `{{/each}}

`   `</ul>

</body>

</html>

