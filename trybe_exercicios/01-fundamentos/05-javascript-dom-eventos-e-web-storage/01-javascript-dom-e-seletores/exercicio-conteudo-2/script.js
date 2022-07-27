const headerTitle = document.getElementById("header-container");
headerTitle.style.backgroundColor = "green";

const emergencyTasks = document.querySelectorAll(".emergency-tasks h3");

for (let i = 0; i < emergencyTasks.length; i += 1) {
  emergencyTasks[i].style.backgroundColor = "purple";
}

const noEmergencyTasks = document.querySelectorAll(".no-emergency-tasks h3");

for (let i = 0; i < noEmergencyTasks.length; i += 1) {
  noEmergencyTasks[i].style.backgroundColor = "orange";
}

const emergencyTasksBackground =
  document.getElementsByClassName("emergency-tasks")[0];
emergencyTasksBackground.style.backgroundColor = "pink";

const noEmergencyTasksBackground =
  document.getElementsByClassName("no-emergency-tasks")[0];
noEmergencyTasksBackground.style.backgroundColor = "grey";

const footerContainer = document.getElementById("footer-container");
footerContainer.style.backgroundColor = "green";
