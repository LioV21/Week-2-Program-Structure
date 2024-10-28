// 3. Write code that creates an 8x8 grid, similar to a chessboard, using alternating spaces and the pound/hashtag symbol (#).
// Hint: There are two distinct alternating patterns here…
// Example Output:
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
for (let row = 0; row < 8; row++) {
    let line = '';
    for (let col = 0; col < 8; col++) {
        line += (row + col) % 2 === 0 ? '#' : ' ';
    }
    console.log(line);
}
