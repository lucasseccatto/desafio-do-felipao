class Hero {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    attack() {
        let attack;
        switch (this.type) {
            case "mago":
                attack = "magia";
                break;
            case "guerreiro":
                attack = "espada";
                break;
            case "monge":
                attack = "artes marciais";
                break;
            case "ninja":
                attack = "shuriken";
                break;
        }

        console.log(`O ${this.type} atacou usando ${attack}`);
    }
}

const firstHero = new Hero("Aragorn", 30, "guerreiro");
firstHero.attack()

const secondHero = new Hero("Gandalf", 150, "mago");
secondHero.attack()
