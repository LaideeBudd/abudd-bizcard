const shapes = document.getElementById("shapes");

const flipShapes = () => {
  console.log(document.body.clientWidth);
  if (document.body.clientWidth < 1199) {
    shapes.src = "./images/bizcardfrontmobile.png";
  } else {
    shapes.src = "./images/Bizcardfront.png";
  }
};

window.onload = flipShapes;
window.onresize = flipShapes;
