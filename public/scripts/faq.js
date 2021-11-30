const faqSection = document.querySelector('.faq');
const cards = faqSection.querySelectorAll('.faq-card');

const addCardListener = (card) => {
    let cardButton = card.querySelector('.button-open');
    let cardAnswer = card.querySelector('.answer');
    cardAnswer.style.display = "none";

    cardButton.addEventListener('click', async () => {

        if(window.getComputedStyle(cardAnswer).display != "none") {
            
            card.classList.remove('active');
            $(cardAnswer).slideUp(150);
        }
        else {
            
            $(cardAnswer).slideDown(150);
            card.classList.add('active');
        }

    })
}

for (let i = 0; i < cards.length; i++) {
    const card = cards[i];

    addCardListener(card);
}