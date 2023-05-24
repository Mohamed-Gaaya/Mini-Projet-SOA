# Mini-Projet-SOA
Ce projet est réalisé à la base des microservices suivants: "GraphQl" et "REST", il contient bien evidément deux parties, "client"
et "flight", chaaue section est réalisé par différents microservices, "client" avec "GraphQl", "flight" avec "REST", mais il communiquent
avec eux-memes, les interfaces sont connectées à travers "REACT" qui est le FRONT-END utilisé, tout au long avec Express et NodeJs.
Pour la base de données j'ai fait le choix dedeux bases différentes; "SQL" et "NOSQL";
"SQL" est constitué de "MongoDB Cluster" est une base de données relationnelles que j'ai choississe pour le CRUD des clients et leurs 
projets, les clients et les projets sont liés, chaque client a son propre projet, la création et la mutation des clients et projets sont 
faites avec GraphQl.
"NOSQL" est constituée de "DataStax Astra" est une entreprise qui propose une plateforme complète de gestion des données basée sur Apache
Cassandra, une base de données NoSQLhautement évolutive et distribuée. J'ai donc utilisé le swagger API pour créer les "flights", et les
fetch dans mon application avec REST API.

GraphQL:
Avantages :
------------
Souplesse des requêtes : GraphQL permet aux clients de spécifier les données exactes dont ils ont besoin, évitant ainsi le problème de 
surcharge ou de sous-charge de données typique des API REST.
Réduction des allers-retours : GraphQL permet de récupérer plusieurs données en une seule requête, réduisant ainsi les allers-retours entre le client et le serveur.
Documentation automatique : GraphQL génère automatiquement une documentation complète de l'API, ce qui facilite la compréhension et
l'utilisation pour les développeurs.

Inconvénients :
------------
Complexité du côté serveur : La mise en place d'un serveur GraphQL peut être plus complexe que REST en raison de la nécessité de mettre en
place un moteur d'exécution de requêtes flexible.
Surcharge du serveur : Si mal utilisé, GraphQL peut entraîner une surcharge du serveur en raison de la possibilité de demander des données
excessives ou des requêtes complexes.

REST (Representational State Transfer) :
Avantages :
------------

Simplicité et facilité d'utilisation : REST est basé sur des principes simples et utilise les méthodes HTTP standard
(GET, POST, PUT, DELETE) pour l'interaction entre les services.
Flexibilité : REST permet une conception flexible des API, ce qui facilite l'intégration avec différentes plateformes et clients.
Découplage : Les services REST sont indépendants les uns des autres, ce qui favorise le découplage et la modularité.

Inconvénients :
------------

Surcharge du réseau : REST utilise souvent le format JSON pour les échanges de données, ce qui peut entraîner une surcharge du réseau
en cas de transfert de grandes quantités de données.
Manque de flexibilité pour les requêtes complexes : REST peut devenir limité lorsqu'il s'agit de traiter des requêtes complexes 
nécessitant des jointures ou des filtres avancés.

Pour l'interface flight run:
------------
```
$cd flight
npm run start:frontend
```
Ouvrir un autre terminal:
------------
```
$cd flight
npm run start:backend
```
Pour l'interface clinet et projet: 
------------
```
$cd client
$npm start
```
Pour le Backend Mongoose: 
------------
```
$npm run dev
```
