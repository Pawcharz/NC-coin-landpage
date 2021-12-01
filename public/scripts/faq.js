class FaqManager {
    constructor() {
        this.faqSection = document.querySelector('.faq');
        this.cards = this.faqSection.querySelectorAll('.faq-card');

        this.addCardListener = (card) => {
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

        for (let i = 0; i < this.cards.length; i++) {
            const card = this.cards[i];
        
            this.addCardListener(card);
        }
    }
}
let faqManager = new FaqManager();



