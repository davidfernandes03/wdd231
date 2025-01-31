// For ThankYou Page
document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search);

    document.getElementById("first-name").textContent = params.get("first_name") || "N/A";
    document.getElementById("last-name").textContent = params.get("last_name") || "N/A";
    document.getElementById("email").textContent = params.get("email") || "N/A";
    document.getElementById("phone").textContent = params.get("phone") || "N/A";
    document.getElementById("organization").textContent = params.get("organization") || "N/A";

    let rawTimestamp = params.get("timestamp") || "N/A";
    if (rawTimestamp !== "N/A") {
        let formattedTimestamp = rawTimestamp.replace("T", " ").split(".")[0];
        document.getElementById("timestamp").textContent = formattedTimestamp;
    } else {
        document.getElementById("timestamp").textContent = "N/A";
    }
});