import { Printer } from "./index";
// import { Printer } from "asgar-printer";

const pdf_details={
    name:"Asgar Aliyev",
    skills:[
        {
            name:"HTML"
        },
        {
            name:"CSS"
        }
    ]
}
const printer = new Printer({url: "/public/my-pdf.html"});
await printer.init();
await printer.print(pdf_details);
