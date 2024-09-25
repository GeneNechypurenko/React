export interface Club {
    id: number;
    name: string;
    city: string;
    founded: number;
    logo: string;
    achievements: string[];
    squad: { name: string; position: string }[];
  }

export const clubs = [
    {
        id: 1,
        name: "FC Barcelona",
        city: "Barcelona",
        founded: 1899,
        logo: "https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg",
        achievements: ["26 La Liga titles", "5 UEFA Champions League titles"],
        squad: [
            { name: "Lionel Messi", position: "Forward" },
            { name: "Marc-André ter Stegen", position: "Goalkeeper" },
            { name: "Sergio Busquets", position: "Midfielder" },
        ],
    },
    {
        id: 2,
        name: "Real Madrid",
        city: "Madrid",
        founded: 1902,
        logo: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
        achievements: ["35 La Liga titles", "14 UEFA Champions League titles"],
        squad: [
            { name: "Karim Benzema", position: "Forward" },
            { name: "Thibaut Courtois", position: "Goalkeeper" },
            { name: "Luka Modric", position: "Midfielder" },
        ],
    },
    {
        id: 3,
        name: "Manchester United",
        city: "Manchester",
        founded: 1878,
        logo: "https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg",
        achievements: ["20 Premier League titles", "3 UEFA Champions League titles"],
        squad: [
            { name: "Marcus Rashford", position: "Forward" },
            { name: "David de Gea", position: "Goalkeeper" },
            { name: "Bruno Fernandes", position: "Midfielder" },
        ],
    },
    {
        id: 4,
        name: "Liverpool",
        city: "Liverpool",
        founded: 1892,
        logo: "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg",
        achievements: ["19 Premier League titles", "6 UEFA Champions League titles"],
        squad: [
            { name: "Mohamed Salah", position: "Forward" },
            { name: "Alisson Becker", position: "Goalkeeper" },
            { name: "Virgil van Dijk", position: "Defender" },
        ],
    },
    {
        id: 5,
        name: "Chelsea",
        city: "London",
        founded: 1905,
        logo: "https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg",
        achievements: ["6 Premier League titles", "2 UEFA Champions League titles"],
        squad: [
            { name: "Kai Havertz", position: "Forward" },
            { name: "Edouard Mendy", position: "Goalkeeper" },
            { name: "N'Golo Kanté", position: "Midfielder" },
        ],
    },
    {
        id: 6,
        name: "Manchester City",
        city: "Manchester",
        founded: 1880,
        logo: "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg",
        achievements: ["9 Premier League titles", "1 UEFA Champions League title"],
        squad: [
            { name: "Erling Haaland", position: "Forward" },
            { name: "Ederson", position: "Goalkeeper" },
            { name: "Kevin De Bruyne", position: "Midfielder" },
        ],
    },
    {
        id: 7,
        name: "Bayern Munich",
        city: "Munich",
        founded: 1900,
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/640px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png",
        achievements: ["32 Bundesliga titles", "6 UEFA Champions League titles"],
        squad: [
            { name: "Robert Lewandowski", position: "Forward" },
            { name: "Manuel Neuer", position: "Goalkeeper" },
            { name: "Joshua Kimmich", position: "Midfielder" },
        ],
    },
    {
        id: 8,
        name: "Paris Saint-Germain",
        city: "Paris",
        founded: 1970,
        logo: "https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg",
        achievements: ["10 Ligue 1 titles", "1 UEFA Champions League final"],
        squad: [
            { name: "Kylian Mbappé", position: "Forward" },
            { name: "Gianluigi Donnarumma", position: "Goalkeeper" },
            { name: "Marquinhos", position: "Defender" },
        ],
    },
    {
        id: 9,
        name: "Juventus",
        city: "Turin",
        founded: 1897,
        logo: "https://upload.wikimedia.org/wikipedia/en/2/2d/Juventus_FC_2017_logo.svg",
        achievements: ["36 Serie A titles", "2 UEFA Champions League titles"],
        squad: [
            { name: "Cristiano Ronaldo", position: "Forward" },
            { name: "Wojciech Szczęsny", position: "Goalkeeper" },
            { name: "Leonardo Bonucci", position: "Defender" },
        ],
    },
    {
        id: 10,
        name: "AC Milan",
        city: "Milan",
        founded: 1899,
        logo: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Logo_of_AC_Milan.svg",
        achievements: ["19 Serie A titles", "7 UEFA Champions League titles"],
        squad: [
            { name: "Zlatan Ibrahimovic", position: "Forward" },
            { name: "Mike Maignan", position: "Goalkeeper" },
            { name: "Theo Hernandez", position: "Defender" },
        ],
    },
    {
        id: 11,
        name: "Atletico Madrid",
        city: "Madrid",
        founded: 1903,
        logo: "https://upload.wikimedia.org/wikipedia/en/f/f4/Atletico_Madrid_2017_logo.svg",
        achievements: ["11 La Liga titles", "3 UEFA Europa League titles"],
        squad: [
            { name: "Luis Suárez", position: "Forward" },
            { name: "Jan Oblak", position: "Goalkeeper" },
            { name: "Koke", position: "Midfielder" },
        ],
    },
    {
        id: 12,
        name: "Inter Milan",
        city: "Milan",
        founded: 1908,
        logo: "https://upload.wikimedia.org/wikipedia/en/0/05/Inter_Milan.svg",
        achievements: ["19 Serie A titles", "3 UEFA Champions League titles"],
        squad: [
            { name: "Romelu Lukaku", position: "Forward" },
            { name: "Samir Handanović", position: "Goalkeeper" },
            { name: "Milan Škriniar", position: "Defender" },
        ],
    },
];
