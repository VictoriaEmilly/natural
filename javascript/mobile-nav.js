class mobileNavBar{
    constructor(mobileMenu, menu, menuLinks){
        this.mobileMenu=document.querySelector(mobileMenu);
        this.menu=document.querySelector(menu);
        this.menuLinks=document.querySelector(menuLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        console.log(this);
        this.menu.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
    }

    addClickEvent(){
        this.mobileMenu.addEventListener("click", this.handleClick); 
    }


    init(){
        if(this.mobileMenu){
            this.addClickEvent();  
        }
        return(this);
    }
}

const mobileNav= new mobileNavBar(
    ".mobile-menu",
    ".menu",
    ".menu li"
);
mobileNav.init();
