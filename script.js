// --- Perfume Data (COMPLETE LIST) ---
const perfumesData = [
    // Chanel
    { id: 'chanel-n5-eau-de-parfum', name: "N°5 Eau de Parfum", brand: "Chanel", gender: "Femme" },
    { id: 'chanel-n5-eau-de-toilette', name: "N°5 Eau de Toilette", brand: "Chanel", gender: "Femme" },
    { id: 'chanel-n5-leau', name: "N°5 L'Eau", brand: "Chanel", gender: "Femme" },
    { id: 'chanel-n5-parfum', name: "N°5 Parfum", brand: "Chanel", gender: "Femme" },
    { id: 'chanel-coco-mademoiselle-edp', name: "Coco Mademoiselle Eau de Parfum", brand: "Chanel", gender: "Femme" },
    { id: 'chanel-coco-mademoiselle-edp-intense', name: "Coco Mademoiselle Eau de Parfum Intense", brand: "Chanel", gender: "Femme" },
    { id: 'chanel-coco-mademoiselle-leau-privee', name: "Coco Mademoiselle L'Eau Privée", brand: "Chanel", gender: "Femme" },
    { id: 'chanel-chance-edp', name: "Chance Eau de Parfum", brand: "Chanel", gender: "Femme" },
    { id: 'chanel-chance-edt', name: "Chance Eau de Toilette", brand: "Chanel", gender: "Femme" },
    { id: 'chanel-chance-eau-tendre-edp', name: "Chance Eau Tendre Eau de Parfum", brand: "Chanel", gender: "Femme" },
    { id: 'chanel-chance-eau-tendre-edt', name: "Chance Eau Tendre Eau de Toilette", brand: "Chanel", gender: "Femme" },
    { id: 'chanel-chance-eau-fraiche', name: "Chance Eau Fraîche", brand: "Chanel", gender: "Femme" },
    { id: 'chanel-chance-eau-vive', name: "Chance Eau Vive", brand: "Chanel", gender: "Femme" },
    { id: 'chanel-bleu-de-chanel-edt', name: "Bleu de Chanel Eau de Toilette", brand: "Chanel", gender: "Homme" },
    { id: 'chanel-bleu-de-chanel-edp', name: "Bleu de Chanel Eau de Parfum", brand: "Chanel", gender: "Homme" },
    { id: 'chanel-bleu-de-chanel-parfum', name: "Bleu de Chanel Parfum", brand: "Chanel", gender: "Homme" },
    { id: 'chanel-allure-homme', name: "Allure Homme", brand: "Chanel", gender: "Homme" },
    { id: 'chanel-allure-homme-sport', name: "Allure Homme Sport", brand: "Chanel", gender: "Homme" },
    { id: 'chanel-allure-homme-edition-blanche', name: "Allure Homme Édition Blanche", brand: "Chanel", gender: "Homme" },
    { id: 'chanel-gabrielle-chanel-essence', name: "Gabrielle Chanel Essence", brand: "Chanel", gender: "Femme" },
    { id: 'chanel-coco-noir', name: "Coco Noir", brand: "Chanel", gender: "Femme" },
    { id: 'chanel-les-exclusifs-coromandel', name: "Les Exclusifs - Coromandel", brand: "Chanel", gender: "Mixte" },
    { id: 'chanel-les-exclusifs-sycomore', name: "Les Exclusifs - Sycomore", brand: "Chanel", gender: "Mixte" },
    { id: 'chanel-les-exclusifs-beige', name: "Les Exclusifs - Beige", brand: "Chanel", gender: "Mixte" },
    { id: 'chanel-les-exclusifs-gardenia', name: "Les Exclusifs - Gardénia", brand: "Chanel", gender: "Femme" },

    // Dior
    { id: 'dior-sauvage-edt', name: "Sauvage Eau de Toilette", brand: "Dior", gender: "Homme" },
    { id: 'dior-sauvage-edp', name: "Sauvage Eau de Parfum", brand: "Dior", gender: "Homme" },
    { id: 'dior-sauvage-parfum', name: "Sauvage Parfum", brand: "Dior", gender: "Homme" },
    { id: 'dior-sauvage-elixir', name: "Sauvage Elixir", brand: "Dior", gender: "Homme" },
    { id: 'dior-jadore-edp', name: "J'adore Eau de Parfum", brand: "Dior", gender: "Femme" },
    { id: 'dior-jadore-parfum-deau', name: "J'adore Parfum d'Eau", brand: "Dior", gender: "Femme" },
    { id: 'dior-jadore-lor', name: "J'adore L'Or", brand: "Dior", gender: "Femme" },
    { id: 'dior-miss-dior-edp-new', name: "Miss Dior Eau de Parfum (New)", brand: "Dior", gender: "Femme" },
    { id: 'dior-miss-dior-blooming-bouquet', name: "Miss Dior Blooming Bouquet", brand: "Dior", gender: "Femme" },
    { id: 'dior-miss-dior-rose-nroses', name: "Miss Dior Rose N'Roses", brand: "Dior", gender: "Femme" },
    { id: 'dior-dior-homme-original', name: "Dior Homme Original", brand: "Dior", gender: "Homme" },
    { id: 'dior-dior-homme-intense', name: "Dior Homme Intense", brand: "Dior", gender: "Homme" },
    { id: 'dior-dior-homme-sport', name: "Dior Homme Sport", brand: "Dior", gender: "Homme" },
    { id: 'dior-fahrenheit-edt', name: "Fahrenheit Eau de Toilette", brand: "Dior", gender: "Homme" },
    { id: 'dior-fahrenheit-le-parfum', name: "Fahrenheit Le Parfum", brand: "Dior", gender: "Homme" },
    { id: 'dior-poison-edt', name: "Poison Eau de Toilette", brand: "Dior", gender: "Femme" },
    { id: 'dior-hypnotic-poison-edp', name: "Hypnotic Poison Eau de Parfum", brand: "Dior", gender: "Femme" },
    { id: 'dior-pure-poison', name: "Pure Poison", brand: "Dior", gender: "Femme" },
    { id: 'dior-gris-dior', name: "Gris Dior", brand: "Dior", gender: "Mixte" },
    { id: 'dior-ambre-nuit', name: "Ambre Nuit", brand: "Dior", gender: "Mixte" },
    { id: 'dior-bois-dargent', name: "Bois d'Argent", brand: "Dior", gender: "Mixte" },
    { id: 'dior-oud-ispahan', name: "Oud Ispahan", brand: "Dior", gender: "Mixte" },
    { id: 'dior-lucky', name: "Lucky", brand: "Dior", gender: "Mixte" },
    { id: 'dior-sakura', name: "Sakura", brand: "Dior", gender: "Mixte" },

    // Tom Ford
    { id: 'tom-ford-oud-wood', name: "Oud Wood", brand: "Tom Ford", gender: "Mixte" },
    { id: 'tom-ford-tobacco-vanille', name: "Tobacco Vanille", brand: "Tom Ford", gender: "Mixte" },
    { id: 'tom-ford-neroli-portofino', name: "Neroli Portofino", brand: "Tom Ford", gender: "Mixte" },
    { id: 'tom-ford-black-orchid-edp', name: "Black Orchid Eau de Parfum", brand: "Tom Ford", gender: "Mixte" },
    { id: 'tom-ford-black-orchid-parfum', name: "Black Orchid Parfum", brand: "Tom Ford", gender: "Mixte" },
    { id: 'tom-ford-fucking-fabulous', name: "Fucking Fabulous", brand: "Tom Ford", gender: "Mixte" },
    { id: 'tom-ford-tuscan-leather', name: "Tuscan Leather", brand: "Tom Ford", gender: "Mixte" },
    { id: 'tom-ford-lost-cherry', name: "Lost Cherry", brand: "Tom Ford", gender: "Mixte" },
    { id: 'tom-ford-cherry-smoke', name: "Cherry Smoke", brand: "Tom Ford", gender: "Mixte" },
    { id: 'tom-ford-soleil-blanc', name: "Soleil Blanc", brand: "Tom Ford", gender: "Mixte" },
    { id: 'tom-ford-ombre-leather', name: "Ombré Leather", brand: "Tom Ford", gender: "Mixte" },
    { id: 'tom-ford-costa-azzurra-parfum', name: "Costa Azzurra Parfum", brand: "Tom Ford", gender: "Mixte" },
    { id: 'tom-ford-beau-de-jour', name: "Beau de Jour", brand: "Tom Ford", gender: "Homme" },
    { id: 'tom-ford-grey-vetiver-edp', name: "Grey Vetiver Eau de Parfum", brand: "Tom Ford", gender: "Homme" },
    { id: 'tom-ford-noir-extreme', name: "Noir Extreme", brand: "Tom Ford", gender: "Homme" },
    { id: 'tom-ford-rose-prick', name: "Rose Prick", brand: "Tom Ford", gender: "Mixte" },
    { id: 'tom-ford-bitter-peach', name: "Bitter Peach", brand: "Tom Ford", gender: "Mixte" },
    { id: 'tom-ford-ebene-fume', name: "Ébène Fumé", brand: "Tom Ford", gender: "Mixte" },
    { id: 'tom-ford-vanille-fatale', name: "Vanille Fatale", brand: "Tom Ford", gender: "Mixte" },
    { id: 'tom-ford-oud-minerale', name: "Oud Minérale", brand: "Tom Ford", gender: "Mixte" },
    { id: 'tom-ford-white-suede', name: "White Suede", brand: "Tom Ford", gender: "Mixte" },
    { id: 'tom-ford-soleil-neige', name: "Soleil Neige", brand: "Tom Ford", gender: "Mixte" },
    { id: 'tom-ford-electric-cherry', name: "Electric Cherry", brand: "Tom Ford", gender: "Mixte" },
    { id: 'tom-ford-myrrhe-mystere', name: "Myrrhe Mystère", brand: "Tom Ford", gender: "Mixte" },

    // Lancôme
    { id: 'lancome-la-vie-est-belle-edp', name: "La Vie Est Belle Eau de Parfum", brand: "Lancôme", gender: "Femme" },
    { id: 'lancome-la-vie-est-belle-leclat', name: "La Vie Est Belle L'Éclat", brand: "Lancôme", gender: "Femme" },
    { id: 'lancome-la-vie-est-belle-intensement', name: "La Vie Est Belle Intensément", brand: "Lancôme", gender: "Femme" },
    { id: 'lancome-la-vie-est-belle-soleil-cristal', name: "La Vie Est Belle Soleil Cristal", brand: "Lancôme", gender: "Femme" },
    { id: 'lancome-tresor-edp', name: "Trésor Eau de Parfum", brand: "Lancôme", gender: "Femme" },
    { id: 'lancome-tresor-midnight-rose', name: "Trésor Midnight Rose", brand: "Lancôme", gender: "Femme" },
    { id: 'lancome-idole-edp', name: "Idôle Eau de Parfum", brand: "Lancôme", gender: "Femme" },
    { id: 'lancome-idole-aura', name: "Idôle Aura", brand: "Lancôme", gender: "Femme" },
    { id: 'lancome-idole-nectar', name: "Idôle Nectar", brand: "Lancôme", gender: "Femme" },
    { id: 'lancome-idole-lintense', name: "Idôle L'Intense", brand: "Lancôme", gender: "Femme" },
    { id: 'lancome-miracle-edp', name: "Miracle Eau de Parfum", brand: "Lancôme", gender: "Femme" },
    { id: 'lancome-hypnose-edp', name: "Hypnôse Eau de Parfum", brand: "Lancôme", gender: "Femme" },
    { id: 'lancome-o-de-lancome', name: "Ô de Lancôme", brand: "Lancôme", gender: "Femme" },
    { id: 'lancome-magie-noire', name: "Magie Noire", brand: "Lancôme", gender: "Femme" },
    { id: 'lancome-poeme', name: "Poême", brand: "Lancôme", gender: "Femme" },
    { id: 'lancome-maison-jasmins-marzipane', name: "Maison Lancôme - Jasmins Marzipane", brand: "Lancôme", gender: "Mixte" },
    { id: 'lancome-maison-oud-bouquet', name: "Maison Lancôme - Oud Bouquet", brand: "Lancôme", gender: "Mixte" },
    { id: 'lancome-maison-roses-berberanza', name: "Maison Lancôme - Roses Berberanza", brand: "Lancôme", gender: "Mixte" },
    { id: 'lancome-maison-iris-dragees', name: "Maison Lancôme - Iris Dragées", brand: "Lancôme", gender: "Mixte" },
    { id: 'lancome-maison-santal-kardamon', name: "Maison Lancôme - Santal Kardamon", brand: "Lancôme", gender: "Mixte" },
    { id: 'lancome-la-nuit-tresor-edp', name: "La Nuit Trésor Eau de Parfum", brand: "Lancôme", gender: "Femme" },
    { id: 'lancome-la-nuit-tresor-fleur-de-nuit', name: "La Nuit Trésor Fleur de Nuit", brand: "Lancôme", gender: "Femme" },

    // Yves Saint Laurent
    { id: 'ysl-black-opium-edp', name: "Black Opium Eau de Parfum", brand: "Yves Saint Laurent", gender: "Femme" },
    { id: 'ysl-black-opium-le-parfum', name: "Black Opium Le Parfum", brand: "Yves Saint Laurent", gender: "Femme" },
    { id: 'ysl-black-opium-illicit-green', name: "Black Opium Illicit Green", brand: "Yves Saint Laurent", gender: "Femme" },
    { id: 'ysl-libre-edp', name: "Libre Eau de Parfum", brand: "Yves Saint Laurent", gender: "Femme" },
    { id: 'ysl-libre-edp-intense', name: "Libre Eau de Parfum Intense", brand: "Yves Saint Laurent", gender: "Femme" },
    { id: 'ysl-libre-le-parfum', name: "Libre Le Parfum", brand: "Yves Saint Laurent", gender: "Femme" },
    { id: 'ysl-mon-paris-edp', name: "Mon Paris Eau de Parfum", brand: "Yves Saint Laurent", gender: "Femme" },
    { id: 'ysl-y-edp', name: "Y Eau de Parfum", brand: "Yves Saint Laurent", gender: "Homme" },
    { id: 'ysl-y-le-parfum', name: "Y Le Parfum", brand: "Yves Saint Laurent", gender: "Homme" },
    { id: 'ysl-lhomme-edt', name: "L'Homme Eau de Toilette", brand: "Yves Saint Laurent", gender: "Homme" },
    { id: 'ysl-la-nuit-de-lhomme-edt', name: "La Nuit de L'Homme Eau de Toilette", brand: "Yves Saint Laurent", gender: "Homme" },
    { id: 'ysl-myself-edp', name: "Myself Eau de Parfum", brand: "Yves Saint Laurent", gender: "Homme" },
    { id: 'ysl-opium-edt', name: "Opium Eau de Toilette", brand: "Yves Saint Laurent", gender: "Femme" },
    { id: 'ysl-rive-gauche', name: "Rive Gauche", brand: "Yves Saint Laurent", gender: "Femme" },
    { id: 'ysl-kouros', name: "Kouros", brand: "Yves Saint Laurent", gender: "Homme" },
    { id: 'ysl-le-vestiaire-tuxedo', name: "Le Vestiaire - Tuxedo", brand: "Yves Saint Laurent", gender: "Mixte" },
    { id: 'ysl-le-vestiaire-caban', name: "Le Vestiaire - Caban", brand: "Yves Saint Laurent", gender: "Mixte" },
    { id: 'ysl-le-vestiaire-saharienne', name: "Le Vestiaire - Saharienne", brand: "Yves Saint Laurent", gender: "Mixte" },
    { id: 'ysl-cinema-edp', name: "Cinema Eau de Parfum", brand: "Yves Saint Laurent", gender: "Femme" },
    { id: 'ysl-paris-edt', name: "Paris Eau de Toilette", brand: "Yves Saint Laurent", gender: "Femme" },
    { id: 'ysl-manifesto-lelixir', name: "Manifesto L'Elixir", brand: "Yves Saint Laurent", gender: "Femme" },
    { id: 'ysl-elle-edp', name: "Elle Eau de Parfum", brand: "Yves Saint Laurent", gender: "Femme" },

    // Guerlain
    { id: 'guerlain-shalimar-edp', name: "Shalimar Eau de Parfum", brand: "Guerlain", gender: "Femme" },
    { id: 'guerlain-shalimar-millesime-iris', name: "Shalimar Millésime Iris", brand: "Guerlain", gender: "Femme" },
    { id: 'guerlain-mon-guerlain-edp', name: "Mon Guerlain Eau de Parfum", brand: "Guerlain", gender: "Femme" },
    { id: 'guerlain-mon-guerlain-intense', name: "Mon Guerlain Intense", brand: "Guerlain", gender: "Femme" },
    { id: 'guerlain-la-petite-robe-noire-edp', name: "La Petite Robe Noire Eau de Parfum", brand: "Guerlain", gender: "Femme" },
    { id: 'guerlain-aqua-allegoria-mandarine-basilic', name: "Aqua Allegoria Mandarine Basilic", brand: "Guerlain", gender: "Mixte" },
    { id: 'guerlain-aqua-allegoria-pera-granita', name: "Aqua Allegoria Pera Granita", brand: "Guerlain", gender: "Mixte" },
    { id: 'guerlain-aqua-allegoria-forte-rosa-rossa', name: "Aqua Allegoria Forte Rosa Rossa", brand: "Guerlain", gender: "Femme" },
    { id: 'guerlain-lhomme-ideal-edp', name: "L'Homme Idéal Eau de Parfum", brand: "Guerlain", gender: "Homme" },
    { id: 'guerlain-lhomme-ideal-extreme', name: "L'Homme Idéal Extrême", brand: "Guerlain", gender: "Homme" },
    { id: 'guerlain-samsara-edp', name: "Samsara Eau de Parfum", brand: "Guerlain", gender: "Femme" },
    { id: 'guerlain-mitsouko-edp', name: "Mitsouko Eau de Parfum", brand: "Guerlain", gender: "Femme" },
    { id: 'guerlain-lheure-bleue-edp', name: "L'Heure Bleue Eau de Parfum", brand: "Guerlain", gender: "Femme" },
    { id: 'guerlain-vetiver-edt', name: "Vétiver Eau de Toilette", brand: "Guerlain", gender: "Homme" },
    { id: 'guerlain-habit-rouge-edt', name: "Habit Rouge Eau de Toilette", brand: "Guerlain", gender: "Homme" },
    { id: 'guerlain-lart-la-matiere-angelique-noire', name: "L'Art & La Matière - Angélique Noire", brand: "Guerlain", gender: "Mixte" },
    { id: 'guerlain-lart-la-matiere-spiritueuse-double-vanille', name: "L'Art & La Matière - Spiritueuse Double Vanille", brand: "Guerlain", gender: "Mixte" },
    { id: 'guerlain-lart-la-matiere-tonka-imperiale', name: "L'Art & La Matière - Tonka Impériale", brand: "Guerlain", gender: "Mixte" },
    { id: 'guerlain-lart-la-matiere-cuir-beluga', name: "L'Art & La Matière - Cuir Béluga", brand: "Guerlain", gender: "Mixte" },
    { id: 'guerlain-lart-la-matiere-rose-cherie', name: "L'Art & La Matière - Rose Chérie", brand: "Guerlain", gender: "Femme" },
    { id: 'guerlain-insolence-edp', name: "Insolence Eau de Parfum", brand: "Guerlain", gender: "Femme" },
    { id: 'guerlain-idylle-edp', name: "Idylle Eau de Parfum", brand: "Guerlain", gender: "Femme" },

    // Armani (Giorgio Armani)
    { id: 'armani-acqua-di-gio-edt', name: "Acqua di Giò Eau de Toilette", brand: "Armani", gender: "Homme" },
    { id: 'armani-acqua-di-gio-profumo', name: "Acqua di Giò Profumo", brand: "Armani", gender: "Homme" },
    { id: 'armani-acqua-di-gio-parfum', name: "Acqua di Giò Parfum", brand: "Armani", gender: "Homme" },
    { id: 'armani-si-edp', name: "Sì Eau de Parfum", brand: "Armani", gender: "Femme" },
    { id: 'armani-si-passione', name: "Sì Passione", brand: "Armani", gender: "Femme" },
    { id: 'armani-si-passione-intense', name: "Sì Passione Intense", brand: "Armani", gender: "Femme" },
    { id: 'armani-my-way-edp', name: "My Way Eau de Parfum", brand: "Armani", gender: "Femme" },
    { id: 'armani-my-way-intense', name: "My Way Intense", brand: "Armani", gender: "Femme" },
    { id: 'armani-armani-code-edt', name: "Armani Code Eau de Toilette", brand: "Armani", gender: "Homme" },
    { id: 'armani-armani-code-edp', name: "Armani Code Eau de Parfum", brand: "Armani", gender: "Homme" },
    { id: 'armani-emporio-stronger-with-you', name: "Emporio Armani Stronger With You", brand: "Armani", gender: "Homme" },
    { id: 'armani-emporio-because-its-you', name: "Emporio Armani Because It's You", brand: "Armani", gender: "Femme" },
    { id: 'armani-prive-rose-darabie', name: "Armani Privé - Rose d'Arabie", brand: "Armani", gender: "Mixte" },
    { id: 'armani-prive-oud-royal', name: "Armani Privé - Oud Royal", brand: "Armani", gender: "Mixte" },
    { id: 'armani-prive-bois-dencens', name: "Armani Privé - Bois d'Encens", brand: "Armani", gender: "Mixte" },
    { id: 'armani-prive-vetiver-dhiver', name: "Armani Privé - Vétiver d'Hiver", brand: "Armani", gender: "Mixte" },
    { id: 'armani-prive-rouge-malachite', name: "Armani Privé - Rouge Malachite", brand: "Armani", gender: "Mixte" },
    { id: 'armani-acqua-di-gioia-edp', name: "Acqua di Gioia Eau de Parfum", brand: "Armani", gender: "Femme" },
    { id: 'armani-light-di-gioia', name: "Light di Gioia", brand: "Armani", gender: "Femme" },
    { id: 'armani-terra-di-gioia', name: "Terra di Gioia", brand: "Armani", gender: "Femme" },
    { id: 'armani-armani-code-absolu', name: "Armani Code Absolu", brand: "Armani", gender: "Homme" },
    { id: 'armani-armani-mania-femme', name: "Armani Mania Femme (si trouvable)", brand: "Armani", gender: "Femme" },

    // Hermès
    { id: 'hermes-terre-dhermes-edt', name: "Terre d'Hermès Eau de Toilette", brand: "Hermès", gender: "Homme" },
    { id: 'hermes-terre-dhermes-parfum', name: "Terre d'Hermès Parfum", brand: "Hermès", gender: "Homme" },
    { id: 'hermes-terre-dhermes-eau-givree', name: "Terre d'Hermès Eau Givrée", brand: "Hermès", gender: "Homme" },
    { id: 'hermes-h24-edp', name: "H24 Eau de Parfum", brand: "Hermès", gender: "Homme" },
    { id: 'hermes-h24-edt', name: "H24 Eau de Toilette", brand: "Hermès", gender: "Homme" },
    { id: 'hermes-twilly-dhermes-edp', name: "Twilly d'Hermès Eau de Parfum", brand: "Hermès", gender: "Femme" },
    { id: 'hermes-un-jardin-sur-le-nil', name: "Un Jardin sur le Nil", brand: "Hermès", gender: "Mixte" },
    { id: 'hermes-un-jardin-en-mediterranee', name: "Un Jardin en Méditerranée", brand: "Hermès", gender: "Mixte" },
    { id: 'hermes-un-jardin-a-cythere', name: "Un Jardin à Cythère", brand: "Hermès", gender: "Mixte" },
    { id: 'hermes-eau-des-merveilles', name: "Eau des Merveilles", brand: "Hermès", gender: "Femme" },
    { id: 'hermes-lombre-des-merveilles', name: "L'Ombre des Merveilles", brand: "Hermès", gender: "Femme" },
    { id: 'hermes-jour-dhermes-edp', name: "Jour d'Hermès Eau de Parfum", brand: "Hermès", gender: "Femme" },
    { id: 'hermes-galop-dhermes', name: "Galop d'Hermès", brand: "Hermès", gender: "Femme" },
    { id: 'hermes-voyage-dhermes-parfum', name: "Voyage d'Hermès Parfum", brand: "Hermès", gender: "Mixte" },
    { id: 'hermes-hermessence-ambre-narguile', name: "Hermessence - Ambre Narguilé", brand: "Hermès", gender: "Mixte" },
    { id: 'hermes-hermessence-vetiver-tonka', name: "Hermessence - Vétiver Tonka", brand: "Hermès", gender: "Mixte" },
    { id: 'hermes-hermessence-rose-ikebana', name: "Hermessence - Rose Ikebana", brand: "Hermès", gender: "Mixte" },
    { id: 'hermes-hermessence-oud-alezan', name: "Hermessence - Oud Alezan", brand: "Hermès", gender: "Mixte" },
    { id: 'hermes-bel-ami', name: "Bel Ami", brand: "Hermès", gender: "Homme" },
    { id: 'hermes-caleche-soie-de-parfum', name: "Calèche Soie de Parfum", brand: "Hermès", gender: "Femme" },
    { id: 'hermes-eau-dorange-verte', name: "Eau d'Orange Verte", brand: "Hermès", gender: "Mixte" },
    { id: 'hermes-twilly-eau-ginger', name: "Twilly Eau Ginger", brand: "Hermès", gender: "Femme" },

    // Creed
    { id: 'creed-aventus', name: "Aventus", brand: "Creed", gender: "Homme" },
    { id: 'creed-aventus-for-her', name: "Aventus for Her", brand: "Creed", gender: "Femme" },
    { id: 'creed-absolu-aventus', name: "Absolu Aventus", brand: "Creed", gender: "Homme" },
    { id: 'creed-green-irish-tweed', name: "Green Irish Tweed", brand: "Creed", gender: "Homme" },
    { id: 'creed-silver-mountain-water', name: "Silver Mountain Water", brand: "Creed", gender: "Mixte" },
    { id: 'creed-millesime-imperial', name: "Millésime Impérial", brand: "Creed", gender: "Mixte" },
    { id: 'creed-viking', name: "Viking", brand: "Creed", gender: "Homme" },
    { id: 'creed-royal-oud', name: "Royal Oud", brand: "Creed", gender: "Mixte" },
    { id: 'creed-original-santal', name: "Original Santal", brand: "Creed", gender: "Mixte" },
    { id: 'creed-original-vetiver', name: "Original Vetiver", brand: "Creed", gender: "Mixte" },
    { id: 'creed-virgin-island-water', name: "Virgin Island Water", brand: "Creed", gender: "Mixte" },
    { id: 'creed-love-in-white', name: "Love in White", brand: "Creed", gender: "Femme" },
    { id: 'creed-love-in-black', name: "Love in Black", brand: "Creed", gender: "Femme" },
    { id: 'creed-spring-flower', name: "Spring Flower", brand: "Creed", gender: "Femme" },
    { id: 'creed-wind-flowers', name: "Wind Flowers", brand: "Creed", gender: "Femme" },
    { id: 'creed-royal-princess-oud', name: "Royal Princess Oud", brand: "Creed", gender: "Femme" },
    { id: 'creed-himalaya', name: "Himalaya", brand: "Creed", gender: "Homme" },
    { id: 'creed-erolfa', name: "Erolfa", brand: "Creed", gender: "Homme" },
    { id: 'creed-bois-du-portugal', name: "Bois du Portugal", brand: "Creed", gender: "Homme" },
    { id: 'creed-aventus-cologne', name: "Aventus Cologne", brand: "Creed", gender: "Homme" },
    { id: 'creed-carmina', name: "Carmina", brand: "Creed", gender: "Femme" },
    { id: 'creed-queen-of-silk', name: "Queen of Silk", brand: "Creed", gender: "Femme" },

    // Maison Francis Kurkdjian
    { id: 'mfk-baccarat-rouge-540-edp', name: "Baccarat Rouge 540 Eau de Parfum", brand: "Maison Francis Kurkdjian", gender: "Mixte" },
    { id: 'mfk-baccarat-rouge-540-extrait', name: "Baccarat Rouge 540 Extrait de Parfum", brand: "Maison Francis Kurkdjian", gender: "Mixte" },
    { id: 'mfk-gentle-fluidity-silver', name: "Gentle Fluidity Silver", brand: "Maison Francis Kurkdjian", gender: "Mixte" },
    { id: 'mfk-gentle-fluidity-gold', name: "Gentle Fluidity Gold", brand: "Maison Francis Kurkdjian", gender: "Mixte" },
    { id: 'mfk-amyris-femme-edp', name: "Amyris Femme Eau de Parfum", brand: "Maison Francis Kurkdjian", gender: "Femme" },
    { id: 'mfk-amyris-homme-edt', name: "Amyris Homme Eau de Toilette", brand: "Maison Francis Kurkdjian", gender: "Homme" },
    { id: 'mfk-aqua-universalis-edt', name: "Aqua Universalis Eau de Toilette", brand: "Maison Francis Kurkdjian", gender: "Mixte" },
    { id: 'mfk-aqua-celestia-cologne-forte', name: "Aqua Celestia Cologne Forte", brand: "Maison Francis Kurkdjian", gender: "Mixte" },
    { id: 'mfk-oud-satin-mood-extrait', name: "Oud Satin Mood Extrait de Parfum", brand: "Maison Francis Kurkdjian", gender: "Mixte" },
    { id: 'mfk-grand-soir', name: "Grand Soir", brand: "Maison Francis Kurkdjian", gender: "Mixte" },
    { id: 'mfk-petit-matin', name: "Petit Matin", brand: "Maison Francis Kurkdjian", gender: "Mixte" },
    { id: 'mfk-a-la-rose', name: "À La Rose", brand: "Maison Francis Kurkdjian", gender: "Femme" },
    { id: 'mfk-lhomme-a-la-rose', name: "L'Homme À La Rose", brand: "Maison Francis Kurkdjian", gender: "Homme" },
    { id: 'mfk-724-edp', name: "724 Eau de Parfum", brand: "Maison Francis Kurkdjian", gender: "Mixte" },
    { id: 'mfk-aqua-vitae-cologne-forte', name: "Aqua Vitae Cologne Forte", brand: "Maison Francis Kurkdjian", gender: "Mixte" },
    { id: 'mfk-pluriel-feminin', name: "Pluriel Féminin", brand: "Maison Francis Kurkdjian", gender: "Femme" },
    { id: 'mfk-pluriel-masculin', name: "Pluriel Masculin", brand: "Maison Francis Kurkdjian", gender: "Homme" },
    { id: 'mfk-oud-silk-mood', name: "Oud Silk Mood", brand: "Maison Francis Kurkdjian", gender: "Mixte" },
    { id: 'mfk-oud-cashmere-mood', name: "Oud Cashmere Mood", brand: "Maison Francis Kurkdjian", gender: "Mixte" },
    { id: 'mfk-apom-pour-femme', name: "APOM Pour Femme", brand: "Maison Francis Kurkdjian", gender: "Femme" },
    { id: 'mfk-cologne-pour-le-soir', name: "Cologne Pour Le Soir", brand: "Maison Francis Kurkdjian", gender: "Mixte" },
    { id: 'mfk-aqua-media-cologne-forte', name: "Aqua Media Cologne Forte", brand: "Maison Francis Kurkdjian", gender: "Mixte" },

    // Jo Malone London
    { id: 'jo-malone-lime-basil-mandarin', name: "Lime Basil & Mandarin Cologne", brand: "Jo Malone London", gender: "Mixte" },
    { id: 'jo-malone-english-pear-freesia', name: "English Pear & Freesia Cologne", brand: "Jo Malone London", gender: "Femme" }, // Leans Femme
    { id: 'jo-malone-wood-sage-sea-salt', name: "Wood Sage & Sea Salt Cologne", brand: "Jo Malone London", gender: "Mixte" },
    { id: 'jo-malone-peony-blush-suede', name: "Peony & Blush Suede Cologne", brand: "Jo Malone London", gender: "Femme" }, // Leans Femme
    { id: 'jo-malone-myrrh-tonka', name: "Myrrh & Tonka Cologne Intense", brand: "Jo Malone London", gender: "Mixte" },
    { id: 'jo-malone-oud-bergamot', name: "Oud & Bergamot Cologne Intense", brand: "Jo Malone London", gender: "Mixte" },
    { id: 'jo-malone-velvet-rose-oud', name: "Velvet Rose & Oud Cologne Intense", brand: "Jo Malone London", gender: "Mixte" },
    { id: 'jo-malone-pomegranate-noir', name: "Pomegranate Noir Cologne", brand: "Jo Malone London", gender: "Mixte" },
    { id: 'jo-malone-blackberry-bay', name: "Blackberry & Bay Cologne", brand: "Jo Malone London", gender: "Mixte" },
    { id: 'jo-malone-nectarine-blossom-honey', name: "Nectarine Blossom & Honey Cologne", brand: "Jo Malone London", gender: "Femme" }, // Leans Femme
    { id: 'jo-malone-wild-bluebell', name: "Wild Bluebell Cologne", brand: "Jo Malone London", gender: "Femme" }, // Leans Femme
    { id: 'jo-malone-orange-blossom', name: "Orange Blossom Cologne", brand: "Jo Malone London", gender: "Mixte" },
    { id: 'jo-malone-red-roses', name: "Red Roses Cologne", brand: "Jo Malone London", gender: "Femme" }, // Leans Femme
    { id: 'jo-malone-poppy-barley', name: "Poppy & Barley Cologne", brand: "Jo Malone London", gender: "Mixte" },
    { id: 'jo-malone-english-oak-hazelnut', name: "English Oak & Hazelnut Cologne", brand: "Jo Malone London", gender: "Mixte" },
    { id: 'jo-malone-bronze-wood-leather', name: "Bronze Wood & Leather Cologne Intense", brand: "Jo Malone London", gender: "Mixte" },
    { id: 'jo-malone-scarlet-poppy', name: "Scarlet Poppy Cologne Intense", brand: "Jo Malone London", gender: "Femme" }, // Leans Femme
    { id: 'jo-malone-cypress-grapevine', name: "Cypress & Grapevine Cologne Intense", brand: "Jo Malone London", gender: "Mixte" }, // Leans Homme
    { id: 'jo-malone-fig-lotus-flower', name: "Fig & Lotus Flower Cologne", brand: "Jo Malone London", gender: "Mixte" },
    { id: 'jo-malone-earl-grey-cucumber', name: "Earl Grey & Cucumber Cologne", brand: "Jo Malone London", gender: "Mixte" },
    { id: 'jo-malone-star-magnolia', name: "Star Magnolia Cologne", brand: "Jo Malone London", gender: "Femme" }, // Leans Femme
    { id: 'jo-malone-mimosa-cardamom', name: "Mimosa & Cardamom Cologne", brand: "Jo Malone London", gender: "Mixte" },

    // Gucci
    { id: 'gucci-bloom-edp', name: "Bloom Eau de Parfum", brand: "Gucci", gender: "Femme" },
    { id: 'gucci-bloom-edp-intense', name: "Bloom Eau de Parfum Intense", brand: "Gucci", gender: "Femme" },
    { id: 'gucci-flora-gorgeous-gardenia-edp', name: "Flora Gorgeous Gardenia Eau de Parfum", brand: "Gucci", gender: "Femme" },
    { id: 'gucci-flora-gorgeous-jasmine-edp', name: "Flora Gorgeous Jasmine Eau de Parfum", brand: "Gucci", gender: "Femme" },
    { id: 'gucci-guilty-pour-homme-edp', name: "Guilty Pour Homme Eau de Parfum", brand: "Gucci", gender: "Homme" },
    { id: 'gucci-guilty-pour-femme-edp', name: "Guilty Pour Femme Eau de Parfum", brand: "Gucci", gender: "Femme" },
    { id: 'gucci-memoire-dune-odeur', name: "Mémoire d'une Odeur", brand: "Gucci", gender: "Mixte" },
    { id: 'gucci-alchemist-chant-nymph', name: "The Alchemist's Garden - A Chant for the Nymph", brand: "Gucci", gender: "Femme" },
    { id: 'gucci-alchemist-tears-iris', name: "The Alchemist's Garden - Tears of Iris", brand: "Gucci", gender: "Mixte" },
    { id: 'gucci-alchemist-voice-snake', name: "The Alchemist's Garden - The Voice of the Snake", brand: "Gucci", gender: "Mixte" },
    { id: 'gucci-oud-intense', name: "Gucci Oud Intense", brand: "Gucci", gender: "Mixte" },
    { id: 'gucci-premiere-edp', name: "Gucci Première Eau de Parfum", brand: "Gucci", gender: "Femme" },
    { id: 'gucci-bamboo-edp', name: "Bamboo Eau de Parfum", brand: "Gucci", gender: "Femme" },
    { id: 'gucci-made-to-measure-homme', name: "Made to Measure Pour Homme", brand: "Gucci", gender: "Homme" },
    { id: 'gucci-rush-edt', name: "Rush Eau de Toilette", brand: "Gucci", gender: "Femme" },
    { id: 'gucci-envy-me', name: "Envy Me (si trouvable)", brand: "Gucci", gender: "Femme" },
    { id: 'gucci-guilty-absolute-homme', name: "Guilty Absolute Pour Homme", brand: "Gucci", gender: "Homme" },
    { id: 'gucci-guilty-absolute-femme', name: "Guilty Absolute Pour Femme", brand: "Gucci", gender: "Femme" },
    { id: 'gucci-flora-gorgeous-magnolia', name: "Flora Gorgeous Magnolia", brand: "Gucci", gender: "Femme" },
    { id: 'gucci-by-gucci-pour-homme', name: "Gucci by Gucci Pour Homme", brand: "Gucci", gender: "Homme" },
    { id: 'gucci-a-song-for-the-rose-edp', name: "A Song for the Rose Eau de Parfum", brand: "Gucci", gender: "Mixte" },
    { id: 'gucci-where-my-heart-beats-edp', name: "Where My Heart Beats Eau de Parfum", brand: "Gucci", gender: "Mixte" }
];

// --- DOM Elements ---
const brandsShowcaseContainer = document.getElementById('brandsShowcaseContainer');
const searchInput = document.getElementById('searchInput');
const brandFilter = document.getElementById('brandFilter');
const genderFilter = document.getElementById('genderFilter');
const wishlistFilterBtn = document.getElementById('wishlistFilterBtn');
const clearFiltersBtn = document.getElementById('clearFiltersBtn');
const perfumeCountDisplay = document.getElementById('perfumeCount');
const wishlistCountDisplay = document.getElementById('wishlistCount');
const backToTopBtn = document.getElementById('backToTopBtn');

// --- Wishlist ---
let wishlist = JSON.parse(localStorage.getItem('hotgammeWishlist')) || [];

function updateWishlistStorage() {
    localStorage.setItem('hotgammeWishlist', JSON.stringify(wishlist));
    updateWishlistCount();
}

function toggleWishlist(perfumeId) {
    const index = wishlist.indexOf(perfumeId);
    if (index > -1) {
        wishlist.splice(index, 1);
    } else {
        wishlist.push(perfumeId);
    }
    updateWishlistStorage();
    applyFiltersAndSearch(); // Re-render to update heart icons
}

function updateWishlistCount() {
    wishlistCountDisplay.textContent = wishlist.length;
}


// --- Rendering Perfumes ---
function renderPerfumes(perfumesToRender) {
    brandsShowcaseContainer.innerHTML = ''; // Clear previous list

    if (perfumesToRender.length === 0) {
        brandsShowcaseContainer.innerHTML = '<p class="no-results-message">Aucun parfum ne correspond à votre recherche. Essayez d\'autres filtres !</p>';
        perfumeCountDisplay.textContent = '0 parfums trouvés';
        return;
    }

    const perfumesByBrand = perfumesToRender.reduce((acc, perfume) => {
        (acc[perfume.brand] = acc[perfume.brand] || []).push(perfume);
        return acc;
    }, {});

    // Ensure brands are displayed in alphabetical order
    const sortedBrandNames = Object.keys(perfumesByBrand).sort();

    sortedBrandNames.forEach(brandName => {
        const brandGroup = document.createElement('div');
        brandGroup.className = 'brand-group';

        const brandTitle = document.createElement('h3');
        brandTitle.className = 'brand-group-title';
        brandTitle.textContent = brandName;
        brandGroup.appendChild(brandTitle);

        const perfumeListContainer = document.createElement('div');
        perfumeListContainer.className = 'perfume-list-container';

        perfumesByBrand[brandName].sort((a,b) => a.name.localeCompare(b.name)).forEach(perfume => {
            const perfumeItem = document.createElement('div');
            perfumeItem.className = 'perfume-item';
            perfumeItem.dataset.perfumeId = perfume.id;

            const isWishlisted = wishlist.includes(perfume.id);

            perfumeItem.innerHTML = `
                <div class="perfume-item-info">
                    <span class="name">${perfume.name}</span>
                    <span class="perfume-gender">${perfume.gender}</span>
                </div>
                <div class="perfume-item-actions">
                    <button class="inquire-btn" data-name="${perfume.name}" data-brand="${perfume.brand}" aria-label="Demander le prix pour ${perfume.name}">
                        Demander le prix
                    </button>
                    <button class="wishlist-btn ${isWishlisted ? 'active' : ''}" data-id="${perfume.id}" aria-pressed="${isWishlisted}" aria-label="${isWishlisted ? 'Retirer des favoris' : 'Ajouter aux favoris'}">
                        <span class="heart-icon">${isWishlisted ? '♥' : '♡'}</span>
                    </button>
                </div>
            `;
            perfumeListContainer.appendChild(perfumeItem);
        });
        brandGroup.appendChild(perfumeListContainer);
        brandsShowcaseContainer.appendChild(brandGroup);
    });

    perfumeCountDisplay.textContent = `${perfumesToRender.length} parfum${perfumesToRender.length > 1 ? 's' : ''} trouvé${perfumesToRender.length > 1 ? 's' : ''}`;
    addPerfumeItemEventListeners();
}

function addPerfumeItemEventListeners() {
    document.querySelectorAll('.inquire-btn').forEach(button => {
        button.addEventListener('click', function() {
            const perfumeName = this.dataset.name;
            const perfumeBrand = this.dataset.brand;
            const text = encodeURIComponent(`Bonjour HOTGAMME Parfums, je souhaiterais connaître le prix et la disponibilité pour ${perfumeBrand} - ${perfumeName}. Merci !`);
            window.open(`https://wa.me/212661843495?text=${text}`, '_blank');
        });
    });

    document.querySelectorAll('.wishlist-btn').forEach(button => {
        button.addEventListener('click', function() {
            const perfumeId = this.dataset.id;
            toggleWishlist(perfumeId);
            // The applyFiltersAndSearch will re-render, so direct class/icon manipulation here is
            // mostly for immediate visual feedback if re-render is delayed or not wanted for this specific action.
            // However, since applyFiltersAndSearch is called, it will handle the visual update correctly.
        });
    });
}


// --- Filtering Logic ---
function applyFiltersAndSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedBrand = brandFilter.value;
    const selectedGender = genderFilter.value;
    const showOnlyWishlisted = wishlistFilterBtn.classList.contains('active');

    let filteredPerfumes = perfumesData.filter(perfume => {
        const nameMatch = perfume.name.toLowerCase().includes(searchTerm);
        const brandMatchSearch = perfume.brand.toLowerCase().includes(searchTerm);
        const brandFilterMatch = selectedBrand ? perfume.brand === selectedBrand : true;
        const genderFilterMatch = selectedGender ? perfume.gender === selectedGender : true;
        const wishlistMatch = showOnlyWishlisted ? wishlist.includes(perfume.id) : true;

        return (nameMatch || brandMatchSearch) && brandFilterMatch && genderFilterMatch && wishlistMatch;
    });
    renderPerfumes(filteredPerfumes);
}

// --- Populating Filters ---
function populateBrandFilter() {
    const brands = [...new Set(perfumesData.map(p => p.brand))].sort();
    brands.forEach(brand => {
        const option = document.createElement('option');
        option.value = brand;
        option.textContent = brand;
        brandFilter.appendChild(option);
    });
}

// --- Event Listeners for Filters ---
searchInput.addEventListener('input', applyFiltersAndSearch);
brandFilter.addEventListener('change', applyFiltersAndSearch);
genderFilter.addEventListener('change', applyFiltersAndSearch);

wishlistFilterBtn.addEventListener('click', () => {
    wishlistFilterBtn.classList.toggle('active');
    wishlistFilterBtn.setAttribute('aria-pressed', wishlistFilterBtn.classList.contains('active'));
    const heartIcon = wishlistFilterBtn.querySelector('.heart-icon');
    if (heartIcon) heartIcon.textContent = wishlistFilterBtn.classList.contains('active') ? '♥' : '♡';
    applyFiltersAndSearch();
});

clearFiltersBtn.addEventListener('click', () => {
    searchInput.value = '';
    brandFilter.value = '';
    genderFilter.value = '';
    if (wishlistFilterBtn.classList.contains('active')) {
        wishlistFilterBtn.classList.remove('active');
        wishlistFilterBtn.setAttribute('aria-pressed', 'false');
         const heartIcon = wishlistFilterBtn.querySelector('.heart-icon');
         if (heartIcon) heartIcon.textContent = '♡';
    }
    applyFiltersAndSearch();
});


// --- Back to Top Button ---
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        if (backToTopBtn.style.display !== "block") {
            backToTopBtn.style.display = "block";
            setTimeout(() => backToTopBtn.style.opacity = "1", 10);
        }
    } else {
        if (backToTopBtn.style.opacity === "1") {
            backToTopBtn.style.opacity = "0";
            setTimeout(() => backToTopBtn.style.display = "none", 300);
        }
    }
}
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
});


// --- Initial Setup ---
document.addEventListener('DOMContentLoaded', function() {
    // Nav and Menu interactions
    navSlide();
    closeMenuInteractions();

    // Current Year
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Smooth scroll for internal anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.hash !== "" && !this.classList.contains('whatsapp-fab') && !this.classList.contains('whatsapp-button-large') && !this.closest('.whatsapp-banner')) {
                const nav = document.querySelector('.nav-links');
                const burger = document.querySelector('.burger');
                const isMobileMenuOpen = nav && nav.classList.contains('nav-active') && window.innerWidth <= 768;

                // Only prevent default if not a mobile menu link or if mobile menu is closed
                if (!isMobileMenuOpen || (isMobileMenuOpen && !this.closest('.nav-links'))) {
                     e.preventDefault();
                }

                const targetElement = document.querySelector(this.hash);
                if (targetElement) {
                    // Delay scroll if mobile menu is open and needs to close
                    if (isMobileMenuOpen && this.closest('.nav-links')) {
                        // Menu close is handled by closeMenuInteractions, scroll will happen after.
                        // For smoother experience, let the menu close first, then scroll.
                        // The click on nav link already closes the menu via closeMenuInteractions
                        setTimeout(() => {
                            targetElement.scrollIntoView({ behavior: 'smooth' });
                        }, 300); // Adjust delay to match menu close animation
                    } else {
                        targetElement.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            }
        });
    });

    // Welcome Modal Logic
    const welcomeModal = document.getElementById('welcomeModal');
    const closeButton = welcomeModal ? welcomeModal.querySelector('.close-button') : null;

    function showWelcomeModal() {
        if (welcomeModal) {
            welcomeModal.style.display = 'flex';
            document.body.style.overflow = 'hidden'; // Prevent background scroll
        }
    }
    function hideWelcomeModal() {
        if (welcomeModal) {
            welcomeModal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restore scroll
        }
    }
    if (!localStorage.getItem('hotgammeVisitedBefore')) {
        showWelcomeModal();
        localStorage.setItem('hotgammeVisitedBefore', 'true');
    }
    if (closeButton) {
        closeButton.onclick = hideWelcomeModal;
    }
    window.onclick = function(event) {
        if (event.target == welcomeModal) {
            hideWelcomeModal();
        }
    }
    // --- End Welcome Modal Logic ---

    // --- Initialize Perfume App ---
    populateBrandFilter();
    updateWishlistCount();
    applyFiltersAndSearch(); // Initial render

    console.log("HOTGAMME Parfums - Catalogue complet chargé et prêt à filtrer !");
});


// --- Nav Logic ---
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const body = document.body;

    if (burger && nav) {
        burger.addEventListener('click', () => {
            const isActive = nav.classList.contains('nav-active');
            nav.classList.toggle('nav-active');
            burger.classList.toggle('toggle');

            navLinks.forEach((link, index) => {
                if (nav.classList.contains('nav-active')) {
                     if (link.style.animation) {
                        link.style.animation = '';
                    } else {
                        // Delay slightly to ensure class is applied before animation starts
                        setTimeout(() => {
                            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                        }, 50);
                    }
                } else {
                     link.style.animation = '';
                }
            });

            if (nav.classList.contains('nav-active')) {
                body.style.overflow = 'hidden';
            } else {
                body.style.overflow = 'auto';
            }
        });
    }
};

const closeMenuInteractions = () => {
    const nav = document.querySelector('.nav-links');
    const burger = document.querySelector('.burger');
    const links = document.querySelectorAll('.nav-links a');
    const body = document.body;

    if (nav && burger && links) {
        links.forEach(link => {
            link.addEventListener('click', () => { // No 'e' parameter needed here
                if (nav.classList.contains('nav-active')) {
                    nav.classList.remove('nav-active');
                    burger.classList.remove('toggle');
                    body.style.overflow = 'auto';
                    document.querySelectorAll('.nav-links li').forEach(navLi => navLi.style.animation = '');
                }
            });
        });
    }
};
