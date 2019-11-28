const FRAF = (cb) => {
    window.setTimeout(cb, 1000 / 60);
};

const RAF = window.requestAnimationFrame
    || window.webkitRequestAnimationFrame
    || window.mozRequestAnimationFrame
    || window.oRequestAnimationFrame
    || window.msRequestAnimationFrame
    || FRAF;

const Animate = [];

const update = function (time) {
    Animate.forEach(animate => {
        animate(time);
    });
    RAF(update);
};

module.exports = {
    Animate,
    update
}