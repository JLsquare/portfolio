particlesJS.load('particles-js', 'assets/particles.json');

const header = document.querySelector('nav');
const about = document.querySelector('#about');
const projects = document.querySelector('#projects');
const skills = document.querySelector('#skills');
const projectsList = document.querySelector('#projects-list');

const allButton = document.querySelector('#all');
const schoolButton = document.querySelector('#school');
const gamesButton = document.querySelector('#games');
const webButton = document.querySelector('#web');
const otherButton = document.querySelector('#others');

const softwareDevelopmentList = document.querySelector('#software-development-list');
const computerGraphicsList = document.querySelector('#computer-graphics-list');
const frontEndList = document.querySelector('#front-end-web-list');
const backEndList = document.querySelector('#back-end-web-list');

const softwareDevelopmentButton = document.querySelector('#software-development');
const computerGraphicsButton = document.querySelector('#computer-graphics');
const frontEndButton = document.querySelector('#front-end-web');
const backEndButton = document.querySelector('#back-end-web');

let mode = 'all';

let projectsArray = [];

//read json file
fetch('assets/data.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        data.projects.forEach(project => {
            projectsArray.push(new Project(project.title, project.description, project.image, project.category, project.tools));
        });
        data.skills.softwareDevelopment.forEach(skill => {
            softwareDevelopmentList.innerHTML += `
            <div class="flex flex-col items-center p-4 w-32">
                <img src="${skill.image}" class="">
                <span class="text-custom-cyan-200 text-2xl text-center">${skill.name}</span>
            </div>
            `;
        });
        data.skills.computerGraphics.forEach(skill => {
            computerGraphicsList.innerHTML += `
            <div class="flex flex-col items-center p-4 w-32">
                <img src="${skill.image}" class="">
                <span class="text-custom-cyan-200 text-2xl text-center">${skill.name}</span>
            </div>
            `;
        });
        data.skills.frontEnd.forEach(skill => {
            frontEndList.innerHTML += `
            <div class="flex flex-col items-center p-4 w-32">
                <img src="${skill.image}" class="">
                <span class="text-custom-cyan-200 text-2xl text-center">${skill.name}</span>
            </div>
            `;
        });
        data.skills.backEnd.forEach(skill => {
            backEndList.innerHTML += `
            <div class="flex flex-col items-center p-4 w-32">
                <img src="${skill.image}" class="">
                <span class="text-custom-cyan-200 text-2xl text-center">${skill.name}</span>
            </div>
            `;
        });
    }).then(constructProjects);

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const aboutOffset = about.offsetTop;
    const projectsOffset = projects.offsetTop;
    const skillsOffset = skills.offsetTop;

    if (scrollPosition >= aboutOffset - 100) {
        header.style.backgroundColor = 'rgba(15, 23, 42, 255)';
    } else {
        header.style.backgroundColor = 'rgba(15, 23, 42, 0)';
    }
});

allButton.addEventListener('click', function() {
    mode = 'all';
    constructProjects();
});

schoolButton.addEventListener('click', function() {
    mode = 'School';
    constructProjects();
});

gamesButton.addEventListener('click', function() {
    mode = 'Game';
    constructProjects();
});

webButton.addEventListener('click', function() {
    mode = 'Web';
    constructProjects();
});

otherButton.addEventListener('click', function() {
    mode = 'Other';
    constructProjects();
});

let oldList = softwareDevelopmentList;
let oldButton = softwareDevelopmentButton;

softwareDevelopmentButton.addEventListener('click', function() {
    if(oldList !== softwareDevelopmentList) {
        softwareDevelopmentList.classList.remove('hidden');
        oldList.classList.add('hidden');
        oldButton.classList.remove('bg-white');
        oldButton.classList.add('bg-transparent');
        softwareDevelopmentButton.classList.remove('bg-transparent');
        softwareDevelopmentButton.classList.add('bg-white');
        oldList = softwareDevelopmentList;
        oldButton = softwareDevelopmentButton;
    }
});

computerGraphicsButton.addEventListener('click', function() {
    if(oldList !== computerGraphicsList) {
        computerGraphicsList.classList.remove('hidden');
        oldList.classList.add('hidden');
        oldButton.classList.remove('bg-white');
        oldButton.classList.add('bg-transparent');
        computerGraphicsButton.classList.remove('bg-transparent');
        computerGraphicsButton.classList.add('bg-white');
        oldList = computerGraphicsList;
        oldButton = computerGraphicsButton;
    }
});

frontEndButton.addEventListener('click', function() {
    if(oldList !== frontEndList) {
        frontEndList.classList.remove('hidden');
        oldList.classList.add('hidden');
        oldButton.classList.remove('bg-white');
        oldButton.classList.add('bg-transparent');
        frontEndButton.classList.remove('bg-transparent');
        frontEndButton.classList.add('bg-white');
        oldList = frontEndList;
        oldButton = frontEndButton;
    }
});

backEndButton.addEventListener('click', function() {
    if(oldList !== backEndList) {
        backEndList.classList.remove('hidden');
        oldList.classList.add('hidden');
        oldButton.classList.remove('bg-white');
        oldButton.classList.add('bg-transparent');
        backEndButton.classList.remove('bg-transparent');
        backEndButton.classList.add('bg-white');
        oldList = backEndList;
        oldButton = backEndButton;
    }
});

function constructProjects() {
    let html = '';
    let index = 0;
    projectsArray.forEach((project) => {
        if(project.category.includes(mode) || mode === 'all') {
            if (index % 2 === 0) {
                html += project.left();
            } else {
                html += project.right();
            }
            index++;
        }
    });
    console.log(html);
    projectsList.innerHTML = html;
}

class Project {
    constructor(title, description, image, category, tools) {
        this.title = title;
        this.description = description;
        this.image = image;
        this.category = category;
        this.tools = tools;
    }

    left(){
        return `
        <div class="project school web flex justify-between m-16 mt-48">
            <div class="flex flex-col m-8 mt-4 mr-16">
                <span class="text-cyan-400 text-xl text-left ml-4">${this.category.join(" • ")}</span>
                <span class="text-white text-3xl mt-4 text-left ml-4">${this.title}</span>
                <div class="bg-slate-900 shadow-[0_0_64px_rgb(0,0,0,0.4)] rounded-3xl p-4 mt-4">
                    <p class="z-10 text-slate-400 text-2xl text-left max-w-2xl">
                        ${this.description}
                    </p>
                </div>
                <span class="text-cyan-400 text-2xl mt-4 text-left ml-4">${this.tools.join(" • ")}</span>
            </div>
            <img class="rounded-3xl shadow-[0_0_64px_rgb(0,0,0,0.4)] hover:shadow-[0_0_64px_rgb(0,0,0,0.6)] max-h-96" src="${this.image}">
        </div>
        `;
    }

    right(){
        return `
        <div class="project school flex justify-between m-16 mt-48">
            <img class="rounded-3xl shadow-[0_0_64px_rgb(0,0,0,0.4)] hover:shadow-[0_0_64px_rgb(0,0,0,0.6)] max-h-96" src="${this.image}">
            <div class="flex flex-col m-8 mt-4 ml-16">
                <span class="text-cyan-400 text-xl text-right mr-4">${this.category.join(" • ")}</span>
                <span class="text-white text-3xl mt-4 text-right mr-4">${this.title}</span>
                <div class="bg-slate-900 shadow-[0_0_64px_rgb(0,0,0,0.4)] rounded-3xl p-4 mt-4">
                    <p class="z-10 text-slate-400 text-2xl text-right max-w-2xl">
                        ${this.description}
                    </p>
                </div>
                <span class="text-cyan-400 text-2xl mt-4 text-right mr-4">${this.tools.join(" • ")}</span>
            </div>
        </div>
        `;
    }
}

