// Initialize Marqueefy
const marqueefyList = Array.prototype.slice.call(document.querySelectorAll('.marqueefy'))
const marqueefyInstances = marqueefyList.map(m => {
    return new marqueefy.Marqueefy(m)
})

AOS.init();

function updateSatisfaction(type) {
    
    /* PROF NOTE: Javascript was crashing when checking the boxes because you aren't passing any value when calling updateSatisfaction()
    We can write a conditional to skip the slider related things in that case */
    if (type === 'experience' || type === 'skills') {
        
        const slider = document.getElementById(`${type}-range`);
        const valueElement = document.getElementById(`${type}-value`);
        
        const satisfactionElement = document.getElementById('recruiter-satisfaction');
        
        const sliderValue = parseInt(slider.value);
        let emoji;
        
        console.log("VAL: " + sliderValue);

        if (type === 'experience' || type === 'skills') {
            if (sliderValue <= 1) {
                emoji = '😬'; // Least satisfied
            } else if (sliderValue <= 2) {
                emoji = '🙂';
            } else if (sliderValue <= 3) {
                emoji = '😀';
            } else if (sliderValue <= 4) {
                emoji = '😄';
            } else {
                emoji = '🥰'; // Most satisfied
            }
        }
        
        satisfactionElement.textContent = emoji;
        
        if (type === 'experience') {
            const levels = ['Junior Level', 'Mid-Level', 'Senior Level', 'Senior+', 'Senior++', 'Senior+++'];
            valueElement.textContent = levels[slider.value];
        } else if (type === 'skills') {
            valueElement.textContent = `${slider.value}+`;
        }
        
    }
    else if (type == "checkBox") {
        jsConfetti.addConfetti();
    }
}

const jsConfetti = new JSConfetti();


function goToHackPage() {
    window.location.href = 'hack.html';
}
