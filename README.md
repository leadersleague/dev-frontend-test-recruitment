# Front-end Developer Coding Test ( 🇫🇷 )

> **🚨 Important : Lire attentivement l'ensemble de ce document et à suivre les directives qu'il contient.**



---



## 📌 Table des matières


- [Front-end Developer Coding Test](#front-end-developer-coding-test)
    + [🗃 Introduction](#-introduction)
    + [💻 Exigence](#-exigence)
    + [🥑 Mise en route](#-mise-en-route)
    + [🧐 Date limite du projet](#-date-limite-du-projet)
    + [💬 Q&R](#-qr)
    + [🔗 Links](#-links)
    + [❤️ Ce qui nous tient à cœur](#-ce-qui-nous-tient--cur)



---



## 🗃 Introduction

**Le but du test est d'utiliser vos compétences afin d'initier un projet Front-End et d'intégrer en responsive les mockups ci-dessous.**


![Screen Starter][screen]


> Voici les fichiers [Source Figma][figma-bo]



---



## 💻 Exigence

**Réalisez une mini-application qui liste des musiques en fonction des filtres selectionnés.**

Vous devrez tirer parti d'une API ouverte pour les données des musiques afin de compléter les détails et les fonctionnalités décrits ci-dessous.


- Framework de votre choix (React Js, Vue Js, ...)
- Gestion des états (optionel)
- Es6 Module (Utilisation Async / Await)
- CSS modulaire
- Responsive design
- Prettier & Linting
- Tests unitaires et e2e

> _Impressionnez-nous !_




---




## 🥑 Mise en route

### Création de votre repository

> **🚨 Important: Forkez ce dépôt en privé et envoyez-nous une invitation ([@leadersleague][leadersleague]) pour que nous puissions voir l'avancement du projet.**


### Démarrage html / css

Pour vous aider dans votre initialisation, nous vous avons préparer quelques assets:

- La police utilisée dans le design est Roboto
- Les [variables SCSS](/assets/scss) (Non exaustif)
- [Quelques icones](/assets/svg) au format SVG () (Non exaustif, voir #Links)


### Démarrage API

Pour utilisez l'[Audius api][audius-api], vous pouvez vous rendre directement sur la [Recherche de musiques][audius-search] et y faire votre call api.

Voici un exemple en javascript:

```javascript
    fetch('https://discovery-b.mainnet.audius.radar.tech/v1/tracks/search?query=baauer b2b&app_name=EXAMPLEAPP',
    {
      method: 'GET',
      headers: { 'Accept':'application/json' }
    })
    .then(function(res) { return res.json();})
    .then(function(body) { console.log(body);
    });
```


---




## 🧐 Date limite du projet

Prenez votre temps mais essayez de le livrer dans un délai de 1 semaine. 
Si nous ne voyons aucune activité dans votre dépôt de test après 1 semaine (au moins les premiers commits), nous retirerons automatiquement votre candidature.




---




## 💬 Q&R

> Où dois-je renvoyer le résultat lorsque j'ai terminé ?

Forkez ce dépôt et envoyez-nous le lien lorsque vous pensez avoir terminé.

> Et si j'ai une question ?

Envoyez un mail à web@leadersleague.com



---




## 🔗 Links

- Librairie d'icones utilisées dans le figma: [Feather icons][feathericons]
- Api public Audius: [Audius api][audius-api]
- soon...




---



## ❤️ Ce qui nous tient à cœur

Utilisez toutes les bibliothèques que vous utiliseriez normalement s'il s'agissait d'une véritable application de production.
Soyez prêt à justifier ces choix.

> Remarque : nous nous intéressons davantage à la façon dont vous abordez le problème qu'au résultat final.

**La propreté et la conception du code sont plus importantes que l'utilisation de la "bonne" bibliothèque.**

Voici ce que vous devez vous efforcer de faire :

- Une bonne utilisation des meilleures pratiques actuelles en matière de TypeScript, HTML, CSS et de performances.
- Une approche de test solide
- Code extensible
- Support mobile et accessibilité




---




## 🍭 Credits

Originally written & currently maintained by **Leaders League** © 2021

> _</💻> with ❤ by [@Sp0ne][vinces]. Have Fun 🍻_



---



[vinces]: https://github.com/Sp0ne
[leadersleague]: https://github.com/leadersleague
[screen]: screenshot/screen-login.png
[figma-bo]: https://www.figma.com/file/UfSE9T3J8mE1evGwJOeubT/LL---Test---Frontend?node-id=0%3A1
[figma-icon]: https://www.figma.com/community/plugin/744047966581015514/Feather-Icons
[feathericons]: https://feathericons.com/
[audius-api]: https://audiusproject.github.io/api-docs/#audius-api-docs
[audius-search]: https://audiusproject.github.io/api-docs/#search-tracks
