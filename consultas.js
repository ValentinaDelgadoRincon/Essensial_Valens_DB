// 1. Buscar usuarios que su nombre empiece por "Laura"
db.usuarios.find({nombre:{$regex:"^Laura", $options:"i"}})


// 2. Usuarios que su correo sea gmail
db.usuarios.find({correo:{$regex:"gmail\\.com$", $options:"i"}})


// 3. Buscar usuarios interesados en "arte moderno"
db.usuarios.find({intereses:{$regex:"arte moderno", $options:"i"}})


// 4. Filtrar usuarios de ciudades que terminen en "otá"
db.usuarios.find({ciudad: {$regex:"otá$", $options:"i"}})


// 5. Usuarios que su nombre no empieza por G,R, o S
db.usuarios.find({ nombre: { $regex: "^[^GRSgrs]" } })


// 6. Usuarios que su nombre lleve "and" en cualquier parte
db.usuarios.find({nombre:{$regex:"and",$options:"i"}})


// 7. Exposiciones que su titulo comience con "Arte"
db.exposiciones.find({titulo:{$regex:"^Arte", $options:"i"}})


// 8. Usuarios que su correo termine en ".co"
db.usuarios.find({ correo:{$regex: ".co$" }})


// 9. Exposiciones permanentes
db.exposiciones.find({tipo:{$regex:"Permanente",$options:"i"}})


// 10. Exposiiciones en las que su descripcion contenga la palabra "antiguo"
db.exposiciones.find({descripcion:{$regex:"antiguo",$options:"i"}})


// 11. Exposiciones con titulos que contienen numeros
db.exposiciones.find({ titulo:{$regex: "\\d+" } })


// 12. Exposiciones en los que su descripcion tenga exactamente 10 caracteres
db.exposiciones.find({ descripcion:{$regex: "\\b\\w{10}\\b"}})


// 13. Obras en las que sus titulos empiecen por "La"
db.obras.find({titulo:{$regex: "^La ", $options: "i"}})


// 14. Obra en la que su autor contiene las vocales combinadas "eiu" o "on"
db.obras.find({autor:{$regex:"[eiu]on"}})


// 15. Obra que en su tecnica no use "óleo"
db.obras.find({tecnica:{$regex:"^(?!.*Óleo)"}})


// 16. Obras con titulo de al menos 3 palabras
db.obras.find({titulo:{$regex:"(\\w+\\s+){2,}\\w+"}})


// 17. Evento en el que su nombre termine en "Egipcia"
db.eventos.find({nombre:{$regex:"Egipcia$"}})


// 18. Eventos donde lugar tenga numeros
db.eventos.find({lugar:{$regex:"\\d+"}})


// 19. Eventos donde descripcion no contenga "conferencia"
db.eventos.find({descripcion:{$regex:"^(?!.*conferencia)"}})


// 20. Eventos donde su presentador contenga "Ruiz"
db.eventos.find({presentador:{$regex:"Ruiz"}})


// 21. Reseñas donde el comentario empiece con "Increíble"
db.reseñas.find({comentario:{$regex:"^Increíble",$options:"i"}})


 // 22. Reseñas con palabras de mas de 10 caracteres
db.reseñas.find({comentario:{$regex:"\\b\\w{10,}\\b"}})


 // 23. Reseñas con la palabra opcional “muy” antes de “bueno”
db.reseñas.find({comentario:{$regex:"(muy\\s)?bueno",$options:"i"}})


// 24. Buscar reseñas donde el comentario contenga tanto "Arte" como "digital"
db.reseñas.find({comentario:{$all:["Arte","digital"]}})


// 25. Buscar reseñas con calificación de 5
db.reseñas.find({calificacion:{$regex:"^5.0$"}})

