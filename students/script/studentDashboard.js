const hamburger = document.querySelector(".toggle-btn");


const toggler = document.querySelector("#iconic");

hamburger.addEventListener("click", function(){
    document.querySelector("#sidebar").classList.toggle("expand")
    toggler.classList.toggle("bx-chevrons-right")
    toggler.classList.toggle("bx-chevrons-left")
})


document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById("learningChart").getContext("2d");

    let activityData = {
        labels: [], // Time labels
        datasets: [
            {
                label: "Activity Level",
                data: [],
                backgroundColor: "rgba(11, 15, 25, 0.5)", 
                borderColor: "#0b0f19",
                borderWidth: 2,
                fill: true,
            },
        ],
    };

    let learningChart = new Chart(ctx, {
        type: "line",
        data: activityData,
        options: {
            animation: {
                duration: 800, // Smooth animation
            },
            responsive: true,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: "Time",
                    },
                },
                y: {
                    title: {
                        display: true,
                        text: "Activity Score",
                    },
                    min: 0,
                    max: 100,
                },
            },
        },
    });

    function updateChart() {
        let now = new Date();
        let timeLabel = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();

        let newActivityValue = Math.floor(Math.random() * 100); // Random activity score

        if (activityData.labels.length >= 10) {
            activityData.labels.shift();
            activityData.datasets[0].data.shift();
        }

        activityData.labels.push(timeLabel);
        activityData.datasets[0].data.push(newActivityValue);

        learningChart.update();
    }

    setInterval(updateChart, 2000); // Update every 2 seconds
});

    //Check in stats(dummy) & the quotes

    document.addEventListener("DOMContentLoaded", function () {
        let checkInCount = Math.floor(Math.random() * 20) + 10; // Random check-ins between 10 and 30
        let checkOutCount = checkInCount + (Math.random() > 0.5 ? 1 : -1); // Differs by ±1 or remains the same
    
        // Ensure check-outs never exceed check-ins by more than 2
        if (Math.abs(checkInCount - checkOutCount) > 2) {
            checkOutCount = checkInCount;
        }
    
        document.getElementById("checkInCount").textContent = checkInCount;
        document.getElementById("checkOutCount").textContent = checkOutCount;
    
        // Update progress bar based on check-ins (assuming 30 max for this example)
        let checkInPercentage = (checkInCount / 30) * 100;
        let progressBar = document.getElementById("checkInProgress");
        progressBar.style.width = checkInPercentage + "%";
        progressBar.textContent = Math.round(checkInPercentage) + "%";

    
        // Random daily challenge/quote
        const forToday = [
            "You have a working brain and a working heart, use them wisely. 😃",
            "Let who made you define you 🙂",
            "Everything begins at 12:15AM 🌿",
            "Forgive that one person and free your mind! 😎",
            "You won't be the best at everything, but you will be the best at something!😉",
            "Take your time with life, learn the lessons heal and grow ❤"
        ];
        document.getElementById("dailyChallenge").textContent = forToday[Math.floor(Math.random() * forToday.length)];
    
    });


    //Modals display

    document.getElementById("seeProf").addEventListener("click", function() {
        var profileModal = new bootstrap.Modal(document.getElementById("profileModal"));
        profileModal.show();
    });
    
    document.getElementById("logComp").addEventListener("click", function() {
        var complaintModal = new bootstrap.Modal(document.getElementById("complaintModal"));
        complaintModal.show();
    });
    
    document.getElementById("complaintForm").addEventListener("submit", function(event) {
        event.preventDefault();
        let planeIcon = document.getElementById("planeIcon");
        planeIcon.classList.add("flying");
        setTimeout(() => {
            planeIcon.classList.remove("flying");
            alert("Complaint lodged successfully!");
        }, 1000);
    });