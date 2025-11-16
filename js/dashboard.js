// Dummy data untuk dashboard
const summary = {
    totalProducts: 120,
    totalSales: 85,
    totalRevenue: 12500000
};

// Format currency untuk Rupiah
function formatCurrency(amount) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(amount);
}

// Fungsi untuk menampilkan data ke dashboard
function displayDashboardData() {
    // Update Total Products
    const totalProductsEl = document.getElementById('totalProducts');
    if (totalProductsEl) {
        totalProductsEl.textContent = summary.totalProducts;
    }

    // Update Total Sales
    const totalSalesEl = document.getElementById('totalSales');
    if (totalSalesEl) {
        totalSalesEl.textContent = summary.totalSales;
    }

    // Update Total Revenue
    const totalRevenueEl = document.getElementById('totalRevenue');
    if (totalRevenueEl) {
        totalRevenueEl.textContent = formatCurrency(summary.totalRevenue);
    }
}

// Jalankan saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    displayDashboardData();
});

