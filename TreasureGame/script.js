document.addEventListener("DOMContentLoaded", function () {
    const grid = document.querySelector(".game-container");
    const resetButton = document.getElementById("reset-button");
    const gridSize = 5; // Adjust grid size as needed
    let treasureLocation = Math.floor(Math.random() * gridSize * gridSize);
    let gameOver = false;

    // Create the game grid
    for (let i = 0; i < gridSize * gridSize; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        grid.appendChild(square);

        square.addEventListener("click", function () {
            if (gameOver) return;

            if (i === treasureLocation) {
                square.style.backgroundColor = "gold";
                square.textContent = "🏆";
                gameOver = true;
                alert("Congratulations! You found the treasure!");
            } else {
                square.style.backgroundColor = "red";
                square.textContent = "❌";
            }
        });
    }

    // Reset the game
    resetButton.addEventListener("click", function () {
        const squares = document.querySelectorAll(".square");
        squares.forEach((square) => {
            square.style.backgroundColor = "#ccc";
            square.textContent = "";
        });

        treasureLocation = Math.floor(Math.random() * gridSize * gridSize);
        gameOver = false;
    });
});
