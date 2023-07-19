# Hack2skill_Assignment

<p align = "center">
<img src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" alt="js" width="50" height="50"/>
<img src="https://raw.githubusercontent.com/PrinceCorwin/Useful-tech-icons/main/images/nodejs.png" alt="nodejs" width="50" height="50"/>
<img src="https://res.cloudinary.com/kc-cloud/images/f_auto,q_auto/v1651772163/expressjslogo/expressjslogo.webp?_i=AA" alt="express" width="50" height="50"/>
 <img src="https://raw.githubusercontent.com/PrinceCorwin/Useful-tech-icons/main/images/mongodb-leaf.png" alt="mongo" width="50" height="50"/> 
<img src="https://user-images.githubusercontent.com/25181517/121401671-49102800-c959-11eb-9f6f-74d49a5e1774.png" alt="npm" width="50" height="50"/>
  
</p>


**Backend:** Node, Express, MongoDB Atlas

**Frontend:** HTML, CSS ,Javascript


## Deployment

**Server side:** Render cloud [link](https://h2s-assignment.onrender.com/api/retrive_data)

**Client side:** Netlify [link](https://h2skillassignment.netlify.app/)

## Features 
 - Fetching data from two Collections


###  Run Locally Clone this Project

```
https://github.com/nikhiljangra0954/Hack2skill_Assignment.git
```
### Runs the project in the development mode

[http://localhost:8088](http://localhost:8088)


**NPM Package**
```
 {
     "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "express": "^4.18.2",
    "mongoose": "^7.3.4",
    "nodemon": "^3.0.1"
  }
```

**Schema**
```
{
  full_name: String,
  email: String,
  team_name: String,
},
{
  full_name: String,
  email: String,
  number: Number,
  city: String,
  url: String,
}
```

  #### Run Locally
```javascript
  step 1- clone the Repo 
  step 2- Install all dependencies npm install
  step 3- npm run server
```


## API Endpoints
```javascript
GET http://localhost:8088/api/retrive_data
```


| `Authors` |
| :-------: | 

[Nikhil](https://github.com/nikhiljangra0954)
