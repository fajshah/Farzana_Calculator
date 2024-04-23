#! /usr/bin/env node
import inquirer from "inquirer";
let Zakaatpercentage = 2.5;
let zakaatTolaThreshold = 7.5;
let goldvalueInAmountPerTola = 234800;
const zakaatWeight = await inquirer.prompt([{
        message: "Enter Gold Weight in Tola",
        name: "zakaatWeight",
        type: "number"
    }
]);
if (zakaatWeight.zakaatWeight >= zakaatTolaThreshold) {
    let zakaatApplicableAmount = (zakaatWeight.zakaatWeight * goldvalueInAmountPerTola) * (Zakaatpercentage / 100);
    console.log(`the total amount of zakaat will be Rs=${zakaatApplicableAmount}/ 
    for ${zakaatWeight.zakaatWeight} tola`);
}
else {
    console.log(`Zakaat is  not applicable for ${zakaatWeight.zakaatWeight} tola`);
}
