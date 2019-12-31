import React from 'react'
import { Container } from 'react-bootstrap'

const TugasTiga = () => {
	return (
		<Container>
			<hr className="nav-line" />
			<div className="tugas-page">
				<div className="soal-tugas">
					<h4>Kelompok Gemastik:</h4>
					<ul>
						<li>140810160052 - Alfin Bilqisthi (Ketua)</li>
						<li>140810160031 - M. Nur Anbiya Pohan</li>
						<li>140810160064 - Bariq Mbani</li>
					</ul>
				</div>
				<div>
					<h5>
						<u>Judul:</u>
					</h5>
					<p>
						PENGOPTIMALAN SISTEM RESERVASI PASIEN RUMAH SAKIT DENGAN PEMANFAATAN
						TEKNOLOGI INFORMASI
					</p>
				</div>
				<div>
					<h5>
						<u>Pendahuluan</u>
					</h5>
					<ol style={{ listStyleType: 'upper-latin' }}>
						<li>Latar Belakang</li>
						<p>
							Jumlah penduduk Indonesia telah mencapai 268 juta jiwa (BPS,
							2019). berdasarkan data yang dikeluarkan oleh Kementerian
							Kesehatan Indonesia tahun 2019, jumlah rumah sakit yang tercatat
							di Indonesia berjumlah 2883.
						</p>
						<li>Rumusan Masalah </li>
						<ol>
							<li>Bagaimana mengevaluasi sistem reservasi rumah sakit?</li>
							<li>
								Bagaimana pengoptimalan teknologi informasi pada sistem
								reservasi rumah sakit?
							</li>
							<li>Bagaimana cara pengoptimalan tersebut diimplementasikan?</li>
						</ol>
						<li>Tujuan Penelitian</li>
						<ol>
							<li>Tujuan Umum</li>
							<p>
								Tujuan umum dibuatnya sistem reservasi pasien berbasis IT
								adalah, pasien hanya perlu mengunjungi situs reservasi online
								rumah sakit/menggunakan aplikasi reservasi untuk mendaftar &
								mendapat nomor antrian ,sehingga pasien bisa langsung datang ke
								rumah sakit sesuai waktu yang telah ditentukan, dibandingkan
								harus mendaftar secara manual akan membutuhkan waktu yang
								lumayan lama bahkan bisa berjam jam dikarenakan menumpuknya
								pasien yang mendaftar setiap harinya.
							</p>
							<li>Tujuan Khusus</li>
							<ul>
								<li>
									Mengetahui kekurangan sistem reservasi rumah sakit secara umum
								</li>
								<li>Meningkatkan kinerja sistem reservasi rumah sakit</li>
								<li>
									Membantu pasien rumah sakit dengan memudahkan sistem reservasi
								</li>
							</ul>
						</ol>
					</ol>
				</div>
			</div>
		</Container>
	)
}

export default TugasTiga
