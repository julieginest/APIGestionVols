- /plane
  - /GetAll
  - /GetByRegistration
  - /Filtered
  - /Create
  - /Update
  - /Delete
- /technicien   
  - /GetAll
  - /GetById
  - /Search
  - /Create
  - /Update
  - /Delete
- /flight
  - /GetAll
  - /GetById
  - /Filtered
  - /Create
  - /Update
  - /Delete


# /plane

| Endpoint | Paramètres | Description |
|---|---|---|
| GET `/GetAll` | / | Returns all "plane" |
| GET `/GetByRegistration/[Registration]` | / | Returns the plane with the according to his `Registration` |
| GET `/Filtered` | ?flightTime - int <br/> ?brand - string <br/> ?model - string | Returns a list of planes according to the filters |
| POST `/Create` | {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Registration": string<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"brand": string<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"model": string <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"flightTime": int<br/>} | Creates a plane |
| POST `/Update/[Registration]` | {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"brand": string<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"model": string <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"flightTime": int<br/>} | Updates a plane according to `Registration`|
| GET `/Delete/[Registration]` | / | Deletes a plane according to `Registration`|


# /pilot

| Endpoint | Paramètres | Description |
|---|---|---|
| GET `/GetAll` | / | Returns all "pilots" |
| GET `/GetById/[Id]` | / | Returns the plane with the according to his `Id` |
| GET `/Search` | ?q - string | Returns a list of planes according to the search therms |
| POST `/Create` | {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"firstName": string<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"surName": string<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"unregisteredFlightTime": int <br/>} | Creates a pilot (`Id` is generated automaticaly) |
| POST `/Update/[Id]` | {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"firstName": string<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"surName": string<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"unregisteredFlightTime": int <br/>} | Updates a pilot according to `Id` |
| GET `/Delete/[Id]` | / | Deletes a pilot according to `Id`|


# /flight

| Endpoint | Paramètres | Description |
|---|---|---|
| GET `/GetAll` | / | Returns all "flights" |
| GET `/GetById/[Id]` | / | Returns the flight according to his `Id` |
| GET `/Filtered` | ?pilotID - int<br/>?planeRegistration - string<br/>?OACIStart - string<br/>?OACIStop - string<br/>?takeoff - datetime<br/>?landing - datetime<br/>?minFlightTime - int<br/>?maxFlightTime - int | Returns a list of planes according to the filters |
| POST `/Create` | {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"pilotID": int<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"planeRegistration": string<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"OACIStart": string <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"OACIStop": string <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"takeoff": datetime <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"landing": datetime <br/>} | Creates a flight (`Id` is generated automaticaly) |
| POST `/Update/[Id]` | {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"pilotID": int<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"planeRegistration": string<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"OACIStart": string <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"OACIStop": string <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"takeoff": datetime <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"landing": datetime <br/>} | Updates a flight according to `Id` |
| GET `/Delete/[Id]` | / | Deletes a flight according to `Id`|

# Answers

## GET
### Success

``` json
{
    "header": {
        "status": 200
},
"body":
    [
        {"key" : "datas"},
        {"key" : "datas"},
    ]
}
```

### Error

``` json
{
    "header": {
        "status": 400
},
"body":
    {
        "code": 123,
        "message": "The explanation of this errors"
    }
}
```
## POST
### Success

``` json
{
    "header": {
        "status": 200
},
"body":
        {"key" : "data"}, //The record created or modified
}
```

### Error

``` json
{
    "header": {
        "status": 400
},
"body":
    {
        "code": 123,
        "message": "The explanation of this errors"
    }
}
```