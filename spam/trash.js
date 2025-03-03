document.addEventListener("DOMContentLoaded", function () {
    const rooms = [
        { number: "016", floor: "First Floor", occupants: 3, status: "Occupied" },
        { number: "027", floor: "Ground Floor", occupants: 3, status: "Occupied" },
        { number: "015", floor: "Ground Floor", occupants: 2, status: "Partially Filled" },
        { number: "047", floor: "Second Floor", occupants: 0, status: "Available" }
    ];

    const students = [
        { id: "202300000001", name: "Mary Moses" },
        { id: "202300000002", name: "John Doe" },
        { id: "202300000003", name: "Sarah Brown" }
    ];

    const roomSelect = document.getElementById("roomNumber");
    const studentIdInput = document.getElementById("studentIdInput");
    const studentNameSpan = document.getElementById("studentName");
    const floorNumberSpan = document.getElementById("floorNumber");
    const currentOccupantsSpan = document.getElementById("currentOccupants");

    // Populate room dropdown with available rooms
    function loadAvailableRooms() {
        roomSelect.innerHTML = '<option value="">Select Room</option>';
        rooms.forEach(room => {
            if (room.occupants < 3) { // Only show rooms with space available
                const option = document.createElement("option");
                option.value = room.number;
                option.textContent = `Room ${room.number} - ${room.floor}`;
                option.dataset.floor = room.floor;
                option.dataset.occupants = room.occupants;
                roomSelect.appendChild(option);
            }
        });
    }

    // Auto-fill student name when ID is entered
    studentIdInput.addEventListener("input", function () {
        const student = students.find(s => s.id === studentIdInput.value);
        studentNameSpan.textContent = student ? student.name : "-";
    });

    // Update room details when a room is selected
    roomSelect.addEventListener("change", function () {
        const selectedOption = roomSelect.options[roomSelect.selectedIndex];
        floorNumberSpan.textContent = selectedOption.dataset.floor || "-";
        currentOccupantsSpan.textContent = selectedOption.dataset.occupants || "-";
    });

    // Handle form submission (Assign Room)
    document.getElementById("assignRoomForm").addEventListener("submit", function (event) {
        event.preventDefault();
        
        document.getElementById("assignRoomForm").reset(); // Reset form
        const studentId = studentIdInput.value;
        studentNameSpan.textContent = "-";
        floorNumberSpan.textContent = "-";
        currentOccupantsSpan.textContent = "-";

        
        if (!studentId || !roomNumber || !assignmentDate) {
            alert("Please fill all required fields.");
            return;
        }

        // Find the selected room
        const room = rooms.find(r => r.number === roomNumber);

        if (room.occupants >= 3) {
            alert("This room is already full!");
            return;
        }

        // Update room details
        room.occupants++;
        if (room.occupants === 3) room.status = "Occupied";
        else room.status = "Partially Filled";

        alert(`Room ${room.number} assigned to Student ${studentId}.`);

        // Close the modal
        const assignRoomModal = bootstrap.Modal.getInstance(document.getElementById("assignRoomModal"));
        if (assignRoomModal) {
            assignRoomModal.hide();
        }
    }); // <-- 🔹 Closing brace for form submit event listener

    // Ensure modal is loaded with fresh data when opened
    document.getElementById("assignRoomModal").addEventListener("show.bs.modal", function () {
        loadAvailableRooms();
        studentIdInput.value = "";
        studentNameSpan.textContent = "-";
        floorNumberSpan.textContent = "-";
        currentOccupantsSpan.textContent = "-";
    });

}); // <-- 🔹 Closing brace for DOMContentLoaded event listener
