document.addEventListener('DOMContentLoaded', function () {
    // Initialize Locomotive Scroll
    const scroll = new LocomotiveScroll({
        el: document.querySelector('main'),
        smooth: true
    });

    // Shery.js animations
    Shery.textAnimate("#headings h1", {
        style: 2,
        y: 10,
        delay: 0.7,
        duration: 0.5,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        multiplier: 0.1,
    });

    Shery.textAnimate("#btext h1", {
        style: 3,
        y: 10,
        delay: 1,
        duration: 0.5,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        multiplier: 0.1,
    });

    // Image effects
    const imageEffects = [
        { selector: "#imga img", style: 3, config: { "uFrequencyX": { "value": 8.4, "range": [0, 100] }, "uFrequencyY": { "value": 4.58, "range": [0, 100] }, "uFrequencyZ": { "value": 33.59, "range": [0, 100] }, "geoVertex": { "range": [1, 64], "value": 22.64 }, "zindex": { "value": "1", "range": [-9999999, 9999999] }, "aspect": { "value": 0.75 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": -0.02, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.51 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": false }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.37, "range": [1, 5] }, "scrollType": { "value": 0 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 1 }, "noise_speed": { "value": 0.2, "range": [0, 10] }, "metaball": { "value": 0.2, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0.002, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] } } },
        { selector: "#susimagewrapper img", style: 5, config: { "a": { "value": 2.75, "range": [0, 30] }, "b": { "value": 0.25, "range": [-1, 1] }, "zindex": { "value": 1, "range": [-9999999, 9999999] }, "aspect": { "value": 0.6666666666666666 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": false }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.46, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 0 }, "noise_speed": { "value": 0.2, "range": [0, 10] }, "metaball": { "value": 0.2, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0.002, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] } } },
        { selector: ".imgg img", style: 5, config: { "a": { "value": 1.83, "range": [0, 30] }, "b": { "value": 0.66, "range": [-1, 1] }, "zindex": { "value": 1, "range": [-9999999, 9999999] }, "aspect": { "value": 0.6153846247896874 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": false }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.27, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 1 }, "noise_speed": { "value": 0.2, "range": [0, 10] }, "metaball": { "value": 0.2, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0.002, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] } } },
    ];

    imageEffects.forEach(effect => {
        Shery.imageEffect(effect.selector, {
            style: effect.style,
            config: effect.config
        });
    });

    // GSAP animations
    gsap.from(".ani2", {
        y: 50,
        stagger: 0.3,
        duration: 0.8,
        ease: "expo.out",
        opacity: 0,
    });

    gsap.from("#imga img", {
        z: 7,
        opacity: 0,
        duration: 1.5,
        ease: "expo.out",
    });
});

Shery.imageEffect("#bimg", {
    style: 4,
    config: { "uColor": { "value": true }, "uSpeed": { "value": 0.33, "range": [0.1, 1], "rangep": [1, 10] }, "uAmplitude": { "value": 1.11, "range": [0, 5] }, "uFrequency": { "value": 1.45, "range": [0, 10] }, "geoVertex": { "range": [1, 64], "value": 16.87 }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 1.7463618017616764 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": true }, "infiniteGooey": { "value": true }, "growSize": { "value": 1.53, "range": [1, 15] }, "durationOut": { "value": 1.15, "range": [0.1, 5] }, "durationIn": { "value": 1.26, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": false }, "maskVal": { "value": 1, "range": [1, 5] }, "scrollType": { "value": 0 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 0 }, "noise_speed": { "value": 0.92, "range": [0, 10] }, "metaball": { "value": 0.2, "range": [0, 2], "_gsap": { "id": 30 } }, "discard_threshold": { "value": 0.49, "range": [0, 1] }, "antialias_threshold": { "value": 0, "range": [0, 0.1] }, "noise_height": { "value": 0.37, "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] } },
    gooey: true,
});

document.querySelector("#ftext button").addEventListener("mouseover", function () {
    gsap.to("#future video", {
        opacity: 1,
        duration: 1,
        ease: Power4

    })
});

document.querySelector("#ftext button").addEventListener("mouseleave", function () {
    gsap.to("#future video", {
        opacity: 0,
        duration: 1,
        ease: Power4

    })
});