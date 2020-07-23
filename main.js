window.onload = function(){
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signUpp');
    const container = document.getElementById('container');

    signUpButton.addEventListener('click', function(){
        container.classList.add('right-panel-active');
        var school = document.getElementById('schoolID').value;
        document.getElementById('school').innerHTML = school;
    } 
    );

    signInButton.addEventListener('click', () =>
    container.classList.remove('right-panel-active')
    ); 
}

document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#submit').onclick = submit;
});

function submit(){
    var studentName = document.getElementById('studentName').value;
    var mathScore = document.getElementById('maths').value;
    var englishScore = document.getElementById('english').value
    var computerScore = document.getElementById('computer').value
    var biologyScore = document.getElementById('biology').value   
    var chemistryScore = document.getElementById('chemistry').value
    var physicsScore = document.getElementById('physics').value 
    var classs = document.getElementById('class').value 
    var session = document.getElementById('session').value 

    let scores = [mathScore, englishScore, computerScore, biologyScore, chemistryScore, physicsScore];
    let grades = [];
    scores.forEach(checkGrade)

    function checkGrade(score){
       if(score < 30){
           grades.push('F')
       }else if(score >= 31 && score <= 59){
           grades.push('C')
       }else if(score >= 60 && score <= 69){
           grades.push('B')
       }else if(score >= 70 && score <= 100){
           grades.push('A')
       }else{
           alert('Invalid score input!')
       }
    }
    document.getElementById('student').innerHTML = studentName;
    document.getElementById('mathGrade').innerHTML = grades[0];
    document.getElementById('englishGrade').innerHTML = grades[1];
    document.getElementById('comGrade').innerHTML = grades[2];
    document.getElementById('bioGrade').innerHTML = grades[3];
    document.getElementById('chemGrade').innerHTML = grades[4];
    document.getElementById('phyGrade').innerHTML = grades[5];
    document.getElementById('classval').innerHTML = "Class: " + classs;
    document.getElementById('sessionval').innerHTML = "Session: " + session;

}


