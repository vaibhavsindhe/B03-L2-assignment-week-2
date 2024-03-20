document.addEventListener('DOMContentLoaded', function () {
    const products = [
        {id: 1, text: {title: "Executive Watch", subtitle: "Gold Luxury - Choose Us", description: "Discover the Perfect Watch for Every Occasion and Elevate Your Style with Timeless Elegance and Precision Craftsmanship.", price: "$499"}, productImg: "image 1.png", ambientColor: "linear-gradient(105.54deg, #F4A764 -2.93%, #FFDEC2 72.14%)"},
        {id: 2, text: {title: "Dainty Timepieces", subtitle: "Silver Luxury, Choose Us", description: "Explore the Ideal Timepiece for Any Moment and Enhance Your Style with Timeless Sophistication and Impeccable Craftsmanship - timepiece", price: "$469"}, productImg: "image 2.png", ambientColor: " linear-gradient(105.54deg, #ADB0B0 -2.93%, #E1E1E1 72.14%)"},
        {id: 3, text: {title: "Elegant Timepieces", subtitle: "Choose Luxury, Choose Us", description: "Discover the Perfect Watch for Every Occasion and Elevate Your Style with Timeless Elegance and Precision Craftsmanship - watch", price: "$299"}, productImg: "image 3.png", ambientColor: "linear-gradient(105.54deg, #30A357 -2.93%, #75E39A 72.14%)"},
        {id: 4, text: {title: "Refined Timepieces", subtitle: "Choose Luxury, Choose Us", description: "Explore the Ideal Timepiece for Any Moment and Enhance Your Style with Timeless Sophistication and Impeccable Craftsmanship - timepiece.", price: "$299"}, productImg: "image 4.png", ambientColor: "linear-gradient(105.54deg, #F24F4F -2.93%, #FFA895 72.14%)"}
    ];
    const nav = [
        {
            logo:"Logo.png",
            links: {
                shop: "#",
                brand: "#",
                contactus: "#"
            },
            buttons: "sign-up"
        }
    ];

    function generateNavbar(navArray) {
        const navbar = document.createElement('nav');
        navbar.classList.add('navbar');

        const logo = document.createElement('img');
        logo.src = navArray[0].logo;
        logo.classList.add('navbar-logo');
        navbar.appendChild(logo);

        const navLinks = document.createElement('ul');
        navLinks.classList.add('navbar-links');

        for (const key in navArray[0].links) {
            const linkItem = document.createElement('li');
            const link = document.createElement('a');
            link.href = navArray[0].links[key];
            link.textContent = key;
            linkItem.appendChild(link);
            navLinks.appendChild(linkItem);
        }

        navbar.appendChild(navLinks);

        const signUpButton = document.createElement('button');
        signUpButton.textContent = navArray[0].buttons;
        signUpButton.classList.add('sign-up-button');
        signUpButton.addEventListener('click', function () {
            console.log('Sign up button clicked');
        });
        navbar.appendChild(signUpButton);

        return navbar;
    }

    const navbar = generateNavbar(nav);
    
    document.body.prepend(navbar);
    const infoSection = document.getElementById('product-info-section');
    const imageList = document.querySelector('.splide__list');

    products.forEach((product, index) => {
        const productInfoDiv = document.createElement('div');
        productInfoDiv.className = `product-info ${index === 0 ? "active" : ""}`;
        productInfoDiv.innerHTML = `
            <div class="product-title">${product.text.title}</div>
            <div class="product-subtitle">${product.text.subtitle}</div>
            <div class="product-description">${product.text.description}</div>
            <div class="product-price">${product.text.price}</div>
        `;
        infoSection.appendChild(productInfoDiv);
        const listItem = document.createElement('li');
        listItem.className = 'splide__slide';
        listItem.innerHTML = `<img src="${product.productImg}" alt="${product.text.title}" style="width: 100%;">`; // Ensure image covers the slide
        imageList.appendChild(listItem);
    });

    document.body.style.background = products[0].ambientColor;
    document.querySelector(".left-section").background=products[0].ambientColor;

    const splide = new Splide('.splide', {
        type: 'loop',
        perPage: 1,
        perMove: 1,
        gap: '1rem',
        pagination: false,
        arrows: true,
    }).mount();

    splide.on('moved', (newIndex) => {
        const infoDivs = document.querySelectorAll('.product-info');
        infoDivs.forEach(div => div.classList.remove('active'));
        infoDivs[newIndex].classList.add('active');

        document.body.style.background = products[newIndex].ambientColor;
    });
});

const bottomSection = document.querySelector('.bottom-section');

const socialMediaIcons = ['fa-twitter', 'fa-facebook', 'fa-instagram']; 

socialMediaIcons.forEach(iconClass => {
    const span = document.createElement('span');
    const icon = document.createElement('i');
    icon.classList.add('fab', iconClass); 
    span.appendChild(icon);
    bottomSection.appendChild(span);
});



