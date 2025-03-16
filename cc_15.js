document.addEventListener("DOMContentLoaded", () => {
    const riskDashboard = document.getElementById("riskDashboard");
    const riskForm = document.getElementById("riskForm");
    const riskInput = document.getElementById("riskInput");
    const riskLevelInput = document.getElementById("riskLevel");
    const departmentInput = document.getElementById("department");
    console.log("Risk Dashboard Loaded");

    function addRiskItem(riskName, riskLevel, department) {
        const riskCard = document.createElement("div");
        riskCard.classList.add("riskCard");
    
        riskCard.innerHTML = `
            <h3>${riskName}</h3>
            <p>Level: ${riskLevel}</p>
            <p>Department: ${department}</p>
            <button class="resolve-btn">Resolve</button>`;

        riskCard.querySelector(".resolve-btn").addEventListener("click", () => {
            riskCard.remove();
        });

        riskDashboard.appendChild(riskCard);
    }
    riskForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const riskName = riskInput.value.trim();
        const riskLevel = riskLevelInput.value;
        const department = departmentInput.value.trim();

        if (riskName && riskLevel && department) {
            addRiskItem(riskName, riskLevel, department);
            riskInput.value = "";
            departmentInput.value = "";
        }
    })
    addRiskItem("Data Breach", "High", "IT");
    addRiskItem("Supply Chain Disruption", "Medium", "Operations");
});
