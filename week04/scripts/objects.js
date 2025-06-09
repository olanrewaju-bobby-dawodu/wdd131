let aCourse = {
    code: "WDD131",
    title: "Dynamic Web Fundamentals",
    credits: 2,
    sections: [
        {
            sectionNumber: "001",
            enrolled: "75",
            instructor: "Holloway"
        },
        {
            sectionNumber: "002",
            enrolled: "200",
            instructor: "Melwyn"
        }
    ]
};

function setCourseInformation(course) {
    const namenum = document.querySelector("#courseName");
    namenum.innerHTML = `${course.code} - ${course.title}`;
}

function sectionTemplate(section) {
    return `<tr><td>${section.sectionNumber}</td> <td>${section.enrolled}</td><td>${section.instructor}</td></tr>`
}

function renderSections(sections) {
    const html = sections.map(sectionTemplate);
    document.querySelector("#sections tbody").innerHTML = html.join("");
}

setCourseInformation(aCourse);
renderSections(aCourse.sections);