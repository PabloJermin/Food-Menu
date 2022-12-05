const menu = [
    {
        id : 1,
        title: "Pancake Butter",
        category: "Breakfast",
        price: "$80",
        img: "item-1.jpeg",
        description: " A perfect smooth dough mixed with milk fried over a gritfied oil",

    },

    {
        id : 2,
        title: "Beans with Platain",
        category: "Lunch",
        price: "$820",
        img: "item-2.jpeg",
        description: " Lorem ipsum, dolor sit amet consectetur adipisicing elit.",

    },

    {
        id : 3,
        title: "Wakye",
        category: "Brunch",
        price: "$30",
        img: "item-3.jpeg",
        description: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, vero exercitationem aperiam molestiae sunt praesentium.",

    },

    {
        id : 4,
        title: "Sobolo mixed with ginger",
        category: "Desert",
        price: "$30",
        img: "item-4.jpeg",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. molestiae sunt praesentium.",

    },

    {
        id : 5,
        title: "Orage juice",
        category: "Fruit after Meals",
        price: "$10",
        img: "item-5.jpeg",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. molestiae sunt praesentium.",

    }
    
];

const sectionCenter = document.querySelector(".section-center");
const container  = document.querySelector(".btn-container");


window.addEventListener("DOMContentLoaded", function(){
   displaymenu(menu);
 const groups = menu.reduce(function(values, tem){
    if(!values.includes(tem.category)){
        values.push(tem.category)
    }
    return values
 },["All"])
 
const groupBtns = groups.map(function(gop){
    return `<button class="filter-btn" type="button" data-tin="${gop}">${gop}</button>`
}).join("");

// after adding the btns back to the html page, targer the classes using query selector.
container.innerHTML = groupBtns;
const filterBtn = container.querySelectorAll(".filter-btn");

filterBtn.forEach(function(btn){
    btn.addEventListener('click', function(e){
        // targeting each button with a dataset
      const category  = e.currentTarget.dataset.tin;
      const menuCategory = menu.filter(function(mens){
    //comparing the category in the menu with that in the button
        if (mens.category===category){
        return mens; 
        }
      })
  
    if (category ==="All"){
        displaymenu(menu);
    }
    else(
        displaymenu(menuCategory)
    )
    })
});
})


function displaymenu (items){
    let showMenu = items.map(function(ite){
        return ` <article class="menu-item">
        <img src="${ite.img}" class="photo" alt="Menu photo">
        <div class="item-info">
            <header>
            <h4>${ite.title}</h4>
            <h4 class="price">${ite.price}</h4>
            </header>
            <p class="item-text"> ${ite.description}</p>
        </div>
    </article> `;

    }); 
    showMenu = showMenu.join('');
    sectionCenter.innerHTML= showMenu;

}