let works = document.getElementById('works');
let worksContent = document.getElementById('works-content');
let about = document.getElementById('about');
let aboutContent = document.getElementById('about-content');
let info = document.getElementsByClassName('info');


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

let bio = "Hi! I'm Lily, a software engineer learning, creating and enjoying life in London.<br>"+
"As any good escapist I love films, games and music, but I also have an abnormal creativity level which leads me to make... phew, anything from bread to knitwear to websites."+
""
let skills ='Badibadu'

function createInfoBox(title, info) {
    let infoBox = document.createElement('div');
    infoBox.classList.add('shape', 'info');
    infoBox.innerHTML = '<h3>' + title + '</h3><p>' + info + '</p>';
    return infoBox;
}

let bioBox = createInfoBox('PERSONAL', bio);
let skillsBox = createInfoBox('PROFESSIONAL', skills);

aboutContent.appendChild(bioBox);
worksContent.appendChild(skillsBox);

about.addEventListener('click', () => {
    switch(mode) {
        case 'initial':
            hideShapes('initial');
            displayShapes('info', 'about');
            document.getElementById('about-title').innerText = 'BACK'
            document.getElementById('about-title').classList.add('back');
            document.getElementById('more-about').style.display = 'flex';

            if (matchMedia('all and (orientation:landscape)').matches) {
                about.style.width = '40%';
                works.style.width = '40%';
                document.querySelectorAll('.secondary-container')[0].style.width = '100%';
                document.querySelectorAll('.secondary-container')[1].style.width = '100%';
            }

            console.log('about case1 done')
            break;
        case 'about':
            hideShapes('info');
            displayShapes('initial', 'initial');
            document.getElementById('about-title').innerText = 'ABOUT'
            document.getElementById('about-title').classList.remove('back');
            document.getElementById('more-about').style.display = 'none';

            if (matchMedia('all and (orientation:landscape)').matches) {
                about.style.width = 'unset';
                works.style.width = 'unset';
                document.querySelectorAll('.secondary-container')[0].style.width = 'unset';
                document.querySelectorAll('.secondary-container')[1].style.width = 'unset';
            }

            console.log('about case2 done')
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
            aboutContent.appendChild(project);
        } else if (i >= projects.length / 2) {
            worksContent.appendChild(project);
        }
}


works.addEventListener('click', () => {
    switch(mode) {
        case 'initial':
            hideShapes('initial');
            displayShapes('project', 'works');
            document.getElementById('works-title').innerText = 'BACK'
            document.getElementById('works-title').classList.add('back');
            document.getElementById('repositories').style.display = 'flex';
            
            if (matchMedia('all and (orientation:landscape)').matches) {
                about.style.width = '40%';
                works.style.width = '40%';
                document.querySelectorAll('.secondary-container')[0].style.width = '100%';
                document.querySelectorAll('.secondary-container')[1].style.width = '100%';
            }
            console.log('work case1 done')
            break;
        case 'works':
            hideShapes('project');
            displayShapes('initial', 'initial');
            document.getElementById('works-title').innerText = 'WORKS'
            document.getElementById('works-title').classList.remove('back');
            document.getElementById('repositories').style.display = 'none';
            
            if (matchMedia('all and (orientation:landscape)').matches) {
                about.style.width = 'unset';
                works.style.width = 'unset';
                document.querySelectorAll('.secondary-container')[0].style.width = 'unset';
                document.querySelectorAll('.secondary-container')[1].style.width = 'unset';
            }
            console.log('work case2 done')
            break;
    }
})