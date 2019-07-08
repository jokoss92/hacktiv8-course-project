/*
  ////////////
  Tiket Konser
  ////////////

  Buatlah suatu algoritma untuk pembelian tiket konser.

  [INSTRUCTIONS]
    1. Peserta konser akan membeli berdasarkan uang yang dia miliki, dan asumsi
       akan memilih harga yang paling mahal.
    2. Apabila peserta konser memiliki uang yang lebih rendah dari tiket konser,
       maka dia akan pulang ke rumah.
    3. Harga jenis kursi konser, antara lain:
      - VVIP 1000000
      - VIP  700000
      - Reguler 300000
    4. Apabila membeli tiket, tampilkan dalam format [nama]-[jenis kursi] dan [kembalian]

  [RULES]
    1. Hanya tulis Algoritma saja
*/

// type here
1. Set 'nama' untuk pembeli
2. Set 'uang' untuk pembeli
3. Jika 'uang' pembeli lebih besar sama dengan 1000000 maka set 'jenis kursi' menjadi VVIP
4. Jika 'uang' pembeli kurang dari 1000000 tapi lebih besar atau sama dengan 700000 maka set 'jenis kursi' menjadi VIP
4. Jika 'uang' pembeli kurang dari 700000 tapi lebih besar atau sama dengan 300000 maka set 'jenis kursi' menjadi Reguler
5. Jika 'uang' pembeli kurang dari 300000 maka pembeli pulang ke rumah
6. Hitung 'kembalian', dengan cara mengurangi 'uang' pembeli dengan harga tiket berdasarkan 'jenis kursi'
7. Tampilkan ['nama']-['jenis kursi']-['kembalian']