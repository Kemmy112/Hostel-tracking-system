const hamburger = document.querySelector(".toggle-btn");


const toggler = document.querySelector("#iconic");

hamburger.addEventListener("click", function(){
    document.querySelector(".sidebar").classList.toggle("expand")
    toggler.classList.toggle("bx-chevrons-right")
    toggler.classList.toggle("bx-chevrons-left")
})


// This is for searching rooms. These ids are spans in the html so however you will do your work.

document.getElementById("searchBtn").addEventListener("click", function () {
    let roomInput = document.getElementById("searchRoomNumber").value.trim();
    let floorInput = document.getElementById("searchFloor").value;
    let roomCards = document.querySelectorAll(".room-card");

    roomCards.forEach((card) => {
        let roomNumber = card.getAttribute("data-room");
        let floorNumber = card.getAttribute("data-floor");

        // Check if inputs match (or are empty for a broader search)
        if (
            (roomInput === "" || roomNumber.includes(roomInput)) &&
            (floorInput === "" || floorNumber === floorInput)
        ) {
            card.style.display = "block"; // Show matching rooms
        } else {
            card.style.display = "none"; // Hide non-matching rooms
        }
    });
});



// Room data (can later be fetched from backend)

//This is a dummy database.
const rooms = [
    { number: "016", floor: "First Floor", occupants: 3, status: "Occupied" },
    { number: "027", floor: "Ground Floor", occupants: 3, status: "Occupied" },
    { number: "015", floor: "Ground Floor", occupants: 2, status: "Partially Filled" },
    { number: "047", floor: "Second Floor", occupants: 0, status: "Available" },
    { number: "012", floor: "First Floor", occupants: 1, status: "Partially Filled" },
    { number: "032", floor: "Second Floor", occupants: 2, status: "Partially Filled" },
    { number: "031", floor: "Third Floor", occupants: 0, status: "Available" },
    { number: "053", floor: "Third Floor", occupants: 3, status: "Occupied" }
];

// Search button event listener
document.getElementById("searchBtn").addEventListener("click", function () {
    const searchRoomNumber = document.getElementById("searchRoomNumber").value.trim();
    const searchFloor = document.getElementById("searchFloor").value.trim().toLowerCase();

    // Find room based on number & floor (case-insensitive)
    const foundRoom = rooms.find(room => 
        room.number === searchRoomNumber && room.floor.toLowerCase() === searchFloor
    );

    if (foundRoom) {
        displayRoomInfo(foundRoom);
    } else {
        alert("Room not found! Please check the details and try again.");
        document.getElementById("roomInfo").classList.add("d-none"); // Hide if not found
    }
});

// Function to update and show the room card dynamically
function displayRoomInfo(room) {
    if (!room) return;

    document.getElementById("roomNumber").textContent = room.number;
    document.getElementById("roomFloor").textContent = room.floor;
    document.getElementById("roomOccupants").textContent = `${room.occupants}/3`; // Show max occupancy
    document.getElementById("roomStatus").textContent = room.status;

    // Show the room info card
    document.getElementById("roomInfo").classList.remove("d-none");
}

// Clear button logic - Reset inputs and hide card
document.getElementById("clearSearchBtn").addEventListener("click", function () {
    document.getElementById("searchRoomNumber").value = "";
    document.getElementById("searchFloor").value = "";
    document.getElementById("roomInfo").classList.add("d-none");
});


//Assign Room fxnality

document.getElementById("assignRoomForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let id = document.getElementById("studentIdInput").value.trim();
    let room = document.getElementById("roomNumber").value.trim();
    let date = document.getElementById("assignmentDate").value.trim();
    let notes = document.getElementById("notes").value.trim();

    if (id.length !== 10 || isNaN(id)) {
        alert("Student ID must be exactly 10 digits!");
        return;
    }

    if (date && id && room && notes) {
        let newRoom = {
            id: id,
            room: room,
            date: date,
            notes: notes
        };

        students.push(newRoom); // Assuming `students` is the list of all students
        alert("Student Added Successfully!");

        document.getElementById("assignRoomForm").reset(); // Clear form

        let modal = new bootstrap.Modal(document.getElementById("assignRoomModal"));
        modal.hide(); // Close modal after submission
    } else {
        alert("Please fill out all fields!");
    }
});
