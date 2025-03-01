const btnCompleted = document.querySelectorAll(".btn-completed");

const totalNumber = document.getElementById("total-number");

for (let btn of btnCompleted) {
    btn.addEventListener("click", function () {
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
        btn.classList.add("disabled");
    })

}
