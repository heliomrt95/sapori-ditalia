# Sapori d'Italia — Site vitrine

Site statique de l'épicerie fine italienne Sapori d'Italia, située à Biscarrosse-Plage (40600).

Déployé sur GitHub Pages : **https://heliomrt95.github.io/sapori-ditalia/**

---

## Structure des fichiers

```
sapori-ditalia/
├── index.html            # Page d'accueil
├── notre-histoire.html   # Histoire & valeurs (famille Saluzzi, Basilicate)
├── gastronomie.html      # Catalogue produits (pâtes, fromages, charcuterie…)
├── spiritueux.html       # Vins, bières, liqueurs et apéritifs
├── 404.html              # Page d'erreur personnalisée
├── style.css             # Design system global (variables, composants)
├── nav.js                # Header + footer injectés dynamiquement
├── _template.html        # Template vide pour créer de nouvelles pages
├── assets/
│   └── logo2.png         # Logo Sapori d'Italia
└── menu/                 # Sous-projet indépendant (carte restaurant)
    └── maquette/         # Application React (Vite) — développement séparé
```

---

## Pages

| Fichier | URL | Contenu |
|---|---|---|
| `index.html` | `/` | Hero, intro, spécialités, catégories, contact |
| `notre-histoire.html` | `/notre-histoire.html` | Récit familial, huile d'olive, fromage, café, valeurs, localisation |
| `gastronomie.html` | `/gastronomie.html` | 7 catégories avec navigation sticky : Pâtes, Pizzas, Huiles, Fromages, Charcuterie, Sauces, Caffè |
| `spiritueux.html` | `/spiritueux.html` | Vins tranquilles, Prosecco, Liqueurs, Bière, Apéritifs |

---

## Architecture technique

### Navigation partagée (`nav.js`)
Le header et le footer sont injectés dynamiquement par `nav.js` via `outerHTML`. Chaque page doit contenir :

```html
<div id="header"></div>   <!-- placeholder header -->
<!-- contenu -->
<div id="footer"></div>   <!-- placeholder footer -->
<script src="nav.js"></script>
```

### Design system (`style.css`)
Variables CSS dans `:root` :
- `--color-primary: #D4A574` (or chaud)
- `--color-cream: #FFF9F0`
- `--font-cursive: 'Dancing Script'`
- `--font-serif: 'Arvo'`
- `--font-sans: 'Montserrat'`
- `--header-height` : 4rem (mobile) → 4.5rem (tablette) → 5rem (desktop)

### Animations
Les éléments avec la classe `.reveal` s'animent en `fadeInUp` au scroll via `IntersectionObserver`. Les délais `.reveal-d1` à `.reveal-d4` créent un effet cascade.

---

## Modifier le contenu

### Changer les informations de contact
Éditer `nav.js` — les coordonnées sont dans `buildFooter()` :
- Adresse, téléphone, e-mail
- Lien WhatsApp (`WA_URL`)

### Ajouter un produit
Dans `gastronomie.html`, copier un bloc `<article class="prod-card">` existant et modifier le contenu. Les catégories disponibles sont identifiées par les `id` de section : `pates`, `pizzas`, `huiles`, `fromages`, `charcuterie`, `sauces`, `caffe`.

### Créer une nouvelle page
Partir de `_template.html`, ajouter le contenu dans `<main>`, puis ajouter le lien dans le tableau `NAV_ITEMS` de `nav.js`.

### Modifier les horaires / saison
Les horaires ne sont pas encore présents sur le site — les ajouter dans `index.html` (section contact) ou dans le footer de `nav.js`.

---

## Sous-projet `menu/`

Le dossier `menu/` est un projet indépendant contenant la carte restaurant interactive (application React/Vite). Il possède son propre dépôt git et ne doit pas être modifié depuis ce projet.

---

## Déploiement

Le site est déployé automatiquement sur GitHub Pages à chaque push sur `main` via `.github/workflows/deploy.yml`.
