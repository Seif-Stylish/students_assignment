var yargs = require("yargs");

var students = require("./students");


yargs.command(
    {
        command: "add",
        describe: "add option",
        builder:
        {
            id:
            {
                describe: "id number",
                demandOption: true,
                type: "number"
            },

            name:
            {
                describe: "name",
                demandOption: true,
                type: "string"
            },

            grades:
            {
                describe: "grades",
                demandOption: true,
                type: "object"
            },

            comment:
            {
                describe: "comment",
                demandOption: false,
                type: "string"
            }
        },

        handler: (x)=>
        {
            students.addStudent(x.id , x.name , x.grades , x.comment);
        }
    }
)

yargs.command(
    {
        command: "read",
        describe: "read option",
        builder:
        {
            id:
            {
                describe: "id number",
                demandOption: true,
                type: "number"
            },
        },

        handler: (x)=>
        {
            students.readStudent(x.id);
        }
    }
)

yargs.command(
    {
        command: "list",
        describe: "list option",

        handler: ()=>
        {
            students.listStudents();
        }
    }
)

yargs.command(
    {
        command: "delete",
        describe: "delete option",
        builder:
        {
            id:
            {
                describe: "id number",
                demandOption: true,
                type: "number"
            },
        },

        handler: (x)=>
        {
            students.deleteStudent(x.id);
        }
    }
)

yargs.parse()