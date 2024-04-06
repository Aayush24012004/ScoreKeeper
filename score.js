const p1Score = document.querySelector("#p1Score");
const p2Score = document.querySelector("#p2Score");
const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const reset = document.querySelector("#reset");
const select = document.querySelector("#playTo");
let p1ScoreTrack = 0;
let p2ScoreTrack = 0;
let winScore = 3;
let isGameOver = false;
p1Button.addEventListener("click", (e) => {
  if (isGameOver !== true) {
    p1ScoreTrack += 1;
  }
  if (p1ScoreTrack === winScore) {
    isGameOver = true;
    p1Score.classList.add("winner");
    p2Score.classList.add("loser");
    p1Button.disabled = true;
    p2Button.disabled = true;
  }
  p1Score.textContent = p1ScoreTrack;
});
p2Button.addEventListener("click", (e) => {
  if (isGameOver !== true) {
    p2ScoreTrack += 1;
  }
  if (p2ScoreTrack === winScore) {
    isGameOver = true;
    p2Score.classList.add("winner");
    p1Score.classList.add("loser");
    p1Button.disabled = true;
    p2Button.disabled = true;
  }
  p2Score.textContent = p2ScoreTrack;
});
reset.addEventListener("click", () => {
  resetfunc();
  winScore = 3;
  select.value = 3;
});
function resetfunc() {
  p1Score.textContent = 0;
  p2Score.textContent = 0;
  p1ScoreTrack = 0;
  p2ScoreTrack = 0;
  isGameOver = false;
  p1Score.classList.remove("loser", "winner");
  p2Score.classList.remove("winner", "loser");
  p1Button.disabled = false;
  p2Button.disabled = false;
}
select.addEventListener("change", (e) => {
  winScore = parseInt(select.value);
  resetfunc();
});
