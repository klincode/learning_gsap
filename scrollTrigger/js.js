gsap.registerPlugin(ScrollTrigger)
gsap.to('.square', {
	x: 700,
	duration: 3,
	scrollTrigger: {
		// scrub: true,
		trigger: '.squarepin',
		toggleActions: 'play none none none',
		//after 400px of viewport
		//start: 400,

		//start:"trigger viewport",
		//top kwadratu spotka się ze środek całego viewportu(nieruchome)
		//start: 'top center',
		//bottom of square meet 20% from top of viewport called scroller-end

		//end: 'bottom 20%',

		//start: 'top center',
		//end kwadratu będzie równe jego szerokości, scroll end domyśłnie będzie tam gdzie scrollstart
		//end:()=>`+=${document.querySelector(".square").offsetHeight}`,
		//toggleClass: 'toggle',

		start: 'top 60%',
		end: 'top 30%',
		pin: '.square',
		//pining

		markers: true,
	},
})
