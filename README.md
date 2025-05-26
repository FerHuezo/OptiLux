🕶️ OptiLux - Tienda en línea de anteojos
Bienvenido a OptiLux, una plataforma e-commerce diseñada para la venta de anteojos con un diseño moderno y funcional al alcance de tu mano. Implementado con el stack MERN (MongoDB, Express.js, React, Node.js).

🚀 Instalación y ejecución
1️⃣ Requisitos previos
Asegúrate de tener instalados:

Node.js

MongoDB

Un gestor de paquetes como npm

2️⃣ Instalación
Ejecuta los siguientes comandos en tu terminal:

git bash
# Clonar el repositorio
git clone https://github.com/tu_usuario/optilux.git

# Entrar al directorio
cd optilux

# Instalar dependencias del servidor
cd backend
npm install

# Instalar dependencias del cliente
cd ../frontend/web-private o cd ../frontend/web-public
npm install

3️⃣ Configuración
Crea un archivo .env en la carpeta backend y añade las variables de entorno:

.env
MONGO_URI=tu_conexion_mongodb
JWT_SECRET=tu_secreto_jwt
PORT=5000

4️⃣ Ejecución
Para levantar el servidor y el cliente en modo desarrollo:

bash
# Iniciar el backend
cd backend
npm run dev o node index.js

# Iniciar el frontend
cd ./frontend/web-private o cd ./frontend/web-public
npm run dev

🛠️ Tecnologías utilizadas
Este proyecto usa las siguientes herramientas:

MongoDB – Base de datos NoSQL

Express.js – Framework backend en Node.js

React – Biblioteca para la interfaz de usuario

Node.js – Entorno de ejecución

Mongoose – ODM para MongoDB

Tailwind CSS – Estilización rápida y moderna

JWT (JSON Web Token) – Autenticación segura

📂 Estructura de proyecto
La organización de carpetas es la siguiente:

optilux/
│── backend/
│  ── src/
│     ├── controllers/
│     ├── models/
│     ├── routes/
│     ├── config
│     ├── middleware/
│  ── .env
│── frontend/
│  ── src/
│     ├── components/
│     ├── context/
│     ├── pages/
│     ├── redux/
│── package.json
│── README.md
🎯 Temática del proyecto
El propósito de OptiLux es ofrecer una solución moderna y accesible para la compra de anteojos online. Con una interfaz intuitiva y un proceso de compra ágil, los usuarios pueden explorar catálogos, realizar pedidos y gestionar compras con facilidad.
