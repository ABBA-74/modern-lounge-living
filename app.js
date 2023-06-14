const textSection2 = new SplitType('.s2 .description p', { types: 'words' });
const textSection3 = new SplitType('.s3 .description p', { types: 'words' });
// console.log(text.words);
let tl = gsap.timeline();

new fullpage('#fullpage', {
  autoScrolling: true,
  navigation: true,
  onLeave: (origin, destination, direction) => {
    tl.clear();
    const section = destination.item;
    console.log(section);
    const title = section.querySelector('h1');
    const subTitle = section.querySelector('h2');
    console.log(title);
    tl.from(title, {
      duration: 0.5,
      y: -100,
      opacity: 0,
      ease: 'power3',
      delay: 0.5,
    });

    if (destination.index === 0) {
      tl.from(subTitle, {
        duration: 0.5,
        y: '-2.5rem',
        opacity: 0,
        ease: 'power3',
      });
    }
    if (destination.index === 1) {
      const chairs = document.querySelectorAll('.chair-v1');
      const descriptionSection2 = document.querySelector('.s2 .description');
      tl.fromTo(
        textSection2.words,
        { y: '2rem', opacity: 0 },
        { duration: 0.5, y: 0, opacity: 1, stagger: 0.009 }
      );
      tl.fromTo(chairs, 0.6, { x: '100%' }, { x: '-38%' });
      tl.fromTo(chairs[0], 0.8, { opacity: '1' }, { opacity: '1' });
      tl.fromTo(chairs[1], 0.8, { opacity: '0' }, { opacity: '1' });
      tl.fromTo(chairs[2], 0.8, { opacity: '0' }, { opacity: '1' });
    }
    if (destination.index === 2) {
      const chairs = document.querySelectorAll('.chair-v2');
      const descriptionSection3 = document.querySelector('.s3 .description');
      tl.fromTo(
        textSection3.words,
        { y: '2rem', opacity: 0 },
        { duration: 0.5, y: 0, opacity: 1, stagger: 0.009 }
      );
      tl.fromTo(chairs, 0.6, { x: '-200%' }, { x: '-78%' });
      tl.fromTo(chairs[0], 0.8, { opacity: '1' }, { opacity: '1' });
      tl.fromTo(chairs[1], 0.8, { opacity: '0' }, { opacity: '1' });
      tl.fromTo(chairs[2], 0.8, { opacity: '0' }, { opacity: '1' });
    }
  },
});
