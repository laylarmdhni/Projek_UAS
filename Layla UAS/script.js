// Dummy data buku
const books = [
    { title: "Laskar Pelangi", author: "Andrea Hirata" },
    { title: "Bumi", author: "Tere Liye" },
    { title: "Hujan", author: "Tere Liye" },
    { title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling" },
    { title: "The Alchemist", author: "Paulo Coelho" },
    { title: "Pemrograman Web Untuk Pemula", author: "Jon Duckett" },
    { title: "Dasar-dasar Jaringan komputer", author: "William Stallings"},
    { title: "Teknologi Blockchain: Dasar dan Implementasi", author: "Chris Sanders"},
    { title: "Kecerdasan Buatan dalam Dunia Nyata", author: "Stuart Russell dan Peter Norvig"},
    { title: "Ensiklopedia ilmu pengetahuan", author: "Isaac Asimov"},
    { title: "Sejarah Dunia", author: "Yuval Noah Harari"},
    { title: "Kamus Lengkap Bahasa Inggris", author: "Peter Frankopan"},
    { title: "Geografi Dunia", author: "Harm De Blij, Peter O. Muller, and Jan Nijman"},
    { title: "Panduan Pemrograman python", author: "Eric Matthes"},
    { title: "E-commerce untuk pemula", author: "Brad Stone"},
    { title: "Dasar-dasar Web Development", author: "Jon Duckett"},
    { title: "Kepemimpinan dalam bisnis", author: "ohn C. Maxwell"},
    { title: "Keamanan Jaringan Komputer", author: "Andrew S. Tanenbaum"},
    { title: "Misteri Bintang Jatuh", author: "Adi Saputra"},
    { title: "Rahasia Hutan Cahaya", author: "Nisa Mahardika"},
    { title: "Jejak Sang Penjelajah", author: "Fahmi Nugraha"},
    { title: "Legenda Lautan Biru", author: "Reza Alindra"},
    { title: "Lembah Seribu Bayangan", author: "Lembah Seribu Bayangan"},
    { title: "Anak Bintang dan Kapsul Waktu", author: "Dewi Kartika"},
    { title: "Di Balik Tirai Aurora", author: "Fajar Santoso"},
    { title: "Pangeran Tanpa Mahkota", author: " Rizky Ananda"},
    { title: "Rahasia Danau Biru", author: "Melati Anggraeni"},
    { title: "Analisis Data dengan R", author: "Hadley Wickham dan Garrett Grolemund"},
    { title: "Legenda Timun Mas", author: " Rahmah Asa"},
    { title: "Kancil dan Buaya", author: "Siento Soemiati Soetjipto"},
    { title: "Bawang Merah dan Bawang Putih", author: "Yudhistira Ikranegara"},
    { title: "Si Malin Kundang", author: "Aryasatya Ikranegara"},
    { title: "Pengantar Sistem Operasi", author: "Satrio Yudho, S.Kom., M.TI"},
  ];
  
  // Untuk mencari buku berdasarkan judul atau penulis
function searchBooks(query) {
  return books.filter(
    (book) =>
      book.title.toLowerCase().includes(query.toLowerCase()) ||
      book.author.toLowerCase().includes(query.toLowerCase())
  );
}

// Event listener untuk tombol pencarian
document.getElementById("search-button").addEventListener("click", () => {
  const query = document.getElementById("search-input").value.trim().toLowerCase();
  const resultsContainer = document.getElementById("search-results");
  resultsContainer.innerHTML = "";

  if (query === "") {
    // Jika input kosong
    resultsContainer.innerHTML = "<p class='text-yellow-500'>Penulis dan Judul belum diisi. Silakan masukkan judul atau penulis buku.</p>";
  } else {
    const results = searchBooks(query);

    if (results.length > 0) {
      results.forEach((book) => {
        const bookElement = document.createElement("div");
        bookElement.classList.add("p-4", "border", "border-gray-300", "rounded-lg", "mb-4");
        bookElement.innerHTML = `<h3 class="text-lg font-bold">${book.title}</h3><p class="text-gray-600">Penulis: ${book.author}</p>`;
        resultsContainer.appendChild(bookElement);
      });
    } else {
      resultsContainer.innerHTML = "<p class='text-red-500'>Buku tidak ditemukan.</p>";
    }
  }
});


// untuk pie chart //
  // Data untuk Pie Chart Jenis Kelamin
  const genderCtx = document.getElementById('genderChart').getContext('2d');
  const genderChart = new Chart(genderCtx, {
    type: 'pie',
    data: {
      labels: ['Laki-laki', 'Perempuan'],
      datasets: [{
        label: 'Jenis Kelamin Anggota',
        data: [2, 2], // Data untuk laki-laki dan perempuan
        backgroundColor: ['#C0C0C0', '#FFC0CB'],
        borderColor: ['#FFFFFF', '#FFFFFF'],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        tooltip: {
          callbacks: {
            label: function(tooltipItem) {
              return tooltipItem.label + ': ' + tooltipItem.raw;
            }
          }
        }
      }
    }
  });

  // Data untuk Pie Chart Daerah
  const regionCtx = document.getElementById('regionChart').getContext('2d');
  const regionChart = new Chart(regionCtx, {
    type: 'pie',
    data: {
      labels: ['Jakarta', 'Serang', 'Cilegon', 'Tanggerang'], // Daerah
      datasets: [{
        label: 'Daerah Anggota',
        data: [1, 1, 1, 1], // Data untuk masing-masing daerah
        backgroundColor: ['#FFC0CB', '#808080', '		#FF00FF', '#000000'],
        borderColor: ['	#FFFFFF', '	#FFFFFF', '	#FFFFFF', '#7B1FA2'],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        tooltip: {
          callbacks: {
            label: function(tooltipItem) {
              return tooltipItem.label + ': ' + tooltipItem.raw;
            }
          }
        }
      }
    }
  });