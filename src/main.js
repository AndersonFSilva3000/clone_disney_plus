document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll(`[data-tab-button]`);
  const questions = document.querySelectorAll(`[data-faq-question]`);

  const heroSection = document.querySelector('.hero');
  const heightHero = heroSection.clientHeight;

  window.addEventListener('scroll', function() {
    const currentPosition = window.scrollY;

    if (currentPosition < heightHero ) {
      hiddenHeader();
    } else {
      displaysHeader();
    }
  })

//Seção de Atrações, programação das abas
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function (button) {
      const targetTab = button.target.dataset.tabButton;
      const tab = document.querySelector(`[data-tab-id=${targetTab}]`);
        hideTabs();
        tab.classList.add('shows__list--is-active');
        removeActiveButton();
        button.target.classList.add('shows__tabs__button--is-active');
    })
  }

  //Seção Faq/Acordion
  for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener('click', openAndCloseAnswer)
  }
});


function hiddenHeader() {
  const header = document.querySelector('header');
  header.classList.add('header--is-hidden');
}

function displaysHeader() {
  const header = document.querySelector('header');
  header.classList.remove('header--is-hidden');
}


//função para abrir e fechar faq
function openAndCloseAnswer(element) {
  const classe = 'faq__questions__item--is-open';
  const elementFather = element.target.parentNode;

  elementFather.classList.toggle(classe)
}



function removeActiveButton() {
  const buttons = document.querySelectorAll(`[data-tab-button]`);

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('shows__tabs__button--is-active');
  }
}

function hideTabs() {
  const tabsContainer = document.querySelectorAll('[data-tab-id]');

  for (let i = 0; i < tabsContainer.length; i++) {
    tabsContainer[i].classList.remove('shows__list--is-active');
  }
}