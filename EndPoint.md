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
- /maintenance
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


# /technicien

| Endpoint | Paramètres | Description |
|---|---|---|
| GET `/GetAll` | / | Returns all "technicien" |
| GET `/GetById/[Id]` | / | Returns the technicien according to his `Id` |
| GET `/Search` | ?q - string | Returns a list of technicien according to the search therms |
| POST `/Create` | {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"firstName": string<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"surName": string<br/>} | Creates a technicien (`Id` is generated automaticaly) |
| POST `/Update/[Id]` | {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"firstName": string<br/>} | Updates a technicien according to `Id` |
| GET `/Delete/[Id]` | / | Deletes a technicien according to `Id`|


# /maintenance

| Endpoint | Paramètres | Description |
|---|---|---|
| GET `/GetAll` | / | Returns all "maintenance" |
| GET `/GetById/[Id]` | / | Returns the maintenance according to his `Id` |
| GET `/Filtered` | ?technicienID - int<br/>?planeRegistration - string<br/>?start - datetime<br/>?end - datetime| Returns a list of maintenace according to the filters |
| POST `/Create` | {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"technicienID": int<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"planeRegistration": string<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"start": string <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"end": string<br/>} | Creates a maintenance (`Id` is generated automaticaly) |
| POST `/Update/[Id]` | {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"technicienID": int<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"planeRegistration": string<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"start": string <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"end": string<br/>} | Updates a maintenance according to `Id` |
| GET `/Delete/[Id]` | / | Deletes a maintenance according to `Id`|

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