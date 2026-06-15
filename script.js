const provinces = ["DKI Jakarta", "Jawa Barat", "Jawa Timur", "DI Yogyakarta", "Banten", "Sumatera Utara", "Sumatera Selatan", "Kalimantan Timur", "Sulawesi Selatan", "Bali"];
const umkValues = [4901799, 1986702, 2040944, 1980674, 2527033, 2713493, 3344447, 3176177, 3231180, 2746289];


const ctxBar = document.getElementById('barChartUmk').getContext('2d');
new Chart(ctxBar, {
    type: 'bar',
    data: {
        labels: provinces,
        datasets: [{
            label: 'Upah Minimum Provinsi (Rp)',
            data: umkValues,
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            tooltip: { enabled: true }, 
            legend: { position: 'top' },
        }
    }
});