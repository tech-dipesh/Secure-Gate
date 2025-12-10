let nameValue="Dipesh@89"

// const regx=/^[a-zA-z]{1, 19}+( [a-zA-Z]+)*$/

// console.log(regx.test(nameValue));



// const regex=/[a-zA-Z]{0, 9}+( [A-Za-z]+)*$/
// const regex=/^[a-z][a-z0-9]{3,19}$/
// const regex=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
const regex=/(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}/
// const regex=/^[a-zA-Z]{2,30}( [A-Za-z]{2,30})+$/

console.log(regex.test(nameValue));
