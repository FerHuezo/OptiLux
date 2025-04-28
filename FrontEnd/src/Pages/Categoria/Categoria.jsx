import { Link } from "react-router";

// Importa las imágenes que se usarán como íconos para las categorías
import importado from '../../assets/importado.jpg';
import personalizado from '../../assets/personalizado.jpg';
import Navbar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

// Arreglo de objetos que representan las diferentes categorías de productos
const categories = [
  {
    name: "Productos Importados",
    image: importado,
    path: "/Productos/Importados",
  },
  {
    name: "Producto Personalizado",
    image: personalizado,
    path: "/Productos/Personalizado",
  }
];

// Componente principal que renderiza la sección de categorías
const Categories = () => {
  return (
    <div className="eventos-section mt-10">
      <Navbar/>
      {/* Sección estilizada con padding y fondo blanco */}
      <section className="w-full py-10 bg-white mb-5">
        {/* Título centrado */}
        <h2 className="text-3xl font-bold text-center mb-4 text-black mt-5">Categorías</h2>

        {/* Línea decorativa debajo del título */}
        <div className="w-20 h-1 mx-auto bg-[#8CA9AD] mb-10"></div>

        {/* Contenedor en grid para mostrar las categorías de forma responsiva */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 px-6 max-w-4xl mx-auto mt-5">
          {/* Itera sobre cada categoría y crea un enlace hacia su ruta correspondiente */}
          {categories.map((category, index) => (
            <Link
              to={category.path}
              key={index}
              className="transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
            >
              {/* Tarjeta individual para cada categoría */}
              <div className="rounded-lg shadow-md overflow-hidden bg-white cursor-pointer">
                {/* Imagen de la categoría centrada */}
                <div className="flex justify-center items-center mb-4"> {/* Aquí agregamos margin bottom */}
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="bg-[#8CA9AD] text-white text-center py-2 text-lg font-medium ">
                  {category.name}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Categories;
