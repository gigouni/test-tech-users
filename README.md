
# Test API Users

Ce test consiste à réaliser une API graphql permettant de créer/modifier/supprimer des utilisateurs.

Nous prendrons en compte dans notre debrief du test:
- La lisibilité, l'atomicité et la robustesse du code
- Le soin apporté aux tests
- La clarté du Readme
- Les bonnes pratiques de sécurité

Le rendu du test est demandé sous la forme d'un fork privé de ce dépot dans lequel vous pourrez inviter @maximelebastard, @cchevallscoppe et @Webini. Le test est censé prendre entre 2 et 4 heures. Si vous n'avez pas pu terminer certaines choses ou que vous avez eu des idées que vous n'avez pas eu le temps de mettre en place - n'hésitez surtout pas à nous le préciser dans votre README.md

## Partie API

Avec les technologies et librairies de votre choix, réaliser en NodeJS et Typescript une API GraphQL permettant de:

- Créer un User (nom, prénom, email, mot de passe)
- Modifier un User
- Supprimer un user

Pour stocker les données, on utilisera un serveur MongoDB Dockerisé.

Nous vous demandons de tester votre code au maximum, lorsque les tests sont pertinents.

## Partie login

En utilisant la librairie de votre choix, protégez votre nouvelle API GraphQL par un système de login. Pour accéder à votre API, il faudra ainsi s'identifier en tant que l'un des users.

Vous pouvez utiliser les outils et le protocole de votre choix (Basic, OAuth, JWT...). La seule contrainte est de devoir s'authentifier avec un email et un mot de passe valide pour pouvoir effectuer des requêtes sur l'API.
