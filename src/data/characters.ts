import { Character } from "@/types/character";

export const CHARACTERS: Character[] = [
  {
    name: "Uzumaki Naruto",
    url: "https://i.imgur.com/MCUbyOu.png",
    description:
      "A Genin from Team 7, Naruto is an orphan with the goal to one day become Hokage. Using his signature move, Shadow Clones, Naruto is able to perform powerful moves such as the Uzumaki Naruto Combo and the Rasengan.",
    descriptionBR:
      "Um Genin do Time 7, Naruto é um órfão com o objetivo de se tornar Hokage um dia. Usando seu movimento característico, 'Shadow Clones', Naruto é capaz de realizar golpes poderosos, como 'Uzumaki Naruto Combo' e 'Rasengan'.",
    skills: [
      {
        name: "Uzumaki Naruto Combo",
        description:
          "Naruto's version of the Lion Combo. This skill <Damage>deals 20 damage<Damage> to one enemy. During <SkillName>'Shadow Clones'<SkillName>, this skill will deal <Improvements>10 additional damage<Improvements>.",
        descriptionBR:
          "A versão de Naruto do Lion Combo. Essa habilidade <Damage>causa 20 de dano<Damage> a um inimigo. Durante <SkillName>'Shadow Clones'<SkillName>, essa habilidade irá causar <Improvements>10 de dano adicional<Improvements>.",
        energy: ["Tai"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/Uy1TKG3.png",
      },
      {
        name: "Rasengan",
        description:
          "Naruto hits one enemy with a ball of chakra, <Damage>dealing 45 damage<Damage> to them and <Effects>stunning<Effects> all their skills, except <Classes>helpful-mental<Classes> skills, for 1 turn. Requires <SkillName>'Shadow Clones'<SkillName>.",
        descriptionBR:
          "Naruto atinge um inimigo com uma esfera de chakra, <Damage>causando 45 de dano<Damage> e <Effects>atordoando<Effects> todas as suas habilidades, <Classes>exceto habilidades mental defensivas<Classes>, por 1 turno. Requer <SkillName>'Shadow Clones'<SkillName>.",
        energy: ["Nin", "Random"],
        classes: ["Chakra", "Melee", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/v9ugaAD.png",
      },
      {
        name: "Shadow Clones",
        description:
          "Naruto creates multiple shadow clones hiding his true self. Naruto gains 15 <Defense>points of damage reduction<Defense> for 4 turns. During this time, <SkillName>'Uzumaki Naruto Combo'<SkillName> is improved and will <Improvements>deal an additional 10 damage<Improvements> and <SkillName>'Rasengan'<SkillName> may be used.",
        descriptionBR:
          "Naruto cria vários clones das sombras, escondendo seu verdadeiro eu. Naruto ganha 15 <Defense>pontos de redução de dano<Defense> por 4 turnos. Durante esse tempo, <SkillName>'Uzumaki Naruto Combo'<SkillName> irá <Improvements>causar 10 de dano adicional<Improvements>, e <SkillName>'Rasengan'<SkillName> poderá ser usado.",
        energy: ["Random"],
        classes: ["Chakra", "Instant"],
        cooldown: 3,
        url: "https://i.imgur.com/98c5RRL.png",
      },
      {
        name: "Sexy Technique",
        description:
          "This skill makes Uzumaki Naruto <Defense>invulnerable<Defense> for 1 turn. During <SkillName>'Kyuubi's Chakra Awakening'<SkillName>, this skill will be <Improvements>replaced<Improvements> by <SkillName>'Kyuubi's Presence'<SkillName> and will be classed as <Classes>Mental<Classes>.",
        descriptionBR:
          "Essa habilidade torna Uzumaki Naruto <Defense>invulnerável<Defense> por 1 turno. Durante <SkillName>'Kyuubi's Chakra Awakening'<SkillName>, essa habilidade será <Improvements>substituída<Improvements> por <SkillName>'Kyuubi's Presence'<SkillName> e será classificada como <Classes>Mental<Classes>.",
        energy: ["Random"],
        classes: ["Chakra", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/Aue7Pce.png",
      },
      {
        name: "Passive: Kyuubi's Chakra Awakening",
        description:
          "When Naruto <Improvements>reaches 50 health<Improvements> for the first time, Kyuubi's chakra will awaken, <Defense>healing<Defense> Naruto <Defense>for 5 health<Defense> every turn permanently. During this time, Naruto will <Improvements>deal 5 additional damage<Improvements> and <SkillName>'Shadow Clones'<SkillName> will grant him 15 <Defense>unpierceable damage<Defense> reduction instead. Passives cannot be removed.",
        descriptionBR:
          "Quando Naruto <Improvements>atingir 50 de vida<Improvements> pela primeira vez, o chakra da Kyuubi irá despertar, <Defense>curando<Defense> Naruto <Defense>em 5 de vida<Defense> a cada turno permanentemente. Durante esse tempo, Naruto irá <Improvements>causar 5 de dano adicional<Improvements>, e <SkillName>'Shadow Clones'<SkillName> concederá a ele 15 de <Defense>redução de dano impenetrável<Defense>. Passivas não podem ser removidas.",
        energy: [],
        classes: ["Passive", "Instant", "_$1", "_$2", "_$3", "_$4"],
        cooldown: 0,
        url: "https://i.imgur.com/vU2LIZQ.png",
      },
    ],
  },
  {
    name: "Haruno Sakura",
    url: "https://i.imgur.com/TWShCf2.png",
    description:
      "A Genin from Team 7, Sakura is very intelligent, but self-conscious about herself. Having just recently received training from Tsunade, Sakura is now able to deliver powerful punches and heal her own allies.",
    descriptionBR:
      "Uma Genin do Time 7, Sakura é muito inteligente, mas insegura sobre si mesma. Tendo recebido treinamento de Tsunade recentemente, Sakura agora é capaz de desferir golpes poderosos e curar seus próprios aliados.",
    skills: [
      {
        name: "KO Punch",
        description:
          "Sakura punches one enemy with all her strength, <Damage>dealing 20 damage<Damage> to them and <Effects>stunning<Effects> their <Classes>physical and mental<Classes> skills for 1 turn. During <SkillName>'Inner Sakura'<SkillName>, this skill will <Improvements>deal 10 additional damage<Improvements>.",
        descriptionBR:
          "Sakura soca um inimigo com toda a sua força, <Damage>causando 20 de dano<Damage> e <Effects>atordoando<Effects> suas habilidades <Classes>physical e mental<Classes> por 1 turno. Durante <SkillName>'Inner Sakura'<SkillName>, essa habilidade irá <Improvements>causar 10 de dano adicional<Improvements>.",
        energy: ["Tai"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/x0Yqker.png",
      },
      {
        name: "Cure",
        description:
          "Using basic healing techniques, Sakura <Defense>heals<Defense> herself or an ally <Defense>for 25 health<Defense>.",
        descriptionBR:
          "Usando técnicas básicas de cura, Sakura <Defense>cura<Defense> a si mesma ou um aliado <Defense>em 25 de vida<Defense>.",
        energy: ["Nin"],
        classes: ["Chakra", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/M2O5AdG.png",
      },
      {
        name: "Inner Sakura",
        description:
          "Sakura's inner self surfaces and urges her on. For 4 turns, Sakura will gain <Defense>25% damage reduction<Defense>. During this time, Sakura will <Defense>ignore non-damage effects<Defense> and <SkillName>'KO Punch'<SkillName> will <Improvements>deal 10 additional damage<Improvements>.",
        descriptionBR:
          "O verdadeiro eu de Sakura surge e a incentiva. Por 4 turnos, Sakura ganhará <Defense>25% de redução de dano<Defense>. Durante esse tempo, Sakura irá <Defense>ignorar todos os efeitos exceto dano<Defense> e <SkillName>'KO Punch'<SkillName> irá <Improvements>causar 10 de dano adicional<Improvements>.",
        energy: ["Random"],
        classes: ["Mental", "Instant", "Unique"],
        cooldown: 4,
        url: "https://i.imgur.com/03BjSkn.jpg",
      },
      {
        name: "Sakura Replacement Technique",
        description:
          "This skill makes Haruno Sakura <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Haruno Sakura <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Chakra", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/hGOwcqv.png",
      },
    ],
  },
  {
    name: "Uchiha Sasuke",
    url: "https://i.imgur.com/teixXT7.png",
    description:
      "A Genin from Team 7, Sasuke is the lone survivor of the Uchiha clan and has sworn vengeance against his brother. Using his sharingan, Sasuke is able to anticipate incoming attacks and is capable of advanced offensive moves.",
    descriptionBR:
      "Um Genin do Time 7, Sasuke é o único sobrevivente do clã Uchiha e jurou vingança contra seu irmão. Usando seu Sharingan, Sasuke é capaz de antecipar ataques e realizar golpes ofensivos avançados.",
    skills: [
      {
        name: "Lion Combo",
        description:
          "Copying a taijutsu combo that Lee used on him, Sasuke <Damage>deals 30 damage<Damage> to one enemy. This skill will <Improvements>deal an additional 15 damage<Improvements> to an enemy affected by <SkillName>'Sharingan'<SkillName>.",
        descriptionBR:
          "Copiando um combo de taijutsu que Lee usou contra ele, Sasuke <Damage>causa 30 de dano<Damage> a um inimigo. Essa habilidade irá<Improvements> causar 15 de dano adicional<Improvements> a um inimigo afetado por <SkillName>'Sharingan'<SkillName>.",
        energy: ["Tai", "Random"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/tEIH5fQ.png",
      },
      {
        name: "Chidori",
        description:
          "Using a lightning element attack jutsu, Sasuke <Damage>deals 40 piercing damag<Damage>e to one enemy. This skill will <Improvements>deal an additional 15 damage<Improvements> to an enemy affected by <SkillName>'Sharingan'<SkillName>. Requires <SkillName>'Sharingan'<SkillName> to be active on Sasuke.",
        descriptionBR:
          "Usando um jutsu de ataque do elemento raio, Sasuke <Damage>causa 40 de dano perfurante<Damage> a um inimigo. Essa habilidade irá <Improvements>causar 15 de dano adicional<Improvements> a um inimigo afetado por <SkillName>'Sharingan'<SkillName>. Requer que <SkillName>'Sharingan'<SkillName> esteja ativo em Sasuke.",
        energy: ["Nin", "Random"],
        classes: ["Chakra", "Melee", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/kQpuuuX.png",
      },
      {
        name: "Sharingan",
        description:
          "Sasuke targets one enemy. For 4 turns, Sasuke will gain <Defense>25% damage reduction<Defense> and <SkillName>'Chidori'<SkillName> may be used. During this time, that enemy will <Improvements>receive an additional 15 damage<Improvements> from <SkillName>'Lion Combo'<SkillName> and <SkillName>'Chidori'<SkillName>.",
        descriptionBR:
          "Sasuke marca um inimigo. Por 4 turnos, Sasuke ganhará <Defense>25% de redução de dano<Defense> e <SkillName>'Chidori'<SkillName> poderá ser usado. Durante esse tempo, esse inimigo irá <Improvements>receber 15 de dano adicional<Improvements> de <SkillName>'Lion Combo'<SkillName> e <SkillName>'Chidori'<SkillName>.",
        energy: [],
        classes: ["Mental", "Ranged", "Instant", "Unique"],
        cooldown: 3,
        url: "https://i.imgur.com/Sv53VXt.png",
      },
      {
        name: "Sasuke Hide",
        description:
          "This skill makes Uchiha Sasuke <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Uchiha Sasuke <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Mental", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/DqY78Vo.png",
      },
      {
        name: "Passive: Cursed Seal Awakening",
        description:
          "When Sasuke <Improvements>reaches 50 health<Improvements> for the first time, Cursed Seal will awaken, granting Sasuke <Defense>35% unpierceable damage reduction<Defense> permanently. During this time, Sasuke's skills <Classes>cannot be countered<Classes> or <Classes>reflected<Classes> and <SkillName>'Sharingan'<SkillName> will also make the enemy unable to <Defense>reduce damage<Defense> or <Defense>become invulnerable<Defense>.",
        descriptionBR:
          "Quando Sasuke <Improvements>atingir 50 de vida<Improvements> pela primeira vez, a Marca da Maldição será despertada, concedendo a Sasuke <Defense>35% de redução de dano impenetrável<Defense> permanentemente. Durante esse tempo, as habilidades de Sasuke <Classes>não poderão ser anuladas<Classes> ou <Classes>refletidas<Classes>, e <SkillName>'Sharingan'<SkillName> também fará com que o inimigo não possa <Defense>reduzir dano<Defense> ou <Defense>se tornar invulnerável<Defense>.",
        energy: [],
        classes: ["Passive", "Instant", "_$1", "_$2", "_$3", "_$4"],
        cooldown: 0,
        url: "https://i.imgur.com/zdEp3Mv.png",
      },
    ],
  },
  {
    name: "Inuzuka Kiba",
    url: "https://i.imgur.com/2RwMXy9.png",
    description:
      "A Genin from Team 8, Kiba is a member of the Inuzuka clan, and is both short-tempered and impulsive. Using his dog, Akamaru, Kiba is capable of powerful taijutsu or fusing with Akamaru to become a deadly double headed dog.",
    descriptionBR:
      "Uma Genin do Time 8, Kiba é um membro do clã Inuzuka, sendo impetuoso e de temperamento curto. Usando seu cachorro, Akamaru, Kiba é capaz de realizar poderosos taijutsus ou se fundir com Akamaru para se tornar um mortal cachorro de duas cabeças.",
    skills: [
      {
        name: "Dynamic Air Marking",
        description:
          "Akamaru sprays urine on one enemy who cannot <Defense>reduce damage<Defense> or <Defense>become invulnerable<Defense> for 3 turns. During this time, <SkillName>'Double Headed Wolf'<SkillName> and <SkillName>'Garouga'<SkillName> will <Improvements>deal 5 additional damage<Improvements> to them. This skill <Improvements>may not be used<Improvements> on an enemy already affected by it.",
        descriptionBR:
          "Akamaru espalha urina em um inimigo que não poderá <Defense>reduzir dano<Defense> ou <Defense>se tornar invulnerável<Defense> por 3 turnos. Durante esse tempo, <SkillName>'Double Headed Wolf'<SkillName> e <SkillName>'Garouga'<SkillName> irão <Improvements>causar 5 de dano adicional<Improvements> a ele. Essa habilidade <Improvements>não pode ser usada<Improvements> em um inimigo que já esteja afetado por ela.",
        energy: [],
        classes: ["Physical", "Ranged", "Instant", "Unique", "Affliction"],
        cooldown: 1,
        url: "https://i.imgur.com/I6iXYsf.png",
      },
      {
        name: "Double Headed Wolf",
        description:
          "Kiba and Akamaru turn into a giant beast and attack all enemies, <Damage>dealing 15 damage<Damage> to them for 3 turns. The following 3 turns, <SkillName>'Garouga'<SkillName> is improved and will <Improvements>cost 1 less random chakra<Improvements>. During this time, Kiba gains 10 <Defense>points of damage reduction<Defense>.",
        descriptionBR:
          "Kiba e Akamaru se transformam em uma besta gigante e atacam todos os inimigos, <Damage>causando 15 de dano<Damage> a eles por 3 turnos. Nos próximos 3 turnos, <SkillName>'Garouga'<SkillName> é melhorado e <Improvements>custará 1 chakra aleatório a menos<Improvements>. Durante esse tempo, Kiba ganha 10 <Defense>pontos de redução de dano<Defense>.",
        energy: ["Tai", "Blood"],
        classes: ["Physical", "Melee", "Action", "Unique"],
        cooldown: 3,
        url: "https://i.imgur.com/dTMLAr4.png",
      },
      {
        name: "Garouga",
        description:
          "Kiba <Damage>deals 30 damage<Damage> to one enemy. During <SkillName>'Double Headed Wolf'<SkillName>, this skill is improved and will <Improvements>cost 1 less random chakra<Improvements>.",
        descriptionBR:
          "Kiba <Damage>causa 30 de dano<Damage> a um inimigo. Durante <SkillName>'Double Headed Wolf'<SkillName>, essa habilidade é melhorada e <Improvements>custará 1 chakra aleatório a menos<Improvements>.",
        energy: ["Tai", "Random"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/bDo7cUF.png",
      },
      {
        name: "Smoke Bomb",
        description:
          "This skill makes Inuzuka Kiba <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Inuzuka Kiba <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/SM6uB5m.png",
      },
    ],
  },
  {
    name: "Aburame Shino",
    url: "https://i.imgur.com/XSgn9p9.png",
    description:
      "A Genin from Team 8, Shino is the successor of the Aburame clan, and a very reserved and tactical fighter. Using the bugs that live inside his body, Shino is able to leech the chakra off his enemies, or protect his entire team.",
    descriptionBR:
      "Uma Genin do Time 8, Shino é o sucessor do clã Aburame, sendo um lutador muito reservado e tático. Usando os insetos que vivem dentro de seu corpo, Shino é capaz de drenar o chakra de seus inimigos ou proteger toda a sua equipe.",
    skills: [
      {
        name: "Female Bug",
        description:
          "Shino directs one of his female bugs to attach itself. For 4 turns, <SkillName>'Chakra Leach'<SkillName> will <Improvements>deal 5 additional damage<Improvements> to one enemy. During this time, if that enemy <Classes>uses a new harmful skill<Classes>, they will <Effects>deal 5 less non-affliction damage<Effects> for 1 turn. This skill stacks.",
        descriptionBR:
          "Shino direciona um de seus insetos fêmea para se prender ao inimigo. Por 4 turnos, <SkillName>'Chakra Leach'<SkillName> irá <Improvements>causar 5 de dano adicional<Improvements> a um inimigo. Durante esse tempo, se esse inimigo <Classes>usar uma nova habilidade ofensiva<Classes>, ele irá <Effects>causar 5 a menos de dano não aflitivo<Effects> por 1 turno. Essa habilidade acumula.",
        energy: [],
        classes: ["Physical", "Ranged", "Instant", "Unique", "Affliction"],
        cooldown: 2,
        url: "https://i.imgur.com/MRWPHSi.png",
      },
      {
        name: "Bug Wall",
        description:
          "Shino calls millions of bugs to create a wall protecting himself and his allies, making the entire team <Defense>invulnerable<Defense> for 1 turn and granting them 10 <Defense>points of permanent destructible defense<Defense>.",
        descriptionBR:
          "Shino chama milhões de insetos para criar uma parede protegendo a si e seus aliados, tornando toda a equipe <Defense>invulnerável<Defense> por 1 turno e concedendo 10 <Defense>pontos de defesa destrutível permanente<Defense>.",
        energy: ["Blood", "Blood"],
        classes: ["Physical", "Instant", "Unique"],
        cooldown: 5,
        url: "https://i.imgur.com/Zvu9ydw.png",
      },
      {
        name: "Chakra Leach",
        description:
          "Shino directs his chakra draining bugs to one enemy, <Damage>dealing 15 affliction<Damage> damage and <Effects>stealing 1 taijutsu or genjutsu chakra<Effects> from their chakra pool. The following turn <Classes>(only)<Classes>, this skill will <Improvements>deal 20 affliction damage<Improvements> but will not <Effects>steal chakra<Effects>.",
        descriptionBR:
          "Shino direciona seus insetos drenadores de chakra para um inimigo, <Damage>causando 15 de dano aflitivo<Damage> e <Effects>roubando 1 taijutsu ou genjutsu chakra<Effects> dele. No próximo turno <Classes>(apenas)<Classes>, essa habilidade irá <Improvements>causar 20 de dano aflitivo<Improvements>, mas não <Effects>roubará chakra<Effects>.",
        energy: ["Blood"],
        classes: ["Chakra", "Ranged", "Instant", "Unique", "Affliction"],
        cooldown: 0,
        url: "https://i.imgur.com/mNTreml.png",
      },
      {
        name: "Bug Clone",
        description:
          "This skill makes Aburame Shino <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Aburame Shino <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Chakra", "Instant", "Unique"],
        cooldown: 4,
        url: "https://i.imgur.com/MnV2zJn.png",
      },
    ],
  },
  {
    name: "Hyuuga Hinata",
    url: "https://i.imgur.com/e5935Kz.png",
    description:
      "A Genin from Team 8, Hinata is the next in line in the Hyuuga clan, but she is shy and very withdrawn. Using the trademark Byakugan of the Hyuuga, Hinata is able to delicately target an enemy's Chakra Points while defending the team.",
    descriptionBR:
      "Uma Genin do Time 8, Hinata é a próxima na linha do clã Hyuuga, mas é tímida e muito reservada. Usando o Byakugan, marca registrada dos Hyuuga, Hinata é capaz de atingir delicadamente os Pontos de Chakra de um inimigo enquanto defende a equipe.",
    skills: [
      {
        name: "Byakugan",
        description:
          "Hinata activates her Byakugan and gains <Defense>50% damage reduction<Defense> for 4 turns. During this time, <SkillName>'Gentle Fist'<SkillName> and <SkillName>'Eight Trigrams 64 Palms Protection'<SkillName> will be improved and <SkillName>'Byakugan'<SkillName> will <Effects>reveal any invisible skills<Effects> used by the enemy team. This skill <Classes>cannot be countered<Classes> and it ends if Hinata <Classes>dies<Classes>.",
        descriptionBR:
          "Hinata ativa seu Byakugan e ganha <Defense>50% de redução de dano<Defense> por 4 turnos. Durante esse tempo, <SkillName>'Gentle Fist'<SkillName> e <SkillName>'Eight Trigrams 64 Palms Protection'<SkillName> serão melhorados e <SkillName>'Byakugan'<SkillName> irá <Effects>revelar qualquer habilidade invisível<Effects> usada pela equipe inimiga. Essa habilidade <Classes>não pode ser anulada<Classes> e termina se Hinata <Classes>morrer<Classes>.",
        energy: ["Random"],
        classes: ["Mental", "Ranged", "Instant", "Unique"],
        cooldown: 3,
        url: "https://i.imgur.com/T4KZRDT.png",
      },
      {
        name: "Hinata Gentle Fist",
        description:
          "Using the Hyuuga clan's style of taijutsu, Hinata <Damage>deals 20 damage<Damage> to one enemy. The following turn, that enemy will be <Damage>dealt 15 damage<Damage>. During <SkillName>'Byakugan'<SkillName>, this skill will instantly <Effects>remove 1 non-genjutsu chakra<Effects> for 1 turn.",
        descriptionBR:
          "Usando o estilo de taijutsu do clã Hyuuga, Hinata <Damage>causa 20 de dano<Damage> a um inimigo. No próximo turno, esse inimigo irá <Damage>receber 15 de dano<Damage>. Durante <SkillName>'Byakugan'<SkillName>, essa habilidade irá instantaneamente <Effects>remover 1 não-genjutsu chakra<Effects> por 1 turno.",
        energy: ["Tai"],
        classes: ["Physical", "Melee", "Action", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/hiQouXW.png",
      },
      {
        name: "Eight Trigrams 64 Palms Protection",
        description:
          "Hinata <Damage>deals 10 piercing damage<Damage> to all enemies for 2 turns. For 1 turn, if Hinata or her allies is <Classes>affected by a new damage skill<Classes>, they will become <Defense>invulnerable<Defense> for 1 turn*. During <SkillName>'Byakugan'<SkillName>, this skill will <Improvements>deal 5 additional damage<Improvements>.",
        descriptionBR:
          "Hinata <Damage>causa 10 de dano perfurante<Damage> a todos os inimigos por 2 turnos. Por 1 turno, se Hinata ou seus aliados forem <Classes>afetados por uma nova habilidade de dano<Classes>, eles se tornarão <Defense>invulneráveis<Defense> por 1 turno*. Durante <SkillName>'Byakugan'<SkillName>, essa habilidade irá <Improvements>causar 5 de dano adicional<Improvements>.",
        energy: ["Nin", "Random"],
        classes: ["Chakra", "Melee", "Action", "Unique", "Instant*"],
        cooldown: 2,
        url: "https://i.imgur.com/nyci2QP.png",
      },
      {
        name: "Hinata Block",
        description:
          "This skill makes Hyuuga Hinata <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Hyuuga Hinata <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/GLXR6wv.png",
      },
    ],
  },
  {
    name: "Nara Shikamaru",
    url: "https://i.imgur.com/K2zZmN5.png",
    description:
      "A Genin from Team 10, a member of the Nara clan, Shikamaru is considered to be the smartest Genin of all the Konoha 11. Using his bloodline, Shikamaru can manipulate the shadows in the battlefield to disable and attack his enemies.",
    descriptionBR:
      "Uma Genin do Time 10, membro do clã Nara, Shikamaru é considerado o Genin mais inteligente de todos os Konoha 11. Usando sua linhagem, Shikamaru pode manipular as sombras no campo de batalha para desabilitar e atacar seus inimigos.",
    skills: [
      {
        name: "Meditate",
        description:
          "Shikamaru sits down and begins thinking up a strategy against one enemy, <Improvements>marking<Improvements> them for 5 turns. This skill <Classes>cannot be countered<Classes> or <Classes>reflected<Classes> and <Improvements>may not used<Improvements> on an enemy already affected by it.",
        descriptionBR:
          "Shikamaru se senta e começa a pensar em uma estratégia contra um inimigo, <Improvements>marcando<Improvements> ele por 5 turnos. Essa habilidade <Classes>não pode ser anulada<Classes> ou <Classes>refletida<Classes> e <Improvements>não pode ser usada<Improvements> em um inimigo já afetado por ela.",
        energy: [],
        classes: ["Mental", "Ranged", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/CdbnJMj.png",
      },
      {
        name: "Shadow Imitation",
        description:
          "Shikamaru captures all enemies in shadows, <Effects>stunning<Effects> their <Classes>physical and chakra<Classes> skills for 1 turn. The following turn, they will <Improvements>receive 5 additional<Improvements> damage from <SkillName>'Shadow-Neck Bind'<SkillName>. Enemies affected by <SkillName>'Meditate'<SkillName> will instead have their <Effects>skills stunned<Effects> for 2 turns.",
        descriptionBR:
          "Shikamaru captura todos os inimigos nas sombras, <Effects>atordoando<Effects> suas habilidades <Classes>physical e chakra<Classes> por 1 turno. No próximo turno, eles irão <Improvements>receber 5 de dano adicional<Improvements> de <SkillName>'Shadow-Neck Bind'<SkillName>. Inimigos afetados por <SkillName>'Meditate'<SkillName> terão suas <Effects>habilidades atordoadas<Effects> por 2 turnos.",
        energy: ["Gen", "Random"],
        classes: ["Chakra", "Ranged", "Control"],
        cooldown: 3,
        url: "https://i.imgur.com/eC9GWCD.png",
      },
      {
        name: "Shadow-Neck Bind",
        description:
          "Shikamaru chokes all enemies, <Damage>dealing 15 affliction damage<Damage> to them and making them unable to <Defense>become invulnerable<Defense> for 1 turn. If an enemy is affected by <SkillName>'Meditate'<SkillName>, this skill will <Improvements>last 2 turns<Improvements> instead.",
        descriptionBR:
          "Shikamaru estrangula todos os inimigos, <Damage>causando 15 de dano aflitivo<Damage> a eles e os tornando incapazes de <Defense>se tornarem invulneráveis<Defense> por 1 turno. Se um inimigo estiver sendo afetado por <SkillName>'Meditate'<SkillName>, essa habilidade <Improvements>durará 2 turnos<Improvements>.",
        energy: ["Gen"],
        classes: ["Chakra", "Ranged", "Action", "Affliction"],
        cooldown: 1,
        url: "https://i.imgur.com/CmEudLR.png",
      },
      {
        name: "Shikamaru Hide",
        description:
          "This skill makes Nara Shikamaru <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Nara Shikamaru <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Mental", "Instant", "Helpful"],
        cooldown: 4,
        url: "https://i.imgur.com/GhEHgrl.png",
      },
    ],
  },
  {
    name: "Akimichi Chouji",
    url: "https://i.imgur.com/NxOq035.png",
    description:
      "A Genin from Team 10, Chouji is a member of the Akimichi clan, a large eater, and a close friend to his allies. While innately strong, Chouji is able to sacrifice his own life using special pills from his clan to become insanely powerful.",
    descriptionBR:
      "Um Genin da Equipe 10, Chouji é um membro do clã Akimichi, <Damage>um grande comedor<Damage> e um amigo próximo de seus aliados. Embora seja naturalmente forte, Chouji é capaz de sacrificar sua própria vida usando pílulas especiais de seu clã para se tornar extremamente poderoso.",
    skills: [
      {
        name: "Partial Double Size",
        description:
          "Chouji doubles the size of his arms and attacks one enemy, <Damage>dealing 20 damage<Damage> to them.",
        descriptionBR:
          "Chouji dobra o tamanho de seus braços e ataca um inimigo, <Damage>causando 20 de dano<Damage> a ele.",
        energy: ["Tai"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/cnZD5Wd.png",
      },
      {
        name: "Meat Tank",
        description:
          "Chouji transforms into a meat tank <Damage>dealing 10 damage<Damage> to one enemy for 2 turns. Chouji becomes <Defense>invulnerable<Defense> for 2 turns. Chouji <Defense>cannot be healed<Defense> during <SkillName>'Meat Tank'<SkillName>.",
        descriptionBR:
          "Chouji se transforma em um tanque de carne, <Damage>causando 10 de dano<Damage> a um inimigo por 2 turnos. Chouji se torna <Defense>invulnerável<Defense> por 2 turnos. Chouji <Defense>não pode ser curado<Defense> durante <SkillName>'Meat Tank'<SkillName>.",
        energy: ["Blood"],
        classes: ["Physical", "Action", "Instant*", "Melee"],
        cooldown: 2,
        url: "https://i.imgur.com/sCIWub7.png",
      },
      {
        name: "Akimichi Pills",
        description:
          "Chouji eats a pill, <Damage>taking 15 affliction damage<Damage>*. <SkillName>'Partial Double Size'<SkillName> will <Improvements>deal 20 additional damage<Improvements> and <SkillName>'Meat Tank'<SkillName> will <Improvements>deal 10 additional damage<Improvements> permanently. Each use of this skill will <Damage>deal 5 more affliction damage<Damage> and will <Improvements>cost 2 additional random chakra<Improvements>. Chouji can only eat <Classes>three<Classes> pills.",
        descriptionBR:
          "Chouji come uma pílula, <Damage>recebendo 15 de dano aflitivo<Damage>*. <SkillName>'Partial Double Size'<SkillName> irá <Improvements>causar 20 de dano adicional<Improvements> e <SkillName>'Meat Tank'<SkillName> irá <Improvements>causar 10 de dano adicional<Improvements> permanentemente. Cada uso dessa habilidade irá <Damage>causar 5 de dano aflitivo a mais<Damage> e <Improvements>custará 2 chakra aleatório adicional<Improvements>. Chouji pode comer apenas <Classes>três<Classes> pílulas.",
        energy: [],
        classes: ["Chakra", "Instant", "Unique", "Affliction*"],
        cooldown: 0,
        url: "https://i.imgur.com/mlL0qYo.png",
      },
      {
        name: "Effortless Block",
        description:
          "This skill makes Akimichi Chouji <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Akimichi Chouji <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/wVVFj3V.png",
      },
      {
        name: "Passive: Butterfly Mode",
        description:
          "When Chouji <Improvements>eats the three pills<Improvements>, he will activate the Butterfly Mode, gaining 75% <Defense>unpierceable damage reduction<Defense> permanently and <Effects>gaining 1 random chakra<Effects> every turn.",
        descriptionBR:
          "Quando Chouji <Improvements>comer as três pílulas<Improvements>, ele ativará o Modo Borboleta, ganhando <Defense>75% de redução de dano intransponível<Defense> permanentemente e <Effects>ganhando 1 chakra aleatório<Effects> a cada turno.",
        energy: [],
        classes: ["Chakra", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/cRqzTG1.png",
      },
    ],
  },
  {
    name: "Yamanaka Ino",
    url: "https://i.imgur.com/5pxmVTr.png",
    description:
      "A Genin from Team 10, Ino is a member of the Yamanaka clan, and a very confident and vain girl. Ino is able to use a variety of abilities to take over and control her enemies, making it difficult to tell friend from foe.",
    descriptionBR:
      "Uma Genin do Time 10, Ino é membro do clã Yamanaka e uma garota muito confiante e vaidosa. Ino é capaz de usar uma variedade de habilidades para tomar o controle de seus inimigos, tornando difícil distinguir amigo de inimigo.",
    skills: [
      {
        name: "Mind Body Disturbance",
        description:
          "Using this skill Ino <Effects>stuns<Effects> one enemy's <Classes>harmful skills<Classes> for 1 turn. During this time, that enemy will be unable to <Defense>reduce damage<Defense> or <Defense>become invulnerable<Defense>. One random different enemy will <Damage>receive 20 damage<Damage> that <Classes>ignores invulnerability<Classes>.",
        descriptionBR:
          "Usando essa habilidade, Ino <Effects>atordoa<Effects> as <Classes>habilidades ofensivas<Classes> de um inimigo por 1 turno. Durante esse tempo, esse inimigo será incapaz de <Defense>reduzir dano<Defense> ou <Defense>se tornar invulnerável<Defense>. Um inimigo aleatório diferente irá <Damage>receber 20 de dano<Damage> que <Classes>ignora invulnerabilidade<Classes>.",
        energy: ["Gen"],
        classes: ["Mental", "Ranged", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/rAnVK81.png",
      },
      {
        name: "Change of Heart",
        description:
          "Ino takes over the mind of an enemy. For 2 turns, that enemy cannot <Defense>reduce damage<Defense> or <Defense>become invulnerable<Defense> and their <Classes>physical and chakra<Classes> skills are <Effects>stunned<Effects>. The following 2 turns, this skill will be <Improvements>replaced<Improvements> by <SkillName>'Art of the Valentine'<SkillName>.",
        descriptionBR:
          "Ino assume o controle da mente de um inimigo. Por 2 turnos, esse inimigo não poderá <Defense>reduzir dano<Defense> ou <Defense>se tornar invulnerável<Defense>, e suas habilidades <Classes>Physical e Chakra<Classes> serão <Effects>atordoadas<Effects>. Nos próximos 2 turnos, essa habilidade será <Improvements>substituída<Improvements> por <SkillName>'Art of the Valentine'<SkillName>.",
        energy: ["Gen", "Gen"],
        classes: ["Mental", "Ranged", "Control"],
        cooldown: 3,
        url: "https://i.imgur.com/r6vPVIR.png",
      },
      {
        name: "Chakra Hair Strand Trap",
        description:
          "Ino creates a trap for an enemy. For 1 turn, if that enemy <Classes>uses a new harmful skill<Classes>, then for 2 turns, <SkillName>'Change of Heart'<SkillName> will <Improvements>last 1 additional turn<Improvements> on that enemy and <SkillName>'Mind Body Disturbance'<SkillName> will make that enemy unable to <Defense>reduce damage<Defense> or <Defense>become invulnerable<Defense> for 2 turns instead. <Invisible>This skill is invisible<Invisible>.",
        descriptionBR:
          "Ino cria uma armadilha para um inimigo. Por 1 turno, se esse inimigo <Classes>usar uma nova habilidade ofensiva<Classes>, então por 2 turnos, <SkillName>'Change of Heart'<SkillName> irá <Improvements>durar 1 turno adicional<Improvements> nesse inimigo e <SkillName>'Mind Body Disturbance'<SkillName> fará com que esse inimigo não possa <Defense>reduzir dano<Defense> ou <Defense>se tornar invulnerável<Defense> por 2 turnos. <Invisible>Essa habilidade é invisível<Invisible>.",
        energy: [],
        classes: ["Chakra", "Instant", "Ranged"],
        cooldown: 1,
        url: "https://i.imgur.com/4VxNq83.png",
      },
      {
        name: "Ino Block",
        description:
          "This skill makes Yamanaka Ino <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Yamanaka Ino <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/2o5RnKa.png",
      },
      {
        name: "Art of the Valentine",
        description:
          "Ino <Damage>deals 25 damage<Damage> to one enemy. If used on an enemy affected by <SkillName>'Change of Heart'<SkillName>, this skill will <Improvements>deal 30 damage<Improvements> instead.",
        descriptionBR:
          "Ino <Damage>causa 25 de dano<Damage> a um inimigo. Se usada em um inimigo afetado por <SkillName>'Change of Heart<SkillName>', essa habilidade irá <Improvements>causar 30 de dano<Improvements>.",
        energy: ["Random"],
        classes: ["Physical", "Ranged", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/RfWzT2j.png",
      },
    ],
  },
  {
    name: "Tenten",
    url: "https://i.imgur.com/Qe7Q2Ig.png",
    description:
      "A member of team Gai, Tenten is a tomboyish weapon specialist who believes a kunoichi can be as strong as a male ninja. In battle, Tenten surrounds the battlefield in weapons, using them for damage and for disabling her",
    descriptionBR:
      "Membro da equipe Gai, Tenten é uma especialista em armas, com uma personalidade meio moleca, que acredita que uma kunoichi pode ser tão forte quanto um ninja masculino. Em batalha, Tenten cerca o campo de batalha com armas, utilizando-as para causar dano e desabilitar seus inimigos.",
    skills: [
      {
        name: "Twin Rising Dragons Full Release",
        description:
          "Tenten releases her full potential, becoming <Defense>invulnerable<Defense> to <Classes>non-mental damage skills<Classes> for 1 turn. The following 4 turns, the initial use of <SkillName>'Twin Rising Dragons'<SkillName> will <Improvements>last 3 turns instead<Improvements> and <SkillName>'Twin Rising Dragons Trap'<SkillName> will <Effects>stun<Effects> all <Classes>harmful non-mental skills<Classes> for 1 turn.",
        descriptionBR:
          "Tenten libera seu pleno potencial, tornando-se <Defense>invulnerável<Defense> a <Classes>habilidades de dano não mental<Classes> por 1 turno. Nos próximos 4 turnos, o uso inicial de <SkillName>'Twin Rising Dragons'<SkillName> irá <Improvements>durar 3 turnos em vez de 2<Improvements>, e <SkillName>'Twin Rising Dragons Trap'<SkillName> irá <Effects>atordoar<Effects> todas as <Classes>habilidades ofensivas não mentais<Classes> por 1 turno.",
        energy: [],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/JoWMQ0x.png",
      },
      {
        name: "Twin Rising Dragons",
        description:
          "Tenten creates numerous weapons from her scroll, <Damage>dealing 15 damage<Damage> to all enemies for 2 turns. During this time, this skill will <Improvements>cost 1 taijutsu<Improvements> and will <Damage>deal 20 damage<Damage> to one enemy and 10 to all others.",
        descriptionBR:
          "Tenten cria diversas armas de seu pergaminho, <Damage>causando 15 de dano<Damage> a todos os inimigos por 2 turnos. Durante esse tempo, essa habilidade irá <Improvements>custar 1 taijutsu<Improvements> e <Damage>causará 20 de dano<Damage> a um inimigo e 10 a todos os outros.",
        energy: ["Tai", "Random"],
        classes: ["Physical", "Ranged", "Action"],
        cooldown: 0,
        url: "https://i.imgur.com/JjGnHUb.png",
      },
      {
        name: "Twin Rising Dragons Trap",
        description:
          "Using multiple projectiles, Tenten targets all enemies, <Damage>dealing 5 damage<Damage> to them for each time <Classes>they were damaged<Classes> by <SkillName>'Twin Rising Dragons'<SkillName>. Afterwards, all stacks are removed.",
        descriptionBR:
          "Usando múltiplos projéteis, Tenten atinge todos os inimigos, <Damage>causando 5 de dano<Damage> a eles para cada vez que <Classes>eles receberam dano<Classes> de <SkillName>'Twin Rising Dragons'<SkillName>. Após isso, todos os stacks serão removidos.",
        energy: ["Random"],
        classes: ["Physical", "Ranged", "Instant"],
        cooldown: 2,
        url: "https://i.imgur.com/N1MpGCn.png",
      },
      {
        name: "Spiked Boulder Shield",
        description:
          "This skill makes Tenten <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Tenten <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/Wft7mi8.png",
      },
    ],
  },
  {
    name: "Hyuuga Neji",
    url: "https://i.imgur.com/SnXl3u9.jpg",
    description:
      "A member of team Gai; Neji is the most talented member of the Hyuuga clan in both mind and body. Neji can use the most powerful techniques of his clan, shutting down an enemy's chakra or defending with an absolute defense.",
    descriptionBR:
      "Um membro do Time Gai, Neji é o membro mais talentoso do Clã Hyuuga tanto em mente quanto em corpo. Neji pode usar as técnicas mais poderosas de seu clã, anulando o chakra de um inimigo ou se defendendo com uma defesa absoluta.",
    skills: [
      {
        name: "Neji Gentle Fist",
        description:
          "Using the Hyuuga clan's special form of taijutsu, Neji <Damage>deals 25 damage<Damage> to one enemy for 2 turns. Each turn, <Effects>their non-affliction damage<Effects> will be <Effects>reduced to a maximum of 25<Effects>. The following turn, <SkillName>'Eight Trigram Sixty-Four Palms'<SkillName> will <Improvements>cost 1 taijutsu and 1 random chakra<Improvements>.",
        descriptionBR:
          "Usando a forma especial de taijutsu do Clã Hyuuga, Neji irá <Damage>causar 25 de dano<Damage> a um inimigo por 2 turnos. A cada turno, <Effects>o dano não aflitivo<Effects> desse inimigo será <Effects>reduzido para um máximo de 25<Effects>. No próximo turno, <SkillName>'Eight Trigram Sixty-Four Palms'<SkillName> irá <Improvements>custar 1 taijutsu e 1 random chakra<Improvements>.",
        energy: ["Tai", "Random"],
        classes: ["Physical", "Melee", "Action", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/TO1FgCV.png",
      },
      {
        name: "Eight Trigram Heavenly Spin",
        description:
          "Neji becomes <Defense>invulnerable<Defense> for 1 turn while <Damage>dealing 15 damage<Damage> to all enemies. The following turn, <SkillName>'Eight Trigram Sixty-Four Palms'<SkillName> will <Improvements>cost 1 bloodline and 1 random chakra<Improvements>.",
        descriptionBR:
          "Neji se torna <Defense>invulnerável<Defense> por 1 turno enquanto irá <Damage>causar 15 de dano<Damage> a todos os inimigos. No próximo turno, <SkillName>'Eight Trigram Sixty-Four Palms'<SkillName> irá <Improvements>custar 1 bloodline e 1 random chakra<Improvements>.",
        energy: ["Blood"],
        classes: ["Chakra", "Melee", "Instant", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/SbXg9y7.png",
      },
      {
        name: "Eight Trigram Sixty-Four Palms",
        description:
          "Neji closes all of one enemy's chakra nodes, <Damage>dealing 35 piercing damage<Damage> to them and <Effects>removing 1 taijutsu or ninjutsu chakra<Effects> from them for 2 turns.",
        descriptionBR:
          "Neji fecha todos os pontos de chakra de um inimigo, <Damage>causando 35 de dano perfurante<Damage> a ele e <Effects>removendo 1 taijutsu ou ninjutsu chakra<Effects> dele por 2 turnos.",
        energy: ["Tai", "Blood"],
        classes: ["Physical", "Melee", "Action", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/gLzCj5f.png",
      },
      {
        name: "Neji Byakugan",
        description:
          "This skill makes Hyuuga Neji <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Hyuuga Neji <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Mental", "Unique", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/8mfr9KF.png",
      },
    ],
  },
  {
    name: "Rock Lee",
    url: "https://i.imgur.com/MJVDU1d.png",
    description:
      "A member of team Gai; Lee is a genin with no talent at all in ninjutsu or genjutsu, so he has focused his life all on taijutsu. With his powerful hand to hand techniques, Lee can crush any defense with his immense power.",
    descriptionBR:
      "Sem genjutsu ou ninjutsu, não era um ninja. Por isso eu era humilhado quando era criança. Eu provei que posso acabar com quem desmerecia, Até quem era do meu time não acreditava, Neji dizia que meu esforço não valia nada, Mas eu nunca parei pra ouvir quem me criticava, Porquê quanto mais eles falavam, mais eu treinava.",
    skills: [
      {
        name: "High Speed Taijutsu",
        description:
          "Lee attacks one enemy with amazing speed, <Damage>dealing 25 piercing damage<Damage> to them.",
        descriptionBR:
          "Lee ataca um inimigo com uma velocidade incrível, <Damage>causando 25 de dano perfurante<Damage> a esse inimigo.",
        energy: ["Tai"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/QV0sr1f.png",
      },
      {
        name: "Front Lotus",
        description:
          "Lee launches an enemy into the air and slams them down with a great force, <Damage>dealing 35 piercing damage<Damage> to that enemy. This skill will be <Improvements>replaced<Improvements> by <SkillName>'Final Lotus'<SkillName> for 1 turn.",
        descriptionBR:
          "Lee lança um inimigo para o ar e o derruba com grande força, <Damage>causando 35 de dano perfurante<Damage> a esse inimigo. Essa habilidade será <Improvements>substituída<Improvements> por <SkillName>'Final Lotus'<SkillName> por 1 turno.",
        energy: ["Tai", "Random"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/AfJc8pr.png",
      },
      {
        name: "Fifth Gate Opening",
        description:
          "Lee opens five of his chakra gates. Permanently, <SkillName>'High Speed Taijutsu'<SkillName> and <SkillName>'Front Lotus'<SkillName> may be used. During this time, Lee will <Improvements>deal 5 additional damage<Improvements> each time <Classes>he is damaged by a skill<Classes>. This skill will be <Improvements>replaced<Improvements> by <SkillName>'Fiery Spirit'<SkillName>.",
        descriptionBR:
          "Lee abre cinco de seus portões de chakra. Permanentemente, <SkillName>'High Speed Taijutsu'<SkillName> e <SkillName>'Front Lotus'<SkillName> poderão ser usados. Durante esse tempo, Lee irá <Improvements>causar 5 de dano adicional<Improvements> cada vez que <Classes>ele receber dano de uma habilidade<Classes>. Essa habilidade será <Improvements>substituída<Improvements> por <SkillName>'Fiery Spirit'<SkillName>.",
        energy: [],
        classes: ["Mental", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/xT7u5Ik.png",
      },
      {
        name: "Evasion",
        description:
          "This skill makes Rock Lee <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Rock Lee <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/FzuCWSf.png",
      },
      {
        name: "Fiery Spirit",
        description:
          "Lee hypes himself up, pushing himself to fight harder, <Defense>healing 10 health<Defense> and an <Improvements>additional 10 health<Improvements> for each 25 health Lee has lost.",
        descriptionBR:
          "Lee se anima, se esforçando para lutar com mais intensidade, <Defense>recuperando 10 de vida<Defense> e <Improvements>mais 10 de vida<Improvements> a cada 25 de vida que Lee tenha perdido.",
        energy: ["Random"],
        classes: ["Mental", "Instant"],
        cooldown: 2,
        url: "https://i.imgur.com/ppEEGYm.png",
      },
      {
        name: "Final Lotus",
        description:
          "Lee uses his strongets ability, expending all his chakra and <Damage>dealing 50 piercing damage<Damage> to one enemy. Afterwards, Lee <Damage>takes 5 affliction damage<Damage>*. This skill <Classes>cannot be countered<Classes>.",
        descriptionBR:
          "Lee usa sua habilidade mais poderosa, consumindo todo o seu chakra e <Damage>causando 50 de dano perfurante<Damage> a um inimigo. Depois disso, Lee <Damage>recebe 5 de dano aflitivo<Damage>*. Essa habilidade <Classes>não pode ser anulada<Classes>.",
        energy: ["Tai", "Tai"],
        classes: ["Physical", "Melee", "Instant", "*Affliction"],
        cooldown: 0,
        url: "https://i.imgur.com/TJ6PEz2.png",
      },
    ],
  },
  {
    name: "Gaara of the Desert",
    url: "https://i.imgur.com/3aOyLr1.png",
    description:
      "A Jinchuuriki from the Village of Sand, Gaara is an unstable ninja with the Shukaku, the one-tailed beast. With the Shukaku, and his own abilities, Gaara can manipulate the sand in his gourd to crush the enemy, or defend himself.",
    descriptionBR:
      "Uma Jinchuuriki da Vila da Areia, Gaara é um ninja instável com o Shukaku, a besta de uma cauda. Com o Shukaku e suas próprias habilidades, Gaara pode manipular a areia em seu cântaro para esmagar o inimigo ou se defender.",
    skills: [
      {
        name: "Desert Graveyard",
        description:
          "Gaara crushes one enemy with sand, that enemy will be <Damage>dealt 50 damage<Damage> and all <SkillName>'Desert Coffin'<SkillName> stacks will be <Classes>removed<Classes> from them. This skill <Classes>cannot be countered<Classes>.",
        descriptionBR:
          "Gaara esmaga um inimigo com areia, <Damage>causando 50 de dano<Damage> a esse inimigo e <Classes>removendo<Classes> todos os stacks de <SkillName>'Desert Coffin'<SkillName> dele. Essa habilidade <Classes>não pode ser anulada<Classes>.",
        energy: ["Blood", "Nin"],
        classes: ["Physical", "Ranged", "Instant", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/xWUrKCM.png",
      },
      {
        name: "Desert Coffin",
        description:
          "Gaara surrounds one enemy with a pile of sand, <Effects>stunning<Effects> their <Classes>non-mental<Classes> skills for 1 turn. Permanently, that enemy will <Improvements>receive 25 additional damage<Improvements> from <SkillName>'Desert Graveyard'<SkillName>. This skill stacks.",
        descriptionBR:
          "Gaara envolve um inimigo com uma pilha de areia, <Effects>atordoando<Effects> suas habilidades <Classes>não mental<Classes> por 1 turno. Permanentemente, esse inimigo irá <Improvements>receber 25 de dano adicional<Improvements> de <SkillName>'Desert Graveyard'<SkillName>. Essa habilidade acumula.",
        energy: ["Nin"],
        classes: ["Physical", "Ranged", "Instant", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/Gjak99o.png",
      },
      {
        name: "Third Eye",
        description:
          "Gaara connects the third eye with his optic nerve using chakra. For 1 turn, any enemy that <Classes>uses a new harmful skill<Classes> will grant Gaara 15 <Defense>permanent destructible defense<Defense>; Any enemy that <Classes>uses a new helpful skill<Classes> will grant Gaara 1 <Effects>random chakra<Effects>. <Invisible>This skill is invisible<Invisible>.",
        descriptionBR:
          "Por 1 turno, qualquer inimigo que <Classes>usar uma nova habilidade ofensiva<Classes> concederá a Gaara 15 de <Defense>defesa destrutível permanente<Defense>; qualquer inimigo que <Classes>usar uma nova habilidade defensiva<Classes> irá conceder a Gaara 1 <Effects>chakra aleatório<Effects>. <Invisible>Essa habilidade é invisível<Invisible>.",
        energy: ["Random"],
        classes: ["Chakra", "Ranged", "Instant", "Unique"],
        cooldown: 3,
        url: "https://i.imgur.com/nAfddU1.png",
      },
      {
        name: "Sand Shield",
        description:
          "This skill makes Gaara of the Desert <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Gaara of the Desert <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Chakra", "Instant", "Unique"],
        cooldown: 4,
        url: "https://i.imgur.com/VMr3Nwd.png",
      },
    ],
  },
  {
    name: "Kankuro",
    url: "https://i.imgur.com/xltwSom.png",
    description:
      "The brother of Gaara, and a master puppeeter, Kankuro is one of the three sand siblings. With his puppets, Kankuro is able to use the varied abilities hidden inside them to attack his enemies, or even protect himself.",
    descriptionBR:
      "O irmão de Gaara e um mestre marionetista, Kankuro é um dos três irmãos da areia. Com suas marionetes, Kankuro é capaz de usar as habilidades variadas escondidas nelas para atacar seus inimigos, ou até mesmo se proteger.",
    skills: [
      {
        name: "Black Secret Machine One Shot",
        description:
          "Kankuro uses two of his puppets to trap and stab one enemy who <Damage>takes 25 damage<Damage>. During <SkillName>'Puppet Preparation'<SkillName> this skill will <Improvements>deal an additional 5 damage<Improvements>.",
        descriptionBR:
          "Kankuro usa duas de suas marionetes para prender e esfaquear um inimigo, que <Damage>recebe 25 de dano<Damage>. Durante <SkillName>'Puppet Preparation'<SkillName>, essa habilidade irá <Improvements>causar 5 de dano adicional<Improvements>.",
        energy: ["Random", "Random"],
        classes: ["Physical", "Ranged", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/hQyPjOx.png",
      },
      {
        name: "Puppet Preparation",
        description:
          "Kankuro prepares his puppets for combat, gaining 10 <Defense>permanent destructible defense<Defense>. The following 3 turns, <SkillName>'Poison Bomb'<SkillName> may <Improvements>be used<Improvements> and <SkillName>'Black Secret Machine One Shot'<SkillName> will <Improvements>be improved<Improvements>.",
        descriptionBR:
          "Kankuro prepara suas marionetes para o combate, ganhando 10 de <Defense>defesa destrutível permanente<Defense>. Nos próximos 3 turnos, <SkillName>'Poison Bomb'<SkillName> poderá <Improvements>ser usado<Improvements> e <SkillName>'Black Secret Machine One Shot'<SkillName> será <Improvements>aprimorado<Improvements>.",
        energy: [],
        classes: ["Chakra", "Instant", "Unique"],
        cooldown: 3,
        url: "https://i.imgur.com/Kya84CC.png",
      },
      {
        name: "Poison Bomb",
        description:
          "One of Kankuro's puppets creates a cloud of smoke, <Damage>dealing 10 affliction damage<Damage> to all enemies for 3 turns.",
        descriptionBR:
          "Uma das marionetes de Kankuro cria uma nuvem de fumaça, <Damage>causando 10 de dano aflitivo<Damage> a todos os inimigos por 3 turnos.",
        energy: ["Random", "Random"],
        classes: ["Physical", "Ranged", "Instant", "Affliction"],
        cooldown: 3,
        url: "https://i.imgur.com/vJFqLIY.png",
      },
      {
        name: "Puppet Replacement Technique",
        description:
          "This skill makes Kankuro <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Kankuro <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Chakra", "Instant", "Unique"],
        cooldown: 4,
        url: "https://i.imgur.com/mpGOYy6.png",
      },
    ],
  },
  {
    name: "Temari",
    url: "https://i.imgur.com/kTLEaMP.png",
    description:
      "The elder sister of Gaara and Kankuro, Temari is a somewhat cruel and blunt ninja that fights using the wind at her side. With her fan, Temari can create powerful gusts of wind that she can manipulate at her desire.",
    descriptionBR:
      "A irmã mais velha de Gaara e Kankuro, Temari é uma ninja um tanto cruel e direta que luta usando o vento a seu favor. Com seu leque, Temari pode criar poderosas rajadas de vento que ela pode manipular à sua vontade.",
    skills: [
      {
        name: "Cutting Whirlwind",
        description:
          "Temari creates a razor sharp wind, <Damage>dealing 20 piercing damage<Damage> to one enemy. For 1 turn, Temari becomes <Defense>invulnerable<Defense> to <Classes>non-mental skills<Classes>. This skill <Classes>cannot be countered<Classes>.",
        descriptionBR:
          "Temari cria um vento cortante afiado, <Damage>causando 20 de dano perfurante<Damage> a um inimigo. Por 1 turno, Temari se tornará <Defense>invulnerável<Defense> a <Classes>habilidades não-mentais<Classes>. Essa habilidade <Classes>não pode ser anulada<Classes>.",
        energy: ["Nin"],
        classes: ["Physical", "Ranged", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/XA5pGTk.png",
      },
      {
        name: "Dust Wind",
        description:
          "Temari kicks up dust, making her team <Defense>invulnerable<Defense> for 1 turn. Also for 1 turn, all enemies will <Effects>deal 50% less non-affliction damage<Effects>; This effect will <Improvements>last 1 additional turn<Improvements> to an enemy for each time <SkillName>'Cutting Whirlwind'<SkillName> was used on them, removing all stacks afterwards.",
        descriptionBR:
          "Temari levanta poeira, tornando sua equipe <Defense>invulnerável<Defense> por 1 turno. Além disso, por 1 turno, todos os inimigos irão <Effects>causar 50% a menos de dano não-aflitivo<Effects>; esse efeito irá<Improvements> durar 1 turno adicional<Improvements> em um inimigo para cada vez que <SkillName>'Cutting Whirlwind'<SkillName> foi usado nele, removendo todos os stacks após isso.",
        energy: ["Nin", "Random"],
        classes: ["Physical", "Ranged", "Instant"],
        cooldown: 5,
        url: "https://i.imgur.com/JbSunqZ.png",
      },
      {
        name: "Summoning Quick Beheading Dance",
        description:
          "Temari summons the wind weasel Kamatari in the battlefield, <Damage>dealing 35 damage<Damage> to all enemies. This skill will <Improvements>deal 10 additional damage<Improvements> to an enemy for each time <SkillName>'Cutting Whirlwind'<SkillName> was used on them, removing all stacks afterwards.",
        descriptionBR:
          "Temari invoca a doninha gigante do vento, Kamatari, no campo de batalha, <Damage>causando 35 de dano<Damage> a todos os inimigos. Essa habilidade irá <Improvements>causar 10 de dano adicional<Improvements> a um inimigo para cada vez que <SkillName>'Cutting Whirlwind'<SkillName> foi usado nele, removendo todos os stacks após isso.",
        energy: ["Nin", "Random", "Random"],
        classes: ["Physical", "Ranged", "Instant", "Unique"],
        cooldown: 3,
        url: "https://i.imgur.com/z6DZR9Q.png",
      },
      {
        name: "Fan Defence Technique",
        description:
          "This skill makes Temari <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Temari <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Mental", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/UBBy2S7.png",
      },
    ],
  },
  {
    name: "Dosu Kinuta",
    url: "https://i.imgur.com/gDSGgOc.jpg",
    description:
      "Perhaps the strongest of the three sound genin, Dosu Kinuta uses his implanted Melody Arm to amplify sound waves and increase the power of his taijutsu.",
    descriptionBR:
      "Talvez o mais forte dos três genin do Som, Dosu Kinuta usa seu Melody Arm implantado para amplificar ondas sonoras e aumentar o poder de seu taijutsu.",
    skills: [
      {
        name: "Melody Arm Tuning",
        description:
          "Dosu fine-tunes his Melody Arm to produce debilitating sound vibrations. The following 4 turns, <SkillName>'Vibrating Sound Drill'<SkillName> and <SkillName>'Sound Manipulation'<SkillName> are improved and will <Improvements>deal double damage<Improvements>.",
        descriptionBR:
          "Dosu ajusta seu Melody Arm para produzir vibrações sonoras debilitantes. Nos próximos 4 turnos, <SkillName>'Vibrating Sound Drill'<SkillName> e <SkillName>'Sound Manipulation'<SkillName> serão aprimorados e irão <Improvements>causar o dobro de dano<Improvements>.",
        energy: ["Random"],
        classes: ["Physical", "Instant", "Unique"],
        cooldown: 5,
        url: "https://i.imgur.com/YDHieDm.jpg",
      },
      {
        name: "Vibrating Sound Drill",
        description:
          "Dosu attacks with his drill, <Damage>dealing 20 damage<Damage> to one enemy. For 1 turn, If that enemy <Classes>uses a new skill<Classes>, then for 1 turn they will be unable to <Defense>reduce damage<Defense> or <Defense>become invulnerable<Defense>. The following 4 turns, <SkillName>'Sound Manipulation'<SkillName> will be improved on that enemy.",
        descriptionBR:
          "Dosu ataca com seu perfurador, <Damage>causando 20 de dano<Damage> a um inimigo. No próximo turno, se esse inimigo <Classes>usar uma nova habilidade<Classes>, então por 1 turno ele não poderá <Defense>reduzir dano<Defense> ou <Defense>se tornar invulnerável<Defense>. Nos próximos 4 turnos, <SkillName>'Sound Manipulation'<SkillName> será aprimorado nesse inimigo.",
        energy: ["Tai"],
        classes: ["Physical", "Melee", "Instant", "*Affliction"],
        cooldown: 0,
        url: "https://i.imgur.com/E0ZWhLb.png",
      },
      {
        name: "Sound Manipulation",
        description:
          "Kinuta Dosu <Damage>deals 10 affliction damage<Damage> to one enemy. For 1 turn, this enemy will <Improvements>receive 10 additional damage<Improvements> from <Classes>non-affliction skills<Classes> and will <Effects>deal 10 less non-affliction damage<Effects>. This skill non-damage effects will <Improvements>last 1 additional turn<Improvements> if used on an enemy affected by <SkillName>'Vibrating Sound Drill'<SkillName>.",
        descriptionBR:
          "Kinuta Dosu <Damage>causa 10 de dano aflitivo<Damage> a um inimigo. Por 1 turno, esse inimigo irá <Improvements>receber 10 de dano adicional<Improvements> de <Classes>habilidades não-Affliction<Classes> e irá <Effects>causar 10 a menos de dano não-aflitivo<Effects>. Os efeitos não-danosos dessa habilidade irão <Improvements>durar 1 turno adicional<Improvements> se usados em um inimigo afetado por <SkillName>'Vibrating Sound Drill'<SkillName>.",
        energy: ["Gen"],
        classes: ["Mental", "Melee", "Instant", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/fI7xzHz.jpg",
      },
      {
        name: "Dosu Replacement Technique",
        description:
          "This skill makes Dosu Kinuta <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Dosu Kinuta <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Chakra", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/hGOwcqv.png",
      },
    ],
  },
  {
    name: "Tsuchi Kin",
    url: "https://i.imgur.com/omC0mq2.png",
    description:
      "One of the three sound genin; Kin is a confident ninja that likes to toy with her enemies before finishing them off. Using a set of needles and bells, Kin has a number of different effects she can create to attack her enemies.",
    descriptionBR:
      "Uma das três genins do Som, Kin é uma ninja confiante que gosta de brincar com seus inimigos antes de finalizá-los. Usando um conjunto de agulhas e sinos, Kin pode criar uma variedade de efeitos para atacar seus inimigos.",
    skills: [
      {
        name: "Illusion Bell Needles",
        description:
          "One enemy <Damage>takes 15 damage<Damage>. If used one turn after <SkillName>'Needle and Bell Trap'<SkillName>, that enemy will also <Damage>lose 20% of their current health<Damage> and <Defense>cannot be healed<Defense> for 1 turn.* If used one turn after <SkillName>'Unnerving Bells'<SkillName>, this skill will <Improvements>deal 20 additional damage<Improvements>.",
        descriptionBR:
          "Um inimigo <Damage>recebe 15 de dano<Damage>. Se usado um turno após <SkillName>'Needle and Bell Trap'<SkillName>, esse inimigo também irá <Damage>perder 20% de sua vida atual<Damage> e <Defense>não poderá ser curado<Defense> por 1 turno. Se usado um turno após <SkillName>'Unnerving Bells'<SkillName>, essa habilidade irá <Improvements>causar 20 de dano adicional<Improvements>.",
        energy: ["Random"],
        classes: ["Mental", "Ranged", "Instant", "Affliction*"],
        cooldown: 0,
        url: "https://i.imgur.com/GpC5xdJ.png",
      },
      {
        name: "Needle and Bell Trap",
        description:
          "One enemy cannot <Defense>reduce damage<Defense> or <Defense>become invulnerable<Defense> for 2 turns. If used one turn after <SkillName>'Unnerving Bells'<SkillName>, that enemy will also have their <Classes>non helpful-mental<Classes> skills <Effects>stunned<Effects> for 1 turn. If used one turn after <SkillName>'Illusion Bell Needles'<SkillName>, that enemy will also <Damage>take 10 affliction damage<Damage>.",
        descriptionBR:
          "Um inimigo não poderá <Defense>reduzir dano<Defense> ou <Defense>se tornar invulnerável<Defense> por 2 turnos. Se usado um turno após <SkillName>'Unnerving Bells'<SkillName>, esse inimigo também terá todas suas habilidades, <Classes>exceto habilidades mental defensivas<Classes>, <Effects>atordoadas<Effects> por 1 turno. Se usado um turno após <SkillName>'Illusion Bell Needles'<SkillName>, esse inimigo também irá <Damage>receber 10 de dano aflitivo<Damage>.",
        energy: ["Random"],
        classes: ["Physical", "Ranged", "Instant", "$_"],
        cooldown: 1,
        url: "https://i.imgur.com/jvEeZjs.png",
      },
      {
        name: "Unnerving Bells",
        description:
          "One enemy <Effects>loses 1 non-taijutsu chakra<Effects>. If used one turn after <SkillName>'Needle and Bell Trap'<SkillName>, that enemy will also <Improvements>take 50% more damage<Improvements> from <Classes>physical skills<Classes> for 2 turns.* If used one turn after <SkillName>'Illusion Bell Needles'<SkillName>, that enemy will also <Improvements>take 50% more damage<Improvements> from <Classes>chakra skills<Classes> for 2 turns.*",
        descriptionBR:
          "Um inimigo <Effects>perde 1 chakra não-taijutsu<Effects>. Se usado 1 turno após <SkillName>'Needle and Bell Trap'<SkillName>, esse inimigo também <Improvements>receberá 50% a mais de dano<Improvements> de <Classes>habilidades physical<Classes> por 2 turnos. Se usado 1 turno após <SkillName>'Illusion Bell Needles'<SkillName>, esse inimigo também <Improvements>receberá 50% a mais de dano<Improvements> de <Classes>habilidades chakra<Classes> por 2 turnos.",
        energy: ["Gen"],
        classes: ["Mental", "Ranged", "Instant", "Affliction*"],
        cooldown: 2,
        url: "https://i.imgur.com/SDppNlB.png",
      },
      {
        name: "Sharp Analysis",
        description:
          "This skill makes Tsuchi Kin <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Tsuchi Kin <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Mental", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/E4r6BN9.png",
      },
    ],
  },
  {
    name: "Zaku Abumi",
    url: "https://i.imgur.com/zCdcIJ8.png",
    description:
      "Zaku Abumi is one of the three sound genin sent to the chuunin exams. He was surgically altered with hollow tubes in his arms, allowing him to create waves of compressed air.",
    descriptionBR:
      "Zaku Abumi é um dos três genin do Som enviados para os exames chuunin. Ele foi cirurgicamente alterado com tubos ocos em seus braços, permitindo-lhe criar ondas de ar comprimido.",
    skills: [
      {
        name: "Air Cutter",
        description:
          "Using his surgically altered arms Zaku fires a blast of supersonic air at one enemy who takes 25 damage. The following turn, <SkillName>'Extreme Air Cutter'<SkillName> may <Improvements>be used<Improvements>.",
        descriptionBR:
          "Usando seus braços cirurgicamente alterados, Zaku dispara uma rajada de ar supersônico em um inimigo, que irá <Damage>receber 25 de dano<Damage>. No próximo turno, <SkillName>'Extreme Air Cutter'<SkillName> poderá <Improvements>ser usada<Improvements>.",
        energy: ["Blood"],
        classes: ["Physical", "Ranged", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/tm12H2k.png",
      },
      {
        name: "Wall of Air",
        description:
          "Zaku alters his air wave to protect one ally for 1 turn. The first <Classes>harmful non-mental skill<Classes> used on this ally will be <Defense>countered<Defense>. <Invisible>This skill is invisible<Invisible>.",
        descriptionBR:
          "Zaku altera sua onda de ar para proteger um aliado por 1 turno. A primeira <Classes>habilidade não-mental ofensiva<Classes> usada nesse aliado será <Defense>anulada<Defense>. <Invisible>Essa habilidade é invisível<Invisible>.",
        energy: ["Random"],
        classes: ["Physical", "Instant", "Unique"],
        cooldown: 2,
        url: "https://i.imgur.com/upWnlDl.png",
      },
      {
        name: "Extreme Air Cutter",
        description:
          "Zaku boosts his air waves to a frightening level and <Damage>deals 45 damage<Damage> to all enemies. This skill requires <SkillName>'Air Cutter'<SkillName> to be used in the previous turn.",
        descriptionBR:
          "Zaku amplifica suas ondas de ar a um nível assustador, <Damage>causando 45 de dano<Damage> a todos os inimigos. Essa habilidade requer que <SkillName>'Air Cutter'<SkillName> tenha sido usada no turno anterior.",
        energy: ["Blood", "Random", "Random"],
        classes: ["Physical", "Ranged", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/Yo7IQNe.png",
      },
      {
        name: "Zaku Replacement Technique",
        description: "This skill makes Zaku Abumi invulnerable for 1 turn.",
        descriptionBR: "This skill makes Zaku Abumi invulnerable for 1 turn.",
        energy: ["Random"],
        classes: ["Chakra", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/hGOwcqv.png",
      },
    ],
  },
  {
    name: "Haku",
    url: "https://i.imgur.com/xkQrIRT.png",
    description:
      "The sole survivor of the Yuki clan, and the subordinate of Zabuza; Haku, despite being young, holds enough potential strength to surpass almost any ninja. Using his ice based bloodline, and his intelligence, Haku can attack and defend nearly simultaneously.",
    descriptionBR:
      "O único sobrevivente do clã Yuki e subordinado de Zabuza, Haku, apesar de jovem, possui força potencial suficiente para superar quase qualquer ninja. Usando sua linhagem sanguínea baseada em gelo e sua inteligência, Haku pode atacar e se defender quase simultaneamente.",
    skills: [
      {
        name: "Water Needles",
        description:
          "Haku flings a number of water based needles, <Damage>dealing 30 piercing damage<Damage> to one enemy. This skill will <Improvements>deal an additional 10 damage<Improvements> to that enemy if <Effects>they are stunned<Effects>. While improved, this skill will <Damage>deal 40 piercing damage<Damage> to the target instead.",
        descriptionBR:
          "Haku arremessa várias agulhas de água, <Damage>causando 30 de dano perfurante<Damage> a um inimigo. Essa habilidade irá <Improvements>causar 10 de dano adicional<Improvements> a esse inimigo se <Effects>ele estiver atordoado<Effects>. Quando aprimorada, essa habilidade irá <Damage>causar 40 de dano perfurante<Damage> ao alvo.",
        energy: ["Blood", "Random"],
        classes: ["Physical", "Ranged", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/2rG04gY.png",
      },
      {
        name: "Acupuncture",
        description:
          "Haku hits the acupuncture points of one enemy, <Effects>stunning<Effects> their <Classes>physical and mental<Classes> skills for 2 turns. While improved, this skill will <Improvements>ignore invulnerability<Improvements> and will also <Improvements>paralyze the target's cooldown<Improvements>.",
        descriptionBR:
          "Haku atinge os pontos de acupuntura de um inimigo, <Effects>atordoando<Effects> suas habilidades <Classes>physical e mental<Classes> por 2 turnos. Quando aprimorada, essa habilidade irá <Improvements>ignorar invulnerabilidade<Improvements> e também irá <Improvements>paralisar os cooldowns do alvo<Improvements>.",
        energy: ["Nin", "Random"],
        classes: ["Physical", "Ranged", "Control", "Affliction"],
        cooldown: 2,
        url: "https://i.imgur.com/UH3730n.png",
      },
      {
        name: "Demonic Ice Mirrors",
        description:
          "Haku creates numerous mirrors, <Damage>dealing 10 damage<Damage> to all enemies for 3 turns. The following 3 turns, <SkillName>'Water Needles'<SkillName> and <SkillName>'Acupuncture'<SkillName> will be improved. During this time, Haku gains 30 <Defense>points of destructible defense<Defense> and <Defense>ignores all non-damage effects<Defense>.",
        descriptionBR:
          "Haku cria numerosos espelhos, <Damage>causando 10 de dano<Damage> a todos os inimigos por 3 turnos. Nos próximos 3 turnos, <SkillName>'Water Needles'<SkillName> e <SkillName>'Acupuncture'<SkillName> serão aprimorados. Durante esse tempo, Haku ganha 30 <Defense>pontos de defesa destrutível<Defense> e irá <Defense>ignorar todos os efeitos exceto dano<Defense>.",
        energy: ["Blood", "Nin"],
        classes: ["Chakra", "Ranged", "Action", "Instant*", "Unique"],
        cooldown: 3,
        url: "https://i.imgur.com/nV4rFP7.png",
      },
      {
        name: "Mirror Transfer",
        description:
          "This skill makes Haku <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Haku <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Chakra", "Instant", "Unique"],
        cooldown: 4,
        url: "https://i.imgur.com/3DsZLu9.png",
      },
    ],
  },
  {
    name: "Young Kakashi",
    url: "https://i.imgur.com/Jgctdrf.png",
    description:
      "A jounin at the age of 13 and the son of the legendary White Fang, Kakashi is a member of Team Minato. Using his early ninjutsu, and borrowed sharingan, Kakashi can fight any adult on an equal level.",
    descriptionBR:
      "Um jounin aos 13 anos e filho da lendária Faca Branca, Kakashi é membro da Equipe Minato. Usando seu ninjutsu precoce e o sharingan emprestado, Kakashi pode lutar em pé de igualdade contra qualquer adulto.",
    skills: [
      {
        name: "White Fang Slash",
        description:
          "Using his sword, Young Kakashi <Damage>deals 20 piercing damage<Damage> to one enemy. For 1 turn, that enemy will <Effects>deal 5 less non-affliction damage<Effects>. The following turn, Young Kakashi will <Improvements>deal 5 additional damage<Improvements> with his skills.",
        descriptionBR:
          "Usando sua espada, Young Kakashi <Damage>causa 20 de dano perfurante<Damage> a um inimigo. Por 1 turno, esse inimigo irá <Effects>causar 5 a menos de dano não-aflitivo<Effects>. No próximo turno, Young Kakashi irá <Improvements>causar 5 de dano adicional<Improvements> com suas habilidades.",
        energy: ["Tai"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/IpdntOA.png",
      },
      {
        name: "Amateur Raikiri",
        description:
          "Using a weaker form of his signature jutsu, Young Kakashi <Damage>deals 25 piercing damage<Damage> to one enemy. For 1 turn, that enemy will <Effects>deal 5 less non-affliction damage<Effects>. The following turn, Young Kakashi will <Improvements>deal 5 additional damage<Improvements> with his skills.",
        descriptionBR:
          "Usando uma forma mais fraca de seu jutsu signature, Young Kakashi <Damage>causa 25 de dano perfurante<Damage> a um inimigo. Por 1 turno, esse inimigo irá <Effects>causar 5 a menos de dano não-aflitivo<Effects>. No próximo turno, Young Kakashi irá <Improvements>causar 5 de dano adicional<Improvements> com suas habilidades.",
        energy: ["Nin"],
        classes: ["Chakra", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/DFBg2VL.png",
      },
      {
        name: "Implanted Sharingan",
        description:
          "If used on an ally, the <Classes>first non-unique skill<Classes> used by them will be copied and will <Improvements>cost 1 bloodline and 1 random chakra<Improvements> for 1 turn. If used on an enemy, for 1 turn the <Classes>first skill used<Classes> by them that: deals damage will <Improvements>increase Kakashi's damage by 10<Improvements>; stuns will make Kakashi's skills <Effects>stun harmful skills<Effects> for 1 turn; drains chakra will <Effects>grant Kakashi 1 random chakra<Effects>. <Invisible>Invisible on enemies.<Invisible>",
        descriptionBR:
          "Se usado em um aliado, a <Classes>primeira habilidade não-unique usada<Classes> por ele será copiada e irá <Improvements>custar 1 bloodline e 1 chakra aleatório<Improvements> por 1 turno. Se usado em um inimigo, por 1 turno, a <Classes>primeira habilidade usada<Classes> por ele que: causar dano <Improvements>aumentará o dano de Kakashi em 10<Improvements>; atordoar fará com que as habilidades de Kakashi <Effects>atordoem habilidades ofensivas<Effects> por 1 turno; drenar chakra <Effects>concederá 1 chakra aleatório<Effects> a Kakashi. <Invisible>Invisível em inimigos.<Invisible>",
        energy: [],
        classes: ["Mental", "Ranged", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/nBwjX6M.png",
      },
      {
        name: "Sword Parry",
        description: "This skill makes Young Kakashi invulnerable for 1 turn.",
        descriptionBR:
          "This skill makes Young Kakashi invulnerable for 1 turn.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/2L2GQSA.png",
      },
    ],
  },
  {
    name: "Uchiha Obito",
    url: "https://i.imgur.com/YwerQiX.png",
    description:
      "A minor member of the Uchiha clan and a chuunin, Obito is a member of Team Minato. While Obito does not possess any singular powerful ability, he can use all of what he knows with his developing sharingan to put up a fight.",
    descriptionBR:
      "Um membro menor do clã Uchiha e um chuunin, Obito é integrante do Time Minato. Embora Obito não possua nenhuma habilidade extremamente poderosa, ele pode usar tudo o que sabe junto com seu Sharingan em desenvolvimento para lutar.",
    skills: [
      {
        name: "Piercing Stab",
        description:
          "Finding an opening in his enemy's defense, Obito quickly stabs them, <Damage>dealing 15 damage<Damage> to the enemy. During <SkillName>'Obito Sharingan'<SkillName>, this skill <Damage>deals 25 piercing damage<Damage> ignoring <Classes>counters<Classes> and <Classes>reflects<Classes>.",
        descriptionBR:
          "Encontrando uma brecha na defesa do inimigo, Obito rapidamente o apunhala, <Damage>causando 15 de dano<Damage> a um inimigo. Durante <SkillName>'Obito Sharingan'<SkillName>, essa habilidade irá <Damage>causar 25 de dano perfurante<Damage> que <Classes>não poderá ser anulado<Classes> ou <Classes>refletido<Classes>.",
        energy: ["Random"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/aIkGH5N.png",
      },
      {
        name: "Obito Goukakyuu no Jutsu",
        description:
          "Obito breaths searing fire on one enemy <Damage>dealing 15 affliction damage<Damage> to them for 2 turns. During <SkillName>'Obito Sharigan'<SkillName>, this skill will <Damage>deal 30 affliction damage<Damage> instantly and will <Improvements>have no cooldown<Improvements>.",
        descriptionBR:
          "Obito exala fogo ardente em um inimigo, <Damage>causando 15 de dano aflitivo<Damage> a ele por 2 turnos. Durante <SkillName>'Obito Sharingan'<SkillName>, essa habilidade irá <Damage>causar 30 de dano aflitivo<Damage> instantaneamente e <Improvements>não terá cooldown<Improvements>.",
        energy: ["Nin"],
        classes: ["Chakra", "Affliction", "Ranged", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/GlgVYSz.png",
      },
      {
        name: "Obito Sharingan",
        description:
          "Obito activates his Sharingan, gaining <Defense>25% damage reduction<Defense> and <Classes>marking one ally<Classes> permanently. During this time, if <Classes>Obito is killed<Classes>, that ally will gain <Defense>25% damage reduction<Defense> and will <Improvements>deal 5 additional damage<Improvements> permanently.",
        descriptionBR:
          "Obito ativa seu Sharingan, recebendo <Defense>25% de redução de dano<Defense> e <Classes>marcando um aliado<Classes> permanentemente. Durante esse tempo, se <Classes>Obito for morto<Classes>, esse aliado irá receber <Defense>25% de redução de dano<Defense> e irá <Improvements>causar 5 de dano adicional<Improvements> permanentemente.",
        energy: ["Random"],
        classes: ["Mental", "Ranged", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/uB9HwbX.png",
      },
      {
        name: "Sparkling Parry",
        description:
          "This skill makes Uchiha Obito <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Uchiha Obito <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/6ViiDkX.png",
      },
    ],
  },
  {
    name: "Nohara Rin",
    url: "https://i.imgur.com/kJ3u53S.png",
    description:
      "A chuunin medical nin assigned to Team Minato, Rin is a quiet and passive girl who focuses on keeping her team mates alive. Using her healing abilities, and her intelligence, Rin is able to heal her allies while trapping her enemies.",
    descriptionBR:
      "Uma chuunin médica designada para o Time Minato, Rin é uma garota quieta e passiva que se concentra em manter seus companheiros de equipe vivos. Usando suas habilidades de cura e sua inteligência, Rin é capaz de curar seus aliados enquanto prende seus inimigos.",
    skills: [
      {
        name: "Pit Trap",
        description:
          "Rin traps one enemy. For 1 turn, Rin will gain <Defense>50% damage reduction<Defense>, and that enemy will <Damage>take 15 piercing damage<Damage> at the end of their turn. If that enemy <Classes>uses a new skill<Classes>, they will <Damage>take another 15 piercing damage<Damage>. <Invisible>This skill is invisible.<Invisible>",
        descriptionBR:
          "Rin prende um inimigo. Por 1 turno, Rin irá receber <Defense>50% de redução de dano<Defense>, e esse inimigo irá <Damage>receber 15 de dano perfurante<Damage> no final do turno dele. Se esse inimigo <Classes>usar uma nova habilidade<Classes>, ele irá <Damage>receber mais 15 de dano perfurante<Damage>. <Invisible>Essa habilidade é invisível.<Invisible>",
        energy: ["Gen"],
        classes: ["Physical", "Ranged", "Instant", "piercing"],
        cooldown: 0,
        url: "https://i.imgur.com/k6wzRLL.png",
      },
      {
        name: "Healing Touch",
        description:
          "Rin <Defense>heals<Defense> an ally <Defense>for 25 health<Defense> and <Effects>removes<Effects> all <Classes>harmful affliction skills<Classes> from them.",
        descriptionBR:
          "Rin <Defense>cura<Defense> um aliado <Defense>por 25 de vida<Defense> e <Effects>remove<Effects> todas as <Classes>habilidades affliction ofensivas<Classes> dele.",
        energy: ["Nin"],
        classes: ["Chakra", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/zLmVk8s.png",
      },
      {
        name: "Medical Kit",
        description:
          "Rin gives her medical kit to herself or an ally, <Defense>healing them 10 health<Defense> for 3 turns. During this time, <Classes>any healing skills<Classes> used by the target of <SkillName>'Medical Kit'<SkillName> will be <Improvements>increased 10 points<Improvements>.",
        descriptionBR:
          "Rin entrega seu kit médico para si mesma ou para um aliado, <Defense>curando 10 de vida<Defense> por 3 turnos. Durante esse tempo, <Classes>qualquer habilidade de cura<Classes> usada pelo alvo de <SkillName>'Medical Kit'<SkillName> será <Improvements>aumentada em 10 pontos<Improvements>.",
        energy: ["Random", "Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/c4HwOLU.png",
      },
      {
        name: "Flee",
        description:
          "This skill makes Nohara Rin <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Nohara Rin <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/0XboBBP.png",
      },
    ],
  },
  {
    name: "Hyuuga Hanabi",
    url: "https://i.imgur.com/ovkEczm.jpg",
    description:
      "The younger sister of Hinata, Hanabi is a Hyuuga clan member from the main branch family who trains endlessly to prove her worth. While young, Hanabi's skills surpass her elder sister's, and although unable to utilize her byakugan yet and lacking in physical strength, Hanabi makes up for it with her tenacity and speed.",
    descriptionBR:
      "A irmã mais nova de Hinata, Hanabi é um membro do clã Hyuuga da família principal, que treina incansavelmente para provar seu valor. Embora jovem, as habilidades de Hanabi superam as de sua irmã mais velha, e, embora ainda não consiga utilizar seu Byakugan e falte força física, Hanabi compensa isso com sua tenacidade e velocidade.",
    skills: [
      {
        name: "Hanabi Gentle Fist",
        description:
          "Hanabi<Damage> deals 20 damage<Damage> to one enemy for 1 turn, and <Damage>10 damage<Damage> the following turn. For 1 turn, if that enemy <Classes>uses a new non-chakra skill<Classes>, they will <Effects>lose 1 non-genjutsu chakra<Effects>.",
        descriptionBR:
          "Hanabi <Damage>causa 20 de dano<Damage> a um inimigo por 1 turno, e <Damage>10 de dano<Damage> no turno seguinte. Por 1 turno, se esse inimigo <Classes>usar uma nova habilidade não-chakra<Classes>, ele irá <Effects>perder 1 chakra não-genjutsu<Effects>.",
        energy: ["Tai"],
        classes: ["Physical", "Melee", "Action", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/it1bsDV.png",
      },
      {
        name: "Hanabi Kaiten",
        description:
          "Hanabi spins at one enemy, <Damage>dealing 20 damage<Damage> to them for 1 turn, and <Damage>10 damage<Damage> the following turn. For 1 turn, if that enemy <Classes>uses a new non-physical skill<Classes>, their <Classes>non helpful-mental<Classes> skills will be <Effects>stunned<Effects> for 1 turn.",
        descriptionBR:
          "Hanabi gira em direção a um inimigo, <Damage>causando 20 de dano<Damage> a ele por 1 turno, e <Damage>10 de dano<Damage> no turno seguinte. Por 1 turno, se esse inimigo <Classes>usar uma nova habilidade não-physical<Classes>, todas as habilidades, <Classes>exceto habilidades mental defensivas<Classes>, serão <Effects>atordoadas<Effects> por 1 turno.",
        energy: ["Blood"],
        classes: ["Chakra", "Melee", "Action", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/plUIFd7.png",
      },
      {
        name: "Unyielding Tenacity",
        description:
          "Hanabi fights to the bitter end. For 2 turns, Hanabi will be <Defense>unable to be killed<Defense> and will <Defense>ignore all stun effects<Defense>. During this time, <SkillName>'Hanabi Gentle Fist'<SkillName> and <SkillName>'Hanabi Kaiten'<SkillName> will <Improvements>cost 1 random chakra<Improvements> and Hanabi will <Improvements>deal 5 additional damage<Improvements>.",
        descriptionBR:
          "Hanabi luta até o fim. Por 2 turnos, Hanabi não <Defense>poderá ser morta<Defense> e irá <Defense>ignorar todos os efeitos de atordoamento<Defense>. Durante esse tempo, <SkillName>'Hanabi Gentle Fist'<SkillName> e <SkillName>'Hanabi Kaiten'<SkillName> irão <Improvements>custar 1 chakra aleatório<Improvements> e Hanabi irá <Improvements>causar 5 de dano adicional<Improvements>.",
        energy: [],
        classes: ["Mental", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/ZKzud8s.jpg",
      },
      {
        name: "Byakugan Insight",
        description:
          "This skill makes Hyuuga Hanabi <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Hyuuga Hanabi <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Mental", "Instant", "Unique"],
        cooldown: 4,
        url: "https://i.imgur.com/To9EsI6.png",
      },
    ],
  },
  {
    name: "Demon Brothers",
    url: "https://i.imgur.com/rO5gKY6.png",
    description:
      "A duo of Mist Nin who work for Zabuza, the Demon Brothers specialize in assassinating their targets with their shuriken chain.",
    descriptionBR:
      "Uma dupla de Ninjas da Névoa que trabalha para Zabuza, os Irmãos Demônios são especialistas em assassinar seus alvos com sua corrente de shuriken.",
    skills: [
      {
        name: "Chain Wrap",
        description:
          "Demon Brothers wrap one enemy in their shuriken chain. The following 3 turns, 'Chain Shred' may be used on that enemy. During this time, Demon Brothers will become invulnerable to ranged skills and ignore stun effects.",
        descriptionBR:
          "Demon Brothers envolvem um inimigo em sua corrente de shuriken. Nos próximos 3 turnos, 'Chain Shred' poderá ser usado nesse inimigo. Durante esse tempo, Demon Brothers se tornarão invulneráveis a habilidades Ranged e irão ignorar efeitos de atordoamento.",
        energy: ["Tai"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 3,
        url: "https://i.imgur.com/Jy3kQlZ.png",
      },
      {
        name: "Chain Shred",
        description:
          "Demon Brothers rip apart one enemy affected by 'Chain Wrap', dealing 35 piercing damage to them and stunning their physical and mental skills for 1 turn.",
        descriptionBR:
          "Demon Brothers despedaçam um inimigo afetado por 'Chain Wrap', causando 35 de dano perfurante a ele e atordoando suas habilidades Physical e Mental por 1 turno.",
        energy: ["Tai"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/7Fr4FND.png",
      },
      {
        name: "Bladed Gauntlet",
        description:
          "Demon Brothers uses their gauntlets shredding, gaining 5 permanent destructible defense and dealing 25 damage to one enemy. This skill will deal an additional 5 damage to the enemy affected by 'Chain Wrap'.",
        descriptionBR:
          "Demon Brothers usam suas manoplas para dilacerar, ganhando 5 de defesa destrutível permanente e causando 25 de dano a um inimigo. Essa habilidade irá causar 5 de dano adicional ao inimigo afetado por 'Chain Wrap'.",
        energy: ["Random", "Random"],
        classes: ["Physical", "Melee", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/v9AIQOF.png",
      },
      {
        name: "Puddle Illusion",
        description:
          "This skill makes Demon Brothers <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Demon Brothers <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Mental", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/CSs3png.png",
      },
    ],
  },
  {
    name: "Momochi Zabuza",
    url: "https://i.imgur.com/OzHvYsF.png",
    description:
      "Zabuza is a missing-nin from the Hidden Mist Village. He is a frightening opponent attacking his enemies out of the fog he creates.",
    descriptionBR:
      "Zabuza é um ninja renegado da Vila da Névoa Oculta. Ele é um oponente aterrorizante, atacando seus inimigos a partir da névoa que cria.",
    skills: [
      {
        name: "Hidden Mist Technique",
        description:
          "Zabuza creates a dense fog. For 2 turns, all enemies will have their mental and ranged skills cost 1 additional random chakra. The following 2 turns, Zabuza gains 25% damage reduction and 'Silent Homicide' will be improved. This skill ignores invulnerability.",
        descriptionBR:
          "Zabuza cria uma névoa densa. Por 2 turnos, todas as habilidades Mental e Ranged dos inimigos irão custar 1 chakra aleatório adicional. Nos próximos 2 turnos, Zabuza irá receber 25% de redução de dano, e 'Silent Homicide' será aprimorado. Essa habilidade ignora invulnerabilidade.",
        energy: ["Gen"],
        classes: ["Chakra", "Ranged", "Instant"],
        cooldown: 3,
        url: "https://i.imgur.com/1qbKqeg.png",
      },
      {
        name: "Silent Homicide Technique",
        description:
          "Using an advanced assasination technique, Zabuza deals 30 piercing damage to one enemy. During 'Hidden Mist Technique', this skill will be improved and will deal 45 piercing damage to one enemy which ignores invulnerability.",
        descriptionBR:
          "Usando uma técnica de assassinato avançada, Zabuza causa 30 de dano perfurante a um inimigo. Durante 'Hidden Mist Technique', essa habilidade será aprimorada e irá causar 45 de dano perfurante a um inimigo, ignorando invulnerabilidade.",
        energy: ["Tai", "Random"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/uKEgTlB.png",
      },
      {
        name: "Great Waterfall Technique",
        description:
          "Zabuza knocks all enemies down with a giant wave of water, dealing 10 damage to them and stunning their physical or melee skills for 1 turn.",
        descriptionBR:
          "Zabuza derruba todos os inimigos com uma onda gigante de água, causando 10 de dano a eles e atordoando suas habilidades Physical ou Melee por 1 turno.",
        energy: ["Nin"],
        classes: ["Chakra", "Ranged", "Instant"],
        cooldown: 3,
        url: "https://i.imgur.com/Q3i8RGc.png",
      },
      {
        name: "Water Clone Zabuza",
        description:
          "This skill makes Momochi Zabuza <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Momochi Zabuza <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Chakra", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/7qpg9re.png",
      },
    ],
  },
  {
    name: "Oboro",
    url: "https://i.imgur.com/XLe6m8K.png",
    description:
      "A Rain Genin in the Chuunin exams, Oboro specializes in distracting his opponents with illusions and attacking when unexpected.",
    descriptionBR:
      "Um Genin da Vila da Chuva nos exames Chuunin, Oboro é especializado em distrair seus oponentes com ilusões e atacar quando menos esperado.",
    skills: [
      {
        name: "Haze Clones",
        description:
          "Oboro creates illusionary duplicates of himself. The following 3 turns, 'Exploding Kunai' and 'Underground Ambush' will be improved. During this time, Oboro gains 10 points of destructible defense and becomes invulnerable to mental skills.",
        descriptionBR:
          "Oboro cria duplicatas ilusórias de si mesmo. Nos próximos 3 turnos, 'Exploding Kunai' e 'Underground Ambush' serão aprimorados. Durante esse tempo, Oboro ganha 10 pontos de defesa destrutível e se torna invulnerável a habilidades Mental.",
        energy: ["Random", "Random"],
        classes: ["Mental", "Instant"],
        cooldown: 5,
        url: "https://i.imgur.com/ByWGkAm.png",
      },
      {
        name: "Underground Ambush",
        description:
          "Hiding in the ground, Oboro waits and then attacks one enemy from behind dealing 20 damage and stunning their physical and mental skills for 1 turn. During 'Haze Clones', this skill is improved and targets all enemies instead.",
        descriptionBR:
          "Escondido no chão, Oboro espera e então ataca um inimigo por trás, causando 20 de dano e atordoando suas habilidades Physical e Mental por 1 turno. Durante 'Haze Clones', essa habilidade é aprimorada e atinge todos os inimigos.",
        energy: ["Gen"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/0mrTugT.png",
      },
      {
        name: "Exploding Kunai",
        description:
          "Oboro throws a kunai with an exploding tag on it dealing 15 damage to all enemies. During 'Haze Clones', this skill is improved and deals 20 damage.",
        descriptionBR:
          "Oboro lança um kunai com uma etiqueta explosiva, causando 15 de dano a todos os inimigos. Durante 'Haze Clones', essa habilidade é aprimorada e causa 20 de dano.",
        energy: ["Random"],
        classes: ["Physical", "Ranged", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/LRf4G2h.png",
      },
      {
        name: "Fleet of Foot",
        description: "This skill makes Oboro invulnerable for 1 turn.",
        descriptionBR: "This skill makes Oboro invulnerable for 1 turn.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/A1qWXdJ.png",
      },
    ],
  },
  {
    name: "Shigure",
    url: "https://i.imgur.com/oZT2jom.png",
    description:
      "A Genin from the Village of Rain, Shigure specializes in using his chakra to control needles hidden in his umbrellas.",
    descriptionBR:
      "Um Genin da Vila da Chuva, Shigure é especializado em usar seu chakra para controlar agulhas escondidas em seus guarda-chuvas.",
    skills: [
      {
        name: "Needle Barrage",
        description:
          "Shigure specifically directs needles at one enemy dealing 25 damage to them. This skill can only target enemies that are affected by 'Sprinkling Needles'.",
        descriptionBR:
          "Shigure direciona especificamente agulhas a um inimigo, causando 25 de dano a ele. Essa habilidade só pode atingir inimigos que estão afetados por 'Sprinkling Needles'.",
        energy: ["Random"],
        classes: ["Physical", "Ranged", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/72iKrUX.png",
      },
      {
        name: "Umbrella Toss",
        description:
          "Shigure tosses some of his umbrellas into the air. For 4 turns, Shigure gains 10 points of damage reduction and 'Sprinkling Needles' may be used.",
        descriptionBR:
          "Shigure lança alguns de seus guarda-chuvas para o ar. Por 4 turnos, Shigure ganha 10 pontos de redução de dano e 'Sprinkling Needles' poderá ser usado.",
        energy: [],
        classes: ["Physical", "Instant", "Unique"],
        cooldown: 3,
        url: "https://i.imgur.com/oo2VNIZ.png",
      },
      {
        name: "Sprinkling Needles",
        description:
          "Shigure causes many needles to rain down from his umbrellas dealing 13 piercing damage to all enemies for 3 turns. During this time, 'Needle Barrage' may be used on enemies affected by this skill. This skill cannot be countered and it requires 'Umbrella Toss' to be used.",
        descriptionBR:
          "Shigure faz muitas agulhas caírem de seus guarda-chuvas, causando 13 de dano perfurante a todos os inimigos por 3 turnos. Durante esse tempo, 'Needle Barrage' poderá ser usado em inimigos afetados por essa habilidade. Essa habilidade não pode ser anulada e requer o uso de 'Umbrella Toss'.",
        energy: ["Random", "Random"],
        classes: ["Physical", "Action", "Ranged"],
        cooldown: 2,
        url: "https://i.imgur.com/IiYoFlG.png",
      },
      {
        name: "Umbrella Block",
        description: "This skill makes Shigure invulnerable for 1 turn.",
        descriptionBR: "This skill makes Shigure invulnerable for 1 turn.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/SVXZnxK.png",
      },
    ],
  },
  {
    name: "Jiroubou",
    url: "https://i.imgur.com/MuepMwr.png",
    description:
      "Jiroubou is the largest member of the Sound four. His fighting style involves powerful physical attacks in combination with manipulation of earth.",
    descriptionBR:
      "Jiroubou is the largest member of the Sound four. His fighting style involves powerful physical attacks in combination with manipulation of earth.",
    skills: [
      {
        name: "Nirvana Fist Style",
        description: "Jiroubou deals 30 damage to one enemy.",
        descriptionBR: "Jiroubou causa 30 de dano a um inimigo.",
        energy: ["Tai", "Random"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/p23bcPf.png",
      },
      {
        name: "Earth Seal Mud Cannonball",
        description: "Jiroubou deals 20 damage to all enemies.",
        descriptionBR: "Jiroubou causa 20 de dano a todos os inimigos.",
        energy: ["Tai", "Random"],
        classes: ["Physical", "Ranged", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/FD9OSvE.png",
      },
      {
        name: "Dungeon Chamber of Nothingness",
        description:
          "For 3 turns, Jiroubou will steal 1 non-ninjutsu chakra from one enemy. During this time, Jiroubou's team will gain 35 destructible defense. This skill will end if Jiroubou or one of his allies loses their destructible defense.",
        descriptionBR:
          "Por 3 turnos, Jiroubou irá roubar 1 chakra não-ninjutsu de um inimigo. Durante esse tempo, a equipe de Jiroubou ganhará 35 de defesa destrutível. Essa habilidade irá terminar se Jiroubou ou um de seus aliados perderem sua defesa destrutível.",
        energy: ["Nin", "Nin"],
        classes: ["Chakra", "Ranged", "Instant", "Unique"],
        cooldown: 5,
        url: "https://i.imgur.com/HN5PgS3.png",
      },
      {
        name: "Earth Wall Land Flip",
        description:
          "This skill makes Jiroubou <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Jiroubou <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/DaSkMHS.png",
      },
    ],
  },
  {
    name: "Kidoumaru",
    url: "https://i.imgur.com/ZSWwJiY.png",
    description:
      "Kidoumaru has spider-like skills. He has 6 arms and has the ability to create weapons and traps with a strange golden web-like liquid.",
    descriptionBR:
      "Kidoumaru has spider-like skills. He has 6 arms and has the ability to create weapons and traps with a strange golden web-like liquid.",
    skills: [
      {
        name: "Summoning: Kyodaigumo",
        description:
          "Kidoumaru summons Kyodaigumo who creates a massive amount of small spiders, dealing 10 affliction damage to all enemies for 5 turns. Kidoumaru gains 10 points of damage reduction for 5 turns.",
        descriptionBR:
          "Kidoumaru invoca Kyodaigumo, que cria uma enorme quantidade de pequenas aranhas, causando 10 de dano aflitivo a todos os inimigos por 5 turnos. Kidoumaru ganha 10 pontos de redução de dano por 5 turnos.",
        energy: ["Blood", "Nin"],
        classes: ["Physical", "Ranged", "Action", "Unique", "Affliction"],
        cooldown: 4,
        url: "https://i.imgur.com/TyhkdYM.png",
      },
      {
        name: "Spider Web",
        description:
          "Kidoumaru uses spider web on himself or an ally. For 1 turn, all enemies that use a new melee skill on that ally will be countered and will have their physical and melee skills stunned for 2 turns.",
        descriptionBR:
          "Kidoumaru usa teia de aranha em si mesmo ou em um aliado. Por 1 turno, todos os inimigos que usarem uma nova habilidade Melee nesse aliado terão sua habilidade anulada e suas habilidades Physical e Melee serão atordoadas por 2 turnos.",
        energy: ["Blood"],
        classes: ["Physical", "Instant", "*Affliction"],
        cooldown: 2,
        url: "https://i.imgur.com/Mcx7Ibu.png",
      },
      {
        name: "Golden Arrow",
        description:
          "Kidoumaru fires a special arrow made of enzymes from his mouth at one enemy dealing 50 piercing damage.",
        descriptionBR:
          "Kidoumaru dispara uma seta especial feita de enzimas de sua boca em um inimigo, causando 50 de dano perfurante.",
        energy: ["Blood", "Nin"],
        classes: ["Physical", "Ranged", "Instant", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/9FGWta9.png",
      },
      {
        name: "Golden Armor",
        description:
          "This skill makes Kidoumaru <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Kidoumaru <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Chakra", "Instant", "Unique"],
        cooldown: 4,
        url: "https://i.imgur.com/5h0v2Qd.png",
      },
    ],
  },
  {
    name: "Sakon",
    url: "https://i.imgur.com/fXMOzMv.png",
    description:
      "Sakon usually carries a strange head around on his back. This head turns out to be his brother Ukon, who can also exit Sakon and enter other bodies in order to destroy them.",
    descriptionBR:
      "Sakon geralmente carrega uma cabeça estranha nas costas. Essa cabeça é, na verdade, seu irmão Ukon, que também pode sair de Sakon e entrar em outros corpos para destruí-los.",
    skills: [
      {
        name: "Rest",
        description:
          "Ukon rests within the body of Sakon, healing him for 30 health. This skill will end 'Parasite Demon Technique' if it's currently active.",
        descriptionBR:
          "Ukon descansa dentro do corpo de Sakon, curando-o em 30 de vida. Essa habilidade terminará 'Parasite Demon Technique' se estiver ativada no momento.",
        energy: ["Random", "Random"],
        classes: ["Physical", "Instant", "Unique"],
        cooldown: 2,
        url: "https://i.imgur.com/5IHOsdy.png",
      },
      {
        name: "Gattling Punch",
        description:
          "Using one body, Sakon and Ukon rapidly punch one enemy, dealing 40 damage to them. During 'Parasite Demon Technique', this skill will deal 20 damage and will cost 1 taijutsu only.",
        descriptionBR:
          "Usando um corpo, Sakon e Ukon rapidamente socam um inimigo, causando 40 de dano a ele. Durante 'Parasite Demon Technique', essa habilidade causará 20 de dano e custará apenas 1 taijutsu.",
        energy: ["Tai", "Random"],
        classes: ["Physical", "Melee", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/uBllXX7.png",
      },
      {
        name: "Parasite Demon Technique",
        description:
          "Sakon and Ukon deals 15 affliction damage to one enemy permanently.* During this time, Sakon gains 30% damage reduction and 'Gattling Punch' will deal 20 less damage. This skill will end if the affected enemy dies. This skill cannot be used while it's active.",
        descriptionBR:
          "Sakon e Ukon irão causar 15 de dano aflitivo a um inimigo permanentemente. Durante esse tempo, Sakon ganha 30% de redução de dano e 'Gattling Punch' irá causar 20 de dano a menos. Essa habilidade terminará se o inimigo afetado morrer. Essa habilidade não pode ser usada enquanto estiver ativa.",
        energy: ["Blood", "Random"],
        classes: ["Physical", "Instant", "Unique", "Melee", "Affliction*"],
        cooldown: 0,
        url: "https://i.imgur.com/MxZI7Mt.png",
      },
      {
        name: "Summoning: Rashoumon",
        description:
          "This skill makes Sakon invulnerable for 1 turn. This skill will end 'Parasite Demon Technique' if it's currently active.",
        descriptionBR:
          "This skill makes Sakon invulnerable for 1 turn. This skill will end 'Parasite Demon Technique' if it's currently active.",
        energy: ["Random"],
        classes: ["Chakra", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/uUrOzuw.png",
      },
    ],
  },
  {
    name: "Tayuya",
    url: "https://i.imgur.com/ZkTTfAq.png",
    description:
      "Tayuyas only weapon is a flute with which she can cast Genjutsu or control three summoned demons, The Doki.",
    descriptionBR:
      "A única arma de Tayuya é uma flauta com a qual ela pode lançar Genjutsu ou controlar três demônios invocados, os Doki.",
    skills: [
      {
        name: "Doki Demons",
        description:
          "Tayuya summons the Doki Demons, dealing 15 piercing damage to all enemies for 2 turns. Tayuya gains 10 points of damage reduction for 2 turns. The following turn, 'Doki Ghosts' will be improved and will remove chakra from the enemy.",
        descriptionBR:
          "Tayuya invoca os Demônios Doki, causando 15 de dano perfurante a todos os inimigos por 2 turnos. Tayuya ganha 10 pontos de redução de dano por 2 turnos. No próximo turno, 'Doki Ghosts' será aprimorada e irá remover chakra do inimigo.",
        energy: ["Gen", "Random"],
        classes: ["Physical", "Action", "Unique", "Ranged"],
        cooldown: 1,
        url: "https://i.imgur.com/yzxk31N.png",
      },
      {
        name: "Doki Ghosts",
        description:
          "Tayuya deals 15 affliction damage to one enemy. If 'Doki Demons' is used on the last turn, this skill will also remove 1 ninjutsu or genjutsu chakra. If 'Demonic Flute Illusion' is used on the last turn, this skill will also stun physical and chakra skills for 1 turn.",
        descriptionBR:
          "Tayuya irá causar 15 de dano aflitivo a um inimigo. Se 'Doki Demons' for usado no último turno, essa habilidade também irá remover 1 ninjutsu ou genjutsu chakra. Se 'Demonic Flute Illusion' for usado no último turno, essa habilidade também irá atordoar as habilidades Physical e Chakra por 1 turno.",
        energy: ["Random"],
        classes: ["Mental", "Instant", "Ranged", "Unique", "Affliction"],
        cooldown: 1,
        url: "https://i.imgur.com/oHPQ2Ps.png",
      },
      {
        name: "Demonic Flute Illusion",
        description:
          "Playing a genjutsu melody on her flute, Tayuya stuns all enemies' harmful skills for 1 turn. The following turn, 'Doki Ghosts' will be improved and will stun the enemy's physical and chakra skills for 1 turn.",
        descriptionBR:
          "Tayuya toca uma melodia de genjutsu em sua flauta, atordoando as habilidades ofensivas de todos os inimigos por 1 turno. No próximo turno, 'Doki Ghosts' será aprimorada e irá atordoar as habilidades Physical e Chakra do inimigo por 1 turno.",
        energy: ["Gen", "Random"],
        classes: ["Mental", "Instant", "Ranged", "Unique"],
        cooldown: 3,
        url: "https://i.imgur.com/4i9UcWz.png",
      },
      {
        name: "Tayuya Insight",
        description:
          "This skill makes Tayuya <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Tayuya <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Mental", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/XG0Xs1t.png",
      },
    ],
  },
  {
    name: "Kaguya Kimimaro",
    url: "https://i.imgur.com/qzCv58M.png",
    description:
      "One of Orochimaru's top ninjas, Kimimaro has very strong offensive abilities but his disease is slowly killing him.",
    descriptionBR:
      "Um dos principais ninjas de Orochimaru, Kimimaro possui habilidades ofensivas muito fortes, mas sua doença está lentamente matando-o.",
    skills: [
      {
        name: "Dance of the Camellia",
        description:
          "Using his arm bones as a sword, Kimimaro deals 25 damage to one enemy that cannot be countered or reflected. The following 4 turns, Kimimaro will deal 5 additional damage but if he uses a new harmful skill, he will take 5 affliction damage*.",
        descriptionBR:
          "Usando os ossos de seu braço como uma espada, Kimimaro irá causar 25 de dano a um inimigo, que não pode ser anulado ou refletido. Nos próximos 4 turnos, Kimimaro irá causar 5 de dano adicional, mas se ele usar uma nova habilidade ofensiva, ele receberá 5 de dano aflitivo.",
        energy: ["Tai"],
        classes: ["Physical", "Instant", "Unique", "Melee", "Affliction*"],
        cooldown: 0,
        url: "https://i.imgur.com/kwWcpw0.png",
      },
      {
        name: "Dance of the Clematis",
        description:
          "Kimimaro deals 40 damage to one enemy and stuns their physical and chakra skills for 1 turn. Kimimaro takes 10 affliction damage.* This skill cannot be countered or reflected.",
        descriptionBR:
          "Kimimaro irá causar 40 de dano a um inimigo e atordoar suas habilidades Physical e Chakra por 1 turno. Kimimaro receberá 10 de dano aflitivo. Essa habilidade não pode ser anulada ou refletida.",
        energy: ["Tai", "Blood"],
        classes: ["Physical", "Instant", "Unique", "Melee", "Affliction*"],
        cooldown: 1,
        url: "https://i.imgur.com/Q6rE1Ey.png",
      },
      {
        name: "Dance of the Seedling Fern",
        description:
          "Kimimaro creates a forest of sharp bones, dealing 30 damage to all enemies. For 1 turn, they will deal 20 less damage with their physical and chakra skills, except affliction. This skill may only be used if Kimimaro has 65 health or less and cannot be countered or reflected.",
        descriptionBR:
          "Kimimaro cria uma floresta de ossos afiados, causando 30 de dano a todos os inimigos. Por 1 turno, eles irão causar 20 de dano a menos com suas habilidades Physical e Chakra, exceto Affliction. Essa habilidade só pode ser usada se Kimimaro tiver 65 de vida ou menos e não pode ser anulada ou refletida.",
        energy: ["Blood", "Random", "Random"],
        classes: ["Physical", "Instant", "Unique", "Ranged", "Affliction*"],
        cooldown: 2,
        url: "https://i.imgur.com/hgM78mG.png",
      },
      {
        name: "Bone Masks",
        description:
          "This skill makes Kaguya Kimimaro <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Kaguya Kimimaro <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant", "Unique"],
        cooldown: 4,
        url: "https://i.imgur.com/TdPkUgr.png",
      },
    ],
  },
  {
    name: "Touji Mizuki",
    url: "https://i.imgur.com/56OlIhi.png",
    description:
      "An instructor for Konoha, Mizuki is a chuunin, and old friend of Iruka that over time grew jealous and petty. While Mizuki doesn't have any special abilities, he knows to instead be patient, and wait until the right time to strike.",
    descriptionBR:
      "An instructor for Konoha, Mizuki is a chuunin, and old friend of Iruka that over time grew jealous and petty. While Mizuki doesn't have any special abilities, he knows to instead be patient, and wait until the right time to strike.",
    skills: [
      {
        name: "Kunai Assault",
        description:
          "Throwing many kunais, Mizuki deals 15 damage to one enemy. The following turn, this skill will have no cost.",
        descriptionBR:
          "Lançando vários kunais, Mizuki irá causar 15 de dano a um inimigo. No próximo turno, essa habilidade não terá custo.",
        energy: ["Random"],
        classes: ["Physical", "Ranged", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/Ka9FkRw.png",
      },
      {
        name: "Shuriken Execution",
        description:
          "Mizuki throws a giant shuriken, dealing 35 piercing damage to one enemy. This skill may only target enemies at or below 50 health. 'Shuriken Execution' will deal 10 less damage permanently each time it is used. This skill ignores invulnerability.",
        descriptionBR:
          "Mizuki lança um grande shuriken, causando 35 de dano perfurante a um inimigo. Essa habilidade só pode atingir inimigos com 50 de vida ou menos. 'Shuriken Execution' irá causar 10 de dano a menos permanentemente cada vez que for usada. Essa habilidade ignora invulnerabilidade.",
        energy: ["Random"],
        classes: ["Physical", "Ranged", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/oV3goLL.png",
      },
      {
        name: "Genjutsu Ambush",
        description:
          "Mizuki uses his ambush tactics with genjutsu. The following 3 turns, if Mizuki uses a new harmful skill, he will become invulnerable for 1 turn.",
        descriptionBR:
          "Mizuki utiliza suas táticas de emboscada com genjutsu. Nos próximos 3 turnos, se Mizuki usar uma nova habilidade ofensiva, ele se tornará invulnerável por 1 turno.",
        energy: ["Gen"],
        classes: ["Mental", "Instant"],
        cooldown: 5,
        url: "https://i.imgur.com/w3ZJUcA.png",
      },
      {
        name: "Mizuki Dodge",
        description:
          "This skill makes Touji Mizuki <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Touji Mizuki <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/mewyRIs.png",
      },
    ],
  },
  {
    name: "Umino Iruka",
    url: "https://i.imgur.com/ZKCoDxR.png",
    description:
      "Iruka is one of the instructors at the Konoha ninja academy. He is a well rounded ninja with diverse abilities and skills.",
    descriptionBR:
      "Iruka é um dos instrutores na academia ninja de Konoha. Ele é um ninja equilibrado, com habilidades e habilidades diversas.",
    skills: [
      {
        name: "Shield Ally",
        description:
          "Iruka uses his own body to shield one ally. For 1 turn, that ally will ignore all damage dealt to them. This skill is invisible.",
        descriptionBR:
          "Iruka usa seu próprio corpo para proteger um aliado. Por 1 turno, esse aliado irá ignorar todo dano causado a ele. Essa habilidade é invisível.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/X678VIE.png",
      },
      {
        name: "Shuriken Throw",
        description:
          "Iruka throws a couple shurikens at one enemy who takes 20 piercing damage. This skill will deal an additional 10 damage for each 30 health Iruka has lost.",
        descriptionBR:
          "Iruka lança alguns shurikens em um inimigo, que recebe 20 de dano perfurante. Essa habilidade irá causar 10 de dano adicional a cada 30 de vida que Iruka tiver perdido.",
        energy: ["Random"],
        classes: ["Physical", "Instant", "Ranged"],
        cooldown: 1,
        url: "https://i.imgur.com/7Kwgx4w.png",
      },
      {
        name: "Sealed Bombs Square Formation",
        description:
          "Iruka creates a trap with a set of exploding seals. The following 2 turns, one enemy will take 60% more damage from melee skills. During this time, if that enemy use a new skill, they will take 20 piercing damage and this skill will end.",
        descriptionBR:
          "Iruka cria uma armadilha com um conjunto de selos explosivos. Nos próximos 2 turnos, um inimigo receberá 60% a mais de dano de habilidades melee. Durante esse tempo, se esse inimigo usar uma nova habilidade, ele irá receber 20 de dano perfurante e essa habilidade será encerrada.",
        energy: ["Nin"],
        classes: ["Chakra", "Instant", "Ranged"],
        cooldown: 2,
        url: "https://i.imgur.com/UFVyRZK.png",
      },
      {
        name: "Iruka Replacement Technique",
        description:
          "This skill makes Umino Iruka <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Umino Iruka <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Chakra", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/hGOwcqv.png",
      },
    ],
  },
  {
    name: "Akadou Yoroi",
    url: "https://i.imgur.com/cnhCRXg.png",
    description:
      "Part of the three man team of Kabuto during the Chuunin Exams working as spies, Yoroi has a special ability that allows him to absorb his opponents energy.",
    descriptionBR:
      "Parte da equipe de três membros de Kabuto durante o Exame Chuunin, trabalhando como espiões, Yoroi possui uma habilidade especial que lhe permite absorver a energia de seus oponentes.",
    skills: [
      {
        name: "Chakra and Life Absorption",
        description:
          "Yoroi endows his attacks. The following 3 turns, 'Draining Assault' and 'Energy Drain' may be used.",
        descriptionBR:
          "Yoroi concede poder a seus ataques. Nos próximos 3 turnos, 'Draining Assault' e 'Energy Drain' poderão ser usados.",
        energy: [],
        classes: ["Chakra", "Instant", "Unique"],
        cooldown: 3,
        url: "https://i.imgur.com/0qvKdhQ.png",
      },
      {
        name: "Draining Assault",
        description:
          "Yoroi charges at one enemy with multiple energy drains, stealing 12 health from them for 3 turns and 1 bloodline or ninjutsu chakra each turn. During this time, 'Energy Drain' will make the enemy's skills cost 1 additional random chakra. Requires 'Chakra and Life Absorption' to be used.",
        descriptionBR:
          "Yoroi carrega contra um inimigo com múltiplos drenos de energia, roubando 12 de vida deles por 3 turnos e 1 bloodline ou ninjutsu chakra a cada turno. Durante esse tempo, 'Energy Drain' fará com que as habilidades do inimigo custem 1 chakra aleatório adicional. Requer o uso de 'Chakra and Life Absorption'.",
        energy: ["Tai", "Random", "Random"],
        classes: ["Chakra", "Action", "Melee", "Unique", "Affliction"],
        cooldown: 3,
        url: "https://i.imgur.com/F4ymMEe.png",
      },
      {
        name: "Energy Drain",
        description:
          "Yoroi touches one enemy, stealing 20 health from them for 1 turn and lowering their non-affliction damage by 5 until that enemy uses a new skill that deals damage. During 'Draining Assault', this skill will be improved. Requires 'Chakra and Life Absorption' to be used.",
        descriptionBR:
          "Yoroi toca um inimigo, roubando 20 de vida dele por 1 turno e reduzindo o dano não-aflição dele em 5 até que esse inimigo use uma nova habilidade que cause dano. Durante 'Draining Assault', essa habilidade será aprimorada. Requer 'Chakra and Life Absorption' para ser usada.",
        energy: ["Tai"],
        classes: ["Chakra", "Instant", "Melee", "Affliction"],
        cooldown: 0,
        url: "https://i.imgur.com/5WXWl5W.png",
      },
      {
        name: "Yoroi Replacement Technique",
        description: "This skill makes Akadou Yoroi invulnerable for 1 turn.",
        descriptionBR: "This skill makes Akadou Yoroi invulnerable for 1 turn.",
        energy: ["Random"],
        classes: ["Chakra", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/hGOwcqv.png",
      },
    ],
  },
  {
    name: "Tsurugi Misumi",
    url: "https://i.imgur.com/M8EPY4F.png",
    description:
      "A sound village genin that infiltrated Konoha as a spy, Misumi likes taking the initiative, preferring to be the first to strike in combat. With his unique abilities, Misumi can flex his muscles and bones, twisting them to wrap around his enemies, or even defend his allies.",
    descriptionBR:
      "Um genin da Vila do Som que se infiltrou em Konoha como espião, Misumi gosta de tomar a iniciativa, preferindo ser o primeiro a atacar no combate. Com suas habilidades únicas, Misumi pode flexionar seus músculos e ossos, torcendo-os para se enrolar em seus inimigos, ou até mesmo defender seus aliados.",
    skills: [
      {
        name: "Flexible Twisting Joints",
        description:
          "Using his distractingly loose joints, Misumi targets an ally or an enemy. If used on an enemy he will deal 15 damage that ignores invulnerability to them. If used on an ally, that ally will gain 15 points of damage reduction for 1 turn.",
        descriptionBR:
          "Usando suas articulações exageradamente soltas, Misumi atinge um aliado ou inimigo. Se usado em um inimigo, ele causará 15 de dano que ignora invulnerabilidade. Se usado em um aliado, esse aliado ganhará 15 pontos de redução de dano por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/ehKhgIx.jpg",
      },
      {
        name: "Soft Physique Modification",
        description:
          "Misumi wraps around one enemy. For 2 turns all new harmful skills used on Misumi will be reflected to that enemy instead. During this time, that enemy will be unable to reduce damage or become invulnerable.",
        descriptionBR:
          "Misumi se envolve em torno de um inimigo. Por 2 turnos, todas as novas habilidades ofensivas usadas em Misumi serão refletidas para aquele inimigo. Durante esse tempo, aquele inimigo não poderá reduzir dano nem se tornar invulnerável.",
        energy: ["Random", "Random"],
        classes: ["Physical", "Melee", "Control"],
        cooldown: 4,
        url: "https://i.imgur.com/8kdZEAV.jpg",
      },
      {
        name: "Tighten Joints",
        description:
          "Misumi tightens his joints gaining 15 destructible defense. If 'Soft Physique Modification' is active, the enemy that it is active on will also receive 20 damage and will have their physical or chakra skills stunned for 1 turn.",
        descriptionBR:
          "Misumi aperta suas articulações, ganhando 15 pontos de defesa destrutível. Se 'Soft Physique Modification' estiver ativo, o inimigo no qual está ativo também irá receber 20 de dano e terá suas habilidades physical ou chakra atordoadas por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/d1JEFna.jpg",
      },
      {
        name: "Misumi Block",
        description:
          "This skill makes Tsurugi Misumi <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Tsurugi Misumi <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/uH3KoI8.jpg",
      },
    ],
  },
  {
    name: "Mitarashi Anko",
    url: "https://i.imgur.com/q0YFcWg.png",
    description:
      "Once a student of Orochimaru and a bearer of the Cursed Seal of Heaven, Anko is now a special Jounin who oversees the second portion of the Chuunin exams.",
    descriptionBR:
      "Uma ex-aluna de Orochimaru e portadora do Selo Amaldiçoado do Céu, Anko é agora uma Jounin especial que supervisiona a segunda parte dos exames Chuunin.",
    skills: [
      {
        name: "Dual Pin",
        description:
          "Anko deals 5 affliction damage to one enemy permanently. Until that enemy is killed, they will receive an additional 5 damage from all Anko's other skills. During this time, this skill will be replaced by 'Dragon Fire'. This skill ends when Anko dies.",
        descriptionBR:
          "Anko irá causar 5 dano aflitivo a um inimigo permanentemente. Até que esse inimigo morra, ele irá receber 5 de dano adicional de todas as outras habilidades de Anko. Durante esse tempo, essa habilidade será substituída por 'Dragon Fire'. Essa habilidade termina quando Anko morrer.",
        energy: ["Random"],
        classes: ["Physical", "Melee", "Affliction", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/tjBSEBp.png",
      },
      {
        name: "Twin Snakes",
        description:
          "Anko delivers a large dose of poison, dealing 15 affliction damage to one random enemy. For 1 turn, Anko becomes invulnerable to physical skills. The following turn, Anko's skills will cost 1 less random chakra.",
        descriptionBR:
          "Anko entrega uma grande dose de veneno, causando 15 dano aflitivo a um inimigo aleatório. Por 1 turno, Anko se tornará invulnerável a habilidades Physical. No próximo turno, as habilidades de Anko irão custar 1 chakra aleatório a menos.",
        energy: ["Random"],
        classes: ["Physical", "Melee", "Instant", "Affliction"],
        cooldown: 1,
        url: "https://i.imgur.com/0vzNgam.png",
      },
      {
        name: "Hidden Shadow Snake Hand",
        description:
          "Anko calls forth snakes from under her jacket which slam into one enemy, dealing 20 damage and 15 affliction damage to them. Afterwards, Anko gains 5 permanent destructible defense.",
        descriptionBR:
          "Anko invoca cobras debaixo de sua jaqueta que atingem um inimigo, causando 20 de dano e 15 de dano aflitivo a ele. Em seguida, Anko recebe 5 de defesa destrutível permanente.",
        energy: ["Nin", "Random"],
        classes: ["Physical", "Instant", "Melee"],
        cooldown: 1,
        url: "https://i.imgur.com/QRV4RTd.png",
      },
      {
        name: "Quick Reflexes",
        description:
          "This skill makes Mitarashi Anko <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Mitarashi Anko <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/aLUTqtz.png",
      },
      {
        name: "Dragon Fire",
        description:
          "Anko scorches the battlefield with fire, dealing 10 affliction damage to all enemies for 2 turns. During this time, they will also receive an additional 5 affliction damage from all other affliction skills.",
        descriptionBR:
          "Anko incendeia o campo de batalha com fogo, causando 10 de dano aflitivo a todos os inimigos por 2 turnos. Durante esse tempo, eles também irão receber 5 de dano aflitivo adicional de todas as outras habilidades Affliction.",
        energy: ["Nin"],
        classes: ["Chakra", "Ranged", "Instant", "Affliction"],
        cooldown: 1,
        url: "https://i.imgur.com/JfRvVaJ.png",
      },
    ],
  },
  {
    name: "Shizune",
    url: "https://i.imgur.com/gpntRTU.png",
    description:
      "Shizune is the aid of Tsunade. A competent combatant using poisons and needles, she is also a highly skilled medic who is able to heal her allies.",
    descriptionBR:
      "Shizune é a assistente de Tsunade. Uma combatente competente que usa venenos e agulhas, ela também é uma médica altamente habilidosa capaz de curar seus aliados.",
    skills: [
      {
        name: "Prepared Needle Shot",
        description:
          "Shizune shoots hidden needles at one enemy dealing 15 damage to them. For 1 turn, if that enemy uses a new harmful skill, they will receive 50% more damage from any skill for 1 turn.",
        descriptionBR:
          "Shizune dispara agulhas escondidas em um inimigo, causando 15 de dano a ele. Por 1 turno, se esse inimigo usar uma nova habilidade ofensiva, ele irá receber 50% a mais de dano de qualquer habilidade por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant", "Ranged"],
        cooldown: 0,
        url: "https://i.imgur.com/IXgvJIk.png",
      },
      {
        name: "Poison Mist",
        description:
          "Shizune breaths a poison cloud on one enemy who takes 12 affliction damage for 3 turns. This skill may not be used on an enemy currently affected.",
        descriptionBR:
          "Shizune exala uma nuvem de veneno em um inimigo, que irá receber 12 de dano aflitivo por 3 turnos. Essa habilidade não pode ser usada em um inimigo que já esteja afetado.",
        energy: ["Random"],
        classes: ["Physical", "Instant", "Ranged", "Affliction*"],
        cooldown: 1,
        url: "https://i.imgur.com/pAf7GAy.png",
      },
      {
        name: "Healing Resuscitation Regeneration",
        description:
          "Using this advanced healing technique, Shizune heals one ally for 35 health and removes all enemy affliction skills from them.",
        descriptionBR:
          "Usando essa técnica avançada de cura, Shizune cura um aliado em 35 de vida e remove todas as habilidades Affliction inimigas dele.",
        energy: ["Random", "Random"],
        classes: ["Chakra", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/PXcTQUt.png",
      },
      {
        name: "Shizune Replacement Technique",
        description:
          "This skill makes Shizune <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Shizune <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Chakra", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/hGOwcqv.png",
      },
    ],
  },
  {
    name: "Yakushi Kabuto",
    url: "https://i.imgur.com/ZIyW33w.png",
    description:
      "Kabuto was once found on the battlefield, was taught medical ninjutsu, and now assists Orochimaru. He uses his medical skill for both offence and defense.",
    descriptionBR:
      "Kabuto foi encontrado no campo de batalha, aprendeu ninjutsu médico e agora auxilia Orochimaru. Ele usa suas habilidades médicas tanto para ataque quanto para defesa.",
    skills: [
      {
        name: "Mystical Palm Technique",
        description:
          "Kabuto cuts one enemy through their flesh like a scalpel, dealing 20 piercing damage to them. For 2 turns, that enemy will take 5 additional damage from non-mental melee skills. During this time, their harmful physical and chakra skills will cost 1 additional random chakra.",
        descriptionBR:
          "Kabuto corta um inimigo através da carne, como um bisturi, causando 20 de dano perfurante a ele. Por 2 turnos, esse inimigo irá receber 5 de dano adicional de habilidades melee não-mental. Durante esse tempo, as habilidades ofensivas physical e chakra dele irão custar 1 chakra aleatório adicional.",
        energy: ["Nin"],
        classes: ["Chakra", "Instant", "Melee"],
        cooldown: 0,
        url: "https://i.imgur.com/jyPztJT.png",
      },
      {
        name: "Temple of Nirvana",
        description:
          "Kabuto creates a large scale genjutsu that affects all enemies for 1 turn. Any enemy that uses a new skill will have their chakra and ranged skills stunned and will receive 5 additional damage from 'Mystical Palm Technique' permanently. This skill is invisible.",
        descriptionBR:
          "Kabuto cria um genjutsu em larga escala que afeta todos os inimigos por 1 turno. Qualquer inimigo que usar uma nova habilidade terá suas habilidades chakra e ranged atordoadas e irá receber 5 de dano adicional de 'Mystical Palm Technique' permanentemente. Essa habilidade é invisível.",
        energy: ["Gen"],
        classes: ["Mental", "Instant", "Ranged"],
        cooldown: 2,
        url: "https://i.imgur.com/6MjweCd.png",
      },
      {
        name: "Secret Healing Wound Destruction",
        description:
          "Kabuto removes all enemy affliction skills from himself, gains 50% damage reduction for 1 turn and heals 35 health. This skill will heal 5 less health each time it is used.",
        descriptionBR:
          "Kabuto remove todas as habilidades Affliction inimigas de si mesmo, ganha 50% de redução de dano por 1 turno e cura 35 de vida. Essa habilidade irá curar 5 de vida a menos a cada vez que for usada.",
        energy: ["Nin"],
        classes: ["Chakra", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/nFIj8h6.png",
      },
      {
        name: "Dead Soul Technique",
        description:
          "This skill makes Yakushi Kabuto <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Yakushi Kabuto <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Mental", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/1DqPb41.png",
      },
    ],
  },
  {
    name: "Hatake Kakashi",
    url: "https://i.imgur.com/EiPfRpg.png",
    description:
      "Kakashi is the sensei of Naruto, Sakura, and Sasuke. With his Sharingan he is able to turn his foes skills back upon themselves and can cause severe damage with his Raikiri and Nin-Dogs skills.",
    descriptionBR:
      "Kakashi é o sensei de Naruto, Sakura e Sasuke. Com seu Sharingan, ele é capaz de devolver as habilidades dos inimigos contra eles mesmos e pode causar dano severo com suas habilidades Raikiri e Nin-Dogs.",
    skills: [
      {
        name: "Sharingan Copy",
        description:
          "For 1 turn, any new non-unique skill that targets Kakashi will instantly be reflected back upon the enemy who used it. This skill is invisible.",
        descriptionBR:
          "Por 1 turno, qualquer nova habilidade não-unique que tiver como alvo Kakashi será instantaneamente refletida de volta ao inimigo que a usou. Essa habilidade é invisível.",
        energy: ["Blood"],
        classes: ["Chakra", "Instant", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/nqbmD13.png",
      },
      {
        name: "Nin-Dogs",
        description:
          "Kakashi summons the nin-dogs which bite an enemy. That enemy has their physical and mental skills stunned for 1 turn. During this time 'Raikiri' will do 50 more damage to that enemy.",
        descriptionBR:
          "Kakashi invoca os nin-dogs, que mordem um inimigo. Esse inimigo terá suas habilidades physical e mental atordoadas por 1 turno. Durante esse tempo, 'Raikiri' irá causar 50 de dano a mais a esse inimigo.",
        energy: ["Nin", "Random"],
        classes: ["Physical", "Control", "Ranged", "Affliction"],
        cooldown: 2,
        url: "https://i.imgur.com/qenftRL.png",
      },
      {
        name: "Raikiri",
        description:
          "An attack so strong it is said to cut lightning. This skill deals 50 piercing damage to one enemy. If the enemy is affected by 'Nin-Dogs' the enemy will take 100 piercing damage from 'Raikiri' instead.",
        descriptionBR:
          "Um ataque tão poderoso que dizem ser capaz de cortar relâmpagos. Essa habilidade causa 50 de dano perfurante a um inimigo. Se o inimigo estiver afetado por 'Nin-Dogs', ele irá receber 100 de dano perfurante de 'Raikiri'.",
        energy: ["Tai", "Nin"],
        classes: ["Chakra", "Instant", "Melee", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/IO6GaRr.png",
      },
      {
        name: "Kakashi Replacement Technique",
        description:
          "This skill makes Hatake Kakashi <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Hatake Kakashi <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Chakra", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/hGOwcqv.png",
      },
    ],
  },
  {
    name: "Yuhi Kurenai",
    url: "https://i.imgur.com/L1IWoqb.png",
    description:
      "Yuhi Kurenai is a jounin and team leader of Hinata, Shino and Kiba. She is a genjutsu master who is able to both disable and attack her enemies with illusions.",
    descriptionBR:
      "Yuhi Kurenai é uma jounin e líder de equipe de Hinata, Shino e Kiba. Ela é uma mestre em genjutsu, capaz de tanto incapacitar quanto atacar seus inimigos com ilusões.",
    skills: [
      {
        name: "Cherry Blossom Suffocation",
        description:
          "Kurenai suffocates all enemies with illusionary cherry blossoms, dealing 10 damage to them for 3 turns. During this time, if 'Plant-Form Attack' is used on an enemy affected by this skill, they will be stunned for 1 turn.",
        descriptionBR:
          "Kurenai sufoca todos os inimigos com ilusórias flores de cerejeira, causando 10 de dano a eles por 3 turnos. Durante esse tempo, se 'Plant-Form Attack' for usada em um inimigo afetado por essa habilidade, ele será atordoado por 1 turno.",
        energy: ["Random", "Random"],
        classes: ["Mental", "Action", "Ranged"],
        cooldown: 2,
        url: "https://i.imgur.com/IKQQZHC.png",
      },
      {
        name: "Plant Form Attack",
        description:
          "Kurenai deals 20 damage to one enemy. For 2 turns, that enemy will be unable to reduce damage or become invulnerable; This effect is applied before the damage. If used on an enemy affected by 'Cherry Blossom Suffocation', their physical and ranged skills will be stunned for 1 turn.",
        descriptionBR:
          "Kurenai causa 20 de dano a um inimigo. Por 2 turnos, esse inimigo não poderá reduzir dano nem se tornar invulnerável; esse efeito é aplicado antes do dano. Se usada em um inimigo afetado por 'Cherry Blossom Suffocation', as habilidades physical e ranged dele serão atordoadas por 1 turno.",
        energy: ["Gen"],
        classes: ["Mental", "Instant", "Melee"],
        cooldown: 0,
        url: "https://i.imgur.com/p4ruZfg.png",
      },
      {
        name: "Tree Bind Death",
        description:
          "Kurenai protects herself or an ally for 1 turn. The first non-affliction damaging skill used on that ally will be countered. The countered enemy will have their chakra and melee skills stunned and will receive double damage from mental skills for 3 turns. Invisible. Ends when Kurenai dies.",
        descriptionBR:
          "Kurenai protege a si mesma ou um aliado por 1 turno. A primeira habilidade que cause dano não aflitivo usada nesse aliado será anulada. O inimigo anulado terá suas habilidades chakra e melee atordoadas e irá receber dano dobrado de habilidades mental por 3 turnos. Invisível. Termina quando Kurenai morre.",
        energy: ["Gen"],
        classes: ["Mental", "Instant"],
        cooldown: 2,
        url: "https://i.imgur.com/t08cNjA.png",
      },
      {
        name: "Vanishing Illusion",
        description:
          "This skill makes Yuhi Kurenai <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Yuhi Kurenai <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Mental", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/j22EpUB.png",
      },
    ],
  },
  {
    name: "Sarutobi Asuma",
    url: "https://i.imgur.com/N4ZFINr.png",
    description:
      "Sarutobi Asuma is the leader of Team 10. He uses trench knives extended by his chakra to fight and protect his teammates.",
    descriptionBR:
      "Sarutobi Asuma é o líder do Time 10. Ele usa facas de trincheira ampliadas por seu chakra para lutar e proteger seus companheiros de equipe.",
    skills: [
      {
        name: "Flying Swallow",
        description:
          "Using blades with wind chakra, Asuma and his allies gain 10 points of damage reduction and all enemies take 10 damage for 3 turns.",
        descriptionBR:
          "Usando lâminas com chakra de vento, Asuma e seus aliados ganham 10 pontos de redução de dano, e todos os inimigos irão receber 10 de dano por 3 turnos.",
        energy: ["Nin", "Random"],
        classes: ["Physical", "Melee", "Action"],
        cooldown: 3,
        url: "https://i.imgur.com/Dnwx46P.png",
      },
      {
        name: "Finishing Blow",
        description:
          "Asuma deals 35 damage to one enemy. During the second turn of 'Flying Swallow', this skill will stun physical and ranged skills for 1 turn. During the third turn of 'Flying Swallow', this skill will deal 5 additional damage and will remove 1 taijutsu or bloodline chakra.",
        descriptionBR:
          "Asuma causa 35 de dano a um inimigo. Durante o segundo turno de 'Flying Swallow', essa habilidade irá atordoar habilidades physical e ranged por 1 turno. Durante o terceiro turno de 'Flying Swallow', essa habilidade irá causar 5 de dano adicional e irá remover 1 taijutsu ou bloodline chakra.",
        energy: ["Tai", "Random"],
        classes: ["Physical", "Instant", "Melee"],
        cooldown: 0,
        url: "https://i.imgur.com/gjMSfaG.png",
      },
      {
        name: "Self Sacrifice",
        description:
          "Sarutobi Asuma protects one ally from harm. For 1 turn, that ally will become invulnerable to harmful skills.",
        descriptionBR:
          "Sarutobi Asuma protege um aliado do perigo. Por 1 turno, esse aliado se tornará invulnerável a habilidades ofensivas.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/iHE7E8U.png",
      },
      {
        name: "Wind Chakra Blades Block",
        description:
          "This skill makes Sarutobi Asuma <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Sarutobi Asuma <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Chakra", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/vndck21.png",
      },
    ],
  },
  {
    name: "Maito Gai",
    url: "https://i.imgur.com/mZzzuP2.png",
    description:
      "Gai is the sensei of Lee, Tenten and Neji. He and Lee both use the same fighting style, Strong Fist, which involves high-speed attacks and the opening of inner chakra gates.",
    descriptionBR:
      "Gai is the sensei of Lee, Tenten and Neji. He and Lee both use the same fighting style, Strong Fist, which involves high-speed attacks and the opening of inner chakra gates.",
    skills: [
      {
        name: "Strong Whirlwind",
        description:
          "Gai kicks with a strong whirlwind, dealing 30 piercing damage to one enemy. During 'Sixth Gate Opening' this skill will be improved and will deal 60 piercing damage.",
        descriptionBR:
          "Gai kicks with a strong whirlwind, dealing 30 piercing damage to one enemy. During 'Sixth Gate Opening' this skill will be improved and will deal 60 piercing damage.",
        energy: ["Tai", "Random"],
        classes: ["Physical", "Instant", "Melee"],
        cooldown: 0,
        url: "https://i.imgur.com/MvMX1NV.png",
      },
      {
        name: "Sixth Gate Opening",
        description:
          "Gai opens six chakra gates, losing 40% of his current health. The following 2 turns, 'Strong Whirlwind' will be improved and will deal 60 piercing damage. During this time, Gai will become invulnerable.",
        descriptionBR:
          "Gai opens six chakra gates, losing 40% of his current health. The following 2 turns, 'Strong Whirlwind' will be improved and will deal 60 piercing damage. During this time, Gai will become invulnerable.",
        energy: ["Tai"],
        classes: ["Mental", "Instant", "Unique"],
        cooldown: 4,
        url: "https://i.imgur.com/2tVPi5d.png",
      },
      {
        name: "Counter Punch",
        description:
          "Gai singles out one enemy to counter attack. If that enemy uses a new harmful skill, they will be countered and will receive 30 damage. This skill is invisible. This skill is classed as Action and may be interrupted.",
        descriptionBR:
          "Gai singles out one enemy to counter attack. If that enemy uses a new harmful skill, they will be countered and will receive 30 damage. This skill is invisible. This skill is classed as Action and may be interrupted.",
        energy: ["Tai"],
        classes: ["Physical", "Melee", "Action"],
        cooldown: 2,
        url: "https://i.imgur.com/h12OiKl.jpg",
      },
      {
        name: "Gai Replacement Technique",
        description:
          "This skill makes Maito Gai <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Maito Gai <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Chakra", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/hGOwcqv.png",
      },
    ],
  },
  {
    name: "Namikaze Minato",
    url: "https://i.imgur.com/H8nguOB.png",
    description:
      "Known as Konoha's Yellow Flash, Minato is the leader of Team Minato. His style of combat is unique and he is a highly analytical and caring person.",
    descriptionBR:
      "Known as Konoha's Yellow Flash, Minato is the leader of Team Minato. His style of combat is unique and he is a highly analytical and caring person.",
    skills: [
      {
        name: "Hiraishin no Jutsu",
        description:
          "Minato deals 25 piercing damage to one enemy and gains 75% unpierceable damage reduction for 1 turn. All enemies marked by 'Hiraishin Marking' will take 10 piercing damage. All allies marked by 'Hiraishin Marking' will become invulnerable for 1 turn.",
        descriptionBR:
          "Minato deals 25 piercing damage to one enemy and gains 75% unpierceable damage reduction for 1 turn. All enemies marked by 'Hiraishin Marking' will take 10 piercing damage. All allies marked by 'Hiraishin Marking' will become invulnerable for 1 turn.",
        energy: ["Gen", "Random"],
        classes: ["Physical", "Ranged", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/gWT6r09.png",
      },
      {
        name: "Hiraishin Marking",
        description:
          "If used on an enemy, that enemy will be unable to become invulnerable. If used on an ally, that ally gains 5 points of damage reduction. This skill lasts 3 turns, ignores invulnerability and cannot be used on the same target the following turn.",
        descriptionBR:
          "If used on an enemy, that enemy will be unable to become invulnerable. If used on an ally, that ally gains 5 points of damage reduction. This skill lasts 3 turns, ignores invulnerability and cannot be used on the same target the following turn.",
        energy: [],
        classes: ["Chakra", "Affliction", "Ranged", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/xuWHZFo.png",
      },
      {
        name: "Hiraishin Kunai Scatter",
        description:
          "By scattering hiraishin kunais, Minato applies 'Hiraishin Marking' on all enemies and all allies for 1 turn. Afterwards, Minato gains 1 random chakra. This skill is invisible and ignores invulnerability.",
        descriptionBR:
          "By scattering hiraishin kunais, Minato applies 'Hiraishin Marking' on all enemies and all allies for 1 turn. Afterwards, Minato gains 1 random chakra. This skill is invisible and ignores invulnerability.",
        energy: ["Nin"],
        classes: ["Chakra", "Ranged", "Control", "Affliction"],
        cooldown: 3,
        url: "https://i.imgur.com/BreOhEB.png",
      },
      {
        name: "Seal Sensing",
        description:
          "This skill makes Namikaze Minato <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Namikaze Minato <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Mental", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/GjTFYPH.png",
      },
    ],
  },
  {
    name: "Uzumaki Kushina",
    url: "https://i.imgur.com/Bt4OJMT.jpg",
    description:
      "The mother of Uzumaki Naruto, wife to Minato and once the jinchuuriki to the nine-tailed fox. Kushina specializes in unique sealing and barrier techniques that can hinder and disable even the strongest of enemies.",
    descriptionBR:
      "The mother of Uzumaki Naruto, wife to Minato and once the jinchuuriki to the nine-tailed fox. Kushina specializes in unique sealing and barrier techniques that can hinder and disable even the strongest of enemies.",
    skills: [
      {
        name: "Four Symbols Seal",
        description:
          "Kushina attempts to seal an enemy away, destroying their destructible defense, dealing 15 piercing damage to them, stunning their non helpful-mental skills for 1 turn, removing 1 bloodline or genjutsu chakra from them and increasing the non-affliction damage they receive by 5 permanently.",
        descriptionBR:
          "Kushina attempts to seal an enemy away, destroying their destructible defense, dealing 15 piercing damage to them, stunning their non helpful-mental skills for 1 turn, removing 1 bloodline or genjutsu chakra from them and increasing the non-affliction damage they receive by 5 permanently.",
        energy: ["Gen", "Random"],
        classes: ["Chakra", "Ranged", "Instant", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/7MDXZv2.jpg",
      },
      {
        name: "Life Link",
        description:
          "For 5 turns if either Kushina or onw enemy diea, the other will die as well. The following 5 turns, this skill will be replaced by 'Life Transfer'. This skill ignores invulnerability and cannot be countered, reflected, ignored, removed or interact with other skills.",
        descriptionBR:
          "For 5 turns if either Kushina or onw enemy diea, the other will die as well. The following 5 turns, this skill will be replaced by 'Life Transfer'. This skill ignores invulnerability and cannot be countered, reflected, ignored, removed or interact with other skills.",
        energy: ["Gen", "Random"],
        classes: ["Mental", "Ranged", "Instant", "Unique"],
        cooldown: 5,
        url: "https://i.imgur.com/KeQwfcn.jpg",
      },
      {
        name: "Adamantine Sealing Chains",
        description:
          "Kushina uses an immensely powerful seal, surrounding one enemy with chains, first removing all helpful skills on them and then stunning them and making them invulnerable to all further skills for 2 turns. This skill ignores invulnerability and cannot be countered or reflected.",
        descriptionBR:
          "Kushina uses an immensely powerful seal, surrounding one enemy with chains, first removing all helpful skills on them and then stunning them and making them invulnerable to all further skills for 2 turns. This skill ignores invulnerability and cannot be countered or reflected.",
        energy: ["Blood", "Gen"],
        classes: ["Chakra", "Unique", "Instant"],
        cooldown: 5,
        url: "https://i.imgur.com/kVgbH4G.jpg",
      },
      {
        name: "Adamantine Covering Chains",
        description:
          "This skill makes Uzumaki Kushina <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Uzumaki Kushina <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Chakra", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/O3yVOUO.jpg",
      },
      {
        name: "Life Transfer",
        description:
          "Kushina heals an ally for 20 points and deals 20 damage to herself.",
        descriptionBR:
          "Kushina heals an ally for 20 points and deals 20 damage to herself.",
        energy: ["Random"],
        classes: ["Mental", "Affliction", "Ranged", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/SnE3AWh.png",
      },
    ],
  },
  {
    name: "Gekko Hayate",
    url: "https://i.imgur.com/CXtg9Cd.png",
    description:
      "Gekko Hayate is a jounin and one of the instructors of the chuunin exams in Konoha. He is an intelligent Shinobi that distances himself from an enemy to use illusionary techniques.",
    descriptionBR:
      "Gekko Hayate is a jounin and one of the instructors of the chuunin exams in Konoha. He is an intelligent Shinobi that distances himself from an enemy to use illusionary techniques.",
    skills: [
      {
        name: "Eavesdrop",
        description:
          "For 1 turn, the first harmful non-mental skill used on Hayate will be countered. This skill is invisible the first turn. If sucessfully, 'Dance of the Crescent Moon' will deal 10 additional damage permanently. This skill stacks.",
        descriptionBR:
          "For 1 turn, the first harmful non-mental skill used on Hayate will be countered. This skill is invisible the first turn. If sucessfully, 'Dance of the Crescent Moon' will deal 10 additional damage permanently. This skill stacks.",
        energy: ["Gen"],
        classes: ["Mental", "Instant"],
        cooldown: 2,
        url: "https://i.imgur.com/hXtcI2H.png",
      },
      {
        name: "Dance of the Crescent Moon",
        description:
          "Using both his sword and genjutsu, Hayate becomes invulnerable for 1 turn and deals 30 damage to one enemy. Afterwards, all the additional damage from 'Eavesdrop' and 'Crescent Moon Slash' will be removed and converted into permanent damage reduction, in percentage.",
        descriptionBR:
          "Using both his sword and genjutsu, Hayate becomes invulnerable for 1 turn and deals 30 damage to one enemy. Afterwards, all the additional damage from 'Eavesdrop' and 'Crescent Moon Slash' will be removed and converted into permanent damage reduction, in percentage.",
        energy: ["Gen", "Random"],
        classes: ["Mental", "Melee", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/2HfMnfe.png",
      },
      {
        name: "Crescent Moon Slash",
        description:
          "Hayate jumps on an enemy from above, dealing 20 piercing damage to them. Permanently, 'Dance of the Crescent Moon' will deal 10 additional damage when this skill is used. This skill stacks.",
        descriptionBR:
          "Hayate jumps on an enemy from above, dealing 20 piercing damage to them. Permanently, 'Dance of the Crescent Moon' will deal 10 additional damage when this skill is used. This skill stacks.",
        energy: ["Tai"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/84XGL6v.png",
      },
      {
        name: "Determined Retreat",
        description:
          "This skill makes Gekko Hayate <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Gekko Hayate <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/kaMmauE.png",
      },
    ],
  },
  {
    name: "Baki",
    url: "https://i.imgur.com/f0YWgRx.png",
    description:
      "Baki is the Jounin team leader of Gaara, Temari, and Kankuro. A mysterious and perhaps devious but loyal man, he specializes in wind element jutsu.",
    descriptionBR:
      "Baki is the Jounin team leader of Gaara, Temari, and Kankuro. A mysterious and perhaps devious but loyal man, he specializes in wind element jutsu.",
    skills: [
      {
        name: "Wind Blade",
        description:
          "Baki conjures a maelstrom of blade-like wind and does 40 piercing damage to one enemy.",
        descriptionBR:
          "Baki conjures a maelstrom of blade-like wind and does 40 piercing damage to one enemy.",
        energy: ["Gen", "Nin"],
        classes: ["Physical", "Instant", "Ranged"],
        cooldown: 0,
        url: "https://i.imgur.com/eBHHYKn.png",
      },
      {
        name: "Sudden Strike",
        description:
          "A simple, blindingly fast attack leaving an illusionary trail to throw off enemies. Baki does 20 piercing damage to one enemy.",
        descriptionBR:
          "A simple, blindingly fast attack leaving an illusionary trail to throw off enemies. Baki does 20 piercing damage to one enemy.",
        energy: ["Gen"],
        classes: ["Physical", "Instant", "Melee"],
        cooldown: 0,
        url: "https://i.imgur.com/TvDIanB.png",
      },
      {
        name: "Flak Jacket",
        description:
          "Baki puts on a specialized flak jacket from the sand village on himself, or one ally granting that character 50 destructible defense for 4 turns. During this time, that character will ignore all harmful effects except damage until this defense is destroyed.",
        descriptionBR:
          "Baki puts on a specialized flak jacket from the sand village on himself, or one ally granting that character 50 destructible defense for 4 turns. During this time, that character will ignore all harmful effects except damage until this defense is destroyed.",
        energy: ["Random", "Random"],
        classes: ["Physical", "Instant", "Unique"],
        cooldown: 4,
        url: "https://i.imgur.com/kaJlaHV.png",
      },
      {
        name: "Baki Teleportation",
        description:
          "This skill makes Baki <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Baki <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Chakra", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/ZBwSMFi.png",
      },
    ],
  },
  {
    name: "Orochimaru",
    url: "https://i.imgur.com/SujZWa4.png",
    description:
      "Orochimaru is one of the Legendary Sannin. He can increase his teams chakra for a price and summon powerful snakes to beat his enemies.",
    descriptionBR:
      "Orochimaru is one of the Legendary Sannin. He can increase his teams chakra for a price and summon powerful snakes to beat his enemies.",
    skills: [
      {
        name: "Kusanagi",
        description:
          "Orochimaru pulls the legendary sword Kusanagi and stabs one enemy, dealing 30 damage to them and removing 1 bloodline or genjutsu chakra from that enemy.",
        descriptionBR:
          "Orochimaru pulls the legendary sword Kusanagi and stabs one enemy, dealing 30 damage to them and removing 1 bloodline or genjutsu chakra from that enemy.",
        energy: ["Blood", "Random"],
        classes: ["Physical", "Instant", "Melee", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/n1J8CAt.png",
      },
      {
        name: "Cursed Seal Technique",
        description:
          "Orochimaru places a cursed seal on an ally or an enemy, dealing 15 affliction damage to them and granting them 1 random chakra.",
        descriptionBR:
          "Orochimaru places a cursed seal on an ally or an enemy, dealing 15 affliction damage to them and granting them 1 random chakra.",
        energy: [],
        classes: ["Chakra", "Melee", "Instant", "Unique", "Affliction"],
        cooldown: 3,
        url: "https://i.imgur.com/RuoJhQI.png",
      },
      {
        name: "Major Summoning: Manda",
        description:
          "By summoning Manda in the battlefield, Orochimaru deals 45 damage to one enemy and that enemy will lose 1 bloodline, ninjutsu and genjutsu from their pool.",
        descriptionBR:
          "By summoning Manda in the battlefield, Orochimaru deals 45 damage to one enemy and that enemy will lose 1 bloodline, ninjutsu and genjutsu from their pool.",
        energy: ["Tai", "Blood", "Nin"],
        classes: ["Physical", "Instant", "Ranged", "Unique"],
        cooldown: 5,
        url: "https://i.imgur.com/fsxSCxd.png",
      },
      {
        name: "Earth Clone Technique",
        description:
          "This skill makes Orochimaru <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Orochimaru <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Chakra", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/cbN5L9k.png",
      },
    ],
  },
  {
    name: "Jiraiya",
    url: "https://i.imgur.com/tZpyvBQ.png",
    description:
      "Jiraiya is one of the Legendary Sannin. With his various frog-based jutsus he is able to both hinder and damage all of his opponents.",
    descriptionBR:
      "Jiraiya is one of the Legendary Sannin. With his various frog-based jutsus he is able to both hinder and damage all of his opponents.",
    skills: [
      {
        name: "Toad Mouth Bind",
        description:
          "By placing every character into a giant toad mouth, Jiraiya grants his team 20% damage reduction for 2 turns. During this time, all enemies will receive 25% more damage.",
        descriptionBR:
          "By placing every character into a giant toad mouth, Jiraiya grants his team 20% damage reduction for 2 turns. During this time, all enemies will receive 25% more damage.",
        energy: ["Gen"],
        classes: ["Mental", "Instant", "Ranged"],
        cooldown: 3,
        url: "https://i.imgur.com/3JTvPnM.png",
      },
      {
        name: "Major Summoning: Gamabunta",
        description:
          "Jiraiya summons Gamabunta in the battlefield, dealing 35 damage to all enemies. If targetable, Jiraiya will become invulnerable for 1 turn and will gain 1 random chakra. This skill cannot be countered.",
        descriptionBR:
          "Jiraiya summons Gamabunta in the battlefield, dealing 35 damage to all enemies. If targetable, Jiraiya will become invulnerable for 1 turn and will gain 1 random chakra. This skill cannot be countered.",
        energy: ["Tai", "Blood", "Gen"],
        classes: ["Chakra", "Instant", "Ranged", "Unique"],
        cooldown: 5,
        url: "https://i.imgur.com/Jjt22lv.png",
      },
      {
        name: "Great Fireball Technique",
        description:
          "Jiraiya spits a giant fireball at all enemies, dealing 20 affliction damage to one enemy and 10 affliction damage to all other enemies.",
        descriptionBR:
          "Jiraiya spits a giant fireball at all enemies, dealing 20 affliction damage to one enemy and 10 affliction damage to all other enemies.",
        energy: ["Nin"],
        classes: ["Chakra", "Instant", "Ranged", "Affliction"],
        cooldown: 0,
        url: "https://i.imgur.com/NNHCL9Z.png",
      },
      {
        name: "Spiked Buddha",
        description:
          "This skill makes Jiraiya <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Jiraiya <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant", "Unique"],
        cooldown: 4,
        url: "https://i.imgur.com/imwdLV0.png",
      },
    ],
  },
  {
    name: "Tsunade",
    url: "https://i.imgur.com/LGztynU.png",
    description:
      "Tsunade is the Godaime Hokage and a Legendary Sannin. Her skill with medical ninjutsu allows her to do significant damage and heal herself and teammates.",
    descriptionBR:
      "Tsunade is the Godaime Hokage and a Legendary Sannin. Her skill with medical ninjutsu allows her to do significant damage and heal herself and teammates.",
    skills: [
      {
        name: "Major Summoning: Katsuyu",
        description:
          "Tsunade sunmons the slug queen Katsuyu, granting her team 50% damage reduction for 2 turns and healing them 20 health instantly. Katsuyu also spits acid in all enemies dealing 20 affliction damage to them.",
        descriptionBR:
          "Tsunade sunmons the slug queen Katsuyu, granting her team 50% damage reduction for 2 turns and healing them 20 health instantly. Katsuyu also spits acid in all enemies dealing 20 affliction damage to them.",
        energy: ["Blood", "Nin", "Gen"],
        classes: ["Chakra", "Ranged", "Instant", "Unique", "Affliction"],
        cooldown: 6,
        url: "https://i.imgur.com/EgdhY9k.png",
      },
      {
        name: "Painful Sky Leg",
        description:
          "Tsunade performs a drop kick with her insane strength, dealing 30 piercing damage to one enemy and stunning their physical and mental skills for 1 turn.",
        descriptionBR:
          "Tsunade performs a drop kick with her insane strength, dealing 30 piercing damage to one enemy and stunning their physical and mental skills for 1 turn.",
        energy: ["Tai", "Random"],
        classes: ["Physical", "Instant", "Melee"],
        cooldown: 0,
        url: "https://i.imgur.com/w5xkFjJ.png",
      },
      {
        name: "Creation Rebirth",
        description:
          "Using stored chakra Tsunade regenerates herself, healing 35 health instantly.",
        descriptionBR:
          "Using stored chakra Tsunade regenerates herself, healing 35 health instantly.",
        energy: ["Nin"],
        classes: ["Chakra", "Instant", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/MVBNqnb.png",
      },
      {
        name: "Tsunade Replacement Technique",
        description:
          "This skill makes Tsunade <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Tsunade <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Chakra", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/hGOwcqv.png",
      },
    ],
  },
  {
    name: "Sandaime Hokage",
    url: "https://i.imgur.com/OUgT0V5.jpg",
    description:
      "Sandaime Hokage, known as the God of Shinobi, was the strongest Kage to ever live. He is able to concentrate on one opponent while his summon, Enma, confronts others. When all else fails he can summon the death god.",
    descriptionBR:
      "Sandaime Hokage, known as the God of Shinobi, was the strongest Kage to ever live. He is able to concentrate on one opponent while his summon, Enma, confronts others. When all else fails he can summon the death god.",
    skills: [
      {
        name: "Fire Dragon Flame Missile",
        description:
          "Sandaime Hokage deals 25 damage to one enemy. This enemy also takes 15 affliction damage the following turn.*",
        descriptionBR:
          "Sandaime Hokage deals 25 damage to one enemy. This enemy also takes 15 affliction damage the following turn.*",
        energy: ["Nin", "Random"],
        classes: ["Chakra", "Instant", "Ranged", "Affliction*"],
        cooldown: 0,
        url: "https://i.imgur.com/2DC5GaI.png",
      },
      {
        name: "Major Summoning Enma",
        description:
          "By summoning Enma, Sandaime and all allies gain 25% damage reduction and cannot be killed by enemies for 2 turns*. If targetable, Sandaime will do 15 damage to all enemies for 2 turns.",
        descriptionBR:
          "By summoning Enma, Sandaime and all allies gain 25% damage reduction and cannot be killed by enemies for 2 turns*. If targetable, Sandaime will do 15 damage to all enemies for 2 turns.",
        energy: ["Tai", "Nin", "Gen"],
        classes: ["Physical", "Ranged", "Action", "*Instant", "Unique"],
        cooldown: 5,
        url: "https://i.imgur.com/pBFI2qO.png",
      },
      {
        name: "Shiki Fuujin",
        description:
          "The death god sucks the life out of one enemy who takes 35 affliction damage, is stunned and cannot reduce damage or become invulnerable every turn.* Sandaime himself takes 20 affliction damage and is stunned every turn. This skill cannot be removed or ignored, may only target one enemy and is cancelled when Sandaime dies.",
        descriptionBR:
          "The death god sucks the life out of one enemy who takes 35 affliction damage, is stunned and cannot reduce damage or become invulnerable every turn.* Sandaime himself takes 20 affliction damage and is stunned every turn. This skill cannot be removed or ignored, may only target one enemy and is cancelled when Sandaime dies.",
        energy: ["Random", "Random", "Random"],
        classes: ["Chakra", "Instant", "Affliction", "Melee", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/Sh5V2xt.png",
      },
      {
        name: "Earth Release Wall",
        description:
          "This skill makes Sandaime Hokage <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Sandaime Hokage <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/FCO9qTm.png",
      },
    ],
  },
  {
    name: "Shodai Hokage",
    url: "https://i.imgur.com/4Qt9UaS.png",
    description:
      "The First Hokage and the founder of the Hidden Village of Konoha, Shodai Hokage has the ability to create and manipulate trees. This ability to give life shows the extent of his power.",
    descriptionBR:
      "The First Hokage and the founder of the Hidden Village of Konoha, Shodai Hokage has the ability to create and manipulate trees. This ability to give life shows the extent of his power.",
    skills: [
      {
        name: "Birth of the Trees",
        description:
          "Hashirama summons a giant field of trees. For 3 turns, any enemy that uses a new harmful skill will have the cost of their harmful skills increased by 1 random and their cooldowns increased by 1 for 1 turn. The following 3 turns, if Hashirama uses a new skill his team will gain 5 destructible defense.",
        descriptionBR:
          "Hashirama summons a giant field of trees. For 3 turns, any enemy that uses a new harmful skill will have the cost of their harmful skills increased by 1 random and their cooldowns increased by 1 for 1 turn. The following 3 turns, if Hashirama uses a new skill his team will gain 5 destructible defense.",
        energy: ["Random", "Random"],
        classes: ["Physical", "Instant", "Ranged", "Unique"],
        cooldown: 3,
        url: "https://i.imgur.com/ztMMKn0.png",
      },
      {
        name: "Tree Strangulation",
        description:
          "Hashirama catches and crushes one enemy in giant tree branches, dealing 25 piercing damage to that enemy and stunning their physical and chakra skills for 1 turn. During 'Birth of the Trees', this skill will cost 1 less random chakra.",
        descriptionBR:
          "Hashirama catches and crushes one enemy in giant tree branches, dealing 25 piercing damage to that enemy and stunning their physical and chakra skills for 1 turn. During 'Birth of the Trees', this skill will cost 1 less random chakra.",
        energy: ["Blood", "Random"],
        classes: ["Physical", "Instant", "Ranged", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/3ghIvfW.png",
      },
      {
        name: "Branch Manipulation",
        description:
          "Hashirama sends out his trees in all directions, dealing 10 affliction damage to all enemies and granting 25% damage reduction to himself and his allies. During 'Birth of the Trees', this skill will have no cooldown.",
        descriptionBR:
          "Hashirama sends out his trees in all directions, dealing 10 affliction damage to all enemies and granting 25% damage reduction to himself and his allies. During 'Birth of the Trees', this skill will have no cooldown.",
        energy: ["Random"],
        classes: ["Physical", "Instant", "Ranged", "Affliction*", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/2ZW1vwA.png",
      },
      {
        name: "Deflection",
        description:
          "This skill makes Shodai Hokage invulnerable for 1 turn. This skill will not grant destructible defense during 'Birth of the Trees'.",
        descriptionBR:
          "This skill makes Shodai Hokage invulnerable for 1 turn. This skill will not grant destructible defense during 'Birth of the Trees'.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/RyqXqfk.png",
      },
    ],
  },
  {
    name: "Nidaime Hokage",
    url: "https://i.imgur.com/GyEmocs.png",
    description:
      "Nidaime is the second Hokage and the grand uncle of Tsunade. He is very skilled with water jutsu, requiring no water source to perform them.",
    descriptionBR:
      "Nidaime is the second Hokage and the grand uncle of Tsunade. He is very skilled with water jutsu, requiring no water source to perform them.",
    skills: [
      {
        name: "Bringer of Darkness",
        description:
          "Tobirama plunges the battlefield into total darkness. For 1 turn, Tobirama and his allies will become invulnerable to physical and ranged skills.",
        descriptionBR:
          "Tobirama plunges the battlefield into total darkness. For 1 turn, Tobirama and his allies will become invulnerable to physical and ranged skills.",
        energy: ["Gen"],
        classes: ["Mental", "Instant"],
        cooldown: 3,
        url: "https://i.imgur.com/9aqZPND.png",
      },
      {
        name: "Water Collision Destruction",
        description:
          "Summoning a giant wave of water, Tobirama deals 13 damage to all enemies for 3 turns. Each turn, all enemies will have all their skills subclassed as Affliction stunned. The following 3 turns, 'Water Assault' will deal 10 additional damage.",
        descriptionBR:
          "Summoning a giant wave of water, Tobirama deals 13 damage to all enemies for 3 turns. Each turn, all enemies will have all their skills subclassed as Affliction stunned. The following 3 turns, 'Water Assault' will deal 10 additional damage.",
        energy: ["Nin", "Random"],
        classes: ["Physical", "Action", "Ranged"],
        cooldown: 3,
        url: "https://i.imgur.com/qfJm4UQ.png",
      },
      {
        name: "Water Assault",
        description:
          "Nidaime encases one enemy in water, making them ignore all helpful effects for 1 turn and dealing 20 damage to them.",
        descriptionBR:
          "Nidaime encases one enemy in water, making them ignore all helpful effects for 1 turn and dealing 20 damage to them.",
        energy: ["Nin"],
        classes: ["Physical", "Instant", "Ranged"],
        cooldown: 0,
        url: "https://i.imgur.com/TzDpZzQ.png",
      },
      {
        name: "Water Encampment Wall",
        description:
          "This skill makes Nidaime Hokage <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Nidaime Hokage <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/bUxeevY.png",
      },
    ],
  },
  {
    name: "Yondaime Hokage",
    url: "https://i.imgur.com/JD6Ftin.png",
    description:
      "The fourth Hokage was known as the yellow flash, regarded by all as the fastest shinobi to ever live. He is also the father of Uzumaki Naruto and the one who sealed the Kyuubi in his son.",
    descriptionBR:
      "The fourth Hokage was known as the yellow flash, regarded by all as the fastest shinobi to ever live. He is also the father of Uzumaki Naruto and the one who sealed the Kyuubi in his son.",
    skills: [
      {
        name: "Hiraishin Rasengan",
        description:
          "Yondaime Hokage deals 40 damage to one enemy ignoring invulnerability that cannot be countered or reflected. The following turn, this skill will cost 1 ninjutsu chakra and will deal 25 damage instead.",
        descriptionBR:
          "Yondaime Hokage deals 40 damage to one enemy ignoring invulnerability that cannot be countered or reflected. The following turn, this skill will cost 1 ninjutsu chakra and will deal 25 damage instead.",
        energy: ["Nin", "Gen"],
        classes: ["Chakra", "Melee", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/bcnhcBn.png",
      },
      {
        name: "Space Time Barrier",
        description:
          "Using his space-time abilities, Yondaime Hokage targets one ally or himself. For 1 turn, all new non-mental skills used on that ally will be reflected onto the enemy. This skill is invisible.",
        descriptionBR:
          "Using his space-time abilities, Yondaime Hokage targets one ally or himself. For 1 turn, all new non-mental skills used on that ally will be reflected onto the enemy. This skill is invisible.",
        energy: ["Gen"],
        classes: ["Mental", "Instant", "Unique"],
        cooldown: 2,
        url: "https://i.imgur.com/NPtZUyI.png",
      },
      {
        name: "Dead Demon Consuming Seal",
        description:
          "Using a partial seal, Yondaime seals part of one enemy away. That enemy will lose 25% of their health and have their physical and ranged skills stunned for 1 turn. If that enemy's health falls to 10 or lower that enemy will be killed. Yondaime Hokage will take 10 affliction damage*.",
        descriptionBR:
          "Using a partial seal, Yondaime seals part of one enemy away. That enemy will lose 25% of their health and have their physical and ranged skills stunned for 1 turn. If that enemy's health falls to 10 or lower that enemy will be killed. Yondaime Hokage will take 10 affliction damage*.",
        energy: ["Random", "Random"],
        classes: ["Chakra", "Instant", "Ranged", "Affliction*", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/NbuLkmG.png",
      },
      {
        name: "Kunai Defense",
        description:
          "This skill makes Yondaime Hokage <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Yondaime Hokage <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/SUru7Y9.png",
      },
    ],
  },
  {
    name: "Gaara Rehabilitated",
    url: "https://i.imgur.com/tV82AF4.png",
    description:
      "After his fateful encounter with Naruto, Gaara has left behind his murderous ways. He has become even more skilled with using sand since Naruto last saw him too.",
    descriptionBR:
      "After his fateful encounter with Naruto, Gaara has left behind his murderous ways. He has become even more skilled with using sand since Naruto last saw him too.",
    skills: [
      {
        name: "Sand Mastery",
        description:
          "Using sand to both defend and attack, Gaara gains 5 permanent destructible defense. Permanently, Gaara's skills will cost 1 less random chakra.",
        descriptionBR:
          "Using sand to both defend and attack, Gaara gains 5 permanent destructible defense. Permanently, Gaara's skills will cost 1 less random chakra.",
        energy: [],
        classes: ["Physical", "Instant", "Unique"],
        cooldown: 2,
        url: "https://i.imgur.com/wcE2zcH.png",
      },
      {
        name: "Desert Imperial Funeral",
        description:
          "Gaara deals 25 piercing damage to one enemy. For 1 turn, that enemy will be unable to reduce damage or become invulnerable and their skills will cost 1 additional random chakra. If that enemy is affected by 'Quicksand Waterfall', their skills will cost 2 additional random chakra instead.",
        descriptionBR:
          "Gaara deals 25 piercing damage to one enemy. For 1 turn, that enemy will be unable to reduce damage or become invulnerable and their skills will cost 1 additional random chakra. If that enemy is affected by 'Quicksand Waterfall', their skills will cost 2 additional random chakra instead.",
        energy: ["Blood", "Random", "Random"],
        classes: ["Physical", "Ranged", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/KX5LPwj.png",
      },
      {
        name: "Quicksand Waterfall",
        description:
          "Gaara creates massive waves of sand. For 4 turns, Gaara and his allies gain 10 destructible defense and all enemies take 10 damage*. During this time, if Gaara or an ally receives new non-affliction damage, they will gain 5 destructible defense the following turn.",
        descriptionBR:
          "Gaara creates massive waves of sand. For 4 turns, Gaara and his allies gain 10 destructible defense and all enemies take 10 damage*. During this time, if Gaara or an ally receives new non-affliction damage, they will gain 5 destructible defense the following turn.",
        energy: ["Blood", "Random", "Random"],
        classes: ["Physical", "Ranged", "Action", "Unique"],
        cooldown: 4,
        url: "https://i.imgur.com/LsFUhWE.png",
      },
      {
        name: "Shield of Shukaku",
        description:
          "Gaara uses the ultimately hard absolute defense, creating a protective shield in front of his team and granting them 15 points of destructible defense.",
        descriptionBR:
          "Gaara uses the ultimately hard absolute defense, creating a protective shield in front of his team and granting them 15 points of destructible defense.",
        energy: ["Random", "Random", "Random"],
        classes: ["Physical", "Instant", "Unique"],
        cooldown: 4,
        url: "https://i.imgur.com/QVMa2Mh.png",
      },
    ],
  },
  {
    name: "Drunken Lee",
    url: "https://i.imgur.com/QYXQyIZ.png",
    description:
      "Rock Lee has accidentally drunk too much Alcohol and has awakened his natural Drunken Fist Technique which has given him amazing speed and unpredictability.",
    descriptionBR:
      "Rock Lee has accidentally drunk too much Alcohol and has awakened his natural Drunken Fist Technique which has given him amazing speed and unpredictability.",
    skills: [
      {
        name: "Drunken Fist Style",
        description:
          "Lee gets in his Drunken Fist stance, gaining 5% damage reduction permanently. For the rest of the game, each time Lee uses 'Unpredictable Assault', he will gain an additional 5% damage reduction and will deal an additional 5 damage permanently. This skill will be replaced by 'Drunken Fist'.",
        descriptionBR:
          "Lee gets in his Drunken Fist stance, gaining 5% damage reduction permanently. For the rest of the game, each time Lee uses 'Unpredictable Assault', he will gain an additional 5% damage reduction and will deal an additional 5 damage permanently. This skill will be replaced by 'Drunken Fist'.",
        energy: [],
        classes: ["Mental", "Instant"],
        cooldown: 2,
        url: "https://i.imgur.com/74UjwFX.png",
      },
      {
        name: "Unpredictable Assault",
        description:
          "Using his drunken master abilities, Lee deals 20 damage to one enemy. For 1 turn, if that enemy uses a new harmful skill, Lee will instantly heal 10 health. This skill cannot be countered.",
        descriptionBR:
          "Using his drunken master abilities, Lee deals 20 damage to one enemy. For 1 turn, if that enemy uses a new harmful skill, Lee will instantly heal 10 health. This skill cannot be countered.",
        energy: ["Tai"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/cMMgVUq.png",
      },
      {
        name: "Drunken Counter",
        description:
          "Lee targets himself or an ally. For 1 turn, the first harmful physical skill used on that ally will be countered. If successfully, the countered enemy will have 'Unpredictable Assault' used on them.",
        descriptionBR:
          "Lee targets himself or an ally. For 1 turn, the first harmful physical skill used on that ally will be countered. If successfully, the countered enemy will have 'Unpredictable Assault' used on them.",
        energy: ["Random"],
        classes: ["Physical", "Instant", "$__", "$__2"],
        cooldown: 2,
        url: "https://i.imgur.com/56rirZI.png",
      },
      {
        name: "Drunken Leap",
        description:
          "This skill makes Drunken Lee <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Drunken Lee <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/WWza0iI.png",
      },
      {
        name: "Drunken Fist",
        description:
          "Lee charges at an enemy and hits them with a knockout blow, dealing 30 damage to that enemy, and for 1 turn, their skills will deal 100% less damage.",
        descriptionBR:
          "Lee charges at an enemy and hits them with a knockout blow, dealing 30 damage to that enemy, and for 1 turn, their skills will deal 100% less damage.",
        energy: ["Gen", "Random"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/qQsZR3t.png",
      },
    ],
  },
  {
    name: "Cursed Seal Mizuki",
    url: "https://i.imgur.com/V6AYlxZ.png",
    description:
      "Touji Mizuki is now a missing nin that has been corrupted by his own dark ambitions and the will of Orochimaru.",
    descriptionBR:
      "Touji Mizuki is now a missing nin that has been corrupted by his own dark ambitions and the will of Orochimaru.",
    skills: [
      {
        name: "Curse Seal: Tiger",
        description:
          "By drinking a curse seal potion, Mizuki transforms into a wild tiger. The following 3 turns, Mizuki will gain 35 points of destructible defense and during this time, 'Curse Seal: Tiger Punch' will be improved and 'Puppets Genjutsu' will be replaced by its alternate version.",
        descriptionBR:
          "By drinking a curse seal potion, Mizuki transforms into a wild tiger. The following 3 turns, Mizuki will gain 35 points of destructible defense and during this time, 'Curse Seal: Tiger Punch' will be improved and 'Puppets Genjutsu' will be replaced by its alternate version.",
        energy: ["Blood"],
        classes: ["Chakra", "Instant", "Unique"],
        cooldown: 3,
        url: "https://i.imgur.com/wZY8Gg2.jpg",
      },
      {
        name: "Curse Seal: Tiger Punch",
        description:
          "Mizuki fiercely punches one enemy, dealing 30 damage to them. For 2 turns, that enemy's skills will deal 10 less damage. During 'Curse Seal: Tiger', this skill is improved and will deal 45 damage instead. This skill does not stack.",
        descriptionBR:
          "Mizuki fiercely punches one enemy, dealing 30 damage to them. For 2 turns, that enemy's skills will deal 10 less damage. During 'Curse Seal: Tiger', this skill is improved and will deal 45 damage instead. This skill does not stack.",
        energy: ["Tai", "Random"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/EEkuwOc.png",
      },
      {
        name: "Puppets Genjutsu",
        description:
          "Mizuki puts an enemy under a genjutsu. For 2 turns, that enemy will be unable to reduce damage or become invulnerable, and their skills will deal 5 less damage and will cost 1 additional random chakra. During this time, if that enemy does not use a new skill, they will take 10 damage.",
        descriptionBR:
          "Mizuki puts an enemy under a genjutsu. For 2 turns, that enemy will be unable to reduce damage or become invulnerable, and their skills will deal 5 less damage and will cost 1 additional random chakra. During this time, if that enemy does not use a new skill, they will take 10 damage.",
        energy: ["Gen"],
        classes: ["Mental", "Ranged", "Instant"],
        cooldown: 2,
        url: "https://i.imgur.com/jHkf7ow.png",
      },
      {
        name: "Evil Intentions",
        description: "This skill makes Touji Mizuki invulnerable for 1 turn.",
        descriptionBR: "This skill makes Touji Mizuki invulnerable for 1 turn.",
        energy: ["Random"],
        classes: ["Mental", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/eus0S47.png",
      },
      {
        name: "Curse Seal: Tiger Bomb",
        description:
          "Mizuki charges like a bomb, dealing 45 damage to one enemy and becoming invulnerable for 1 turn.",
        descriptionBR:
          "Mizuki charges like a bomb, dealing 45 damage to one enemy and becoming invulnerable for 1 turn.",
        energy: ["Blood", "Random"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/P7chy1d.png",
      },
    ],
  },
  {
    name: "Kyuubi Naruto",
    url: "https://i.imgur.com/mQRaGm7.png",
    description:
      "Drawing upon the strength of the Kyuubi demon sealed inside him, the power of Naruto explodes, and he becomes a virtual army onto himself.",
    descriptionBR:
      "Drawing upon the strength of the Kyuubi demon sealed inside him, the power of Naruto explodes, and he becomes a virtual army onto himself.",
    skills: [
      {
        name: "Kyuubi Chakra",
        description:
          "Unknowingly using the Kyuubi Chakra, Naruto gains 50% damage reduction* and heals 15 health each turn for 3 turns. During this time, 'Kyuubi Rasengan' will be worsened.* This skill may not be used during 'Kyuubi Rage'.",
        descriptionBR:
          "Unknowingly using the Kyuubi Chakra, Naruto gains 50% damage reduction* and heals 15 health each turn for 3 turns. During this time, 'Kyuubi Rasengan' will be worsened.* This skill may not be used during 'Kyuubi Rage'.",
        energy: ["Blood", "Random"],
        classes: ["Chakra", "Action", "Instant*", "Unique"],
        cooldown: 3,
        url: "https://i.imgur.com/rnk8wVi.png",
      },
      {
        name: "Kyuubi Rage",
        description:
          "Using the vile Kyuubi chakra surrounding him, Kyuubi Naruto deals 13 damage to all enemies for 3 turns. During this time, 'Kyuubi Rasengan' will be improved*. This skill may not be used during 'Kyuubi Chakra'.",
        descriptionBR:
          "Using the vile Kyuubi chakra surrounding him, Kyuubi Naruto deals 13 damage to all enemies for 3 turns. During this time, 'Kyuubi Rasengan' will be improved*. This skill may not be used during 'Kyuubi Chakra'.",
        energy: ["Blood", "Random"],
        classes: ["Chakra", "Melee", "Action", "Instant*", "Unique"],
        cooldown: 3,
        url: "https://i.imgur.com/WexhqIW.png",
      },
      {
        name: "Kyuubi Rasengan",
        description:
          "Kyuubi Naruto deals 40 damage to one enemy and stuns their physical and ranged skills. Kyuubi Naruto takes 10 affliction damage*. During 'Kyuubi Rage', this skill will deal 50 damage. During 'Kyuubi Chakra', this skill will deal 30 damage.",
        descriptionBR:
          "Kyuubi Naruto deals 40 damage to one enemy and stuns their physical and ranged skills. Kyuubi Naruto takes 10 affliction damage*. During 'Kyuubi Rage', this skill will deal 50 damage. During 'Kyuubi Chakra', this skill will deal 30 damage.",
        energy: ["Nin", "Random"],
        classes: ["Chakra", "Melee", "Instant", "Unique", "Affliction*"],
        cooldown: 1,
        url: "https://i.imgur.com/2rPw0jH.png",
      },
      {
        name: "Chakra Howl",
        description: "This skill makes Kyuubi Naruto invulnerable for 1 turn.",
        descriptionBR:
          "This skill makes Kyuubi Naruto invulnerable for 1 turn.",
        energy: ["Random"],
        classes: ["Chakra", "Instant", "Unique"],
        cooldown: 4,
        url: "https://i.imgur.com/tFrnFax.png",
      },
    ],
  },
  {
    name: "Cursed Seal Sasuke",
    url: "https://i.imgur.com/r4RPyUj.png",
    description:
      "When Sasuke releases the full power of his cursed seal his body and chakra become a twisted vision of his inner self and his strength is amplified greatly.",
    descriptionBR:
      "When Sasuke releases the full power of his cursed seal his body and chakra become a twisted vision of his inner self and his strength is amplified greatly.",
    skills: [
      {
        name: "Corrupt Chidori",
        description:
          "Using a cursed seal chakra corrupted Chidori Sasuke does 45 piercing damage to one enemy and for 2 turns non-affliction damage dealt by that enemy is reduced by 50%.",
        descriptionBR:
          "Using a cursed seal chakra corrupted Chidori Sasuke does 45 piercing damage to one enemy and for 2 turns non-affliction damage dealt by that enemy is reduced by 50%.",
        energy: ["Nin", "Nin"],
        classes: ["Chakra", "Instant", "Melee", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/QqzF4dD.png",
      },
      {
        name: "Katon: Goukakyuu no Jutsu",
        description:
          "Sasuke launches a giant fireball, dealing 20 affliction damage to one enemy. For 1 turn, If that enemy uses a skill they will take 10 affliction damage. During 'Cursed Seal', this skill will be improved and will also deal an additional 10 damage.",
        descriptionBR:
          "Sasuke launches a giant fireball, dealing 20 affliction damage to one enemy. For 1 turn, If that enemy uses a skill they will take 10 affliction damage. During 'Cursed Seal', this skill will be improved and will also deal an additional 10 damage.",
        energy: ["Nin"],
        classes: ["Chakra", "Instant", "Ranged", "Affliction"],
        cooldown: 0,
        url: "https://i.imgur.com/YZZPJg7.png",
      },
      {
        name: "Cursed Seal: Claw Wings",
        description:
          "Sasuke taps into the Cursed Seal, growing claw wings from his back. Sasuke takes 15 affliction damage* and becomes invulnerable to physical and chakra skills for 1 turn. The following turn 'Corrupt Chidori' will cost 2 random chakra and 'Katon: Goukakyuu no Jutsu' will cost 1 random chakra.",
        descriptionBR:
          "Sasuke taps into the Cursed Seal, growing claw wings from his back. Sasuke takes 15 affliction damage* and becomes invulnerable to physical and chakra skills for 1 turn. The following turn 'Corrupt Chidori' will cost 2 random chakra and 'Katon: Goukakyuu no Jutsu' will cost 1 random chakra.",
        energy: ["Blood"],
        classes: ["Chakra", "Instant", "Unique", "Affliction*"],
        cooldown: 1,
        url: "https://i.imgur.com/6xuLldq.png",
      },
      {
        name: "Sharingan Evasion",
        description:
          "This skill makes Cursed Seal Sasuke <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Cursed Seal Sasuke <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Mental", "Instant", "Unique"],
        cooldown: 4,
        url: "https://i.imgur.com/gcRgFEG.png",
      },
    ],
  },
  {
    name: "Shukaku Gaara",
    url: "https://i.imgur.com/bJHNRJ2.png",
    description:
      "Having lived inside him the whole time, Shukaku is one of the nine tailed beasts and is very eager to escape and cause chaos to the world. While Shukaku slowly takes over Gaara, his own power increases, allowing him to demolish his foes with powerful sand attacks.",
    descriptionBR:
      "Having lived inside him the whole time, Shukaku is one of the nine tailed beasts and is very eager to escape and cause chaos to the world. While Shukaku slowly takes over Gaara, his own power increases, allowing him to demolish his foes with powerful sand attacks.",
    skills: [
      {
        name: "Sand Claw",
        description:
          "Gaara attacks with a claw of concentrated sand, dealing 30 damage to one enemy and gaining 10 destructible defense.",
        descriptionBR:
          "Gaara attacks with a claw of concentrated sand, dealing 30 damage to one enemy and gaining 10 destructible defense.",
        energy: ["Blood", "Random"],
        classes: ["Physical", "Melee", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/A4pnLul.jpg",
      },
      {
        name: "Constricting Sand Prison",
        description:
          "Gaara traps an enemy with sand, dealing 10 damage to them each turn. During this time, the first skill that enemy uses will be countered and this skill will end.",
        descriptionBR:
          "Gaara traps an enemy with sand, dealing 10 damage to them each turn. During this time, the first skill that enemy uses will be countered and this skill will end.",
        energy: ["Blood"],
        classes: ["Physical", "Melee", "Instant", "Unique"],
        cooldown: 2,
        url: "https://i.imgur.com/p2DRexz.jpg",
      },
      {
        name: "Sand Transformation",
        description:
          "Each turn, for 5 turns, Gaara will gain 10 destructible defense. When this skill ends, Gaara will transform into the Shukaku for 3 turns, reducing the cost of 'Sand Claw' by 1 random and replacing 'Constricting Sand Prison' and 'Sand Transformation'.",
        descriptionBR:
          "Each turn, for 5 turns, Gaara will gain 10 destructible defense. When this skill ends, Gaara will transform into the Shukaku for 3 turns, reducing the cost of 'Sand Claw' by 1 random and replacing 'Constricting Sand Prison' and 'Sand Transformation'.",
        energy: ["Random", "Random"],
        classes: ["Mental", "Unique", "Instant", "Unique"],
        cooldown: 6,
        url: "https://i.imgur.com/HfgfCr9.jpg",
      },
      {
        name: "Thick Sand Coat",
        description:
          "This skill makes Shukaku Gaara <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Shukaku Gaara <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant", "Unique"],
        cooldown: 4,
        url: "https://i.imgur.com/GKm7Zvl.jpg",
      },
      {
        name: "Drilling Air Bullet",
        description:
          "Sending forth a powerful ball of wind, Gaara deals 60 damage to one enemy.",
        descriptionBR:
          "Sending forth a powerful ball of wind, Gaara deals 60 damage to one enemy.",
        energy: ["Blood", "Blood"],
        classes: ["Physical", "Ranged", "Instant", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/ZSMchzk.png",
      },
      {
        name: "True Awakening",
        description:
          "Gaara truly lets Shukaku awaken from inside him, letting it take over. The Following turn, 'Sand Claw' and 'Drilling Air Bullet' will deal double damage.",
        descriptionBR:
          "Gaara truly lets Shukaku awaken from inside him, letting it take over. The Following turn, 'Sand Claw' and 'Drilling Air Bullet' will deal double damage.",
        energy: ["Blood"],
        classes: ["Mental", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/kAWDB8g.jpg",
      },
    ],
  },
  {
    name: "Hoshigaki Kisame",
    url: "https://i.imgur.com/M8xGMby.png",
    description:
      "Formerly one of the Seven Swordsmen of the Mist Village, Kisame is an S-Rank missing nin. He is Itachi's partner and a member of a mysterious organization. Designed with Redxmaverick.",
    descriptionBR:
      "Formerly one of the Seven Swordsmen of the Mist Village, Kisame is an S-Rank missing nin. He is Itachi's partner and a member of a mysterious organization. Designed with Redxmaverick.",
    skills: [
      {
        name: "Samehada Slash",
        description:
          "Using his sword, Samehada, Kisame slashes one enemy who takes 20 damage and stunning their physical or chakra skills for 1 turn.",
        descriptionBR:
          "Using his sword, Samehada, Kisame slashes one enemy who takes 20 damage and stunning their physical or chakra skills for 1 turn.",
        energy: ["Tai"],
        classes: ["Physical", "Instant", "Melee"],
        cooldown: 1,
        url: "https://i.imgur.com/kyyyNkG.png",
      },
      {
        name: "Samehada Shred",
        description:
          "Kisame unwraps Samehada and shreds one enemy. For 2 turns that enemy takes 15 damage and one bloodline or genjutsu chakra is stolen from their pool.",
        descriptionBR:
          "Kisame unwraps Samehada and shreds one enemy. For 2 turns that enemy takes 15 damage and one bloodline or genjutsu chakra is stolen from their pool.",
        energy: ["Tai", "Nin"],
        classes: ["Physical", "Action", "Melee", "Unique"],
        cooldown: 2,
        url: "https://i.imgur.com/7ZVF8bP.png",
      },
      {
        name: "Water Shark Projectile",
        description:
          "Using a stream of compressed water Kisame does 20 damage to one enemy and stuns their chakra or ranged skills for 1 turn.",
        descriptionBR:
          "Using a stream of compressed water Kisame does 20 damage to one enemy and stuns their chakra or ranged skills for 1 turn.",
        energy: ["Nin"],
        classes: ["Physical", "Instant", "Ranged"],
        cooldown: 1,
        url: "https://i.imgur.com/5Y5yd7c.png",
      },
      {
        name: "Kisame Replacement Technique",
        description:
          "This skill makes Hoshigaki Kisame <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Hoshigaki Kisame <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Chakra", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/hGOwcqv.png",
      },
    ],
  },
  {
    name: "Uchiha Itachi",
    url: "https://i.imgur.com/n2JnI5c.png",
    description:
      "The only other surviving Uchiha, Itachi is a master of doujutsu and is an S-Rank missing nin. He is Kisame's partner and a member of a mysterious organization. Designed with Redxmaverick.",
    descriptionBR:
      "The only other surviving Uchiha, Itachi is a master of doujutsu and is an S-Rank missing nin. He is Kisame's partner and a member of a mysterious organization. Designed with Redxmaverick.",
    skills: [
      {
        name: "Mangekyou Sharingan",
        description:
          "Itachi activates his Mangekyou Sharingan. For 2 turns, Itachi will become invulnerable to physical and chakra damage skills.",
        descriptionBR:
          "Itachi activates his Mangekyou Sharingan. For 2 turns, Itachi will become invulnerable to physical and chakra damage skills.",
        energy: ["Blood"],
        classes: ["Mental", "Instant", "Unique"],
        cooldown: 4,
        url: "https://i.imgur.com/BZ3ZwgH.png",
      },
      {
        name: "Tsukuyomi",
        description:
          "Itachi mentally tortures one enemy for 3 days in a matter of seconds stunning their harmful skills for 3 turns.",
        descriptionBR:
          "Itachi mentally tortures one enemy for 3 days in a matter of seconds stunning their harmful skills for 3 turns.",
        energy: ["Gen", "Gen"],
        classes: ["Mental", "Instant", "Ranged", "Unique"],
        cooldown: 4,
        url: "https://i.imgur.com/jcw6Uxg.png",
      },
      {
        name: "Amaterasu",
        description:
          "Itachi deals 14 affliction damage to one enemy every turn permanently. This skill will end if Itachi dies or if the skill is used on a different enemy. This skill does not stack.",
        descriptionBR:
          "Itachi deals 14 affliction damage to one enemy every turn permanently. This skill will end if Itachi dies or if the skill is used on a different enemy. This skill does not stack.",
        energy: ["Nin"],
        classes: ["Chakra", "Instant", "Ranged", "Unique", "Affliction"],
        cooldown: 0,
        url: "https://i.imgur.com/oghlSYj.png",
      },
      {
        name: "Sharingan Insight",
        description:
          "This skill makes Uchiha Itachi <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Uchiha Itachi <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Mental", "Instant", "Unique"],
        cooldown: 4,
        url: "https://i.imgur.com/rCdqw3U.png",
      },
    ],
  },
  {
    name: "Masked Man",
    url: "https://i.imgur.com/zp0TERK.png",
    description:
      "Not much is known about the Masked Man, other than his uncontrollable hatred for the Leaf Village. After extracting the Kyuubi from Kushina, Masked Man is able to summon the Nine Tails Beast into the battlefield, while also being able to use his other unknown techniques.",
    descriptionBR:
      "Not much is known about the Masked Man, other than his uncontrollable hatred for the Leaf Village. After extracting the Kyuubi from Kushina, Masked Man is able to summon the Nine Tails Beast into the battlefield, while also being able to use his other unknown techniques.",
    skills: [
      {
        name: "Strange Jutsu",
        description:
          "Masked Man isolates himself and one enemy from the battlefield, *making them both invulnerable to every characters except each other for 3 turns; This effect cannot be ignored. During this time, that enemy will take 15 piercing damage each turn.",
        descriptionBR:
          "Masked Man isolates himself and one enemy from the battlefield, *making them both invulnerable to every characters except each other for 3 turns; This effect cannot be ignored. During this time, that enemy will take 15 piercing damage each turn.",
        energy: ["Gen"],
        classes: ["Chakra", "Melee", "Action", "Unique", "*Instant"],
        cooldown: 3,
        url: "https://i.imgur.com/pTLohi4.png",
      },
      {
        name: "Chain Assault",
        description:
          "Producing chains from his wrists, Masked Man gains 10 destructible defense for 1 turn and deals 25 damage to one enemy, reducing their non-affliction damage by 10 for 1 turn. This skill deals 35 damage and reduces 15  points of damage to the enemy affected by 'Strange Jutsu'.",
        descriptionBR:
          "Producing chains from his wrists, Masked Man gains 10 destructible defense for 1 turn and deals 25 damage to one enemy, reducing their non-affliction damage by 10 for 1 turn. This skill deals 35 damage and reduces 15  points of damage to the enemy affected by 'Strange Jutsu'.",
        energy: ["Tai", "Random"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/5N1uOWp.png",
      },
      {
        name: "Summoning: Kyuubi",
        description:
          "Masked Man may summons Kyuubi if he has 50 health or less, granting himself 55 points of destructible defense permanent. While he has this destructible defense, all of his skills will be replaced by 'Summoned Kyuubi: Bijuudama'.",
        descriptionBR:
          "Masked Man may summons Kyuubi if he has 50 health or less, granting himself 55 points of destructible defense permanent. While he has this destructible defense, all of his skills will be replaced by 'Summoned Kyuubi: Bijuudama'.",
        energy: ["Random", "Random", "Random"],
        classes: ["Chakra", "Instant", "Unique"],
        cooldown: 9,
        url: "https://i.imgur.com/lfO8e0S.png",
      },
      {
        name: "Masked Man Block",
        description:
          "This skill makes Masked Man <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Masked Man <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/BLdXQ3T.png",
      },
      {
        name: "Summoned Kyuubi: Bijuudama",
        description:
          "Kyuubi gathers a massive sphere of chakra and fires it at all enemies dealing 35 piercing damage to them.",
        descriptionBR:
          "Kyuubi gathers a massive sphere of chakra and fires it at all enemies dealing 35 piercing damage to them.",
        energy: ["Blood", "Random", "Random"],
        classes: ["Chakra", "Ranged", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/G5lZyNP.png",
      },
    ],
  },
  {
    name: "Uzumaki Naruto (S)",
    url: "https://i.imgur.com/xfyNnHY.png",
    description:
      "After nearly three years of secluded training with Jiraiya, Naruto(s) has returned to Konoha with a greatly improved arsenal of ninja skills.",
    descriptionBR:
      "After nearly three years of secluded training with Jiraiya, Naruto(s) has returned to Konoha with a greatly improved arsenal of ninja skills.",
    skills: [
      {
        name: "Oodama Rasengan",
        description:
          "Using shadow clones to greatly enhance the size and strength of his rasengan, Naruto deals 40 piercing damage to one enemy ignoring invulnerability. During 'Kyuubi Boost', this skill is improved and will also stun their physical and chakra skills for 1 turn.",
        descriptionBR:
          "Using shadow clones to greatly enhance the size and strength of his rasengan, Naruto deals 40 piercing damage to one enemy ignoring invulnerability. During 'Kyuubi Boost', this skill is improved and will also stun their physical and chakra skills for 1 turn.",
        energy: ["Tai", "Nin"],
        classes: ["Chakra", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/toWCXT5.png",
      },
      {
        name: "Mass Shadow Clones",
        description:
          "The following turn, Naruto will deal 10 damage to all enemies. During this time, Naruto will ignore all harmful effects. This skill is invisible and ends when Naruto dies.",
        descriptionBR:
          "The following turn, Naruto will deal 10 damage to all enemies. During this time, Naruto will ignore all harmful effects. This skill is invisible and ends when Naruto dies.",
        energy: ["Random"],
        classes: ["Physical", "Action", "Melee", "enemyBypass"],
        cooldown: 2,
        url: "https://i.imgur.com/TAQqhku.png",
      },
      {
        name: "Kyuubi Boost",
        description:
          "By calling upon the vast store of chakra held by Kyuubi, Naruto takes 15 affliction damage and gains 1 taijutsu and ninjutsu chakra. For 1 turn, Naruto gains 50% damage reduction and 'Oodama Rasengan' will stun one enemy's physical and chakra skills for 1 turn.",
        descriptionBR:
          "By calling upon the vast store of chakra held by Kyuubi, Naruto takes 15 affliction damage and gains 1 taijutsu and ninjutsu chakra. For 1 turn, Naruto gains 50% damage reduction and 'Oodama Rasengan' will stun one enemy's physical and chakra skills for 1 turn.",
        energy: ["Random", "Random"],
        classes: ["Chakra", "Instant", "Unique", "Affliction"],
        cooldown: 3,
        url: "https://i.imgur.com/Mv0n65V.jpg",
      },
      {
        name: "Shadow Clone Save",
        description:
          "This skill makes Uzumaki Naruto (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Uzumaki Naruto (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Chakra", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/8lPJUXh.png",
      },
    ],
  },
  {
    name: "Haruno Sakura (S)",
    url: "https://i.imgur.com/5iC4YJR.png",
    description:
      "With her extensive training under Tsunade, the Godaime, for the last two and a half years, Sakura(s)'s healing and combat abilities have both greatly improved.",
    descriptionBR:
      "With her extensive training under Tsunade, the Godaime, for the last two and a half years, Sakura(s)'s healing and combat abilities have both greatly improved.",
    skills: [
      {
        name: "Chakra Enhanced Punch",
        description:
          "Enhancing her attack with finely controlled chakra, Sakura breaks one enemy's destructible defense and deals 25 piercing damage to them. This skill will be replaced by 'Blossom's Fury'.",
        descriptionBR:
          "Enhancing her attack with finely controlled chakra, Sakura breaks one enemy's destructible defense and deals 25 piercing damage to them. This skill will be replaced by 'Blossom's Fury'.",
        energy: ["Tai"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/hlJj8Px.png",
      },
      {
        name: "Trained Healing",
        description:
          "Using her trained healing skills, Sakura heals an ally for 20 health for 2 turns. Each turn, that ally will have all affliction skills removed from them.",
        descriptionBR:
          "Using her trained healing skills, Sakura heals an ally for 20 health for 2 turns. Each turn, that ally will have all affliction skills removed from them.",
        energy: ["Random", "Random"],
        classes: ["Chakra", "Control"],
        cooldown: 1,
        url: "https://i.imgur.com/Oi5rkOB.png",
      },
      {
        name: "Self Heal",
        description:
          "Sakura targets herself permanently, healing 20 health instantly the first time she is damaged by a skill. This skill is invisible and ends when triggered.",
        descriptionBR:
          "Sakura targets herself permanently, healing 20 health instantly the first time she is damaged by a skill. This skill is invisible and ends when triggered.",
        energy: ["Nin"],
        classes: ["Chakra", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/aJqXOqH.png",
      },
      {
        name: "Insightful Dodge",
        description:
          "This skill makes Haruno Sakura (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Haruno Sakura (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/tvBST5g.png",
      },
      {
        name: "Blossom's Fury",
        description:
          "Sakura releases a ground breaking punch, destroying one enemy's destructible defense and dealing 35 piercing damage to them. This skill cannot be reflected and returns to 'Chakra Enhanced Punch' once it's used.",
        descriptionBR:
          "Sakura releases a ground breaking punch, destroying one enemy's destructible defense and dealing 35 piercing damage to them. This skill cannot be reflected and returns to 'Chakra Enhanced Punch' once it's used.",
        energy: ["Tai"],
        classes: ["Physical", "Melee", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/ALv0zL8.png",
      },
    ],
  },
  {
    name: "Sai (S)",
    url: "https://i.imgur.com/pox7fg0.png",
    description:
      "A current member of the elite ANBU Root, Sai(s) is an unparalleled artist who uses chakra to bring his images to life.",
    descriptionBR:
      "A current member of the elite ANBU Root, Sai(s) is an unparalleled artist who uses chakra to bring his images to life.",
    skills: [
      {
        name: "Great Beast Painting: Lions",
        description:
          "Sai creates a number of ink lions to attack one enemy dealing 30 damage to them, and for 1 turn, Sai will gain 15 points of destructible defense.",
        descriptionBR:
          "Sai creates a number of ink lions to attack one enemy dealing 30 damage to them, and for 1 turn, Sai will gain 15 points of destructible defense.",
        energy: ["Gen", "Random"],
        classes: ["Physical", "Instant", "Ranged"],
        cooldown: 0,
        url: "https://i.imgur.com/d1ic0UR.png",
      },
      {
        name: "Great Beast Painting: Snake",
        description:
          "Sai creates a snake made of ink to trap one enemy. stunning their physical and chakra skills for 1 turn. During this time, that enemy will be unable to reduce damage or become invulnerable. This skill ignores invulnerability.",
        descriptionBR:
          "Sai creates a snake made of ink to trap one enemy. stunning their physical and chakra skills for 1 turn. During this time, that enemy will be unable to reduce damage or become invulnerable. This skill ignores invulnerability.",
        energy: ["Gen"],
        classes: ["Physical", "Instant", "Ranged"],
        cooldown: 0,
        url: "https://i.imgur.com/fGlKQw8.png",
      },
      {
        name: "Adaptive Painting",
        description:
          "For 3 turns, any ally that is stunned will become invulnerable for 1 turn; Any ally that has chakra removed/stolen will gain 1 random chakra; Any enemy that damages Sai or his allies will increase Sai's damage by 10 for 1 turn. The following 3 turns, 'Great Beast Painting: Snake' will be replaced.",
        descriptionBR:
          "For 3 turns, any ally that is stunned will become invulnerable for 1 turn; Any ally that has chakra removed/stolen will gain 1 random chakra; Any enemy that damages Sai or his allies will increase Sai's damage by 10 for 1 turn. The following 3 turns, 'Great Beast Painting: Snake' will be replaced.",
        energy: ["Random", "Random"],
        classes: ["Mental", "Instant"],
        cooldown: 3,
        url: "https://i.imgur.com/nB8cFU3.png",
      },
      {
        name: "Ink Clone",
        description:
          "This skill makes Sai (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Sai (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Chakra", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/AoZJ9Vr.png",
      },
      {
        name: "Great Beast Painting: Bird",
        description:
          "Sai creates a giant ink bird that crashes to one enemy, dealing 25 damage to them and stunning their physical and chakra skills for 1 turn.",
        descriptionBR:
          "Sai creates a giant ink bird that crashes to one enemy, dealing 25 damage to them and stunning their physical and chakra skills for 1 turn.",
        energy: ["Gen"],
        classes: ["Physical", "Instant", "Ranged"],
        cooldown: 0,
        url: "https://i.imgur.com/QKM5SKP.png",
      },
    ],
  },
  {
    name: "Hatake Kakashi (S)",
    url: "https://i.imgur.com/MaH15H8.png",
    description:
      "Kakashi(s) has used the last couple years to improve upon his sharingan, giving him access to a new deadly but costly ability.",
    descriptionBR:
      "Kakashi(s) has used the last couple years to improve upon his sharingan, giving him access to a new deadly but costly ability.",
    skills: [
      {
        name: "Jutsu Imitation",
        description:
          "Kakashi imitates one enemy's jutsu, copying a random offensive skill from them. The copied skill will have its cost changed to random chakras and will be replacing this skill for 3 turns. This skill cannot copy skills that are unique or require a preparation.",
        descriptionBR:
          "Kakashi imitates one enemy's jutsu, copying a random offensive skill from them. The copied skill will have its cost changed to random chakras and will be replacing this skill for 3 turns. This skill cannot copy skills that are unique or require a preparation.",
        energy: [],
        classes: ["Mental", "Instant", "Ranged", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/PkxKF4C.png",
      },
      {
        name: "Kakashi Mangekyou",
        description:
          "By using his newly developed Mangekyou Sharingan, Kakashi warps space and time dealing 45 piercing damage to one enemy and increasing their cooldowns by 1 turn for 2 turns. This skill cannot be countered, reflected and ignores invulnerability.",
        descriptionBR:
          "By using his newly developed Mangekyou Sharingan, Kakashi warps space and time dealing 45 piercing damage to one enemy and increasing their cooldowns by 1 turn for 2 turns. This skill cannot be countered, reflected and ignores invulnerability.",
        energy: ["Blood", "Blood"],
        classes: ["Chakra", "Instant", "Ranged", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/I91aeZc.png",
      },
      {
        name: "Team Tactics",
        description:
          "For 1 turn, Kakashi and all his allies will ignore enemy stun effects. The following turn all their skills will cost 1 less random chakra.",
        descriptionBR:
          "For 1 turn, Kakashi and all his allies will ignore enemy stun effects. The following turn all their skills will cost 1 less random chakra.",
        energy: ["Random"],
        classes: ["Mental", "Instant"],
        cooldown: 2,
        url: "https://i.imgur.com/yPfyM9R.png",
      },
      {
        name: "Bunshin Stand-in",
        description:
          "This skill makes Hatake Kakashi (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Hatake Kakashi (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Chakra", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/ToRKfvb.png",
      },
    ],
  },
  {
    name: "Yamato (S)",
    url: "https://i.imgur.com/9H3giit.png",
    description:
      "Yamato(s) is a member of ANBU whose real name is unknown. Given the code name Yamato(s) by Tsunade for this mission, he is tasked to lead Team 7 while Kakashi recovers.",
    descriptionBR:
      "Yamato(s) is a member of ANBU whose real name is unknown. Given the code name Yamato(s) by Tsunade for this mission, he is tasked to lead Team 7 while Kakashi recovers.",
    skills: [
      {
        name: "Sanctuary Enlightenment Enclosing Palm",
        description:
          "Yamato uses an ancient technique that seals one enemy's power, dealing 30 piercing damage to them. For 1 turn, that enemy will ignore all effects that improve their skills.",
        descriptionBR:
          "Yamato uses an ancient technique that seals one enemy's power, dealing 30 piercing damage to them. For 1 turn, that enemy will ignore all effects that improve their skills.",
        energy: ["Blood", "Random"],
        classes: ["Chakra", "Instant", "Melee", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/DXZh3w1.png",
      },
      {
        name: "Four Column Prison",
        description:
          "Yamato creates an impenetrable room of wood around an enemy, stunning their physical and chakra skills for 2 turns. During this time, that enemy will become invulnerable to friendly skills.",
        descriptionBR:
          "Yamato creates an impenetrable room of wood around an enemy, stunning their physical and chakra skills for 2 turns. During this time, that enemy will become invulnerable to friendly skills.",
        energy: ["Blood", "Nin"],
        classes: ["Chakra", "Ranged", "Instant", "Unique"],
        cooldown: 4,
        url: "https://i.imgur.com/B8QtS9K.png",
      },
      {
        name: "Wood Clone",
        description:
          "Yamato protects one ally or himself with a clone of wood for 1 turn, countering the first physical or chakra skill used against them. The countered enemy will take 20 damage* and the protected ally will gain 20 destructible defense. This skill is invisible.",
        descriptionBR:
          "Yamato protects one ally or himself with a clone of wood for 1 turn, countering the first physical or chakra skill used against them. The countered enemy will take 20 damage* and the protected ally will gain 20 destructible defense. This skill is invisible.",
        energy: ["Blood"],
        classes: ["Physical", "Instant", "Melee*"],
        cooldown: 2,
        url: "https://i.imgur.com/Cy9zjvr.png",
      },
      {
        name: "Wood Locking Wall",
        description:
          "This skill makes Yamato (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Yamato (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/m9SiZkn.png",
      },
    ],
  },
  {
    name: "Rock Lee (S)",
    url: "https://i.imgur.com/DTqDmu4.png",
    description:
      "Now a chuunin, Lee has trained endlessly with Gai, and not only learned new abilities, but has learned what it truly means to fight. In battle, Lee now fights for his friends and allies, growing stronger as they fall around him.",
    descriptionBR:
      "Now a chuunin, Lee has trained endlessly with Gai, and not only learned new abilities, but has learned what it truly means to fight. In battle, Lee now fights for his friends and allies, growing stronger as they fall around him.",
    skills: [
      {
        name: "Leaf Rising Wind",
        description:
          "Lee tries to hinder an enemy, dealing 15 damage to them and lowering all their damage by 10 for 2 turns. This skill will deal an additional 10 damage, and the damage reduction effect will last 1 additional turn for each ally that is dead.",
        descriptionBR:
          "Lee tries to hinder an enemy, dealing 15 damage to them and lowering all their damage by 10 for 2 turns. This skill will deal an additional 10 damage, and the damage reduction effect will last 1 additional turn for each ally that is dead.",
        energy: ["Tai"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/DSfZAbq.png",
      },
      {
        name: "Leaf Great Whirlwind",
        description:
          "Lee gains momentum, dealing 20 damage to one enemy and gaining 10 points of damage reduction for 1 turn. The following turn this skill will deal an additional 10 damage and grant 10 more damage reduction. This skill will deal an additional 10 damage for every ally that has been killed.",
        descriptionBR:
          "Lee gains momentum, dealing 20 damage to one enemy and gaining 10 points of damage reduction for 1 turn. The following turn this skill will deal an additional 10 damage and grant 10 more damage reduction. This skill will deal an additional 10 damage for every ally that has been killed.",
        energy: ["Tai"],
        classes: ["Physical", "Melee", "Instant", "allyBypass", "__$"],
        cooldown: 0,
        url: "https://i.imgur.com/66wenY8.png",
      },
      {
        name: "Maximum Force Blast",
        description:
          "Mixing the power of his gates, his allies and everything Lee fights for, he unleashes a powerful attack at one enemy dealing 20 damage to them. This skill will deal an additional 20 damage for each ally that is dead, and an additional 20 damage for each 30 health that Lee has lost.",
        descriptionBR:
          "Mixing the power of his gates, his allies and everything Lee fights for, he unleashes a powerful attack at one enemy dealing 20 damage to them. This skill will deal an additional 20 damage for each ally that is dead, and an additional 20 damage for each 30 health that Lee has lost.",
        energy: ["Random", "Random"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 2,
        url: "https://i.imgur.com/1T89JYR.png",
      },
      {
        name: "Jumping Dodge",
        description:
          "This skill makes Rock Lee (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Rock Lee (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/Z8QItbi.jpeg",
      },
    ],
  },
  {
    name: "Hyuuga Neji (S)",
    url: "https://i.imgur.com/imvUIBX.png",
    description:
      "The only one of the original genins to make it to the level of jounin, Neji(s) has greatly increased his ability with both byakugan and gentle fist taijutsu.",
    descriptionBR:
      "The only one of the original genins to make it to the level of jounin, Neji(s) has greatly increased his ability with both byakugan and gentle fist taijutsu.",
    skills: [
      {
        name: "Eight Trigams Sky Palm",
        description:
          "Neji deals 20 damage to one enemy. For 1 turn, if that enemy uses any new skill, they will lose 1 non-taijutsu chakra.",
        descriptionBR:
          "Neji deals 20 damage to one enemy. For 1 turn, if that enemy uses any new skill, they will lose 1 non-taijutsu chakra.",
        energy: ["Tai"],
        classes: ["Physical", "Ranged", "Unique", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/Vz9AP1d.png",
      },
      {
        name: "Mountain Crusher Palm",
        description:
          "Neji destroys all enemy destructible defense and deals them 35 damage to them, and then removes them 1 taijutsu or genjutsu chakra. For 2 turns, 'Eight Trigams Sky Palm' will deal 10 additional damage to that enemy.",
        descriptionBR:
          "Neji destroys all enemy destructible defense and deals them 35 damage to them, and then removes them 1 taijutsu or genjutsu chakra. For 2 turns, 'Eight Trigams Sky Palm' will deal 10 additional damage to that enemy.",
        energy: ["Tai", "Blood"],
        classes: ["Chakra", "Instant", "Melee", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/RjDKqBY.png",
      },
      {
        name: "Reactive Rotation",
        description:
          "Neji target himself or one ally for 1 turn. The first harmful non-mental skill used on the protected character will be countered, and for 3 turns will take 15 additional damage from Neji's skills. This skill is invisible.",
        descriptionBR:
          "Neji target himself or one ally for 1 turn. The first harmful non-mental skill used on the protected character will be countered, and for 3 turns will take 15 additional damage from Neji's skills. This skill is invisible.",
        energy: ["Blood"],
        classes: ["Chakra", "Unique", "Instant"],
        cooldown: 2,
        url: "https://i.imgur.com/OY8Aq78.png",
      },
      {
        name: "Neji Insight",
        description:
          "This skill makes Hyuuga Neji (S) character invulnerable for 1 turn.",
        descriptionBR:
          "This skill makes Hyuuga Neji (S) character invulnerable for 1 turn.",
        energy: ["Random"],
        classes: ["Chakra", "Instant", "Unique"],
        cooldown: 4,
        url: "https://i.imgur.com/QcbCtD3.png",
      },
    ],
  },
  {
    name: "Tenten (S)",
    url: "https://i.imgur.com/lFtTPeQ.png",
    description:
      "After nearly three years Tenten(s) is now a chuunin. In this time she has improved the diversity and strength of her ranged arsenal.",
    descriptionBR:
      "After nearly three years Tenten(s) is now a chuunin. In this time she has improved the diversity and strength of her ranged arsenal.",
    skills: [
      {
        name: "Weapon Upgrade",
        description:
          "By upgrading her weapons, Tenten gains 10 points of destructible defense for 1 turn. The following turn, 'Kunai Grenade' will deal an additional 5 damage, and 'Heavenly Chain Disaster' will cost 1 less random chakra. This skill will be replaced by 'Explosive Kunais Wave' for 1 turn.",
        descriptionBR:
          "By upgrading her weapons, Tenten gains 10 points of destructible defense for 1 turn. The following turn, 'Kunai Grenade' will deal an additional 5 damage, and 'Heavenly Chain Disaster' will cost 1 less random chakra. This skill will be replaced by 'Explosive Kunais Wave' for 1 turn.",
        energy: [],
        classes: ["Physical", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/4gqbQHh.png",
      },
      {
        name: "Kunai Grenade",
        description:
          "Tenten throws an explosive filled with kunais at the enemy team, dealing 15 damage to one enemy and 10 to all other enemies. Any enemy that falls to 35 health or below will also receive 5 affliction damage*.",
        descriptionBR:
          "Tenten throws an explosive filled with kunais at the enemy team, dealing 15 damage to one enemy and 10 to all other enemies. Any enemy that falls to 35 health or below will also receive 5 affliction damage*.",
        energy: ["Random"],
        classes: ["Physical", "Instant", "Ranged", "Affliction*"],
        cooldown: 1,
        url: "https://i.imgur.com/g0ZItPe.png",
      },
      {
        name: "Heavenly Chain Disaster",
        description:
          "Tenten rains blindingly fast projectiles upon the battlefield, dealing 30 piercing damage to all enemies.",
        descriptionBR:
          "Tenten rains blindingly fast projectiles upon the battlefield, dealing 30 piercing damage to all enemies.",
        energy: ["Tai", "Random", "Random"],
        classes: ["Physical", "Instant", "Ranged", "Unique"],
        cooldown: 2,
        url: "https://i.imgur.com/ooQdu9y.png",
      },
      {
        name: "Leaping Dodge",
        description:
          "This skill makes Tenten (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Tenten (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/9Q9R8e4.png",
      },
      {
        name: "Explosive Kunais Wave",
        description:
          "Tenten throws a wave of kunais with explosive tag on the enemy team, dealing 10 affliction damage to them. The following 3 turns, these enemies will be dealt 5 affliction damage each turn.",
        descriptionBR:
          "Tenten throws a wave of kunais with explosive tag on the enemy team, dealing 10 affliction damage to them. The following 3 turns, these enemies will be dealt 5 affliction damage each turn.",
        energy: ["Nin"],
        classes: ["Physical", "Ranged", "Instant", "Affliction"],
        cooldown: 0,
        url: "https://i.imgur.com/OPV7YPl.png",
      },
    ],
  },
  {
    name: "Maito Gai (S)",
    url: "https://imgur.com/CInt8Dd.jpg",
    description:
      "Team 9's Professor is back! Gai improved his techniques and strength much more. And now he will use all possible techniques to defeat Akatsuki. Whether releasing Hachimon Tonkou or using extreme taijutsu techniques.",
    descriptionBR:
      "Team 9's Professor is back! Gai improved his techniques and strength much more. And now he will use all possible techniques to defeat Akatsuki. Whether releasing Hachimon Tonkou or using extreme taijutsu techniques.",
    skills: [
      {
        name: "Gai Nunchaku Style",
        description:
          "Gai deals 10 damage to one enemy for 3 turns. During this time, whenever an enemy uses a new melee skill on him, they will take 15 damage*. During 'Gate Release' this skill deal 10 additional damage.",
        descriptionBR:
          "Gai deals 10 damage to one enemy for 3 turns. During this time, whenever an enemy uses a new melee skill on him, they will take 15 damage*. During 'Gate Release' this skill deal 10 additional damage.",
        energy: ["Tai"],
        classes: ["Physical", "Melee", "Harmful", "Action", "Instant*"],
        cooldown: 0,
        url: "https://imgur.com/b1lPDCS.jpg",
      },
      {
        name: "Gate Release",
        description:
          "Gai takes 10 affliction damage* to gain 10% unpierceable damage reduction permanently. For 1 turn he will become unable to be stunned and this skill will be replaced by 'Asakuujaku'. This skill can stack a maximmum of 7 times.",
        descriptionBR:
          "Gai takes 10 affliction damage* to gain 10% unpierceable damage reduction permanently. For 1 turn he will become unable to be stunned and this skill will be replaced by 'Asakuujaku'. This skill can stack a maximmum of 7 times.",
        energy: [],
        classes: ["Mental", "Instant", "Helpful", "Affliction", "Unique"],
        cooldown: 0,
        url: "https://imgur.com/qFZQDQS.jpg",
      },
      {
        name: "Reactive Taijutsu Rampage",
        description:
          "Gai deals 30 damage to one enemy. If used on an enemy affected by 'Nunchaku Style' this skill will deal 10 additional damage. If used during the first turn of 'Gate Release' this skill deal 15 additional damage. This skill cannot be countered.",
        descriptionBR:
          "Gai deals 30 damage to one enemy. If used on an enemy affected by 'Nunchaku Style' this skill will deal 10 additional damage. If used during the first turn of 'Gate Release' this skill deal 15 additional damage. This skill cannot be countered.",
        energy: ["Tai", "Random"],
        classes: ["Physical", "Melee", "Instant", "Harmful"],
        cooldown: 0,
        url: "https://imgur.com/PfWXjuX.jpg",
      },
      {
        name: "Muscle Block",
        description: "This skill makes Might Gai (S) invulnerable for 1 turn.",
        descriptionBR:
          "This skill makes Might Gai (S) invulnerable for 1 turn.",
        energy: ["Random"],
        classes: ["Physical", "Instant", "Helpful"],
        cooldown: 4,
        url: "https://imgur.com/cqGiKss.jpg",
      },
      {
        name: "Asakuujaku",
        description:
          "Gai deals 30 piercing damage and 25 affliction damage to one enemy and stuns their physical and melee skills. This skill cannot be countered or reflected.",
        descriptionBR:
          "Gai deals 30 piercing damage and 25 affliction damage to one enemy and stuns their physical and melee skills. This skill cannot be countered or reflected.",
        energy: ["Tai", "Blood"],
        classes: [
          "Physical",
          "Melee",
          "Instant",
          "Harmful",
          "Affliction",
          "Unique",
        ],
        cooldown: 2,
        url: "https://imgur.com/yy5hWBz.jpg",
      },
    ],
  },
  {
    name: "Akimichi Chouji (S)",
    url: "https://i.imgur.com/25YNISU.png",
    description:
      "After nearly three years, Chouji has grown into a reliable ninja and is now a chuunin. His appetite has grown and so has his body, but now he is truly mastering the Akimichi clan techniques.",
    descriptionBR:
      "After nearly three years, Chouji has grown into a reliable ninja and is now a chuunin. His appetite has grown and so has his body, but now he is truly mastering the Akimichi clan techniques.",
    skills: [
      {
        name: "Mega Palm Thrust",
        description:
          "Expanding his arms for more inertia, Chouji deals 30 damage to one enemy. This skill will deal 5 additional damage permanently. The following turn, 'Spiked Meat Tank' will deal 10 additional damage.",
        descriptionBR:
          "Expanding his arms for more inertia, Chouji deals 30 damage to one enemy. This skill will deal 5 additional damage permanently. The following turn, 'Spiked Meat Tank' will deal 10 additional damage.",
        energy: ["Tai", "Random"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/1XvjyFi.png",
      },
      {
        name: "Spiked Meat Tank",
        description:
          "Chouji gains 10 permanent destructible defense, deals 10 piercing damage to all enemies and makes them invulnerable to helpful skills. This skill will deal 5 additional damage permanently. The following turn, 'Mega Palm Thrust' will deal 15 additional damage.",
        descriptionBR:
          "Chouji gains 10 permanent destructible defense, deals 10 piercing damage to all enemies and makes them invulnerable to helpful skills. This skill will deal 5 additional damage permanently. The following turn, 'Mega Palm Thrust' will deal 15 additional damage.",
        energy: ["Blood", "Random"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/EwDVEsS.png",
      },
      {
        name: "Expansion Technique",
        description:
          "Chouji uses his family's technique to grow gigantic. For 1 turn, Chouji gains 50 points of destructible defense. This skill is invisible. The following turn, if Chouji uses a new skill, he will gain another 50 points of destructible defense for 1 turn.",
        descriptionBR:
          "Chouji uses his family's technique to grow gigantic. For 1 turn, Chouji gains 50 points of destructible defense. This skill is invisible. The following turn, if Chouji uses a new skill, he will gain another 50 points of destructible defense for 1 turn.",
        energy: ["Random"],
        classes: ["Chakra", "Instant", "Unique"],
        cooldown: 3,
        url: "https://i.imgur.com/Rek9jRu.png",
      },
      {
        name: "Chouji Hide",
        description:
          "This skill makes Akimichi Chouji (S) invulnerable for 1 turn.",
        descriptionBR:
          "This skill makes Akimichi Chouji (S) invulnerable for 1 turn.",
        energy: ["Random"],
        classes: ["Mental", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/31VeleZ.png",
      },
    ],
  },
  {
    name: "Nara Shikamaru (S)",
    url: "https://i.imgur.com/DJ6gLqt.png",
    description:
      "Once known to be one of the laziest ninja, Shikamaru has worked tireless to become not only stronger, but a leader too. More than ever before, Shikamaru excels at coming up with long winded and convoluted plans meant to defeat any enemies in his path.",
    descriptionBR:
      "Once known to be one of the laziest ninja, Shikamaru has worked tireless to become not only stronger, but a leader too. More than ever before, Shikamaru excels at coming up with long winded and convoluted plans meant to defeat any enemies in his path.",
    skills: [
      {
        name: "Shadow Sewing",
        description:
          "Shikamaru sends several tendrils of shadow to one enemy, dealing 35 damage to them and stunning their physical and chakra skills for 1 turn. Afterwards, this skill will be replaced by 'Shadow Sewing - Hold' for 1 turn.",
        descriptionBR:
          "Shikamaru sends several tendrils of shadow to one enemy, dealing 35 damage to them and stunning their physical and chakra skills for 1 turn. Afterwards, this skill will be replaced by 'Shadow Sewing - Hold' for 1 turn.",
        energy: ["Gen", "Random"],
        classes: ["Chakra", "Ranged", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/1eTGjYh.png",
      },
      {
        name: "Long-Range Tactics",
        description:
          "Shikamaru goes long. For 4 turns, each time Shikamaru uses a new harmful skill, he will become invulnerable for 1 turn. If Shikamaru receives new non-affliction damage, this skill will be ignored for 1 turn. The following 4 turns, this skill will be replaced by 'Final Explosion'.",
        descriptionBR:
          "Shikamaru goes long. For 4 turns, each time Shikamaru uses a new harmful skill, he will become invulnerable for 1 turn. If Shikamaru receives new non-affliction damage, this skill will be ignored for 1 turn. The following 4 turns, this skill will be replaced by 'Final Explosion'.",
        energy: ["Tai"],
        classes: ["Physical", "Instant"],
        cooldown: 5,
        url: "https://i.imgur.com/SkoW7Eb.png",
      },
      {
        name: "Expert Analysis",
        description:
          "By carefully analyzing one enemy, Shikamaru figures out their weakness. For 3 turns, any time that enemy uses a new skill that enemy will be unable to become invulnerable or reduce damage and all helpful counter and reflect skills on them will be ignored for 1 turn. This skill is invisible.",
        descriptionBR:
          "By carefully analyzing one enemy, Shikamaru figures out their weakness. For 3 turns, any time that enemy uses a new skill that enemy will be unable to become invulnerable or reduce damage and all helpful counter and reflect skills on them will be ignored for 1 turn. This skill is invisible.",
        energy: [],
        classes: ["Mental", "Ranged", "Instant"],
        cooldown: 2,
        url: "https://i.imgur.com/EeUkfpQ.png",
      },
      {
        name: "Panicked Dodge",
        description:
          "This skill makes Nara Shikamaru (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Nara Shikamaru (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/tZe7d8i.png",
      },
      {
        name: "Shadow Sewing - Hold",
        description:
          "Shikamaru continues to maintain his technique, stunning the physical and chakra skills of the enemy affected by 'Shadow Sewing' or this skill for 1 turn and dealing 20 damage to them. After that, this skill remains active on the enemy.",
        descriptionBR:
          "Shikamaru continues to maintain his technique, stunning the physical and chakra skills of the enemy affected by 'Shadow Sewing' or this skill for 1 turn and dealing 20 damage to them. After that, this skill remains active on the enemy.",
        energy: ["Gen"],
        classes: ["Chakra", "Ranged", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/YRBb3D8.png",
      },
      {
        name: "Final Explosion",
        description:
          "Using his shadow technique, his analysis and his range, Shikamaru traps one enemy in a pit, and blows them up. One enemy affected by 'Shadow Sewing' or 'Shadow Sewing - Hold' and 'Expert Analysis' while Shikamaru is invulnerable through 'Long-Range Tactics' will receive 100 damage.",
        descriptionBR:
          "Using his shadow technique, his analysis and his range, Shikamaru traps one enemy in a pit, and blows them up. One enemy affected by 'Shadow Sewing' or 'Shadow Sewing - Hold' and 'Expert Analysis' while Shikamaru is invulnerable through 'Long-Range Tactics' will receive 100 damage.",
        energy: ["Random", "Random"],
        classes: ["Physical", "Ranged", "Instant"],
        cooldown: 3,
        url: "https://i.imgur.com/m4z05zN.png",
      },
    ],
  },
  {
    name: "Yamanaka Ino (S)",
    url: "https://i.imgur.com/6qdt23k.png",
    description:
      "In the past couple years Ino(s) has become a chuunin and improved her ability with her family's mind control techniques. During this time she also began learning rudimentary medical techniques.",
    descriptionBR:
      "In the past couple years Ino(s) has become a chuunin and improved her ability with her family's mind control techniques. During this time she also began learning rudimentary medical techniques.",
    skills: [
      {
        name: "Rudimentary Healing",
        description:
          "Using her healing skills, Ino heals an ally for 20 health. If Ino has used a new skill on the last turn, this skill will heal 5 additional health instead.",
        descriptionBR:
          "Using her healing skills, Ino heals an ally for 20 health. If Ino has used a new skill on the last turn, this skill will heal 5 additional health instead.",
        energy: ["Random"],
        classes: ["Chakra", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/xgu04gS.png",
      },
      {
        name: "Proxy Surveillance",
        description:
          "Ino predicts one enemy's move. For 1 turn, if this character uses a new harmful skill, it will be countered. This skill is invisible.",
        descriptionBR:
          "Ino predicts one enemy's move. For 1 turn, if this character uses a new harmful skill, it will be countered. This skill is invisible.",
        energy: ["Random"],
        classes: ["Mental", "Ranged", "Instant"],
        cooldown: 2,
        url: "https://i.imgur.com/y3bJlyB.png",
      },
      {
        name: "Mind Body Switch",
        description:
          "Ino forces her mind into one enemy, dealing 25 piercing damage to them. For 1 turn, that enemy's harmful skills will deal 10 less non-affliction damage and their helpful skills will cost 1 additional random chakra. This skill ignores invulnerability.",
        descriptionBR:
          "Ino forces her mind into one enemy, dealing 25 piercing damage to them. For 1 turn, that enemy's harmful skills will deal 10 less non-affliction damage and their helpful skills will cost 1 additional random chakra. This skill ignores invulnerability.",
        energy: ["Gen", "Random"],
        classes: ["Mental", "Ranged", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/lSobTDI.pngs",
      },
      {
        name: "Hide",
        description:
          "This skill makes Yamanaka Ino(s) invulnerable for 1 turn.",
        descriptionBR:
          "This skill makes Yamanaka Ino(s) invulnerable for 1 turn.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/GYxhrYp.png",
      },
    ],
  },
  {
    name: "Sarutobi Asuma (S)",
    url: "https://i.imgur.com/PFcN7Rp.png",
    description:
      "Somehow continuing to avoid lung cancer, Asuma has remained the leader of Team 10 through the years. With the secret techniques of the fire temple, Asuma is able to attack and defend while waiting for the opportune moment to slice some heads off.",
    descriptionBR:
      "Somehow continuing to avoid lung cancer, Asuma has remained the leader of Team 10 through the years. With the secret techniques of the fire temple, Asuma is able to attack and defend while waiting for the opportune moment to slice some heads off.",
    skills: [
      {
        name: "Thousand-Armed Murder",
        description:
          "Asuma gains 40 destructible defense and instantly deals 25 damage to one enemy. During this time, he can use this skill again for 1 random to deal 20 damage to one enemy. When this skill ends, Asuma will be unable to use this skill for 1 turn.",
        descriptionBR:
          "Asuma gains 40 destructible defense and instantly deals 25 damage to one enemy. During this time, he can use this skill again for 1 random to deal 20 damage to one enemy. When this skill ends, Asuma will be unable to use this skill for 1 turn.",
        energy: ["Blood", "Random"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/jNKJQur.png",
      },
      {
        name: "Ash Pile Burning",
        description:
          "Asuma breaths out a cloud of combustible ash to all enemies each turn, increasing the cooldowns of their skills by 1 turn. During this time, this skill will be replaced by 'Ash Pile Burning - Ignite'.",
        descriptionBR:
          "Asuma breaths out a cloud of combustible ash to all enemies each turn, increasing the cooldowns of their skills by 1 turn. During this time, this skill will be replaced by 'Ash Pile Burning - Ignite'.",
        energy: ["Gen", "Random"],
        classes: ["Chakra", "Ranged", "Action", "Affliction"],
        cooldown: 0,
        url: "https://i.imgur.com/51JwKbr.png",
      },
      {
        name: "Decapitate",
        description:
          "Showing no mercy, Asuma targets one enemy, and if that enemy's health is 25 or less, he will instantly kill that enemy. This skill ignores invulnerability and cannot be countered or reflected.",
        descriptionBR:
          "Showing no mercy, Asuma targets one enemy, and if that enemy's health is 25 or less, he will instantly kill that enemy. This skill ignores invulnerability and cannot be countered or reflected.",
        energy: ["Random"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/QgXg9fS.png",
      },
      {
        name: "Asuma Evasion",
        description:
          "This skill makes Sarutobi Asuma (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Sarutobi Asuma (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/K0um1gq.png",
      },
      {
        name: "Ash Pile Burning - Ignite",
        description:
          "Asuma lights up the ash on the battlefield, dealing 10 affliction damage to all enemies for each stack of 'Ash Pile Cloud' on them. This skill will end 'Ash Pile Cloud' and it cannot be countered or reflected and ignores invulnerability.",
        descriptionBR:
          "Asuma lights up the ash on the battlefield, dealing 10 affliction damage to all enemies for each stack of 'Ash Pile Cloud' on them. This skill will end 'Ash Pile Cloud' and it cannot be countered or reflected and ignores invulnerability.",
        energy: ["Blood"],
        classes: ["Chakra", "Affliction", "Ranged", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/hjg9FWz.png",
      },
    ],
  },
  {
    name: "Hyuuga Hinata (S)",
    url: "https://i.imgur.com/rrZxc8A.jpg",
    description:
      "Hinata(s) has taken the lessons she learned during the chuunin exam, and Naruto's words of support to heart in the last couple years. She has matured greatly as a ninja, the heir to the Hyuuga clan, and as a woman.",
    descriptionBR:
      "Hinata(s) has taken the lessons she learned during the chuunin exam, and Naruto's words of support to heart in the last couple years. She has matured greatly as a ninja, the heir to the Hyuuga clan, and as a woman.",
    skills: [
      {
        name: "Byakuugan Activation",
        description:
          "Hinata(s) activates her byakuugan to read her opponents chakra. For 5 turns she gains 5 points of damage reduction and Chakra Node Strike is improved the following 4 turns and will make the enemy target take 10 more damage from Chakra Node Strike each time it is used on them permanently.",
        descriptionBR:
          "Hinata(s) activates her byakuugan to read her opponents chakra. For 5 turns she gains 5 points of damage reduction and Chakra Node Strike is improved the following 4 turns and will make the enemy target take 10 more damage from Chakra Node Strike each time it is used on them permanently.",
        energy: [],
        classes: ["Mental", "Instant", "Unique"],
        cooldown: 4,
        url: "https://i.imgur.com/lckWH5w.jpg",
      },
      {
        name: "Chakra Node Strike",
        description:
          "Hinata(s) hits one of her enemy's chakra nodes, dealing 15 damage them. That enemy also has 1 taijutsu or ninjutsu chakra removed from their pool. The following turn only this skill will not remove any chakra. During Byakuugan Activation this skill is improved.",
        descriptionBR:
          "Hinata(s) hits one of her enemy's chakra nodes, dealing 15 damage them. That enemy also has 1 taijutsu or ninjutsu chakra removed from their pool. The following turn only this skill will not remove any chakra. During Byakuugan Activation this skill is improved.",
        energy: ["Tai"],
        classes: ["Chakra", "Melee", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/FHkHjDN.jpg",
      },
      {
        name: "Eight Trigrams Thirty Two Palms",
        description:
          "Using a lesser form of Eight Trigram Sixty Four Palms, Hinata(s) deals 35 damage to one enemy. The cost of that enemy's skills is increased by one random chakra for 3 turns. This skill cannot be used on an enemy currently affected by it.",
        descriptionBR:
          "Using a lesser form of Eight Trigram Sixty Four Palms, Hinata(s) deals 35 damage to one enemy. The cost of that enemy's skills is increased by one random chakra for 3 turns. This skill cannot be used on an enemy currently affected by it.",
        energy: ["Tai", "Blood"],
        classes: ["Physical", "Melee", "Instant", "Unique"],
        cooldown: 2,
        url: "https://i.imgur.com/XOytzeV.jpg",
      },
      {
        name: "Hinata (S) Dodge",
        description:
          "This skill makes Hyuuga Hinata (S) invulnerable for 1 turn.",
        descriptionBR:
          "This skill makes Hyuuga Hinata (S) invulnerable for 1 turn.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/G7M1e47.jpg",
      },
    ],
  },
  {
    name: "Aburame Shino (S)",
    url: "https://i.imgur.com/z5tk6Uy.jpg",
    description:
      "After many years of training while Naruto was away, Shino(s) has mastered the use of his loyal bugs, a style of fighting only the Aburame clan has mastered.",
    descriptionBR:
      "After many years of training while Naruto was away, Shino(s) has mastered the use of his loyal bugs, a style of fighting only the Aburame clan has mastered.",
    skills: [
      {
        name: "Chakra Gather",
        description:
          "Focusing his chakra, Shino(s) gains 50% damage reduction for 3 turns, and the following 3 turns Insect Swarm will last 3 turns instead.",
        descriptionBR:
          "Focusing his chakra, Shino(s) gains 50% damage reduction for 3 turns, and the following 3 turns Insect Swarm will last 3 turns instead.",
        energy: ["Blood"],
        classes: ["Chakra", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/8d2GnOq.jpg",
      },
      {
        name: "Insect Swarm",
        description:
          "Using his huge army of insects, Shino(s) attacks one enemy, dealing 15 piercing damage to them for 2 turns. That enemy is invulnerable to friendly skills each turn.",
        descriptionBR:
          "Using his huge army of insects, Shino(s) attacks one enemy, dealing 15 piercing damage to them for 2 turns. That enemy is invulnerable to friendly skills each turn.",
        energy: ["Blood"],
        classes: ["Chakra", "Ranged", "Action", "Unique"],
        cooldown: 2,
        url: "https://i.imgur.com/uS36iK7.jpg",
      },
      {
        name: "Insect Barricade",
        description:
          "Manipulating his bugs at will, Shino(s) goes defensive protecting one ally or himself. For 1 turn, the first enemy skill used on that ally will be countered, Shino(s) will gain 1 bloodline chakra, and that enemy will take 20 piercing damage*. This skill is invisible.",
        descriptionBR:
          "Manipulating his bugs at will, Shino(s) goes defensive protecting one ally or himself. For 1 turn, the first enemy skill used on that ally will be countered, Shino(s) will gain 1 bloodline chakra, and that enemy will take 20 piercing damage*. This skill is invisible.",
        energy: ["Blood"],
        classes: ["Chakra", "Ranged*", "Instant", "Unique"],
        cooldown: 2,
        url: "https://i.imgur.com/E6Gmm5T.jpg",
      },
      {
        name: "Insect Cocoon",
        description:
          "This skill makes Aburame Shino (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Aburame Shino (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/MmvNDkb.jpg",
      },
    ],
  },
  {
    name: "Inuzuka Kiba (S)",
    url: "https://i.imgur.com/2iNZhKw.jpg",
    description:
      "Over the last couple years both Kiba(s) and Akamaru have grown considerably, and they have become a formidable fighting unit together.",
    descriptionBR:
      "Over the last couple years both Kiba(s) and Akamaru have grown considerably, and they have become a formidable fighting unit together.",
    skills: [
      {
        name: "Man Beast Clone",
        description:
          "Kiba (S) turns Akamaru into a clone of himself. For 4 turns Kiba (S) will ignore stuns. During this time, he will also ignore effects that would increase skill cooldowns or damage dealt to him and effects that would decrease damage Kiba (S) deals.",
        descriptionBR:
          "Kiba (S) turns Akamaru into a clone of himself. For 4 turns Kiba (S) will ignore stuns. During this time, he will also ignore effects that would increase skill cooldowns or damage dealt to him and effects that would decrease damage Kiba (S) deals.",
        energy: [],
        classes: ["Physical", "Instant"],
        cooldown: 3,
        url: "https://i.imgur.com/IdUdwWj.jpg",
      },
      {
        name: "Piercing Fang",
        description:
          "Together, Kiba (S) and Akamaru deal 25 piercing damage to one enemy, and Kiba (S) gains 25% damage reduction for 1 turn.",
        descriptionBR:
          "Together, Kiba (S) and Akamaru deal 25 piercing damage to one enemy, and Kiba (S) gains 25% damage reduction for 1 turn.",
        energy: ["Tai", "Random"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/bPXkjGM.jpg",
      },
      {
        name: "Fang Over Fang",
        description:
          "Kiba (S) and Akamaru attack an enemy from two different angles dealing 50 damage to them. That enemy will deal 5 less damage on skills they use (this effect stacks).* This skill may only be used during Man Beast Clone.",
        descriptionBR:
          "Kiba (S) and Akamaru attack an enemy from two different angles dealing 50 damage to them. That enemy will deal 5 less damage on skills they use (this effect stacks).* This skill may only be used during Man Beast Clone.",
        energy: ["Tai", "Blood"],
        classes: ["Physical", "Melee", "Affliction*", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/DbJ8U8z.jpg",
      },
      {
        name: "Fall Back",
        description:
          "This skill makes Inuzuka Kiba (S) invulnerable for 1 turn.",
        descriptionBR:
          "This skill makes Inuzuka Kiba (S) invulnerable for 1 turn.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/imW0jUY.jpg",
      },
    ],
  },
  {
    name: "Yamashiro Aoba (S)",
    url: "https://i.imgur.com/iJ4OAyP.jpg",
    description:
      "Yamashiro Aoba(s) is a special Jounin from Konoha and a member of the Nijyuu Shoutai. He specializes in summoning crows to distress his enemies, and in the art of taijutsu.",
    descriptionBR:
      "Yamashiro Aoba(s) is a special Jounin from Konoha and a member of the Nijyuu Shoutai. He specializes in summoning crows to distress his enemies, and in the art of taijutsu.",
    skills: [
      {
        name: "Murder of Crows",
        description:
          "Aoba summons a murder of crows to harass his enemies and screen his allies. Aoba deals 10 damage to all enemies and Aoba and his allies gain 20% damage reduction for 3 turns. During this time this skill will be replaced by Convergence of a Murder.",
        descriptionBR:
          "Aoba summons a murder of crows to harass his enemies and screen his allies. Aoba deals 10 damage to all enemies and Aoba and his allies gain 20% damage reduction for 3 turns. During this time this skill will be replaced by Convergence of a Murder.",
        energy: ["Gen", "Random"],
        classes: ["Mental", "Ranged", "Action"],
        cooldown: 3,
        url: "https://i.imgur.com/qucjuFH.jpg",
      },
      {
        name: "Crow Assault",
        description:
          "Aoba singles out one enemy with his crows, dealing 15 damage to that enemy for 2 turns. During this time that enemy cannot use skills with a stun effect (this is a stun effect). During Murder of Crows this skill is improved and will deal 5 more damage.",
        descriptionBR:
          "Aoba singles out one enemy with his crows, dealing 15 damage to that enemy for 2 turns. During this time that enemy cannot use skills with a stun effect (this is a stun effect). During Murder of Crows this skill is improved and will deal 5 more damage.",
        energy: ["Gen"],
        classes: ["Mental", "Ranged", "Control"],
        cooldown: 1,
        url: "https://i.imgur.com/zFbzaSt.jpg",
      },
      {
        name: "Revenger of the Murder",
        description:
          "For 3 turns, if one ally is killed, they will have their health set to 5, will have all their skills replaced by Convergence of a Murder which will cost 1 random chakra and will deal 20 damage, and will ignore all further skills. At the end of their next turn, that ally will die, this effect cannot be stopped, ignored or removed. This skills is invisible.",
        descriptionBR:
          "For 3 turns, if one ally is killed, they will have their health set to 5, will have all their skills replaced by Convergence of a Murder which will cost 1 random chakra and will deal 20 damage, and will ignore all further skills. At the end of their next turn, that ally will die, this effect cannot be stopped, ignored or removed. This skills is invisible.",
        energy: ["Random"],
        classes: ["Mental", "Instant"],
        cooldown: 3,
        url: "https://i.imgur.com/YhJ2Uxi.jpg",
      },
      {
        name: "Crow Shield",
        description:
          "This skill makes Yamashiro Aoba (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Yamashiro Aoba (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/nK2klB0.jpg",
      },
      {
        name: "Convergence of a Murder",
        description:
          "Aoba commands his crows to pick off one enemy and deals 35 damage to them.",
        descriptionBR:
          "Aoba commands his crows to pick off one enemy and deals 35 damage to them.",
        energy: ["Gen", "Random"],
        classes: ["Mental", "Ranged", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/5pcJbBW.jpg",
      },
    ],
  },
  {
    name: "Izumo and Kotetsu (S)",
    url: "https://i.imgur.com/wU35Vhd.jpg",
    description:
      "Part of the Nijyuu Shoutai, Izumo and Kotetsu are almost always found together and work together excellently as a combat team. ",
    descriptionBR:
      "Part of the Nijyuu Shoutai, Izumo and Kotetsu are almost always found together and work together excellently as a combat team. ",
    skills: [
      {
        name: "Conch Shell Mace",
        description:
          "Kotetsu summons a giant mace and slams it against one enemy, dealing 30 damage to them. Guided Shell Mace may be used the following turn.",
        descriptionBR:
          "Kotetsu summons a giant mace and slams it against one enemy, dealing 30 damage to them. Guided Shell Mace may be used the following turn.",
        energy: ["Random", "Random"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/w4K54OY.jpg",
      },
      {
        name: "Guided Shell Mace",
        description:
          "Kotetsu throws his mace and guides it to attack an enemy from an odd angle. This skill deals 15 piercing damage to one enemy.",
        descriptionBR:
          "Kotetsu throws his mace and guides it to attack an enemy from an odd angle. This skill deals 15 piercing damage to one enemy.",
        energy: [],
        classes: ["Physical", "Ranged", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/4yIC0mq.jpg",
      },
      {
        name: "Starch Syrup Capturing Field",
        description:
          "Izumo and Kotetsu target all enemies increasing the cost of their physical skills for 1 turn, if they use a a new non-physical skill, they will be unable to reduce damage or become invulnerable for 1 turn.",
        descriptionBR:
          "Izumo and Kotetsu target all enemies increasing the cost of their physical skills for 1 turn, if they use a a new non-physical skill, they will be unable to reduce damage or become invulnerable for 1 turn.",
        energy: ["Nin"],
        classes: ["Physical", "Instant", "Ranged", "Affliction"],
        cooldown: 2,
        url: "https://i.imgur.com/LkIgfQ4.jpg",
      },
      {
        name: "Lunging Dodge",
        description:
          "This skill makes Izumo and Kotetsu (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Izumo and Kotetsu (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/88Uy5xU.jpg",
      },
    ],
  },
  {
    name: "Inuzuka Tsume (S)",
    url: "https://i.imgur.com/6ygR66h.jpg",
    description:
      "Tsume is a fierce woman and a member of the Inuzuka clan. She is a jounin and the mother of Kiba.",
    descriptionBR:
      "Tsume is a fierce woman and a member of the Inuzuka clan. She is a jounin and the mother of Kiba.",
    skills: [
      {
        name: "Kuromaru",
        description:
          "WIth the help of her companion Kuromaru, Tsume (S) gains 50% damage reduction for 4 turns. This skill becomes Ninken Maul while it is in effect.",
        descriptionBR:
          "WIth the help of her companion Kuromaru, Tsume (S) gains 50% damage reduction for 4 turns. This skill becomes Ninken Maul while it is in effect.",
        energy: ["Random"],
        classes: ["Physical", "Instant", "Unique"],
        cooldown: 3,
        url: "https://i.imgur.com/paT5poq.jpg",
      },
      {
        name: "Flash Grenade",
        description:
          "Tsume (S) uses a Flash Grenade. Tsume (S) and all allies will be invulnerable to physical and ranged skills for 1 turn",
        descriptionBR:
          "Tsume (S) uses a Flash Grenade. Tsume (S) and all allies will be invulnerable to physical and ranged skills for 1 turn",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 3,
        url: "https://i.imgur.com/dribUEz.jpg",
      },
      {
        name: "Dual Piercing Fang",
        description:
          "Tsume (S) spins, dealing 15 piercing damage to one enemy for 2 turns. For 1 turn, all stun effects that enemy uses will also be decreased by 2 turns. During Kuromaru this skill deals an additional 5 damage.",
        descriptionBR:
          "Tsume (S) spins, dealing 15 piercing damage to one enemy for 2 turns. For 1 turn, all stun effects that enemy uses will also be decreased by 2 turns. During Kuromaru this skill deals an additional 5 damage.",
        energy: ["Tai"],
        classes: ["Physical", "Melee", "Action"],
        cooldown: 0,
        url: "https://i.imgur.com/EnUQ9tC.jpg",
      },
      {
        name: "Animalistic Stance",
        description:
          "This skill makes Inuzuka Tsume (S) invulnerable for 1 turn.",
        descriptionBR:
          "This skill makes Inuzuka Tsume (S) invulnerable for 1 turn.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/6sfEY13.jpg",
      },
      {
        name: "Ninken Maul",
        description:
          "Kuromaru lunges at one enemy dealing 25 piercing damage. For 1 turn damage dealt by that enemy is reduced by 25%. Tsume (S) will ignore stun effects for 1 turn when this skills is used. This skill becomes kuromaru after 3 turns.",
        descriptionBR:
          "Kuromaru lunges at one enemy dealing 25 piercing damage. For 1 turn damage dealt by that enemy is reduced by 25%. Tsume (S) will ignore stun effects for 1 turn when this skills is used. This skill becomes kuromaru after 3 turns.",
        energy: ["Blood"],
        classes: ["Physical", "Melee", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/GfCt517.png",
      },
    ],
  },
  {
    name: "Yamanaka Inoichi (S)",
    url: "https://i.imgur.com/LWxD0ty.jpg",
    description:
      "Yamanaka Inoichi (S) is the father of Ino and the leader of the Yamanaka clan. He is a jounin and a member of the Konoha interrogation squad.",
    descriptionBR:
      "Yamanaka Inoichi (S) is the father of Ino and the leader of the Yamanaka clan. He is a jounin and a member of the Konoha interrogation squad.",
    skills: [
      {
        name: "Mental Barrier",
        description:
          "Inoichi (S) puts up his Mental Barrier. For 2 turns one enemy's skills will cost 1 additional random chakra and Inoichi will be invulnerable to ranged skills. During this time Inoichi (S) will gain 25% damage reduction and Telepathy will be improved.",
        descriptionBR:
          "Inoichi (S) puts up his Mental Barrier. For 2 turns one enemy's skills will cost 1 additional random chakra and Inoichi will be invulnerable to ranged skills. During this time Inoichi (S) will gain 25% damage reduction and Telepathy will be improved.",
        energy: ["Gen"],
        classes: ["Mental", "Instant", "Ranged"],
        cooldown: 3,
        url: "https://i.imgur.com/4rvW1jp.jpg",
      },
      {
        name: "Mind Probe",
        description:
          "Inoichi (S) uses Mind Probe. For 1 turn the first enemy skill that targets Inoichi (S) will be reflected. This skill is invisible. The following turn Telepathy will be improved and will deal an additional 10 damage.",
        descriptionBR:
          "Inoichi (S) uses Mind Probe. For 1 turn the first enemy skill that targets Inoichi (S) will be reflected. This skill is invisible. The following turn Telepathy will be improved and will deal an additional 10 damage.",
        energy: ["Gen"],
        classes: ["Mental", "Instant", "Unique"],
        cooldown: 2,
        url: "https://i.imgur.com/GC9TAYc.jpg",
      },
      {
        name: "Telepathy",
        description:
          "Inoichi (S) uses his mind to deal 25 damage to one enemy. During Mental Barrier this skill will deal 25 piercing damage instead and will have no cooldown.",
        descriptionBR:
          "Inoichi (S) uses his mind to deal 25 damage to one enemy. During Mental Barrier this skill will deal 25 piercing damage instead and will have no cooldown.",
        energy: ["Random"],
        classes: ["Mental", "Instant", "Ranged"],
        cooldown: 1,
        url: "https://i.imgur.com/Al0RYvz.jpg",
      },
      {
        name: "Stiff Arm",
        description:
          "This skill makes Yamanaka Inoichi (S) invulnerable for 1 turn.",
        descriptionBR:
          "This skill makes Yamanaka Inoichi (S) invulnerable for 1 turn.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/2JBI0Vh.jpg",
      },
    ],
  },
  {
    name: "Morino Ibiki (S)",
    url: "https://i.imgur.com/cZN19Fg.jpg",
    description:
      "Morino Ibiki (S) is a jounin and the designer of the chuunin exams. He is the leader of the Konoha interrogation squad.",
    descriptionBR:
      "Morino Ibiki (S) is a jounin and the designer of the chuunin exams. He is the leader of the Konoha interrogation squad.",
    skills: [
      {
        name: "Iron Maiden Summoning",
        description:
          "Ibiki (S) uses Iron Maiden Summoning on one enemy. That enemy will be dealt 25 piercing damage and have their physical and ranged skills stunned for 1 turn.",
        descriptionBR:
          "Ibiki (S) uses Iron Maiden Summoning on one enemy. That enemy will be dealt 25 piercing damage and have their physical and ranged skills stunned for 1 turn.",
        energy: ["Nin"],
        classes: ["Chakra", "Ranged", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/EXtcS9K.jpg",
      },
      {
        name: "Torture Chamber Summoning",
        description:
          "Ibiki (S) uses his Torture Chamber Summoning. For 3 turns Ibiki (S) grant his team 10 points of destructible defense and one enemy will be invulnerable to new friendly skills. Interrogation can be used on that enemy during this skill.",
        descriptionBR:
          "Ibiki (S) uses his Torture Chamber Summoning. For 3 turns Ibiki (S) grant his team 10 points of destructible defense and one enemy will be invulnerable to new friendly skills. Interrogation can be used on that enemy during this skill.",
        energy: ["Gen", "Random"],
        classes: ["Mental", "Instant", "Ranged", "Unique"],
        cooldown: 3,
        url: "https://i.imgur.com/j0rwu9e.jpg",
      },
      {
        name: "Interrogation",
        description:
          "Ibiki (S) uses Interrogation on one enemy effected by Torture Chamber Summoning dealing 20 damage. Ibiki (S) gains 5 permanent destructible defense when this skill is used.",
        descriptionBR:
          "Ibiki (S) uses Interrogation on one enemy effected by Torture Chamber Summoning dealing 20 damage. Ibiki (S) gains 5 permanent destructible defense when this skill is used.",
        energy: ["Random"],
        classes: ["Mental", "Ranged", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/5xm2RZC.jpg",
      },
      {
        name: "Sliding Evasion",
        description:
          "This skill makes Morino Ibiki (S) invulnerable for 1 turn.",
        descriptionBR:
          "This skill makes Morino Ibiki (S) invulnerable for 1 turn.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/HbhUFbp.jpg",
      },
    ],
  },
  {
    name: "Akimichi Chouza (S)",
    url: "https://i.imgur.com/U2UtnIs.jpg",
    description:
      "Akimichi Chouza (S) is the leader of the Akimichi clan and the father of Chouji. He is a jounin and he is skilled in all of his clan's secret techniques.",
    descriptionBR:
      "Akimichi Chouza (S) is the leader of the Akimichi clan and the father of Chouji. He is a jounin and he is skilled in all of his clan's secret techniques.",
    skills: [
      {
        name: "Chain Bind",
        description:
          "Chouza slows down an enemy, dealing 5 damage to them and lowering all physical and chakra non-affliction damage they deal by 10 for 1 turn. Chouza's team will also gain 5 destructible defense.",
        descriptionBR:
          "Chouza slows down an enemy, dealing 5 damage to them and lowering all physical and chakra non-affliction damage they deal by 10 for 1 turn. Chouza's team will also gain 5 destructible defense.",
        energy: ["Random"],
        classes: ["Physical", "Ranged", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/u6ll8Ji.jpg",
      },
      {
        name: "Jounin Meat Tank",
        description:
          "Chouza begins rolling for 3 turns, dealing 15 damage to one enemy and granting his team 10 destructible defense for 1 turn each turn.",
        descriptionBR:
          "Chouza begins rolling for 3 turns, dealing 15 damage to one enemy and granting his team 10 destructible defense for 1 turn each turn.",
        energy: ["Blood", "Random"],
        classes: ["Physical", "Melee", "Action"],
        cooldown: 3,
        url: "https://i.imgur.com/eqmooOT.jpg",
      },
      {
        name: "Expansion Smash",
        description:
          "If used on an enemy, for 1 turn, the next non-mental harmful skill they use will be countered. If used on an ally, for 1 turn, the next non-mental harmful skill used on them will be countered. The countered enemy will receive 10 damage. This skill is invisible and ignores invulnerability.",
        descriptionBR:
          "If used on an enemy, for 1 turn, the next non-mental harmful skill they use will be countered. If used on an ally, for 1 turn, the next non-mental harmful skill used on them will be countered. The countered enemy will receive 10 damage. This skill is invisible and ignores invulnerability.",
        energy: ["Blood"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 2,
        url: "https://i.imgur.com/xZERN52.jpg",
      },
      {
        name: "Strategic Withdrawal",
        description:
          "This skill makes Akimichi Chouza (S) invulnerable for 1 turn.",
        descriptionBR:
          "This skill makes Akimichi Chouza (S) invulnerable for 1 turn.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/JKHu9Lc.jpg",
      },
    ],
  },
  {
    name: "Hyuuga Hiashi (S)",
    url: "https://i.imgur.com/ZqOqt45.jpg",
    description:
      "Head of the Hyuuga clan, and father to both Hinata and Hanabi, Hiashi is a strict, but caring man who would do anything for his clan. In battle, there is no equal when it comes to mastering the Hyuuga clan abilitie",
    descriptionBR:
      "Head of the Hyuuga clan, and father to both Hinata and Hanabi, Hiashi is a strict, but caring man who would do anything for his clan. In battle, there is no equal when it comes to mastering the Hyuuga clan abilitie",
    skills: [
      {
        name: "Master Gentle Fist",
        description:
          "Hiashi slams one enemy with his fists, dealing 25 damage to them and removing 1 taijutsu or ninjutsu chakra from them. The following turn, one other random enemy, will receive 20 damage; the target of this skill is invisible.",
        descriptionBR:
          "Hiashi slams one enemy with his fists, dealing 25 damage to them and removing 1 taijutsu or ninjutsu chakra from them. The following turn, one other random enemy, will receive 20 damage; the target of this skill is invisible.",
        energy: ["Tai", "Random"],
        classes: ["Physical", "Melee", "Unique", "Action"],
        cooldown: 2,
        url: "https://i.imgur.com/OXOLq9a.jpg",
      },
      {
        name: "Master Revolving Heaven",
        description:
          "Hiashi spins, becoming invulnerable for 2 turns, dealing 15 damage to one enemy and 10 to all other enemies each turn.",
        descriptionBR:
          "Hiashi spins, becoming invulnerable for 2 turns, dealing 15 damage to one enemy and 10 to all other enemies each turn.",
        energy: ["Blood", "Random"],
        classes: ["Chakra", "Melee", "Unique", "Action"],
        cooldown: 3,
        url: "https://i.imgur.com/nXwOyt7.jpg",
      },
      {
        name: "Eight Trigrams Vacuum Wall Palm",
        description:
          "Hiashi gets ready to blast an enemy's attack back. The next turn, the first enemy to use a new harmful skill on one ally or himself will have that skill reflected back to one random enemy.",
        descriptionBR:
          "Hiashi gets ready to blast an enemy's attack back. The next turn, the first enemy to use a new harmful skill on one ally or himself will have that skill reflected back to one random enemy.",
        energy: ["Blood"],
        classes: ["Chakra", "Melee", "Unique", "Instant"],
        cooldown: 3,
        url: "https://i.imgur.com/dhKR9Ee.jpg",
      },
      {
        name: "Hiashi Byakugan",
        description:
          "This skill makes Hyuuga Hiashi (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Hyuuga Hiashi (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Mental", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/81nCkpb.jpg",
      },
    ],
  },
  {
    name: "Nara Shikaku (S)",
    url: "https://i.imgur.com/zk8rpMS.png",
    description:
      "The father of Nara Shikamaru, and the head of the Nara clan, Shikaku is a cool-headed Jounin of Konoha who will go to any lengths to protect his friends and family. In battle, Shikaku is merciless, combining his impressive shadow imitation skills with his unparalleled intellect to grab victory for his team.",
    descriptionBR:
      "The father of Nara Shikamaru, and the head of the Nara clan, Shikaku is a cool-headed Jounin of Konoha who will go to any lengths to protect his friends and family. In battle, Shikaku is merciless, combining his impressive shadow imitation skills with his unparalleled intellect to grab victory for his team.",
    skills: [
      {
        name: "Master Shadow Imitation",
        description:
          "Shikaku grabs an enemy with his shadow, forcing his body to do as he pleases. That enemy will receive 20 damage and then will have their physical and chakra skills stunned for 2 turns. The following turn, this skill will be replaced by 'Shadow Dispersion'.",
        descriptionBR:
          "Shikaku grabs an enemy with his shadow, forcing his body to do as he pleases. That enemy will receive 20 damage and then will have their physical and chakra skills stunned for 2 turns. The following turn, this skill will be replaced by 'Shadow Dispersion'.",
        energy: ["Gen", "Random"],
        classes: ["Chakra", "Ranged", "Control"],
        cooldown: 1,
        url: "https://i.imgur.com/daGBuKS.png",
      },
      {
        name: "Black Spider Lily",
        description:
          "Shikaku extends his shadows out to his enemies. For 3 turns, Shikaku's skills will deal an additional 10 damage to them, and each time they use a new stun skill, then for 3 turns the next time Shikaku stuns that enemy, they will be stunned for 1 additional turn.",
        descriptionBR:
          "Shikaku extends his shadows out to his enemies. For 3 turns, Shikaku's skills will deal an additional 10 damage to them, and each time they use a new stun skill, then for 3 turns the next time Shikaku stuns that enemy, they will be stunned for 1 additional turn.",
        energy: ["Gen"],
        classes: ["Chakra", "Ranged", "Instant"],
        cooldown: 3,
        url: "https://i.imgur.com/OTNQw5N.png",
      },
      {
        name: "Problem Analysis",
        description:
          "Shikaku targets himself or one ally for 1 turn, and the first new harmful non-affliction damage skill that is used on them will deal no damage and that ally will gain destructible defense equal to the original damage of that skill. This skill is invisible.",
        descriptionBR:
          "Shikaku targets himself or one ally for 1 turn, and the first new harmful non-affliction damage skill that is used on them will deal no damage and that ally will gain destructible defense equal to the original damage of that skill. This skill is invisible.",
        energy: ["Random"],
        classes: ["Mental", "Instant"],
        cooldown: 3,
        url: "https://i.imgur.com/SrDeUzW.png",
      },
      {
        name: "Human Barricade",
        description:
          "This skill makes Nara Shikaku (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Nara Shikaku (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/Nyx7LfT.png",
      },
      {
        name: "Shadow Dispersion",
        description:
          "Nara Shikaku targets all enemies not affected by 'Master Shadow Imitation', stunning their physical and chakra skills for 1 turn and dealing 20 damage to them.",
        descriptionBR:
          "Nara Shikaku targets all enemies not affected by 'Master Shadow Imitation', stunning their physical and chakra skills for 1 turn and dealing 20 damage to them.",
        energy: ["Gen"],
        classes: ["Chakra", "Ranged", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/474zyLo.png",
      },
    ],
  },
  {
    name: "Aburame Torune (S)",
    url: "https://i.imgur.com/LhfhEMW.jpg",
    description:
      "Aburame Torune (S) is a member of Anbu Root and the partner of Fu. Torune uses nano sized venomous insects in battle, which is rare even amongst the Aburame clan.",
    descriptionBR:
      "Aburame Torune (S) is a member of Anbu Root and the partner of Fu. Torune uses nano sized venomous insects in battle, which is rare even amongst the Aburame clan.",
    skills: [
      {
        name: "Kunai Wave",
        description:
          "Aburame Torune (S) targets 1 enemy, that enemy's skills will cost 1 additional random chakra for 2 turns*. All of that enemy's allies will take 15 damage for 2 turns",
        descriptionBR:
          "Aburame Torune (S) targets 1 enemy, that enemy's skills will cost 1 additional random chakra for 2 turns*. All of that enemy's allies will take 15 damage for 2 turns",
        energy: ["Tai", "Random"],
        classes: ["Physical", "Ranged", "Action", "Instant*"],
        cooldown: 1,
        url: "https://i.imgur.com/YJFbctL.jpg",
      },
      {
        name: "Insect Armor",
        description:
          "Torune uses Insect Armor and gains 20 permanent destructible defense. The enemy that destroys this destructible defense will have 'Nano Beetles' applied to them. While Torune has this destructible defense, Nano Beetles will cost 1 random chakra.",
        descriptionBR:
          "Torune uses Insect Armor and gains 20 permanent destructible defense. The enemy that destroys this destructible defense will have 'Nano Beetles' applied to them. While Torune has this destructible defense, Nano Beetles will cost 1 random chakra.",
        energy: ["Blood"],
        classes: ["Physical", "Instant", "Unique", "Affliction*", "__$"],
        cooldown: 2,
        url: "https://i.imgur.com/sMcF55a.jpg",
      },
      {
        name: "Nano Beetles",
        description:
          "Using Nano Beetles Torune targets 1 enemy. That enemy will be dealt 7 affliction damage for 5 turns. This effect stacks.",
        descriptionBR:
          "Using Nano Beetles Torune targets 1 enemy. That enemy will be dealt 7 affliction damage for 5 turns. This effect stacks.",
        energy: ["Blood"],
        classes: ["Physical", "Melee", "Instant", "Unique", "Affliction"],
        cooldown: 0,
        url: "https://i.imgur.com/RzRyWtX.jpg",
      },
      {
        name: "Torune Retreat",
        description:
          "This skill makes Aburame Torune (S) invulnerable for 1 turn.",
        descriptionBR:
          "This skill makes Aburame Torune (S) invulnerable for 1 turn.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/IQ0JfGJ.jpg",
      },
    ],
  },
  {
    name: "Yamanaka Fu (S)",
    url: "https://i.imgur.com/OTuHCjt.jpg",
    description:
      "Yamanaka Fu (S) is a member of the Yamanaka clan and a member of Anbu Root. Fu is a skilled genjutsu user and the partner of Torune.",
    descriptionBR:
      "Yamanaka Fu (S) is a member of the Yamanaka clan and a member of Anbu Root. Fu is a skilled genjutsu user and the partner of Torune.",
    skills: [
      {
        name: "Cursed Seal Mind Body Switch",
        description:
          "Yamanaka Fu (S) uses Cursed Seal Mind Body Switch on 1 enemy dealing 20 damage. That enemy's mental and ranged skills will be stunned for 1 turn. Tanto Slash will deal 200% damage to the target of this skill for 1 turn.",
        descriptionBR:
          "Yamanaka Fu (S) uses Cursed Seal Mind Body Switch on 1 enemy dealing 20 damage. That enemy's mental and ranged skills will be stunned for 1 turn. Tanto Slash will deal 200% damage to the target of this skill for 1 turn.",
        energy: ["Gen"],
        classes: ["Mental", "Ranged", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/YRadD0j.jpg",
      },
      {
        name: "Scarecrow Puppet",
        description:
          "Yamanaka Fu (S) uses Scarecrow Puppet on himself or an ally. For 1 turn, the first enemy to use a new physical or melee skill on that target will be countered and their skills will be replaced by 'Scarecrow Puppet: Attack'. This skill is invisible and ends when triggered.",
        descriptionBR:
          "Yamanaka Fu (S) uses Scarecrow Puppet on himself or an ally. For 1 turn, the first enemy to use a new physical or melee skill on that target will be countered and their skills will be replaced by 'Scarecrow Puppet: Attack'. This skill is invisible and ends when triggered.",
        energy: ["Gen"],
        classes: ["Mental", "Instant", "Unique"],
        cooldown: 3,
        url: "https://i.imgur.com/tVknrDd.jpg",
      },
      {
        name: "Tanto Slash",
        description:
          "Using Tanto Slash Fu deals 20 piercing damage to 1 enemy.",
        descriptionBR:
          "Using Tanto Slash Fu deals 20 piercing damage to 1 enemy.",
        energy: ["Tai"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/A5Z7f6G.jpg",
      },
      {
        name: "Aggresive Retreat",
        description:
          "This skill makes Yamanaka Fu (S) invulnerable for 1 turn.",
        descriptionBR:
          "This skill makes Yamanaka Fu (S) invulnerable for 1 turn.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/hf7JCNO.jpg",
      },
      {
        name: "Scarecrow Puppet: Attack",
        description: "This skill deals 15 damage to one enemy.",
        descriptionBR: "This skill deals 15 damage to one enemy.",
        energy: ["Random"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/F94sK6m.jpeg",
      },
    ],
  },
  {
    name: "Shimura Danzo (S)",
    url: "https://i.imgur.com/q35DAVP.png",
    description:
      "Shimura Danzo (S) is the leader of the hidden root organization in Konoha and one of the village elders. Danzo operates in the shadows dedicated to Konoha no matter the cost.",
    descriptionBR:
      "Shimura Danzo (S) is the leader of the hidden root organization in Konoha and one of the village elders. Danzo operates in the shadows dedicated to Konoha no matter the cost.",
    skills: [
      {
        name: "Izanagi",
        description:
          "Danzo consumes 2 \"Izanagi's Sharingan\" to activate Izanagi, ignoring all damage dealt to him permanently. If Danzo is affected by 2 new harmful skills, this skill will end and Danzo will be unable to use it for 1 turn. While 'Izanagi' is activated, this skill will be replaced by 'Stolen Kotoamatsukami'.",
        descriptionBR:
          "Danzo consumes 2 \"Izanagi's Sharingan\" to activate Izanagi, ignoring all damage dealt to him permanently. If Danzo is affected by 2 new harmful skills, this skill will end and Danzo will be unable to use it for 1 turn. While 'Izanagi' is activated, this skill will be replaced by 'Stolen Kotoamatsukami'.",
        energy: ["Blood"],
        classes: ["Chakra", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/1RJkCc2.png",
      },
      {
        name: "Self-Cursing Seal",
        description:
          "Danzo places a seal mark on an enemy's body, dealing 10 affliction damage to them for 5 turns. If this skill is removed, that enemy will have their harmful skills stunned for 1 turn. This skill stacks.",
        descriptionBR:
          "Danzo places a seal mark on an enemy's body, dealing 10 affliction damage to them for 5 turns. If this skill is removed, that enemy will have their harmful skills stunned for 1 turn. This skill stacks.",
        energy: ["Gen"],
        classes: ["Chakra", "Ranged", "Instant", "Unique", "Affliction"],
        cooldown: 1,
        url: "https://i.imgur.com/mQ9WSFt.png",
      },
      {
        name: "Summoning: Baku",
        description:
          "Danzo summons Baku in the battlefield, dealing 25 piercing damage to one enemy. For 2 turns, that enemy's non-affliction skills will deal 50% less damage.",
        descriptionBR:
          "Danzo summons Baku in the battlefield, dealing 25 piercing damage to one enemy. For 2 turns, that enemy's non-affliction skills will deal 50% less damage.",
        energy: ["Blood", "Random"],
        classes: ["Chakra", "Ranged", "Instant", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/uvk12gs.png",
      },
      {
        name: "Tree Birth Defense",
        description:
          "This skill makes Shimura Danzo (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Shimura Danzo (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/NVqN7zo.png",
      },
      {
        name: "Izanagi's Sharingan",
        description:
          "Danzo starts the game with 10 Sharingans. Each time Danzo uses 'Izanagi', he will consume 2 Sharingan to ignore all damage dealt to him until 2 new harmful skill are used on him. If Danzo runs out of Sharingans, 'Izanagi' will be replaced by 'Reverse Four Symbols Seal' permanently.",
        descriptionBR:
          "Danzo starts the game with 10 Sharingans. Each time Danzo uses 'Izanagi', he will consume 2 Sharingan to ignore all damage dealt to him until 2 new harmful skill are used on him. If Danzo runs out of Sharingans, 'Izanagi' will be replaced by 'Reverse Four Symbols Seal' permanently.",
        energy: [],
        classes: ["Mental", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/5r8Voh1.png",
      },
      {
        name: "Stolen Kotoamatsukami",
        description:
          "The next time one enemy uses a new harmful skill, they will be countered. The following 2 turns, that enemy will have their harmful skills stunned and this skill will be replaced by the countered skill and will have no cost. This skill cannot be countered, reflected and is invisible.",
        descriptionBR:
          "The next time one enemy uses a new harmful skill, they will be countered. The following 2 turns, that enemy will have their harmful skills stunned and this skill will be replaced by the countered skill and will have no cost. This skill cannot be countered, reflected and is invisible.",
        energy: ["Blood", "Gen", "Random"],
        classes: ["Mental", "Ranged", "Unique", "Instant"],
        cooldown: 3,
        url: "https://i.imgur.com/g5uwng1.png",
      },
      {
        name: "Reverse Four Symbols Seal",
        description:
          "Danzo releases 4 symbol from his blood and forms a large black sphere around him, sealing all enemies and dealing 20 affliction damage to them. Afterwards, Danzo takes 10 affliction damage.",
        descriptionBR:
          "Danzo releases 4 symbol from his blood and forms a large black sphere around him, sealing all enemies and dealing 20 affliction damage to them. Afterwards, Danzo takes 10 affliction damage.",
        energy: ["Blood"],
        classes: ["Chakra", "Affliction", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/esli7Zk.png",
      },
    ],
  },
  {
    name: "Chiyo (S)",
    url: "https://i.imgur.com/WNPtn7n.jpg",
    description:
      "The grandmother of Sasori(s) and elder ninja of the Sand Village, Chiyo is a well known and accomplished puppet master and builder.",
    descriptionBR:
      "The grandmother of Sasori(s) and elder ninja of the Sand Village, Chiyo is a well known and accomplished puppet master and builder.",
    skills: [
      {
        name: "White Secret Attack Taijutsu Rampage",
        description:
          "Chiyo (S) directs some of her puppets to wreak havoc upon the battlefield dealing 20 damage to one random enemy for 2 turns.",
        descriptionBR:
          "Chiyo (S) directs some of her puppets to wreak havoc upon the battlefield dealing 20 damage to one random enemy for 2 turns.",
        energy: ["Random"],
        classes: ["Physical", "Action", "Ranged", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/3iDBLhW.jpg",
      },
      {
        name: "Sanbou Kyuukai",
        description:
          "This skill does 20 piercing damage to one enemy and that enemy has their physical or ranged skills stunned for 1 turn. This skill ignores invulnerability.",
        descriptionBR:
          "This skill does 20 piercing damage to one enemy and that enemy has their physical or ranged skills stunned for 1 turn. This skill ignores invulnerability.",
        energy: ["Random", "Random"],
        classes: ["Chakra", "Instant", "Ranged", "Unique"],
        cooldown: 2,
        url: "https://i.imgur.com/61Jr2Nq.jpg",
      },
      {
        name: "Ally Puppetry",
        description:
          "Chiyo (S) controls one ally like a puppet. That ally gains 25% damage reduction for 2 turns. During this time their melee skills will deal 5 more damage and their new damage skills will deal piercing damage.",
        descriptionBR:
          "Chiyo (S) controls one ally like a puppet. That ally gains 25% damage reduction for 2 turns. During this time their melee skills will deal 5 more damage and their new damage skills will deal piercing damage.",
        energy: ["Random"],
        classes: ["Chakra", "Control", "Unique"],
        cooldown: 2,
        url: "https://i.imgur.com/op5ywuv.jpg",
      },
      {
        name: "Chakra Shield",
        description:
          "This skill makes Chiyo (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Chiyo (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Chakra", "Instant", "Unique"],
        cooldown: 4,
        url: "https://i.imgur.com/FCTthAl.jpg",
      },
    ],
  },
  {
    name: "Kankuro (S)",
    url: "https://i.imgur.com/rfyVSqz.jpg",
    description:
      "In the last couple years Kankuro(s) has become a Jounin and has created a new puppet. He is now able to harness three puppets at once and is a more versatile combatant.",
    descriptionBR:
      "In the last couple years Kankuro(s) has become a Jounin and has created a new puppet. He is now able to harness three puppets at once and is a more versatile combatant.",
    skills: [
      {
        name: "Kuroari Trap",
        description:
          "Kankuro(s) uses his puppet Kuroari to trap an enemy, countering any offensive skill they use for 1 turn. If countered that enemy will take 100% more damage from Karasu Knives the following turn. This skill is invisible until triggered.",
        descriptionBR:
          "Kankuro(s) uses his puppet Kuroari to trap an enemy, countering any offensive skill they use for 1 turn. If countered that enemy will take 100% more damage from Karasu Knives the following turn. This skill is invisible until triggered.",
        energy: ["Random"],
        classes: ["Physical", "Ranged", "Action"],
        cooldown: 2,
        url: "https://i.imgur.com/87yPHF9.jpg",
      },
      {
        name: "Karasu Knives",
        description:
          "Kankuro(s) uses Karasu's poisoned knives to attack an enemy dealing 15 damage to them and that enemy will take 10 affliction damage the following turn.*",
        descriptionBR:
          "Kankuro(s) uses Karasu's poisoned knives to attack an enemy dealing 15 damage to them and that enemy will take 10 affliction damage the following turn.*",
        energy: ["Random"],
        classes: ["Physical", "Ranged", "Instant", "Affliction*"],
        cooldown: 1,
        url: "https://i.imgur.com/U9xQ2do.jpg",
      },
      {
        name: "Sanshouo Shield",
        description:
          "Kankuro uses Sanshouo to block enemy attacks. For 3 turns Kankuro(s) and his allies gain 25% damage reduction and are immune to enemy affliction damage.",
        descriptionBR:
          "Kankuro uses Sanshouo to block enemy attacks. For 3 turns Kankuro(s) and his allies gain 25% damage reduction and are immune to enemy affliction damage.",
        energy: ["Random", "Random"],
        classes: ["Physical", "Instant"],
        cooldown: 3,
        url: "https://i.imgur.com/Is6E0I1.jpg",
      },
      {
        name: "Puppet Distraction",
        description: "This skill makes Kankuro(s) invulnerable for 1 turn.",
        descriptionBR: "This skill makes Kankuro(s) invulnerable for 1 turn.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/iHmY63E.jpg",
      },
      {
        name: "Salamander Puppet",
        description:
          "Kankuro (S) uses Salamander Puppet on 1 ally or himself. The target of this skill will have 50% unpierceable damage reduction for 1 turn. This skill is invisible.",
        descriptionBR:
          "Kankuro (S) uses Salamander Puppet on 1 ally or himself. The target of this skill will have 50% unpierceable damage reduction for 1 turn. This skill is invisible.",
        energy: [],
        classes: ["Physical", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/S0yQdqY.png",
      },
    ],
  },
  {
    name: "Kazekage Gaara (S)",
    url: "https://i.imgur.com/TFYxtG7.jpg",
    description:
      "After a few short years and much soul-searching, Gaara(s) has risen to be his village's Kazekage. Rather than destroying others he now protects those he cares about to prove his existence.",
    descriptionBR:
      "After a few short years and much soul-searching, Gaara(s) has risen to be his village's Kazekage. Rather than destroying others he now protects those he cares about to prove his existence.",
    skills: [
      {
        name: "Desert Missile",
        description:
          "Using thin ropes of sand Kazekage Gaara hunts down one enemy dealing 8 piercing damage to them. New skills used by the target of this skill will deal 10 less damage for 1 turn.",
        descriptionBR:
          "Using thin ropes of sand Kazekage Gaara hunts down one enemy dealing 8 piercing damage to them. New skills used by the target of this skill will deal 10 less damage for 1 turn.",
        energy: ["Blood"],
        classes: ["Physical", "Instant", "Ranged"],
        cooldown: 0,
        url: "https://i.imgur.com/ei2OVZC.jpg",
      },
      {
        name: "Desert Prison",
        description:
          "Kazekage Gaara entraps and crushes one enemy in a giant maw of sand stunning their physical and chakra skills for 1 turn and dealing 10 piercing damage to them.",
        descriptionBR:
          "Kazekage Gaara entraps and crushes one enemy in a giant maw of sand stunning their physical and chakra skills for 1 turn and dealing 10 piercing damage to them.",
        energy: ["Blood", "Random"],
        classes: ["Physical", "Instant", "Ranged"],
        cooldown: 1,
        url: "https://i.imgur.com/EpS0551.jpg",
      },
      {
        name: "Sand Summoning",
        description:
          "Gaara and his allies gain 10 destructible defense permanently. When first used, Gaara's skills will deal 300% damage. On the second use, Gaara's skills will deal 500% damage. This skill can only be used twice.",
        descriptionBR:
          "Gaara and his allies gain 10 destructible defense permanently. When first used, Gaara's skills will deal 300% damage. On the second use, Gaara's skills will deal 500% damage. This skill can only be used twice.",
        energy: ["Random"],
        classes: ["Chakra", "Instant", "Unique"],
        cooldown: 2,
        url: "https://i.imgur.com/Q0SnYi5.jpg",
      },
      {
        name: "Sand Sphere",
        description:
          "This skill makes Kazekage Gaara (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Kazekage Gaara (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant", "Unique"],
        cooldown: 4,
        url: "https://i.imgur.com/EW7NcIO.jpg",
      },
    ],
  },
  {
    name: "Temari (S)",
    url: "https://i.imgur.com/evlq0nT.jpeg",
    description:
      "Temari (S) has grown over the years. She is now a Jounin as well as the sister of Kankuro and Gaara. Temari is also the Hidden Sand Village's ambassador to the Hidden Leaf Village.",
    descriptionBR:
      "Temari (S) has grown over the years. She is now a Jounin as well as the sister of Kankuro and Gaara. Temari is also the Hidden Sand Village's ambassador to the Hidden Leaf Village.",
    skills: [
      {
        name: "Fan Increase Moon",
        description:
          "Temari opens her fan and reveals a moon. Temari gains 5 points of damage reduction and increase her damage by 5 permanently. This skill stacks and can only be used 3 times.",
        descriptionBR:
          "Temari opens her fan and reveals a moon. Temari gains 5 points of damage reduction and increase her damage by 5 permanently. This skill stacks and can only be used 3 times.",
        energy: [],
        classes: ["Physical", "Instant", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/zSKwLYI.jpeg",
      },
      {
        name: "Wind Scythe",
        description:
          "Using Wind Scythe Temari (S) deals 20 piercing damage to one enemy.",
        descriptionBR:
          "Using Wind Scythe Temari (S) deals 20 piercing damage to one enemy.",
        energy: ["Nin"],
        classes: ["Physical", "Ranged", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/rPoOx6o.jpeg",
      },
      {
        name: "Immense Cutting Whirlwind",
        description:
          "Temari creates an immense whirlwind in the battlefield, dealing 20 damage to all enemies and lowering their non-affliction damage by 5 for 1 turn.",
        descriptionBR:
          "Temari creates an immense whirlwind in the battlefield, dealing 20 damage to all enemies and lowering their non-affliction damage by 5 for 1 turn.",
        energy: ["Nin", "Random"],
        classes: ["Physical", "Ranged", "Instant"],
        cooldown: 2,
        url: "https://i.imgur.com/5ZKrUxz.png",
      },
      {
        name: "Fan Offensive Defense",
        description:
          "This skill makes Temari (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Temari (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/EmNpGUS.jpeg",
      },
    ],
  },
  {
    name: "Maki (S)",
    url: "https://i.imgur.com/7Aokrcx.png",
    description:
      "Maki is a kunoichi of the Hidden Sand Village and the student of Pakura. Maki is also a member of the Allied Shinobi Forces' Sealing Squad. Original Pics by: Pain_Alagoano",
    descriptionBR:
      "Maki is a kunoichi of the Hidden Sand Village and the student of Pakura. Maki is also a member of the Allied Shinobi Forces' Sealing Squad. Original Pics by: Pain_Alagoano",
    skills: [
      {
        name: "Cloth Binding",
        description:
          "Maki deals 20 piercing damage to one enemy and stuns their harmful skills. During 'Cloth Sealing', this skill will deal an additional 20 damage. During 'Weighted Net Scroll', this skill will deal an additional 10 damage.",
        descriptionBR:
          "Maki deals 20 piercing damage to one enemy and stuns their harmful skills. During 'Cloth Sealing', this skill will deal an additional 20 damage. During 'Weighted Net Scroll', this skill will deal an additional 10 damage.",
        energy: ["Gen"],
        classes: ["Physical", "Ranged", "Instant", "Harmful"],
        cooldown: 0,
        url: "https://i.imgur.com/WKp753c.png",
      },
      {
        name: "Cloth Sealing",
        description:
          "Maki uses a giant roll of cloth to seal one enemy, stunning their physical and chakra skills for 1 turn. This skill ignores invulnerability.",
        descriptionBR:
          "Maki uses a giant roll of cloth to seal one enemy, stunning their physical and chakra skills for 1 turn. This skill ignores invulnerability.",
        energy: ["Nin"],
        classes: ["Physical", "Ranged", "Instant", "Harmful"],
        cooldown: 1,
        url: "https://i.imgur.com/xCx3O1v.png",
      },
      {
        name: "Weighted Net Scroll",
        description:
          "Maki grants herself 50% damage reduction for 1 turn. During this time, if an enemy uses a new harmful skill on her, they will have the damage of their skills reduced by 50% for 1 turn. This skill is invisible.",
        descriptionBR:
          "Maki grants herself 50% damage reduction for 1 turn. During this time, if an enemy uses a new harmful skill on her, they will have the damage of their skills reduced by 50% for 1 turn. This skill is invisible.",
        energy: ["Random"],
        classes: ["Physical", "Instant", "Helpful"],
        cooldown: 2,
        url: "https://i.imgur.com/ZDcqtWH.png",
      },
      {
        name: "Cloth Shelter",
        description: "This skill makes Maki (S) invulnerable for 1 turn.",
        descriptionBR: "This skill makes Maki (S) invulnerable for 1 turn.",
        energy: ["Random"],
        classes: ["Physical", "Instant", "Helpful"],
        cooldown: 4,
        url: "https://i.imgur.com/QQ3JUKI.png",
      },
    ],
  },
  {
    name: "Akatsuchi (S)",
    url: "https://i.imgur.com/L2q69Y1.png",
    description:
      "Akatsuchi (S) is a shinobi of the Hidden Rock Village. Akatsuchi is a powerful shinobi who uses brute strength and earth style jutsus in combat.",
    descriptionBR:
      "Akatsuchi (S) is a shinobi of the Hidden Rock Village. Akatsuchi is a powerful shinobi who uses brute strength and earth style jutsus in combat.",
    skills: [
      {
        name: "High Speed Assault",
        description:
          "Using High Speed Assault Akatsuchi (S) deals 25 damage to 1 enemy. The following 3 turns, this skill will cost 1 additional random chakra and will deal 15 additional damage.",
        descriptionBR:
          "Using High Speed Assault Akatsuchi (S) deals 25 damage to 1 enemy. The following 3 turns, this skill will cost 1 additional random chakra and will deal 15 additional damage.",
        energy: ["Tai"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/2exPeCE.png",
      },
      {
        name: "Golem",
        description:
          "Akatsuchi (S) uses Golem on all enemies dealing 15 damage to them. The following 3 turns, this skill will cost 1 additional random chakra and will deal 10 additional damage.",
        descriptionBR:
          "Akatsuchi (S) uses Golem on all enemies dealing 15 damage to them. The following 3 turns, this skill will cost 1 additional random chakra and will deal 10 additional damage.",
        energy: ["Gen"],
        classes: ["Chakra", "Ranged", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/VKb4HTb.png",
      },
      {
        name: "Golem Chakra Devour",
        description:
          "Akatsuchi's Golem devours one enemy's chakra, dealing 10 piercing damage to that enemy. The following 3 turns, Akatsuchi's skills will cost 1 less random chakra. When this skill is used, Akatsuchi gains 15 destructible defense for each stack of 'Golem' and 'High Speed Assault' active on him.",
        descriptionBR:
          "Akatsuchi's Golem devours one enemy's chakra, dealing 10 piercing damage to that enemy. The following 3 turns, Akatsuchi's skills will cost 1 less random chakra. When this skill is used, Akatsuchi gains 15 destructible defense for each stack of 'Golem' and 'High Speed Assault' active on him.",
        energy: ["Random"],
        classes: ["Chakra", "Ranged", "Instant"],
        cooldown: 3,
        url: "https://i.imgur.com/uzTnqOh.png",
      },
      {
        name: "Aerial Retreat",
        description: "This skill makes Akatsuchi (S) invulnerable for 1 turn.",
        descriptionBR:
          "This skill makes Akatsuchi (S) invulnerable for 1 turn.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/tkpVAuU.png",
      },
    ],
  },
  {
    name: "Kurotsuchi (S)",
    url: "https://i.imgur.com/yNQx9FH.jpg",
    description:
      "Kurotsuchi (S) is a shinobi of the Hidden Rock Village and the Partner of Akatsuchi. She is also the granddaughter of the third Tsuchikage.",
    descriptionBR:
      "Kurotsuchi (S) is a shinobi of the Hidden Rock Village and the Partner of Akatsuchi. She is also the granddaughter of the third Tsuchikage.",
    skills: [
      {
        name: "Lava Quicklime",
        description:
          "Kurotsuchi uses Lava Release to create a quicklime to attack one enemy, dealing 25 damage to them. For 1 turn, Kurotsuchi gains 50% damage reduction and 'Water Trumpet' will stun for 1 additional turn.",
        descriptionBR:
          "Kurotsuchi uses Lava Release to create a quicklime to attack one enemy, dealing 25 damage to them. For 1 turn, Kurotsuchi gains 50% damage reduction and 'Water Trumpet' will stun for 1 additional turn.",
        energy: ["Blood"],
        classes: ["Chakra", "Ranged", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/Zfq46Rm.jpg",
      },
      {
        name: "Water Trumpet",
        description:
          "Using Water Release technique, Kurotsuchi deals 25 damage to one enemy and stuns their physical and chakra skills for 0 turns. For 1 turn, 'Lava Quicklime' will deal 5 additional damage.",
        descriptionBR:
          "Using Water Release technique, Kurotsuchi deals 25 damage to one enemy and stuns their physical and chakra skills for 0 turns. For 1 turn, 'Lava Quicklime' will deal 5 additional damage.",
        energy: ["Nin"],
        classes: ["Chakra", "Ranged", "Control"],
        cooldown: 0,
        url: "https://i.imgur.com/LuC3dSP.jpg",
      },
      {
        name: "Earth Spears",
        description:
          "Kurotsuchi uses Earth Spears, dealing 20 damage to all enemies. For 1 turn, all enemies affected by this skill will be invulnerable to friendly skills.",
        descriptionBR:
          "Kurotsuchi uses Earth Spears, dealing 20 damage to all enemies. For 1 turn, all enemies affected by this skill will be invulnerable to friendly skills.",
        energy: ["Blood", "Random"],
        classes: ["Physical", "Ranged", "Instant", "Unique"],
        cooldown: 2,
        url: "https://i.imgur.com/i1GD3JE.jpg",
      },
      {
        name: "Evasiveness",
        description:
          "This skill makes Kurotsuchi (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Kurotsuchi (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/gKSbZ92.jpg",
      },
    ],
  },
  {
    name: "Nii Yugito (S)",
    url: "https://i.imgur.com/dQ1My4C.jpeg",
    description:
      "A kunoichi from Kumogakure, Nii Yugito holds within her the two-tailed beast. She has full control over the bijuu Nibi, and is able to transform into it and use its powers to fight.",
    descriptionBR:
      "A kunoichi from Kumogakure, Nii Yugito holds within her the two-tailed beast. She has full control over the bijuu Nibi, and is able to transform into it and use its powers to fight.",
    skills: [
      {
        name: "Nibi Transformation",
        description:
          "Yugito unlocks the power of her bijuu. She gains 50% damage reduction and can use both Spectral Fireball and Claw Swipe. This skill is permanent. While active, this skill will have a cooldown of 2 and can be used to make both 'Spectral Fireball' and 'Claw Swipe' cost random chakra for 1 turn.",
        descriptionBR:
          "Yugito unlocks the power of her bijuu. She gains 50% damage reduction and can use both Spectral Fireball and Claw Swipe. This skill is permanent. While active, this skill will have a cooldown of 2 and can be used to make both 'Spectral Fireball' and 'Claw Swipe' cost random chakra for 1 turn.",
        energy: [],
        classes: ["Chakra", "Unique", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/7ljHzHl.jpeg",
      },
      {
        name: "Spectral Fireball",
        description:
          "By spitting a large fireball from her mouth, Yugito deals 30 damage to one enemy. That enemy will deal 10 less damage for 1 turn. Each time this skill is used it will deal 5 more damage (this effect stacks).",
        descriptionBR:
          "By spitting a large fireball from her mouth, Yugito deals 30 damage to one enemy. That enemy will deal 10 less damage for 1 turn. Each time this skill is used it will deal 5 more damage (this effect stacks).",
        energy: ["Blood", "Random"],
        classes: ["Chakra", "Ranged", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/rXvXymc.jpeg",
      },
      {
        name: "Claw Swipe",
        description:
          "Yugito takes a huge swipe of her claw dealing 15 damage to one enemy and 5 damage to all other enemies. This skill will deal 5 more damage each use (this effect stacks).",
        descriptionBR:
          "Yugito takes a huge swipe of her claw dealing 15 damage to one enemy and 5 damage to all other enemies. This skill will deal 5 more damage each use (this effect stacks).",
        energy: ["Blood"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/NxCHg7s.jpeg",
      },
      {
        name: "Rage",
        description: "This skill make Yugito Ni invulnerable for 1 turn.",
        descriptionBR: "This skill make Yugito Ni invulnerable for 1 turn.",
        energy: ["Random"],
        classes: ["Mental", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/F2LhVVO.jpeg",
      },
    ],
  },
  {
    name: "Killer Bee (S)",
    url: "https://i.imgur.com/LXesv7k.jpg",
    description:
      "Killer Bee (S) is the jinchuriki from Kumogakure. Bee (S) is referred to as the hero of Kumogakure and possess immense physical strength as well as being an expert swordsmen.",
    descriptionBR:
      "Killer Bee (S) is the jinchuriki from Kumogakure. Bee (S) is referred to as the hero of Kumogakure and possess immense physical strength as well as being an expert swordsmen.",
    skills: [
      {
        name: "Kenjutsu",
        description:
          "Killer Bee (S) uses seven swords to give him an offensive defense. Killer Bee (S) will deal 15 piercing damage to any enemy that uses a new melee skill on him for 4 turns. The following 4 turns, Buzz Saw is improved and deal 10 more damage and this skill is replaced by Final Kenjutsu.",
        descriptionBR:
          "Killer Bee (S) uses seven swords to give him an offensive defense. Killer Bee (S) will deal 15 piercing damage to any enemy that uses a new melee skill on him for 4 turns. The following 4 turns, Buzz Saw is improved and deal 10 more damage and this skill is replaced by Final Kenjutsu.",
        energy: ["Random"],
        classes: ["Physical", "Melee", "Instant", "Unique"],
        cooldown: 4,
        url: "https://i.imgur.com/VFAbcCN.jpg",
      },
      {
        name: "Buzz Saw",
        description:
          "Killer Bee (S) uses Buzz Saw on one enemy dealing 20 piercing damage.",
        descriptionBR:
          "Killer Bee (S) uses Buzz Saw on one enemy dealing 20 piercing damage.",
        energy: ["Tai"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/i8ywDo2.jpg",
      },
      {
        name: "Chakra Stream",
        description:
          "Killer Bee (S) uses Chakra Stream and will counter the first enemy physical or chakra skills used on him or an ally for 1 turn. The countered enemy will be dealt 20 piercing damage. This skill is invisible.",
        descriptionBR:
          "Killer Bee (S) uses Chakra Stream and will counter the first enemy physical or chakra skills used on him or an ally for 1 turn. The countered enemy will be dealt 20 piercing damage. This skill is invisible.",
        energy: ["Nin"],
        classes: ["Chakra", "Ranged", "Instant"],
        cooldown: 2,
        url: "https://i.imgur.com/9PMa58H.jpg",
      },
      {
        name: "Strong Defense",
        description: "This skill makes Killer Bee (S) invulnerable for 1 turn.",
        descriptionBR:
          "This skill makes Killer Bee (S) invulnerable for 1 turn.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/c8mUlYM.jpg",
      },
      {
        name: "Final Kenjutsu",
        description:
          "Killer Bee (S) executes an enemy with his seven swords, dealing 35 piercing damage to them. This skill ignores invulnerability and can only be used on an enemy that took damage from Killer Bee's other skills on the last turn.",
        descriptionBR:
          "Killer Bee (S) executes an enemy with his seven swords, dealing 35 piercing damage to them. This skill ignores invulnerability and can only be used on an enemy that took damage from Killer Bee's other skills on the last turn.",
        energy: ["Random", "Random"],
        classes: ["Physical", "Melee", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/5cPNd9Q.png",
      },
    ],
  },
  {
    name: "Darui (S)",
    url: "https://i.imgur.com/4zQxemJ.png",
    description:
      "Darui (S) is a jounin of the Hidden Cloud Village and the right hand of the Yondaime Raikage. Despite his appearance Darui (S) is a formidable shinobi.",
    descriptionBR:
      "Darui (S) is a jounin of the Hidden Cloud Village and the right hand of the Yondaime Raikage. Despite his appearance Darui (S) is a formidable shinobi.",
    skills: [
      {
        name: "Laser Circus",
        description:
          "Darius creates several beams and shoots his opponents, stunning one enemy's harmful skills for 1 turn. Afterwards, all other enemies take 15 piercing damage.",
        descriptionBR:
          "Darius creates several beams and shoots his opponents, stunning one enemy's harmful skills for 1 turn. Afterwards, all other enemies take 15 piercing damage.",
        energy: ["Nin"],
        classes: ["Chakra", "Ranged", "Instant", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/gnwtJrI.png",
      },
      {
        name: "Electric Water Encampment Wall",
        description:
          "Darui targets all enemies for 1 turn, any enemy that uses a new harmful skill will take 5 affliction damage. The following turn, all enemies affected by this skill will recelve 5 additional damage from 'Laser Circus' and 'Black Panther Lightning'. This skill cannot be countered.",
        descriptionBR:
          "Darui targets all enemies for 1 turn, any enemy that uses a new harmful skill will take 5 affliction damage. The following turn, all enemies affected by this skill will recelve 5 additional damage from 'Laser Circus' and 'Black Panther Lightning'. This skill cannot be countered.",
        energy: [],
        classes: ["Chakra", "Ranged", "Instant", "Unique", "Affliction"],
        cooldown: 1,
        url: "https://i.imgur.com/arWmbIl.png",
      },
      {
        name: "Black Panther Lightning",
        description:
          "Darui generates a black panther lightning from his body and releases it at one enemy, dealing 35 piercing damage to them. For 1 turn, that enemy's skills will have 2 additional cooldown. This skill ignores invulnerability.",
        descriptionBR:
          "Darui generates a black panther lightning from his body and releases it at one enemy, dealing 35 piercing damage to them. For 1 turn, that enemy's skills will have 2 additional cooldown. This skill ignores invulnerability.",
        energy: ["Blood", "Random"],
        classes: ["Chakra", "Ranged", "Instant", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/lbXhosJ.png",
      },
      {
        name: "Cleaver Sword Defense",
        description:
          "This skill makes Darui (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Darui (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/GoWroAB.png",
      },
    ],
  },
  {
    name: "Omoi (S)",
    url: "https://i.imgur.com/C3s2jdh.png",
    description:
      "One of the ninjas in the cloud village, and one of the biggest swordsmen in the village. Omoi is usually concerned, but at the same time, skilled and apprehensive. In addition to good fencing, Omoi is able to execute strikes with the lightning element.",
    descriptionBR:
      "One of the ninjas in the cloud village, and one of the biggest swordsmen in the village. Omoi is usually concerned, but at the same time, skilled and apprehensive. In addition to good fencing, Omoi is able to execute strikes with the lightning element.",
    skills: [
      {
        name: "Crescent Moon Beheading",
        description:
          "By using his sword to strike the enemy and liberate his allies, Omoi deals 20 piercing damage to one enemy and makes them unable to become invulnerable for 1 turn. Afterwards, all Omoi allies will have all harmful damaging skills removed from them.",
        descriptionBR:
          "By using his sword to strike the enemy and liberate his allies, Omoi deals 20 piercing damage to one enemy and makes them unable to become invulnerable for 1 turn. Afterwards, all Omoi allies will have all harmful damaging skills removed from them.",
        energy: ["Gen"],
        classes: ["Physical", "Melee", "Instant", "Harmful"],
        cooldown: 1,
        url: "https://imgur.com/NSp1GYk.jpg",
      },
      {
        name: "Lightning Chakra Stab",
        description:
          "Omoi imbues lightning chakra in his sword to immobilize one enemy just in one stab, dealing them 20 piercing damage and stunning their helpful skills. For 1 turn that enemy is also invulnerable to new helpful skills.",
        descriptionBR:
          "Omoi imbues lightning chakra in his sword to immobilize one enemy just in one stab, dealing them 20 piercing damage and stunning their helpful skills. For 1 turn that enemy is also invulnerable to new helpful skills.",
        energy: ["Nin"],
        classes: ["Chakra", "Melee", "Instant", "Harmful"],
        cooldown: 1,
        url: "https://imgur.com/NekhgvG.jpg",
      },
      {
        name: "Crescent Moon Reverse Beheading",
        description:
          "Omoi uses his reactive kenjutsu to counterattack one enemy. If that enemy uses a new harmful damaging skill, they will be countered, will take 20 piercing damage and will have their physical and ranged skills stunned. The target of this skill is invisible.",
        descriptionBR:
          "Omoi uses his reactive kenjutsu to counterattack one enemy. If that enemy uses a new harmful damaging skill, they will be countered, will take 20 piercing damage and will have their physical and ranged skills stunned. The target of this skill is invisible.",
        energy: ["Tai"],
        classes: ["Physical", "Melee", "Instant", "Harmful"],
        cooldown: 1,
        url: "https://imgur.com/kHt1Ptt.jpg",
      },
      {
        name: "Guard Position",
        description: "This skill makes Omoi (S) invulnerable for 1 turn.",
        descriptionBR: "This skill makes Omoi (S) invulnerable for 1 turn.",
        energy: ["Random"],
        classes: ["Physical", "Instant", "Helpful"],
        cooldown: 4,
        url: "https://imgur.com/pRn7sNb.jpg",
      },
    ],
  },
  {
    name: "Shee (S)",
    url: "https://i.imgur.com/RFhdpoD.jpeg",
    description:
      "Shee (S) is a jounin of the Hidden Cloud Village and a sensor. Shee is one of the Raikage's most reliable shinobi.",
    descriptionBR:
      "Shee (S) is a jounin of the Hidden Cloud Village and a sensor. Shee is one of the Raikage's most reliable shinobi.",
    skills: [
      {
        name: "Sensor Awareness",
        description:
          "Shee uses his sensor to dectect one enemy's move. For 1 turn, if that enemy uses a new skill they will take 20 piercing damage. During this time, if a new skill or action is used on Shee, he will become invulnerable for 1 turn. The target of this skill is invisible.",
        descriptionBR:
          "Shee uses his sensor to dectect one enemy's move. For 1 turn, if that enemy uses a new skill they will take 20 piercing damage. During this time, if a new skill or action is used on Shee, he will become invulnerable for 1 turn. The target of this skill is invisible.",
        energy: ["Random"],
        classes: ["Mental", "Ranged", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/SMnft1l.jpeg",
      },
      {
        name: "Ally Heal",
        description: "Using Ally Heal Shee (S) heals an ally for 25 health.",
        descriptionBR: "Using Ally Heal Shee (S) heals an ally for 25 health.",
        energy: ["Nin"],
        classes: ["Chakra", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/aJyDdNp.jpeg",
      },
      {
        name: "Lightning Illusion Flash",
        description:
          "Shee (S) uses Lighting Illusion Flash on 1 enemy dealing 35 damage. That enemy will be invulnerable to new friendly skills for 1 turn.",
        descriptionBR:
          "Shee (S) uses Lighting Illusion Flash on 1 enemy dealing 35 damage. That enemy will be invulnerable to new friendly skills for 1 turn.",
        energy: ["Gen", "Random"],
        classes: ["Mental", "Ranged", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/wfXP1XU.jpeg",
      },
      {
        name: "Defensive Reaction",
        description: "This skill makes Shee (S) invulnerable for 1 turn.",
        descriptionBR: "This skill makes Shee (S) invulnerable for 1 turn.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/5LT9gGR.jpeg",
      },
    ],
  },
  {
    name: "Ao (S)",
    url: "https://i.imgur.com/8eZpgiw.jpg",
    description:
      "Ao (S) is a hunter-nin of the Hidden Mist Village and a skilled sensor. Ao is a veteran shinobi who has been in many battles, one of his spoils of war is the byakugan he possesses.",
    descriptionBR:
      "Ao (S) is a hunter-nin of the Hidden Mist Village and a skilled sensor. Ao is a veteran shinobi who has been in many battles, one of his spoils of war is the byakugan he possesses.",
    skills: [
      {
        name: "Stolen Byakugan",
        description:
          "Ao uses his Byakugan on an enemy. For 3 turns, any new invisible skill used by that enemy will be visible and each time they use a new skill they will take 50% more damage from ranged skills for 1 turn. This skill is invisible and cannot be countered or reflected.",
        descriptionBR:
          "Ao uses his Byakugan on an enemy. For 3 turns, any new invisible skill used by that enemy will be visible and each time they use a new skill they will take 50% more damage from ranged skills for 1 turn. This skill is invisible and cannot be countered or reflected.",
        energy: ["Random"],
        classes: ["Mental", "Instant", "Ranged"],
        cooldown: 2,
        url: "https://i.imgur.com/SE4MQCu.jpg",
      },
      {
        name: "Sensing Barrier",
        description:
          "Using sensing barrier, Ao deals 20 damage to one enemy. The following turn, that enemy will receive 5 more damage from this skill. During this time, they will be unable to reduce damage or become invulnerable.",
        descriptionBR:
          "Using sensing barrier, Ao deals 20 damage to one enemy. The following turn, that enemy will receive 5 more damage from this skill. During this time, they will be unable to reduce damage or become invulnerable.",
        energy: ["Blood"],
        classes: ["Mental", "Ranged", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/ij8B1SF.jpg",
      },
      {
        name: "Byakugan Seal",
        description:
          "For 1 turn, the first non mental skill used on Ao (S) will be countered. This skill is invisible the first time it is used and may only be used once. After the following 2 turns, this skill will be re-applied. During this time, if 'Sensing Barrier' is used this skill will be instantly re-applied.",
        descriptionBR:
          "For 1 turn, the first non mental skill used on Ao (S) will be countered. This skill is invisible the first time it is used and may only be used once. After the following 2 turns, this skill will be re-applied. During this time, if 'Sensing Barrier' is used this skill will be instantly re-applied.",
        energy: ["Blood"],
        classes: ["Chakra", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/XNSUxsF.jpg",
      },
      {
        name: "Reactionary Defense",
        description:
          "This skill makes Ao (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Ao (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/UQa0dlh.jpg",
      },
    ],
  },
  {
    name: "Chojuro (S)",
    url: "https://i.imgur.com/WMSVj5I.jpg",
    description:
      "Chojuro (S) confidence is building as the war rages one. The longer it lasts the stronger Chojuro (S) becomes.",
    descriptionBR:
      "Chojuro (S) confidence is building as the war rages one. The longer it lasts the stronger Chojuro (S) becomes.",
    skills: [
      {
        name: "Hiramekarei Strider",
        description:
          "Using Hiramekarei Strider, Chojuro destroys all enemies' destructible defense and damage reduction and then deals 10 piercing damage to them. The following 2 turns, this skill will cost 1 ninjutsu chakra and may be used to deal 20 piercing damage to one enemy.",
        descriptionBR:
          "Using Hiramekarei Strider, Chojuro destroys all enemies' destructible defense and damage reduction and then deals 10 piercing damage to them. The following 2 turns, this skill will cost 1 ninjutsu chakra and may be used to deal 20 piercing damage to one enemy.",
        energy: ["Random"],
        classes: ["Physical", "Ranged", "Unique", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/Nh30zKh.jpg",
      },
      {
        name: "Hiramekarei Hammer",
        description:
          "Chojuro (S) creates a hammer of chakra to attack one enemy, dealing 40 piercing damage to them. If that enemy has any destructible defense or damage reduction, this skill will apply 'Hiramekarei Strider' on them before dealing damage.",
        descriptionBR:
          "Chojuro (S) creates a hammer of chakra to attack one enemy, dealing 40 piercing damage to them. If that enemy has any destructible defense or damage reduction, this skill will apply 'Hiramekarei Strider' on them before dealing damage.",
        energy: ["Tai", "Nin"],
        classes: ["Physical", "Melee", "Unique", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/CSZCwGo.jpg",
      },
      {
        name: "Hiramekarei Kenjutsu",
        description:
          "For 1 turn, all enemy physical or mental skills used on Chojuro (S) will be countered. Any countered enemy will permanently take 10 additional damage from Chojuro (S)'s skills.",
        descriptionBR:
          "For 1 turn, all enemy physical or mental skills used on Chojuro (S) will be countered. Any countered enemy will permanently take 10 additional damage from Chojuro (S)'s skills.",
        energy: ["Tai"],
        classes: ["Physical", "Melee", "Unique", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/Xei0Rhg.jpg",
      },
      {
        name: "Hiramekarei Defense",
        description:
          "This skill makes Chojuro (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Chojuro (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/by7vCiX.jpg",
      },
    ],
  },
  {
    name: "Four Tail Kyuubi Naruto (S)",
    url: "https://i.imgur.com/aoTWUJs.jpg",
    description:
      "Naruto(s), after giving into his rage and manifesting a fourth tail ceases to be himself. In this state Naruto(s) becomes a mindless being of rage and destruction but the price is his own life.",
    descriptionBR:
      "Naruto(s), after giving into his rage and manifesting a fourth tail ceases to be himself. In this state Naruto(s) becomes a mindless being of rage and destruction but the price is his own life.",
    skills: [
      {
        name: "Four Tails Transformation",
        description:
          "Naruto gains 15 points of damage reduction and 15 points of destructible defense. He takes 5 affliction damage each turn. He ignores heals and stuns. Naruto can use his other skills while this skill is in use. This skill may be used once and is permanent.",
        descriptionBR:
          "Naruto gains 15 points of damage reduction and 15 points of destructible defense. He takes 5 affliction damage each turn. He ignores heals and stuns. Naruto can use his other skills while this skill is in use. This skill may be used once and is permanent.",
        energy: ["Random"],
        classes: ["Chakra", "Instant", "Unique", "Affliction"],
        cooldown: 0,
        url: "https://i.imgur.com/i5dfjcU.jpg",
      },
      {
        name: "Shockwave Smash",
        description:
          "Four Tail Kyuubi Naruto (S) smashes the ground before him creating a huge shockwave. All enemies take 20 piercing damage. This skill may only be used during Four Tails Transformation.",
        descriptionBR:
          "Four Tail Kyuubi Naruto (S) smashes the ground before him creating a huge shockwave. All enemies take 20 piercing damage. This skill may only be used during Four Tails Transformation.",
        energy: ["Random", "Random"],
        classes: ["Chakra", "Instant", "Ranged", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/buukeg1.jpg",
      },
      {
        name: "Compressed Chakra Blast",
        description:
          "Four Tail Kyuubi Naruto (S) gathers an immense amount of chakra and fires it at one enemy who takes 50 piercing damage. This skill may only be used during Four Tails Transformation.",
        descriptionBR:
          "Four Tail Kyuubi Naruto (S) gathers an immense amount of chakra and fires it at one enemy who takes 50 piercing damage. This skill may only be used during Four Tails Transformation.",
        energy: ["Random", "Random", "Random"],
        classes: ["Chakra", "Instant", "Ranged", "Unique"],
        cooldown: 2,
        url: "https://i.imgur.com/TtyXG2s.jpg",
      },
      {
        name: "Skin of Chakra",
        description:
          "This skill makes Four Tail Kyuubi Naruto (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Four Tail Kyuubi Naruto (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Chakra", "Instant", "Unique"],
        cooldown: 4,
        url: "https://i.imgur.com/dAFHFbN.jpg",
      },
    ],
  },
  {
    name: "Jiraiya (S)",
    url: "https://i.imgur.com/XE97bxE.jpg",
    description:
      "Jiraiya (S) is one of the legendary Sannin that were trained by the third Hokage. Also known as the toad sage, he has been Uzumaki Naruto's teacher for the past few years.",
    descriptionBR:
      "Jiraiya (S) is one of the legendary Sannin that were trained by the third Hokage. Also known as the toad sage, he has been Uzumaki Naruto's teacher for the past few years.",
    skills: [
      {
        name: "Katon Endan",
        description:
          "Jiraiya (S) emits a jet of fire from his mouth dealing 20 damage to one enemy. This skill is replaced by Toad Oil Projectile after being used.",
        descriptionBR:
          "Jiraiya (S) emits a jet of fire from his mouth dealing 20 damage to one enemy. This skill is replaced by Toad Oil Projectile after being used.",
        energy: ["Random"],
        classes: ["Chakra", "Ranged", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/XXJ4UvH.jpg",
      },
      {
        name: "Gamaken Rush",
        description:
          "Jiraiya (S) summons Gamaken in the battlefield, dealing 25 damage to one enemy and granting him and his allies 15 points of permanent destructible defense. For 1 turn Jiraiya and his allies will deal 5 more damage with non-affliction ranged skills. The following 2 turns this skill will be replaced by Gamaken Shield Guard.",
        descriptionBR:
          "Jiraiya (S) summons Gamaken in the battlefield, dealing 25 damage to one enemy and granting him and his allies 15 points of permanent destructible defense. For 1 turn Jiraiya and his allies will deal 5 more damage with non-affliction ranged skills. The following 2 turns this skill will be replaced by Gamaken Shield Guard.",
        energy: ["Blood", "Nin"],
        classes: ["Physical", "Ranged", "Instant", "Unique"],
        cooldown: 5,
        url: "https://i.imgur.com/QSdoms1.png",
      },
      {
        name: "Wild Lion Mane",
        description:
          "Jiraiya (S) will protect himself or an ally for 3 turns from enemy physical skills. If an enemy uses a physical melee skill on that character they will take 25 damage*. If an enemy uses a physical ranged skill their physical or melee skills will be stunned 1 turn and take 15 damage*. This skill is invisible.",
        descriptionBR:
          "Jiraiya (S) will protect himself or an ally for 3 turns from enemy physical skills. If an enemy uses a physical melee skill on that character they will take 25 damage*. If an enemy uses a physical ranged skill their physical or melee skills will be stunned 1 turn and take 15 damage*. This skill is invisible.",
        energy: ["Nin"],
        classes: ["Physical", "Ranged*", "Instant"],
        cooldown: 2,
        url: "https://i.imgur.com/29s7Mpl.jpg",
      },
      {
        name: "Summoning Gamaken",
        description: "This skill makes Jiraiya (S) invulnerable for 1 turn.",
        descriptionBR: "This skill makes Jiraiya (S) invulnerable for 1 turn.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/iMdoRdI.jpg",
      },
      {
        name: "Toad Oil Projectile",
        description:
          "Jiraiya (S) spits a very dense oil at one enemy dealing 10 affliction damage and ending any control skills they are using. If Katon Endan is used on this enemy they will take an additional 10 affliction damage. The effect is permanent and stacks. This skill is replaced by Katon Endan after being used.",
        descriptionBR:
          "Jiraiya (S) spits a very dense oil at one enemy dealing 10 affliction damage and ending any control skills they are using. If Katon Endan is used on this enemy they will take an additional 10 affliction damage. The effect is permanent and stacks. This skill is replaced by Katon Endan after being used.",
        energy: ["Random"],
        classes: ["Physical", "Afflitcion", "Ranged", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/gjGEbMs.png",
      },
      {
        name: "Gamaken Shield Guard",
        description:
          "Jiraiya (S) and his allies become invulnerable to physical skills for 1 turn.",
        descriptionBR:
          "Jiraiya (S) and his allies become invulnerable to physical skills for 1 turn.",
        energy: ["Random"],
        classes: ["Physical", "Instant", "Unique"],
        cooldown: 3,
        url: "https://i.imgur.com/Wkqj4wO.png",
      },
    ],
  },
  {
    name: "Sennin Jiraiya (S)",
    url: "https://i.imgur.com/0AZFUyS.jpg",
    description:
      "Sennin Jiraiya (S) uses sage chakra to improve his speed, strength, and skills. The only downfall is that it alters his appearance similar to that of a toad and makes him unappealing to women, which makes it a last resort for the pervy sage.",
    descriptionBR:
      "Sennin Jiraiya (S) uses sage chakra to improve his speed, strength, and skills. The only downfall is that it alters his appearance similar to that of a toad and makes him unappealing to women, which makes it a last resort for the pervy sage.",
    skills: [
      {
        name: "Bath of Burning Oil",
        description:
          "Using a mixture of wind, oil, and fire, Sennin Jiraiya (S) deals 20 damage and 15 piercing damage to one enemy. For 1 turn counter skills used by that enemy will last 1 turn less.",
        descriptionBR:
          "Using a mixture of wind, oil, and fire, Sennin Jiraiya (S) deals 20 damage and 15 piercing damage to one enemy. For 1 turn counter skills used by that enemy will last 1 turn less.",
        energy: ["Nin", "Random"],
        classes: ["Chakra", "Ranged", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/DkpKWQU.jpg",
      },
      {
        name: "Kebari Senbon",
        description:
          "Sennin Jiraiya (S) turns his hair into needles and deals 15 damage to all enemies. Sennin Jiraiya (S) will be invulnerable to melee skills for 1 turn.",
        descriptionBR:
          "Sennin Jiraiya (S) turns his hair into needles and deals 15 damage to all enemies. Sennin Jiraiya (S) will be invulnerable to melee skills for 1 turn.",
        energy: ["Tai"],
        classes: ["Physical", "Ranged", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/zrgHWDZ.jpg",
      },
      {
        name: "Chou Oodama Rasengan",
        description:
          "Creating a massive rasengan, Sennin Jiraiya (S) deals 45 damage to 1 enemy. For 1 turn that enemy cannot reduce damage or become invulnerable.",
        descriptionBR:
          "Creating a massive rasengan, Sennin Jiraiya (S) deals 45 damage to 1 enemy. For 1 turn that enemy cannot reduce damage or become invulnerable.",
        energy: ["Tai", "Nin"],
        classes: ["Chakra", "Melee", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/KCTS7DZ.jpg",
      },
      {
        name: "Arm Block",
        description:
          "This skill makes Sennin Jiraiya (S) invunerable for 1 turn.",
        descriptionBR:
          "This skill makes Sennin Jiraiya (S) invunerable for 1 turn.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/LMkh8Pe.jpg",
      },
    ],
  },
  {
    name: "Fukasaku and Shima (S)",
    url: "https://i.imgur.com/oXOirA4.jpg",
    description:
      "Fukasaku and Shima (S) are known as the two great sage toads of Mount Myoboku. They taught both Jiraiya and Naruto sage jutsu and are each skilled in elemental techniques as well as genjutsu techniques.",
    descriptionBR:
      "Fukasaku and Shima (S) are known as the two great sage toads of Mount Myoboku. They taught both Jiraiya and Naruto sage jutsu and are each skilled in elemental techniques as well as genjutsu techniques.",
    skills: [
      {
        name: "Frog Song",
        description:
          "Fukasaku and Shima (S) use their pattened genjustu to use Frog Song. They target 1 enemy and deal 15 affliction damage for 2 turns. During Toad Confrontation Singing this skill will cost 1 random chakra instead.",
        descriptionBR:
          "Fukasaku and Shima (S) use their pattened genjustu to use Frog Song. They target 1 enemy and deal 15 affliction damage for 2 turns. During Toad Confrontation Singing this skill will cost 1 random chakra instead.",
        energy: ["Gen"],
        classes: ["Mental", "Action", "Ranged", "Unique", "Affliction"],
        cooldown: 1,
        url: "https://i.imgur.com/NZKucJD.jpg",
      },
      {
        name: "Sand Dust",
        description:
          "Fukasaku and Shima (S) use Sand Dust. All allies will be invulnerable to enemy ranged skills for 1 turn.",
        descriptionBR:
          "Fukasaku and Shima (S) use Sand Dust. All allies will be invulnerable to enemy ranged skills for 1 turn.",
        energy: ["Nin"],
        classes: ["Physical", "Instant"],
        cooldown: 2,
        url: "https://i.imgur.com/tvcevTA.jpg",
      },
      {
        name: "Toad Confrontation Singing",
        description:
          "Fukasaku and Shima (S) use Toad Confrontation Singing on all enemies dealing 15 damage for 2 turns. If any enemy uses a new skill during Toad Confrontation Singing they will have their mental and ranged skills stunned for 1 turn.",
        descriptionBR:
          "Fukasaku and Shima (S) use Toad Confrontation Singing on all enemies dealing 15 damage for 2 turns. If any enemy uses a new skill during Toad Confrontation Singing they will have their mental and ranged skills stunned for 1 turn.",
        energy: ["Gen", "Random"],
        classes: ["Mental", "Ranged", "Control", "Unique", "__$"],
        cooldown: 3,
        url: "https://i.imgur.com/A0eWnDM.jpg",
      },
      {
        name: "Frogs Tag Team",
        description:
          "This skill makes Fukasaku and Shima (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Fukasaku and Shima (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Mental", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/iaBGOtU.png",
      },
    ],
  },
  {
    name: "Sennin Naruto (S)",
    url: "https://i.imgur.com/AMLeB3e.jpg",
    description:
      "Sennin Naruto (S) has trained on Mount Myoboku with Fukasaku and Shima. Naruto has become one of the most powerful individuals in the ninja world.",
    descriptionBR:
      "Sennin Naruto (S) has trained on Mount Myoboku with Fukasaku and Shima. Naruto has become one of the most powerful individuals in the ninja world.",
    skills: [
      {
        name: "Frog Kata Kick",
        description:
          "Sennin Naruto (S) uses Frog Kata Kick on 1 enemy. That enemy will take 20 damage and have their physical and chakra skills stunned for 1 turn. The following turn this skill becomes Rasenshuriken.",
        descriptionBR:
          "Sennin Naruto (S) uses Frog Kata Kick on 1 enemy. That enemy will take 20 damage and have their physical and chakra skills stunned for 1 turn. The following turn this skill becomes Rasenshuriken.",
        energy: ["Tai"],
        classes: ["Physical", "Melee", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/bZvNJMc.jpeg",
      },
      {
        name: "Sage Revitalization",
        description:
          "Using Sage Revitalization Sennin Naruto (S) replenishes his sage chakra. Sennin Naruto (S) removes all harmful skills from him and heals for 25 health.",
        descriptionBR:
          "Using Sage Revitalization Sennin Naruto (S) replenishes his sage chakra. Sennin Naruto (S) removes all harmful skills from him and heals for 25 health.",
        energy: ["Gen"],
        classes: ["Chakra", "Instant", "Unique"],
        cooldown: 2,
        url: "https://i.imgur.com/z4vnCGt.jpeg",
      },
      {
        name: "Natural Energy Assault",
        description:
          "Sennin Naruto (S) uses Natural Energy Assault on all enemies. For 1 turn all enemies will be unable to use stun skills or removing/stealing chakra skills. This is a stun effect. This skill becomes Rasengan Barrage for 2 turns.",
        descriptionBR:
          "Sennin Naruto (S) uses Natural Energy Assault on all enemies. For 1 turn all enemies will be unable to use stun skills or removing/stealing chakra skills. This is a stun effect. This skill becomes Rasengan Barrage for 2 turns.",
        energy: ["Random"],
        classes: ["Chakra", "Melee", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/9PtPAgm.jpeg",
      },
      {
        name: "Kunai Deflection",
        description:
          "This skill makes Sennin Naruto (S) invulnerable for 1 turn.",
        descriptionBR:
          "This skill makes Sennin Naruto (S) invulnerable for 1 turn.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/wj3Fdw1.jpeg",
      },
      {
        name: "Rasenshuriken",
        description:
          "Sennin Naruto (S) uses his final attack on 1 enemy. Sennin Naruto (S) destroys their destructible defense and deals 45 piercing damage to that enemy. This skill ignores invulnerability and cannot be countered or reflected.",
        descriptionBR:
          "Sennin Naruto (S) uses his final attack on 1 enemy. Sennin Naruto (S) destroys their destructible defense and deals 45 piercing damage to that enemy. This skill ignores invulnerability and cannot be countered or reflected.",
        energy: ["Tai", "Nin"],
        classes: ["Chakra", "Ranged", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/gM2lgk5.jpeg",
      },
      {
        name: "Rasengan Barrage",
        description:
          "Sennin Naruto (S) uses Rasengan Barrage. The following turn one enemy will be dealt 30 damage. During this time, the first enemy to use a new skill on Sennin Naruto will be countered. This is skill is invisible. Becomes Natural Energy Assault when used.",
        descriptionBR:
          "Sennin Naruto (S) uses Rasengan Barrage. The following turn one enemy will be dealt 30 damage. During this time, the first enemy to use a new skill on Sennin Naruto will be countered. This is skill is invisible. Becomes Natural Energy Assault when used.",
        energy: ["Nin", "Random"],
        classes: ["Chakra", "Melee", "Action", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/KJl5Mjy.jpeg",
      },
    ],
  },
  {
    name: "Orochimaru (S)",
    url: "https://i.imgur.com/chILdBz.jpg",
    description:
      "Orochimaru(s) returns, strong as ever and with some new tricks up his sleeve. But his body seems to be on borrowed time.",
    descriptionBR:
      "Orochimaru(s) returns, strong as ever and with some new tricks up his sleeve. But his body seems to be on borrowed time.",
    skills: [
      {
        name: "Second Skin",
        description:
          "Orochimaru (S) has learned a way to regenerate by shedding his skin like a snake. This skill can only be used when Orochimaru (S) has 30 health or less. When used, Orochimaru (S) will return to 70 health.",
        descriptionBR:
          "Orochimaru (S) has learned a way to regenerate by shedding his skin like a snake. This skill can only be used when Orochimaru (S) has 30 health or less. When used, Orochimaru (S) will return to 70 health.",
        energy: ["Nin"],
        classes: ["Chakra", "Instant", "Unique"],
        cooldown: 3,
        url: "https://i.imgur.com/7g5Xli0.jpg",
      },
      {
        name: "Sword Snake Horde",
        description:
          "Orochimaru (S) regurgitates a horde of snakes who themselves produce swords from their mouths dealing 20 affliction damage to one enemy and stun effects used by that enemy the following turn will last 1 turn less.",
        descriptionBR:
          "Orochimaru (S) regurgitates a horde of snakes who themselves produce swords from their mouths dealing 20 affliction damage to one enemy and stun effects used by that enemy the following turn will last 1 turn less.",
        energy: ["Blood"],
        classes: ["Physical", "Affliction", "Instant", "Ranged"],
        cooldown: 0,
        url: "https://i.imgur.com/AHK0aTN.jpg",
      },
      {
        name: "Extended Kusanagi",
        description:
          "Orochimaru (S) extends the length of his famed sword Kusanagi to pin down and harm one enemy. That enemy has their physical and chakra skills stunned for 2 turns. During this time this enemy takes 20 piercing damage each turn.",
        descriptionBR:
          "Orochimaru (S) extends the length of his famed sword Kusanagi to pin down and harm one enemy. That enemy has their physical and chakra skills stunned for 2 turns. During this time this enemy takes 20 piercing damage each turn.",
        energy: ["Tai", "Blood"],
        classes: ["Physical", "Control", "Ranged", "Unique"],
        cooldown: 3,
        url: "https://i.imgur.com/29BoXLE.jpg",
      },
      {
        name: "Triple Rashoumon",
        description:
          "This skill makes Orochimaru (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Orochimaru (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/jh0I5Ar.jpg",
      },
    ],
  },
  {
    name: "Yakushi Kabuto (S)",
    url: "https://imgur.com/Uht4nwd.jpg",
    description:
      "After two years, Kabuto remains Orochimaru's subordinate and Sasori's spy. His medical skills continue to improve, in addition to being able to use his current chakra to attack, Kabuto can use the chakra to heal himself instantly.",
    descriptionBR:
      "After two years, Kabuto remains Orochimaru's subordinate and Sasori's spy. His medical skills continue to improve, in addition to being able to use his current chakra to attack, Kabuto can use the chakra to heal himself instantly.",
    skills: [
      {
        name: "Charged Mystical Palm",
        description:
          "If used on an enemy, Kabuto will deal 20 piercing damage to them and will heal himself for 5 health. If used on the ally or himself, they will heal 20 health and will ignore stun effects for 1 turn.",
        descriptionBR:
          "If used on an enemy, Kabuto will deal 20 piercing damage to them and will heal himself for 5 health. If used on the ally or himself, they will heal 20 health and will ignore stun effects for 1 turn.",
        energy: ["Nin"],
        classes: ["Chakra", "Melee", "Instant", "Harmful"],
        cooldown: 0,
        url: "https://i.imgur.com/bYsdrcq.png",
      },
      {
        name: "Dead Soul Jutsu",
        description:
          "Kabuto deals 30 piercing damage to one enemy. For 2 turns, all other enemies will have their healing skills stunned. Permanently 'Charged Mystical Palm' heal and damage will be increased by 5. This skill cannot be countered.",
        descriptionBR:
          "Kabuto deals 30 piercing damage to one enemy. For 2 turns, all other enemies will have their healing skills stunned. Permanently 'Charged Mystical Palm' heal and damage will be increased by 5. This skill cannot be countered.",
        energy: ["Nin", "Random"],
        classes: ["Chakra", "Melee", "Instant", "Unique", "Harmful"],
        cooldown: 1,
        url: "https://i.imgur.com/3Ufh6fP.png",
      },
      {
        name: "Orochimaru Cells Takeover",
        description:
          "Kabuto target himself for 2 turns. During this time, if his health reaches 0, it will be seted to 35 and he will gain 2 random chakras and then this skill will end. This skill is invisible until triggered.",
        descriptionBR:
          "Kabuto target himself for 2 turns. During this time, if his health reaches 0, it will be seted to 35 and he will gain 2 random chakras and then this skill will end. This skill is invisible until triggered.",
        energy: ["Random"],
        classes: ["Physical", "Instant", "Helpful", "Unique"],
        cooldown: 4,
        url: "https://i.imgur.com/frk2n9t.png",
      },
      {
        name: "Kabuto Dodge",
        description:
          "This skill makes Yakushi Kabuto (S) invulnerable for 1 turn.",
        descriptionBR:
          "This skill makes Yakushi Kabuto (S) invulnerable for 1 turn.",
        energy: ["Random"],
        classes: ["Physical", "Instant", "Helpful"],
        cooldown: 4,
        url: "https://i.imgur.com/LtFRhsR.png",
      },
    ],
  },
  {
    name: "Uchiha Sasuke (S)",
    url: "https://i.imgur.com/HsLhief.jpg",
    description:
      "Uchiha Sasuke (S) has spent the last 2 years training under Orochimaru. He is now an expert swordsman and has immensely developed his lightning element techniques. His demeanor has also grown very cold and he is one of the most dangerous individuals in the ninja world.",
    descriptionBR:
      "Uchiha Sasuke (S) has spent the last 2 years training under Orochimaru. He is now an expert swordsman and has immensely developed his lightning element techniques. His demeanor has also grown very cold and he is one of the most dangerous individuals in the ninja world.",
    skills: [
      {
        name: "Chidori Nagashi",
        description:
          "Uchiha Sasuke (S) surrounds his body with a chidori. The first non-mental enemy skills used on him for 1 turn will be countered and the countered enemy will take 10 affliction damage. This skill is invisible and becomes Snake Coil after being used.",
        descriptionBR:
          "Uchiha Sasuke (S) surrounds his body with a chidori. The first non-mental enemy skills used on him for 1 turn will be countered and the countered enemy will take 10 affliction damage. This skill is invisible and becomes Snake Coil after being used.",
        energy: ["Nin"],
        classes: ["Chakra", "Affliction", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/XKuCLYK.jpg",
      },
      {
        name: "Quick Chidori",
        description:
          "Uchiha Sasuke (S) quickily uses his Chidori to attack one enemy, dealing 15 piercing damage to them for 1 turn. The following turn this skill becomes Great Dragon Fire.",
        descriptionBR:
          "Uchiha Sasuke (S) quickily uses his Chidori to attack one enemy, dealing 15 piercing damage to them for 1 turn. The following turn this skill becomes Great Dragon Fire.",
        energy: ["Random"],
        classes: ["Chakra", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/lKje4TP.png",
      },
      {
        name: "Kirin",
        description:
          "Using his most powerful lightning attack, Uchiha Sasuke (S) deals 45 piercing damage to 1 enemy. This skill ignores invulnerability and cannot be countered or reflected.",
        descriptionBR:
          "Using his most powerful lightning attack, Uchiha Sasuke (S) deals 45 piercing damage to 1 enemy. This skill ignores invulnerability and cannot be countered or reflected.",
        energy: ["Nin", "Nin"],
        classes: ["Chakra", "Ranged", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/9RKqcKS.jpg",
      },
      {
        name: "Protective Summoni",
        description:
          "This skill makes Uchiha Sasuke (S) invulnerable for 1 turn.",
        descriptionBR:
          "This skill makes Uchiha Sasuke (S) invulnerable for 1 turn.",
        energy: ["Random"],
        classes: ["Physical", "Instant", "Unique"],
        cooldown: 4,
        url: "https://i.imgur.com/AlxaN71.jpg",
      },
      {
        name: "Snake Coil",
        description:
          "Uchiha Sasuke (S) unleashes a group of snakes to coil around one enemy dealing 15 damage and stunning their physical or melee Skills for 1 turn. After this skill is used it becomes chidori Nagashi. ",
        descriptionBR:
          "Uchiha Sasuke (S) unleashes a group of snakes to coil around one enemy dealing 15 damage and stunning their physical or melee Skills for 1 turn. After this skill is used it becomes chidori Nagashi. ",
        energy: ["Tai"],
        classes: ["Physical", "Ranged", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/zoGEyQy.jpg",
      },
      {
        name: "Great Dragon Fire",
        description:
          "Uchiha Sasuke (S) assaults the enemy team with large dragon shaped fireballs. All enemies will take 10 damage for 3 turns and any enemy that uses a skill on Uchiha Sasuke (S) during this time will take 5 affliction damage*. This skill becomes Quick Chidori after used.",
        descriptionBR:
          "Uchiha Sasuke (S) assaults the enemy team with large dragon shaped fireballs. All enemies will take 10 damage for 3 turns and any enemy that uses a skill on Uchiha Sasuke (S) during this time will take 5 affliction damage*. This skill becomes Quick Chidori after used.",
        energy: ["Nin", "Random"],
        classes: ["Chakra", "Affliction*", "Ranged", "Action"],
        cooldown: 4,
        url: "https://i.imgur.com/viOJCIV.jpg",
      },
    ],
  },
  {
    name: "Hozuki Suigetsu (S)",
    url: "https://i.imgur.com/FQbDQSx.jpeg",
    description:
      "Hozuki Suigetsu (S) is a native of Kirigakure who was once a captive of Orochimaru. He is a dangerous individual with unique abilities and now follows Uchiha Sasuke.",
    descriptionBR:
      "Hozuki Suigetsu (S) is a native of Kirigakure who was once a captive of Orochimaru. He is a dangerous individual with unique abilities and now follows Uchiha Sasuke.",
    skills: [
      {
        name: "Muscle Expansion",
        description:
          "Suigetsu (S) expands his muscles with water and attacks with his sword. He deals 20 damage to one enemy and gains 5 destructible defense for 1 turn and 5 permanent destructible defense.",
        descriptionBR:
          "Suigetsu (S) expands his muscles with water and attacks with his sword. He deals 20 damage to one enemy and gains 5 destructible defense for 1 turn and 5 permanent destructible defense.",
        energy: ["Tai"],
        classes: ["Physical", "Melee", "Unique", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/uptTk0X.jpeg",
      },
      {
        name: "Hydro Taijutsu",
        description:
          "Suigetsu (S) uses water to launch an extreme taijutsu attack. Suigetsu (S) deals 40 piercing damage to one enemy and he gains 50% damage reduction for 2 turns.",
        descriptionBR:
          "Suigetsu (S) uses water to launch an extreme taijutsu attack. Suigetsu (S) deals 40 piercing damage to one enemy and he gains 50% damage reduction for 2 turns.",
        energy: ["Tai", "Nin"],
        classes: ["Physical", "Ranged", "Instant", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/xbUlXVC.jpeg",
      },
      {
        name: "Rehydration",
        description:
          "Suigetsu (S) replenishes his body with water. For 2 turns he is invulnerable to enemy mental skills*, gains 1 random chakra, and 10 permanent destructible defense each turn.",
        descriptionBR:
          "Suigetsu (S) replenishes his body with water. For 2 turns he is invulnerable to enemy mental skills*, gains 1 random chakra, and 10 permanent destructible defense each turn.",
        energy: ["Random", "Random"],
        classes: ["Chakra", "Action", "Unique", "Instant*"],
        cooldown: 3,
        url: "https://i.imgur.com/LoaarYd.jpeg",
      },
      {
        name: "Zanbato Deflection",
        description:
          "This skill makes Hozuki Suigetsu (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Hozuki Suigetsu (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/BbXa1kC.jpeg",
      },
    ],
  },
  {
    name: "Karin (S)",
    url: "https://i.imgur.com/owwvUwp.jpg",
    description:
      "Karin (S) is a former subordinate of Orochimaru who oversaw one of his secret laboratories. She is a skilled sensor and master of chakra control who now follows Uchiha Sasuke.",
    descriptionBR:
      "Karin (S) is a former subordinate of Orochimaru who oversaw one of his secret laboratories. She is a skilled sensor and master of chakra control who now follows Uchiha Sasuke.",
    skills: [
      {
        name: "Minds Eye of Kagura",
        description:
          "Karin (S) predicts one enemy. For 1 turn, if that enemy uses an offensive skill they will be countered and will take 5 more damage from physical and chakra skills for 1 turn; if that enemy uses a friendly skill, their skill costs will increase by 1 random chakra for 2 turns. This skill is invisible.",
        descriptionBR:
          "Karin (S) predicts one enemy. For 1 turn, if that enemy uses an offensive skill they will be countered and will take 5 more damage from physical and chakra skills for 1 turn; if that enemy uses a friendly skill, their skill costs will increase by 1 random chakra for 2 turns. This skill is invisible.",
        energy: ["Random"],
        classes: ["Mental", "Ranged", "Instant", "Unique"],
        cooldown: 2,
        url: "https://i.imgur.com/Wii6lUN.jpg",
      },
      {
        name: "Raging Punch",
        description:
          "Karin (S) deals 30 damage to 1 enemy. For 1 turn that enemy will be unable to use stun skills (this is a stun effect). This skill ignores invulnerability.",
        descriptionBR:
          "Karin (S) deals 30 damage to 1 enemy. For 1 turn that enemy will be unable to use stun skills (this is a stun effect). This skill ignores invulnerability.",
        energy: ["Tai", "Random"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/OlX4UNQ.jpg",
      },
      {
        name: "Chakra Transfer",
        description:
          "Karin (S) allows 1 ally to bite her, transferring her chakra to them. That ally will be healed for 30 health and Karin (S) will take 5 affliction damage*.",
        descriptionBR:
          "Karin (S) allows 1 ally to bite her, transferring her chakra to them. That ally will be healed for 30 health and Karin (S) will take 5 affliction damage*.",
        energy: ["Blood"],
        classes: ["Chakra", "Affliction*", "Instant", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/L836ND0.jpg",
      },
      {
        name: "Precipitous Retreat",
        description: "This skill makes Karin (S) invulnerable for 1 turn.",
        descriptionBR: "This skill makes Karin (S) invulnerable for 1 turn.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/NVluVlD.jpg",
      },
    ],
  },
  {
    name: "Juugo (S)",
    url: "https://i.imgur.com/6ZUMNbR.jpg",
    description:
      "Juugo (S) is the origin of the cursed seal and now follows Sasuke. He can either be a calm natured person or a psychotic lunatic.",
    descriptionBR:
      "Juugo (S) is the origin of the cursed seal and now follows Sasuke. He can either be a calm natured person or a psychotic lunatic.",
    skills: [
      {
        name: "Compression Blast",
        description:
          "Juugo (S) deals 30 damage to 1 enemy and stuns their physical or melee skills for 1 turn. During Killer Impulse this skill will be improved and will cost 2 random chakra.",
        descriptionBR:
          "Juugo (S) deals 30 damage to 1 enemy and stuns their physical or melee skills for 1 turn. During Killer Impulse this skill will be improved and will cost 2 random chakra.",
        energy: ["Blood", "Random"],
        classes: ["Physical", "Melee", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/QefoNP1.jpg",
      },
      {
        name: "Killer Impulse",
        description:
          "Juugo (S) enters a killing rage. He gains 75% damage reduction for 3 turns. Three random enemies will take 25 piercing damage each turn once the following 3 turns and Compression Blast will be improved during this time. The selected enemies are invisible. This skill ignores invulnerability.",
        descriptionBR:
          "Juugo (S) enters a killing rage. He gains 75% damage reduction for 3 turns. Three random enemies will take 25 piercing damage each turn once the following 3 turns and Compression Blast will be improved during this time. The selected enemies are invisible. This skill ignores invulnerability.",
        energy: ["Blood", "Blood"],
        classes: ["Physical", "Melee", "Action", "Unique"],
        cooldown: 4,
        url: "https://i.imgur.com/Ys6y9Ie.jpg",
      },
      {
        name: "Fusion",
        description:
          "Juugo (S) heals 1 ally for 25 health and that ally gains 20 destructible defense permanently. Each time this skill is used Juugo (S)'s cooldowns will increase by 1 turn for 4 turns.",
        descriptionBR:
          "Juugo (S) heals 1 ally for 25 health and that ally gains 20 destructible defense permanently. Each time this skill is used Juugo (S)'s cooldowns will increase by 1 turn for 4 turns.",
        energy: ["Blood", "Random"],
        classes: ["Chakra", "Instant", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/Ipa5vkc.jpg",
      },
      {
        name: "Isolation",
        description:
          "This skill makes Juugo (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Juugo (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Mental", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/VGPEiRn.jpg",
      },
    ],
  },
  {
    name: "Cursed Seal Juugo (S)",
    url: "https://i.imgur.com/lUw2QGb.png",
    description:
      "Cursed Seal Juugo (S) is fully transformed and no longer recognizable. Becoming a psychotic lunatic Juugo is able to maintain absurd amounts of chakra making him nearly impossible to defeat.",
    descriptionBR:
      "Cursed Seal Juugo (S) is fully transformed and no longer recognizable. Becoming a psychotic lunatic Juugo is able to maintain absurd amounts of chakra making him nearly impossible to defeat.",
    skills: [
      {
        name: "Psychotic Break",
        description:
          "Juugo loses his mind and assaults one enemy, dealing 10 damage to them for 3 turns. During this time, if that enemy uses a new harmful skill, Jugoo's skills will be improved and will cost random chakra for 1 turn.",
        descriptionBR:
          "Juugo loses his mind and assaults one enemy, dealing 10 damage to them for 3 turns. During this time, if that enemy uses a new harmful skill, Jugoo's skills will be improved and will cost random chakra for 1 turn.",
        energy: ["Random"],
        classes: ["Physical", "Melee", "Action"],
        cooldown: 3,
        url: "https://i.imgur.com/Dhbvf2b.png",
      },
      {
        name: "Chakra Cannons",
        description:
          "Juugo uses his jet booster-like appendages to charge chakra and blast a powerful chakra blast, dealing 45 damage to one enemy. While improved, this skill will cost 2 random chakra.",
        descriptionBR:
          "Juugo uses his jet booster-like appendages to charge chakra and blast a powerful chakra blast, dealing 45 damage to one enemy. While improved, this skill will cost 2 random chakra.",
        energy: ["Nin", "Nin"],
        classes: ["Chakra", "Ranged", "Instant", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/CUZX7Z0.png",
      },
      {
        name: "Body Absorption",
        description:
          "Juugo absorbs one enemy's body, stealing 15 health from them and making that enemy unable to reduce damage or become invulnerable for 2 turns. For 1 turn, Juugo will ignore all harmful effects except damage. While improved, this skill will cost 1 random chakra.",
        descriptionBR:
          "Juugo absorbs one enemy's body, stealing 15 health from them and making that enemy unable to reduce damage or become invulnerable for 2 turns. For 1 turn, Juugo will ignore all harmful effects except damage. While improved, this skill will cost 1 random chakra.",
        energy: ["Blood"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/SXRkXSo.png",
      },
      {
        name: "Juugo Block",
        description:
          "This skill makes Cursed Seal Juugo (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Cursed Seal Juugo (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/lt2qMck.png",
      },
    ],
  },
  {
    name: "Mangekyou Sasuke (S)",
    url: "https://i.imgur.com/Q3IFFH5.png",
    description:
      "Mangekyou Sasuke (S), Sasuke after defeating his older brother Itachi has gained the mangekyou sharingan. Sasuke is now a member of the Akatsuki, and also the leader of the newly created Team Taka, whose goal is to destroy the Hidden Leaf.",
    descriptionBR:
      "Mangekyou Sasuke (S), Sasuke after defeating his older brother Itachi has gained the mangekyou sharingan. Sasuke is now a member of the Akatsuki, and also the leader of the newly created Team Taka, whose goal is to destroy the Hidden Leaf.",
    skills: [
      {
        name: "Amaterasu Wave",
        description:
          "Using his Amaterasu in the battlefield, Sasuke deals 12 affliction damage to all enemies for 2 turns. While active, any enemy that does not use a new skill will make 'Amaterasu Wave' last 1 turn longer on them. This skill cannot be used on enemies already affected by it and it cannot be removed.",
        descriptionBR:
          "Using his Amaterasu in the battlefield, Sasuke deals 12 affliction damage to all enemies for 2 turns. While active, any enemy that does not use a new skill will make 'Amaterasu Wave' last 1 turn longer on them. This skill cannot be used on enemies already affected by it and it cannot be removed.",
        energy: ["Nin", "Random"],
        classes: ["Chakra", "Ranged", "Action", "Unique", "Affliction"],
        cooldown: 2,
        url: "https://i.imgur.com/EQO9Xwr.png",
      },
      {
        name: "Enton Amaterasu",
        description:
          "Sasuke uses his Amaterasu as a shield on himself for 4 turns, granting him 15 points of destructible defense. During this time, any enemy that uses a new non-mental skill on Sasuke will *receive 5 affliction damage permanently. This skill stacks.",
        descriptionBR:
          "Sasuke uses his Amaterasu as a shield on himself for 4 turns, granting him 15 points of destructible defense. During this time, any enemy that uses a new non-mental skill on Sasuke will *receive 5 affliction damage permanently. This skill stacks.",
        energy: ["Nin"],
        classes: ["Chakra", "Ranged", "Instant", "Unique", "*Affliction"],
        cooldown: 4,
        url: "https://i.imgur.com/ZOECvbm.png",
      },
      {
        name: "Dark Genjutsu",
        description:
          "Mangekyou Sasuke (S) deals 25 piercing damage to one enemy. That enemy's physical and chakra skills will be stunned for 1 turn.",
        descriptionBR:
          "Mangekyou Sasuke (S) deals 25 piercing damage to one enemy. That enemy's physical and chakra skills will be stunned for 1 turn.",
        energy: ["Gen"],
        classes: ["Mental", "Ranged", "Instant", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/WvskJD1.png",
      },
      {
        name: "Hawk Summoning",
        description:
          "This skill makes Mangekyou Sasuke (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Mangekyou Sasuke (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/TRvpMVO.jpg",
      },
    ],
  },
  {
    name: "Susanoo Sasuke (S)",
    url: "https://i.imgur.com/8EyNW0H.png",
    description:
      "Sasuke takes control of the powerful Susano'o, achieving a high level of strength with an unimaginable impenetrable defense. He can also still use other techniques of his Mangekyo Sharingan.",
    descriptionBR:
      "Sasuke takes control of the powerful Susano'o, achieving a high level of strength with an unimaginable impenetrable defense. He can also still use other techniques of his Mangekyo Sharingan.",
    skills: [
      {
        name: "Sasuke Susano'o",
        description:
          "Using his Susanoo, Sasuke gains 50 points of destructible defense permanent and may use his skills. During this time, this skill is replaced and Sasuke will ignore any effects that destroy destructible defense. When this defense is destroyed, Sasuke will be stunned for 3 turns.",
        descriptionBR:
          "Using his Susanoo, Sasuke gains 50 points of destructible defense permanent and may use his skills. During this time, this skill is replaced and Sasuke will ignore any effects that destroy destructible defense. When this defense is destroyed, Sasuke will be stunned for 3 turns.",
        energy: ["Random"],
        classes: ["Chakra", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/IvPeIEb.png",
      },
      {
        name: "Susano'o Arrow",
        description:
          "Using his Susano'o bow, Sasuke destroys all destructible defense of one enemy and deals 15 piercing damage and an additional 5 damage for each 10 points of destructible defense that 'Susanoo Sasuke' currently has. This skill requires 'Sasuke Susano'o'.",
        descriptionBR:
          "Using his Susano'o bow, Sasuke destroys all destructible defense of one enemy and deals 15 piercing damage and an additional 5 damage for each 10 points of destructible defense that 'Susanoo Sasuke' currently has. This skill requires 'Sasuke Susano'o'.",
        energy: ["Blood"],
        classes: ["Chakra", "Ranged", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/ts2DJlr.png",
      },
      {
        name: "Spreading Amaterasu",
        description:
          "Susanoo Sasuke deals 2 affliction damage to one enemy permanently. This skill will double its damage everytime that enemy uses a new skill. This skill cannot be removed and it requires 'Sasuke Susano'o'. This skill will have its cooldown reseted if the enemy target is killed.",
        descriptionBR:
          "Susanoo Sasuke deals 2 affliction damage to one enemy permanently. This skill will double its damage everytime that enemy uses a new skill. This skill cannot be removed and it requires 'Sasuke Susano'o'. This skill will have its cooldown reseted if the enemy target is killed.",
        energy: ["Random"],
        classes: ["Chakra", "Ranged", "Instant", "Unique", "Affliction"],
        cooldown: 5,
        url: "https://i.imgur.com/CrxZrrj.png",
      },
      {
        name: "Mangekyo Insight",
        description:
          "This skill makes Susanoo Sasuke (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Susanoo Sasuke (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Mental", "Instant", "Unique"],
        cooldown: 4,
        url: "https://i.imgur.com/f9ZJ3KY.png",
      },
      {
        name: "Sasuke Mangekyo Sharingan",
        description:
          "Sasuke activates his Mangekyou Sharingan and gains 25% unpierceable damage reduction until 'Sasuke Susano'o' destructible defense is destroyed. When this skill is used, the cooldown of 'Spreading Amaterasu' is reseted.",
        descriptionBR:
          "Sasuke activates his Mangekyou Sharingan and gains 25% unpierceable damage reduction until 'Sasuke Susano'o' destructible defense is destroyed. When this skill is used, the cooldown of 'Spreading Amaterasu' is reseted.",
        energy: ["Random"],
        classes: ["Mental", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/aoX9e2o.png",
      },
    ],
  },
  {
    name: "Raikage (S)",
    url: "https://i.imgur.com/NwtJF5J.png",
    description:
      "Ay is the fourth Raikage of Hidden Cloud Ninja and supreme leader of the Shinobi Alliance. Son of the Third Raikage, he is also Killer Bee's older brother.",
    descriptionBR:
      "Ay is the fourth Raikage of Hidden Cloud Ninja and supreme leader of the Shinobi Alliance. Son of the Third Raikage, he is also Killer Bee's older brother.",
    skills: [
      {
        name: "Lightning Release Boost",
        description:
          "Using Lightning Release to boost his speed and strenght, Ay improves the damage of his attacks by 20 until he uses any of them. During this time Ay gains 10 points of damage reduction. May not be used while in effect, and damage improvement is increased by 5 each time it is used.",
        descriptionBR:
          "Using Lightning Release to boost his speed and strenght, Ay improves the damage of his attacks by 20 until he uses any of them. During this time Ay gains 10 points of damage reduction. May not be used while in effect, and damage improvement is increased by 5 each time it is used.",
        energy: ["Random"],
        classes: ["Chakra", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/2We4Iaj.png",
      },
      {
        name: "Liger Bomb",
        description:
          "Ay lifts one enemy in the air and then brutaly smashes their head fist into ground, dealing 30 damage to them and lowering their damage by 10 for 1 turn. The following turn that enemy's physical or chakra skills will be stunned.",
        descriptionBR:
          "Ay lifts one enemy in the air and then brutaly smashes their head fist into ground, dealing 30 damage to them and lowering their damage by 10 for 1 turn. The following turn that enemy's physical or chakra skills will be stunned.",
        energy: ["Tai", "Random"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/jKeuupD.png",
      },
      {
        name: "Lightning Oppression Horizontal",
        description:
          "Ay performs a backhanded horizontal chop againts one enemy, destroying all destructible defense and dealing 20 piercing damage. ",
        descriptionBR:
          "Ay performs a backhanded horizontal chop againts one enemy, destroying all destructible defense and dealing 20 piercing damage. ",
        energy: ["Tai"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/6Tl1X1K.png",
      },
      {
        name: "Lightnin Speed",
        description: "This skill makes Raikage (S) invulnerable for 1 turn.",
        descriptionBR: "This skill makes Raikage (S) invulnerable for 1 turn.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/OcYwaIA.png",
      },
    ],
  },
  {
    name: "Mizukage (S)",
    url: "https://i.imgur.com/1WgnEmN.png",
    description:
      "Terumi Mei is the Fifth Mizukage, after the dreadful reign of Yagura Karatachi ended, she became Mizukage and worked tirelessly to reform internal policies and recreate diplomatic relations with other villages",
    descriptionBR:
      "Terumi Mei is the Fifth Mizukage, after the dreadful reign of Yagura Karatachi ended, she became Mizukage and worked tirelessly to reform internal policies and recreate diplomatic relations with other villages",
    skills: [
      {
        name: "Lava Wall",
        description:
          "Terumi Mei Uses lava wall dealing 25 affliction damage to one enemy and stuns their mental and ranged skills for 1 turn. This skill cannot be countered or reflected. During 'Prision Lava Wall' this skill will deal 35 affliction damage and cost one more random chakra.",
        descriptionBR:
          "Terumi Mei Uses lava wall dealing 25 affliction damage to one enemy and stuns their mental and ranged skills for 1 turn. This skill cannot be countered or reflected. During 'Prision Lava Wall' this skill will deal 35 affliction damage and cost one more random chakra.",
        energy: ["Nin"],
        classes: ["Chakra", "Ranged", "Unique", "Instant", "Affliction"],
        cooldown: 1,
        url: "https://i.imgur.com/q55j0xl.png",
      },
      {
        name: "Prision Lava Wall",
        description:
          "Terumi Mei creates a Prision of Lava dealing 5 affliction damage for 3 turns to all enemies. During this time, each turn a random enemy will become invulnerable to friendly skills. 'Lava Wall' and 'Skilled Mist' is improved during this skill*.",
        descriptionBR:
          "Terumi Mei creates a Prision of Lava dealing 5 affliction damage for 3 turns to all enemies. During this time, each turn a random enemy will become invulnerable to friendly skills. 'Lava Wall' and 'Skilled Mist' is improved during this skill*.",
        energy: ["Nin"],
        classes: [
          "Chakra",
          "Ranged",
          "Unique",
          "Action",
          "Affliction",
          "Instant*",
        ],
        cooldown: 4,
        url: "https://i.imgur.com/yxgf33E.png",
      },
      {
        name: "Skilled Mist",
        description:
          "Terumi Mei uses Skilled Mist to destroy all enemies destructible defense and dealing 15 affliction damage to them for 2 turns. This skill cannot be countered, reflected or removed. During 'Prision Lava Wall' this skill will deals 5 more affliction damage.",
        descriptionBR:
          "Terumi Mei uses Skilled Mist to destroy all enemies destructible defense and dealing 15 affliction damage to them for 2 turns. This skill cannot be countered, reflected or removed. During 'Prision Lava Wall' this skill will deals 5 more affliction damage.",
        energy: ["Blood", "Nin"],
        classes: ["Chakra", "Ranged", "Action", "Unique", "Affliction"],
        cooldown: 2,
        url: "https://i.imgur.com/LJbscdA.png",
      },
      {
        name: "Fast Evade",
        description: "This skill makes Terumi Mei (S) invulnerable for 1 turn.",
        descriptionBR:
          "This skill makes Terumi Mei (S) invulnerable for 1 turn.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/UZ6Erok.png",
      },
    ],
  },
  {
    name: "Tsuchikage (S)",
    url: "https://i.imgur.com/2TGh48c.png",
    description:
      "The Third Tsuchikage of the Hidden Rock Village, Oonoki is an intensely proud and headstrong man, despite his advanced age. An expert in a variety of jutsu, and notably able to fly, Oonoki is renowned for his unique nature transformation, the Dust Release kekkei tota, with which he can outright vaporize his enemies.",
    descriptionBR:
      "The Third Tsuchikage of the Hidden Rock Village, Oonoki is an intensely proud and headstrong man, despite his advanced age. An expert in a variety of jutsu, and notably able to fly, Oonoki is renowned for his unique nature transformation, the Dust Release kekkei tota, with which he can outright vaporize his enemies.",
    skills: [
      {
        name: "Detachment of Primitive World",
        description:
          "Ohnoki isolates an enemy with his dust release, dealing 10 affliction damage to them. For 1 turn, that enemy will be invulnerable to helpful skills and their harmful skills will be stunned. The following turn, this skill will be replaced by 'Dust Implode'.",
        descriptionBR:
          "Ohnoki isolates an enemy with his dust release, dealing 10 affliction damage to them. For 1 turn, that enemy will be invulnerable to helpful skills and their harmful skills will be stunned. The following turn, this skill will be replaced by 'Dust Implode'.",
        energy: ["Gen"],
        classes: ["Chakra", "Ranged", "Instant", "Unique", "Affliction"],
        cooldown: 1,
        url: "https://i.imgur.com/IRQ1VBv.png",
      },
      {
        name: "Lightweight Rock Technique",
        description:
          "Onhoki touches an ally and makes them much lighter. For 4 turns, each time that ally uses a new skill, the cost of their harmful skills will be decreased by 1 random for 1 turn. This skill may not be used an already affected ally.",
        descriptionBR:
          "Onhoki touches an ally and makes them much lighter. For 4 turns, each time that ally uses a new skill, the cost of their harmful skills will be decreased by 1 random for 1 turn. This skill may not be used an already affected ally.",
        energy: [],
        classes: ["Chakra", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/sq51r2K.png",
      },
      {
        name: "Rock Fist",
        description:
          "Increasing his striking power with Rock Fist, Ohnoki deals 30 damage to one enemy. Afterwards, Ohnoki gains 15 permanent destructible defense.",
        descriptionBR:
          "Increasing his striking power with Rock Fist, Ohnoki deals 30 damage to one enemy. Afterwards, Ohnoki gains 15 permanent destructible defense.",
        energy: ["Blood", "Random"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/IubtdOZ.png",
      },
      {
        name: "Effortless Flight",
        description:
          "This skill makes Tsuchikage (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Tsuchikage (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Chakra", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/5ctULD8.png",
      },
      {
        name: "Dust Implode",
        description:
          "Ohnoki incinerates an enemey trapped by 'Detachment of Primitive World' into mere particles, removing all helpful skills from that enemy and dealing 40 damage to them. This skill cannot be ignored or countered.",
        descriptionBR:
          "Ohnoki incinerates an enemey trapped by 'Detachment of Primitive World' into mere particles, removing all helpful skills from that enemy and dealing 40 damage to them. This skill cannot be ignored or countered.",
        energy: ["Gen", "Random"],
        classes: ["Chakra", "Ranged", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/L9B79qi.png",
      },
    ],
  },
  {
    name: "Tsunade (S)",
    url: "https://i.imgur.com/TgVKWQY.png",
    description:
      "No longer just a Sannin, Tsunade is the new Kage of Konoha, and has taken a large amount of responsibility on her shoulders. Knowing that holding back is no longer an option, Tsunade taps into her seal to gain an impressive power over her foes.",
    descriptionBR:
      "No longer just a Sannin, Tsunade is the new Kage of Konoha, and has taken a large amount of responsibility on her shoulders. Knowing that holding back is no longer an option, Tsunade taps into her seal to gain an impressive power over her foes.",
    skills: [
      {
        name: "Heavenly Spear Kick",
        description:
          "Tsunade spears one enemy with her foot, destroying all their destructible defense and dealing 20 piercing damage to them. For 1 turn, that enemy's melee skills will deal 50% less damage. While empowered, this skill will deal 30 piercing damage instead.",
        descriptionBR:
          "Tsunade spears one enemy with her foot, destroying all their destructible defense and dealing 20 piercing damage to them. For 1 turn, that enemy's melee skills will deal 50% less damage. While empowered, this skill will deal 30 piercing damage instead.",
        energy: ["Tai"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/FYabOjw.png",
      },
      {
        name: "Enhanced Healing Wave",
        description:
          "Tsunade pours chakra into one ally, healing them for 30 health. Additionally, that character will heal an additional 10 health for 2 turns. If empowered, this skill will heal 40 health and the secondary effect will last an additional 1 turn.",
        descriptionBR:
          "Tsunade pours chakra into one ally, healing them for 30 health. Additionally, that character will heal an additional 10 health for 2 turns. If empowered, this skill will heal 40 health and the secondary effect will last an additional 1 turn.",
        energy: ["Nin", "Random"],
        classes: ["Chakra", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/uh03Dqh.png",
      },
      {
        name: "Tsunade: Strength of a Hundred Seal",
        description:
          "Tsunade taps into her seal. If Tsunade has 75 health or less, she will instantly heal 15 health. The next time Tsunade uses a skill, it will be empowered. If this skill is used while empowered, it will heal Tsunade 50 health and grant her 2 random chakra.",
        descriptionBR:
          "Tsunade taps into her seal. If Tsunade has 75 health or less, she will instantly heal 15 health. The next time Tsunade uses a skill, it will be empowered. If this skill is used while empowered, it will heal Tsunade 50 health and grant her 2 random chakra.",
        energy: [],
        classes: ["Chakra", "Instant"],
        cooldown: 2,
        url: "https://i.imgur.com/MWbYl7o.png",
      },
      {
        name: "Tsunade Protection",
        description:
          "This skill makes Tsunade (S) invulnerable for 1 turn. This skill is not affected by 'Tsunade: Strength of a Hundred Seal'.",
        descriptionBR:
          "This skill makes Tsunade (S) invulnerable for 1 turn. This skill is not affected by 'Tsunade: Strength of a Hundred Seal'.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/7SbfiJG.png",
      },
    ],
  },
  {
    name: "Mifune (S)",
    url: "https://i.imgur.com/dU6F330.png",
    description:
      "Mifune is a samurai and leader of the Land of Iron, and now in the war he is the commander of the fourth division. His unmatched swordsmanship makes him capable of attacking and counterattacking any enemy regardless of how fast their movements are.",
    descriptionBR:
      "Mifune is a samurai and leader of the Land of Iron, and now in the war he is the commander of the fourth division. His unmatched swordsmanship makes him capable of attacking and counterattacking any enemy regardless of how fast their movements are.",
    skills: [
      {
        name: "Samurai Troops",
        description:
          "By commanding his samurai troops, Mifune deals 5 piercing damage to all enemies and makes them deal 5 less non-affliction damage for 1 turn. Also for 1 turn, all Mifune team will deal 5 more damage from melee skills. This skill becomes 'Flash' with a bloodline cost.",
        descriptionBR:
          "By commanding his samurai troops, Mifune deals 5 piercing damage to all enemies and makes them deal 5 less non-affliction damage for 1 turn. Also for 1 turn, all Mifune team will deal 5 more damage from melee skills. This skill becomes 'Flash' with a bloodline cost.",
        energy: ["Random"],
        classes: ["Physical", "Ranged", "Instant", "Harmful"],
        cooldown: 2,
        url: "https://i.imgur.com/BTOiy9P.png",
      },
      {
        name: "Iaito",
        description:
          "Reacting one enemy move, Mifune deals them 15 piercing damage and becomes invulnerable from physical skills for 1 turn. This skill becomes 'Flash' with a taijutsu cost.",
        descriptionBR:
          "Reacting one enemy move, Mifune deals them 15 piercing damage and becomes invulnerable from physical skills for 1 turn. This skill becomes 'Flash' with a taijutsu cost.",
        energy: ["Random"],
        classes: ["Physical", "Melee", "Instant", "Harmful"],
        cooldown: 2,
        url: "https://i.imgur.com/N9z93nK.png",
      },
      {
        name: "Raiton Pierce",
        description:
          "Mifuse uses a fast lightning chakra stab to one enemy, dealing them 15 piercing damage and makes them invulnerable from new helpful skills. This skill becomes 'Flash' with a genjutsu cost.",
        descriptionBR:
          "Mifuse uses a fast lightning chakra stab to one enemy, dealing them 15 piercing damage and makes them invulnerable from new helpful skills. This skill becomes 'Flash' with a genjutsu cost.",
        energy: ["Random"],
        classes: ["Chakra", "Ranged", "Instant", "Harmful"],
        cooldown: 2,
        url: "https://i.imgur.com/0jU2BHv.png",
      },
      {
        name: "Samurai Guard",
        description: "This skill makes Mifune invulnerable for 1 turn.",
        descriptionBR: "This skill makes Mifune invulnerable for 1 turn.",
        energy: ["Random"],
        classes: ["Physical", "Instant", "Helpful"],
        cooldown: 4,
        url: "https://i.imgur.com/fXaEM5k.png",
      },
      {
        name: "Flash",
        description:
          "With his more powerful cut, Mifune deals 30 piercing damage to one enemy and stuns their physical and chakra skills. This skill costs a specific chakra depending on the skill that is replaced by it.",
        descriptionBR:
          "With his more powerful cut, Mifune deals 30 piercing damage to one enemy and stuns their physical and chakra skills. This skill costs a specific chakra depending on the skill that is replaced by it.",
        energy: [],
        classes: ["Chakra", "Ranged", "Instant", "Unique", "Harmful"],
        cooldown: 2,
        url: "https://i.imgur.com/g2hH8Tr.png",
      },
    ],
  },
  {
    name: "Senju Hashirama",
    url: "https://i.imgur.com/bOIy76f.png",
    description:
      "A member of the Senju clan, and one of the greatest warriors during the Warring States Period who went on to create Konoha. Even before becoming the Hokage, Hashirama proved his power and ability with his unmatched Wood Release jutsus.",
    descriptionBR:
      "A member of the Senju clan, and one of the greatest warriors during the Warring States Period who went on to create Konoha. Even before becoming the Hokage, Hashirama proved his power and ability with his unmatched Wood Release jutsus.",
    skills: [
      {
        name: "Wood Release: Wood Dragon",
        description:
          "Hashirama creates a wooden dragon that drains chakra. For 2 turns, Hashirama will become invulnerable to all chakra skills* and for 2 turns, Hashirama will steal 1 taijutsu or ninjutsu chakra from one enemy.",
        descriptionBR:
          "Hashirama creates a wooden dragon that drains chakra. For 2 turns, Hashirama will become invulnerable to all chakra skills* and for 2 turns, Hashirama will steal 1 taijutsu or ninjutsu chakra from one enemy.",
        energy: ["Blood", "Random"],
        classes: ["Chakra", "Melee", "Action", "Unique", "Instant*"],
        cooldown: 2,
        url: "https://i.imgur.com/2n7tPEC.png",
      },
      {
        name: "Wood Release: Wood Human",
        description:
          "Creating a giant statue of a human, for 2 turns, Hashirama will become invulnerable to all physical skills* and for 2 turns, Hashirama will deal 20 damage to one enemy.",
        descriptionBR:
          "Creating a giant statue of a human, for 2 turns, Hashirama will become invulnerable to all physical skills* and for 2 turns, Hashirama will deal 20 damage to one enemy.",
        energy: ["Blood", "Random"],
        classes: ["Physical", "Melee", "Action", "Unique", "Instant*"],
        cooldown: 2,
        url: "https://i.imgur.com/888TgIS.png",
      },
      {
        name: "Wood Release: True Thousand Hands",
        description:
          "Hashirama summons a giant buddha that grants 30 destructible defense to Hashirama and his allies and for 3 turns, if used, 'Wood Release: Wood Dragon' and 'Wood Release: Wood Human' will last 1 additional turn and cost 1 less random chakra.",
        descriptionBR:
          "Hashirama summons a giant buddha that grants 30 destructible defense to Hashirama and his allies and for 3 turns, if used, 'Wood Release: Wood Dragon' and 'Wood Release: Wood Human' will last 1 additional turn and cost 1 less random chakra.",
        energy: ["Blood", "Blood"],
        classes: ["Physical", "Unique", "Instant"],
        cooldown: 5,
        url: "https://i.imgur.com/8b5cPgT.png",
      },
      {
        name: "Sage Knowledge",
        description:
          "This skill makes Senju Hashirama <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Senju Hashirama <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Mental", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/ab83NlH.png",
      },
    ],
  },
  {
    name: "Uchiha Madara",
    url: "https://i.imgur.com/uNZqC39.png",
    description:
      "The once leader of the Uchiha clan during the founding of Konoha who unfortunately disagreed with Konoha's kage on how to achieve peace. Madara was one of the few ninjas capable of matching Hashirama's power, with the use of his Mangekyou and Susanoo.",
    descriptionBR:
      "The once leader of the Uchiha clan during the founding of Konoha who unfortunately disagreed with Konoha's kage on how to achieve peace. Madara was one of the few ninjas capable of matching Hashirama's power, with the use of his Mangekyou and Susanoo.",
    skills: [
      {
        name: "Eternal Mangekyou",
        description:
          "Madara uses his Eternal Mangekyou Sharingan. For 4 turns, all non-affliction damage used against him will be reduced to a maximum of 25. During this time, Madara can use this skill again for no cost to ignore all harmful effects except damage for 1 turn.",
        descriptionBR:
          "Madara uses his Eternal Mangekyou Sharingan. For 4 turns, all non-affliction damage used against him will be reduced to a maximum of 25. During this time, Madara can use this skill again for no cost to ignore all harmful effects except damage for 1 turn.",
        energy: ["Random"],
        classes: ["Mental", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/qEYeI3g.png",
      },
      {
        name: "Great Fire Annihilation",
        description:
          "Madara immolates the entire battlefield, dealing 10 affliction damage to one enemy and 5 to all others for 3 turns. During this time, if an enemy uses a new helpful skill, they will receive 10 affliction damage. While 'Eternal Mangekyou' is active, this skill is improved and will have no cooldown.",
        descriptionBR:
          "Madara immolates the entire battlefield, dealing 10 affliction damage to one enemy and 5 to all others for 3 turns. During this time, if an enemy uses a new helpful skill, they will receive 10 affliction damage. While 'Eternal Mangekyou' is active, this skill is improved and will have no cooldown.",
        energy: ["Nin"],
        classes: ["Chakra", "Ranged", "Action", "Affliction"],
        cooldown: 1,
        url: "https://i.imgur.com/7EHfwj5.png",
      },
      {
        name: "Madara: Susanoo",
        description:
          "Madara encases himself in his Susanoo, gaining 70 destructible defense. During this time, this skill will be replaced by 'Armored Susanoo Assault'. Using this skill will reset the stacks of 'Armored Susanoo Assault'.",
        descriptionBR:
          "Madara encases himself in his Susanoo, gaining 70 destructible defense. During this time, this skill will be replaced by 'Armored Susanoo Assault'. Using this skill will reset the stacks of 'Armored Susanoo Assault'.",
        energy: ["Blood", "Blood"],
        classes: ["Chakra", "Instant", "Unique"],
        cooldown: 5,
        url: "https://i.imgur.com/X7bSGDC.png",
      },
      {
        name: "Emergency Susanoo Defense",
        description:
          "This skill makes Uchiha Madara <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Uchiha Madara <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Chakra", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/hsPr2mq.png",
      },
      {
        name: "Armored Susanoo Assault",
        description:
          "Madara's Susanoo armors up and attacks one enemy with its sword, dealing 30 damage to them and an additional 5 damage for each turn that 'Madara: Susanoo' has been active. This skill cannot be countered.",
        descriptionBR:
          "Madara's Susanoo armors up and attacks one enemy with its sword, dealing 30 damage to them and an additional 5 damage for each turn that 'Madara: Susanoo' has been active. This skill cannot be countered.",
        energy: ["Blood", "Random"],
        classes: ["Chakra", "Melee", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/hVpzmJO.png",
      },
    ],
  },
  {
    name: "Deidara (S)",
    url: "https://i.imgur.com/d3cdtXc.jpg",
    description:
      "A former ninja of the Earth Village and now a junior Akatsuki member, Deidara is able to fuse clay and chakra to create devastating explosives.",
    descriptionBR:
      "A former ninja of the Earth Village and now a junior Akatsuki member, Deidara is able to fuse clay and chakra to create devastating explosives.",
    skills: [
      {
        name: "Clay Mold",
        description:
          "First use changes Small Explosives into Medium. Second use changes Medium Explosives into Large. Third use changes Large Explosives into Small. This skill is Invisible to enemies.",
        descriptionBR:
          "First use changes Small Explosives into Medium. Second use changes Medium Explosives into Large. Third use changes Large Explosives into Small. This skill is Invisible to enemies.",
        energy: [],
        classes: ["Chakra", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/Gw4LiWm.jpg",
      },
      {
        name: "Explosives - Small, Medium, Large",
        description:
          "Small Explosives: Does 20 piercing damage to one enemy and ignores invulnerability. Medium Explosives: Does 30 damage to one enemy. Large Explosives: Does 25 damage to all enemies.",
        descriptionBR:
          "Small Explosives: Does 20 piercing damage to one enemy and ignores invulnerability. Medium Explosives: Does 30 damage to one enemy. Large Explosives: Does 25 damage to all enemies.",
        energy: ["Nin"],
        classes: ["Chakra", "Instant", "Ranged", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/n4UNWr6.jpg",
      },
      {
        name: "Art is a Bang",
        description:
          "Deidara prepares one of his clay clones to make a huge explosion dealing 35 damage to all enemies when he dies. This skill may only be used once and is invisible until he dies.",
        descriptionBR:
          "Deidara prepares one of his clay clones to make a huge explosion dealing 35 damage to all enemies when he dies. This skill may only be used once and is invisible until he dies.",
        energy: ["Blood", "Nin"],
        classes: ["Chakra", "Instant", "Ranged", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/NstFXkV.jpg",
      },
      {
        name: "Clay Clone",
        description:
          "This skill makes Deidara (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Deidara (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Chakra", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/Sp444Id.jpg",
      },
      {
        name: "C4",
        description:
          "Deidara (S) uses C4 on an enemy. Art is a Bang will deal 10 more damage to that enemy permanently. This skill stacks.",
        descriptionBR:
          "Deidara (S) uses C4 on an enemy. Art is a Bang will deal 10 more damage to that enemy permanently. This skill stacks.",
        energy: [],
        classes: ["Chakra", "Instant", "Ranged", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/DEZPRMV.png",
      },
    ],
  },
  {
    name: "Kisame Body Double (S)",
    url: "https://i.imgur.com/bqqAtVc.jpeg",
    description:
      "By using one of Pein's techniques a Sand Nin spy for Akatsuki is changed to look like Kisame. The body double is controlled by Kisame but only has a third of his chakra.",
    descriptionBR:
      "By using one of Pein's techniques a Sand Nin spy for Akatsuki is changed to look like Kisame. The body double is controlled by Kisame but only has a third of his chakra.",
    skills: [
      {
        name: "Explosive Water Shock Wave",
        description:
          "Kisame Body Double (S) fills the battlefield with water. For 3 turns, all allies including Kisame will lose one less chakra if a chakra removal or stealing skill is used on them. For 3 turns, all enemies who use a skill will have the cooldown of that skill increased by 1 turn.*",
        descriptionBR:
          "Kisame Body Double (S) fills the battlefield with water. For 3 turns, all allies including Kisame will lose one less chakra if a chakra removal or stealing skill is used on them. For 3 turns, all enemies who use a skill will have the cooldown of that skill increased by 1 turn.*",
        energy: ["Blood", "Random"],
        classes: ["Physical", "Instant", "Ranged", "Affliction*"],
        cooldown: 4,
        url: "https://i.imgur.com/zVJTGma.jpeg",
      },
      {
        name: "Water Prison Technique",
        description:
          "Using a bubble of water, Kisame stuns the physical or ranged skills of one enemy for 1 turn. During this time the enemy takes 15 affliction damage* and becomes invulnerable to friendly skills, and Kisame gains 15 points of damage reduction. During Explosive Water Shock Wave this skill costs 1 random chakra.",
        descriptionBR:
          "Using a bubble of water, Kisame stuns the physical or ranged skills of one enemy for 1 turn. During this time the enemy takes 15 affliction damage* and becomes invulnerable to friendly skills, and Kisame gains 15 points of damage reduction. During Explosive Water Shock Wave this skill costs 1 random chakra.",
        energy: ["Blood"],
        classes: ["Chakra", "Affliction*", "Instant", "Melee"],
        cooldown: 1,
        url: "https://i.imgur.com/gmuc252.jpeg",
      },
      {
        name: "Five Man-Eating Sharks",
        description:
          "Kisame Body Double summons five sharks of water who attack one enemy dealing 25 damage for 2 turns. During Explosive Water Shock Wave this skill costs 1 ninjutsu chakra.",
        descriptionBR:
          "Kisame Body Double summons five sharks of water who attack one enemy dealing 25 damage for 2 turns. During Explosive Water Shock Wave this skill costs 1 ninjutsu chakra.",
        energy: ["Nin", "Random"],
        classes: ["Physical", "Action", "Ranged"],
        cooldown: 0,
        url: "https://i.imgur.com/csZyWj6.jpeg",
      },
      {
        name: "Kisame Body Double (S) Water Clone",
        description:
          "This skill makes Kisame Body Double (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Kisame Body Double (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Chakra", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/lRyljhc.jpeg",
      },
    ],
  },
  {
    name: "Itachi Body Double (S)",
    url: "https://i.imgur.com/U1zO7L5.jpg",
    description:
      "By using one of Pein's techniques a Sand Nin spy for Akatsuki is changed to look like Itachi. The body double is controlled by Itachi but only has a third of his chakra.",
    descriptionBR:
      "By using one of Pein's techniques a Sand Nin spy for Akatsuki is changed to look like Itachi. The body double is controlled by Itachi but only has a third of his chakra.",
    skills: [
      {
        name: "Finger Genjutsu",
        description:
          "Itachi affects one enemy with Finger Genjutsu for 1 turn. If the affected enemy uses any skill on Itachi Body Double (S) or his allies that skill will be countered and that enemy will take 10 damage and Itachi Body Double (S) will gain 1 genjutsu chakra. The target of this skill is invisible.",
        descriptionBR:
          "Itachi affects one enemy with Finger Genjutsu for 1 turn. If the affected enemy uses any skill on Itachi Body Double (S) or his allies that skill will be countered and that enemy will take 10 damage and Itachi Body Double (S) will gain 1 genjutsu chakra. The target of this skill is invisible.",
        energy: ["Gen"],
        classes: ["Mental", "Instant", "Ranged"],
        cooldown: 1,
        url: "https://i.imgur.com/9kA7uYQ.jpg",
      },
      {
        name: "Genjutsu Reversal",
        description:
          "For 2 turns if any enemy uses a skill which is non-unique on Itachi Body Double (S), he will reflect that skill onto the enemy who used it. This skill is invisible.",
        descriptionBR:
          "For 2 turns if any enemy uses a skill which is non-unique on Itachi Body Double (S), he will reflect that skill onto the enemy who used it. This skill is invisible.",
        energy: ["Blood", "Gen"],
        classes: ["Mental", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/oif8mlK.jpg",
      },
      {
        name: "Goukakyuu no Jutsu",
        description:
          "Itachi Body Double (S) creates a large fireball that scorches the battlefield. One enemy takes 20 damage. The following turn all enemies take an additional 10 affliction damage.*",
        descriptionBR:
          "Itachi Body Double (S) creates a large fireball that scorches the battlefield. One enemy takes 20 damage. The following turn all enemies take an additional 10 affliction damage.*",
        energy: ["Nin"],
        classes: ["Chakra", "Instant", "Ranged", "Affliction*"],
        cooldown: 1,
        url: "https://i.imgur.com/HUCVDhp.jpg",
      },
      {
        name: "Illusionary Raven Bunshin",
        description:
          "This skill makes Itachi Body Double (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Itachi Body Double (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Mental", "Instant", "Unique"],
        cooldown: 4,
        url: "https://i.imgur.com/oyzXfwY.jpg",
      },
    ],
  },
  {
    name: "Sasori of the Red Sand (S)",
    url: "https://i.imgur.com/8DZ0RlZ.jpg",
    description:
      "Sasori (S) is a senior Akatsuki member and a legendary puppet master. He is even rumored to have defeated an entire nation with puppets alone.",
    descriptionBR:
      "Sasori (S) is a senior Akatsuki member and a legendary puppet master. He is even rumored to have defeated an entire nation with puppets alone.",
    skills: [
      {
        name: "Puppet Mastery",
        description:
          "Sasori (S) may use Needle Shot and Tail Strike and gains 10 destructible defense. At 75 health he may use Arm Trap and Iron Sand and gains 20 destructible defense. At 50 health he may use 100 Puppets and Fire-Water and gains 30 destructible defense. This skill is permanent.",
        descriptionBR:
          "Sasori (S) may use Needle Shot and Tail Strike and gains 10 destructible defense. At 75 health he may use Arm Trap and Iron Sand and gains 20 destructible defense. At 50 health he may use 100 Puppets and Fire-Water and gains 30 destructible defense. This skill is permanent.",
        energy: [],
        classes: ["Chakra", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/s0arP2O.jpg",
      },
      {
        name: "Needle Shot, Arm Trap, 100 Puppets",
        description:
          "1) Needle Shot deals 10 damage to one enemy. Additionally, the target takes 5 affliction damage every turn after*. 2) Arm Trap deals 10 affliction damage for 4 turns to one enemy. 3) 100 Puppets deals 20 damage to all enemies.",
        descriptionBR:
          "1) Needle Shot deals 10 damage to one enemy. Additionally, the target takes 5 affliction damage every turn after*. 2) Arm Trap deals 10 affliction damage for 4 turns to one enemy. 3) 100 Puppets deals 20 damage to all enemies.",
        energy: ["Random", "Random"],
        classes: ["Physical", "Instant", "Ranged", "Unique", "Affliction"],
        cooldown: 0,
        url: "https://i.imgur.com/Y151Djn.jpg",
      },
      {
        name: "Tail Strike, Iron Sand, Fire-Water",
        description:
          "1) Tail Strike deals 20 damage to one enemy. Additionally, they take 5 affliction damage every turn after.* 2) Iron Sand has the same effects as Tail Strike but targets all enemies. 3) Fire-Water deals 50 damage to one enemy.",
        descriptionBR:
          "1) Tail Strike deals 20 damage to one enemy. Additionally, they take 5 affliction damage every turn after.* 2) Iron Sand has the same effects as Tail Strike but targets all enemies. 3) Fire-Water deals 50 damage to one enemy.",
        energy: ["Blood", "Nin"],
        classes: ["Physical", "Instant", "Ranged", "Unique", "Affliction"],
        cooldown: 2,
        url: "https://i.imgur.com/P84i0eU.jpg",
      },
      {
        name: "Core Shift",
        description:
          "This skill makes Sasori of the Red Sand (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Sasori of the Red Sand (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant", "Unique"],
        cooldown: 4,
        url: "https://i.imgur.com/6RlvYnt.jpg",
      },
    ],
  },
  {
    name: "Hidan (S)",
    url: "https://i.imgur.com/BsRLXW8.jpg",
    description:
      "Hidan(s) is a member of Akatsuki and a worshiper of the obscure god Jashin. He is apparently immortal and has perhaps the foulest mouth of the entire criminal organization.",
    descriptionBR:
      "Hidan(s) is a member of Akatsuki and a worshiper of the obscure god Jashin. He is apparently immortal and has perhaps the foulest mouth of the entire criminal organization.",
    skills: [
      {
        name: "Reaping Scythe",
        description:
          "Hidan (S) attacks one enemy with his scythe dealing 15 damage to them and he gains 10 permanent destructible defense. Curse of Jashin may be used on the targeted enemy the following turn. This skill cannot be used on an enemy affected by Curse of Jashin.",
        descriptionBR:
          "Hidan (S) attacks one enemy with his scythe dealing 15 damage to them and he gains 10 permanent destructible defense. Curse of Jashin may be used on the targeted enemy the following turn. This skill cannot be used on an enemy affected by Curse of Jashin.",
        energy: ["Random"],
        classes: ["Physical", "Ranged", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/MjUnVzm.jpg",
      },
      {
        name: "Curse of Jashin",
        description:
          "Hidan curses an enemy. For 2 turns, all harmful skills used on Hidan will be reflected upon the cursed enemy. During this time, 'Impale' may be used. This skill ignores invulnerability and cannot be countered or reflected.",
        descriptionBR:
          "Hidan curses an enemy. For 2 turns, all harmful skills used on Hidan will be reflected upon the cursed enemy. During this time, 'Impale' may be used. This skill ignores invulnerability and cannot be countered or reflected.",
        energy: ["Gen"],
        classes: ["Mental", "Ranged", "Action", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/xXLYmTW.jpg",
      },
      {
        name: "Impale",
        description:
          "Hidan (S) impales himself with a large metal spike dealing 40 piercing damage to one enemy currently the target of Curse of Jashin and removes 1 bloodline or ninjutsu chakra from them. This skill ignores invulnerability.",
        descriptionBR:
          "Hidan (S) impales himself with a large metal spike dealing 40 piercing damage to one enemy currently the target of Curse of Jashin and removes 1 bloodline or ninjutsu chakra from them. This skill ignores invulnerability.",
        energy: ["Tai"],
        classes: ["Mental", "Ranged", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/k9okawc.jpg",
      },
      {
        name: "Immortality",
        description: "This skill makes Hidan (S) invulnerable for 1 turn.",
        descriptionBR: "This skill makes Hidan (S) invulnerable for 1 turn.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/t2PRUAx.jpg",
      },
    ],
  },
  {
    name: "Kakuzu (S)",
    url: "https://i.imgur.com/XjrR5fI.jpg",
    description:
      "A missing-nin of mysterious talents and a member of Akatsuki, Kakuzu(s) is certainly older than he appears. He seems to only be concerned with money and the bounties which provide him with it.",
    descriptionBR:
      "A missing-nin of mysterious talents and a member of Akatsuki, Kakuzu(s) is certainly older than he appears. He seems to only be concerned with money and the bounties which provide him with it.",
    skills: [
      {
        name: "Fuuton Atsugai",
        description:
          "Fuuton Atsugai deals 30 damage to one enemy and stuns their chakra and ranged skills for 1 turn. Becomes Katon Zukokku after being used for 1 turn. Katon Zukokku deals 15 affliction damage to all enemies for 1 bloodline.",
        descriptionBR:
          "Fuuton Atsugai deals 30 damage to one enemy and stuns their chakra and ranged skills for 1 turn. Becomes Katon Zukokku after being used for 1 turn. Katon Zukokku deals 15 affliction damage to all enemies for 1 bloodline.",
        energy: ["Nin", "Random"],
        classes: ["Chakra", "Ranged", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/xnnPjNp.jpg",
      },
      {
        name: "Raiton Gian",
        description:
          "Raiton Gian deals 30 piercing damage to one enemy. Becomes Inferno Gust after being used for 1 turn. Inferno Gust deals 40 damage to one enemy and 15 to all other enemies for 1 bloodline, 1 ninjutsu.",
        descriptionBR:
          "Raiton Gian deals 30 piercing damage to one enemy. Becomes Inferno Gust after being used for 1 turn. Inferno Gust deals 40 damage to one enemy and 15 to all other enemies for 1 bloodline, 1 ninjutsu.",
        energy: ["Gen", "Random"],
        classes: ["Chakra", "Ranged", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/XqDsue7.jpg",
      },
      {
        name: "Heart Steal",
        description:
          "Using his tendrils Kakuzu rips the heart out of one enemy and makes it his own. Kakuzu instantly kills that enemy and he heals 35 health if successful. This skill can only be used on an enemy at or below 25 health.",
        descriptionBR:
          "Using his tendrils Kakuzu rips the heart out of one enemy and makes it his own. Kakuzu instantly kills that enemy and he heals 35 health if successful. This skill can only be used on an enemy at or below 25 health.",
        energy: ["Random"],
        classes: ["Physical", "Melee", "Instant", "Unique"],
        cooldown: 4,
        url: "https://i.imgur.com/au3l9TW.jpg",
      },
      {
        name: "Iron Skin Technique",
        description: "This skill makes Kakuzu (S) invulnerable for 1 turn.",
        descriptionBR: "This skill makes Kakuzu (S) invulnerable for 1 turn.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/h5FVWmK.jpg",
      },
      {
        name: "Katon Zukokku",
        description: "Katon Zukokku deals 15 affliction damage to all enemies.",
        descriptionBR:
          "Katon Zukokku deals 15 affliction damage to all enemies.",
        energy: ["Blood"],
        classes: ["Chakra", "Ranged", "Instant", "Affliction"],
        cooldown: 0,
        url: "https://i.imgur.com/1x2XnXN.png",
      },
      {
        name: "Inferno Gust",
        description:
          "Inferno gust deal 40 damage to one enemy and 15 to all other enemies.",
        descriptionBR:
          "Inferno gust deal 40 damage to one enemy and 15 to all other enemies.",
        energy: ["Blood", "Nin"],
        classes: ["Chakra", "Ranged", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/MTuMhez.jpg",
      },
    ],
  },
  {
    name: "Uchiha Itachi (S)",
    url: "https://i.imgur.com/YKP5Zef.jpg",
    description:
      "Uchiha Itachi (S) is a member of Akatsuki, and the brother of Uchiha Sasuke. He has mastered the sharingan completely.",
    descriptionBR:
      "Uchiha Itachi (S) is a member of Akatsuki, and the brother of Uchiha Sasuke. He has mastered the sharingan completely.",
    skills: [
      {
        name: "Amaterasu Field",
        description:
          "Itachi creates a field around his team using Amaterasu. For 1 turn, any enemy that uses a new skill on Itachi (S) or his allies will be dealt 5 affliction damage permanently*. This skill is invisible.",
        descriptionBR:
          "Itachi creates a field around his team using Amaterasu. For 1 turn, any enemy that uses a new skill on Itachi (S) or his allies will be dealt 5 affliction damage permanently*. This skill is invisible.",
        energy: ["Nin"],
        classes: ["Chakra", "Affliction", "Ranged*", "Instant", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/2AS9EMK.png",
      },
      {
        name: "Crow Genjutsu",
        description:
          "Itachi places a genjutsu on one enemy. For 1 turn, if that enemy uses a new harmful skill they will be countered. If successfully, the countered enemy's skills will cost 1 additional random chakra until they use a new skill. This skill is invisible.",
        descriptionBR:
          "Itachi places a genjutsu on one enemy. For 1 turn, if that enemy uses a new harmful skill they will be countered. If successfully, the countered enemy's skills will cost 1 additional random chakra until they use a new skill. This skill is invisible.",
        energy: ["Gen"],
        classes: ["Mental", "Ranged", "Instant"],
        cooldown: 2,
        url: "https://i.imgur.com/elSVDBR.png",
      },
      {
        name: "Mastered Mangekyou Sharingan",
        description:
          "Itachi uses his mastered mangekyou sharingan to deceive an enemy. For 1 turn, the first new skill used by that enemy will be reflected to a random different enemy. This skill is invisible and ignores invulnerability.",
        descriptionBR:
          "Itachi uses his mastered mangekyou sharingan to deceive an enemy. For 1 turn, the first new skill used by that enemy will be reflected to a random different enemy. This skill is invisible and ignores invulnerability.",
        energy: ["Blood", "Random"],
        classes: ["Mental", "Instant", "Ranged", "Unique"],
        cooldown: 2,
        url: "https://i.imgur.com/0Pgy8yM.png",
      },
      {
        name: "Clone Genjutsu",
        description:
          "This skill makes Uchiha Itachi (S) invulnerable for 1 turn.",
        descriptionBR:
          "This skill makes Uchiha Itachi (S) invulnerable for 1 turn.",
        energy: ["Random"],
        classes: ["Mental", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/hQfYhTZ.png",
      },
    ],
  },
  {
    name: "Susanoo Itachi (S)",
    url: "https://i.imgur.com/aAWBnUX.png",
    description:
      "After using Amaterasu and Tsukuyomi, Itachi awakened his triumph, Susanoo, and became even stronger, both defensively with his Yata Mirror and offensively with his Totsuka Sword capable of sealing an opponent.",
    descriptionBR:
      "After using Amaterasu and Tsukuyomi, Itachi awakened his triumph, Susanoo, and became even stronger, both defensively with his Yata Mirror and offensively with his Totsuka Sword capable of sealing an opponent.",
    skills: [
      {
        name: "Susanoo Activation",
        description:
          "Uchiha Itachi activates Susanoo, and he takes 10 affliction damage*. Each turn he gains 5 permanent stacking destructible defense and his skills become usable for the rest of the game. This skill cannot be used while it's active.",
        descriptionBR:
          "Uchiha Itachi activates Susanoo, and he takes 10 affliction damage*. Each turn he gains 5 permanent stacking destructible defense and his skills become usable for the rest of the game. This skill cannot be used while it's active.",
        energy: [],
        classes: ["Chakra", "Affliction*", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/CCYvnwu.png",
      },
      {
        name: "Totsuka Sword",
        description:
          "Susanoo Itachi (S) uses the legendary blade of Susanoo to deal 30 piercing damage to 1 enemy and removes one bloodline or genjutsu chakra from them. The following turn this skill won't remove any chakra. This skill requires Susanoo Activation.",
        descriptionBR:
          "Susanoo Itachi (S) uses the legendary blade of Susanoo to deal 30 piercing damage to 1 enemy and removes one bloodline or genjutsu chakra from them. The following turn this skill won't remove any chakra. This skill requires Susanoo Activation.",
        energy: ["Gen", "Random"],
        classes: ["Chakra", "Melee", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/Fsm5S2F.png",
      },
      {
        name: "Yata Mirror",
        description:
          "Using the legendary shield of Susanoo, Itachi (S) ignores all harmful effects used on him for 1 turn. Any enemy that uses a new skill on him will have the cost of their skills increased by 1 random chakra for 1 turn. This skill is invisible and requires Susanoo Activation.",
        descriptionBR:
          "Using the legendary shield of Susanoo, Itachi (S) ignores all harmful effects used on him for 1 turn. Any enemy that uses a new skill on him will have the cost of their skills increased by 1 random chakra for 1 turn. This skill is invisible and requires Susanoo Activation.",
        energy: ["Gen"],
        classes: ["Chakra", "Unique", "Instant"],
        cooldown: 2,
        url: "https://i.imgur.com/4BpmN0l.png",
      },
      {
        name: "Susanoo Defense",
        description:
          "This skill makes Susanoo Itachi (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Susanoo Itachi (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Chakra", "Unique", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/KZFSkLv.png",
      },
    ],
  },
  {
    name: "Konan (S)",
    url: "https://i.imgur.com/V7BSQFp.jpg",
    description:
      "Konan (S) is a member of Akatsuki and a master of origami ninjutsu, earning her the title God's Angel in Amegakure. Able to turn her body into thick sheets of paper, she is capable of multiple forms of attack.",
    descriptionBR:
      "Konan (S) is a member of Akatsuki and a master of origami ninjutsu, earning her the title God's Angel in Amegakure. Able to turn her body into thick sheets of paper, she is capable of multiple forms of attack.",
    skills: [
      {
        name: "Sword of Paper",
        description:
          "Using a sword made of paper, Konan (S) deals 25 piercing damage to 1 enemy.",
        descriptionBR:
          "Using a sword made of paper, Konan (S) deals 25 piercing damage to 1 enemy.",
        energy: ["Blood"],
        classes: ["Physical", "Ranged", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/VdkYoFg.jpg",
      },
      {
        name: "Origami Blanket",
        description:
          "Konan (S) covers one enemy in paper. For 2 turns that enemy has their harmful skills stunned, will be invulnerable to all new helpful skills, and takes 15 damage each turn. During this time, 'Sword of Paper' will deal an additional 10 damage to that enemy.",
        descriptionBR:
          "Konan (S) covers one enemy in paper. For 2 turns that enemy has their harmful skills stunned, will be invulnerable to all new helpful skills, and takes 15 damage each turn. During this time, 'Sword of Paper' will deal an additional 10 damage to that enemy.",
        energy: ["Blood", "Nin"],
        classes: ["Physical", "Ranged", "Action", "Unique"],
        cooldown: 2,
        url: "https://i.imgur.com/MIliKrv.jpg",
      },
      {
        name: "Dance Of The Shikigami",
        description:
          "Konan (S) uses Dance Of The Shikigami dealing 25 damage to one enemy and 25 to a random different enemy.",
        descriptionBR:
          "Konan (S) uses Dance Of The Shikigami dealing 25 damage to one enemy and 25 to a random different enemy.",
        energy: ["Nin", "Random"],
        classes: ["Physical", "Ranged", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/mBWvj54.jpg",
      },
      {
        name: "Onmyoji Dodge",
        description:
          "This skill makes Konan (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Konan (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/grDDbcd.jpg",
      },
    ],
  },
  {
    name: "Nagato (S)",
    url: "https://i.imgur.com/PEZ7ucJ.jpg",
    description:
      "Nagato is the leader of Akatsuki and is also known as Pein. He is in control of the six paths of Pein and was a former student of Jiraiya. Nagato possess the rinnegan and may be the strongest ninja in the shinobi world.",
    descriptionBR:
      "Nagato is the leader of Akatsuki and is also known as Pein. He is in control of the six paths of Pein and was a former student of Jiraiya. Nagato possess the rinnegan and may be the strongest ninja in the shinobi world.",
    skills: [
      {
        name: "Demonic Statue Summoning",
        description:
          "Nagato (S) targets all enemies and deals 20 damage to them. Nagato will gain 10 permanent destructible defense. The following turn, Etheral Dragon will deal an additional 10 damage to enemies affected by this skill.",
        descriptionBR:
          "Nagato (S) targets all enemies and deals 20 damage to them. Nagato will gain 10 permanent destructible defense. The following turn, Etheral Dragon will deal an additional 10 damage to enemies affected by this skill.",
        energy: ["Blood", "Random"],
        classes: ["Chakra", "Ranged", "Unique", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/x9FTMms.jpg",
      },
      {
        name: "Etheral Dragon",
        description:
          "Using Etheral Dragon, Nagato deals 25 damage to one enemy. The following turn, Demonic Statue Summoning will be improved and will cost 2 random chakra instead.",
        descriptionBR:
          "Using Etheral Dragon, Nagato deals 25 damage to one enemy. The following turn, Demonic Statue Summoning will be improved and will cost 2 random chakra instead.",
        energy: ["Gen"],
        classes: ["Chakra", "Ranged", "Unique", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/frO4zbf.jpg",
      },
      {
        name: "Samsara of Heavenly Life",
        description:
          "Nagato (S) uses Samsara of Heavenly Life to heal all allies for 30 health. Any dead ally on Nagato's team will be revived back to 30 health and will become invulnerable for 1 turn. Nagato will lose 50 health* for each ally revived by this skill.",
        descriptionBR:
          "Nagato (S) uses Samsara of Heavenly Life to heal all allies for 30 health. Any dead ally on Nagato's team will be revived back to 30 health and will become invulnerable for 1 turn. Nagato will lose 50 health* for each ally revived by this skill.",
        energy: ["Blood", "Gen"],
        classes: ["Chakra", "Instant", "Unique", "Affliction*"],
        cooldown: 9,
        url: "https://i.imgur.com/WRssnUP.jpg",
      },
      {
        name: "Bansho Block",
        description:
          "This skill makes Nagato (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Nagato (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Chakra", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/ZvysjIj.jpg",
      },
    ],
  },
  {
    name: "Animal Path Pein (S)",
    url: "https://i.imgur.com/8ryFroR.jpg",
    description:
      "Animal Path Pein (S) is one of the six paths of Pein. This Path is able to summon a variety of different beasts for different purposes.",
    descriptionBR:
      "Animal Path Pein (S) is one of the six paths of Pein. This Path is able to summon a variety of different beasts for different purposes.",
    skills: [
      {
        name: "Cerberus Hydra",
        description:
          "Animal Path Pein summons a giant multiple headed dog that deals 30 damage to one enemy. The following 2 turns any enemy that uses a skill will be dealt 15 piercing damage.",
        descriptionBR:
          "Animal Path Pein summons a giant multiple headed dog that deals 30 damage to one enemy. The following 2 turns any enemy that uses a skill will be dealt 15 piercing damage.",
        energy: ["Blood", "Nin"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/Wo05Giy.jpg",
      },
      {
        name: "Drill Bird",
        description:
          "Animal Path Pein summons a giant drill-beaked bird to assault one enemy, dealing 15 damage to them for 3 turns. A random different enemy will also take 15 damage for 3 turns.",
        descriptionBR:
          "Animal Path Pein summons a giant drill-beaked bird to assault one enemy, dealing 15 damage to them for 3 turns. A random different enemy will also take 15 damage for 3 turns.",
        energy: ["Nin", "Random"],
        classes: ["Physical", "Ranged", "Action"],
        cooldown: 4,
        url: "https://i.imgur.com/0utvW5A.jpg",
      },
      {
        name: "Invisible Chameleon",
        description:
          "Animal Path Pein summons a chameleon that is able to become invisible to hide himself. For 4 turns Animal Path Pein will ignore enemy stun effects and gains 50% damage reduction.",
        descriptionBR:
          "Animal Path Pein summons a chameleon that is able to become invisible to hide himself. For 4 turns Animal Path Pein will ignore enemy stun effects and gains 50% damage reduction.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 3,
        url: "https://i.imgur.com/1JrdMnL.jpg",
      },
      {
        name: "Panda Defense",
        description:
          "This skill makes Animal Path Pein (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Animal Path Pein (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/FR1oFXS.jpg",
      },
    ],
  },
  {
    name: "Asura Path Pein (S)",
    url: "https://i.imgur.com/b73xnTa.jpg",
    description:
      "Asura Path Pein (S) is one of the six paths of Pein. His body style is similar to a puppet filled with hidden weapons.",
    descriptionBR:
      "Asura Path Pein (S) is one of the six paths of Pein. His body style is similar to a puppet filled with hidden weapons.",
    skills: [
      {
        name: "Chakra Burst",
        description:
          "Asura uses Chakra Burst on one enemy making them unable to reduce damage or become invulnerable and dealing 20 damage to them for 1 turn. Damage dealt to Asura will be reduced by 25% for 1 turn and any enemy that uses a new skill on Asura will take 10 damage. Becomes Crown Shockwave when used.",
        descriptionBR:
          "Asura uses Chakra Burst on one enemy making them unable to reduce damage or become invulnerable and dealing 20 damage to them for 1 turn. Damage dealt to Asura will be reduced by 25% for 1 turn and any enemy that uses a new skill on Asura will take 10 damage. Becomes Crown Shockwave when used.",
        energy: ["Blood"],
        classes: ["Chakra", "Ranged", "Unique", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/qC4Q7SQ.jpg",
      },
      {
        name: "Cluster Bombs",
        description:
          "Asura Path Pein (S) uses Cluster Bombs on all enemies dealing 10 piercing damage. For 1 turn any enemy that uses a new harmful physical or chakra skill will be dealt 10 piercing damage.",
        descriptionBR:
          "Asura Path Pein (S) uses Cluster Bombs on all enemies dealing 10 piercing damage. For 1 turn any enemy that uses a new harmful physical or chakra skill will be dealt 10 piercing damage.",
        energy: ["Random"],
        classes: ["Physical", "Instant", "Ranged"],
        cooldown: 1,
        url: "https://i.imgur.com/TOErXJO.jpg",
      },
      {
        name: "Heat Seeker",
        description:
          "Asura Path Pein (S) uses Heat Seeker on one enemy. That enemy will take 20 piercing damage when Asura path Pein (S) dies.This skill is invisible until triggered. This skill stacks.",
        descriptionBR:
          "Asura Path Pein (S) uses Heat Seeker on one enemy. That enemy will take 20 piercing damage when Asura path Pein (S) dies.This skill is invisible until triggered. This skill stacks.",
        energy: ["Random"],
        classes: ["Physical", "Instant", "Ranged", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/qkIwe7q.jpg",
      },
      {
        name: "High Speed Reaction",
        description:
          "This skill makes Asura Path Pein (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Asura Path Pein (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/OIuNcgA.jpg",
      },
      {
        name: "Crown Shockwave",
        description:
          "Asura Path Pein (S) deals 20 damage to all enemies. This skill becomes Chakra Burst after being used.",
        descriptionBR:
          "Asura Path Pein (S) deals 20 damage to all enemies. This skill becomes Chakra Burst after being used.",
        energy: ["Blood", "Random"],
        classes: ["Chakra", "Instant", "Unique", "Ranged"],
        cooldown: 0,
        url: "https://i.imgur.com/xt8a6Zf.png",
      },
    ],
  },
  {
    name: "Human Path Pein (S)",
    url: "https://i.imgur.com/v8CSEiq.jpg",
    description:
      "Human Path Pein (S) is one of the six paths of Pein. This path is a mind reader and gathers intel for the other paths.",
    descriptionBR:
      "Human Path Pein (S) is one of the six paths of Pein. This path is a mind reader and gathers intel for the other paths.",
    skills: [
      {
        name: "Mind Invasion",
        description:
          "Human Path Pein (S) uses Mind Invasion on one enemy. That enemy will be dealt 20 piercing damage and have their chakra and mental skills stunned for 1 turn. Soul Steal may be used on the target the following turn.",
        descriptionBR:
          "Human Path Pein (S) uses Mind Invasion on one enemy. That enemy will be dealt 20 piercing damage and have their chakra and mental skills stunned for 1 turn. Soul Steal may be used on the target the following turn.",
        energy: ["Gen"],
        classes: ["Mental", "Instant", "Melee", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/QJdx50b.jpg",
      },
      {
        name: "Soul Steal",
        description:
          "Human Path Pein (S) uses Soul Steal on an enemy effected by Mind Invasion. That enemy will lose 50% of their health. If used on an enemy and that enemy drops to 20 or less health that enemy will be killed. This skill cannot be countered or reflected.",
        descriptionBR:
          "Human Path Pein (S) uses Soul Steal on an enemy effected by Mind Invasion. That enemy will lose 50% of their health. If used on an enemy and that enemy drops to 20 or less health that enemy will be killed. This skill cannot be countered or reflected.",
        energy: ["Tai", "Gen"],
        classes: ["Mental", "Instant", "Melee", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/fA7SGdq.jpg",
      },
      {
        name: "Sneak Attack",
        description:
          "Human Path Pein (S) launches a sneak attack dealing 25 piercing damage to one enemy. This skill ignores invulnerability.",
        descriptionBR:
          "Human Path Pein (S) launches a sneak attack dealing 25 piercing damage to one enemy. This skill ignores invulnerability.",
        energy: ["Tai"],
        classes: ["Physical", "Ranged", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/sA5Hq3L.jpg",
      },
      {
        name: "Rinnegan Awareness",
        description:
          "This skill makes Human Path Pein (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Human Path Pein (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/vlbggxC.jpg",
      },
    ],
  },
  {
    name: "Preta Path Pein (S)",
    url: "https://i.imgur.com/kvUIdzR.jpg",
    description:
      "Preta Path Pein (S) is one of the six paths of Pein. This path is able to nulify jutsus and is used mostly for defensive tactics.",
    descriptionBR:
      "Preta Path Pein (S) is one of the six paths of Pein. This path is able to nulify jutsus and is used mostly for defensive tactics.",
    skills: [
      {
        name: "Energy Shield",
        description:
          "Preta Path (S) uses Energy Shield on one enemy removing 1 bloodline or Genjutsu chakra. That enemy will be dealt 20 piercing damage.",
        descriptionBR:
          "Preta Path (S) uses Energy Shield on one enemy removing 1 bloodline or Genjutsu chakra. That enemy will be dealt 20 piercing damage.",
        energy: ["Nin"],
        classes: ["Chakra", "Instant", "Ranged", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/aSF7Q2O.jpg",
      },
      {
        name: "Rinnegan Absorption",
        description:
          "Preta Path Pein (S) uses Rinnegan Absorption to protect himself. All damage dealt on Preta Path Pein (S) will be ignored and any enemy that uses a new damaging skill on him will lose chakra equal the chakra cost of the skill used (except Random Chakra). This skill is invisible.",
        descriptionBR:
          "Preta Path Pein (S) uses Rinnegan Absorption to protect himself. All damage dealt on Preta Path Pein (S) will be ignored and any enemy that uses a new damaging skill on him will lose chakra equal the chakra cost of the skill used (except Random Chakra). This skill is invisible.",
        energy: ["Nin", "Random"],
        classes: ["Mental", "Instant", "Unique"],
        cooldown: 2,
        url: "https://i.imgur.com/n1Rd3Tt.jpg",
      },
      {
        name: "Chakra Pin",
        description:
          "Using Chakra Pin Preta Path Pein (S) stuns one enemy's physical or melee skills. Preta Path Pein (S) will steal 1 bloodline or genjutsu chakra.",
        descriptionBR:
          "Using Chakra Pin Preta Path Pein (S) stuns one enemy's physical or melee skills. Preta Path Pein (S) will steal 1 bloodline or genjutsu chakra.",
        energy: ["Tai", "Random"],
        classes: ["Physical", "Melee", "Instant", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/RyzGOhN.jpg",
      },
      {
        name: "Agile Dodge",
        description:
          "This skill makes Preta Path Pein (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Preta Path Pein (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/9RZKQtI.jpg",
      },
    ],
  },
  {
    name: "Naraka Path Pein (S)",
    url: "https://i.imgur.com/JMaDKFI.jpg",
    description:
      "Naraka Path Pein (S) is one of the six paths of Pein. This path is able to interrogate it's enemies at will. Naraka Path Pein (S) can also give life as well as take it.",
    descriptionBR:
      "Naraka Path Pein (S) is one of the six paths of Pein. This path is able to interrogate it's enemies at will. Naraka Path Pein (S) can also give life as well as take it.",
    skills: [
      {
        name: "Outer Path",
        description:
          "Naraka Path Pein (S) summons the Outer Path and dealing 12 damage to all enemies for 3 turns. Judgement can be used during this skill.",
        descriptionBR:
          "Naraka Path Pein (S) summons the Outer Path and dealing 12 damage to all enemies for 3 turns. Judgement can be used during this skill.",
        energy: ["Gen", "Random"],
        classes: ["Mental", "Action", "Ranged", "Unique", "Instant*"],
        cooldown: 2,
        url: "https://i.imgur.com/RyWxFYA.jpg",
      },
      {
        name: "Judgement",
        description:
          "Naraka passes Judgement on one enemy when Outer Path is being used. Naraka will steal 20 health from that enemy* and for 1 turn they will ignore healing effects.",
        descriptionBR:
          "Naraka passes Judgement on one enemy when Outer Path is being used. Naraka will steal 20 health from that enemy* and for 1 turn they will ignore healing effects.",
        energy: ["Gen"],
        classes: ["Mental", "Instant", "Melee", "Unique", "Affliction*"],
        cooldown: 0,
        url: "https://i.imgur.com/q4L8qST.jpg",
      },
      {
        name: "Rejuvenation",
        description:
          "Naraka Path Pein (S) uses Rejuvenation on himself or an ally. That character will be healed for 25 health.",
        descriptionBR:
          "Naraka Path Pein (S) uses Rejuvenation on himself or an ally. That character will be healed for 25 health.",
        energy: ["Gen"],
        classes: ["Mental", "Instant", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/qd4Qxag.jpg",
      },
      {
        name: "Chakra Rod Deflection",
        description:
          "This skill makes Naraka Path Pein (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Naraka Path Pein (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/Y94AV55.jpg",
      },
    ],
  },
  {
    name: "Deva Path Pein (S)",
    url: "https://i.imgur.com/FwxsVNS.jpg",
    description:
      "Deva Path Pein (S) is one of the six paths of Pein. This path is able to use itself as the epicenter of magnetism to attract or repel all objects. This path holds the most power and is the main force in battle for Pein.",
    descriptionBR:
      "Deva Path Pein (S) is one of the six paths of Pein. This path is able to use itself as the epicenter of magnetism to attract or repel all objects. This path holds the most power and is the main force in battle for Pein.",
    skills: [
      {
        name: "Chakra Rod",
        description:
          "Deva Path Pein (S) targets one enemy and uses Chakra Rod. When that enemy uses a new skill they will be dealt 15 piercing damage and Deva will steal 1 bloodline or ninjutsu chakra from them. This skill is invisible until triggered. This skill stacks.",
        descriptionBR:
          "Deva Path Pein (S) targets one enemy and uses Chakra Rod. When that enemy uses a new skill they will be dealt 15 piercing damage and Deva will steal 1 bloodline or ninjutsu chakra from them. This skill is invisible until triggered. This skill stacks.",
        energy: ["Tai"],
        classes: ["Physical", "Melee", "Instant", "Unique"],
        cooldown: 2,
        url: "https://i.imgur.com/1GjmoKo.jpg",
      },
      {
        name: "Violent Water Wave",
        description:
          "Deva Path Pein (S) uses Violent Water Wave on all enemies. For 1 turn all enemies chakra or ranged skills will cost 1 additional random chakra. Deva Path Pein (S) gains 50% damage reduction during this skill. This skill becomes Chibaku Tensei for 2 turns.",
        descriptionBR:
          "Deva Path Pein (S) uses Violent Water Wave on all enemies. For 1 turn all enemies chakra or ranged skills will cost 1 additional random chakra. Deva Path Pein (S) gains 50% damage reduction during this skill. This skill becomes Chibaku Tensei for 2 turns.",
        energy: ["Nin"],
        classes: ["Chakra", "Instant", "Ranged"],
        cooldown: 1,
        url: "https://i.imgur.com/s02MnAZ.jpg",
      },
      {
        name: "Universal Pull",
        description:
          "Deva Path Pein (S) uses Universal Pull on one enemy for 1 turn. If that enemy uses a new harmful phsyical or chakra skill they will be countered, will take 20 damage and will deal 10 less non-affliction damage for 1 turn. This skill is invisible and becomes Shinra Tensei for 2 turns.",
        descriptionBR:
          "Deva Path Pein (S) uses Universal Pull on one enemy for 1 turn. If that enemy uses a new harmful phsyical or chakra skill they will be countered, will take 20 damage and will deal 10 less non-affliction damage for 1 turn. This skill is invisible and becomes Shinra Tensei for 2 turns.",
        energy: ["Blood"],
        classes: ["Chakra", "Ranged", "Action", "Unique"],
        cooldown: 2,
        url: "https://i.imgur.com/9wvswDP.jpg",
      },
      {
        name: "Rinnegan Pressure",
        description:
          "This skill makes Deva Path Pein (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Deva Path Pein (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Mental", "Instant", "Unique"],
        cooldown: 4,
        url: "https://i.imgur.com/WrmDvAJ.png",
      },
      {
        name: "Shinra Tensei",
        description:
          "Deva Path Pein (S) uses Shinra Tensei to deal 30 damage to all enemies. For 1 turn Deva Path Pein (S) will become invulnerable. This skill becomes Universal Pull when used.",
        descriptionBR:
          "Deva Path Pein (S) uses Shinra Tensei to deal 30 damage to all enemies. For 1 turn Deva Path Pein (S) will become invulnerable. This skill becomes Universal Pull when used.",
        energy: ["Blood", "Nin"],
        classes: ["Chakra", "Ranged", "Unique", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/kUlhI9a.jpg",
      },
      {
        name: "Chibaku Tensei",
        description:
          "Using his ultimate jutsu Deva Path Pein (S) deals 30 damage to all enemies. For 1 turn damage dealt by the enemy team will be reduced by 5. This skill cannot be countered and becomes Violent Water Wave when used.",
        descriptionBR:
          "Using his ultimate jutsu Deva Path Pein (S) deals 30 damage to all enemies. For 1 turn damage dealt by the enemy team will be reduced by 5. This skill cannot be countered and becomes Violent Water Wave when used.",
        energy: ["Blood", "Nin"],
        classes: ["Chakra", "Ranged", "Unique", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/DlrmdJ2.jpg",
      },
    ],
  },
  {
    name: "Zetsu (S)",
    url: "https://i.imgur.com/daklazj.png",
    description:
      "Zetsu (S) is intent to follow Tobi's orders. With his abilities he will be trouble for anyone that comes across him.",
    descriptionBR:
      "Zetsu (S) is intent to follow Tobi's orders. With his abilities he will be trouble for anyone that comes across him.",
    skills: [
      {
        name: "Spore Technique",
        description:
          "Zetsu plants spore clones into an ally, granting them 10 permanent destructible defense and making them ignore all harmful non-damage effects until this destructible defense is destroyed. When it's destroyed, that ally will gain 1 random chakra. This skill is invisible.",
        descriptionBR:
          "Zetsu plants spore clones into an ally, granting them 10 permanent destructible defense and making them ignore all harmful non-damage effects until this destructible defense is destroyed. When it's destroyed, that ally will gain 1 random chakra. This skill is invisible.",
        energy: ["Random"],
        classes: ["Chakra", "Instant", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/NvIcUVB.png",
      },
      {
        name: "Wood Release Roots",
        description:
          "Zetsu manipulates wood roots and attacks an enemy from below, dealing 30 piercing damage and stunning that enemy's physical and chakra skills for 1 turn. This skill ignores invulnerability.",
        descriptionBR:
          "Zetsu manipulates wood roots and attacks an enemy from below, dealing 30 piercing damage and stunning that enemy's physical and chakra skills for 1 turn. This skill ignores invulnerability.",
        energy: ["Blood", "Random"],
        classes: ["Physical", "Ranged", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/aErdKWP.png",
      },
      {
        name: "Parasite Clone Trap",
        description:
          "Zetsu targets one enemy, reducing their non-affliction damage by 10 permanently. If that enemy uses a new skill, that skill will be copied and 'Parasite Clone Trap' will end. This skill will be replaced by the copied skill for 1 turn. This skill is invisible.",
        descriptionBR:
          "Zetsu targets one enemy, reducing their non-affliction damage by 10 permanently. If that enemy uses a new skill, that skill will be copied and 'Parasite Clone Trap' will end. This skill will be replaced by the copied skill for 1 turn. This skill is invisible.",
        energy: ["Random"],
        classes: ["Chakra", "Ranged", "Instant", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/NmLDNO3.png",
      },
      {
        name: "Zetsu Split",
        description:
          "This skill makes Zetsu (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Zetsu (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant", "Unique"],
        cooldown: 4,
        url: "https://i.imgur.com/5G2uYVn.png",
      },
    ],
  },
  {
    name: "Tobi (S)",
    url: "https://i.imgur.com/nPxJzrx.png",
    description:
      "Tobi is the leader of Akatsuki, as well as an Uchiha. He possesses dimensional skills, being able to suck his targets into his dimension or use the Uchihas' forbidden techniques.",
    descriptionBR:
      "Tobi is the leader of Akatsuki, as well as an Uchiha. He possesses dimensional skills, being able to suck his targets into his dimension or use the Uchihas' forbidden techniques.",
    skills: [
      {
        name: "Kamui",
        description:
          "Using Kamui Tobi (S) deals 20 piercing damage to one enemy. For 2 turns Tobi will become invulnerable to that enemy's skills. If used on an enemy that Tobi is already invulnerable to, this skill will instead deal 25 piercing damage. This skill ignores invulnerability.",
        descriptionBR:
          "Using Kamui Tobi (S) deals 20 piercing damage to one enemy. For 2 turns Tobi will become invulnerable to that enemy's skills. If used on an enemy that Tobi is already invulnerable to, this skill will instead deal 25 piercing damage. This skill ignores invulnerability.",
        energy: ["Gen"],
        classes: ["Chakra", "Ranged", "Unique", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/lNfprXb.png",
      },
      {
        name: "Tobi Sharingan",
        description:
          "Tobi (S) uses his Sharingan. For 3 turns Tobi gains 20% unpierceable damage reduction and will ignore stun effects. During this time Kamui deals 10 more damage and this skill will be replaced by Hidden Izanagi. When this skill is used 70% of Tobi's current health will be stored.",
        descriptionBR:
          "Tobi (S) uses his Sharingan. For 3 turns Tobi gains 20% unpierceable damage reduction and will ignore stun effects. During this time Kamui deals 10 more damage and this skill will be replaced by Hidden Izanagi. When this skill is used 70% of Tobi's current health will be stored.",
        energy: ["Blood"],
        classes: ["Mental", "Unique", "Instant"],
        cooldown: 3,
        url: "https://i.imgur.com/eKymPHu.png",
      },
      {
        name: "Kamui Rescue",
        description:
          "Tobi uses his Kamui to make a rescue on an ally. That ally will become invulnerable for 1 turn. During 'Tobi Sharingan' this skill will be improved and will remove all harmful skills from the protected ally. This skill ignores invulnerability.",
        descriptionBR:
          "Tobi uses his Kamui to make a rescue on an ally. That ally will become invulnerable for 1 turn. During 'Tobi Sharingan' this skill will be improved and will remove all harmful skills from the protected ally. This skill ignores invulnerability.",
        energy: ["Gen"],
        classes: ["Chakra", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/xZz5Q1s.png",
      },
      {
        name: "Uchiha Perception",
        description:
          "This skill makes Tobi (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Tobi (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Mental", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/XDM7lNC.png",
      },
      {
        name: "Hidden Izanagi",
        description:
          "Tobi (S) uses Hidden Izanagi. After 1 turn Tobi's health will return to the health value stored by 'Tobi Sharingan'. This skill is invisible and can only be used once. This skill will be activated even if Tobi is killed.",
        descriptionBR:
          "Tobi (S) uses Hidden Izanagi. After 1 turn Tobi's health will return to the health value stored by 'Tobi Sharingan'. This skill is invisible and can only be used once. This skill will be activated even if Tobi is killed.",
        energy: ["Blood", "Blood", "Random"],
        classes: ["Mental", "Unique", "Ranged*", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/0a4phiY.png",
      },
    ],
  },
  {
    name: "Konan of the Rain (S)",
    url: "https://i.imgur.com/7rPLcCd.png",
    description:
      "Konan of the Rain (S) has returned to the Hidden Rain village. Now that Uzumaki Nagato is dead she is aligned with Uzumaki Naruto and his quest for peace.",
    descriptionBR:
      "Konan of the Rain (S) has returned to the Hidden Rain village. Now that Uzumaki Nagato is dead she is aligned with Uzumaki Naruto and his quest for peace.",
    skills: [
      {
        name: "Paper Chakram",
        description:
          "Konan forms and fires a paper chakram towards an enemy, dealing 35 piercing damage to them. For 1 turn, Konan's skills will cost 1 less random chakra.",
        descriptionBR:
          "Konan forms and fires a paper chakram towards an enemy, dealing 35 piercing damage to them. For 1 turn, Konan's skills will cost 1 less random chakra.",
        energy: ["Blood", "Random"],
        classes: ["Physical", "Ranged", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/moOl9NJ.png",
      },
      {
        name: "Paper Ocean: Chasm Trap",
        description:
          "Konan traps all enemies in a chasm of the ocean made of a million papers. For 3 turns, all non-affliction damage will be reduced to a maximum of 25. During this time, 'Paper Chakram' will cost 1 less random chakra and this skill will be replaced.",
        descriptionBR:
          "Konan traps all enemies in a chasm of the ocean made of a million papers. For 3 turns, all non-affliction damage will be reduced to a maximum of 25. During this time, 'Paper Chakram' will cost 1 less random chakra and this skill will be replaced.",
        energy: ["Gen", "Random"],
        classes: ["Chakra", "Ranged", "Instant", "Unique"],
        cooldown: 5,
        url: "https://i.imgur.com/o4eBv3L.png",
      },
      {
        name: "Explosive Papers Barrage",
        description:
          "Konan rushes toward an enemy and ambushes them with multiple explosive papers, stunning their non helpful-mental skills for 3 turns and dealing 15 damage to them each turn.",
        descriptionBR:
          "Konan rushes toward an enemy and ambushes them with multiple explosive papers, stunning their non helpful-mental skills for 3 turns and dealing 15 damage to them each turn.",
        energy: ["Blood", "Gen", "Random"],
        classes: ["Chakra", "Ranged", "Action", "Unique"],
        cooldown: 3,
        url: "https://i.imgur.com/pD2zBl1.png",
      },
      {
        name: "The Bridge to the Peace",
        description:
          "This skill makes Konan of the Rain (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Konan of the Rain (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Chakra", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/Fl4dbc9.png",
      },
      {
        name: "Paper Ocean: Explosive Papers Detonate",
        description:
          "Konan detonates all the millions of explosive papers, crushing all enemies trapped by 'Paper Ocean: Chasm Trap', and dealing 20 damage to them and stunning their non helpful-mental skills for 2 turns.",
        descriptionBR:
          "Konan detonates all the millions of explosive papers, crushing all enemies trapped by 'Paper Ocean: Chasm Trap', and dealing 20 damage to them and stunning their non helpful-mental skills for 2 turns.",
        energy: ["Blood", "Gen", "Random"],
        classes: ["Chakra", "Ranged", "Action", "Unique"],
        cooldown: 3,
        url: "https://i.imgur.com/GKnsQUx.png",
      },
    ],
  },
  {
    name: "Shinobi Alliance Naruto (S)",
    url: "https://i.imgur.com/VlK9BfK.png",
    description:
      "Having gained complete control of all of the kyuubi's chakra, Naruto will be sure to rampage over every battlefield he comes across.",
    descriptionBR:
      "Having gained complete control of all of the kyuubi's chakra, Naruto will be sure to rampage over every battlefield he comes across.",
    skills: [
      {
        name: "Rasengan Riot",
        description:
          "By forming multiple Rasengan over his head, Naruto deals 30 damage to one enemy. A random teammate of that enemy will also be dealt 10 damage. The following turn, this skill will be replaced by 'Planetary Rasengan'.",
        descriptionBR:
          "By forming multiple Rasengan over his head, Naruto deals 30 damage to one enemy. A random teammate of that enemy will also be dealt 10 damage. The following turn, this skill will be replaced by 'Planetary Rasengan'.",
        energy: ["Random", "Random"],
        classes: ["Chakra", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/JYezdNf.png",
      },
      {
        name: "Rasenkyugan",
        description:
          "Naruto grabs multiple enemies and smashes them into a giant Rasengan, dealing 15 damage to all enemies for 1 turn. This skill will deal an additional 5 damage when it's used. The following turn, this skill will be replaced by 'Mini-Bijuudama'.",
        descriptionBR:
          "Naruto grabs multiple enemies and smashes them into a giant Rasengan, dealing 15 damage to all enemies for 1 turn. This skill will deal an additional 5 damage when it's used. The following turn, this skill will be replaced by 'Mini-Bijuudama'.",
        energy: ["Nin"],
        classes: ["Chakra", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/VVSwYL8.png",
      },
      {
        name: "Summoning: Mayhem",
        description:
          "Naruto summons Mayhem in the battlefield. For 1 turn, the first harmful skill used on Naruto will be countered. The countered enemy will receive 15 additional damage from 'Mini Rasenshuriken'. The following turn, this skill will be replaced by 'Mini-Rasenshuriken'. This skill is invisible.",
        descriptionBR:
          "Naruto summons Mayhem in the battlefield. For 1 turn, the first harmful skill used on Naruto will be countered. The countered enemy will receive 15 additional damage from 'Mini Rasenshuriken'. The following turn, this skill will be replaced by 'Mini-Rasenshuriken'. This skill is invisible.",
        energy: ["Random"],
        classes: ["Chakra", "Instant", "Unique"],
        cooldown: 2,
        url: "https://i.imgur.com/Z3CcFWD.png",
      },
      {
        name: "Supersonic Speed",
        description:
          "This skill makes Shinobi Alliance Naruto (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Shinobi Alliance Naruto (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/9y1zBGg.png",
      },
      {
        name: "Planetary Rasengan",
        description:
          "Naruto forms a big Rasengan surrounded by other Rasengans, targeting one enemy and dealing 35 damage to them. If this skill kills that enemy, Naruto will deal 10 additional damage for 2 turns and will be unable to be killed during this time.",
        descriptionBR:
          "Naruto forms a big Rasengan surrounded by other Rasengans, targeting one enemy and dealing 35 damage to them. If this skill kills that enemy, Naruto will deal 10 additional damage for 2 turns and will be unable to be killed during this time.",
        energy: ["Nin", "Random"],
        classes: ["Chakra", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/wV3yPye.png",
      },
      {
        name: "Mini-Bijuudama",
        description:
          "By compressing chakra, Naruto creates a miniature of Bijuudama and deals 35 affliction damage to one enemy. For 1 turn, that enemy's skills will deal 10 less non-affliction damage and the cost of their skills will be increased by 1 random chakra.",
        descriptionBR:
          "By compressing chakra, Naruto creates a miniature of Bijuudama and deals 35 affliction damage to one enemy. For 1 turn, that enemy's skills will deal 10 less non-affliction damage and the cost of their skills will be increased by 1 random chakra.",
        energy: ["Nin", "Blood"],
        classes: ["Chakra", "Melee", "Instant", "Unique", "Affliction"],
        cooldown: 0,
        url: "https://i.imgur.com/YsfPSVu.png",
      },
      {
        name: "Mini-Rasenshuriken",
        description:
          "Naruto targets one enemy, destroying their destructible defense and dealing 15 piercing damage to them. This skill cannot be countered or reflected.",
        descriptionBR:
          "Naruto targets one enemy, destroying their destructible defense and dealing 15 piercing damage to them. This skill cannot be countered or reflected.",
        energy: ["Random"],
        classes: ["Chakra", "Ranged", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/yAY1DDM.png",
      },
    ],
  },
  {
    name: "Shinobi Alliance Sakura (S)",
    url: "https://i.imgur.com/SPCmzSX.png",
    description:
      "With her extensive training under Tsunade for the last two and a half years, Sakura has gained a greater understanding of healing and the human body. While Sakura's physical strength and healing prowess have both increased, her greatest ability is a powerful chakra storing seal taught to her by Tsunade.",
    descriptionBR:
      "With her extensive training under Tsunade for the last two and a half years, Sakura has gained a greater understanding of healing and the human body. While Sakura's physical strength and healing prowess have both increased, her greatest ability is a powerful chakra storing seal taught to her by Tsunade.",
    skills: [
      {
        name: "Empowered Devasting Punch",
        description:
          "Amplifying her strength, Sakura deals 35 damage to one enemy and 10 damage to all others. This skill requires 'Strength of a Hundred Seal' active.",
        descriptionBR:
          "Amplifying her strength, Sakura deals 35 damage to one enemy and 10 damage to all others. This skill requires 'Strength of a Hundred Seal' active.",
        energy: ["Tai"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/MvwbbW5.png",
      },
      {
        name: "Superior Healing",
        description:
          "With her superior healing skills, Sakura heals half of one ally's missing health, rounded down, and removes all enemy affliction effects from them. This skill requires 'Strength of a Hundred Seal' active.",
        descriptionBR:
          "With her superior healing skills, Sakura heals half of one ally's missing health, rounded down, and removes all enemy affliction effects from them. This skill requires 'Strength of a Hundred Seal' active.",
        energy: ["Random"],
        classes: ["Chakra", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/G5ldCer.png",
      },
      {
        name: "Strength of a Hundred Seal",
        description:
          "Sakura gains 3 Seals. During this time, each time Sakura uses a skill other than her invulnerability, she will use up 1 Seal. While 'Strength of a Hundred Seal' is active, Sakura can use this skill again for no cost to restore 25 health and remove all harmful effects on her.",
        descriptionBR:
          "Sakura gains 3 Seals. During this time, each time Sakura uses a skill other than her invulnerability, she will use up 1 Seal. While 'Strength of a Hundred Seal' is active, Sakura can use this skill again for no cost to restore 25 health and remove all harmful effects on her.",
        energy: ["Random"],
        classes: ["Chakra", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/TBI5NVw.png",
      },
      {
        name: "Summoning: Katsuyu",
        description:
          "This skill makes Shinobi Alliance Sakura (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Shinobi Alliance Sakura (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Chakra", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/LTqSBP2.png",
      },
    ],
  },
  {
    name: "Shinobi Alliance Sai (S)",
    url: "https://i.imgur.com/pDe8wDr.png",
    description:
      "Sai became capable of using a wider variety of techniques after improving his skills with his animal paintings. Besides that, Sai carries with him his powerful Sealing Technique.",
    descriptionBR:
      "Sai became capable of using a wider variety of techniques after improving his skills with his animal paintings. Besides that, Sai carries with him his powerful Sealing Technique.",
    skills: [
      {
        name: "Tiger Vision Staring Bullet",
        description:
          "By using this sealing technique, Sai stuns one enemy's harmful skills permanently and deals 20 damage to them each turn. If that enemy uses a new skill, this skill will end and Sai gains 1 genjutsu chakra. This skill ends if Sai is killed.",
        descriptionBR:
          "By using this sealing technique, Sai stuns one enemy's harmful skills permanently and deals 20 damage to them each turn. If that enemy uses a new skill, this skill will end and Sai gains 1 genjutsu chakra. This skill ends if Sai is killed.",
        energy: ["Gen", "Random"],
        classes: ["Physical", "Melee", "Action", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/rlHMnoA.png",
      },
      {
        name: "Great Beast Painting: Kamikaze Birds",
        description:
          "Sai makes one enemy receive 5 additional damage from physical melee skills* and deals them 10 piercing damage to them each turn permanently. If that enemy uses a new skill, they will take 20 piercing damage and then this skill will end. This skil ends if Sai is killed.",
        descriptionBR:
          "Sai makes one enemy receive 5 additional damage from physical melee skills* and deals them 10 piercing damage to them each turn permanently. If that enemy uses a new skill, they will take 20 piercing damage and then this skill will end. This skil ends if Sai is killed.",
        energy: ["Gen"],
        classes: ["Physical", "Ranged", "Action", "Unique", "Instant*"],
        cooldown: 0,
        url: "https://i.imgur.com/rhBP4y8.png",
      },
      {
        name: "Great Beast Painting: Ink Warriors",
        description:
          "Sai grants one ally and himself 20 points of destructible defense. If that ally's destructible defense is destroyed, 'Great Beast Painting: Kamikaze Birds' will have no cost for 1 turn. If Sai destructible defense is destroyed, 'Tiger Vision Staring Bullet' will cost 1 random chakra for 1 turn.",
        descriptionBR:
          "Sai grants one ally and himself 20 points of destructible defense. If that ally's destructible defense is destroyed, 'Great Beast Painting: Kamikaze Birds' will have no cost for 1 turn. If Sai destructible defense is destroyed, 'Tiger Vision Staring Bullet' will cost 1 random chakra for 1 turn.",
        energy: ["Random", "Random"],
        classes: ["Physical", "Instant", "_$1", "_$2", "_$3"],
        cooldown: 3,
        url: "https://i.imgur.com/EIXhkHV.png",
      },
      {
        name: "Sai Kunai Parry",
        description:
          "This skill makes Shinobi Alliance Sai (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Shinobi Alliance Sai (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/8dtdZfr.png",
      },
    ],
  },
  {
    name: "Shinobi Alliance Kakashi (S)",
    url: "https://i.imgur.com/lKc2rbD.png",
    description:
      "Kakashi, as one of the squad leaders, goes to war alongside all the ninjas. Now, he uses everything at his disposal to win. Besides himself, Kakashi can rely on his allies.",
    descriptionBR:
      "Kakashi, as one of the squad leaders, goes to war alongside all the ninjas. Now, he uses everything at his disposal to win. Besides himself, Kakashi can rely on his allies.",
    skills: [
      {
        name: "Lightning Beast Fang",
        description:
          "Kakashi forms his raikiri into a lightning dog, controlling it and dealing 25 piercing damage to one enemy. If this skill successfully dealt damage to the enemy, their non helpful-mental skills will be stunned for 1 turn. The following turn, this skill will be replaced by 'Finishing Raikiri'.",
        descriptionBR:
          "Kakashi forms his raikiri into a lightning dog, controlling it and dealing 25 piercing damage to one enemy. If this skill successfully dealt damage to the enemy, their non helpful-mental skills will be stunned for 1 turn. The following turn, this skill will be replaced by 'Finishing Raikiri'.",
        energy: ["Nin", "Random"],
        classes: ["Chakra", "Ranged", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/07efvor.png",
      },
      {
        name: "Kakashi Kamui",
        description:
          "If used on an enemy, they will receive 40 piercing damage and for 1 turn the cost of their skills will be increased by 1 random. If used on an ally, all harmful effects on them will be removed and they will become invulnerable for 1 turn. This skill ignores invulnerability.",
        descriptionBR:
          "If used on an enemy, they will receive 40 piercing damage and for 1 turn the cost of their skills will be increased by 1 random. If used on an ally, all harmful effects on them will be removed and they will become invulnerable for 1 turn. This skill ignores invulnerability.",
        energy: ["Blood", "Gen"],
        classes: ["Chakra", "Ranged", "Unique", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/46CCve7.png",
      },
      {
        name: "Tatic Sharingan",
        description:
          "For 3 turns, Kakashi and his team will have the cooldown of their skills reduced by 1 for 3 turns. The following 3 turns, the first new non-unique skill, that does not require preparation, used by one enemy will be copied and will replace this skill for 1 turn. This skill is invisible.",
        descriptionBR:
          "For 3 turns, Kakashi and his team will have the cooldown of their skills reduced by 1 for 3 turns. The following 3 turns, the first new non-unique skill, that does not require preparation, used by one enemy will be copied and will replace this skill for 1 turn. This skill is invisible.",
        energy: ["Random"],
        classes: ["Mental", "Instant", "Unique"],
        cooldown: 4,
        url: "https://i.imgur.com/0oxXtCx.png",
      },
      {
        name: "Earth Release: Earth-Style Wall",
        description:
          "This skill makes Shinobi Alliance Kakashi (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Shinobi Alliance Kakashi (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Chakra", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/xzD5v3I.png",
      },
      {
        name: "Finishing Raikiri",
        description:
          "Kakashi moves to finish off an enemy, dealing 35 piercing damage to one enemy. This skill will deal an additional 10 damage to that enemy if they are stunned or if 'Lightning Beast Fang' was used on them the previous turn.",
        descriptionBR:
          "Kakashi moves to finish off an enemy, dealing 35 piercing damage to one enemy. This skill will deal an additional 10 damage to that enemy if they are stunned or if 'Lightning Beast Fang' was used on them the previous turn.",
        energy: ["Nin", "Random"],
        classes: ["Chakra", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/ITGCcaa.png",
      },
    ],
  },
  {
    name: "Shinobi Alliance Shikamaru (S)",
    url: "https://i.imgur.com/fVgHpUK.png",
    description:
      "Shikamaru, now in the war. He remains a good and talented ninja, using his shadows more effectively, in addition to using the help of his allies very well, and forcing his enemies to help him too.",
    descriptionBR:
      "Shikamaru, now in the war. He remains a good and talented ninja, using his shadows more effectively, in addition to using the help of his allies very well, and forcing his enemies to help him too.",
    skills: [
      {
        name: "Continuous Shadow Sewing",
        description:
          "Shikamaru deals 30 piercing damage to one enemy, stuns their physical and ranged skills. If that enemy doesn't use any new skill, they will take more 15 piercing damage. During 'Tatical Range Increase' this skill deal 15 more damage.",
        descriptionBR:
          "Shikamaru deals 30 piercing damage to one enemy, stuns their physical and ranged skills. If that enemy doesn't use any new skill, they will take more 15 piercing damage. During 'Tatical Range Increase' this skill deal 15 more damage.",
        energy: ["Gen", "Random"],
        classes: ["Chakra", "Ranged", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/aLnt17m.png",
      },
      {
        name: "Tatical Range Increase",
        description:
          "For 1 turn, Shikamaru will ignore all damage dealt and will target all enemies. During this time, the enemies that use a new skill will be able to be target of 'Tatical Shadow Bind' for 1 turn. This skill becomes 'Tatical Shadow Bind' for 1 turn and is invisible.",
        descriptionBR:
          "For 1 turn, Shikamaru will ignore all damage dealt and will target all enemies. During this time, the enemies that use a new skill will be able to be target of 'Tatical Shadow Bind' for 1 turn. This skill becomes 'Tatical Shadow Bind' for 1 turn and is invisible.",
        energy: ["Tai"],
        classes: ["Chakra", "Ranged", "Instant", "Unique"],
        cooldown: 2,
        url: "https://i.imgur.com/PNq9tnn.png",
      },
      {
        name: "Ally Shadow Control",
        description:
          "Shikamaru target one ally for 3 turns, making their skills have 1 cooldown decreased, and if Shikamaru uses a new skill that ally will become invulnerable to damage skills for 1 turn.",
        descriptionBR:
          "Shikamaru target one ally for 3 turns, making their skills have 1 cooldown decreased, and if Shikamaru uses a new skill that ally will become invulnerable to damage skills for 1 turn.",
        energy: ["Random"],
        classes: ["Chakra", "Instant"],
        cooldown: 3,
        url: "https://i.imgur.com/73Vhlng.png",
      },
      {
        name: "Hide and Thinking",
        description:
          "This skill makes Shinobi Alliance Shikamaru (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Shinobi Alliance Shikamaru (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Mental", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/pPAXCWL.png",
      },
      {
        name: "Tatical Shadow Bind",
        description:
          "Shikamaru deals 30 damage to all enemies affected by 'Tatical Range Increase', and for 2 turns stuns their physical and chakra skills.",
        descriptionBR:
          "Shikamaru deals 30 damage to all enemies affected by 'Tatical Range Increase', and for 2 turns stuns their physical and chakra skills.",
        energy: ["Gen", "Random"],
        classes: ["Chakra", "Ranged", "Control"],
        cooldown: 1,
        url: "https://i.imgur.com/vnSogry.png",
      },
    ],
  },
  {
    name: "Shinobi Alliance Chouji (S)",
    url: "https://i.imgur.com/ZnJky3h.png",
    description:
      "After nearly three years, Chouji has developed in both strength and size, mastering the Akimichi clan techniques. No longer does Chouji need the Akimichi pills to tap into his true strength, instead, he merely needs to control his chakra and become a force to reckon with.",
    descriptionBR:
      "After nearly three years, Chouji has developed in both strength and size, mastering the Akimichi clan techniques. No longer does Chouji need the Akimichi pills to tap into his true strength, instead, he merely needs to control his chakra and become a force to reckon with.",
    skills: [
      {
        name: "Butterfly Bullet Bombing",
        description:
          "Chouji slams his fist into an enemy's face, first ignoring all harmful effects other than chakra cost changes for 1 turn and then dealing 30 damage to one enemy. This skill cannot be countered or reflected and Chouji's skills will cost 2 additional random afterwards.",
        descriptionBR:
          "Chouji slams his fist into an enemy's face, first ignoring all harmful effects other than chakra cost changes for 1 turn and then dealing 30 damage to one enemy. This skill cannot be countered or reflected and Chouji's skills will cost 2 additional random afterwards.",
        energy: ["Tai", "Random", "Random"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/HTFxUzW.png",
      },
      {
        name: "Human Bullet Tank",
        description:
          "Chouji rolls over one enemy for 2 turns, dealing 15 damage to them. During this time, Chouji will counter all new physical and chakra skills used on him.* This skill will increase the cost of Chouji's skills by 1 random each turn.",
        descriptionBR:
          "Chouji rolls over one enemy for 2 turns, dealing 15 damage to them. During this time, Chouji will counter all new physical and chakra skills used on him.* This skill will increase the cost of Chouji's skills by 1 random each turn.",
        energy: ["Blood", "Random", "Random"],
        classes: ["Physical", "Melee", "Action", "Instant*"],
        cooldown: 2,
        url: "https://i.imgur.com/M6ojTSg.png",
      },
      {
        name: "Butterfly Control",
        description:
          "Using his new found control, Chouji taps into even more power. This skill will be replaced by 'Super-Punch'. Each turn, the existing cost of Chouji's skills will be decreased by 1 random.",
        descriptionBR:
          "Using his new found control, Chouji taps into even more power. This skill will be replaced by 'Super-Punch'. Each turn, the existing cost of Chouji's skills will be decreased by 1 random.",
        energy: [],
        classes: ["Chakra", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/80bFCaV.png",
      },
      {
        name: "Butterfly Block",
        description:
          "This skill makes Shinobi Alliance Chouji (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Shinobi Alliance Chouji (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random", "Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/88638R1.png",
      },
      {
        name: "Super-Punch",
        description:
          "Chouji punches an enemy down with a fistful of chakra, removing all Harmfull effects on him and then dealing 30 damage to one enemy, this skill cannot be countered or reflected and chouji skills cost 2 additional random afterwards.",
        descriptionBR:
          "Chouji punches an enemy down with a fistful of chakra, removing all Harmfull effects on him and then dealing 30 damage to one enemy, this skill cannot be countered or reflected and chouji skills cost 2 additional random afterwards.",
        energy: ["Nin", "Random", "Random"],
        classes: ["Chakra", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/CZimKdS.png",
      },
    ],
  },
  {
    name: "Shinobi Alliance Ino (S)",
    url: "https://i.imgur.com/QO2cH82.png",
    description:
      "Not one to be left behind, Ino has trained non-stop to improve her abilities and teamwork. With her improved techniques, Ino can not only control her enemies, but her allies too all while seeing everything on the battlefield.",
    descriptionBR:
      "Not one to be left behind, Ino has trained non-stop to improve her abilities and teamwork. With her improved techniques, Ino can not only control her enemies, but her allies too all while seeing everything on the battlefield.",
    skills: [
      {
        name: "Mind Body Switch Interference",
        description:
          "Ino prepares to interfere with one enemy for 1 turn. The following turn, that enemy will receive 15 damage and if that enemy uses a new harmful skill, they will be countered and this skill will be replaced by that skill for 1 turn. This skill is invisible and can copy all skills.",
        descriptionBR:
          "Ino prepares to interfere with one enemy for 1 turn. The following turn, that enemy will receive 15 damage and if that enemy uses a new harmful skill, they will be countered and this skill will be replaced by that skill for 1 turn. This skill is invisible and can copy all skills.",
        energy: ["Gen"],
        classes: ["Mental", "Ranged", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/TMRliKS.png",
      },
      {
        name: "Enhanced Proxy Surveillance",
        description:
          "For 3 turns all damage reduction and destructible defense effects all enemies use will be reduced by 15, percentage damage reduction will be reduced by 50% and Ino will know when and where any skill is used. This skill can't be countered, reflected and is invisible.",
        descriptionBR:
          "For 3 turns all damage reduction and destructible defense effects all enemies use will be reduced by 15, percentage damage reduction will be reduced by 50% and Ino will know when and where any skill is used. This skill can't be countered, reflected and is invisible.",
        energy: ["Random"],
        classes: ["Mental", "Instant"],
        cooldown: 3,
        url: "https://i.imgur.com/3PFyj5Q.png",
      },
      {
        name: "Mind Clone Switch",
        description:
          "Ino enters the mind of both of her allies, making their bodies fight on regardless of their state. For 2 turns, both of Ino's allies will ignore all harmful effects other than damage and chakra cost changes. This skill is invisible and will end if Ino dies.",
        descriptionBR:
          "Ino enters the mind of both of her allies, making their bodies fight on regardless of their state. For 2 turns, both of Ino's allies will ignore all harmful effects other than damage and chakra cost changes. This skill is invisible and will end if Ino dies.",
        energy: ["Gen"],
        classes: ["Mental", "Instant"],
        cooldown: 2,
        url: "https://i.imgur.com/XG8euoA.png",
      },
      {
        name: "Ino Dodge",
        description:
          "This skill makes Shinobi Alliance Ino (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Shinobi Alliance Ino (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/tvbIXcC.png",
      },
    ],
  },
  {
    name: "Shinobi Alliance Shino (S)",
    url: "https://i.imgur.com/7Dh50WS.png",
    description:
      "Shino evolves, enhancing his intellect and his Aburame clan abilities. Shino remains calm and, at the same time, cold. His parasites can now destroy any layer, enemy, or defense, and he can also use them as a defense at any moment.",
    descriptionBR:
      "Shino evolves, enhancing his intellect and his Aburame clan abilities. Shino remains calm and, at the same time, cold. His parasites can now destroy any layer, enemy, or defense, and he can also use them as a defense at any moment.",
    skills: [
      {
        name: "Insect Assault",
        description:
          "Shino deals 15 affliction damage to one enemy. That enemy will lose 1 taijutsu or genjutsu chakra if they're being currently affected by an affliction damage skill. The following 2 turns, this skill will deal 20 affliction damage and will cost 1 bloodline chakra; This improvement doesn't stack.",
        descriptionBR:
          "Shino deals 15 affliction damage to one enemy. That enemy will lose 1 taijutsu or genjutsu chakra if they're being currently affected by an affliction damage skill. The following 2 turns, this skill will deal 20 affliction damage and will cost 1 bloodline chakra; This improvement doesn't stack.",
        energy: ["Random"],
        classes: ["Chakra", "Ranged", "Instant", "Affliction"],
        cooldown: 0,
        url: "https://i.imgur.com/bhP59yW.png",
      },
      {
        name: "Insect Coffin",
        description:
          "Shino surrounds one enemy with insects, dealing 15 affliction damage to them for 3 turns. During this time, that enemy will be unable to reduce damage or become invulnerable* and if Shino or an ally uses a new skill on that enemy, they will heal 15 health*.",
        descriptionBR:
          "Shino surrounds one enemy with insects, dealing 15 affliction damage to them for 3 turns. During this time, that enemy will be unable to reduce damage or become invulnerable* and if Shino or an ally uses a new skill on that enemy, they will heal 15 health*.",
        energy: ["Blood", "Random"],
        classes: ["Chakra", "Ranged", "Action", "Instant*", "Affliction"],
        cooldown: 3,
        url: "https://i.imgur.com/nyuyOdq.png",
      },
      {
        name: "Bug Barrier",
        description:
          "Shino creates a massive barrier of bugs to defend his team. For 1 turn, Shino and his allies will heal 15 health and will gain 15 points of destructible defense.",
        descriptionBR:
          "Shino creates a massive barrier of bugs to defend his team. For 1 turn, Shino and his allies will heal 15 health and will gain 15 points of destructible defense.",
        energy: ["Blood", "Blood"],
        classes: ["Chakra", "Instant"],
        cooldown: 3,
        url: "https://i.imgur.com/IZreCOO.png",
      },
      {
        name: "Hidden Insects",
        description:
          "This skill makes Shinobi Alliance Shino (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Shinobi Alliance Shino (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Chakra", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/pRM7rEi.png",
      },
    ],
  },
  {
    name: "Shinobi Alliance Hinata (S)",
    url: "https://i.imgur.com/YmDxo63.png",
    description:
      "Hinata will also take part in the war. Together with her allies, she will destroy any enemy that tries to attack using her new technique, Gentle Step Twin Lion Fists, along with her Byakugan.",
    descriptionBR:
      "Hinata will also take part in the war. Together with her allies, she will destroy any enemy that tries to attack using her new technique, Gentle Step Twin Lion Fists, along with her Byakugan.",
    skills: [
      {
        name: "Twin Lion Fists: Assault",
        description:
          "Hinata uses a high-level secret gentle fist technique, dealing 10 affliction damage to one enemy and removing all stacks of 'Byakugan: Enhanced Vision' from them. During 'Byakugan: Enhanced Vision', if the target uses a new harmful skill, 'Chakra Lion Attack' will be applied on them.",
        descriptionBR:
          "Hinata uses a high-level secret gentle fist technique, dealing 10 affliction damage to one enemy and removing all stacks of 'Byakugan: Enhanced Vision' from them. During 'Byakugan: Enhanced Vision', if the target uses a new harmful skill, 'Chakra Lion Attack' will be applied on them.",
        energy: ["Nin"],
        classes: ["Chakra", "Melee", "Instant", "Affliction", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/du8fNRS.png",
      },
      {
        name: "Gentle Step Twin Lion Fists",
        description:
          "Hinata creates 2 lions. The next 2 times any enemy uses a new harmful skill, 'Chakra Lion Attack' will be applied on them dealing 30 damage instead and Hinata will lose 1 lion. During 'Byakugan: Enhanced Vision' this skill will create 3 lions. This skill cannot be used while active and will end if Hinata is killed.",
        descriptionBR:
          "Hinata creates 2 lions. The next 2 times any enemy uses a new harmful skill, 'Chakra Lion Attack' will be applied on them dealing 30 damage instead and Hinata will lose 1 lion. During 'Byakugan: Enhanced Vision' this skill will create 3 lions. This skill cannot be used while active and will end if Hinata is killed.",
        energy: ["Blood", "Nin"],
        classes: ["Chakra", "Melee", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/KHpgLP8.png",
      },
      {
        name: "Byakugan: Enhanced Vision",
        description:
          "Hinata takes advantage of her Byakugan and its enhanced vision, improving her skills for 3 turns. During this time, any enemy that uses a new harmful skill will receive 5 additional damage from 'Twin Lion Fists: Assault' permanently. This skill cannot be countered and it ends if Hinata is killed.",
        descriptionBR:
          "Hinata takes advantage of her Byakugan and its enhanced vision, improving her skills for 3 turns. During this time, any enemy that uses a new harmful skill will receive 5 additional damage from 'Twin Lion Fists: Assault' permanently. This skill cannot be countered and it ends if Hinata is killed.",
        energy: [],
        classes: ["Mental", "Ranged", "Instant", "Unique"],
        cooldown: 3,
        url: "https://i.imgur.com/gCtDlPI.png",
      },
      {
        name: "Byakugan: Focus",
        description:
          "This skill makes Shinobi Alliance Hinata (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Shinobi Alliance Hinata (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Mental", "Instant", "Unique"],
        cooldown: 4,
        url: "https://i.imgur.com/LF0IBjh.png",
      },
      {
        name: "Chakra Lion Attack",
        description:
          "The target of this skill will recelve 20 damage and will lose 1 non-bloodline chakra. If this skill is triggered by 'Gentle Step Twin Lion Fists', the target will be dealt 30 damage instead.",
        descriptionBR:
          "The target of this skill will recelve 20 damage and will lose 1 non-bloodline chakra. If this skill is triggered by 'Gentle Step Twin Lion Fists', the target will be dealt 30 damage instead.",
        energy: [],
        classes: ["Chakra", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/YRF47Yp.png",
      },
    ],
  },
  {
    name: "Shinobi Alliance Kiba (S)",
    url: "https://i.imgur.com/qjdViGn.png",
    description:
      "Now in the war, Kiba is one of the most powerful close-range combatants. Utilizing the vast arsenal of the Inuzuka clan, Kiba can combat even colossal enemies with Akamaru and their tornado fang.",
    descriptionBR:
      "Now in the war, Kiba is one of the most powerful close-range combatants. Utilizing the vast arsenal of the Inuzuka clan, Kiba can combat even colossal enemies with Akamaru and their tornado fang.",
    skills: [
      {
        name: "Tornado Fang",
        description:
          "Kiba deals 30 piercing damage to one enemy and makes them deal 10 less non-affliction damage for 1 turn. During 'Three Headed Wolf' this skill deal 10 additional damage.",
        descriptionBR:
          "Kiba deals 30 piercing damage to one enemy and makes them deal 10 less non-affliction damage for 1 turn. During 'Three Headed Wolf' this skill deal 10 additional damage.",
        energy: ["Tai", "Random"],
        classes: ["Physical", "Melee", "Instant", "Harmful"],
        cooldown: 0,
        url: "https://i.imgur.com/MI5CB8Q.png",
      },
      {
        name: "Three Headed Wolf",
        description:
          "Kiba removes all physical and chakra harmful skills on his team, and for 3 turns, targets all enemies. During this time, the enemies that use a new harmful skill will take 5 piercing damage and will receive 5 additional damage from physical melee skills permanently. This skill is replaced by 'Tail Rotating Fang'.",
        descriptionBR:
          "Kiba removes all physical and chakra harmful skills on his team, and for 3 turns, targets all enemies. During this time, the enemies that use a new harmful skill will take 5 piercing damage and will receive 5 additional damage from physical melee skills permanently. This skill is replaced by 'Tail Rotating Fang'.",
        energy: ["Tai", "Blood"],
        classes: ["Physical", "Melee", "Instant", "Unique", "Harmful"],
        cooldown: 0,
        url: "https://i.imgur.com/8gU92l0.png",
      },
      {
        name: "Man Animal Tatics",
        description:
          "Kiba and one ally will deal 5 additional damage from non-affliction skills for 2 turns. During this time, everytime a new enemy harmful skill is used on them, their skills will cost one random chakra less for 1 turn.",
        descriptionBR:
          "Kiba and one ally will deal 5 additional damage from non-affliction skills for 2 turns. During this time, everytime a new enemy harmful skill is used on them, their skills will cost one random chakra less for 1 turn.",
        energy: ["Random"],
        classes: ["Physical", "Instant", "Helpful"],
        cooldown: 2,
        url: "https://i.imgur.com/atgU87q.png",
      },
      {
        name: "Kiba Block",
        description:
          "This skill makes Shinobi War Kiba (S) invulnerable for 1 turn.",
        descriptionBR:
          "This skill makes Shinobi War Kiba (S) invulnerable for 1 turn.",
        energy: ["Random"],
        classes: ["Physical", "Instant", "Helpful"],
        cooldown: 4,
        url: "https://i.imgur.com/HV9AzM6.png",
      },
      {
        name: "Tail Rotating Fang",
        description:
          "Kiba deals 45 piercing damage to one enemy and becomes invulnerable to physical skills. Permanently, both Kiba and that enemy will deal 5 less physical damage.",
        descriptionBR:
          "Kiba deals 45 piercing damage to one enemy and becomes invulnerable to physical skills. Permanently, both Kiba and that enemy will deal 5 less physical damage.",
        energy: ["Blood", "Random"],
        classes: ["Physical", "Melee", "Instant", "Harmful"],
        cooldown: 0,
        url: "https://i.imgur.com/STBBoKZ.png",
      },
    ],
  },
  {
    name: "Edo Tensei Deidara (S)",
    url: "https://i.imgur.com/7aBMAQ1.jpg",
    description:
      "Edo Tensei Deidara (S) has been revived and is immediately sent out to battle. Fighting on the front lines is nothing new to this old soul.",
    descriptionBR:
      "Edo Tensei Deidara (S) has been revived and is immediately sent out to battle. Fighting on the front lines is nothing new to this old soul.",
    skills: [
      {
        name: "Katsu!",
        description:
          "Deidara detonates all his bombs creating a great explosion, first becoming invulnerable for 1 turn and after dealing 5 piercing damage to all enemies. Afterwards, all stacks from Deidara's skills will be removed. This skill cannot be countered.",
        descriptionBR:
          "Deidara detonates all his bombs creating a great explosion, first becoming invulnerable for 1 turn and after dealing 5 piercing damage to all enemies. Afterwards, all stacks from Deidara's skills will be removed. This skill cannot be countered.",
        energy: ["Random"],
        classes: ["Chakra", "Ranged", "Instant", "Unique"],
        cooldown: 4,
        url: "https://i.imgur.com/FxYBog1.png",
      },
      {
        name: "Bat Bombs",
        description:
          "Deidara deals 10 affliction damage to all enemies. Permanently, 'Katsu!' will deal 5 additional damage to them. For 1 turn, any enemy that uses a new skill will receive 15 additional damage instead from 'Katsu!'. The following turn, 'Jellyfish Explosives' will deal 5 additional damage.",
        descriptionBR:
          "Deidara deals 10 affliction damage to all enemies. Permanently, 'Katsu!' will deal 5 additional damage to them. For 1 turn, any enemy that uses a new skill will receive 15 additional damage instead from 'Katsu!'. The following turn, 'Jellyfish Explosives' will deal 5 additional damage.",
        energy: ["Nin"],
        classes: ["Chakra", "Ranged", "Instant", "Affliction", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/uUJNeJC.png",
      },
      {
        name: "Jellyfish Explosives",
        description:
          "Deidara deals 20 piercing damage to one enemy. Permanently, 'Katsu!' will deal 10 additional damage to that enemy. For 1 turn, any enemy that uses a new skill will permanently receive 10 additional damage from 'Katsu!'. The following turn, 'Bat Bombs' will deal 5 additional damage.",
        descriptionBR:
          "Deidara deals 20 piercing damage to one enemy. Permanently, 'Katsu!' will deal 10 additional damage to that enemy. For 1 turn, any enemy that uses a new skill will permanently receive 10 additional damage from 'Katsu!'. The following turn, 'Bat Bombs' will deal 5 additional damage.",
        energy: ["Nin"],
        classes: ["Chakra", "Ranged", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/jLHzVyh.png",
      },
      {
        name: "Chakra Clay Trap",
        description:
          "Deidara creates a trap to one enemy. For 1 turn, if that enemy uses a new harmful skill they will be countered and will take 20 piercing damage. Permanently, the countered enemy will receive 10 additional damage from 'Katsu!'. The target of this skill is invisible.",
        descriptionBR:
          "Deidara creates a trap to one enemy. For 1 turn, if that enemy uses a new harmful skill they will be countered and will take 20 piercing damage. Permanently, the countered enemy will receive 10 additional damage from 'Katsu!'. The target of this skill is invisible.",
        energy: ["Random"],
        classes: ["Chakra", "Ranged", "Instant", "Unique"],
        cooldown: 2,
        url: "https://i.imgur.com/x8ZtRYB.png",
      },
    ],
  },
  {
    name: "Edo Tensei Pakura (S)",
    url: "https://i.imgur.com/Zj6R1e2.png",
    description:
      "Edo Tensei Pakura (S) was a revered shinobi of the Hidden Sand in the past. So much so that she was revived against her will to participate in the fourth shinobi world war.",
    descriptionBR:
      "Edo Tensei Pakura (S) was a revered shinobi of the Hidden Sand in the past. So much so that she was revived against her will to participate in the fourth shinobi world war.",
    skills: [
      {
        name: "Scorch Release",
        description:
          "Pakura deals 20 affliction damage to one enemy and makes them unable to be healed for 1 turn.",
        descriptionBR:
          "Pakura deals 20 affliction damage to one enemy and makes them unable to be healed for 1 turn.",
        energy: ["Blood"],
        classes: ["Chakra", "Ranged", "Instant", "Affliction"],
        cooldown: 0,
        url: "https://i.imgur.com/9Zxln8E.png",
      },
      {
        name: "Searing Combat",
        description:
          "Pakura deals 5 affliction damage to all enemies for 3 turns. During this time, all enemies that use a new harmful skill will *take 5 affliction damage and 'Scorch Release' will deal 10 additional damage on them.",
        descriptionBR:
          "Pakura deals 5 affliction damage to all enemies for 3 turns. During this time, all enemies that use a new harmful skill will *take 5 affliction damage and 'Scorch Release' will deal 10 additional damage on them.",
        energy: ["Gen"],
        classes: ["Physical", "Melee", "Action", "Affliction", "*Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/EN0ePFo.png",
      },
      {
        name: "Steaming Murder",
        description:
          "Pakura deals 35 affliction damage to one enemy and stuns their helpful skills. The following turn, all other Pakura's harmful skills will cost random chakras instead.",
        descriptionBR:
          "Pakura deals 35 affliction damage to one enemy and stuns their helpful skills. The following turn, all other Pakura's harmful skills will cost random chakras instead.",
        energy: ["Blood", "Gen"],
        classes: ["Chakra", "Melee", "Affliction", "Unique", "Instant"],
        cooldown: 2,
        url: "https://i.imgur.com/wNevSbP.png",
      },
      {
        name: "Experienced Defense",
        description:
          "This skill makes Edo Tensei Pakura (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Edo Tensei Pakura (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/MJxeXU7.png",
      },
    ],
  },
  {
    name: "Edo Tensei Sasori (S)",
    url: "https://i.imgur.com/Bt9kHE5.png",
    description:
      "Edo Tensei Sasori (S) has been resurrected in the ageless body that he had always wanted during his life. He is sent out to the battlefield in Akatsuki's ambush squad.",
    descriptionBR:
      "Edo Tensei Sasori (S) has been resurrected in the ageless body that he had always wanted during his life. He is sent out to the battlefield in Akatsuki's ambush squad.",
    skills: [
      {
        name: "Chakra Threads",
        description:
          "Sasori manipulates his puppets, gaining 20 points of destructible defense for 3 turns. During this time, 'Puppet Manipulation' deals 5 additional damage and 'Chakra Threads: Puppet Trap' will reflect all harmful skills instead.",
        descriptionBR:
          "Sasori manipulates his puppets, gaining 20 points of destructible defense for 3 turns. During this time, 'Puppet Manipulation' deals 5 additional damage and 'Chakra Threads: Puppet Trap' will reflect all harmful skills instead.",
        energy: ["Random"],
        classes: ["Chakra", "Instant", "Unique"],
        cooldown: 2,
        url: "https://i.imgur.com/mqcph2e.png",
      },
      {
        name: "Puppet Manipulation",
        description:
          "Edo Tensei Sasori deals 15 damage to one enemy. For 1 turn, that enemy will deal 10 less non-affliction damage. If the health of that enemy drops to 35 or below, their physical and chakra skills will be stunned for 1 turn.",
        descriptionBR:
          "Edo Tensei Sasori deals 15 damage to one enemy. For 1 turn, that enemy will deal 10 less non-affliction damage. If the health of that enemy drops to 35 or below, their physical and chakra skills will be stunned for 1 turn.",
        energy: ["Random"],
        classes: ["Physical", "Ranged", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/fAirmNS.png",
      },
      {
        name: "Chakra Threads: Puppet Trap",
        description:
          "Edo Tensei Sasori targets one ally for 1 turn. The first harmful skill used on that ally will be reflected upon the enemy. This skill is invisible.",
        descriptionBR:
          "Edo Tensei Sasori targets one ally for 1 turn. The first harmful skill used on that ally will be reflected upon the enemy. This skill is invisible.",
        energy: ["Random"],
        classes: ["Physical", "Instant", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/rzc7HRf.png",
      },
      {
        name: "Falling Guard",
        description:
          "This skill makes Edo Tensei Sasori (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Edo Tensei Sasori (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/g0bcv0N.png",
      },
    ],
  },
  {
    name: "Edo Tensei Haku (S)",
    url: "https://i.imgur.com/KEsUR4g.png",
    description:
      "Edo Tensei Haku (S) is not sure why he is among the living again but his dream of protecting Zabuza pushes him to go all out.",
    descriptionBR:
      "Edo Tensei Haku (S) is not sure why he is among the living again but his dream of protecting Zabuza pushes him to go all out.",
    skills: [
      {
        name: "Silent Piercing Murder",
        description:
          "Haku deals 20 piercing damage to one enemy for 2 turns. For 1 turn, that enemy will lose 1 bloodline or ninjutsu chakra.",
        descriptionBR:
          "Haku deals 20 piercing damage to one enemy for 2 turns. For 1 turn, that enemy will lose 1 bloodline or ninjutsu chakra.",
        energy: ["Blood", "Random"],
        classes: ["Physical", "Melee", "Action", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/nAjrelw.png",
      },
      {
        name: "Cristal Ice Mirrors Execution",
        description:
          "Haku deals 20 damage to one enemy. For 1 turn, if this enemy uses a new harmful non-mental skill, that skill will be reflected onto another random enemy. If no skill is reflected, Haku will steal 1 bloodline chakra from that enemy.",
        descriptionBR:
          "Haku deals 20 damage to one enemy. For 1 turn, if this enemy uses a new harmful non-mental skill, that skill will be reflected onto another random enemy. If no skill is reflected, Haku will steal 1 bloodline chakra from that enemy.",
        energy: ["Nin", "Random"],
        classes: ["Physical", "Ranged", "Instant", "Unique"],
        cooldown: 2,
        url: "https://i.imgur.com/T49eIJw.png",
      },
      {
        name: "Low Temperature Enhancement",
        description:
          "Haku grants himself 15 destructible defense for 2 turns. The following 2 turns, he will deal 5 additional damage and each turn that he does not use a new skill, he will gain 1 random chakra.",
        descriptionBR:
          "Haku grants himself 15 destructible defense for 2 turns. The following 2 turns, he will deal 5 additional damage and each turn that he does not use a new skill, he will gain 1 random chakra.",
        energy: ["Random"],
        classes: ["Chakra", "Instant", "Unique"],
        cooldown: 3,
        url: "https://i.imgur.com/qrBbo3F.png",
      },
      {
        name: "ET Haku Block",
        description:
          "This skill makes Edo Tensei Haku (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Edo Tensei Haku (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/7B9yDd4.png",
      },
    ],
  },
  {
    name: "Edo Tensei Zabuza (S)",
    url: "https://i.imgur.com/SaKz2Cx.png",
    description:
      "Edo Tensei Zabuza (S) has been summoned from the dead against his will. His unique abilities will surely be put to use on the battlefield. Pics by: Pain_Alagoano",
    descriptionBR:
      "Edo Tensei Zabuza (S) has been summoned from the dead against his will. His unique abilities will surely be put to use on the battlefield. Pics by: Pain_Alagoano",
    skills: [
      {
        name: "Demon Shroud",
        description:
          "Zabuza emantes shroud putting pressure in the battlefield. For 1 turn, all enemies will have the cost of their harmful skills increased by 1 random chakra. Afterwards, any enemy affected by this skill will receive 5 additional damage from Zabuza's skills permanently. This effect stacks.",
        descriptionBR:
          "Zabuza emantes shroud putting pressure in the battlefield. For 1 turn, all enemies will have the cost of their harmful skills increased by 1 random chakra. Afterwards, any enemy affected by this skill will receive 5 additional damage from Zabuza's skills permanently. This effect stacks.",
        energy: ["Random"],
        classes: ["Chakra", "Ranged", "Instant", "Unique"],
        cooldown: 2,
        url: "https://i.imgur.com/8mcKt3L.png",
      },
      {
        name: "Executioner Strike",
        description:
          "Zabuza executes one enemy dealing 20 piercing damage to them. For 1 turn, that enemy's skills will have 1 additional cooldown.",
        descriptionBR:
          "Zabuza executes one enemy dealing 20 piercing damage to them. For 1 turn, that enemy's skills will have 1 additional cooldown.",
        energy: ["Tai"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/TvRUgQZ.png",
      },
      {
        name: "Executioner Blade Absorption",
        description:
          "Zabuza steals 10 health from one enemy and for 1 turn, that enemy's harmful skills will cost 1 additional bloodline chakra.",
        descriptionBR:
          "Zabuza steals 10 health from one enemy and for 1 turn, that enemy's harmful skills will cost 1 additional bloodline chakra.",
        energy: ["Gen"],
        classes: ["Physical", "Melee", "Instant", "Affliction"],
        cooldown: 1,
        url: "https://i.imgur.com/3qGEtxx.png",
      },
      {
        name: "Demon Insight",
        description:
          "This skill makes Edo Tensei Zabuza (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Edo Tensei Zabuza (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Mental", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/maezWad.png",
      },
    ],
  },
  {
    name: "Edo Tensei Mangetsu (S)",
    url: "https://i.imgur.com/4QcN9uF.png",
    description:
      "Reanimated by Kabuto during the Fourth Shinobi World War as one of the Seven Swordsmen of the Mist, Mangetsu was widely feared as the 'Second Coming of the Demon'. The older brother of Suigetsu, Mangetsu primarily used the Twin Sword, Hiramekarei, though he was famously a master of all seven blades.",
    descriptionBR:
      "Reanimated by Kabuto during the Fourth Shinobi World War as one of the Seven Swordsmen of the Mist, Mangetsu was widely feared as the 'Second Coming of the Demon'. The older brother of Suigetsu, Mangetsu primarily used the Twin Sword, Hiramekarei, though he was famously a master of all seven blades.",
    skills: [
      {
        name: "Hydrification Technique",
        description:
          "ET Mangetsu steals 20 health points from one enemy. For 1 turn, a random skill class will be chosen, and ET Mangetsu will ignore all enemy skills of that class, or none if no class is chosen.",
        descriptionBR:
          "ET Mangetsu steals 20 health points from one enemy. For 1 turn, a random skill class will be chosen, and ET Mangetsu will ignore all enemy skills of that class, or none if no class is chosen.",
        energy: ["Gen", "Random"],
        classes: ["Chakra", "Melee", "Instant", "$_"],
        cooldown: 0,
        url: "https://i.imgur.com/71NAFSG.png",
      },
      {
        name: "Impure World Regeneration",
        description:
          "When this skill is used, ET Mangetsu will heal 2 health every turn for the rest of the game. This skill stacks and may only be used 5 times.",
        descriptionBR:
          "When this skill is used, ET Mangetsu will heal 2 health every turn for the rest of the game. This skill stacks and may only be used 5 times.",
        energy: [],
        classes: ["Mental", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/TqVLDTW.png",
      },
      {
        name: "Mist Sword Summoning",
        description:
          "Mangetsu randomly summons one of the Seven Swords, granting 'Hydrification Technique' a random unique effect every turn. Hiramekarei: Steals 10 additional health. / Kubikiribocho: Grants 10 permanent destructible defense. / Sameheada: Steals 1 random chakra from the target. / Nuibari: Stuns non-mental skills for 1 turn. / Shibuki: Deals 5 permanent affliction damage. / Kabutowari: Destroys destructible defense and deals 15 piercing damage. / Kiba: Deals 20 affliction damage to all other enemies.",
        descriptionBR:
          "Mangetsu randomly summons one of the Seven Swords, granting 'Hydrification Technique' a random unique effect every turn. Hiramekarei: Steals 10 additional health. / Kubikiribocho: Grants 10 permanent destructible defense. / Sameheada: Steals 1 random chakra from the target. / Nuibari: Stuns non-mental skills for 1 turn. / Shibuki: Deals 5 permanent affliction damage. / Kabutowari: Destroys destructible defense and deals 15 piercing damage. / Kiba: Deals 20 affliction damage to all other enemies.",
        energy: [],
        classes: ["Chakra", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/vU96NVd.png",
      },
      {
        name: "Mangetsu Block",
        description:
          "This skill makes Edo Tensei Mangetsu (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Edo Tensei Mangetsu (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/8CTkW7A.png",
      },
    ],
  },
  {
    name: "Edo Tensei Jinpachi (S)",
    url: "https://i.imgur.com/ljV9Yzu.png",
    description:
      "Edo Tensei Jinpachi (S) is one of the previous Seven Swordsmen of the Mist and a particularly cruel individual.",
    descriptionBR:
      "Edo Tensei Jinpachi (S) is one of the previous Seven Swordsmen of the Mist and a particularly cruel individual.",
    skills: [
      {
        name: "Explosive Tag Primer",
        description:
          "ET Jinpachi gains 10 permanent destructible defense. The next use of 'Silent Explosion' will deal 15 chakra piercing damage* to the target. If an enemy destroys the defense of this skill, they will take 15 piercing damage* and this skill will end.",
        descriptionBR:
          "ET Jinpachi gains 10 permanent destructible defense. The next use of 'Silent Explosion' will deal 15 chakra piercing damage* to the target. If an enemy destroys the defense of this skill, they will take 15 piercing damage* and this skill will end.",
        energy: [],
        classes: ["Chakra", "Instant", "Melee*"],
        cooldown: 2,
        url: "https://i.imgur.com/Ko68Yvv.png",
      },
      {
        name: "Silent Explosion",
        description:
          "Jinpachi deals 20 piercing damage to one enemy and reduces their non-affliction damage by 5 for 1 turn. If 'Explosive Tag Primer' is used on the last turn, this skill will cost 1 additional random chakra for 1 turn.",
        descriptionBR:
          "Jinpachi deals 20 piercing damage to one enemy and reduces their non-affliction damage by 5 for 1 turn. If 'Explosive Tag Primer' is used on the last turn, this skill will cost 1 additional random chakra for 1 turn.",
        energy: ["Tai"],
        classes: ["Physical", "Melee", "Instant", "$_"],
        cooldown: 0,
        url: "https://i.imgur.com/RKv7ubV.png",
      },
      {
        name: "Shibuki Explosion Chain",
        description:
          "ET Jinpachi gains 10 permanent destructible defense. The next use of 'Silent Explosion' will deal 10 permanent affliction damage* to the target. If an enemy destroys the defense of this skill, they will take 10 affliction damage* permanently and this skill will end.",
        descriptionBR:
          "ET Jinpachi gains 10 permanent destructible defense. The next use of 'Silent Explosion' will deal 10 permanent affliction damage* to the target. If an enemy destroys the defense of this skill, they will take 10 affliction damage* permanently and this skill will end.",
        energy: ["Random"],
        classes: ["Chakra", "Instant", "Melee*", "Affliction"],
        cooldown: 2,
        url: "https://i.imgur.com/DdGU68F.png",
      },
      {
        name: "Shibuki Defense",
        description:
          "This skill makes Edo Tensei Jinpachi (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Edo Tensei Jinpachi (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/rmCtifZ.png",
      },
    ],
  },
  {
    name: "Edo Tensei Jinin (S)",
    url: "https://i.imgur.com/e8llxor.png",
    description:
      "Edo Tensei Jinin (S) is a former member of the seven swordsman of the mist. Using his sword Kabutowari he will demonstrate the power of the previous generation on the battlefield.",
    descriptionBR:
      "Edo Tensei Jinin (S) is a former member of the seven swordsman of the mist. Using his sword Kabutowari he will demonstrate the power of the previous generation on the battlefield.",
    skills: [
      {
        name: "Silent Killing Axe",
        description:
          "ET Jinin deals 20 piercing damage to one enemy and marks them for 2 turns. While marked, they will receive 5 additional damage from non-affliction skills and cannot reduce damage or become invulnerable. If the target is marked by 'Silent Killing Hammer', it's duration is extended by 1 turn.",
        descriptionBR:
          "ET Jinin deals 20 piercing damage to one enemy and marks them for 2 turns. While marked, they will receive 5 additional damage from non-affliction skills and cannot reduce damage or become invulnerable. If the target is marked by 'Silent Killing Hammer', it's duration is extended by 1 turn.",
        energy: ["Gen"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/lPSrqRk.png",
      },
      {
        name: "Silent Killing Hammer",
        description:
          "ET Jinin deals 20 damage to one enemy, stuns their non-mental skills and markes them for 1 turn. While marked, they will receive 5 additional damage from ET Jinin's skills and will ignore counters and reflects. If the target is marked by 'Silent Killing Axe', it's duration is extended by 1 turn.",
        descriptionBR:
          "ET Jinin deals 20 damage to one enemy, stuns their non-mental skills and markes them for 1 turn. While marked, they will receive 5 additional damage from ET Jinin's skills and will ignore counters and reflects. If the target is marked by 'Silent Killing Axe', it's duration is extended by 1 turn.",
        energy: ["Tai"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/vGy1eyq.png",
      },
      {
        name: "Axe & Hammer Smash",
        description:
          "ET Jinin deals 30 damage to one enemy. Before dealing damage, if they are marked by 'Silent Killing Axe', this will destroy destructible defense. If marked by 'Silent Killing Hammer', this will convert any damage reduction into additional non-affliction damage received instead. If marked by both, this deals an additional 10 damage and stuns them for 1 turn.",
        descriptionBR:
          "ET Jinin deals 30 damage to one enemy. Before dealing damage, if they are marked by 'Silent Killing Axe', this will destroy destructible defense. If marked by 'Silent Killing Hammer', this will convert any damage reduction into additional non-affliction damage received instead. If marked by both, this deals an additional 10 damage and stuns them for 1 turn.",
        energy: ["Random", "Random"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/DzoBZvG.png",
      },
      {
        name: "Skilled Evasion",
        description:
          "This skill makes Edo Tensei Jinin (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Edo Tensei Jinin (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/URUFtuo.png",
      },
    ],
  },
  {
    name: "Edo Tensei Ameyuri (S)",
    url: "https://i.imgur.com/XegsPjQ.png",
    description:
      "Edo Tensei Ameyuri (S) has been summoned from the dead to participate in the fourth ninja war. She wields the dual sharpest swords ever made.",
    descriptionBR:
      "Edo Tensei Ameyuri (S) has been summoned from the dead to participate in the fourth ninja war. She wields the dual sharpest swords ever made.",
    skills: [
      {
        name: "Silent Dual Sword Rampage",
        description:
          "Imbuing her swords with lightining, Ameyuri deals 20 piercing damage to one enemy. For 2 turns, that enemy's cooldown will be paralyzed. This effect doesn't stack.",
        descriptionBR:
          "Imbuing her swords with lightining, Ameyuri deals 20 piercing damage to one enemy. For 2 turns, that enemy's cooldown will be paralyzed. This effect doesn't stack.",
        energy: ["Nin"],
        classes: ["Chakra", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/JLk9lyT.png",
      },
      {
        name: "Lightning Rain",
        description:
          "Ameyuri sends bolts of lightning to electrocute her targets, dealing 35 piercing damage to one enemy and 15 to all others. For 1 turn, all enemies will have their skills cooldown increased by 1. This skill deals 10 additional damage to enemies with their cooldowns paralyzed.",
        descriptionBR:
          "Ameyuri sends bolts of lightning to electrocute her targets, dealing 35 piercing damage to one enemy and 15 to all others. For 1 turn, all enemies will have their skills cooldown increased by 1. This skill deals 10 additional damage to enemies with their cooldowns paralyzed.",
        energy: ["Nin", "Random"],
        classes: ["Chakra", "Melee", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/AMoKcaC.png",
      },
      {
        name: "Lightning Flow Trap",
        description:
          "Ameyuri surrounds each of her enemies with lightning. For 1 turns, all enemies will have their cooldowns increased by 1 and any enemy that does not use a new skill will receive 10 additional damage from Ameyuri's skills for 1 turn. This skill will last 1 additional turn permanently.",
        descriptionBR:
          "Ameyuri surrounds each of her enemies with lightning. For 1 turns, all enemies will have their cooldowns increased by 1 and any enemy that does not use a new skill will receive 10 additional damage from Ameyuri's skills for 1 turn. This skill will last 1 additional turn permanently.",
        energy: ["Random"],
        classes: ["Chakra", "Melee", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/w2tQkSk.png",
      },
      {
        name: "Ameyuri Block",
        description:
          "This skill makes Edo Tensei Ameyuri (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Edo Tensei Ameyuri (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/761Gsef.png",
      },
    ],
  },
  {
    name: "Edo Tensei Fuguki (S)",
    url: "https://i.imgur.com/5QPz0DC.png",
    description:
      "Reanimated by Kabuto during the Fourth Shinobi World War as one of the Seven Swordsmen of the Mist, Fuguki used to wield the Shark-Skin Blade, Samehada. A merciless man of few morals, Fuguki uniquely fights using his magnificent mane of red hair as a weapon, dynamically manipulating it to dominate his enemies.",
    descriptionBR:
      "Reanimated by Kabuto during the Fourth Shinobi World War as one of the Seven Swordsmen of the Mist, Fuguki used to wield the Shark-Skin Blade, Samehada. A merciless man of few morals, Fuguki uniquely fights using his magnificent mane of red hair as a weapon, dynamically manipulating it to dominate his enemies.",
    skills: [
      {
        name: "Hair Needle Senbon",
        description:
          "ET Fuguki deals 20 piercing damage to one enemy. For 1 turn, any enemy that uses a new skill on ET Fuguki or his allies will gain a stack of 'Hair Spikes'; This skill may only grant 1 stack to an enemy per turn.",
        descriptionBR:
          "ET Fuguki deals 20 piercing damage to one enemy. For 1 turn, any enemy that uses a new skill on ET Fuguki or his allies will gain a stack of 'Hair Spikes'; This skill may only grant 1 stack to an enemy per turn.",
        energy: ["Nin"],
        classes: ["Physical", "Ranged", "Instant", "$_"],
        cooldown: 0,
        url: "https://i.imgur.com/QWVYyRL.png",
      },
      {
        name: "Hardened Spikes",
        description:
          "ET Fuguki instantly applies a stack of 'Hair Spikes' to the enemy team, and his team gains 15 points of destructible defense for 2 turns. During this time, any enemy that destroys this destructible defense will gain a stack of 'Hair Spikes'.",
        descriptionBR:
          "ET Fuguki instantly applies a stack of 'Hair Spikes' to the enemy team, and his team gains 15 points of destructible defense for 2 turns. During this time, any enemy that destroys this destructible defense will gain a stack of 'Hair Spikes'.",
        energy: ["Random", "Random"],
        classes: ["Physical", "Ranged", "Instant", "$_"],
        cooldown: 3,
        url: "https://i.imgur.com/I0vV2sI.png",
      },
      {
        name: "Ranged Supression",
        description:
          "For 3 turns, one enemy will be dealt 5 piercing damage, granting them a stack of 'Hair Spikes' each turn, and the other enemies will be dealt 5 piercing damage every turn. During this time, any enemy that uses a new harmful skill will gain a stack of 'Hair Spikes'. This skill ends if Fuguki dies.",
        descriptionBR:
          "For 3 turns, one enemy will be dealt 5 piercing damage, granting them a stack of 'Hair Spikes' each turn, and the other enemies will be dealt 5 piercing damage every turn. During this time, any enemy that uses a new harmful skill will gain a stack of 'Hair Spikes'. This skill ends if Fuguki dies.",
        energy: ["Nin", "Nin"],
        classes: ["Physical", "Ranged", "Instant", "$_"],
        cooldown: 5,
        url: "https://i.imgur.com/Km3oKEK.png",
      },
      {
        name: "Spiked Hair Defense",
        description:
          "This skill makes Edo Tensei Fuguki (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Edo Tensei Fuguki (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/YCfhpVw.png",
      },
      {
        name: "Hair Spikes",
        description:
          "An enemy affected by this skill will be dealt 2 piercing damage every turn for the rest of the game. During this time, that enemy will receive 5 additional damage from 'Hair Needle Senbon'. This skill stacks.",
        descriptionBR:
          "An enemy affected by this skill will be dealt 2 piercing damage every turn for the rest of the game. During this time, that enemy will receive 5 additional damage from 'Hair Needle Senbon'. This skill stacks.",
        energy: [],
        classes: ["Physical", "Ranged", "Instant", "Affliction"],
        cooldown: 0,
        url: "https://i.imgur.com/B29O0L1.png",
      },
    ],
  },
  {
    name: "Edo Tensei Chiyo (S)",
    url: "https://i.imgur.com/Mh9GsDq.png",
    description:
      "Edo Tensei Chiyo (S) has been summoned back from the afterlife. She may not like it but she will do her best to help her opponents out with information while she is forced to fight.",
    descriptionBR:
      "Edo Tensei Chiyo (S) has been summoned back from the afterlife. She may not like it but she will do her best to help her opponents out with information while she is forced to fight.",
    skills: [
      {
        name: "White Secret Technique Ten Puppets",
        description:
          "Chiyo assaults her enemies using the ten puppets, stunning one enemy's physical and ranged skills for 1 turn. Afterwards, one random enemy will be dealt 20 damage for 2 turns.",
        descriptionBR:
          "Chiyo assaults her enemies using the ten puppets, stunning one enemy's physical and ranged skills for 1 turn. Afterwards, one random enemy will be dealt 20 damage for 2 turns.",
        energy: ["Random", "Random"],
        classes: ["Physical", "Ranged", "Unique", "Action"],
        cooldown: 2,
        url: "https://i.imgur.com/y4LZSrI.png",
      },
      {
        name: "Possum",
        description:
          "Chiyo plays possum on one enemy and targets them. For 1 turn, if that enemy uses a new harmful skill, they will be countered. If successfully, that enemy will be dealt 20 damage and will have their physical and melee skills stunned for 1 turn. This skill is invisible.",
        descriptionBR:
          "Chiyo plays possum on one enemy and targets them. For 1 turn, if that enemy uses a new harmful skill, they will be countered. If successfully, that enemy will be dealt 20 damage and will have their physical and melee skills stunned for 1 turn. This skill is invisible.",
        energy: ["Tai"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 2,
        url: "https://i.imgur.com/DouGpB2.png",
      },
      {
        name: "White Secret Art Illusion",
        description:
          "Edo Tensei Chiyo (S) targets one enemy dealing 25 damage to them. For 1 turn, Edo Tensei Chiyo (S) will ignore harmful non-ranged skills.",
        descriptionBR:
          "Edo Tensei Chiyo (S) targets one enemy dealing 25 damage to them. For 1 turn, Edo Tensei Chiyo (S) will ignore harmful non-ranged skills.",
        energy: ["Gen"],
        classes: ["Physical", "Ranged", "Unique", "Instant"],
        cooldown: 2,
        url: "https://i.imgur.com/R9UxzZB.png",
      },
      {
        name: "Chiyo Evade",
        description:
          "This skill makes Edo Tensei Chiyo (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Edo Tensei Chiyo (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/t7wpJ7e.png",
      },
    ],
  },
  {
    name: "Edo Tensei Hanzo (S)",
    url: "https://i.imgur.com/LyOKYz1.png",
    description:
      "Edo Tensei Hanzo (S) has been summoned back from the dead in the middle of a battlefield and he is not happy about it. Edo Hanzo (S) will engage anyone that crosses his path as he did when he was alive.",
    descriptionBR:
      "Edo Tensei Hanzo (S) has been summoned back from the dead in the middle of a battlefield and he is not happy about it. Edo Hanzo (S) will engage anyone that crosses his path as he did when he was alive.",
    skills: [
      {
        name: "Poison Sickle",
        description:
          "Hanzo assaults one enemy with his sickle, dealing 5 affliction damage to them permanently. During this time, the first time that enemy uses a new harmful skill, Hanzo will gain 1 taijutsu chakra.",
        descriptionBR:
          "Hanzo assaults one enemy with his sickle, dealing 5 affliction damage to them permanently. During this time, the first time that enemy uses a new harmful skill, Hanzo will gain 1 taijutsu chakra.",
        energy: ["Tai"],
        classes: ["Physical", "Melee", "Instant", "Affliction", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/VsBCgUA.png",
      },
      {
        name: "Dance of the Sickle Blade",
        description:
          "Hanzo targets all enemies affected by 'Poison Sickle', stunning their physical and chakra skills for 1 turn and removing 1 random chakra for each stack of 'Poison Sickle' active on them. For 1 turn, they will also receive 5 additional damage from 'Poison Sickle'. This skill ignores invulnerability.",
        descriptionBR:
          "Hanzo targets all enemies affected by 'Poison Sickle', stunning their physical and chakra skills for 1 turn and removing 1 random chakra for each stack of 'Poison Sickle' active on them. For 1 turn, they will also receive 5 additional damage from 'Poison Sickle'. This skill ignores invulnerability.",
        energy: ["Tai", "Random", "Random"],
        classes: ["Physical", "Ranged", "Instant", "Unique"],
        cooldown: 3,
        url: "https://i.imgur.com/S3hofDF.png",
      },
      {
        name: "Major Summoning: Ibuse",
        description:
          "Hanzo summons Ibuse in the battlefield, garanting himself 35 points of destructible defense and an additional 10 destructible defense for each time 'Poison Sickle' was used, removing all stacks afterwards. While this destructible defense is up, this skill will be replaced by 'Ibuse: Poison Fog'.",
        descriptionBR:
          "Hanzo summons Ibuse in the battlefield, garanting himself 35 points of destructible defense and an additional 10 destructible defense for each time 'Poison Sickle' was used, removing all stacks afterwards. While this destructible defense is up, this skill will be replaced by 'Ibuse: Poison Fog'.",
        energy: ["Tai", "Gen"],
        classes: ["Chakra", "Instant", "Unique"],
        cooldown: 5,
        url: "https://i.imgur.com/U7Xl9Z7.png",
      },
      {
        name: "Kusarigama Defense",
        description:
          "This skill makes Edo Tensei Hanzo (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Edo Tensei Hanzo (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/zJ5cf2b.png",
      },
      {
        name: "Ibuse: Poison Fog",
        description:
          "Ibuse releases a noxious cloud of deadly poison with his mouth, dealing 5 affliction damage to all enemies for 1 turn and making them receive 5 additional damage from affliction skills permanently.",
        descriptionBR:
          "Ibuse releases a noxious cloud of deadly poison with his mouth, dealing 5 affliction damage to all enemies for 1 turn and making them receive 5 additional damage from affliction skills permanently.",
        energy: ["Random", "Random"],
        classes: ["Chakra", "Ranged", "Instant", "Unique", "Affliction"],
        cooldown: 2,
        url: "https://i.imgur.com/CWkqCoX.png",
      },
    ],
  },
  {
    name: "Edo Tensei Nagato (S)",
    url: "https://i.imgur.com/SoFPHt8.png",
    description:
      "Edo Tensei Nagato (S) has been summoned to do battle. He is fully aware of the fact that he is being controlled again as he was while he was living.",
    descriptionBR:
      "Edo Tensei Nagato (S) has been summoned to do battle. He is fully aware of the fact that he is being controlled again as he was while he was living.",
    skills: [
      {
        name: "Human Path",
        description:
          "Nagato draws out the lifeforce of an enemy, stealing 10 health and dealing 20 damage. That enemy's offensive skills will be stunned for 1 turn.",
        descriptionBR:
          "Nagato draws out the lifeforce of an enemy, stealing 10 health and dealing 20 damage. That enemy's offensive skills will be stunned for 1 turn.",
        energy: ["Gen", "Random"],
        classes: ["Mental", "Melee", "Unique", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/vlYNLAb.png",
      },
      {
        name: "Preta Path",
        description:
          "Nagato drains an enemy's energy, stealing 10 health points and removing 1 taijutsu or ninjutsu from their chakra pool.",
        descriptionBR:
          "Nagato drains an enemy's energy, stealing 10 health points and removing 1 taijutsu or ninjutsu from their chakra pool.",
        energy: ["Blood"],
        classes: ["Chakra", "Melee", "Unique", "Instant", "Affliction"],
        cooldown: 1,
        url: "https://i.imgur.com/VFpdMPm.png",
      },
      {
        name: "Animal Path",
        description:
          "Nagato summons various animals and creatures, dealing 10 damage to all enemies for 2 turns. The following 2 turns, any enemy that uses a new a skill on Edo Tensei Nagato will be *dealt 10 piercing damage.",
        descriptionBR:
          "Nagato summons various animals and creatures, dealing 10 damage to all enemies for 2 turns. The following 2 turns, any enemy that uses a new a skill on Edo Tensei Nagato will be *dealt 10 piercing damage.",
        energy: ["Blood", "Random"],
        classes: ["Physical", "Ranged", "Unique", "Action", "*Instant"],
        cooldown: 2,
        url: "https://i.imgur.com/bEnVUtF.png",
      },
      {
        name: "Naraka Path",
        description:
          "This skill makes Edo Tensei Nagato (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Edo Tensei Nagato (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Mental", "Unique", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/dZTXSyj.png",
      },
    ],
  },
  {
    name: "ET Sandaime Raikage (S)",
    url: "https://i.imgur.com/D5phctx.png",
    description:
      "Edo Tensei Sandaime Raikage (S) is not pleased to be back among the living and forced to do battle. He does however have faith that the new generation of shinobi can defeat him and his peers.",
    descriptionBR:
      "Edo Tensei Sandaime Raikage (S) is not pleased to be back among the living and forced to do battle. He does however have faith that the new generation of shinobi can defeat him and his peers.",
    skills: [
      {
        name: "Four Finger Nukite",
        description:
          "Edo Tensei Sandaime Raikage (S) uses Four Finger Nukite on one enemy dealing 25 piercing damage*. Edo Tensei Sandaime Raikage (S) gains 25% damage reduction permanently when this skill is used. This skill becomes 'Three Finger Nukite' permanently when used.",
        descriptionBR:
          "Edo Tensei Sandaime Raikage (S) uses Four Finger Nukite on one enemy dealing 25 piercing damage*. Edo Tensei Sandaime Raikage (S) gains 25% damage reduction permanently when this skill is used. This skill becomes 'Three Finger Nukite' permanently when used.",
        energy: ["Nin"],
        classes: ["Chakra", "Melee", "Unique", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/WSNxhnV.png",
      },
      {
        name: "Lightning Release Shockwave",
        description:
          "Using Lightning Release Shockwave Edo Tensei Sandaime Raikage (S) targets one enemy dealing 30 damage. One random enemy will be dealt 30 damage that ignores invulnerability.",
        descriptionBR:
          "Using Lightning Release Shockwave Edo Tensei Sandaime Raikage (S) targets one enemy dealing 30 damage. One random enemy will be dealt 30 damage that ignores invulnerability.",
        energy: ["Nin", "Random"],
        classes: ["Chakra", "Ranged", "Unique", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/fLVG8pR.png",
      },
      {
        name: "One Finger Nukite Spear",
        description:
          "Edo Tensei Sandaime Raikage (S) uses One Finger Nukite Spear on one enemy dealing 50 piercing damage. This skill cannot be countered or reflected.",
        descriptionBR:
          "Edo Tensei Sandaime Raikage (S) uses One Finger Nukite Spear on one enemy dealing 50 piercing damage. This skill cannot be countered or reflected.",
        energy: ["Tai", "Nin"],
        classes: ["Chakra", "Melee", "Unique", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/3ZbkkbG.png",
      },
      {
        name: "Immense Speed",
        description:
          "This skill makes ET Sandaime Raikage (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz ET Sandaime Raikage (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/ceyfxM4.png",
      },
      {
        name: "Three Finger Nukite",
        description:
          "Using Three Finger Nukite Edo Tensei Sandaime Raikage (S) gains 50% damage reduction permanently. 'One Finger Nukite' can be used on all enemies permanently when this skill is used. This skill can only be used once and cannot be removed.",
        descriptionBR:
          "Using Three Finger Nukite Edo Tensei Sandaime Raikage (S) gains 50% damage reduction permanently. 'One Finger Nukite' can be used on all enemies permanently when this skill is used. This skill can only be used once and cannot be removed.",
        energy: [],
        classes: ["Chakra", "Unique", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/PU4qYK7.jpeg",
      },
    ],
  },
  {
    name: "Edo Tensei Muu (S)",
    url: "https://i.imgur.com/Ms96j1y.png",
    description:
      "Muu, the Second Tsuchikage, was revived against his will to fight. He is a skilled spy, capable of infiltrating the battlefield undetected, in addition to his Kekkei Touta, the atomic detachment, capable of turning enemies into dust in a matter of moments.",
    descriptionBR:
      "Muu, the Second Tsuchikage, was revived against his will to fight. He is a skilled spy, capable of infiltrating the battlefield undetected, in addition to his Kekkei Touta, the atomic detachment, capable of turning enemies into dust in a matter of moments.",
    skills: [
      {
        name: "Fission",
        description:
          "ET Muu grant himself or one ally 50% of unpierceable damage reduction points for 1 turn. During this turn, any enemy that uses a new skill on that ally will receive 5 additional damage from non-affliction skills permanently. This skill is invisible.",
        descriptionBR:
          "ET Muu grant himself or one ally 50% of unpierceable damage reduction points for 1 turn. During this turn, any enemy that uses a new skill on that ally will receive 5 additional damage from non-affliction skills permanently. This skill is invisible.",
        energy: ["Gen"],
        classes: ["Chakra", "Instant", "Helpful", "Unique"],
        cooldown: 2,
        url: "https://i.imgur.com/IDYuApM.png",
      },
      {
        name: "Atomic Detachment",
        description:
          "ET Muu deals 20 damage to one enemy and an additional 15 piercing damage the first turn and 10 piercing damage the following turn. During this time, that enemy's skills will cost 1 additional random chakra. This skill ends if that enemy uses a new skill.",
        descriptionBR:
          "ET Muu deals 20 damage to one enemy and an additional 15 piercing damage the first turn and 10 piercing damage the following turn. During this time, that enemy's skills will cost 1 additional random chakra. This skill ends if that enemy uses a new skill.",
        energy: ["Gen", "Random"],
        classes: ["Chakra", "Ranged", "Instant", "Harmful", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/rUORWDd.png",
      },
      {
        name: "Chameleon Covering",
        description:
          "ET Muu makes himself or one ally ignore all harmful effects except damage for 1 turn. If the protected character receive a new harmful skill, 'Atomic Detachment' will cost 2 random chakra for 1 turn. This skill is invisible.",
        descriptionBR:
          "ET Muu makes himself or one ally ignore all harmful effects except damage for 1 turn. If the protected character receive a new harmful skill, 'Atomic Detachment' will cost 2 random chakra for 1 turn. This skill is invisible.",
        energy: [],
        classes: ["Chakra", "Instant", "Helpful", "Unique"],
        cooldown: 2,
        url: "https://i.imgur.com/ssBY4vX.png",
      },
      {
        name: "Sensorial Awareness",
        description: "This skill makes ET Muu (S) invulnerable for 1 turn.",
        descriptionBR: "This skill makes ET Muu (S) invulnerable for 1 turn.",
        energy: ["Random"],
        classes: ["Mental", "Instant", "Helpful"],
        cooldown: 4,
        url: "https://imgur.com/tFwLc31.jpg",
      },
    ],
  },
];
