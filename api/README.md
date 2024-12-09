# API BACKEND WITH NODEJS
# USED TYPEORM

Used Postgresql and Mysql for db
In order to use postgresql, run docker compose

# SYNC DB WITH APP
```
  yarn typeorm schema:sync -d src/data-source.ts
```

# Copy .env.example and create a .env

```
  cp .env.example .env
```

# Run app with
``` 
  yarn dev 
```