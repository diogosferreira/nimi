console.log("teste");
console.log("teste 2");
console.log("teste 3");


$('h2').attr('text-split', "");
$('h2').attr('letters-slide-up', "");

$('.heading-style-h1').each(function () {
    $(this).attr('text-split', "");
    $(this).attr('letters-slide-up', "");
});

$('.lines-up').each(function () {
    $(this).attr('text-split', "");
    $(this).attr('lines-up', "");
});



window.addEventListener("DOMContentLoaded", (event) => {
    // Split text into spans
    let typeSplit = new SplitType("[text-split]");

    function createScrollTrigger(triggerElement, timeline, start) {
        // Play tl when scrolled into view (100% from top of screen)
        ScrollTrigger.create({
            trigger: triggerElement,
            start: start,
            onEnter: () => timeline.play()
        });
    }


    setTimeout(() => {
        console.log("NOW");

        // LETTERS SLIDE UP
        $("[letters-slide-up]").each(function (index) {
            let tl = gsap.timeline({ paused: true });
            tl.from($(this).find(".char"), { yPercent: 100, opacity: 0, scale: 0, rotation: 0, duration: 1.5, ease: "elastic.inOut(1, 0.3)", stagger: { amount: 0.5 } });
            createScrollTrigger($(this), tl, "top 95%");
        });


        // LETTERS SLIDE UP
        $("[lines-up]").each(function (index) {
            let tl = gsap.timeline({ paused: true });
            tl.from($(this).find(".line"), { yPercent: 100, opacity: 0, scale: .9, rotation: 0, duration: .8, ease: "power3.inOut", stagger: { amount: 0.2 } });
            createScrollTrigger($(this), tl, "top 90%");
        });


        $(".rotate-text:first").removeClass("rotation-on");
        $(".rotate-text:eq(1)").removeClass("rotation-on");


    }, "3200");

    // Avoid flash of unstyled content
    gsap.set("[text-split]", { opacity: 1 });
    //});


});