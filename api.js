let mockStudentDb = [
    /* {
        id: 123456789,
        firstName: "Harvey",
        lastName: "Centeno",
        email:"harvey.centeno@gmail.com"
    },
    {
        id: 696969696,
        firstName: "Keanu",
        lastName: "Redrino",
        email:"keanu.redrino@gmail.com"
    },
    {
        id: 987654321,
        firstName: "Mary Ann",
        lastName: "Mendez",
        email:"mary.ann.mendez@gmail.com"
    } */
];

function getStudentsAPI() {
    return mockStudentDb;
}

function addStudentsAPI(newStudentData){
    const savedStudent = {
        id: Date.now(),
        firstName: newStudentData.firstName,
        lastName: newStudentData.lastName,
        email: newStudentData.email
    }
    mockStudentDb.push(savedStudent);
    return savedStudent;
}

export { getStudentsAPI, addStudentsAPI };

