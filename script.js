// Initialize Marqueefy
const marqueefyList = Array.prototype.slice.call(document.querySelectorAll('.marqueefy'))
const marqueefyInstances = marqueefyList.map(m => {
  return new marqueefy.Marqueefy(m)
})