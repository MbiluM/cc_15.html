document.addEventListener("DOMContentLoaded", () => {
    const riskDashboard = document.getElementById("riskDashboard");
    const riskForm = document.getElementById("riskForm");
    const riskInput = document.getElementById("riskInput");
    const riskLevelInput = document.getElementById("riskLevel");
    const departmentInput = document.getElementById("department");
    const increaseRiskBtn = document.getElementById("increaseRiskLevels");

    console.log("Risk Dashboard Loaded");

    function addRiskItem(riskName, riskLevel, department) {
        const riskCard = document.createElement("div");
        riskCard.classList.add("riskCard");

        updateRiskCard(riskCard, riskName, riskLevel, department);

        riskDashboard.appendChild(riskCard);
    }

    function updateRiskCard(card, riskName, riskLevel, department) {
        card.innerHTML = `
            <h3 class="riskName">${riskName}</h3>
            <p class="riskLevel">Level: ${riskLevel}</p>
            <p class="department">Department: ${department}</p>
            <button class="resolve-btn">Resolve</button>`;

        switch (riskLevel.toLowerCase()) {
            case "low":
                card.style.backgroundColor = "green";
                card.style.color = "black";
                break;
            case "medium":
                card.style.backgroundColor = "yellow";
                card.style.color = "black";
                break;
            case "high":
                card.style.backgroundColor = "red";
                card.style.color = "black";
                break;
            default:
                card.style.backgroundColor = "gray";
                card.style.color = "black";
        }

        // Add event listener to remove risk card
        card.querySelector(".resolve-btn").addEventListener("click", () => {
            card.remove();
        });
    }

    riskForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const riskName = riskInput.value.trim();
        const riskLevel = riskLevelInput.value;
        const department = departmentInput.value.trim();

        if (riskName && riskLevel && department) {
            addRiskItem(riskName, riskLevel, department);
            riskInput.value = "";
            riskLevelInput.value = "";
            departmentInput.value = "";
        }
    });

    function increaseRiskLevels() {
        document.querySelectorAll(".riskCard").forEach((card) => {
            let riskLevelElement = card.querySelector(".riskLevel");
            let currentLevel = riskLevelElement.textContent.replace("Level: ", "").trim();

            let newLevel = currentLevel;
            if (currentLevel.toLowerCase() === "low") newLevel = "Medium";
            else if (currentLevel.toLowerCase() === "medium") newLevel = "High";

            riskLevelElement.textContent = `Level: ${newLevel}`;
            updateRiskCard(
                card,
                card.querySelector(".riskName").textContent,
                newLevel,
                card.querySelector(".department").textContent.replace("Department: ", "").trim()
            );
        });
    };

    // Event listener for bulk update button
    increaseRiskBtn.addEventListener("click", increaseRiskLevels);

    // Test Cases
    addRiskItem("Employee Retention", "Low", "HR");
    addRiskItem("Cybersecurity Threat", "High", "IT");
    addRiskItem("Budget Cuts", "Medium", "Finance");
});
