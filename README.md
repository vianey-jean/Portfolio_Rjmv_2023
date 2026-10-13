# Portfolio — Jean RABEMANALINA (v2)

Refonte complète du portfolio : **React 19 · Vite 8 · Tailwind CSS 4 · Motion · React Router 7 · Lenis**.

## Démarrage

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # build de production dans /dist
npm run preview    # prévisualiser le build
```

Node.js ≥ 20.19 (ou ≥ 22.12) requis.

## Pages

| Route | Contenu |
|---|---|
| `/` | Accueil : hero animé, technologies, chiffres, services, projets à la une, méthode, FAQ |
| `/a-propos` | Présentation, CV, valeurs, boîte à outils, formation |
| `/experience` | Timeline animée, expertises, stack technique |
| `/portfolio` | 14 projets : filtres par catégorie, recherche, fenêtre de détail |
| `/contact` | Formulaire de contact + coordonnées + réseaux sociaux |

## Formulaire de contact → e-mail

Au clic sur **Envoyer**, le message est transmis par e-mail à **vianey.jean1@gmail.com**
via [FormSubmit](https://formsubmit.co) (service gratuit, sans serveur à maintenir).

> ⚠️ **Activation (une seule fois)** : lors du tout premier envoi, FormSubmit envoie un e-mail
> de confirmation à vianey.jean1@gmail.com. Cliquez sur le lien d'activation dans cet e-mail
> (pensez à vérifier les spams) : tous les messages suivants arriveront ensuite directement.

L'adresse destinataire se change dans `.env` (copier `.env.example`) via `VITE_CONTACT_EMAIL`,
ou dans `src/data/index.jsx` (`profile.email`).

## Personnaliser le contenu

Tout le contenu est centralisé dans **`src/data/index.jsx`** : profil, réseaux sociaux,
compétences, parcours, projets, FAQ. Les liens Instagram, X, YouTube, Telegram, Discord
et TikTok pointent vers la page d'accueil de chaque réseau : remplacez-les par vos vrais profils.

Le CV se trouve dans `public/CV_Jean_Rabemanalina.pdf`.

## Fonctionnalités

- Mode clair / sombre (interrupteur dans la navbar, animation circulaire, mémorisé, respecte le thème système)
- Navbar flottante « glass » qui se masque au scroll + menu mobile plein écran
- Footer moderne : CTA magnétique, bandeau de technologies, 11 icônes de réseaux sociaux
- Animations : preloader, barre de progression, défilement fluide (Lenis), transitions de pages,
  révélations au scroll, titres mot par mot, machine à écrire, effet magnétique, cartes 3D avec halo,
  compteurs, marquees, timeline liée au scroll, parallax, aurores animées, halo + anneau de curseur
- Respect de `prefers-reduced-motion`, accessibilité clavier, balises ARIA
- Images converties en WebP (≈ 90 % plus légères)

## Déploiement

Netlify (`public/_redirects`) et Vercel (`vercel.json`) sont déjà configurés pour le routage SPA.
