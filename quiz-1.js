class Karyawan {
  constructor(nama, gaji) {
    this.nama = nama;
    this.gaji = gaji;
  }

  hitungBonus() {
    return 0;
  }
}

class Karyawan_Tetap extends Karyawan {
  hitungBonus() {
    return this.gaji * 0.10; // 10%
  }
}

class Karyawan_Kontrak extends Karyawan {
  hitungBonus() {
    return this.gaji * 0.05; // 5%
  }
}

const budi = new Karyawan_Tetap("Budi", 8000000);
const sita = new Karyawan_Kontrak("Sita", 6000000);

const bonusBudi = budi.hitungBonus();
const bonusSita = sita.hitungBonus();

const totalBonus = bonusBudi + bonusSita;

console.log(`Bonus ${budi.nama} = Karyawan Tetap   Rp ${bonusBudi.toLocaleString('id-ID')}`);
console.log(`Bonus ${sita.nama} = Karyawan Kontrak Rp ${bonusSita.toLocaleString('id-ID')}`);
console.log(`Total Bonus = Rp ${totalBonus.toLocaleString('id-ID')}`);
