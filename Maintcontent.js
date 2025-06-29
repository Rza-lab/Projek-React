import Hero from "./Hero";
import Cardjurusan from "./Cardjurusan";
import Cardkegiatan from "./Cardkegiatan";
import Jurusan1 from "./../asset/Farmasi.jpg";
import Jurusan2 from "./../asset/Tkj.jpg";
import Jurusan3 from "./../asset/Akutansi.jpg";
import kegiatan1 from "./../asset/Pramuka.jpeg";
import kegiatan2 from "./../asset/Basket.jpeg"
import kegiatan3 from "./../asset/Futsal.jpg"
import kegiatan4 from "./../asset/Voli.jpg"

function Maincontent() {
  return (
    <div>
        <Hero />
        <di className="container">
            <div className="row">
                <div className="col-12 text-center my-5">
                    <h1>Jurusan Sekolah</h1>
                </div>
                <div className="col-4">
                    <Cardjurusan image={Jurusan1} jurusan="Farmasi" description="Jurusan farmasi adalah program studi yang mempelajari segala hal tentang obat-obatan, mulai dari penelitian, pengembangan, produksi, hingga distribusi dan penggunaan yang aman bagi pasien"/>
                </div>
                <div className="col-4">
                    <Cardjurusan image={Jurusan2} jurusan="Teknik Komputer dan Jaringan" description="TKJ adalah singkatan dari Teknik Komputer dan Jaringan. Ini adalah jurusan di Sekolah Menengah Kejuruan (SMK) yang berfokus pada pembelajaran ilmu-ilmu yang berkaitan dengan komputer dan jaringan"/>
                </div>
                <div className="col-4">
                    <Cardjurusan image={Jurusan3} jurusan="Akuntansi" description="Jurusan Akuntansi adalah program studi yang mempelajari teknik dalam mengukur, mencatat, mengklasifikasi, dan melaporkan transaksi keuangan suatu entitas atau organisasi, baik itu perusahaan, organisasi, maupun individu"/>
                </div>
            </div>
            <div className="row">
                <div className="col-12 text-center my-5">
                    <h1>Kegiatan</h1>
                </div>
                <div className="col-12 my-3">
                    <Cardkegiatan image={kegiatan1} description="Pramuka, atau Gerakan Pramuka, adalah organisasi pendidikan non-formal di Indonesia yang bertujuan untuk membentuk karakter dan keterampilan generasi muda melalui kegiatan di alam terbuka"/>
                </div>
                <div className="col-12 my-3">
                    <Cardkegiatan image={kegiatan2} description="Kegiatan basket adalah olahraga tim yang melibatkan dua kelompok pemain yang berusaha mencetak poin dengan memasukkan bola ke dalam keranjang lawan"/>
                </div>
                <div className="col-12 my-3">
                    <Cardkegiatan image={kegiatan3} description="Kegiatan futsal adalah aktivitas olahraga yang populer, baik sebagai hobi maupun kompetisi. Futsal melibatkan dua tim yang masing-masing terdiri dari lima pemain, dimainkan di lapangan yang lebih kecil dari sepak bola, dengan fokus pada keterampilan individu dan kerjasama tim"/>
                </div>
                <div className="col-12 my-3">
                    <Cardkegiatan image={kegiatan4} description="Kegiatan voli merujuk pada aktivitas bermain olahraga bola voli, baik sebagai hobi, latihan rutin, maupun dalam bentuk kompetisi atau turnamen. Kegiatan ini bisa berupa latihan bersama tim, mengikuti turnamen, atau bahkan hanya bermain santai dengan teman-teman"/>
                </div>
            </div>
        </di>
    </div>
    
  );
}

export default Maincontent;