const placeIcons = {
    'Restaurant': 'DINE',
    'Movie': 'FILM',
    'Park': 'PARK',
    'Beach': 'BEACH',
    'Bedroom': 'SUITE',
    'Car Ride': 'DRIVE'
};

function confirmDate() {
    const placeEl = document.querySelector('input[name="place"]:checked');

    if (!placeEl) {
        alert('Please pick a place.');
        return;
    }

    const valentineDate = new Date(new Date().getFullYear(), 1, 14);
    const formattedDate = valentineDate.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    document.getElementById('sumDate').textContent = formattedDate;
    document.getElementById('sumPlace').textContent = placeEl.value;
    document.getElementById('stubIcon').textContent = placeIcons[placeEl.value] || 'DATE';

    document.getElementById('formSection').style.display = 'none';
    document.getElementById('summary').style.display = 'block';
}

function downloadTicket() {
    const ticket = document.getElementById('ticketEl');
    html2canvas(ticket, { scale: 2, useCORS: true, backgroundColor: null }).then(canvas => {
        const link = document.createElement('a');
        link.download = 'valentines-date-ticket.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    });
}
