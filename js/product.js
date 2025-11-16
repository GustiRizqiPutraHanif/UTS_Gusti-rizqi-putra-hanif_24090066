// Data produk
const products = [
    { id: 1, name: "Kopi Gayo", price: 25000, stock: 50 },
    { id: 2, name: "Teh Hitam", price: 18000, stock: 30 },
    { id: 3, name: "Coklat Aceh", price: 30000, stock: 20 }
];

// Format currency untuk Rupiah
function formatCurrency(amount) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(amount);
}

// Fungsi untuk render tabel produk
function renderProductTable() {
    const tableBody = document.getElementById('productTableBody');
    
    if (!tableBody) return;
    
    // Kosongkan tabel terlebih dahulu
    tableBody.innerHTML = '';
    
    // Render setiap produk ke dalam tabel
    products.forEach((product, index) => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${product.name}</td>
            <td>${formatCurrency(product.price)}</td>
            <td>${product.stock}</td>
            <td>
                <div class="action-buttons">
                    <button class="btn-action btn-edit" onclick="editProduct('${product.name}')" title="Edit">
                        ✏️
                    </button>
                    <button class="btn-action btn-delete" onclick="deleteProduct(this, ${product.id})" title="Delete">
                        🗑️
                    </button>
                </div>
            </td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Fungsi untuk edit produk
function editProduct(productName) {
    alert(`Edit produk ${productName}`);
}

// Fungsi untuk delete produk
function deleteProduct(button, productId) {
    // Konfirmasi hapus
    if (confirm("Yakin hapus produk ini?")) {
        // Hapus produk dari array
        const index = products.findIndex(p => p.id === productId);
        if (index !== -1) {
            products.splice(index, 1);
        }
        
        // Hapus baris dari tabel menggunakan DOM remove()
        const row = button.closest('tr');
        if (row) {
            row.remove();
        }
        
        // Re-render tabel untuk update nomor urut
        renderProductTable();
    }
}

// Jalankan saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    renderProductTable();
});

