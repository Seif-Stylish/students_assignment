const fs = require("fs");

// add student

function addStudent(id , name , grades , comment = "")
{
    var students = loadStudents();

    var flag = 0;
    for(var i = 0; i < students.length; i++)
    {
        if(students[i].id == id)
        {
            flag = 1;
            break;
        }
    }
    if(flag == 1)
    {
        console.log("id is supposed to be unique");
    }
    else
    {
        students.push(
            {
                id: id,
                name: name,
                grades: grades,
                comment: comment
            }
        )
        saveStudentsData(students);
        console.log("student added successfully");
    }
}

function loadStudents()
{
    try
    {
        var studentsData = fs.readFileSync("students.json").toString();
        return JSON.parse(studentsData);
    }
    catch(e)
    {
        return [];
    }
}

function saveStudentsData(student)
{
    var a = JSON.stringify(student);
    fs.writeFileSync("students.json" , a);
}

//read student

function readStudent(id)
{
    var students = loadStudents();
    var flag = 0;
    var index;
    for(var i = 0; i < students.length; i++)
    {
        if(id == students[i].id)
        {
            flag = 1;
            index = i;
            break;
        }
    }

    if(flag == 0)
    {
        console.log("this student does not exist");
    }

    else
    {
        console.log(`id = ${students[index].id}`);
        console.log(`name = ${students[index].name}`);
        console.log(`grades = ${JSON.parse(students[index].grades)}`);
        if(students[index].comment != "")
        {
            console.log(`comment = ${students[index].comment}`);
        }
    }
}

//list students

function listStudents(id)
{
    var students = loadStudents();
    for(var i = 0; i < students.length; i++)
    {
        var sum = 0;
        var studentsGrades = JSON.parse(students[i].grades);
        for(var a = 0; a < studentsGrades.length; a++)
        {
            sum += parseInt(studentsGrades[a]);
        }

        console.log(`student ${i + 1} name = ${students[i].name}`);
        console.log(`student ${i + 1} total marks = ${sum}`);
    }
}

// delete student

function deleteStudent(id)
{
    var students = loadStudents();
    var flag = 0;
    var index;
    for(var i = 0; i < students.length; i++)
    {
        if(id == students[i].id)
        {
            flag = 1;
            index = i;
            break;
        }
    }

    if(flag == 0)
    {
        console.log("this student does not exist to be deleted");
    }
    else
    {
        students.splice(index , 1);
        saveStudentsData(students);
        console.log("student deleted successfullyyyyy");
    }
}

module.exports =
{
    addStudent,
    readStudent,
    listStudents,
    deleteStudent
}