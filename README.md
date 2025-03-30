# Monkeypedia 🐒

Monkeypedia est une application React qui permet de découvrir différentes espèces de singes. Elle récupère des données d'une API publique, filtre les animaux de l'ordre des primates et affiche leurs informations comme le nom, l'habitat et une image si disponible.

## Fonctionnalités
- Récupérer une liste de singes appartenant à l'ordre des primates.
- Afficher des informations telles que le nom, l'habitat, et une image si disponible.
- Charger dynamiquement les données depuis une API externe.

## Prérequis
Avant de commencer, assurez-vous d'avoir les éléments suivants installés sur votre machine :
- [Node.js](https://nodejs.org/) (version 16 ou supérieure)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

## Installation

1. Clonez ce repository :
    ```bash
    git clone https://github.com/armanceau/monkeypedia.git
    cd my-app
    ```

2. Installez les dépendances :
    ```bash
    npm i
    ```

3. Créez un fichier `.env` à la racine du projet avec votre clé API :
    ```
    VITE_API_KEY=your_api_key_here
    ```

4. Démarrez l'application en mode développement :
    ```bash
    npm run dev
    ```

5. Accédez à l'application via `http://localhost:5173/`.


## API Utilisée
L'application utilise l'API [API Ninjas](https://api-ninjas.com/) pour récupérer des informations sur les animaux. Assurez-vous d'obtenir une clé API gratuite sur leur site.
