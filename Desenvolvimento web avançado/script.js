import drivers from './drivers.js';

const selectPilotOne = document.getElementById("pilotOne");
const selectPilotTwo = document.getElementById("pilotTwo");
const selectPilotThree = document.getElementById("pilotThree");
const selectPilotFour = document.getElementById("pilotFour");
const selectPilotFive = document.getElementById("pilotFive");

const listarPilotos = () => {
    drivers.forEach(pilot => {
        const option = document.createElement("option");
        if(pilot.selecionado == false){
            option.text = pilot.name;
            option.value = pilot.name;
            option.dataset.number = pilot.number;
            option.dataset.carUrl = pilot.carUrl;
    
            const optionClone = option.cloneNode(true);
        
            selectPilotOne.appendChild(optionClone);
            selectPilotTwo.appendChild(option.cloneNode(true));
            selectPilotThree.appendChild(option.cloneNode(true));
            selectPilotFour.appendChild(option.cloneNode(true));
            selectPilotFive.appendChild(option.cloneNode(true));
        }
    });
}
listarPilotos()


const button = document.getElementById("buttonRun")

button.addEventListener('click', () => {
    
    const selectedPilots = [
        {
            name: selectPilotOne.value,
            number: selectPilotOne.selectedOptions[0].dataset.number,
            car: selectPilotOne.selectedOptions[0].dataset.carUrl
        },
        {
            name: selectPilotTwo.value,
            number: selectPilotTwo.selectedOptions[0].dataset.number,
            car: selectPilotTwo.selectedOptions[0].dataset.carUrl
        },
        {
            name: selectPilotThree.value,
            number: selectPilotThree.selectedOptions[0].dataset.number,
            car: selectPilotThree.selectedOptions[0].dataset.carUrl
        },
        {
            name: selectPilotFour.value,
            number: selectPilotFour.selectedOptions[0].dataset.number,
            car: selectPilotFour.selectedOptions[0].dataset.carUrl
        },
        {
            name: selectPilotFive.value,
            number: selectPilotFive.selectedOptions[0].dataset.number,
            car: selectPilotFive.selectedOptions[0].dataset.carUrl
        },
    ];

    localStorage.setItem('selectedPilots', JSON.stringify(selectedPilots));
    localStorage.setItem('saldo', 100)

    window.location.href = 'index.html';
});

// document.querySelectorAll('.drivers select').forEach(select => {
//     select.addEventListener('change', (event) => {

//         console.log(event.target.value)
//         drivers.forEach(pilot => {
//             if(pilot.name == event.target.value){
//                 pilot.selecionado = true
//                 listarPilotos()
//             }
//         })
//     });
// });
