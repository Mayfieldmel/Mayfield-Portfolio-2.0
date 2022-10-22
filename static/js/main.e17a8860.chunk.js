(this["webpackJsonpmayfield-react-portfolio"]=this["webpackJsonpmayfield-react-portfolio"]||[]).push([[0],{11:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/MeJadeWedding-cropped.926ab871.jpg"},12:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),i=a(4),s=a.n(i),r=(a(9),a(2));function o(e){return e.charAt(0).toUpperCase()+e.slice(1)}var l=a(0);var d=function(e){var t=e.pages,a=e.pageSelected,c=e.setPageSelected,n=e.currentPage,i=e.setCurrentPage;return document.title="Melissa Mayfield",Object(l.jsxs)("header",{children:[Object(l.jsx)("h1",{children:Object(l.jsx)("a",{href:"/",onClick:function(){return i("About Me")},children:"Melissa Mayfield"})}),Object(l.jsx)("nav",{children:Object(l.jsx)("ul",{children:a?t.map((function(e){return Object(l.jsx)("li",{className:"".concat(n.name===e.name&&a&&"navActive"),children:Object(l.jsx)("span",{onClick:function(){i(e),c(!0)},children:o(e.name)})},e.name)})):t.map((function(e){return Object(l.jsx)("li",{className:"".concat("About Me"===e.name&&"navActive"),children:Object(l.jsx)("span",{onClick:function(){i(e),c(!0)},children:o(e.name)})},e.name)}))})})]})};var A=function(){return Object(l.jsxs)("section",{className:"about-section",children:[Object(l.jsx)("img",{className:"portrait",src:a(11).default,alt:"Melissa Mayfield and her winning smile"}),Object(l.jsxs)("div",{className:"flex-column",children:[Object(l.jsx)("h2",{children:"About Me"}),Object(l.jsx)("p",{className:"about",children:"Hi, my name is Melissa and I love to code! From responsive front-end web designs to more complex back-end software engineering, if you are looking for someone to create top-of-the-line user experiences then I am your gal! While I may be new to coding, I am not new to people. I have spent 7 years studying people, earning degrees in Psychology, Sociology, and Law. I have the customer service experience and the know-how to curate online experiences that users will love."}),Object(l.jsx)("p",{className:"about",children:"As a web developer leveraging a background in psychology, sociology, and the law, I can provide a unique perspective on software development and UI/UX. I am a hard worker with a natural talent for problem solving, and a passion for coding and project development. My strengths include creativity, teamwork, and problem-solving."})]})]})},m=a.p+"static/media/pawfect-homepage.8f7873d5.png",h=a.p+"static/media/mayfield-tech-blog-screenshot.86d56211.png",b=a.p+"static/media/text-editor-demo.b42d095e.gif",g=a.p+"static/media/weather-dash.752b4c56.png",j=a.p+"static/media/Mayfield-Note-Taker-Demo.cd9d18d9.gif",p=a.p+"static/media/day-planner.5b3f62cd.gif";var u=function(){var e=[{src:m,title:"Pawfect Friends",tools:"HTML/Handlebars, CSS/Bulma, JavaScript, Node.js, Express.js, MySQL, Sequelize",deploy:"https://pawfect-friends-app.herokuapp.com/",github:"https://github.com/Mayfieldmel/Pawfect-Friends",description:"A secure pet social media site that allows users to create a pet profile, post text and images, and make comments on all content."},{src:h,title:"Mayfield Tech Blog",tools:"HTML/Handlebars, CSS, JavaScript, Node.js, Express.js, MySQL, Sequelize",deploy:"https://mayfield-tech-blog.herokuapp.com/home",github:"https://github.com/Mayfieldmel/Mayfield-Tech-Blog",description:"Provides a secure platform for users to blog about the latests trends in technology. Users can sign-up, login, post blog entries, comment on blog entries, and maintain their own personal dashboard."},{src:b,title:"Mayfield Text Editor",tools:"Node.js, Express.js, Webpack, IndexedDB",deploy:"https://mayfield-text-editor.herokuapp.com/",github:"https://github.com/Mayfieldmel/Mayfield-Text-Editor-PWA",description:"A single-page Progressive Web App that allows users to create notes or code snippets with or without an internet connection."},{src:g,title:"Weather Dash",tools:"HTML, CSS, JavaScript",deploy:"https://mayfieldmel.github.io/Weather-Dash/",github:"https://github.com/Mayfieldmel/Weather-Dash",description:"A weather app that allows users to check weather forecasts by city. Users can enter city names and weather data is fetched from openweathermap api."},{src:j,title:"Mayfield Note Taker",tools:"Express.js, Node.js",deploy:"https://mayfield-note-taker.herokuapp.com/",github:"https://github.com/Mayfieldmel/Mayfield-Note-Taker",decription:"A dynamic platform for users to take and store notes. Notes are saved to a remote server hosted by Heroku. Front-end code provided to me. I worked on the backend."},{src:p,title:"Mayfield Day Planner",tools:"HTML, CSS, JQuery",deploy:"https://mayfieldmel.github.io/Mayfield-Day-Plannner/",github:"https://github.com/Mayfieldmel/Mayfield-Day-Plannner",description:"A work-day scheduling app that allows users to create, monitor, and edits tasks for each hour of the 9-5 workday."}],t=Object(c.useState)(e[0]),a=Object(r.a)(t,2),n=a[0],i=a[1],s=Object(c.useState)(!1),o=Object(r.a)(s,2),d=o[0],A=o[1];return Object(l.jsxs)("div",{id:"projects",className:"projects",children:[Object(l.jsx)("div",{className:"col-sm-12 section-header mx-5",children:Object(l.jsx)("h3",{children:"Projects"})}),Object(l.jsx)("div",{className:"col-sm-12 col-md-10 flex-shrink-1",children:Object(l.jsx)("div",{className:"card-deck row cards",children:e.map((function(e){return Object(l.jsxs)("div",{className:"card",onMouseEnter:function(){A(!0),i(e)},onMouseLeave:function(){A(!1),i(e)},children:[Object(l.jsx)("img",{className:"card-img-top card-img-fluid",src:e.src,alt:e.title}),Object(l.jsxs)("div",{className:"card-body",children:[Object(l.jsx)("h5",{className:"card-title card-title-font",children:e.title}),Object(l.jsx)("h6",{className:"card-subtitle mb-2 card-font",children:e.tools}),Object(l.jsx)("p",{className:"card-text card-text-box card-font",children:e.description}),Object(l.jsxs)("div",{className:"card-body list-group-item ".concat(d&&n.title===e.title&&"card-hover"),children:[Object(l.jsx)("a",{href:e.deploy,className:"card-link text-white",target:"_blank",rel:"noreferrer",children:"Deployed Link"}),Object(l.jsx)("a",{href:e.github,className:"card-link text-white",target:"_blank",rel:"noreferrer",children:"Github Link"})]})]})]})}))})})]})};var M=function(){return Object(l.jsxs)("div",{id:"contact-me",className:"card-body p-3 rounded",children:[Object(l.jsx)("h2",{className:"card-title about-title",children:"Contact Me"}),Object(l.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(l.jsxs)("li",{className:"list-group-item",children:["Phone:",Object(l.jsx)("a",{href:"tel:919.449.5523",className:"card-link a-dark",children:"919.449.5523"})]}),Object(l.jsxs)("li",{className:"list-group-item",children:["Email:",Object(l.jsx)("a",{href:"mailto://mayfieldmel@gmail.com",target:"_blank",rel:"noreferrer",className:"card-link a-dark",children:"mayfieldmel@gmail.com"})]}),Object(l.jsxs)("li",{className:"list-group-item",children:[Object(l.jsx)("a",{href:"https://github.com/Mayfieldmel",target:"_blank",rel:"noreferrer",className:"btn button",children:"Github"}),Object(l.jsx)("a",{href:"https://www.linkedin.com/in/mjmayfield95/",className:"btn button",children:"linkedIn"})]})]})]})},x=a.p+"static/media/Mayfield IT Resume 2022.b8e8e68d.docx";var f=function(){return Object(l.jsxs)("section",{children:[Object(l.jsx)("h2",{children:"Resume"}),Object(l.jsxs)("p",{children:["To download my resume,",Object(l.jsx)("a",{href:"".concat(x),children:"click here"})]}),Object(l.jsx)("h3",{children:"Front-End Proficiencies"}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:"HTML"}),Object(l.jsx)("li",{children:"CSS"}),Object(l.jsx)("li",{children:"JavaScript"}),Object(l.jsx)("li",{children:"JQuery"}),Object(l.jsx)("li",{children:"Responsive design"}),Object(l.jsx)("li",{children:"React"}),Object(l.jsx)("li",{children:"BootStrap, Materialize, Bulma"})]}),Object(l.jsx)("h3",{children:"Back-End Proficiencies"}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:"APIs"}),Object(l.jsx)("li",{children:"Node"}),Object(l.jsx)("li",{children:"Express"}),Object(l.jsx)("li",{children:"MySQL, Sequelize"}),Object(l.jsx)("li",{children:"MongoDB, Mongoose"}),Object(l.jsx)("li",{children:"REST"}),Object(l.jsx)("li",{children:"GraphQL"})]})]})};var O=function(){return Object(l.jsxs)("footer",{children:[Object(l.jsx)("a",{href:"https://github.com/Mayfieldmel",target:"_blank",rel:"noreferrer",children:Object(l.jsx)("img",{className:"footer-icon",src:"".concat("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNTE3OEEyQTk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNTE3OEEyQjk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTI4OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTI5OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+m4QGuQAAAyRJREFUeNrEl21ojWEYx895TDPbMNlBK46IUiNmPvHBSUjaqc0H8pF5+aDUKPEBqU2NhRQpX5Rv5jWlDIWlMCv7MMSWsWwmb3tpXub4XXWdPHvc9/Gc41nu+nedc7/8r/99PffLdYdDPsvkwsgkTBwsA/PADJCnzX2gHTwBt8Hl7p537/3whn04XoDZDcpBlk+9P8AFcAghzRkJwPF4zGGw0Y9QS0mAM2AnQj77FqCzrtcwB1Hk81SYojHK4DyGuQ6mhIIrBWB9Xm7ug/6B/nZrBHBegrkFxoVGpnwBMSLR9EcEcC4qb8pP14BWcBcUgewMnF3T34VqhWMFkThLJAalwnENOAKiHpJq1FZgI2AT6HZtuxZwR9GidSHtI30jOrbawxlVX78/AbNfhHlomEUJJI89O2MqeE79T8/nk8nMBm/dK576hZgmA3cp/R4l9/UeSxiHLVIlNm4nFfT0bxyuIj7LHRTKai+zdJobwMKzcZSJb0ePV5PKN+BqAAKE47UlMnERELMM3EdYP/yrd+XYb2mOiYBiQ8OQnoRBlXrl9JZix7D1pHTazu4MoyBcnYamqAjIMTR8G4FT8LuhLsexXYYjICBiqhQBvYb6fLZIJCjPypVvaOoVAW2WcasCnL2Nq82xHJNSqlCeFcDshaPK0twkAhosjZL31QYw+1rlMpWGMArl23SBsZZO58F2tlJXmjOXS+s4WGvpMiBJT/I2PInZ6lIs9/hBsNS1hS6BG0DSqmYEDRlCXQrmy50P1oDRKTSegmNbUsA0zDMwRhPJXeCE3vWLPQMvan6X8AgIa1vcR4AkGZkDR4ejJ1UHpsaVI0g2LInpOsNFUud1rhxSV+fzC9Woz2EZkWQuja7/B+jUrgtIMpy9YCW4n4K41YfzRneW5E1KJTe4B2Zq1Q5EHEtj4U3AfEzR5SVY4l7QYQPJdN2as7RKBF0BPZqqH4VgMAMBL8Byxr7y8zCZiDlnOcEKIPmUpgB5Z2ww5RdOiiRiNajUmWda5IG6WbhsyY2fx6m8gLcoJDJFkH219M3We1+cnda93pfycZpIJEL/s/wSYADmOAwAQgdpBAAAAABJRU5ErkJggg=="),alt:"github icon"})}),Object(l.jsx)("a",{href:"https://www.linkedin.com/in/mjmayfield95?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BzgHzYicsSjS3MdvMymc4iQ%3D%3D",target:"_blank",rel:"noreferrer",children:Object(l.jsx)("img",{className:"footer-icon",src:"".concat("data:image/png;base64,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"),alt:"linkedin icon"})}),Object(l.jsx)("a",{href:"https://twitter.com/Melissa130st0n",target:"_blank",rel:"noreferrer",children:Object(l.jsx)("img",{className:"footer-icon",src:"".concat("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADIUlEQVRoge3ZX4hVVRTH8Y8zQU6l/RPLosiKwiQopKckQYrqQSiIIaGg3gxFIciC9CGKHlIk0JeiwDeVguilhtCXCCvoH4hREP3DwrJiHPszo87cHtYd5nQ8c+6/feYMdH+wuOfee/Ze68vZZ+2196avvvr6X2hB3QHghqYtwRiO4Qgm6wyqXS3CdnyNRoH9ilcEYJmuxJ1Ff9yaKtISPYhfFAPkbRwvYDDXx3XYg39we97BMvyFhysJP7QVU9qDyNpbWI1n8IEYdg28UeTkyeafE7inAohHuwAos5+xtMjRO5mbxvFQQohr8XdCiBNY2ez7ItybdfZ97uZJbE4EsjchxOcYxgbsw5+4L+tsdJaG+3FxDxCLxRNOBTKZ+/5U3uHxksbfYm2XIMMJIfL2UpHDD9to+KZIfZ3ouQoApvDsbA53ttnJOF4z87K10quJIc7ggTKHd3TY4RTew+O4rKTf3YlBxsogpnWoy85PN9s+j3W42kwdtzUxyGg7ILdIl+8nREr/LjHIsTKAbBW83rkpbj7Zl0UAA83PQVE6b8JBPCIKsvmoH1rdcMIM9Y/K55U6bU9R8AOZ608z19fgilbkNal0aMG7cxRIrzrc6oZLcFL9Q6fMTjp3kYX/PpFRvNiKtmaNaHMtP6j7SXEubLgT6kViOVl30HkbE4uojnQ+Xja/JsbdnUJktVKs7v6oGWIKN5cFet4sv6/CY02A3/Gx2JAozBhzoANiD6xjDeE39Q+nhqisb+wGYlob5wFEA7t6gSCG0UjNEN/gwl5BiN2TwzVBnMWaFBDTGsLrutvq7MWeTgmR1Wq8LRb/VUMcMAdHHotxv9hTqmLCHBETcuUawBaxVZka4qAYypUDrMNHFQA0RAVR6ZO4Ck/gq4oAzkjwYi/Abc0OT4nK91IsF2XKWqzo1UmJjopS6JMUnS0VC/rTqs9G0zaKbViYAiCvm8R5w0TFADtweRUAeS0RBzyfJQr+LN4XQ+iCqoJuNemswN24S5yeXt9GmzGRGL4Q6fSQWA5Uqk5nzyFxHrhMJIaFYiieEgDH8VPKAPvqq2b9C53t8lAzqxI/AAAAAElFTkSuQmCC"),alt:"linkedin icon"})}),Object(l.jsx)("a",{href:"mailto://mayfieldmel@gmail.com",children:Object(l.jsx)("img",{className:"footer-icon",src:"".concat("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADu0lEQVRogdWawUsVURTGD1YWhZKFVpYtSrOggmzjqkW0EIQoisTauAiNSlsU6bI/oFI34aZ17QIXia1qZRlZkIVUEolEEYqZkZZY55t7hqZx5s2ZeTPzpg9+m/HcO9+Zd++dc+9IFI82M6eZXmaQectMMz+Fabk2KDHN0qag2sh0ME+Z3xEZZtqlr9S0jelhvudh3M0c081sTdL4KuYS8y1G427wUK4xq+M2X8u8SNC4m+fMrrjMn6Bkn7ofs8zxfM23ML8KYN5mkTkX1XxbAY27aQ9rHsNmMQPGnb/EMa35auZrBky7wTzcHWS+mNJdbcIyQmY591VXBkwGccXPPN6CcxkwqBlKW7wS6AloOMGMp8REgJcbbvMopoJqm2qvrBNSdYCXOXIVgB0BDbKWALjgbKApievT8W6pXuHniR2MCbGkaDDFHErJ/GeFH3jehAbNimAwyvxgmhI03yT3GFV6srz0KoP3MH1kMu9KwHyX9N0n99J4wibI2qdqgu1J3Epmn3ubAt6KSq1gbpGpdzrlmmYSg/sIHg+ZAHSEzEYdyZfmYb5U+piWPm1pE8BBgTU5wyYA7WReMS+Z7RHMV5Kpbd7Q8iJNm8AXBC9ETAAqYfqZj8zBEOb3k3nb4umv9/i7NoH5fBOAMIZRhqBGaVSYb5TYHmnrpVAJRB1CtjCR70hnmIjnc5g/LzHz0sZvEQg1hN7lkcAaMkMIHdUxV8kshSi2ihxxRXJtSWLqpE2/9BE1AWsSh11Gba1jHjCfmH2O6yfJvIzuMWvF4F0yQ/WMIw4Td5J5SGYuRUnAWka1LzJnAmXMEPOBqXE/PtZhZoZ5LMzINbdqpI8h6TNsAtaLTFtK2AlUkDl4es/s8DBlay+ZlQYr1IEccViCsZSifKgMmcApBOOUWFPModMqZox57bhZLlUJQaqUPsckXpMAPFfYHQwrGjSQeep4+uUKU2FVTn9/2QaFnyFn43ZFA6zdGM/OsRq3yuQemqPMfzY02J4Fbegf0fLVIgmVyL1yeVm2pYS6AxphyUtrUz8Z4OW6V+b/y7EKTq19P091ZsBgEJf9zEOoTUYyYNKPZ6TYRGX5cLc2yLwtfBnJ2vH6Ua15W60ZMA7wxj0b1rytFir8J6a2qOZt4cvIbAHMYx6GHjZ+Qtmb5uqE1Sb2s9iVZD50J/lr2B+6i+M27xTOUm9SvG9t9IUtZ6r/AIJi6iKZ6lGzn3CDNiiJUVVuSNO4l7CxwEErCsIBMhsTnHYsCFNybUBimsixGclHfwBROSY6ZbOQUgAAAABJRU5ErkJggg=="),alt:"email icon"})})]})};var v=function(){var e=Object(c.useState)([{name:"About Me"},{name:"Portfolio"},{name:"Contact"},{name:"Resume"}]),t=Object(r.a)(e,1)[0],a=Object(c.useState)(!1),n=Object(r.a)(a,2),i=n[0],s=n[1],o=Object(c.useState)(t[0]),m=Object(r.a)(o,2),h=m[0],b=m[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)(d,{pages:t,pageSelected:i,setPageSelected:s,currentPage:h,setCurrentPage:b}),Object(l.jsx)("main",{children:i?function(e){return"Portfolio"===e?Object(l.jsx)(u,{}):"Contact"===e?Object(l.jsx)(M,{}):"Resume"===e?Object(l.jsx)(f,{}):Object(l.jsx)(A,{})}(h.name):Object(l.jsx)(A,{})}),Object(l.jsx)(O,{})]})},y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,13)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),i(e),s(e)}))};s.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(v,{})}),document.getElementById("root")),y()},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.e17a8860.chunk.js.map