import Layout from "../components/layout/layout"
import Card from "../components/card/card-municipio"
import { useState } from 'react';
import CreateModal from "../components/modal/municipio/modal-create-municipio";
export default function Municipios() {

    const municipios = Array.from({ length: 20 }, (_, i) => ({
        id: i + 1,
        nombre: `Municipio ${i + 1}`,
        area: `${100 + i}`,
        altitud: `${(i + 1) * 10000}`
    }));

    const [search, setSearch] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const filteredMunicipios = municipios.filter(municipio =>
        municipio.nombre.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="bg-color-4">
            <Layout>
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/4 p-4 font-lato flex flex-col items-center mt-20 m-5 md:ml-10">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="mt-4 p-2 bg-color-1 text-color-4 rounded-xl text-2xl mb-10"
                        >
                            Agregar Municipio
                        </button>
                        <img src="src/assets/extra/municipio.png" alt="Municipios" className="w-full" />
                        <h1 className="text-6xl font-bold text-color-1">MUNICIPIOS</h1>
                        <input
                            type="text"
                            placeholder="Buscar por nombre del municipio"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            className="p-2 rounded-2xl w-80 mt-4"
                        />
                    </div>
                    <div className="md:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 h-full min-h-screen p-20">
                        {filteredMunicipios.map((municipio) => (
                            <Card
                                key={municipio.id}
                                id={municipio.id}
                                nombre={municipio.nombre}
                                area={municipio.area}
                                altitud={municipio.altitud}
                            />
                        ))}
                    </div>
                </div>
                {isModalOpen && <CreateModal onClose={() => setIsModalOpen(false)} />}
            </Layout>
        </div>
    )
}