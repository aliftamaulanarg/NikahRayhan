import React, { useState } from 'react';

// Data sample untuk nama dan pesan
const sampleNames = [
    "Budi Santoso",
    "Dewi Kusuma",
    "Ahmad Hidayat",
    "Siti Rahayu",
    "Bambang Wijaya",
    "Rina Wulandari",
    "Agus Setiawan",
    "Nurul Hidayah",
    "Denny Pratama",
    "Maya Indah",
    "Fadli Rahman",
    "Putri Handayani",
    "Rudi Hermawan",
    "Ika Sari",
    "Ferry Gunawan",
    "Sri Wahyuni",
    "Hendra Kusuma",
    "Mega Puspita",
    "Andi Saputra",
    "Nina Safitri"
];

const sampleMessages = [
    "Selamat menempuh hidup baru! Semoga sakinah mawaddah warahmah 💕",
    "Happy wedding! Semoga menjadi keluarga yang bahagia selalu 🥰",
    "Barakallah untuk kedua mempelai. Semoga menjadi keluarga yang samawa 💫",
    "Selamat menikah! Semoga langgeng sampai kakek nenek ya 🤍",
    "MasyaAllah Tabarakallah, selamat menempuh hidup baru 💝",
    "Semoga menjadi keluarga yang penuh berkah dan kebahagiaan 🙏",
    "Happy wedding! Semoga bersama sampai Jannah ya 💑",
    "Selamat menikah! Semoga selalu bahagia dan dipenuhi rezeki 🎊",
    "Barakallah! Semoga menjadi keluarga yang sakinah mawaddah warahmah 💖",
    "Selamat menempuh hidup baru! Semoga selalu dalam lindungan Allah 🤲",
    "Selamat ya! Semoga selalu bahagia dan langgeng sampai maut memisahkan 💕",
    "MasyaAllah selamat untuk kedua mempelai. Bahagia selalu ya 🌹",
    "Semoga cinta kalian abadi dan semakin kuat setiap harinya 💑",
    "Selamat menikah! Semoga menjadi pasangan goals dunia akhirat 🤍",
    "Happy Wedding! Semoga rumah tangganya selalu diberkahi ya 🙏"
];

// Komponen untuk item wish dengan props
const WishItem = ({ name, message }) => (
    <div className="flex gap-2">
        <div>
            <img
                width={24}
                height={24}
                src="/api/placeholder/24/24"
                className="bg-[#ffff] rounded-sm"
            />
        </div>
        <div>
            <p className="text-white text-md -mt-1">{name}</p>
            <p className="text-xs text-[#A3A1A1]">{message}</p>
        </div>
    </div>
);

// Fungsi untuk mengambil item random dari array
const getRandomItem = (array) => array[Math.floor(Math.random() * array.length)];

// Generate array dengan 12 wish random
const generateRandomWishes = () => {
    // Membuat Set untuk menyimpan nama yang sudah digunakan
    const usedNames = new Set();
    return Array.from({ length: 12 }, () => {
        let name;
        // Memastikan nama tidak duplikat
        do {
            name = getRandomItem(sampleNames);
        } while (usedNames.has(name) && usedNames.size < sampleNames.length);
        usedNames.add(name);

        return {
            name,
            message: getRandomItem(sampleMessages)
        };
    });
};

export default function WishSection() {
    const [wishes] = useState(generateRandomWishes());
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    return (
        <div>
            <h2 className="text-lg leading-5 text-white font-bold mb-5">
                Wish for the couple
            </h2>
            <div className="h-[20rem] overflow-auto space-y-4">
                {wishes.map((wish, index) => (
                    <WishItem key={index} name={wish.name} message={wish.message} />
                ))}
            </div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    alert('submit');
                    setName('');
                    setMessage('');
                }}
                className="mt-4 space-y-4"
            >
                <div className="space-y-1">
                    <label>Name</label>
                    <input
                        className="w-full focus:outline-none px-2 py-1 text-black"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="space-y-1">
                    <label>Message</label>
                    <textarea
                        className="w-full focus:outline-none px-2 py-1 text-black"
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                </div>
                <button className="w-full py-2 bg-white text-black rounded-sm">
                    Send
                </button>
            </form>
        </div>
    );
}