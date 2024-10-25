const skills = document.querySelectorAll('.skill');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-viewport');
    } else {
      entry.target.classList.remove('in-viewport');
    }
  });
});

skills.forEach((skill) => {
  observer.observe(skill);
});