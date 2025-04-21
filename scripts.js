let relaisStates = {
    1: false, 2: false, 3: false, 4: false,
    5: false, 6: false, 7: false, 8: false
};

function toggleRelay(num) {
    relaisStates[num] = !relaisStates[num];

    const statusText = document.getElementById(`status_relais${num}`);
    const button = document.getElementById(`relais${num}`);

    if (relaisStates[num]) {
        statusText.textContent = "Activé";
        button.style.backgroundColor = "#dc3545";
    } else {
        statusText.textContent = "Désactivé";
        button.style.backgroundColor = "#007BFF";
    }

    console.log(`Relais ${num} est maintenant ${relaisStates[num] ? "activé" : "désactivé"}`);
}

function scheduleRelay() {
    const relais = parseInt(document.getElementById("relais_schedule").value);
    const time = document.getElementById("time_schedule").value;

    if (!time) {
        alert("Veuillez choisir une heure.");
        return;
    }

    const now = new Date();
    const [hour, minute] = time.split(':');
    const scheduledTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hour, minute, 0);

    let delay = scheduledTime.getTime() - now.getTime();

    if (delay < 0) {
        alert("L'heure choisie est déjà passée.");
        return;
    }

    alert(`Relais ${relais} sera activé à ${time}`);

    setTimeout(() => {
        toggleRelay(relais);
        alert(`Relais ${relais} a été activé à l’heure prévue.`);
    }, delay);
}