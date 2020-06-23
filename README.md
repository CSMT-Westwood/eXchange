# eXchange

[Visit the website](https://csmt-westwood.github.io/eXchange/)

eXchange is a website where you can find textbooks, notes, and tutors.

> Note: This is the frontend repo for eXchange, to see the backend repo, please visit https://github.com/CSMT-Westwood/exchange-backend.


# Table of Contents

- [eXchange](#exchange)
- [Table of Contents](#table-of-contents)
- [Overview](#overview)
  - [Purpose](#purpose)
  - [Technologies and Architecture](#technologies-and-architecture)
    - [Frontend](#frontend)
      - [Tech Stack](#tech-stack)
      - [Architecture (Components)](#architecture-components)
    - [Backend](#backend)
      - [Tech Stack](#tech-stack-1)
      - [Architecture (APIs)](#architecture-apis)
- [Features](#features)
- [Getting Started](#getting-started)
  - [For Devs](#for-devs)
  
# Overview

> For a full motivational and technical overview, [see this](https://docs.google.com/document/d/1eGMUwb3nuUB0jnXX1w5HVIfHoIdbsYTlAEC975UOgPM/edit?usp=sharing)

## Purpose

Study materials are often cost-prohibitive or hard-to-find. Students may resort
to the Facebook marketplace, Craigslist, and other listing platforms, but these
sites are inundated with non-academic items. Moreover, they lack a prominent
record of buyers/sellers/traders' reputation in past transactions.

eXchange was made with students in mind. College students sign up and are free
to post offers or requests of textbooks, notes, or skills (e.g., guitar
lessons). People's contact details are exchanged, and it's up to them to set a
price, bargain, or timeshare resources. Transactions are recorded and tallied.

## Technologies and Architecture

### Frontend

#### Tech Stack

1. React
2. Bootstrap CSS for styling

#### Architecture (Components)

1. Register, Directory, UserInfo, Feeds, Settings
2. Navbar, Container, Dashboard, Modal, etc
3. SearchBar, Card, Form, Dropdown, etc

### Backend

#### Tech Stack

1. Express.JS
2. Cloudinary, MongoDB/Mongoose
3. JWT, bcriptJS for user authentication and encryption

#### Architecture (APIs)

1. /post: actions related to a post on the website
2. /user: actions related to a user
3. /avatar: actions related to user photos
4. /feed: actions related to the aggregation of all posts related to the user

# Features
Users can sign up, login, create posts, search for posts, customize their
profile, view notifications, view the status of posts on a dashboard, and see
posts of interested categories on a feed.

# Getting Started

1. Download the repo

```
$ git clone https://github.com/CSMT-Westwood/eXchange.git
```

2. Get into the correct working directory
```
$ cd eXchange/exchange
```

3. Install necessary dependencies
```
$ npm install
```
4. Launch the web app
```
$ npm start
```

## For Devs

The source code that's deployed is currently in the deployment-test branch. Currently the API URLs are still hardcoded in the source code, and thus it's not merged into master.  
To make modifications:

1. Pull deployment-test branch ``npm pull origin deployment-test``  
2. Make modifications to the code  
3. Install dependencies ``npm install``  
4. Run this to deploy ``npm run deploy``
