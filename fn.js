const contact = [
    {
        id: 3433,
        icon: '<i class="fa-sharp fa-solid fa-envelope"></i>',
        text: 'Datoogelashvili@gmail.com'
    },
    {
        id: 3432,
        icon: '<i class="fa-sharp fa-brands fa-linkedin-in"></i>',
        text: 'https://www.linkedin.com/in/davit-gelashvili/'
    },
    {
        id: 6577,
        icon: '<i class="fa-sharp fa-solid fa-phone"></i>',
        text: '(+995) 591 111 996'
    },
    {
        id: 5786,
        icon: '<i class="fa-sharp fa-solid fa-location-dot"></i>',
        text: 'Tbilisi, Georgia'
    },
    {
        id: 9754,
        icon: '<i class="fa-sharp fa-solid fa-calendar-days"></i>',
        text: '12.09.1996'
    },
    {
        id: 659845,
        icon: '<i class="fa-sharp fa-brands fa-github"></i>',
        text: 'https://github.com/davitgelashvili'
    }
]

const lang = [
    {
        id: 986,
        icon: '<i class="fa-solid fa-flag"></i>',
        text: 'Georgian'
    },
    {
        id: 436,
        icon: '<i class="fa-solid fa-flag"></i>',
        text: 'English'
    }
]

const projects = [
    'Crocobet.com',
    'Onoff.ge',
    'Tenders.ge',
    'Ducskvegas.com',
    'Lawport.ge',
    'Itemssphere.ge',
]

const otherProjects = [
    'https://raizomat.com/',
    'http://afalona.eu/',
    'http://automations.ge/',
    'https://etscars.com/english/home',
    'https://sangu.edu.ge/geo/home',
    'https://geoukravit.ge/',
    '',
    '',
]

const skills = [
    'HTML',
    'CSS',
    'JAVASCRIPT',
    'REACT JS',
    'SCSS',
    'BEM',
    'OOCSS',
    'BOOTSTRAP',
    'JQUERY',
    'GIT',
]

const experience = [
    {
        img: './logos/ducks.jpeg',
        color: '#021715',
        title: 'DUCKSVEGAS',
        job: 'DUCKSVEGAS.COM - React developer',
        date: '2022'
    },
    {
        img: './logos/proway.png',
        color: '#ececec',
        title: 'PROWAY',
        job: 'Front End Developer',
        date: '2021'
    },
    {
        img: './logos/crocobet.svg',
        color: '#242b33',
        title: 'CROCOBET',
        job: 'CROCOBET.COM - Front End Developer',
        date: '2020'
    },
    {
        img: './logos/wandio.svg',
        color: '#121b28',
        title: 'WANDIO',
        job: 'ONOFF.GE - Front End Developer',
        date: '2019'
    }
]


const education = [
    {
        color: '#ceceece',
        title: 'Georgia Technology University',
        job: 'Informatics',
        date: '2015-2019'
    }
]

contact.map( item => {
    $('.js-contact').append(`
        <li class="left__item">
            <div class="left__item--icon">
            ${item.icon}
            </div>
            <p class="left__item--text">${item.text}</p>
        </li>
    `)
})

lang.map( item => {
    $('.js-lang').append(`
        <li class="left__item">
            <div class="left__item--icon">
            ${item.icon}
            </div>
            <p class="left__item--text">${item.text}</p>
        </li>
    `)
})

skills.map( item => {
    $('.js-skills').append(`
        <li class="tags__item--out">
            <div class="tags__item">${item}</div>
        </li>
    `)
})

projects.map( item => {
    $('.js-projects').append(`
        <li class="tags__item--out">
            <div class="tags__item">${item}</div>
        </li>
    `)
})

experience.map( item => {
    $('.js-experience').append(`
        <li class="company__item">
            <figure class="company__item--cover" style="background-color: ${item.color}">
                <img src="${item.img}" class="company__item--img" alt="">
            </figure>
            <div class="company__item--text">
                <h1 class="company__item--title">${item.title}</h1>
                    <div class="company__item--footer">
                        <p class="company__item--position">${item.job}</p>
                        <p class="company__item--date">${item.date}</p>
                    </div>
            </div>
        </li>
    `)
})

education.map( item => {
    $('.js-education').append(`
        <li class="company__item">
            <figure class="company__item--cover" style="background-color: ${item.color}">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M243.4 2.6l-224 96c-14 6-21.8 21-18.7 35.8S16.8 160 32 160v8c0 13.3 10.7 24 24 24H456c13.3 0 24-10.7 24-24v-8c15.2 0 28.3-10.7 31.3-25.6s-4.8-29.9-18.7-35.8l-224-96c-8.1-3.4-17.2-3.4-25.2 0zM128 224H64V420.3c-.6 .3-1.2 .7-1.8 1.1l-48 32c-11.7 7.8-17 22.4-12.9 35.9S17.9 512 32 512H480c14.1 0 26.5-9.2 30.6-22.7s-1.1-28.1-12.9-35.9l-48-32c-.6-.4-1.2-.7-1.8-1.1V224H384V416H344V224H280V416H232V224H168V416H128V224zm128-96c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z"/></svg>
            </figure>
            <div class="company__item--text">
                <h1 class="company__item--title">${item.title}</h1>
                    <div class="company__item--footer">
                        <p class="company__item--position">${item.job}</p>
                        <p class="company__item--date">${item.date}</p>
                    </div>
            </div>
        </li>
    `)
})


