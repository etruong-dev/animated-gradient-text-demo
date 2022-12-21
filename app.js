let index = 0,
    interval = 1000;

const rand = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

const animate = star => {
    // random css top and left variables
    star.style.setProperty("--star-top", `${rand(-40, 80)}%`);
    star.style.setProperty("--star-left", `${rand(-10, 100)}%`);

    // reset animation every time position changes
    star.style.animation = "none";
    // DOM reflow *expensive operation
    star.offsetHeight;
    star.style.animation = "";
}

// constant sparkle effect 
// loop over star elements
for(const star of document.getElementsByClassName("magic-star")) {
    // 1 second interval for each star
    setTimeout(() => {
        // call animate so we dont have to wait for the first iteration to complete
        //animate(star);

        setInterval(() => animate(star), 1000);
    }, index++ * (interval / 3)) // stagger star animations
}

// // sparkle effect only on hover
// let timeouts = [],
//     intervals = [];

// const magic = document.querySelector(".magic");

// magic.onmouseenter = () => {
//     let index = 1;

//     for(const star of document.getElementsByClassName("magic-star")) {
//         timeouts.push(setTimeout(() => {
//             animate(star);

//             intervals.push(setInterval(() => animate(star), 1000));
//         }, index++ * 300));
//     };
// }

// magic.onmouseleave = onMouseLeave = () => {
//     for(const t of timeouts) clearTimeout(t);
//     for(const i of intervals) clearInterval(i);

//     timeouts = [];
//     intervals = [];
// }