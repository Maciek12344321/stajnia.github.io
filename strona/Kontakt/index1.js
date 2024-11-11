document.addEventListener("DOMContentLoaded", function () {
    const hours = {
        1: { elementId: "monday", open: 9, close: 21 },   // Poniedziałek
        2: { elementId: "tuesday", open: 9, close: 21 },  // Wtorek
        3: { elementId: "wednesday", open: 9, close: 21 }, // Środa
        4: { elementId: "thursday", open: 9, close: 21 },  // Czwartek
        5: { elementId: "friday", open: 9, close: 21 },    // Piątek
        6: { elementId: "saturday", open: 9, close: 21 }, // Sobota
        0: { elementId: "sunday", open: 9, close: 21 }      // Niedziela 
    };

    // Pobieranie aktualnej daty i czasu
    const now = new Date();
    const currentDay = now.getDay(); // Zwraca dzień tygodnia (0 = Niedziela, 1 = Poniedziałek, itd.)
    const currentHour = now.getHours();

    // Iteracja po dniach tygodnia
    Object.keys(hours).forEach(day => {
        const dayInfo = hours[day];
        const dayElement = document.getElementById(dayInfo.elementId);
        const statusElement = dayElement.querySelector('.status');

        // Sprawdzanie, czy jest otwarte dla bieżącego dnia
        if (dayInfo.open === 0 && dayInfo.close === 0) {
            statusElement.textContent = "Zamknięte";
            statusElement.classList.add("closed");
        } else {
            if (currentHour >= dayInfo.open && currentHour < dayInfo.close && currentDay == day) {
                statusElement.textContent = "Otwarte";
                statusElement.classList.add("open");
            } else {
                statusElement.textContent = "Zamknięte";
                statusElement.classList.add("closed");
            }
        }

        // Wyróżnienie bieżącego dnia
        if (parseInt(day) === currentDay) {
            dayElement.classList.add("today");
        }
    });
});
