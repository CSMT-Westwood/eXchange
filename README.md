# eXchange
[Visit the website](https://csmt-westwood.github.io/eXchange/)

eXchange is a textbook, notes, and tutoring-sharing platform.  

> Note: This is the front-end repo for eXchange, to see the backend repo, pls visit https://github.com/CSMT-Westwood/exchange-backend.

## Getting Started

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

### For Devs  
The source code that's deployed is currently in the deployment-test branch. Currently the API URLs are still hardcoded in the source code, and thus it's not merged into master.  
To make modifications:
1. Pull deployment-test branch ``npm pull origin deployment-test``  
2. Make modifications to the code  
3. Install dependencies ``npm install``  
4. Run this to deploy ``npm run deploy``
