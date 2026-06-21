function analyzeResume(){

let resume=document.getElementById("resume").value.toLowerCase();
let interest=document.getElementById("interest").value.toLowerCase();

if(resume.trim()===""){
alert("Please paste your resume");
return;
}

const skills=[
"java",
"python",
"sql",
"html",
"css",
"javascript",
"react",
"node",
"mongodb",
"git"
];

let foundSkills=[];
let missingSkills=[];
let score=0;

skills.forEach(skill=>{

if(resume.includes(skill)){
foundSkills.push(skill);
score+=7;
}
else{
missingSkills.push(skill);
}

});

if(resume.includes("internship")) score+=10;
if(resume.includes("project")) score+=10;
if(resume.includes("b.tech") || resume.includes("btech")) score+=10;
if(resume.includes("certification")) score+=10;

if(score>100) score=100;

let level="";

if(score>=80){
level="Excellent";
}
else if(score>=60){
level="Good";
}
else{
level="Needs Improvement";
}

let roadmap="";

if(interest.includes("java")){

roadmap=`
1. Master Core Java
2. Learn JDBC
3. Learn Spring Boot
4. Build Java Projects
5. Practice DSA
6. Apply for Java Developer Roles
`;

}
else if(interest.includes("mern")){

roadmap=`
1. HTML CSS JavaScript
2. React.js
3. Node.js
4. Express.js
5. MongoDB
6. Full Stack Projects
`;

}
else if(interest.includes("ai")){

roadmap=`
1. Python
2. Machine Learning
3. Deep Learning
4. NLP
5. Build AI Projects
6. Learn Generative AI
`;

}
else{

roadmap=`
1. Learn DSA
2. Improve Aptitude
3. Build Projects
4. Learn Git & GitHub
5. Mock Interviews
`;

}

let roles=[];

if(foundSkills.includes("java"))
roles.push("Java Developer");

if(foundSkills.includes("react"))
roles.push("Frontend Developer");

if(foundSkills.includes("node"))
roles.push("Backend Developer");

if(foundSkills.includes("react") && foundSkills.includes("node"))
roles.push("Full Stack Developer");

if(foundSkills.includes("python"))
roles.push("Python Developer");

if(roles.length===0)
roles.push("Software Engineer");

document.getElementById("result").innerHTML=`

<div class="card">
<h2>ATS Score</h2>
<p class="score">${score}/100</p>
<p class="level">${level}</p>
</div>

<div class="card">
<h2>Skills Found</h2>
<ul>
${foundSkills.map(skill=>`<li>${skill}</li>`).join("")}
</ul>
</div>

<div class="card">
<h2>Missing Skills</h2>
<ul>
${missingSkills.map(skill=>`<li>${skill}</li>`).join("")}
</ul>
</div>

<div class="card">
<h2>Career Recommendations</h2>
<ul>
${roles.map(role=>`<li>${role}</li>`).join("")}
</ul>
</div>

<div class="card">
<h2>Learning Roadmap</h2>
<pre>${roadmap}</pre>
</div>

<div class="card">
<h2>Resume Improvement Suggestions</h2>
<ul>
<li>Add Internship Experience</li>
<li>Add Certifications</li>
<li>Add GitHub Profile</li>
<li>Add Quantifiable Achievements</li>
<li>Add Technical Projects</li>
</ul>
</div>

<div class="card">
<h2>Interview Questions</h2>
<ol>
<li>Explain OOP Concepts in Java.</li>
<li>Difference between SQL and NoSQL?</li>
<li>What is React Virtual DOM?</li>
<li>Explain REST API.</li>
<li>What is Git and GitHub?</li>
<li>What are Java Collections?</li>
<li>Explain Normalization in SQL.</li>
</ol>
</div>

`;

}