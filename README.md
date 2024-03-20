
# L2 assignment week-2

1.generate a boiler plate in htmlfor starting the code
2.Add links related to splide,google fonts,style.css file  in mata tag
3.create two section nav section and container section
4.Divide the nav section into two parts left section and right section 
5.Add  script tag for splide and for Javascript file
--JavaScript
6.In JavaScript add a event listner which triggers when "DOMContentLoaded" and calls the function for displaying elwments on webpage
7.create two array one for products and another for nav bars which contains objects for each element 
a.in nav array add objects like logo,navlinks,button
b.in products array add objects where each objects contain info related each product like image,prize,title discription etc
8.call generateNavBar function for generating nav elements and appending it in nav section 
9.traverse on products array and access each object and append products information like title,prize, discription to left section of container and product image to right section of container 
10.Initialize Splide and add it to div which contain splide class.
11.After initializing the Splide slider, an event listener is attached to the slider's moved event. This event is triggered whenever the slider moves to a new slide.
(a).It selects all elements with the class .product-info, which represent the product information sections.
(b).It removes the active class from all product info sections, effectively hiding them.
(c).It adds the active class to the product info section corresponding to the current slide index (newIndex), making it visible.
(d).It updates the background color of the body to match the ambient color of the current product, retrieved from the products array based on the current slide index.


