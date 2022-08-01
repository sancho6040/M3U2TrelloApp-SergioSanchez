delete Hammer.defaults.cssProps.userSelect;
const APP = document.querySelector("#app");
const hammerJs = new Hammer(APP);

hammerJs.on("panleft panright", (event) => {
    if(event.pointrType === "touch"){
        const windowWidth = window.screen.width;
        const distance = Math.floor(event.distance) >= 50;
        if(event.type === "panleft" && event.center.x > windowWidth - 100 && distance){
            console.log("panleft");
            openModal();
        }
        if(event.type === "panright" &&  distance){
            console.log("panright");
            closeModal();
        }
    }
});
