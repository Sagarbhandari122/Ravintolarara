// Function to get the name of the current day
function getDayName(dayIndex) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[dayIndex];
  }
  
  // Function to get the opening hours for today based on the day
  function getOpeningHoursForToday(dayName) {
    const openingHours = {
      "Monday": "10:00 - 22:00",
      "Tuesday": "10:00 - 22:00",
      "Wednesday": "10:00 - 22:00",
      "Thursday": "10:00 - 22:00",
      "Friday": "10:00 - 22:00",
      "Saturday": "11:00 - 23:00",
      "Sunday": "11:00 - 22:00"
    };
  
    return openingHours[dayName] || "Closed";  // Default to "Closed" if no match is found
  }
  
  // Function to update the opening hours text for today
  function updateOpeningHours() {
    const today = new Date();
    const dayIndex = today.getDay();
    const dayName = getDayName(dayIndex);  // Get today's name (e.g., Monday, Tuesday)
    const openingToday = getOpeningHoursForToday(dayName);  // Get the opening hours for today
  
    // Update the content inside the #today-opening span
    const todayText = `${dayName}: ${openingToday}`;
    document.getElementById('today-opening').innerText = todayText;
  }
  
  // Update the opening hours when the page loads
  updateOpeningHours();
  
//Toggle  lunch menu
function toggleMenu(button) {
    const content = button.parentElement.querySelector('.menu-content'); // Get the associated menu-content
    const toggleSymbol = button.querySelector('.toggle-symbol'); // Get the toggle symbol
  
    if (content.style.display === "block") {
      content.style.display = "none"; // Hide content
      toggleSymbol.textContent = "+"; // Change to +
    } else {
      content.style.display = "block"; // Show content
      toggleSymbol.textContent = "-"; // Change to -
    }
  }
  