window.addEventListener('load', e => {
    let background = document.createElement('div');
    background.id = 'background';
    background.classList.add('backgroundHome');
    document.querySelector('body').appendChild(background);

    let header = document.createElement('header');
    background.appendChild(header);

    header.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>`;

    let rectangle = document.createElement('span');
    header.appendChild(rectangle);

    let link = document.createElement('a');
    link.href = '#';
    link.classList.add('navBarToggle');
    header.appendChild(link);

    let burger = document.createElement('span');
    burger.id = 'burger';
    burger.classList.add('icon-bar');
    link.appendChild(burger);
    
    let nav = document.createElement('nav');
    header.appendChild(nav);

    let navUl = document.createElement('ul');
    nav.appendChild(navUl);

    let navUlList01 = document.createElement('li');
    navUlList01.id = 'navList00';
    navUlList01.classList.add('navActive');
    let navUlList02 = document.createElement('li');
    navUlList02.id = 'navList01';
    let navUlList03 = document.createElement('li');
    navUlList03.id = 'navList02';
    let navUlList04 = document.createElement('li');
    navUlList04.id = 'navList03';

    navUlList01.textContent = "home";
    navUlList02.textContent = "destination";
    navUlList03.textContent = "crew";
    navUlList04.textContent = "technology";

    navUl.appendChild(navUlList01);
    navUl.appendChild(navUlList02);
    navUl.appendChild(navUlList03);
    navUl.appendChild(navUlList04);

    let section = document.createElement('section');
    section.classList.add('content');
    background.appendChild(section);

    let article = document.createElement('article');
    section.appendChild(article);

    let span = document.createElement('span');
    span.classList.add('smallTitle');
    span.textContent = "so, you want to travel to";
    article.appendChild(span);

    let title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = "SPACE";
    article.appendChild(title);

    let paragraphe = document.createElement('p');
    paragraphe.textContent = "Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!";
    article.appendChild(paragraphe);

    let button = document.createElement('p');
    button.classList.add('button');
    button.textContent = "explore";
    section.appendChild(button);

    let blackHole = document.createElement('div');
    blackHole.id = 'blackHole';
    blackHole.classList.add('blackHole');
    document.querySelector('body').appendChild(blackHole);

    navUlList01.addEventListener('click', e => {
        home();
    })

    navUlList02.addEventListener('click', e => {
        destination();
    })

    navUlList03.addEventListener('click', e => {
        crew();
    })

    navUlList04.addEventListener('click', e => {
        technology();
    })

    document.querySelector('.button').addEventListener('click', e => {
        if (window.innerWidth >= 1024) {
            systemeSolaire();
        } else {
            alert('Vous devez avoir une résolution supérieur à 1024px de large');
        }
    })

    window.addEventListener('resize', e => {
        let width = window.innerWidth;
        if (width <= 1023 && width >= 768) {
            navUlList01.textContent = "home";
            navUlList02.textContent = "destination";
            navUlList03.textContent = "crew";
            navUlList04.textContent = "technology";
        } else if (width >= 1024 || width <= 767) {
            navUlList01.innerHTML = "<b>00</b> home";
            navUlList02.innerHTML = "<b>01</b> destination";
            navUlList03.innerHTML = "<b>02</b> crew";
            navUlList04.innerHTML = "<b>03</b> technology";
        }
    })

    if (window.innerWidth <= 767 || window.innerWidth >= 1024) {
        navUlList01.innerHTML = "<b>00</b> home";
        navUlList02.innerHTML = "<b>01</b> destination";
        navUlList03.innerHTML = "<b>02</b> crew";
        navUlList04.innerHTML = "<b>03</b> technology";
    }

    link.addEventListener('click', () => {
        let nav = document.querySelector('nav');
        menuBurger(nav);
        closeBurger();
    })
})

function menuBurger (navToggle) {
    let button = navToggle;
    button.classList.toggle('visible');
}

function closeBurger () {
    let close = document.querySelector('.icon-bar');
    close.classList.toggle('close');
}

function home() {
    transition(document.getElementById('blackHole'));
    setTimeout(function() {
        document.getElementById('background').classList.remove(document.getElementById('background').classList);
        document.getElementById('background').classList.add('backgroundHome');

        let list = [document.getElementById('navList00'),document.getElementById('navList01'), document.getElementById('navList02'), document.getElementById('navList03')];
        let filter = list.find(p => p.classList == 'navActive');
        filter.classList.remove('navActive');
        document.getElementById('navList00').classList.add('navActive');

        document.getElementById('background').removeChild(document.querySelector('section'));

        let section = document.createElement('section');
        section.classList.add('content');
        background.appendChild(section);

        let article = document.createElement('article');
        section.appendChild(article);

        let span = document.createElement('span');
        span.classList.add('smallTitle');
        span.textContent = "so, you want to travel to";
        article.appendChild(span);

        let title = document.createElement('h1');
        title.classList.add('title');
        title.textContent = "SPACE";
        article.appendChild(title);

        let paragraphe = document.createElement('p');
        paragraphe.textContent = "Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!";
        article.appendChild(paragraphe);

        let button = document.createElement('p');
        button.classList.add('button');
        button.textContent = "explore";
        section.appendChild(button);

        if (document.querySelector('nav').classList == 'visible') {
            menuBurger(document.querySelector('nav'));
            closeBurger();
        }

        document.querySelector('.button').addEventListener('click', e => {
            if (window.innerWidth >= 1024) {
                systemeSolaire();
            } else {
                alert('Vous devez avoir une résolution supérieur à 1024px de large');
            }
        })
    }, 1000);
}

function destinationMoon() {
    if (document.getElementById('ulList00').classList != 'liActive') {
        transition(document.getElementById('blackHole'));

        setTimeout(function() {
            let list = [document.getElementById('ulList01'), document.getElementById('ulList02'), document.getElementById('ulList03')];
            let filter = list.find(p => p.classList == 'liActive');
            document.getElementById('ulList00').classList.add('liActive');
            filter.classList.remove('liActive');
            document.getElementById('assetDestination').src = 'assets/destination/image-moon.webp';
            document.getElementById('assetDestination').alt = 'La Lune';
            document.getElementById('title').textContent = 'MOON';
            document.getElementById('paragraphe').textContent = 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.';
            document.getElementById('distance').textContent = '384,400 km';
            document.getElementById('voyage').textContent = '3 days';
        }, 1000);
    }
}

function destinationMars() {
    if (document.getElementById('ulList01').classList != 'liActive') {
        transition(document.getElementById('blackHole'));

        setTimeout(function() {
            let list = [document.getElementById('ulList00'), document.getElementById('ulList02'), document.getElementById('ulList03')];
            let filter = list.find(p => p.classList == 'liActive');
            document.getElementById('ulList01').classList.add('liActive');
            filter.classList.remove('liActive');
            document.getElementById('assetDestination').src = 'assets/destination/image-mars.webp';
            document.getElementById('assetDestination').alt = 'La planète rouge';
            document.getElementById('title').textContent = 'MARS';
            document.getElementById('paragraphe').textContent = 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!';
            document.getElementById('distance').textContent = '225 MIL. km';
            document.getElementById('voyage').textContent = '9 months';
        }, 1000);
    }
}

function destinationEuropa() {
    if (document.getElementById('ulList02').classList != 'liActive') {
        transition(document.getElementById('blackHole'));

        setTimeout(function() {
            let list = [document.getElementById('ulList00'), document.getElementById('ulList01'), document.getElementById('ulList03')];
            let filter = list.find(p => p.classList == 'liActive');
            document.getElementById('ulList02').classList.add('liActive');
            filter.classList.remove('liActive');
            document.getElementById('assetDestination').src = 'assets/destination/image-europa.webp';
            document.getElementById('assetDestination').alt = 'Lune de Jupiter';
            document.getElementById('title').textContent = 'EUROPA';
            document.getElementById('paragraphe').textContent = 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.';
            document.getElementById('distance').textContent = '628 MIL. km';
            document.getElementById('voyage').textContent = '3 years';
        }, 1000);
    }
}

function destinationTitan() {
    if (document.getElementById('ulList03').classList != 'liActive') {
        transition(document.getElementById('blackHole'));

        setTimeout(function() {
            let list = [document.getElementById('ulList00'), document.getElementById('ulList01'), document.getElementById('ulList02')];
            let filter = list.find(p => p.classList == 'liActive');
            document.getElementById('ulList03').classList.add('liActive');
            filter.classList.remove('liActive');
            document.getElementById('assetDestination').src = 'assets/destination/image-titan.webp';
            document.getElementById('assetDestination').alt = 'Lune de Saturne';
            document.getElementById('title').textContent = 'TITAN';
            document.getElementById('paragraphe').textContent = 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.';
            document.getElementById('distance').textContent = '1.6 BIL. km';
            document.getElementById('voyage').textContent = '7 years';
        }, 1000);
    }
}

function destination() {
    transition(document.getElementById('blackHole'));
    setTimeout(function() {
        document.getElementById('background').classList.remove(document.getElementById('background').classList);
        document.getElementById('background').classList.add('backgroundDestination');

        let list = [document.getElementById('navList00'), document.getElementById('navList02'), document.getElementById('navList03')];
        let filter = list.find(p => p.classList == 'navActive');
        document.getElementById('navList01').classList.add('navActive');
        filter.classList.remove('navActive');

        document.getElementById('background').removeChild(document.querySelector('section'));

        let section = document.createElement('section');
        section.classList.add('destination');
        document.getElementById('background').appendChild(section);

        let span = document.createElement('span');
        span.classList.add('smallTitleDestination');
        span.textContent = "pick your destination";
        section.appendChild(span);

        let box = document.createElement('div');
        box.classList.add('boxDestination');
        section.appendChild(box);

        let asset = document.createElement('img');
        asset.id = 'assetDestination';
        asset.src = 'assets/destination/image-moon.webp';
        asset.alt = 'La lune';
        box.appendChild(asset);

        let boxBis = document.createElement('div');
        boxBis.classList.add('boxDestinationArticle');
        box.appendChild(boxBis);

        let ul = document.createElement('ul');
        boxBis.appendChild(ul);

        let ulList01 = document.createElement('li');
        ulList01.id = 'ulList00';
        ulList01.classList.add('liActive');
        let ulList02 = document.createElement('li');
        ulList02.id = 'ulList01';
        let ulList03 = document.createElement('li');
        ulList03.id = 'ulList02';
        let ulList04 = document.createElement('li');
        ulList04.id = 'ulList03';

        ulList01.innerHTML = "moon";
        ulList02.innerHTML = "mars";
        ulList03.innerHTML = "europa";
        ulList04.innerHTML = "titan";

        ul.appendChild(ulList01);
        ul.appendChild(ulList02);
        ul.appendChild(ulList03);
        ul.appendChild(ulList04);

        let title = document.createElement('h1');
        title.id = 'title';
        title.classList.add('titleDestination');
        title.textContent = "MOON";
        boxBis.appendChild(title);

        let paragraphe = document.createElement('p');
        paragraphe.id = 'paragraphe';
        paragraphe.textContent = "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.";
        boxBis.appendChild(paragraphe);

        let separation = document.createElement('span');
        separation.classList.add('separation');
        boxBis.appendChild(separation);

        let box3 = document.createElement('div');
        box3.classList.add('box3');
        boxBis.appendChild(box3);

        let para1 = document.createElement('p');
        box3.appendChild(para1);

        let titleDistance = document.createElement('span');
        titleDistance.textContent = 'AVG. DISTANCE';
        para1.appendChild(titleDistance);

        let distance = document.createElement('span');
        distance.id = 'distance';
        distance.textContent = '384,400 km';
        para1.appendChild(distance);

        let para2 = document.createElement('p');
        box3.appendChild(para2);

        let titleVoyage = document.createElement('span');
        titleVoyage.textContent = 'Est. travel time';
        para2.appendChild(titleVoyage);

        let Voyage = document.createElement('span');
        Voyage.id = 'voyage';
        Voyage.textContent = '3 days';
        para2.appendChild(Voyage);

        document.getElementById('ulList00').addEventListener('click', e => {
            destinationMoon();
        })
        
        document.getElementById('ulList01').addEventListener('click', e => {
            destinationMars();
        })

        document.getElementById('ulList02').addEventListener('click', e => {
            destinationEuropa();
        })
        
        document.getElementById('ulList03').addEventListener('click', e => {
            destinationTitan();
        })

        if (document.querySelector('nav').classList == 'visible') {
            menuBurger(document.querySelector('nav'));
            closeBurger();
        }
    }, 1000);
}

function crewDouglas() {
    if (document.getElementById('listCrew00').classList != 'liCrewActive') {
        transition(document.getElementById('blackHole'));

        setTimeout(function() {
            let list = [document.getElementById('listCrew01'), document.getElementById('listCrew02'), document.getElementById('listCrew03')];
            let filter = list.find(p => p.classList == 'liCrewActive');
            document.getElementById('listCrew00').classList.add('liCrewActive');
            filter.classList.remove('liCrewActive');
            document.getElementById('assetCrew').src = 'assets/crew/image-douglas-hurley.png';
            document.getElementById('assetCrew').alt = 'Astronaute';
            document.getElementById('titleCrew').textContent = 'douglas hurley';
            document.getElementById('paragraphe').textContent = 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.';
            document.getElementById('rank').textContent = 'commander';
        }, 1000);
    }
}

function crewMark() {
    if (document.getElementById('listCrew01').classList != 'liCrewActive') {
        transition(document.getElementById('blackHole'));

        setTimeout(function() {
            let list = [document.getElementById('listCrew00'), document.getElementById('listCrew02'), document.getElementById('listCrew03')];
            let filter = list.find(p => p.classList == 'liCrewActive');
            document.getElementById('listCrew01').classList.add('liCrewActive');
            filter.classList.remove('liCrewActive');
            document.getElementById('assetCrew').src = 'assets/crew/image-mark-shuttleworth.png';
            document.getElementById('assetCrew').alt = 'CEO';
            document.getElementById('titleCrew').textContent = 'mark shuttleworth';
            document.getElementById('paragraphe').textContent = 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.';
            document.getElementById('rank').textContent = 'mission specialist';
        }, 1000);
    }
}

function crewVictor() {
    if (document.getElementById('listCrew02').classList != 'liCrewActive') {
        transition(document.getElementById('blackHole'));

        setTimeout(function() {
            let list = [document.getElementById('listCrew00'), document.getElementById('listCrew01'), document.getElementById('listCrew03')];
            let filter = list.find(p => p.classList == 'liCrewActive');
            document.getElementById('listCrew02').classList.add('liCrewActive');
            filter.classList.remove('liCrewActive');
            document.getElementById('assetCrew').src = 'assets/crew/image-victor-glover.png';
            document.getElementById('assetCrew').alt = 'Pilote';
            document.getElementById('titleCrew').textContent = 'victor glover';
            document.getElementById('paragraphe').textContent = 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ';
            document.getElementById('rank').textContent = 'pilot';
        }, 1000);
    }
}

function crewAnousheh() {
    if (document.getElementById('listCrew03').classList != 'liCrewActive') {
        transition(document.getElementById('blackHole'));

        setTimeout(function() {
            let list = [document.getElementById('listCrew00'), document.getElementById('listCrew01'), document.getElementById('listCrew02')];
            let filter = list.find(p => p.classList == 'liCrewActive');
            document.getElementById('listCrew03').classList.add('liCrewActive');
            filter.classList.remove('liCrewActive');
            document.getElementById('assetCrew').src = 'assets/crew/image-anousheh-ansari.png';
            document.getElementById('assetCrew').alt = 'Ingénieur';
            document.getElementById('titleCrew').textContent = 'anousheh ansari';
            document.getElementById('paragraphe').textContent = 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ';
            document.getElementById('rank').textContent = 'flight engineer';
        }, 1000);
    }
}

function crew() {
    transition(document.getElementById('blackHole'));
    setTimeout(function() {
        document.getElementById('background').classList.remove(document.getElementById('background').classList);
        document.getElementById('background').classList.add('backgroundCrew');

        let list = [document.getElementById('navList01'), document.getElementById('navList00'), document.getElementById('navList03')];
        let filter = list.find(p => p.classList == 'navActive');
        document.getElementById('navList02').classList.add('navActive');
        filter.classList.remove('navActive');

        document.getElementById('background').removeChild(document.querySelector('section'));

        let section = document.createElement('section');
        section.classList.add('crew');
        background.appendChild(section);

        let article = document.createElement('article');
        section.appendChild(article);

        let span = document.createElement('span');
        span.classList.add('smallTitleCrew');
        span.textContent = "meet your crew";
        section.appendChild(span);

        let rank = document.createElement('span');
        rank.id = 'rank';
        rank.classList.add('rank');
        rank.textContent = 'commander';
        article.appendChild(rank);

        let title = document.createElement('h1');
        title.id = 'titleCrew';
        title.classList.add('titleCrew');
        title.textContent = "Douglas Hurley";
        article.appendChild(title);

        let paragraphe = document.createElement('p');
        paragraphe.id = 'paragraphe';
        paragraphe.textContent = "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.";
        article.appendChild(paragraphe);

        let ul = document.createElement('ul');
        article.appendChild(ul);

        let listCrew01 = document.createElement('li');
        listCrew01.id = 'listCrew00';
        listCrew01.classList.add('liCrewActive');
        let listCrew02 = document.createElement('li');
        listCrew02.id = 'listCrew01';
        let listCrew03 = document.createElement('li');
        listCrew03.id = 'listCrew02';
        let listCrew04 = document.createElement('li');
        listCrew04.id = 'listCrew03';

        ul.appendChild(listCrew01);
        ul.appendChild(listCrew02);
        ul.appendChild(listCrew03);
        ul.appendChild(listCrew04);

        let asset = document.createElement('img');
        asset.id = 'assetCrew';
        asset.src = 'assets/crew/image-douglas-hurley.png';
        asset.alt = 'Astronaute';
        section.appendChild(asset);

        let separation = document.createElement('span');
        separation.classList.add('imgSeparation');
        section.appendChild(separation);

        document.getElementById('listCrew00').addEventListener('click', e => {
            crewDouglas();
        })
        
        document.getElementById('listCrew01').addEventListener('click', e => {
            crewMark();
        })

        document.getElementById('listCrew02').addEventListener('click', e => {
            crewVictor();
        })
        
        document.getElementById('listCrew03').addEventListener('click', e => {
            crewAnousheh();
        })

        if (document.querySelector('nav').classList == 'visible') {
            menuBurger(document.querySelector('nav'));
            closeBurger();
        }
    }, 1000);
}

function technologyLaunch() {
    if (document.getElementById('listTechno00').classList != 'liTechnoActive') {
        transition(document.getElementById('blackHole'));

        setTimeout(function() {
            let list = [document.getElementById('listTechno01'), document.getElementById('listTechno02')];
            let filter = list.find(p => p.classList == 'liTechnoActive');
            document.getElementById('listTechno00').classList.add('liTechnoActive');
            filter.classList.remove('liTechnoActive');
            document.getElementById('assetTechnology').src = 'assets/technology/image-launch-vehicle-portrait.jpg';
            document.getElementById('assetTechnology').alt = 'Lancement de fusée';
            document.getElementById('titleTechnology').textContent = 'launch vehicle';
            document.getElementById('paragraphe').textContent = "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!";
            if (window.innerWidth <= 1023) {
                document.getElementById('assetTechnology').src = 'assets/technology/image-launch-vehicle-landscape.jpg';
            }
        }, 1000);
    }
}

function technologyPort() {
    if (document.getElementById('listTechno01').classList != 'liTechnoActive') {
        transition(document.getElementById('blackHole'));

        setTimeout(function() {
            let list = [document.getElementById('listTechno00'), document.getElementById('listTechno02')];
            let filter = list.find(p => p.classList == 'liTechnoActive');
            document.getElementById('listTechno01').classList.add('liTechnoActive');
            filter.classList.remove('liTechnoActive');
            document.getElementById('assetTechnology').src = 'assets/technology/image-spaceport-portrait.jpg';
            document.getElementById('assetTechnology').alt = 'Site de lancement';
            document.getElementById('titleTechnology').textContent = 'spaceport';
            document.getElementById('paragraphe').textContent = "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.";
            if (window.innerWidth <= 1023) {
                document.getElementById('assetTechnology').src = 'assets/technology/image-spaceport-landscape.jpg';
            }
        }, 1000);
    }
}

function technologyCapsule() {
    if (document.getElementById('listTechno02').classList != 'liTechnoActive') {
        transition(document.getElementById('blackHole'));

        setTimeout(function() {
            let list = [document.getElementById('listTechno00'), document.getElementById('listTechno01')];
            let filter = list.find(p => p.classList == 'liTechnoActive');
            document.getElementById('listTechno02').classList.add('liTechnoActive');
            filter.classList.remove('liTechnoActive');
            document.getElementById('assetTechnology').src = 'assets/technology/image-space-capsule-portrait.jpg';
            document.getElementById('assetTechnology').alt = 'Capsule spaciale';
            document.getElementById('titleTechnology').textContent = 'space capsule';
            document.getElementById('paragraphe').textContent = "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.";
            if (window.innerWidth <= 1023) {
                document.getElementById('assetTechnology').src = 'assets/technology/image-space-capsule-landscape.jpg';
            }
        }, 1000);
    }
}

function technology() {
    transition(document.getElementById('blackHole'));
    setTimeout(function() {
        document.getElementById('background').classList.remove(document.getElementById('background').classList);
        document.getElementById('background').classList.add('backgroundTechnology');

        let list = [document.getElementById('navList01'), document.getElementById('navList00'), document.getElementById('navList02')];
        let filter = list.find(p => p.classList == 'navActive');
        document.getElementById('navList03').classList.add('navActive');
        filter.classList.remove('navActive');

        document.getElementById('background').removeChild(document.querySelector('section'));

        let section = document.createElement('section');
        section.classList.add('technology');
        background.appendChild(section);

        let article = document.createElement('article');
        section.appendChild(article);

        let span = document.createElement('span');
        span.classList.add('smallTitleTechnology');
        span.textContent = "space launch 101";
        article.appendChild(span);

        let ul = document.createElement('ul');
        article.appendChild(ul);

        let listTechno01 = document.createElement('li');
        listTechno01.id = 'listTechno00';
        listTechno01.classList.add('liTechnoActive');
        let listTechno02 = document.createElement('li');
        listTechno02.id = 'listTechno01';
        let listTechno03 = document.createElement('li');
        listTechno03.id = 'listTechno02';

        listTechno01.textContent = '1';
        listTechno02.textContent = '2';
        listTechno03.textContent = '3';

        ul.appendChild(listTechno01);
        ul.appendChild(listTechno02);
        ul.appendChild(listTechno03);

        let box = document.createElement('div');
        box.classList.add('technologyBox');
        article.appendChild(box);

        let firstWord = document.createElement('p');
        firstWord.textContent = 'THE TECHNOLOGY...';
        box.appendChild(firstWord);

        let title = document.createElement('h1');
        title.id = 'titleTechnology';
        title.classList.add('titleTechnology');
        title.textContent = "launch vehicle";
        box.appendChild(title);

        let paragraphe = document.createElement('p');
        paragraphe.id = 'paragraphe';
        paragraphe.textContent = "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!";
        box.appendChild(paragraphe);

        let asset = document.createElement('img');
        asset.id = 'assetTechnology';
        asset.src = 'assets/technology/image-launch-vehicle-portrait.jpg';
        asset.alt = 'Un lancement de fusée';
        article.appendChild(asset);

        document.getElementById('listTechno00').addEventListener('click', e => {
            technologyLaunch();
        })
        
        document.getElementById('listTechno01').addEventListener('click', e => {
            technologyPort();
        })

        document.getElementById('listTechno02').addEventListener('click', e => {
            technologyCapsule();
        })

        if (window.innerWidth <= 1023) {
            asset.src = 'assets/technology/image-launch-vehicle-landscape.jpg';
        }

        window.addEventListener('resize', e => {
            if (window.innerWidth <= 1023) {
                asset.src = 'assets/technology/image-launch-vehicle-landscape.jpg';
            } else {
                asset.src = 'assets/technology/image-launch-vehicle-portrait.jpg';
            }
        })

        if (document.querySelector('nav').classList == 'visible') {
            menuBurger(document.querySelector('nav'));
            closeBurger();
        }
    }, 1000);
}

function transition(blackHole) {
    blackHole.classList.remove('blackHole');
    blackHole.classList.add('blackHoleActive');
    setTimeout(function() {
        blackHole.classList.remove('blackHoleActive');
        blackHole.classList.add('blackHole');
    }, 1000);
}

function systemeSolaire() {
    transition(document.getElementById('blackHole'));
    setTimeout(function() {
        document.getElementById('background').classList.remove(document.getElementById('background').classList);
        document.getElementById('background').classList.add('backgroundSysteme');

        document.getElementById('background').removeChild(document.querySelector('section'));

        let section = document.createElement('section');
        section.classList.add('sectionIframe');
        background.appendChild(section);

        let iframe = document.createElement('iframe');
        iframe.src = 'http://solar-system.florian-valois.com/';
        iframe.title = 'Système Solaire';
        section.appendChild(iframe);

        window.addEventListener('resize', e => {
            if (window.innerWidth < 1024 && document.querySelector('iframe')) {
                home();
            }
        })
    }, 1000);
}