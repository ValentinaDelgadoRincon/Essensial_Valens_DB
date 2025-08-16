db.insertMany([
    {
        "id": "U001",
        "nombre": "Laura Gómez",
        "correo": "laura.gomez@mail.com",
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
    },
    {
        "id": "U002",
        "nombre": "Carlos Pérez",
        "correo": "carlos.perez@mail.com",
        "ciudad": "Medellín",
        "intereses": [
            "pintura clásica",
            "fotografía"
        ],
        "visitas": [
            {
                "fecha": "2025-01-15",
                "exposicion": "Maestros del Renacimiento"
            }
        ]
    },
    {
        "id": "U003",
        "nombre": "Ana Torres",
        "correo": "ana.torres@mail.com",
        "ciudad": "Cali",
        "intereses": [
            "arte contemporáneo",
            "escultura"
        ],
        "visitas": [
            {
                "fecha": "2025-02-20",
                "exposicion": "Esculturas del Siglo XX"
            }
        ]
    },
    {
        "id": "U004",
        "nombre": "Javier Martínez",
        "correo": "javier.mtz@mail.com",
        "ciudad": "Bogotá",
        "intereses": [
            "arqueología",
            "historia antigua"
        ],
        "visitas": [
            {
                "fecha": "2025-01-05",
                "exposicion": "Momias de Egipto"
            }
        ]
    },
    {
        "id": "U005",
        "nombre": "María Rodríguez",
        "correo": "maria.rod@mail.com",
        "ciudad": "Cartagena",
        "intereses": [
            "arte precolombino",
            "fotografía"
        ],
        "visitas": [
            {
                "fecha": "2025-03-10",
                "exposicion": "El Oro de Colombia"
            }
        ]
    },
    {
        "id": "U006",
        "nombre": "Daniel Silva",
        "correo": "daniel.silva@mail.com",
        "ciudad": "Bogotá",
        "intereses": [
            "arte digital",
            "cine"
        ],
        "visitas": [
            {
                "fecha": "2025-04-01",
                "exposicion": "Cine y Arte Digital"
            }
        ]
    },
    {
        "id": "U007",
        "nombre": "Paula Herrera",
        "correo": "paula.herrera@mail.com",
        "ciudad": "Cali",
        "intereses": [
            "pintura clásica",
            "arte religioso"
        ],
        "visitas": [
            {
                "fecha": "2025-02-28",
                "exposicion": "Arte Colonial en América"
            }
        ]
    },
    {
        "id": "U008",
        "nombre": "Andrés López",
        "correo": "andres.lopez@mail.com",
        "ciudad": "Medellín",
        "intereses": [
            "música",
            "arte moderno"
        ],
        "visitas": [
            {
                "fecha": "2025-03-05",
                "exposicion": "Picasso y la Música"
            }
        ]
    },
    {
        "id": "U009",
        "nombre": "Sofía Ramírez",
        "correo": "sofia.ramirez@mail.com",
        "ciudad": "Bogotá",
        "intereses": [
            "escultura",
            "fotografía"
        ],
        "visitas": [
            {
                "fecha": "2025-03-15",
                "exposicion": "Fotografía Urbana"
            }
        ]
    },
    {
        "id": "U010",
        "nombre": "Felipe Castro",
        "correo": "felipe.castro@mail.com",
        "ciudad": "Barranquilla",
        "intereses": [
            "arte contemporáneo",
            "arte digital"
        ],
        "visitas": [
            {
                "fecha": "2025-02-18",
                "exposicion": "Arte y Tecnología"
            }
        ]
    }
])

db.insertMany([
    {
        "id": "EV001",
        "nombre": "Conferencia sobre Oro Precolombino",
        "fecha": "2025-02-15",
        "exposicion_id": "E001",
        "presentador": "Dr. Mejía"
    },
    {
        "id": "EV002",
        "nombre": "Taller de Pintura Renacentista",
        "fecha": "2025-01-20",
        "exposicion_id": "E002",
        "presentador": "María Cano"
    },
    {
        "id": "EV003",
        "nombre": "Visita Guiada Arte Moderno",
        "fecha": "2025-03-10",
        "exposicion_id": "E003",
        "presentador": "Carlos Jaramillo"
    },
    {
        "id": "EV004",
        "nombre": "Charla Momificación Egipcia",
        "fecha": "2025-01-25",
        "exposicion_id": "E004",
        "presentador": "Ana Beltrán"
    },
    {
        "id": "EV005",
        "nombre": "Escultura en el Siglo XX",
        "fecha": "2025-03-05",
        "exposicion_id": "E005",
        "presentador": "Ricardo López"
    },
    {
        "id": "EV006",
        "nombre": "Debate sobre Arte Colonial",
        "fecha": "2025-02-28",
        "exposicion_id": "E006",
        "presentador": "Paula Jiménez"
    },
    {
        "id": "EV007",
        "nombre": "Exhibición de Arte Digital",
        "fecha": "2025-03-15",
        "exposicion_id": "E007",
        "presentador": "Daniel Ruiz"
    },
    {
        "id": "EV008",
        "nombre": "Concierto Inspirado en Picasso",
        "fecha": "2025-03-20",
        "exposicion_id": "E008",
        "presentador": "Orquesta Filarmónica"
    },
    {
        "id": "EV009",
        "nombre": "Taller de Fotografía Urbana",
        "fecha": "2025-03-25",
        "exposicion_id": "E009",
        "presentador": "Camilo Herrera"
    },
    {
        "id": "EV010",
        "nombre": "Festival Cine Digital",
        "fecha": "2025-04-10",
        "exposicion_id": "E010",
        "presentador": "Natalia Gómez"
    }
]
)

db.insertMany([
    {
        "id": "E001",
        "titulo": "El Oro de Colombia",
        "categoria": "Arte precolombino",
        "fecha_inicio": "2025-02-01",
        "fecha_fin": "2025-05-01",
        "curador": "Dr. Luis Mejía"
    },
    {
        "id": "E002",
        "titulo": "Maestros del Renacimiento",
        "categoria": "Pintura clásica",
        "fecha_inicio": "2025-01-10",
        "fecha_fin": "2025-04-15",
        "curador": "María Cano"
    },
    {
        "id": "E003",
        "titulo": "Arte Moderno Latinoamericano",
        "categoria": "Arte moderno",
        "fecha_inicio": "2025-03-01",
        "fecha_fin": "2025-06-30",
        "curador": "Carlos Jaramillo"
    },
    {
        "id": "E004",
        "titulo": "Momias de Egipto",
        "categoria": "Arqueología",
        "fecha_inicio": "2025-01-05",
        "fecha_fin": "2025-04-20",
        "curador": "Ana Beltrán"
    },
    {
        "id": "E005",
        "titulo": "Esculturas del Siglo XX",
        "categoria": "Escultura",
        "fecha_inicio": "2025-02-15",
        "fecha_fin": "2025-05-15",
        "curador": "Ricardo López"
    },
    {
        "id": "E006",
        "titulo": "Arte Colonial en América",
        "categoria": "Arte religioso",
        "fecha_inicio": "2025-02-20",
        "fecha_fin": "2025-05-30",
        "curador": "Paula Jiménez"
    },
    {
        "id": "E007",
        "titulo": "Arte y Tecnología",
        "categoria": "Arte digital",
        "fecha_inicio": "2025-03-10",
        "fecha_fin": "2025-06-10",
        "curador": "Daniel Ruiz"
    },
    {
        "id": "E008",
        "titulo": "Picasso y la Música",
        "categoria": "Arte moderno",
        "fecha_inicio": "2025-03-05",
        "fecha_fin": "2025-06-20",
        "curador": "Laura Salazar"
    },
    {
        "id": "E009",
        "titulo": "Fotografía Urbana",
        "categoria": "Fotografía",
        "fecha_inicio": "2025-03-12",
        "fecha_fin": "2025-06-25",
        "curador": "Camilo Herrera"
    },
    {
        "id": "E010",
        "titulo": "Cine y Arte Digital",
        "categoria": "Cine",
        "fecha_inicio": "2025-04-01",
        "fecha_fin": "2025-07-15",
        "curador": "Natalia Gómez"
    }
])

db.insertMany([
    {
        "id": "O001",
        "titulo": "Máscara de Oro",
        "autor": "Cultura Quimbaya",
        "anio": -500,
        "exposicion_id": "E001"
    },
    {
        "id": "O002",
        "titulo": "La Mona Lisa",
        "autor": "Leonardo da Vinci",
        "anio": 1503,
        "exposicion_id": "E002"
    },
    {
        "id": "O003",
        "titulo": "El Grito",
        "autor": "Edvard Munch",
        "anio": 1893,
        "exposicion_id": "E003"
    },
    {
        "id": "O004",
        "titulo": "Sarcófago Egipcio",
        "autor": "Artesanos de Tebas",
        "anio": -1000,
        "exposicion_id": "E004"
    },
    {
        "id": "O005",
        "titulo": "El Pensador",
        "autor": "Auguste Rodin",
        "anio": 1902,
        "exposicion_id": "E005"
    },
    {
        "id": "O006",
        "titulo": "Virgen de Quito",
        "autor": "Bernardo de Legarda",
        "anio": 1734,
        "exposicion_id": "E006"
    },
    {
        "id": "O007",
        "titulo": "Escultura Digital 3D",
        "autor": "Ana Rivera",
        "anio": 2022,
        "exposicion_id": "E007"
    },
    {
        "id": "O008",
        "titulo": "Guernica",
        "autor": "Pablo Picasso",
        "anio": 1937,
        "exposicion_id": "E008"
    },
    {
        "id": "O009",
        "titulo": "Fotografía de Nueva York",
        "autor": "Steve McCurry",
        "anio": 2010,
        "exposicion_id": "E009"
    },
    {
        "id": "O010",
        "titulo": "Cortometraje Experimental",
        "autor": "Andrés López",
        "anio": 2023,
        "exposicion_id": "E010"
    }
])

db.insertMany([
    {
        "id": "R001",
        "usuario_id": "U001",
        "exposicion_id": "E001",
        "comentario": "Increíble colección de oro.",
        "calificacion": 5
    },
    {
        "id": "R002",
        "usuario_id": "U002",
        "exposicion_id": "E002",
        "comentario": "Gran experiencia cultural.",
        "calificacion": 4
    },
    {
        "id": "R003",
        "usuario_id": "U003",
        "exposicion_id": "E005",
        "comentario": "Esculturas impresionantes.",
        "calificacion": 5
    },
    {
        "id": "R004",
        "usuario_id": "U004",
        "exposicion_id": "E004",
        "comentario": "Muy educativo.",
        "calificacion": 4
    },
    {
        "id": "R005",
        "usuario_id": "U005",
        "exposicion_id": "E001",
        "comentario": "Orgullo precolombino.",
        "calificacion": 5
    },
    {
        "id": "R006",
        "usuario_id": "U006",
        "exposicion_id": "E007",
        "comentario": "Arte digital de otro nivel.",
        "calificacion": 5
    },
    {
        "id": "R007",
        "usuario_id": "U007",
        "exposicion_id": "E006",
        "comentario": "Me encantó el arte colonial.",
        "calificacion": 4
    },
    {
        "id": "R008",
        "usuario_id": "U008",
        "exposicion_id": "E008",
        "comentario": "Picasso nunca decepciona.",
        "calificacion": 5
    },
    {
        "id": "R009",
        "usuario_id": "U009",
        "exposicion_id": "E009",
        "comentario": "Fotografía muy inspiradora.",
        "calificacion": 4
    },
    {
        "id": "R010",
        "usuario_id": "U010",
        "exposicion_id": "E010",
        "comentario": "Cine experimental fascinante.",
        "calificacion": 5
    }
]) 