const nama = "unaa";

const pesan = `
alloww unaa! 💗

lunaaa, maaciww yaww sudah menemani aku selama di capil! 💗

maaciww juga sudah mau dengerin cerita aku waktu ada masalah kemarin itu wkwk, pas kamu bilang kita asing selama setahun itu aku beneran kaget kaya wawww ternyata kita pernah sejauh itu di kampus ya, padahal sekarang malah jadi sedekat ini kaya momi and anak haha candaa, lucu banget kalau dipikir-pikir tapi bencii ah klo dipiki-pikir gitu

sowwyy juga ya kalau di kampus aku pernah bikin salah ke kamu and Pram, aku nggak bermaksud begitu, dan aku bersyukur kita bisa mulai lagi dengan baik di sini.

btw maaciww sudah bantu dan mewarnai hari-hari magang di Capil, bakal kangen banget makan bareng, bercanda di ruang rapat sampai asik sendiri, dan main uno bareng, entah di ruang rapat atau di berikopi. hal-hal kecil itu yang bikin magang ini terasa seru.

semoga kamu selalu sehat, semangat, dan semua yang kamu mau dimudahkan. jangan lupain aku dan kenangan kita di capil ya. nanti kita main uno lagi atau ngopi bareng di berikopi again ga siee! 🃏☕
`;

const warnaNote = "#F9DCE4";
const kodeRahasia = "LUNAA";

// MEMBUAT STICKY NOTE
const notesContainer = document.getElementById("notesContainer");

const note = document.createElement("div");
note.className = "note";
note.style.background = warnaNote;

note.innerHTML = `
    <div class="character">🐧</div>
    <h3>For ${nama} ♡</h3>
    <p>Click here to open your little message!</p>
`;

note.addEventListener("click", openMessage);
notesContainer.appendChild(note);


// MEMBUKA PESAN
function openMessage() {
    document.getElementById("modalCharacter").innerHTML = "🐧💗";
    document.getElementById("modalName").innerText = `Dear ${nama} ♡`;
    document.getElementById("modalMessage").innerText = pesan;
    document.getElementById("modal").style.display = "flex";
}

// MENUTUP PESAN
function closeMessage() {
    document.getElementById("modal").style.display = "none";
}

// KEMBALI KE MENU
function backToMenu() {
    document.getElementById("modal").style.display = "none";
}

// KODE RAHASIA
function checkCode() {
    const input = document.getElementById("secretCode").value.trim();

    if (input.toUpperCase() === kodeRahasia.toUpperCase()) {
        document.getElementById("lockScreen").style.display = "none";
        document.getElementById("mainContent").style.display = "block";
    } else {
        document.getElementById("errorMessage").textContent =
            "Eitsss, kode rahasianya salah! Coba lagi ya ♡";

        document.getElementById("secretCode").value = "";
    }
}

// TEKAN ENTER UNTUK MEMASUKKAN KODE
document.getElementById("secretCode").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        checkCode();
    }
});


function playWithSound() {
  const video = document.querySelector("video");
  const tombol = document.querySelector(".sound-button");

  if (video.muted) {
    video.muted = false;
    video.play();
    tombol.textContent = "♡ Matikan Suara ♡";
  } else {
    video.muted = true;
    tombol.textContent = "♡ Putar dengan Suara ♡";
  }
}

// MUSIK BACKGROUND
function toggleMusic() {
    const music = document.getElementById("backgroundMusic");
    const button = document.querySelector(".music-button");

    if (music.paused) {
        music.play()
            .then(() => {
                button.innerHTML = "♫ Matikan Musik ♡";
            })
            .catch(error => {
                alert("Musik belum bisa diputar. Coba lagi yaa!");
            });
    } else {
        music.pause();
        button.innerHTML = "♡ Putar Musik ♡";
    }
}

window.toggleMusic = toggleMusic;
window.playWithSound = playWithSound;
window.checkCode = checkCode;
window.closeMessage = closeMessage;
window.backToMenu = backToMenu;