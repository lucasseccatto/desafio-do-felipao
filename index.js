const heroNames = ["Lucas", "Felipão", "Ana"];
const heroXP = [7500, 12000, 5001];

for (let i = 0; i < heroNames.length; i++) {
    let heroName = heroNames[i];
    let heroXPValue = heroXP[i]; 
    let nivel;

    if (heroXPValue < 1000) {
        nivel = "Ferro";
    } else if (heroXPValue >= 1001 && heroXPValue <= 2000) {
        nivel = "Bronze";
    } else if (heroXPValue >= 2001 && heroXPValue <= 5000) {
        nivel = "Prata";
    } else if (heroXPValue >= 5001 && heroXPValue <= 7000) {
        nivel = "Ouro";
    } else if (heroXPValue >= 7001 && heroXPValue <= 8000) {
        nivel = "Platina";
    } else if (heroXPValue >= 8001 && heroXPValue <= 9000) {
        nivel = "Ascendente";
    } else if (heroXPValue >= 9001 && heroXPValue <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    console.log(`O Herói de nome ${heroName} está no nível ${nivel}`);
}
