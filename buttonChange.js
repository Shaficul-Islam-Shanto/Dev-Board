const discoverBtn= document.getElementById("discover-btn")
discoverBtn.addEventListener("click",function(){
    window.location.href="blog.html"
})

const btnCompleted = document.querySelectorAll(".btn-completed");
const headings = document.querySelectorAll(".heading");

const currentDateElement = document.getElementById("current-date");
if (currentDateElement) {
    const currentDate = new Date();
    currentDateElement.innerText = currentDate.toDateString();
}
for (let i = 0; i < btnCompleted.length; i++) {
    btnCompleted[i].addEventListener("click", function () {
        alert("Board updated Successfully.");

        let taskElement = document.getElementById("task-number");
        let taskNumber = parseInt(taskElement.innerText);
        let totalValue = document.getElementById("total-number");
        let totalNumber = parseInt(totalValue.innerText);

        if (taskNumber > 0) {
            taskNumber -= 1;
            totalNumber += 1;
            taskElement.innerText = taskNumber;
            totalValue.innerText = totalNumber;
        }

        btnCompleted[i].classList.add("disabled");
        btnCompleted[i].disabled = true;
        const heading = headings[i];
        if (heading) {
            const activityInfo = document.getElementById("activity-info");
            const currentDate = new Date();
            const formattedTime = currentDate.toLocaleTimeString();
            const p = document.createElement("p");
            p.innerText = `
            You have completed the task "${heading.innerText}" at ${formattedTime}.
            `;
            p.style.margin="10px";
            activityInfo.appendChild(p);

        }
        const lastButtons = document.querySelectorAll(".btn-completed:not(.disabled)");
        if (lastButtons.length === 0) {
            alert("Congratulations! You have completed all the challenge task.");
        }
    });
} const clearHistoryBtn = document.querySelector(".clear-history-btn");

clearHistoryBtn.addEventListener("click", function () {
    const activityInfo = document.getElementById("activity-info");
    activityInfo.innerHTML = '';
});




