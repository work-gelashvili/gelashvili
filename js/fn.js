const contact = [
    {
        id: 3493,
        icon: 'W',
        text: 'GELASHVILI.SITE',
        link: 'http://gelashvili.site/'
    },
    {
        id: 3432,
        icon: '<i class="fa-sharp fa-brands fa-linkedin-in"></i>',
        text: 'linkedin.com/in/davit-gelashvili/',
        link: 'https://www.linkedin.com/in/davit-gelashvili/'
    },
    ,
    {
        id: 659845,
        icon: '<i class="fa-sharp fa-brands fa-github"></i>',
        text: 'github.com/davitgelashvili',
        link: 'https://github.com/davitgelashvili'
    },
    {
        id: 3433,
        icon: '<i class="fa-sharp fa-solid fa-envelope"></i>',
        text: 'datoogelashvili@gmail.com',
        link: 'mail:datoogelashvili@gmail.com'
    },
    {
        id: 6577,
        icon: '<i class="fa-sharp fa-solid fa-phone"></i>',
        text: '(+995) 591 111 996',
        link: 'tel:995591111996'
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

const skills = [
    'HTML',
    'CSS',
    'JAVASCRIPT',
    'REACT JS',
    'React Router',
    'Redux',
    'TYPESCRIPT',
    'SASS',
    'OOCSS',
    'BEM',
    'BOOTSTRAP',
    'JQUERY',
    'GIT',
    'Little experience: REACT NATIVE, NEXT JS, NODE JS and ANGULAR',
]

const experience = [
    {
        img: './logos/ophoss-logo.png',
        color: '#fff',
        name: 'Front-End Developer',
        title: 'OPHOSS.DIGITAL',
        job: `
        <p><span class="tags__item--name">FLYINSPECTORS.COM</span> - Flight compensation. used: React js, Node js</p>
        <p><span class="tags__item--name">PILLARPARK.GE</span> - Residential district Pillar Park. used: html, scss, javascript</p>
        <p><span class="tags__item--name">GEORGEZU.COM</span> - Interaction Designer. used: html, scss, javascript</p>
        <p><span class="tags__item--name">ANTMOTORSG.COM</span> - Cars import company. used: React js, Node js</p>
        <p><span class="tags__item--name">TENDERS.GE</span> - Electronic procurement system. used: html, scss, javascript</p>
        `,
        date: '2023 - PRESENT'
    },
    {
        img: './logos/slick.jpeg',
        color: '#000',
        name: 'Front-End Developer',
        title: 'Slick.Global',
        job: ``,
        date: '2022 - PRESENT'
    },
    {
        img: './logos/ducks.jpeg',
        color: '#021715',
        name: 'Front-End Developer',
        title: 'DUCKSVEGAS.COM',
        job: '<p><span class="tags__item--name">DUCKSVEGAS.COM</span> - Online Crypto Casino, used: React.js',
        date: '2022'
    },
    {
        img: './logos/proway.png',
        color: '#fff',
        name: 'Front-End Developer',
        title: 'PROWAY.GE',
        job: `
            <p>I built two very interesting projects in the company: </p>
            <p><span class="tags__item--name">LAWPORT.GE</span> - Online platform for lawyers. used: html, scss, javascript</p>
            <p><span class="tags__item--name">BROKERAPP.GE</span> [brokerapp.gelashvili.me] - Insurance packages platform. used: html, scss, javascript</p>
        `,
        date: '2021 - 2022'
    },
    {
        img: './logos/crocobet.svg',
        color: '#242b33',
        name: 'Front-End Developer',
        title: 'CROCOBET.COM',
        job: `
            At the company, I did the weekly stock pages and processed the data from API into Javascript
            <br/>
            Also, I worked on mobile bet ticket in Angular
        `,
        date: '2020 - 2021'
    },
    {
        img: './logos/wandio.svg',
        color: '#121b28',
        name: 'Front-End Developer',
        title: 'WANDIO.COM',
        job: `
            <p>
                <span class="tags__item--name">ONOFF.GE</span> - One of the big online stores. used: html, css, javascript
            </p>
            `,
        date: '2019 - 2020'
    }
]

const projects = [
    {
        name: 'MINGO.GELASHVILI.SITE',
        desc: 'Bus online ticket. used: Next js, Node js'
    },
    {
        name: 'EVNGE.netlify.app',
        desc: 'Event online ticket used: React js, Node js'
    },
    {
        name: 'VEY.gelashvili.site',
        desc: 'Booking platform similar to Airbnb. used: html, scss, javascript'
    },
    {
        name: 'shop.gelashvili.site',
        desc: '[ItemsSphere.ge] - Online store platform. used: html, scss, javascript'
    }
]

const education = [
    {
        color: '#ceceece',
        title: 'Georgian Technical University',
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
            <p class="left__item--text">
                <a ${item.link && `href=${item.link} `} target="_blank" a>${item.text}</a>
            </p>
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
    <div class="tags__item project">
        <span class="tags__item--name">
        ${item.name}
        </span>
        -
        <span class="tags__item--desc">
        ${item.desc}
        </span>
    </div>
    `)
})

experience.map( item => {
    $('.js-experience').append(`
        <li class="company__item">
            <figure class="company__item--cover" style="background-color: ${item.color}">
                <img src="${item.img}" class="company__item--img" alt="">
            </figure>
            <div class="company__item--text">
                <div class="company__item--title">
                    <div>
                        <span class="company__item--name">${item.name} @</span>
                        <span class="company__item--company">${item.title} </span>
                    </div>
                    <p class="company__item--date">${item.date}</p>
                </div>
                    <div class="company__item--footer">
                        <div class="company__item--position">
                            ${item.job}
                        </div>
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


