class SectionDisplayer {
    constructor() {

        this.bannerSection = document.querySelector('.banner');
        this.aboutCoinSection = document.querySelector('.about-coin');
        this.faqSection = document.querySelector('.faq');
        this.aboutCommunitySection = document.querySelector('.about-community');

        this.openBanner = () => {
            this.bannerSection.classList.remove('hidden');
        }
        this.openAboutCoin = () => {
            this.aboutCoinSection.classList.remove('hidden');
        }
        this.openFaq = () => {
            this.faqSection.classList.remove('hidden');
        }
        this.openAboutCommunity = () => {
            this.aboutCommunitySection.classList.remove('hidden');
        }


        this.listenWindow = () => {

            let scrollPosition = window.scrollY + window.innerHeight;
            let fixedScrollPosition = scrollPosition - 200;         

            console.log(scrollPosition, this.aboutCoinSection.offsetTop)
            
            if(scrollPosition >= this.bannerSection.offsetTop) {
                this.openBanner();
            }            
            if(scrollPosition >= this.aboutCoinSection.offsetTop) {
                this.openAboutCoin();
            }            
            if(scrollPosition >= this.faqSection.offsetTop) {
                this.openFaq();
            }
            if(scrollPosition >= this.aboutCommunitySection.offsetTop) {
                this.openAboutCommunity();
            }

        }
        this.listenWindow();
        window.addEventListener('scroll', () => {
            console.log('1')

            this.listenWindow();
        })
    }
}
let sectionDisplayer = new SectionDisplayer();

window.addEventListener('DOMContentLoaded', () => {
    
    sectionDisplayer.listenWindow()
});