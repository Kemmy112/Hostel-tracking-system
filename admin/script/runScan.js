const hamburger = document.querySelector(".toggle-btn");


const toggler = document.querySelector("#iconic");

hamburger.addEventListener("click", function(){
    document.querySelector("#sidebar").classList.toggle("expand")
    toggler.classList.toggle("bx-chevrons-right")
    toggler.classList.toggle("bx-chevrons-left")
})

//Dark mode toggle


//For the camera feed. This will be changed later when the back end is added.

document.addEventListener("DOMContentLoaded", function () {
    const scanner = new Html5QrcodeScanner("qr-reader", { fps: 10, qrbox: 250 });
    const logCard = document.getElementById("logCard");
    const timelineList = document.getElementById("timelineList");
    let logs = [];
    
    scanner.render(successScan, errorScan);
    
    function successScan(decodedText) {
        document.getElementById("scannedInfo").classList.remove("d-none");
        document.getElementById("qrResult").textContent = decodedText;
        
        document.getElementById("checkInBtn").disabled = false;
        document.getElementById("checkOutBtn").disabled = true;
    }
    
    function errorScan(errorMessage) {
        console.log("Scanning error:", errorMessage);
    }
    
    document.getElementById("purposeInput").addEventListener("input", function () {
        const purposeValue = this.value.trim();
        document.getElementById("checkOutBtn").disabled = !purposeValue;
    });
    
    function updateLogs(action, decodedText, purpose) {
        const timestamp = new Date().toLocaleString();
        logs.unshift({ action, decodedText, purpose, timestamp });
        if (logs.length > 10) logs.pop();
        renderLogs();
    }
    
    function renderLogs() {
        logCard.innerHTML = "";
        timelineList.innerHTML = "";
        
        logs.forEach(log => {
            const logEntry = `<div class="card p-2 mb-2 border rounded">
                                <p><strong>Timestamp:</strong> ${log.timestamp}</p>
                                <p><strong>QR Code:</strong> ${log.decodedText}</p>
                                <p><strong>Action:</strong> ${log.action}</p>
                                <p><strong>Purpose:</strong> ${log.purpose || "-"}</p>
                              </div>`;
            logCard.innerHTML += logEntry;
            
            const timelineItem = `<li>${log.timestamp} - ${log.decodedText} (${log.action})</li>`;
            timelineList.innerHTML += timelineItem;
        });
    }
});
    //Still for the qr 
    
