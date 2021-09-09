import js from './assets/images/JS.png'
import ts from './assets/images/TS.png'
import html from './assets/images/html2.png'
import css3 from './assets/images/css3.png'
import nodeJs from './assets/images/node.jpg'
import reactJs from './assets/images/React.png'
import angular from './assets/images/NG.png'
import nextJs from'./assets/images/next.png'
import mongodb from './assets/images/mongodb.png'
import mssql from './assets/images/MSSQL.png'
import nexgile from './assets/images/nexgile.png'
import smiota from './assets/images/smiota.jpg'
import obligations from './assets/images/ecompaliance.jpg'
import businessHUB from './assets/images/businessHub.jpg'
import mmc from './assets/images/MMC.jpg'
import cc from './assets/images/contentCloud.jpg'
export const intro = {
    titile: "Hi all, I'm Sesha Sai",
    desc: "A passionate Full Stack Software Developer. I like to make digital experiences easier and simpler for people.I enjoy working on both Front-end and Back-end,but I work mostly on Front-end part of apps."
}

export const techStack = {
    desc: "My Development Kit",
    languages: [{
        image:js ,
        name: 'JavaScript',
        des: 'JavaScript is a text-based programming language used both on client-side and server-side that makes web pages more interactive.I use JavaAcript frameworks and libaries to develop web applications'
    },
    {
        image:ts,
        name: 'TypeScript',
        des: 'TypeScript builds on top of JavaScript to offer a series of tools that make it easier to build large and complex apps.I use TypeScript because it has great compiler and type safety.'
    },
    {
        image:html ,
        name: 'HTML',
        des: 'HTML is used to structure a webpage and its content. I can use html in jsx but from time to time i find myself writing a plain ,classic HTML file.'
    }, {
        image: css3,
        name: 'CSS3',
        des: 'Styling of HTML elements. I usually preffer CSS Preprocessors like SCSS and I also use Bootstrap styles'
    }
    ],
    librariesFrameworks: [{
        image: nodeJs,
        name: 'NodeJs',
        des: "Node. js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. I used Nodeja with ExpressJs for back-end API services of restAPI and GraphQLAPI"
    },
    {
        image: reactJs,
        name: 'ReactJs',
        des: "One of My favourite library for building web front-ends and single page apps.I have been working with angular before, but after working on React, I feel it is more comfort "
    },
    {
        image: angular,
        name: 'Angular 2+',
        des: "My favourite Typescript framework for building Enterprise level web application.I use angular for its end to end tooling"
    },
    {
        image:nextJs ,
        name: 'NextJs',
        des: 'NextJs is full stack react framework. I used NextJS for Serverside rendering and for static pages applications'
    }],
    dataBases: [
        {
            image: mongodb,
            name: 'MongoDB',
            des: "MongoDB is a document-oriented database which stores data in JSON-like documents with dynamic schema.I used MongoDB as db in most of my projects"
        }, {
            image:mssql ,
            name: 'MSSQL',
            des: 'MSSQL is relational database which stores data in table format. I used MSSQL in couple of my projects '
        }
    ]
}
export const experience = [{
    company: 'Nexgile Technologies',
    image:nexgile ,
    from: 'October-2019',
    to: 'Present',
    // experience:'2years',
    role: 'Associate Software Engineer'
}
]
export const emailcofig = {
    desc: "If you are looking to hire someone with my skills then you can drop me a mail at seshasainunna.123@gmail.com or leave me a message by filling the form",
    YOUR_SERVICE_ID: 'service_xq7fxyh',
    YOUR_TEMPLATE_ID: 'template_volnk3x',
}

export const projects = [{
    name: 'Smart-Package System',
    image:smiota ,
    description: "eProcurement application is a web based app which allows sellers and buyers to post the requirement, respond with proposals/quotations, select a supplier, award the contract and perform the project management activities. It also includes supplier rating, feedback from different departments is integrated for supplier rating",
    stack: 'Angular7,NodeJs,MongoDB'
},
{
    name: 'E-compailance',
    image: obligations,
    description: '',
    stack: 'Angular7,NodeJs,MSSQL'
},
{
    name: 'Business-HUB',
    image: businessHUB,
    description: '',
    stack: 'NextJs,GraphCMS'

},
{
    name: 'My Marketing Cloud',
    image: mmc,
    description: '',
    stack: 'ReactJs,NodeJS,MongoDB'
},
{
    name: 'ContentCloud',
    image: cc,
    description: '',
    stack: 'ReactJS,NodeJS,MongoDB'
}]


