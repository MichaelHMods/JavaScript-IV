// CODE here for your Lambda Classes
//parent
class Person {
    constructor(mainAttr){
       this.name = mainAttr.name;
       this.age = mainAttr.age;
       this.location = mainAttr.location;
    };
    //Person's methods
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    };
};

//child
class Student extends Person {
    constructor(studentAttr) {
        super(studentAttr);
        this.previousBackground = studentAttr.previousBackground;
        this.className = studentAttr.className;
        this.favSubjects = studentAttr.favSubjects;//needs array creation
    };
    //student methods
    listsSubjects(){
        console.log(`${this.favSubjects}`);//needs forEach
    };
    prAssignment(studentSubject){
        console.log(`${this.name} has submitted a PR for ${studentSubject}`);
    };
    sprintChallenge(sprintSubject) {
        console.log(`${this.name} has begun sprint challenge on ${sprintSubject}.`)
    }
};

//child
class Instructor extends Person {
    constructor(insAttr) {
        super(insAttr);
        this.specialty = insAttr.specialty;
        this.favLanguage = insAttr.favLanguage;
        this.catchphrase = insAttr.catchphrase;
    };
    //methods
    demo(subject){
       console.log( `Today we are learning about ${subject}.`);
    };
    grade(gradeSubject) {
        console.log(`${this.name} receives a perfect score on ${gradeSubject}.`);
    };
};

//grandchild of Instructor and Person
class ProjectManager extends Instructor {
    constructor(pmAttr) {
        super(pmAttr);
        this.gradClassName = pmAttr.gradClassName;
        this.favInstructor = pmAttr.favInstructor;
    };
    //methods for PM
    standUp(slackChannel) {
        console.log(`${this.name} announces to ${slackChannel}, @channel standy times!`);
    };
    debugsCode(studentName, theSubject) {
        console.log(`${studentName}'s code on ${theSubject}`);
    };
};

//Students
const studentOne = new Student({
    name: 'Mike',
    age: '42',
    location: 'Normal',
    previousBackground: 'Poker Dealer',
    className: 'Web22',
    favSubjects:['pe', 'JS', 'html'],
});

const studentTwo = new Student({
    name: 'Michele',
    age: '40',
    location: 'Rivertonville',
    previousBackground: 'Lobby',
    className: 'Web21',
    favSubjects:['math', 'science', 'html']
});

const studentTre = new Student({
    name: 'Benji',
    age: '22',
    location: 'Cali',
    previousBackground: 'The Man',
    className: 'UX22',
    favSubjects:['History', 'English', 'writing']
});

//Instructors
const teacherOne = new Instructor({
    name: 'Britt',
    age: '27',
    location: 'Ottawa',
    specialty: 'JS',
    favLanguage: 'JavaScript',
    catchphrase: 'Five or seven minutes?'
});

const teacherTwo = new Instructor({
    name: 'Mr. Perfect',
    age: '65',
    location: 'Canadia',
    specialty: 'Suplex',
    favLanguage: 'Perfect Plex',
    catchphrase: 'One, two, three.'
});

const teacherthree = new Instructor({
    name: 'The Rock',
    age: '45',
    location: 'USA',
    specialty: 'Peoples Elbow',
    favLanguage: 'Trash Talk',
    catchphrase: 'Can you smell what the Rock is cooking?'
});

//PMs here
const pmOne = new ProjectManager({
    name: 'Stevo',
    age: '30',
    location: 'Seattle',
    specialty: 'Talking',
    favLanguage: 'React',
    catchphrase: 'You need to get the pull request done.',
    gradClassName:'web 19',
    favInstructor: 'The Rock',
});

const pmTwo = new ProjectManager({
    name: 'Bond',
    age: '50',
    location: 'London',
    specialty: 'Covert Ops',
    favLanguage: 'Ruby',
    catchphrase: 'Shaken, not stirred',
    gradClassName:'007',
    favInstructor: 'Q',
});

const pmTre = new ProjectManager({
    name: 'Bob',
    age: '19',
    location: 'Texas',
    specialty: 'Full Stack',
    favLanguage: 'Html',
    catchphrase: 'I finished high school last year.',
    gradClassName:'web 20',
    favInstructor: 'Mr.Perfect',
});
console.log(studentOne.speak());
pmTwo.debugsCode('Mike', 'pe');
pmTre.standUp('theSteveRollinschannel');
teacherTwo.grade('82');
teacherOne.demo('HTML');

