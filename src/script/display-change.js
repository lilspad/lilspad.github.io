let works = document.getElementById('works');
let worksContent1 = document.getElementById('content3');
let worksContent2 = document.getElementById('content4');
let about = document.getElementById('about');
let aboutContent1 = document.getElementById('content1');
let aboutContent2 = document.getElementById('content2');
let info = document.getElementsByClassName('info');
let containers = document.querySelectorAll('.hero .container')


let mode = 'initial';

function hideShapes(shapeClass) {
    console.log('hide func triggered');

    for (let i = 0; i < shapes.length; i ++) {
        if (shapes[i].classList.contains(shapeClass)) {   
            shapes[i].style.opacity = '0';
            shapes[i].style.display = 'none';
        }
    }    
}

function displayShapes(shapeClass, modeName) {
    console.log('display func triggered');
    console.log('mode start: ' + mode);

    mode = modeName;

    for (let i = 0; i < shapes.length; i++) {
        if (shapes[i].classList.contains(shapeClass)) {
            shapes[i].style.display = 'flex'; 
            setTimeout(() => {   shapes[i].style.opacity = '1'; }, 10);
        }
    }

    console.log('mode end: ' + mode);
}

//ABOUT

let bio = "Hi! 👋 I'm Lily, a software engineer learning, creating and enjoying life in <span>London</span>.<br>"+
"As any good escapist I love films, games and music, but I also have an abnormal creativity level which leads me to make... well, anything from bread to knitwear to websites.<br>"+
"I've worked in the coffee industry for almost 7 years, so I can also make a great pick-me-up in a mug. Although, I decided to finally leave hospitality to pursue a career in tech."

let skills = "I first came face-to-face with coding in school, where I did extracurricular computer science. I learned <span>Python</span> basics I still remember to this day. Then I began " +
"a self-stufy journey in 2021, with many disruptions due to work-life (un)balance. Using resources across the web I learned how to build websites using <span>HTML, CSS/Sass and JavaScript</span>, " +
"as well as their many extensions, libraries and frameworks. I played around with some projects utilising <span>React, Node, Tailwind, SQL</span> and more. For all of them, I use <span>git</span> version control " +
"and <span>ChromeDevTools</span> to aid me in the building process, and <span>GitHub</span> to share my code. "

function createInfoBox(title, info, parent) {

    parent.classList.add('shape', 'info');
    parent.innerHTML = '<h3 class="info-bit">' + title + '</h3><p class="info-bit">' + info + '</p>';
    return parent;
}

let bioBox = createInfoBox('A LITTLE BIT ABOUT ME', bio, aboutContent1);
let skillsBox = createInfoBox('A LITTLE BIT ABOUT CODE', skills, worksContent1);

about.addEventListener('click', () => {
    switch(mode) {
        case 'initial':
            hideShapes('initial');
            displayShapes('info', 'about');
            aboutContent1.style.display = 'flex';
            worksContent1.style.display = 'flex';
            document.getElementById('about-title').innerText = 'BACK'
            document.getElementById('about-title').classList.add('back');
            document.getElementById('more-about').style.display = 'flex';

            containers[0].style.gridColumnEnd = '6';
            containers[5].style.gridColumnStart = '8';

            console.log('about case1 done')
            break;
        case 'about':
            hideShapes('info');
            displayShapes('initial', 'initial');
            aboutContent1.style.display = 'none';
            worksContent1.style.display = 'none';
            document.getElementById('about-title').innerText = 'ABOUT'
            document.getElementById('about-title').classList.remove('back');
            document.getElementById('more-about').style.display = 'none';

            containers[0].style.gridColumnEnd = '8';
            containers[5].style.gridColumnStart = '6';

            console.log('about case2 done')
            break;
        case 'works':
            hideShapes('project');
            displayShapes('info', 'about');
            aboutContent2.style.display = 'none';
            worksContent2.style.display = 'none';
            aboutContent1.style.display = 'flex';
            worksContent1.style.display = 'flex';
            document.getElementById('about-title').innerText = 'BACK'
            document.getElementById('about-title').classList.add('back');
            document.getElementById('more-about').style.display = 'flex';
            document.getElementById('works-title').innerText = 'WORKS'
            document.getElementById('works-title').classList.remove('back');
            document.getElementById('repositories').style.display = 'none';

            if (matchMedia('all and (orientation:landscape)').matches) {
                
            }
            console.log('about case3 done')
            break;
    }
})

//WORKS

let projects = [];

let names = ['Modest | eCommerce App', 'Doodle | Drawing App', 'Capricious | Website', 'KoiBoi | Mini Game'];
let sources = ['https://github.com/lilspad/modest', 'https://github.com/lilspad/drawing-app', 'https://github.com/lilspad/capricious-garden', 'https://github.com/lilspad/KoiBoi'];
let demos = ['https://modestskincare.netlify.app/', 'https://a-drawing-app-lilspad.vercel.app/', 'https://capricious.netlify.app/', 'https://koi-boi.herokuapp.com/'];

function createProject(name, src, demo) {
    return {
        name: name,
        src: src,
        demo: demo
    }
}

for (let i = 0; i < names.length; i++) {
    let project = createProject(names[i], sources[i], demos[i]);
    projects.push(project)
}

function createElement(project) {
    let element = document.createElement('div');
    element.classList.add('shape', 'project');

    element.innerHTML = '<div class="project-content"><h3>' + project.name + '</h3><div class="buttons"><a href="' + project.src + '"target="blank" class="button source">Source</a><a href="' +
    project.demo + '"target="blank" class="button demo">Demo</a></div></div>'; 

    return element;
}

for (let i = 0; i < projects.length; i++) {

        let project = createElement(projects[i]);
        project.id = "project" + i;

        if (i < projects.length / 2) {
            aboutContent2.appendChild(project);
        } else if (i >= projects.length / 2) {
            worksContent2.appendChild(project);
        }
}


works.addEventListener('click', () => {
    switch(mode) {
        case 'initial':
            hideShapes('initial');
            displayShapes('project', 'works');
            aboutContent2.style.display = 'flex';
            worksContent2.style.display = 'flex';
            document.getElementById('works-title').innerText = 'BACK'
            document.getElementById('works-title').classList.add('back');
            document.getElementById('repositories').style.display = 'flex';
            
    
            containers[0].style.gridColumnEnd = '6';
            containers[5].style.gridColumnStart = '8';
            
            console.log('work case1 done')
            break;
        case 'works':
            hideShapes('project');
            displayShapes('initial', 'initial');
            aboutContent2.style.display = 'none';
            worksContent2.style.display = 'none';
            document.getElementById('works-title').innerText = 'WORKS'
            document.getElementById('works-title').classList.remove('back');
            document.getElementById('repositories').style.display = 'none';
            
            containers[0].style.gridColumnEnd = '8';
            containers[5].style.gridColumnStart = '6';

            console.log('work case2 done')
            break;
        case 'about':
            hideShapes('info');
            displayShapes('project', 'works');
            aboutContent1.style.display = 'none';
            worksContent1.style.display = 'none';
            aboutContent2.style.display = 'flex';
            worksContent2.style.display = 'flex';
            document.getElementById('works-title').innerText = 'BACK'
            document.getElementById('works-title').classList.add('back');
            document.getElementById('repositories').style.display = 'flex';
            document.getElementById('about-title').innerText = 'ABOUT'
            document.getElementById('about-title').classList.remove('back');
            document.getElementById('more-about').style.display = 'none';

            if (matchMedia('all and (orientation:landscape)').matches) {
                
            }

            console.log('works case3 done')
            break;
    }
})