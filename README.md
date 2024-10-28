# DEEDS
Deeds is a social conscience application that allows users query important context about strangers to understand their personality without jumping through hoops, we do the necessary background checks for you, so you can safely meet new people and build lasting relationshsips.

## How it works
It works by aggregating data from multiple sources including crowd sourcing, news, Wikipedia, LinkedIn, socials and any other available platforms, consolidating the data into deeds, generating provenance and allowing people to vote on how true or wrong the deed created is.

## Setup Instructions
1. Clone the repo
2. Run `npm install` to install the dependencies
3. Run `npm run dev` to start the development server

## Usage guidelines


## Architectural Overview
This project uses Firebase as a backend service, with Firestore as the database, Cloud Functions for the backend logic, Cloud Storage for storing the static files and Cloud Run for hosting the web app.

The infrastructure is deployed using Github Actions, which enables automatic deployments on merge to the main branch, firebase auth is used for authenticating users and also authorizing access to features in the web app, application logic is silo'd into different cloud functions which are triggered based on events in the app logic and when data is updated in firestore database and Cloud storage.
