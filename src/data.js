let data = {
    get w() {return 960},
    get h() {return 540},
    get cx() {return data.w/2},
    get cy() {return data.h/2},
    bgc: 0xf7f3b7,
    t: 0,
    dt: 1,
    get fadingSpeed() {return 0.05 * r.dt},
    gap: 120,
    score: 0,
    life: 3,
    mobile: /Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
    transition: 500,
    get tweenConfig() {
        return {
            ease: 'Quad.easeInOut',
            duration: data.transition,
        }
    }
};


export default data;