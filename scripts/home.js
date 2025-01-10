// Get current year
document.getElementById("current-year").textContent = new Date().getFullYear();

// Get last modification
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`

// Hamburger Button
const hamburgerButton = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav');

hamburgerButton.addEventListener('click', () => {
    navMenu.classList.toggle('active');

    if (hamburgerButton.textContent === '☰') {
        hamburgerButton.textContent = '✖';
    } else {
        hamburgerButton.textContent = '☰';
    }
});

// Courses Array
const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
];

function displayCourses(filteredCourses) {
    // Number of Credits per course
    const numberCredits = document.getElementById('number-credits')
    numberCredits.innerHTML = '';

    const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);

    const totalCreditsElement = document.createElement('div');
    totalCreditsElement.classList.add('total-credits');
    totalCreditsElement.textContent = `Total Credits: ${totalCredits}`;

    numberCredits.appendChild(totalCreditsElement);

    // Display courses
    const coursesList = document.getElementById('courses-list');
    coursesList.innerHTML = '';

    filteredCourses.forEach(course => {
        const courseButton = document.createElement('button');
        courseButton.classList.add('course-button');
        if (course.completed) {
            courseButton.classList.add('completed');
            courseButton.textContent = `✔ ${course.subject} ${course.number}`;
        } else {
            courseButton.textContent = `${course.subject} ${course.number}`;
        }
        
        coursesList.appendChild(courseButton);
    });
}

function filteredCourses(value) {
    let filteredCourses;
    if (value === 'all') {
        filteredCourses = courses;
    } else {
        filteredCourses = courses.filter(course => course.subject === value);
    }
    displayCourses(filteredCourses);
}

displayCourses(courses);