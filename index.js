
function writeCards(name, event) {
    let newArray =[]
    for (let i = 0; i<name.length; i++) {
         newArray.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`) 
        }
    return newArray;
}
function countDown() {
    let countdown = 0;
while (countdown < 11) {
    console.log(countdown++)
}
}
