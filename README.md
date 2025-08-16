# 🏛️🎨🖼️ Essensial Valens DB

###  Este proyecto contiene ejemplos de **consultas en MongoDB** basadas en diferentes colecciones relacionadas con el **Museo Essensial Valens**, sus exposiciones, usuarios, obras, eventos y reseñas. Cada consulta esta creada con diferentes operadores regulares usados para facilitar busquedas y tratamiento de los datos.

---

# 📂 Modelo de Datos

### 1. Usuarios
```json
 {
        "id": "U001",
        "nombre": "Laura Gómez",
        "correo": "laura.gomez@gmail.com",
        "ciudad": "Bogotá",
        "intereses": [
            "arte moderno",
            "arqueología"
        ],
        "visitas": [
            {
                "fecha": "2025-02-10",
                "exposicion": "El Oro de Colombia"
            },
            {
                "fecha": "2025-03-01",
                "exposicion": "Arte Moderno Latinoamericano"
            }
        ]
    }
```
### 2. Exposiciones
```json
{
    "id": "E001",
    "titulo": "El Oro de Colombia",
    "categoria": "Arte precolombino",
    "fecha_inicio": "2025-02-01",
    "fecha_fin": "2025-05-01",
    "presentador": "Dr. Luis Mejía",
    "descripcion": "Colección de piezas de oro precolombino.",
    "tipo": "permanente"
}
```

### 3. Obras
```json
{
    "id": "O001",
    "titulo": "Máscara de Oro",
    "autor": "Cultura Quimbaya",
    "anio": -500,
    "exposicion_id": "E001",
    "tecnica": "Orfebrería"
}
```

### 4. Eventos
```json
{
    "id": "EV001",
    "nombre": "Conferencia sobre Oro Precolombino",
    "fecha": "2025-02-15",
    "exposicion_id": "E001",
    "presentador": "Dr. Mejía",
    "lugar": "Auditorio Principal",
    "descripcion": "Charla sobre la importancia cultural del oro en Colombia."
}
```

### 5. Reseñas
```json
{
    "id": "R001",
    "usuario_id": "U001",
    "exposicion_id": "E001",
    "comentario": "Increíble colección de oro.",
    "calificacion": 5
}
```

---

# 📘 Consultas MongoDB con Expresiones Regulares

### Este proyecto contiene **25 consultas MongoDB** usando expresiones regulares (`$regex`) y otros operadores, aplicadas a las colecciones de un sistema de museo virtual: `usuarios`, `exposiciones`, `obras`, `eventos`, `reseñas`.

---

## 1.🧭 Buscar usuarios que su nombre empiece por "Laura"
```js
db.usuarios.find({nombre:{$regex:"^Laura", $options:"i"}})
```
🔹 Filtra usuarios cuyo `nombre` comienza con "Laura", sin importar mayúsculas o minúsculas.

---

## 2.🧭 Usuarios que su correo sea gmail
```js
db.usuarios.find({correo:{$regex:"gmail\.com$", $options:"i"}})
```
🔹 Busca usuarios cuyo correo electrónico termina en `@gmail.com`.

---

## 3.🧭 Buscar usuarios interesados en "arte moderno"
```js
db.usuarios.find({intereses:{$regex:"arte moderno", $options:"i"}})
```
🔹 Encuentra usuarios que tengan como interés "arte moderno".

---

## 4.🧭 Filtrar usuarios de ciudades que terminen en "otá"
```js
db.usuarios.find({ciudad: {$regex:"otá$", $options:"i"}})
```
🔹 Retorna usuarios que vivan en ciudades cuyo nombre termina en "otá" (ej: Bogotá).

---

## 5.🧭 Usuarios que su nombre no empieza por G, R o S
```js
db.usuarios.find({ nombre: { $regex: "^[^GRSgrs]" } })
```
🔹 Busca usuarios cuyo `nombre` no comienza por las letras G, R o S.

---

## 6.🧭 Usuarios que su nombre lleve "and" en cualquier parte
```js
db.usuarios.find({nombre:{$regex:"and",$options:"i"}})
```
🔹 Encuentra usuarios con "and" en su nombre (ej: "Andrés", "Fernando").

---

## 7.🧭 Exposiciones que su titulo comience con "Arte"
```js
db.exposiciones.find({titulo:{$regex:"^Arte", $options:"i"}})
```
🔹 Filtra exposiciones que empiecen con la palabra "Arte".

---

## 8.🧭 Usuarios que su correo termine en ".co"
```js
db.usuarios.find({ correo:{$regex: ".co$" }})
```
🔹 Encuentra usuarios con correos que terminan en `.co` (ejemplo: `usuario@mail.co`).

---

## 9.🧭 Exposiciones permanentes
```js
db.exposiciones.find({tipo:{$regex:"Permanente",$options:"i"}})
```
🔹 Muestra las exposiciones que son permanentes.

---

## 10.🧭 Exposiciones en las que su descripcion contenga la palabra "antiguo"
```js
db.exposiciones.find({descripcion:{$regex:"antiguo",$options:"i"}})
```
🔹 Filtra exposiciones cuya descripción incluye la palabra "antiguo".

---

## 11.🧭 Exposiciones con titulos que contienen numeros
```js
db.exposiciones.find({ titulo:{$regex: "\d+" } })
```
🔹 Busca títulos que contienen al menos un número.

---

## 12.🧭 Exposiciones en los que su descripcion tenga exactamente 10 caracteres
```js
db.exposiciones.find({ descripcion:{$regex: "\b\w{10}\b"}})
```
🔹 Filtra descripciones con una palabra de exactamente 10 caracteres.

---

## 13.🧭 Obras en las que sus titulos empiecen por "La"
```js
db.obras.find({titulo:{$regex: "^La ", $options: "i"}})
```
🔹 Busca obras cuyo título comience con "La".

---

## 14.🧭 Obra en la que su autor contiene las vocales combinadas "eiu" o "on"
```js
db.obras.find({autor:{$regex:"[eiu]on"}})
```
🔹 Busca autores cuyo nombre contenga combinaciones como "eon" o "ion".

---

## 15.🧭 Obra que en su tecnica no use "óleo"
```js
db.obras.find({tecnica:{$regex:"^(?!.*Óleo)"}})
```
🔹 Filtra obras cuya técnica no incluye la palabra "Óleo".

---

## 16.🧭 Obras con titulo de al menos 3 palabras
```js
db.obras.find({titulo:{$regex:"(\w+\s+){2,}\w+"}})
```
🔹 Busca obras cuyo título tiene tres o más palabras.

---

## 17.🧭 Evento en el que su nombre termine en "Egipcia"
```js
db.eventos.find({nombre:{$regex:"Egipcia$"}})
```
🔹 Encuentra eventos con nombre que termina en "Egipcia".

---

## 18.🧭 Eventos donde lugar tenga numeros
```js
db.eventos.find({lugar:{$regex:"\d+"}})
```
🔹 Filtra eventos donde el campo `lugar` incluye números (ej: "Sala 101").

---

## 19.🧭 Eventos donde descripcion no contenga "conferencia"
```js
db.eventos.find({descripcion:{$regex:"^(?!.*conferencia)"}})
```
🔹 Busca eventos cuya descripción no contenga la palabra "conferencia".

---

## 20.🧭 Eventos donde su presentador contenga "Ruiz"
```js
db.eventos.find({presentador:{$regex:"Ruiz"}})
```
🔹 Retorna eventos presentados por alguien cuyo nombre contiene "Ruiz".

---

## 21.🧭 Reseñas donde el comentario empiece con "Increíble"
```js
db.reseñas.find({comentario:{$regex:"^Increíble",$options:"i"}})
```
🔹 Filtra reseñas que inician con la palabra "Increíble".

---

## 22.🧭 Reseñas con palabras de más de 10 caracteres
```js
db.reseñas.find({comentario:{$regex:"\b\w{10,}\b"}})
```
🔹 Busca reseñas que tengan palabras largas (más de 10 letras).

---

## 23.🧭 Reseñas con la palabra opcional “muy” antes de “bueno”
```js
db.reseñas.find({comentario:{$regex:"(muy\s)?bueno",$options:"i"}})
```
🔹 Encuentra reseñas con "bueno" y opcionalmente "muy bueno".

---

## 24.🧭 Buscar reseñas donde el comentario contenga tanto "Arte" como "digital"
```js
db.reseñas.find({comentario:{$all:["Arte","digital"]}})
```
🔹 Filtra reseñas que mencionan tanto "Arte" como "digital".

---

## 25.🧭 Buscar reseñas con calificación de 5
```js
db.reseñas.find({calificacion:{$regex:"^5.0$"}})
```
🔹 Busca reseñas que tienen calificación exacta de `5.0`.

---

### 📌 Estas consultas permiten practicar el uso de expresiones regulares y filtros avanzados en MongoDB.

---

# 🌐Creación de la Base de Datos en MongoDB

### Para crear la base de datos en MongoDB e importar los archivos `.json`, se realiza lo siguiente:

### 1. Crear la base de datos y seleccionar la colección
En la terminal de MongoDB se ejecuta:

```bash
use essential_Valens_db
```

Esto creará o seleccionará la base de datos llamada **essential_Valens_db**.

### 2. Importar los archivos `.json`
Se usa el comando `mongoimport`. Y debemos aseguranos de tener los archivos `.json` con los datos preparados.

# ✅ Ejemplo de importación para cada colección:

```bash
# Importar usuarios
mongoimport --db essential_Valens_db --collection usuarios --file usuarios.json --jsonArray

# Importar exposiciones
mongoimport --db essential_Valens_db --collection exposiciones --file exposiciones.json --jsonArray

# Importar obras
mongoimport --db essential_Valens_db --collection obras --file obras.json --jsonArray

# Importar eventos
mongoimport --db essential_Valens_db --collection eventos --file eventos.json --jsonArray

# Importar reseñas
mongoimport --db essential_Valens_db --collection reseñas --file reseñas.json --jsonArray
```

# ⭐. Archivos correspondientes a cada colección

- **usuarios.json** → Colección `usuarios`
- **exposiciones.json** → Colección `exposiciones`
- **obras.json** → Colección `obras`
- **eventos.json** → Colección `eventos`
- **reseñas.json** → Colección `reseñas`

---

## 🤝 Creador

- **Valentina Delgado**
---

## 📜 Contacto GitHub
- https://github.com/ValentinaDelgadoRincon