// Music variable to control music system
const music = new Audio('audio/surah/1.mp3');
// music.play();


// Array for Playing Song Poster

const songs = [
    // Object of 1 Music
    {
        id: 0,
        songName: `Al-Fatiha <br> 
        <div class="subtitle">(The Opening)</div>`,
        poster: "audio/surah/1.png",
        source: "audio/surah/1.mp3"
    },
    {
        id: 1,
        songName: `Al-Baqarah <br> 
        <div class="subtitle">(The Cow)</div>`,
        poster: "audio/surah/2.png",
        source: "audio/surah/2.mp3"
    },
    {
        id: 2,
        songName: `Ali 'Imran <br> 
        <div class="subtitle">(Family of Imran)</div>`,
        poster: "audio/surah/3.png",
        source: "audio/surah/3.mp3"
    },
    {
        id: 3,
        songName: `Al-Nisa <br> 
        <div class="subtitle">(The Women)</div>`,
        poster: "audio/surah/4.png",
        source: "audio/surah/4.mp3"
    },
    {
        id: 4,
        songName: `Al-Ma'idah <br> 
        <div class="subtitle">(The Table Spreed)</div>`,
        poster: "audio/surah/5.png",
        source: "audio/surah/5.mp3"
    },
    {
        id: 5,
        songName: `Al-An'am <br> 
        <div class="subtitle">(The Cattle)</div>`,
        poster: "audio/surah/6.png",
        source: "audio/surah/6.mp3"
    },
    {
        id: 6,
        songName: `Al-A'raf <br> 
        <div class="subtitle">(The Heights)</div>`,
        poster: "audio/surah/7.png",
        source: "audio/surah/7.mp3"
    },
    {
        id: 7,
        songName: `Al-Anfal <br> 
        <div class="subtitle">(The Spoils of War)</div>`,
        poster: "audio/surah/8.png",
        source: "audio/surah/8.mp3"
    },
    {
        id: 8,
        songName: `Al-Tawbah <br> 
        <div class="subtitle">(The Repentance)</div>`,
        poster: "audio/surah/9.png",
        source: "audio/surah/9.mp3"
    },
    {
        id: 9,
        songName: `Yunus <br> 
        <div class="subtitle">(Jonah)</div>`,
        poster: "audio/surah/10.png",
        source: "audio/surah/10.mp3"
    },
    {
        id: 10,
        songName: `Hud <br> 
        <div class="subtitle">(Hud)</div>`,
        poster: "audio/surah/11.png",
        source: "audio/surah/11.mp3"
    },
    {
        id: 11,
        songName: `Yusuf <br> 
        <div class="subtitle">(Joseph)</div>`,
        poster: "audio/surah/12.png",
        source: "audio/surah/12.mp3"
    },
    {
        id: 12,
        songName: `Ar-Ra'd <br> 
        <div class="subtitle">(The Thunder)</div>`,
        poster: "audio/surah/13.png",
        source: "audio/surah/13.mp3"
    },
    {
        id: 13,
        songName: `Ibrahim <br> 
        <div class="subtitle">(Abraham)</div>`,
        poster: "audio/surah/14.png",
        source: "audio/surah/14.mp3"
    },
    {
        id: 14,
        songName: `Al-Hijr <br> 
        <div class="subtitle">(The Rocky Tract)</div>`,
        poster: "audio/surah/15.png",
        source: "audio/surah/15.mp3"
    },
    {
        id: 15,
        songName: `An-Nahl <br> 
        <div class="subtitle">(The Bee)</div>`,
        poster: "audio/surah/16.png",
        source: "audio/surah/16.mp3"
    },
    {
        id: 16,
        songName: `Al-Isra <br> 
        <div class="subtitle">(The Night Journey)</div>`,
        poster: "audio/surah/17.png",
        source: "audio/surah/17.mp3"
    },
    {
        id: 17,
        songName: `Al-Kahf <br> 
        <div class="subtitle">(The Cave)</div>`,
        poster: "audio/surah/18.png",
        source: "audio/surah/18.mp3"
    },
    {
        id: 18,
        songName: `Maryam <br> 
        <div class="subtitle">(Mary)</div>`,
        poster: "audio/surah/19.png",
        source: "audio/surah/19.mp3"
    },
    {
        id: 19,
        songName: `Taha <br> 
        <div class="subtitle">(Ta-Ha)</div>`,
        poster: "audio/surah/20.png",
        source: "audio/surah/20.mp3"
    },
    {
        id: 20,
        songName: `Al-Anbya <br> 
        <div class="subtitle">(The Prophets)</div>`,
        poster: "audio/surah/21.png",
        source: "audio/surah/21.mp3"
    },
    {
        id: 21,
        songName: `Al-Hajj <br> 
        <div class="subtitle">(The Pilgrimage)</div>`,
        poster: "audio/surah/22.png",
        source: "audio/surah/22.mp3"
    },
    {
        id: 22,
        songName: `Al-Mu'minun <br> 
        <div class="subtitle">(The Believers)</div>`,
        poster: "audio/surah/23.png",
        source: "audio/surah/23.mp3"
    },
    {
        id: 23,
        songName: `An-Nur <br> 
        <div class="subtitle">(The Light)</div>`,
        poster: "audio/surah/24.png",
        source: "audio/surah/24.mp3"
    },
    {
        id: 24,
        songName: `Al-Furqan <br> 
        <div class="subtitle">(The Criterion)</div>`,
        poster: "audio/surah/25.png",
        source: "audio/surah/25.mp3"
    },
    {
        id: 25,
        songName: `Ash-Shu'ara <br> 
        <div class="subtitle">(The Poets)</div>`,
        poster: "audio/surah/26.png",
        source: "audio/surah/26.mp3"
    },
    {
        id: 26,
        songName: `An-Naml <br> 
        <div class="subtitle">(The Ant)</div>`,
        poster: "audio/surah/27.png",
        source: "audio/surah/27.mp3"
    },
    {
        id: 27,
        songName: `Al-Qasas <br> 
        <div class="subtitle">(The Stories)</div>`,
        poster: "audio/surah/28.png",
        source: "audio/surah/28.mp3"
    },
    {
        id: 28,
        songName: `Al-'Ankabut <br> 
        <div class="subtitle">(The Spider)</div>`,
        poster: "audio/surah/29.png",
        source: "audio/surah/29.mp3"
    },
    {
        id: 29,
        songName: `Ar-Rum <br> 
        <div class="subtitle">(The Romans)</div>`,
        poster: "audio/surah/30.png",
        source: "audio/surah/30.mp3"
    },
    {
        id: 30,
        songName: `Luqman <br> 
        <div class="subtitle">(Luqman)</div>`,
        poster: "audio/surah/31.png",
        source: "audio/surah/31.mp3"
    },
    {
        id: 31,
        songName: `As-Sajdah <br> 
        <div class="subtitle">(The Prostration)</div>`,
        poster: "audio/surah/32.png",
        source: "audio/surah/32.mp3"
    },
    {
        id: 32,
        songName: `Al-Ahzab <br> 
        <div class="subtitle">(The Combined Forces)</div>`,
        poster: "audio/surah/33.png",
        source: "audio/surah/33.mp3"
    },
    {
        id: 33,
        songName: `Saba <br> 
        <div class="subtitle">(Sheba)</div>`,
        poster: "audio/surah/34.png",
        source: "audio/surah/34.mp3"
    },
    {
        id: 34,
        songName: `Fatir <br> 
        <div class="subtitle">(Originator)</div>`,
        poster: "audio/surah/35.png",
        source: "audio/surah/35.mp3"
    },
    {
        id: 35,
        songName: `Ya-Sin <br> 
        <div class="subtitle">(Ya Sin)</div>`,
        poster: "audio/surah/36.png",
        source: "audio/surah/36.mp3"
    },
    {
        id: 36,
        songName: `As-Saffat <br> 
        <div class="subtitle">(Those who set the Ranks)</div>`,
        poster: "audio/surah/37.png",
        source: "audio/surah/37.mp3"
    },
    {
        id: 37,
        songName: `Saad <br> 
        <div class="subtitle">(The Letter "Saad")</div>`,
        poster: "audio/surah/38.png",
        source: "audio/surah/38.mp3"
    },
    {
        id: 38,
        songName: `Az-Zumar <br> 
        <div class="subtitle">(The Troops)</div>`,
        poster: "audio/surah/39.png",
        source: "audio/surah/39.mp3"
    },
    {
        id: 39,
        songName: `Ghafir <br> 
        <div class="subtitle">(The Forgiver)</div>`,
        poster: "audio/surah/40.png",
        source: "audio/surah/40.mp3"
    },
    {
        id: 40,
        songName: `Fussilat <br> 
        <div class="subtitle">(Explained in Detail)</div>`,
        poster: "audio/surah/41.png",
        source: "audio/surah/41.mp3"
    },
    {
        id: 41,
        songName: `Ash-Shuraa <br> 
        <div class="subtitle">(The Consultation)</div>`,
        poster: "audio/surah/42.png",
        source: "audio/surah/42.mp3"
    },
    {
        id: 42,
        songName: `Az-Zukhruf <br> 
        <div class="subtitle">(The Ornaments of Gold)</div>`,
        poster: "audio/surah/43.png",
        source: "audio/surah/43.mp3"
    },
    {
        id: 43,
        songName: `Ad-Dukhan <br> 
        <div class="subtitle">(The Smoke)</div>`,
        poster: "audio/surah/44.png",
        source: "audio/surah/44.mp3"
    },
    {
        id: 44,
        songName: `Al-Jathiyah <br> 
        <div class="subtitle">(The Crouching)</div>`,
        poster: "audio/surah/45.png",
        source: "audio/surah/45.mp3"
    },
    {
        id: 45,
        songName: `Al-Ahqaf <br> 
        <div class="subtitle">(The Wind-Curved Sandhills)</div>`,
        poster: "audio/surah/46.png",
        source: "audio/surah/46.mp3"
    },
    {
        id: 46,
        songName: `Muhammad <br> 
        <div class="subtitle">(Muhammad)</div>`,
        poster: "audio/surah/47.png",
        source: "audio/surah/47.mp3"
    },
    {
        id: 47,
        songName: `Al-Fath <br> 
        <div class="subtitle">(The Victory)</div>`,
        poster: "audio/surah/48.png",
        source: "audio/surah/48.mp3"
    },
    {
        id: 48,
        songName: `Al-Hujurat <br> 
        <div class="subtitle">(The Rooms)</div>`,
        poster: "audio/surah/49.png",
        source: "audio/surah/49.mp3"
    },
    {
        id: 49,
        songName: `Qaf <br> 
        <div class="subtitle">(The Letter "Qaf")</div>`,
        poster: "audio/surah/50.png",
        source: "audio/surah/50.mp3"
    },
    {
        id: 50,
        songName: `Adh-Dhariyat <br> 
        <div class="subtitle">(The Winnowing Winds)</div>`,
        poster: "audio/surah/51.png",
        source: "audio/surah/51.mp3"
    },
    {
        id: 51,
        songName: `At-Tur <br> 
        <div class="subtitle">(The Mount)</div>`,
        poster: "audio/surah/52.png",
        source: "audio/surah/52.mp3"
    },
    {
        id: 52,
        songName: `An-Najm <br> 
        <div class="subtitle">(The Star)</div>`,
        poster: "audio/surah/53.png",
        source: "audio/surah/53.mp3"
    },
    {
        id: 53,
        songName: `Al-Qamar <br> 
        <div class="subtitle">(The Moon)</div>`,
        poster: "audio/surah/54.png",
        source: "audio/surah/54.mp3"
    },
    {
        id: 54,
        songName: `Ar-Rahman <br> 
        <div class="subtitle">(The Beneficent)</div>`,
        poster: "audio/surah/55.png",
        source: "audio/surah/55.mp3"
    },
    {
        id: 55,
        songName: `Al-Waqi'ah <br> 
        <div class="subtitle">(The Inevitable)</div>`,
        poster: "audio/surah/56.png",
        source: "audio/surah/56.mp3"
    },
    {
        id: 56,
        songName: `Al-Hadid <br> 
        <div class="subtitle">(The Iron)</div>`,
        poster: "audio/surah/57.png",
        source: "audio/surah/57.mp3"
    },
    {
        id: 57,
        songName: `Al-Mujadila <br> 
        <div class="subtitle">(The Pleading Woman)</div>`,
        poster: "audio/surah/58.png",
        source: "audio/surah/58.mp3"
    },
    {
        id: 58,
        songName: `Al-Hashr <br> 
        <div class="subtitle">(The Exile)</div>`,
        poster: "audio/surah/59.png",
        source: "audio/surah/59.mp3"
    },
    {
        id: 59,
        songName: `Al-Mumtahanah <br> 
        <div class="subtitle">(She that is to be examined)</div>`,
        poster: "audio/surah/60.png",
        source: "audio/surah/60.mp3"
    },
    {
        id: 60,
        songName: `As-Saf <br> 
        <div class="subtitle">(The Ranks)</div>`,
        poster: "audio/surah/61.png",
        source: "audio/surah/61.mp3"
    },
    {
        id: 61,
        songName: `Al-Jumu'ah <br> 
        <div class="subtitle">(The Congregation, friday)</div>`,
        poster: "audio/surah/62.png",
        source: "audio/surah/62.mp3"
    },
    {
        id: 62,
        songName: `Al-Munafiqun <br> 
        <div class="subtitle">(The Hypocrites)</div>`,
        poster: "audio/surah/63.png",
        source: "audio/surah/63.mp3"
    },
    {
        id: 63,
        songName: `At-Taghabun <br> 
        <div class="subtitle">(The Mutual Disillusion)</div>`,
        poster: "audio/surah/64.png",
        source: "audio/surah/64.mp3"
    },
    {
        id: 64,
        songName: `At-Talaq <br> 
        <div class="subtitle">(The Divorce)</div>`,
        poster: "audio/surah/65.png",
        source: "audio/surah/65.mp3"
    },
    {
        id: 65,
        songName: `At-Tahrim <br> 
        <div class="subtitle">(The Prohibition)</div>`,
        poster: "audio/surah/66.png",
        source: "audio/surah/66.mp3"
    },
    {
        id: 66,
        songName: `Al-Mulk <br> 
        <div class="subtitle">(The Sovereignty)</div>`,
        poster: "audio/surah/67.png",
        source: "audio/surah/67.mp3"
    },
    {
        id: 67,
        songName: `Al-Qalam <br> 
        <div class="subtitle">(The Pen)</div>`,
        poster: "audio/surah/68.png",
        source: "audio/surah/68.mp3"
    },
    {
        id: 68,
        songName: `Al-Haqqah <br> 
        <div class="subtitle">(The Reality)</div>`,
        poster: "audio/surah/69.png",
        source: "audio/surah/69.mp3"
    },
    {
        id: 69,
        songName: `Al-Ma'arij <br> 
        <div class="subtitle">(The Ascending stairways)</div>`,
        poster: "audio/surah/70.png",
        source: "audio/surah/70.mp3"
    },
    {
        id: 70,
        songName: `Nuh <br> 
        <div class="subtitle">(Noah)</div>`,
        poster: "audio/surah/71.png",
        source: "audio/surah/71.mp3"
    },
    {
        id: 71,
        songName: `Al-Jinn <br> 
        <div class="subtitle">(The Jinn)</div>`,
        poster: "audio/surah/72.png",
        source: "audio/surah/72.mp3"
    },
    {
        id:72,
        songName: `Al-Muzzammil <br> 
        <div class="subtitle">(The Enshrouded One)</div>`,
        poster: "audio/surah/73.png",
        source: "audio/surah/73.mp3"
    },
    {
        id: 73,
        songName: `Al-Muddaththir <br> 
        <div class="subtitle">(The Cloaked One)</div>`,
        poster: "audio/surah/74.png",
        source: "audio/surah/74.mp3"
    },
    {
        id: 74,
        songName: `Al-Qiyamah <br> 
        <div class="subtitle">(The Resurrection)</div>`,
        poster: "audio/surah/75.png",
        source: "audio/surah/75.mp3"
    },
    {
        id: 75,
        songName: `Al-Insan <br> 
        <div class="subtitle">(The Man)</div>`,
        poster: "audio/surah/76.png",
        source: "audio/surah/76.mp3"
    },
    {
        id: 76,
        songName: `Al-Mursalat <br> 
        <div class="subtitle">(The Emissaries)</div>`,
        poster: "audio/surah/77.png",
        source: "audio/surah/77.mp3"
    },
    {
        id: 77,
        songName: `An-Naba <br> 
        <div class="subtitle">(The Tidings)</div>`,
        poster: "audio/surah/78.png",
        source: "audio/surah/78.mp3"
    },
    {
        id: 78,
        songName: `An-Nazi'at <br> 
        <div class="subtitle">(Those who drag forth)</div>`,
        poster: "audio/surah/79.png",
        source: "audio/surah/79.mp3"
    },
    {
        id: 79,
        songName: `'Abasa <br> 
        <div class="subtitle">(He Frowned)</div>`,
        poster: "audio/surah/80.png",
        source: "audio/surah/80.mp3"
    },
    {
        id: 80,
        songName: `At-Takwir <br> 
        <div class="subtitle">(The Overthrowing)</div>`,
        poster: "audio/surah/81.png",
        source: "audio/surah/81.mp3"
    },
    {
        id: 81,
        songName: `Al-Infitar <br> 
        <div class="subtitle">(The Cleaving)</div>`,
        poster: "audio/surah/82.png",
        source: "audio/surah/82.mp3"
    },
    {
        id: 82,
        songName: `Al-Mutaffifin <br> 
        <div class="subtitle">(The Defrauding)</div>`,
        poster: "audio/surah/83.png",
        source: "audio/surah/83.mp3"
    },
    {
        id: 83,
        songName: `Al-Inshiqaq <br> 
        <div class="subtitle">(The Sundering)</div>`,
        poster: "audio/surah/84.png",
        source: "audio/surah/84.mp3"
    },
    {
        id: 84,
        songName: `Al-Buruj <br> 
        <div class="subtitle">(The Mansions of the Stars)</div>`,
        poster: "audio/surah/85.png",
        source: "audio/surah/85.mp3"
    },
    {
        id: 85,
        songName: `At-Tariq <br> 
        <div class="subtitle">(The Nightcommer)</div>`,
        poster: "audio/surah/86.png",
        source: "audio/surah/86.mp3"
    },
    {
        id: 86,
        songName: `Al-A'la <br> 
        <div class="subtitle">(The Most High)</div>`,
        poster: "audio/surah/87.png",
        source: "audio/surah/87.mp3"
    },
    {
        id: 87,
        songName: `Al-Ghashiyah <br> 
        <div class="subtitle">(The Overwhelming)</div>`,
        poster: "audio/surah/88.png",
        source: "audio/surah/88.mp3"
    },
    {
        id: 88,
        songName: `Al-Fajr <br> 
        <div class="subtitle">(The Dawn)</div>`,
        poster: "audio/surah/89.png",
        source: "audio/surah/89.mp3"
    },
    {
        id: 89,
        songName: `Al-Balad <br> 
        <div class="subtitle">(The City)</div>`,
        poster: "audio/surah/90.png",
        source: "audio/surah/90.mp3"
    },
    {
        id: 90,
        songName: `Ash-Shams <br> 
        <div class="subtitle">(The Sun)</div>`,
        poster: "audio/surah/91.png",
        source: "audio/surah/91.mp3"
    },
    {
        id: 91,
        songName: `Al-Layl <br> 
        <div class="subtitle">(The Night)</div>`,
        poster: "audio/surah/92.png",
        source: "audio/surah/92.mp3"
    },
    {
        id: 92,
        songName: `Ad-Duhaa <br> 
        <div class="subtitle">(The Morning Hours)</div>`,
        poster: "audio/surah/93.png",
        source: "audio/surah/93.mp3"
    },
    {
        id: 93,
        songName: `Ash-Sharh <br> 
        <div class="subtitle">(The Relief)</div>`,
        poster: "audio/surah/94.png",
        source: "audio/surah/94.mp3"
    },
    {
        id: 94,
        songName: `At-Tin <br> 
        <div class="subtitle">(The Fig)</div>`,
        poster: "audio/surah/95.png",
        source: "audio/surah/95.mp3"
    },
    {
        id: 95,
        songName: `Al-'Alaq <br> 
        <div class="subtitle">(The Clot)</div>`,
        poster: "audio/surah/96.png",
        source: "audio/surah/96.mp3"
    },
    {
        id: 96,
        songName: `Al-Qadr <br> 
        <div class="subtitle">(The Power)</div>`,
        poster: "audio/surah/97.png",
        source: "audio/surah/97.mp3"
    },
    {
        id: 97,
        songName: `Al-Bayyinah <br> 
        <div class="subtitle">(The Clear Proof)</div>`,
        poster: "audio/surah/98.png",
        source: "audio/surah/98.mp3"
    },
    {
        id: 98,
        songName: `Az-Zalzalah <br> 
        <div class="subtitle">(The Earthquake)</div>`,
        poster: "audio/surah/99.png",
        source: "audio/surah/99.mp3"
    },
    {
        id: 99,
        songName: `Al-'Adiyat <br> 
        <div class="subtitle">(The Courser)</div>`,
        poster: "audio/surah/100.png",
        source: "audio/surah/100.mp3"
    },
    {
        id: 100,
        songName: `Al-Qari'ah <br> 
        <div class="subtitle">(The Calamity)</div>`,
        poster: "audio/surah/101.png",
        source: "audio/surah/101.mp3"
    },
    {
        id: 101,
        songName: `At-Takathur <br> 
        <div class="subtitle">(The Rivalry in world increase)</div>`,
        poster: "audio/surah/102.png",
        source: "audio/surah/102.mp3"
    },
    {
        id: 102,
        songName: `Al-'Asr <br> 
        <div class="subtitle">(The Declining Day)</div>`,
        poster: "audio/surah/103.png",
        source: "audio/surah/103.mp3"
    },
    {
        id: 103,
        songName: `Al-Humazah <br> 
        <div class="subtitle">(The Traducer)</div>`,
        poster: "audio/surah/104.png",
        source: "audio/surah/104.mp3"
    },
    {
        id: 104,
        songName: `Al-Fil <br> 
        <div class="subtitle">(The Elephant)</div>`,
        poster: "audio/surah/105.png",
        source: "audio/surah/105.mp3"
    },
    {
        id: 105,
        songName: `Quraysh <br> 
        <div class="subtitle">(Quraysh)</div>`,
        poster: "audio/surah/106.png",
        source: "audio/surah/106.mp3"
    },
    {
        id: 106,
        songName: `Al-Ma'un <br> 
        <div class="subtitle">(The Small Kindnesses)</div>`,
        poster: "audio/surah/107.png",
        source: "audio/surah/107.mp3"
    },
    {
        id: 107,
        songName: `Al-Kawthar <br> 
        <div class="subtitle">(The Abundance)</div>`,
        poster: "audio/surah/108.png",
        source: "audio/surah/108.mp3"
    },
    {
        id: 108,
        songName: `Al-Kafirun <br> 
        <div class="subtitle">(The Disbelievers)</div>`,
        poster: "audio/surah/109.png",
        source: "audio/surah/109.mp3"
    },
    {
        id: 109,
        songName: `An-Nasr <br> 
        <div class="subtitle">(The Divine Support)</div>`,
        poster: "audio/surah/110.png",
        source: "audio/surah/110.mp3"
    },
    {
        id: 110,
        songName: `Al-Masad <br> 
        <div class="subtitle">(The Palm Fiber)</div>`,
        poster: "audio/surah/111.png",
        source: "audio/surah/111.mp3"
    },
    {
        id: 111,
        songName: `Al-Ikhlas <br> 
        <div class="subtitle">(The Sincerity)</div>`,
        poster: "audio/surah/112.png",
        source: "audio/surah/112.mp3"
    },
    {
        id: 112,
        songName: `Al-Falaq <br> 
        <div class="subtitle">(The Daybreak)</div>`,
        poster: "audio/surah/113.png",
        source: "audio/surah/113.mp3"
    },
    {
        id: 113,
        songName: `An-Nas <br> 
        <div class="subtitle">(The Mankind)</div>`,
        poster: "audio/surah/114.png",
        source: "audio/surah/114.mp3"
    },
    {
        id: 114,
        songName: `الم <br> 
        <div class="subtitle">1. Alif Lam Meem</div>`,
        poster: "audio/1/img.png",
        source: "audio/1/1.mp3"
    },
    {
        id: 115,
        songName: `سَيَقُولُ <br> 
        <div class="subtitle">2. Sayaqool</div>`,
        poster: "audio/2/img.png",
        source: "audio/2/2.mp3"
    },
    {
        id: 116,
        songName: `تِلْكَ الرُّسُلُ <br> 
        <div class="subtitle">3. Tilka r Rusulu</div>`,
        poster: "audio/3/img.png",
        source: "audio/3/3.mp3"
    },
    {
        id: 117,
        songName: `لَنْ تَنَالُوا	 <br> 
        <div class="subtitle">4. Lan Tana Loo</div>`,
        poster: "audio/4/img.png",
        source: "audio/4/4.mp3"
    },
    {
        id: 118,
        songName: `وَالْمُحْصَنَاتُ <br> 
        <div class="subtitle">5. Wal Mohsanat</div>`,
        poster: "audio/5/img.png",
        source: "audio/5/5.mp3"
    },
    {
        id: 119,
        songName: `لَا يُحِبُّ اللَّهُ	 <br> 
        <div class="subtitle">6. La Yuhibbullah</div>`,
        poster: "audio/6/img.png",
        source: "audio/6/6.mp3"
    },
    {
        id: 120,
        songName: `وَإِذَا سَمِعُوا <br> 
        <div class="subtitle">7. Wa Iza Samiu	</div>`,
        poster: "audio/7/img.png",
        source: "audio/7/7.mp3"
    },
    {
        id: 121,
        songName: `وَلَوْ أَنَّنَا <br> 
        <div class="subtitle">8. Wa Lau Annana</div>`,
        poster: "audio/8/img.png",
        source: "audio/8/8.mp3"
    },
    {
        id: 122,
        songName: `قَالَ الْمَلَأُ <br> 
        <div class="subtitle">9. Qalal Malao</div>`,
        poster: "audio/9/img.png",
        source: "audio/9/9.mp3"
    },
    {
        id: 123,
        songName: `وَاعْلَمُوا <br> 
        <div class="subtitle">10. Wa A'lamu</div>`,
        poster: "audio/10/img.png",
        source: "audio/10/10.mp3"
    },
    {
        id: 124,
        songName: `يَعْتَذِرُونَ <br> 
        <div class="subtitle">11. Yatazeroon</div>`,
        poster: "audio/11/img.png",
        source: "audio/11/11.mp3"
    },
    {
        id: 125,
        songName: `وَمَا مِنْ دَابَّةٍ <br> 
        <div class="subtitle">12. Wa Mamin Da'abat</div>`,
        poster: "audio/12/img.png",
        source: "audio/12/12.mp3"
    },
    {
        id: 126,
        songName: `وَمَا أُبَرِّئُ <br> 
        <div class="subtitle">13. Wa Ma Ubrioo</div>`,
        poster: "audio/13/img.png",
        source: "audio/13/13.mp3"
    },
    {
        id: 127,
        songName: `رُبَمَا <br> 
        <div class="subtitle">14. Rubama</div>`,
        poster: "audio/14/img.png",
        source: "audio/14/14.mp3"
    },
    {
        id: 128,
        songName: `سُبْحَانَ الَّذِي <br> 
        <div class="subtitle">15. Subhanallazi</div>`,
        poster: "audio/15/img.png",
        source: "audio/15/15.mp3"
    },
    {
        id: 129,
        songName: `قَالَ أَلَمْ <br> 
        <div class="subtitle">16. Qal Alam</div>`,
        poster: "audio/16/img.png",
        source: "audio/16/16.mp3"
    },
    {
        id: 130,
        songName: `اقْتَرَبَ <br> 
        <div class="subtitle">17. Aqtarabo</div>`,
        poster: "audio/17/img.png",
        source: "audio/17/17.mp3"
    },
    {
        id: 131,
        songName: `قَدْ أَفْلَحَ <br> 
        <div class="subtitle">18. Qadd Aflaha</div>`,
        poster: "audio/18/img.png",
        source: "audio/18/18.mp3"
    },
    {
        id: 132,
        songName: `وَقَالَ الَّذِينَ <br> 
        <div class="subtitle">19. Wa Qalallazina</div>`,
        poster: "audio/19/img.png",
        source: "audio/19/19.mp3"
    },
    {
        id: 133,
        songName: `أَمَّنْ خَلَقَ <br> 
        <div class="subtitle">20. A'man Khalaq</div>`,
        poster: "audio/20/img.png",
        source: "audio/20/20.mp3"
    },
    {
        id: 134,
        songName: `اتْلُ مَا أُوحِيَ <br> 
        <div class="subtitle">21. Utlu Ma Oohi</div>`,
        poster: "audio/21/img.png",
        source: "audio/21/21.mp3"
    },
    {
        id: 135,
        songName: `وَمَنْ يَقْنُتْ <br> 
        <div class="subtitle">22. Wa Manyaqnut</div>`,
        poster: "audio/22/img.png",
        source: "audio/22/22.mp3"
    },
    {
        id: 136,
        songName: `وَمَا لِيَ <br> 
        <div class="subtitle">23. Wa Mali</div>`,
        poster: "audio/23/img.png",
        source: "audio/23/23.mp3"
    },
    {
        id: 137,
        songName: `فَمَنْ أَظْلَمُ <br> 
        <div class="subtitle">24. Faman Azlam</div>`,
        poster: "audio/24/img.png",
        source: "audio/24/24.mp3"
    },
    {
        id: 138,
        songName: `إِلَيْهِ يُرَدُّ <br> 
        <div class="subtitle">25. Elahe Yuruddo</div>`,
        poster: "audio/25/img.png",
        source: "audio/25/25.mp3"
    },
    {
        id: 139,
        songName: `حم <br> 
        <div class="subtitle">26. Ha'a Meem</div>`,
        poster: "audio/26/img.png",
        source: "audio/26/26.mp3"
    },
    {
        id: 140,
        songName: `قَالَ فَمَا خَطْبُكُمْ <br> 
        <div class="subtitle">27. Qala Fama Khatbukum</div>`,
        poster: "audio/27/img.png",
        source: "audio/27/27.mp3"
    },
    {
        id: 141,
        songName: `قَدْ سَمِعَ اللَّهُ <br> 
        <div class="subtitle">28. Qadd Sami Allah</div>`,
        poster: "audio/28/img.png",
        source: "audio/28/28.mp3"
    },
    {
        id: 142,
        songName: `تَبَارَكَ الَّذِي <br> 
        <div class="subtitle">29. Tabarakallazi</div>`,
        poster: "audio/29/img.png",
        source: "audio/29/29.mp3"
    },
    {
        id: 143,
        songName: `عَمَّ يَتَسَاءَلُونَ <br> 
        <div class="subtitle">30. Amma Yatasa'aloon</div>`,
        poster: "audio/30/img.png",
        source: "audio/30/30.mp3"
    }
]

// Array of Song Item Class
Array.from(document.getElementsByClassName('songItem')).forEach((e, i) =>{
    // To fetch the Poster from the above object
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})

// Search data starts
let search_results = document.getElementsByClassName('search_results')[0];

songs.forEach(element => {
    const {id, songName, poster} = element;
    // console.log(poster);
    let card = document.createElement('a');
    card.classList.add('card');
    // By clicking on card , it fetch the id using anchor tag 
    card.href = "#" + id;
    card.innerHTML = `
        <img src="${poster}">
        <div class="content">
            ${songName}
        </div>
    `;
    // To insert the above card details into the search box
    search_results.appendChild(card);
});

// Filtering the search results
let input = document.getElementsByTagName('input')[0];

input.addEventListener('keyup', ()=>{
    let input_value = input.value.toUpperCase();
    let items = search_results.getElementsByTagName('a');

    for (let index = 0; index < items.length; index++) {
        let as = items[index].getElementsByClassName('content')[0];
        let text_value = as.textContent || as.innerHTML;

        // Condition
        if(text_value.toUpperCase().indexOf(input_value) > -1){
            items[index].style.display = "flex";
        }else{
            items[index].style.display = "none";
        }
        // To remove the list when there is no input
        if (input.value == 0) {
            search_results.style.display = "none";
        }else{
            search_results.style.display = "";
        }
    }
})
// Search data ends


// Master Play Button
let masterPlay = document.getElementById('masterPlay');
// let play = document.getElementById('masterPlay').click();
// Wave
let wave = document.getElementById('wave');

masterPlay.addEventListener('click', ()=>{
    if(music.paused || music.currentTime <= 0){
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    } else{
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
})


const makeAllBackground = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
        el.style.background = 'rgba(247,173,29,0)';
    })
}
const makeAllplays = () =>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el)=>{
        el.classList.add('bi-play-circle');
        el.classList.remove('bi-pause-circle');
    })
}
// Targetting the id index for playing music class playListPlay and id 0...35
let index = 0;
// index++;
// console.log(index);
// Music Thumbnail and Title of Bottom Side
let poster_master_play = document.getElementById('poster_master_play');
let download_music = document.getElementById('download_music');
// Download Music
let title = document.getElementById('title');
// Array of music using class playListPlay
Array.from(document.getElementsByClassName('playListPlay')).forEach((e, i) => {
    e.addEventListener('click', (el) => {
        index = el.target.id;
        // console.log(index);
        // Change the music source on click
        music.src = songs[i].source;
        music.play();        
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        // Download Music
        download_music.href = songs[i].source;
        download_music.setAttribute('download',songs[i].songName);
        // Getting the details from the song array
        poster_master_play.src = songs[i].poster;
        title.innerHTML = songs[i].songName;

        // Change background of the selected song from the left side
        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index].style.background="rgba(247,173,29,.3)";
        // Another way to target the clicked song's poster and title to show
        // let songTitles = songs.filter((els)=>{
        //     return els.id == index;
        // })
        // songTitles.forEach((elss)=>{
        //     let { songName, poster } = elss;
        //     title.innerHTML = songName;
        //     poster_master_play.src = poster;
        // })

        // To change the play/pause button of left side
        
        makeAllplays();
        el.target.classList.remove('bi-play-circle');
        el.target.classList.add('bi-pause-circle');


    })
})


// Seek bar and Music Time
let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

// Setting the time
music.addEventListener('timeupdate', ()=>{

    let music_ct = music.currentTime;
    let music_dur = music.duration;
    // console.log(music_ct);

    // Converting to minute of Duration
    let min1 = Math.floor(music_dur/60);
    let sec1 = Math.floor(music_dur%60);
    // console.log(sec1);

    // To add 0 in second of Duration
    if (sec1<10){
        sec1 = `0${sec1}`;
    }
    // To show duration time 
    

    currentEnd.innerText = `${min1}:${sec1}`;

    
    // Current Time
    let min2 = Math.floor(music_ct/60);
    let sec2 = Math.floor(music_ct%60);
    // To add 0 in second of Duration
    if (sec2<10){
        sec2 = `0${sec2}`;
    }
    // To show current time 
    currentStart.innerText = `${min2}:${sec2}`;

    // Seek bar
    let progressBar = parseInt((music_ct/music_dur)*100);
    seek.value = progressBar;
    // console.log(seek.value);
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    // Dot of Seekbar
    dot.style.left = `${seekbar}%`;

});


// To change the seekbar on click
seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration / 100;
});

// To change the volume icon
let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol_icon.addEventListener('click', ()=>{
        vol_icon.classList.add('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-up-fill');

        music.volume = 0;


})
vol.addEventListener('change', ()=>{
    if(vol.value == 0){
        vol_icon.classList.add('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if(vol.value > 0){
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.add('bi-volume-off-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if(vol.value > 30){
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if(vol.value > 65){
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-up-fill');
    }
    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    // To change the volume w.r.t 100
    music.volume = vol_a/100;
});


// To skip back to play previous music
let back = document.getElementById('back');
let next = document.getElementById('next');
back.addEventListener('click', (s)=>{
    index -= 1;
    if(index == -1){  
        index=Array.from(document.getElementsByClassName('songItem')).length-1;
    }
    music.src = songs[index].source;
    music.play();        
    wave.classList.add('active1');
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    // Getting the details from the song array
    poster_master_play.src = songs[index].poster;
    title.innerHTML = songs[index].songName;

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index].style.background="rgba(247,173,29,.3)";
    
    makeAllplays();
    s.target.classList.remove('bi-play-circle');
    s.target.classList.add('bi-pause-circle');
})
next.addEventListener('click', (s)=>{
    index ++;
    if(index == Array.from(document.getElementsByClassName('songItem')).length){
        music.play();  
        index=0;
    }
    music.src = songs[index].source;
    music.play();        
    wave.classList.add('active1');
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    // Getting the details from the song array
    poster_master_play.src = songs[index].poster;
    title.innerHTML = songs[index].songName;

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index].style.background="rgba(247,173,29,.3)";
    
    makeAllplays();
    s.target.classList.remove('bi-play-circle');
    s.target.classList.add('bi-pause-circle');
})


// Left and Right icon of Popular Songs
let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click', ()=>{
    pop_song.scrollLeft += 330;
})
pop_song_left.addEventListener('click', ()=>{
    pop_song.scrollLeft -= 330;
})


// Left and Right icon of Popular Artists
let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let item = document.getElementsByClassName('item')[0];

pop_art_right.addEventListener('click', ()=>{
    item.scrollLeft += 330;
})
pop_art_left.addEventListener('click', ()=>{
    item.scrollLeft -= 330;
})



// After song finished then play the next song by default
// music.addEventListener('ended', ()=>{
//     index ++;
//     if(index == Array.from(document.getElementsByClassName('songItem')).length){
//         music.play();  
//         index=0;
//     }
//     music.src = songs[index].source;
//     music.play();        
//     wave.classList.add('active1');
//     masterPlay.classList.remove('bi-play-fill');
//     masterPlay.classList.add('bi-pause-fill');
//     // Getting the details from the song array
//     poster_master_play.src = songs[index].poster;
//     title.innerHTML = songs[index].songName;

//     makeAllBackground();
//     Array.from(document.getElementsByClassName('songItem'))[index].style.background="rgba(247,173,29,.3)";
    
//     makeAllplays();
//     s.target.classList.remove('bi-play-circle');
//     s.target.classList.add('bi-pause-circle');
// })

// Function to play next song
const next_music = () => {
    index ++;
    if(index == Array.from(document.getElementsByClassName('songItem')).length){
        music.play();  
        index=0;
    }
    music.src = songs[index].source;
    music.play();        
    wave.classList.add('active1');
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    // Getting the details from the song array
    poster_master_play.src = songs[index].poster;
    title.innerHTML = songs[index].songName;

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index].style.background="rgba(247,173,29,.3)";
    
    makeAllplays();
    s.target.classList.remove('bi-play-circle');
    s.target.classList.add('bi-pause-circle');
}

// Function to repeat the song
const repeat_music = () => {
    index;
    music.src = songs[index].source;
    music.play();        
    wave.classList.add('active1');
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    // Getting the details from the song array
    poster_master_play.src = songs[index].poster;
    title.innerHTML = songs[index].songName;

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index].style.background="rgba(247,173,29,.3)";
    
    makeAllplays();
    s.target.classList.remove('bi-play-circle');
    s.target.classList.add('bi-pause-circle');
}

// Function to play random song
const random_music = () => {
    index = Math.floor((Math.random() * songs.length) +1);
    if(index == Array.from(document.getElementsByClassName('songItem')).length){
        music.play();  
        index=0;
    }
    music.src = songs[index].source;
    music.play();        
    wave.classList.add('active1');
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    // Getting the details from the song array
    poster_master_play.src = songs[index].poster;
    title.innerHTML = songs[index].songName;

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index].style.background="rgba(247,173,29,.3)";
    
    makeAllplays();
    s.target.classList.remove('bi-play-circle');
    s.target.classList.add('bi-pause-circle');
}

// Shuffling, random selection, repeatation
let shuffle = document.getElementsByClassName('shuffle')[0];

shuffle.addEventListener('click', ()=>{
    let a = shuffle.innerHTML;

    switch (a) {
        case "next":
            shuffle.classList.add('bi-arrow-repeat');
            shuffle.classList.remove('bi-headphones');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'repeat';
            break;
    
        case "repeat":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.remove('bi-headphones');
            shuffle.classList.add('bi-shuffle');
            shuffle.innerHTML = 'random';
            break;
        case "random":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.add('bi-headphones');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'next';
            break;
    }
})

// Shuffling, random selection, repeatation

music.addEventListener('ended', ()=>{
    let b = shuffle.innerHTML;

    switch (b) {
        case "next":
            next_music();
            break;
    
        case "repeat":
            repeat_music();
            break;

        case "random":
            random_music();
            break;
    }
})

// Menu Button

if (window.screen.width <= 860) {
let menu_list_active_button = document.getElementById('menu_list_active_button');
let menu_side = document.getElementsByClassName('menu_side')[0];

menu_list_active_button.addEventListener('click', ()=>{
menu_side.style.transform = "unset";
menu_list_active_button.style.opacity = 0;
})

let song_side = document.getElementsByClassName('song_side')[0];
song_side.addEventListener('click', ()=>{
menu_side.style.transform = "translateX(-100%)";
menu_list_active_button.style.opacity = 1;
})

} 

