// 1. Write code to display a triangle in the console that looks similar to the following.
// You should use a loop to accomplish this.
// #
// ##
// ###
// ####
// ###
// ##
// #
let triangle = '';
for (let i = 1; i <= 7; i++) {
    let level = i <= 4 ? i : 8 - i;  
    triangle += '#'.repeat(level) + '\n';
}
console.log(triangle);
