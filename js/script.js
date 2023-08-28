function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  }
  function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  }
  document.getElementById("sidebar-toggle").addEventListener("click", function() {
    document.querySelector(".sidebar").classList.toggle("open");
  });

function changeLanguage(lang) {
  var basket = document.getElementById('Basket');
  var main = document.getElementById('Main');
  var menu = document.getElementById('Menu');
  var aboutUs = document.getElementById('AboutUs');
  var contacts = document.getElementById('Contacts');
  var loremOne = document.getElementById('loremOne');
  var loremTwo = document.getElementById('loremTwo');
  var loremThree = document.getElementById('loremThree');
  var loremFour = document.getElementById('loremFour');
  var loremFive = document.getElementById('loremFive');

  if (lang === 'en') {
    basket.innerHTML='Basket';
    main.innerHTML='Main';
    menu.innerHTML='Menu';
    aboutUs.innerHTML='About us';
    contacts.innerHTML='Contacts';
    loremOne.innerHTML='This perfume is an art that captivates the senses and takes us into the world of delicious fragrances. Each drop hides a story, emotions and personality. From the moment it appears in the air, it envelops us with magic, emphasizes our uniqueness and diversity. It becomes our recognition sign, helping us to express the most important thing in our life - mood, style and personality. Perfume is a jewel that makes our life more vivid and unforgettable.';
    loremTwo.innerHTML='This perfume is an art that envelops with its notes, awakens feelings and magically transforms everyday life.';
    loremThree.innerHTML='Perfume is a unique essence, a harmony of scents created to embody our individuality and turn moments into memories.';
    loremFour.innerHTML='This perfume is an artful combination of deep notes and delicate chords, awakening sensuality and leaving a sweet trace of elegance.';
    loremFive.innerHTML='Delicate notes of flowers mixed with elegant wood chords reveal themselves in a magical perfume, leaving a trace of attractiveness and luxury';
  }
  else if (lang === 'ru') {
    basket.innerHTML = 'Корзина';
    main.innerHTML = 'Главная';
    menu.innerHTML = 'Меню';
    aboutUs.innerHTML = 'О нас';
    contacts.innerHTML = 'Контакты';
    loremOne.innerHTML = 'Этот парфюм - это искусство, пленяющее чувства и переносящее нас в мир восхитительных ароматов. Каждая капля скрывает в себе историю, эмоции и индивидуальность. С момента его появления в воздухе, он обволакивает нас магией, подчеркивает нашу уникальность и разнообразие. Он становится нашим знаком распознавания, помогая нам выразить самое важное в нашей жизни - настроение, стиль и личность. Парфюм – это драгоценность, делающая нашу жизнь более яркой и незабываемой.';
    loremTwo.innerHTML = 'Этот парфюм - искусство, которое окутывает своими нотами, пробуждает чувства и магически преображает обыденность.';
    loremThree.innerHTML = 'Парфюм - это неповторимая эссенция, гармония запахов, созданная для олицетворения нашей индивидуальности и превращения моментов в воспоминания.';
    loremFour.innerHTML = 'Этот парфюм - искусное сочетание глубоких нот и нежных аккордов, пробуждающее чувственность и оставляющее сладкий след элегантности.';
    loremFive.innerHTML = 'Нежные ноты цветов, смешанные с элегантными аккордами древесины, раскрываются во волшебном парфюме, оставляя след притягательности и роскоши';
  }
}
const words = ["suppose end get","boy warrant general","natural. delightful","met sufficient projection ask.","decisively everything","principles if preference","do","impression","of. preserved oh so","difficult repulsive on","in household. in what","do","miss time be. valley","as be","appear","cannot so","by.","convinced resembled dependent","remainder led zealously","his shy own","belonging. always length","letter","adieus","add number moment she.","promise few","compass six several old","offices removal parties","fat. concluded","rapturous it intention","perfectly daughters","is as.","behaviour we","improving at something","to. evil true","high lady roof men","had open.","to projection considered it","precaution an","melancholy or.","wound young","you thing","worse along being ham.","dissimilar of favourable solicitude","if sympathize middletons","at. forfeited","up if disposing","perfectly in an","eagerness perceived necessary.","belonging sir","curiosity discovery","extremity yet","forfeited prevailed","own off.","travelling by","introduced of","mr terminated. knew as","miss","my high hope quit. in","curiosity shameless dependent","knowledge up.","literature admiration","frequently indulgence announcing","are who you","her. was","least quick after","six. so","it yourself repeated","together","cheerful. neither it cordial so","painful picture studied if.","sex","him position doubtful","resolved boy expenses.","her engrossed deficient","northward and neglected favourite newspaper.","but","use peculiar","produced concerns ten. maids","table how","learn","drift","but purse","stand yet","set. music me","house could","among oh","as their. piqued","our","sister shy nature almost","his","wicket.","hand dear","so we hour","to. he","we be","hastily","offence effects","he service. sympathize","it projection","ye insipidity celebrated"]

const containerEl = document.querySelector('.container')
const formEl = document.querySelector('#search')
const dropEl = document.querySelector('.drop')

const formHandler = (e) => {
    const userInput = e.target.value.toLowerCase()

    if(userInput.length === 0) {
        dropEl.style.height = 0
        return dropEl.innerHTML = ''              
    }

    const filteredWords = words.filter(word => word.toLowerCase().includes(userInput)).sort().splice(0, 5)
    
    dropEl.innerHTML = ''
    filteredWords.forEach(item => {
        const listEl = document.createElement('li')
        listEl.textContent = item
        if(item === userInput) {
            listEl.classList.add('match')
        }
        dropEl.appendChild(listEl)
    })

    if(dropEl.children[0] === undefined) {
        return dropEl.style.height = 0
    }

    let totalChildrenHeight = dropEl.children[0].offsetHeight * filteredWords.length
    dropEl.style.height = totalChildrenHeight + 'px'

}

