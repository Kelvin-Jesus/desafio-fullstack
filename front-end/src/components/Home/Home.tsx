import React from "react";
import UsuarioRepository from "../../Repository/UsuarioRepository";

const Home = () => {
    const [usuarios, setUsuarios] = React.useState([]);

    React.useEffect(() => {
        UsuarioRepository.findAll().then((response) => {
            setUsuarios(response);
        })
    }, [])

    return (
        <div className="max-w-full mt-5">
            <div className="container px-4 mx-auto sm:px-8 bg-slate-50">
                <div className="py-8">
                    <button className="bg-indigo-500 hover:bg-indigo-600">Criar Usuário</button>
                    <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8 ">
                        <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
                            <table className="min-w-full leading-normal ">
                                <thead>
                                    <tr>
                                        <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                            Name
                                        </th>
                                        <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                            Role
                                        </th>
                                        <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                            Created at
                                        </th>
                                        <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                            status
                                        </th>
                                        <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        usuarios.length > 0
                                        ? usuarios.map((usuario) => {
                                            return (
                                                <tr key={usuario.id}>
                                                    <td 
                                                        className="px-5 py-5 text-sm bg-white border-b border-gray-200"
                                                    >
                                                        <div className="flex items-center">
                                                            <div>
                                                                <p className="text-gray-900 whitespace-no-wrap">
                                                                    {usuario.nome}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td 
                                                        className="px-1 py-1 text-sm bg-white border-b border-gray-200"
                                                    >
                                                        <p className="text-gray-900 whitespace-no-wrap">
                                                            {usuario.email}
                                                        </p>
                                                    </td>
                                                    <td 
                                                        className="px-5 py-5 text-sm bg-white border-b border-gray-200"
                                                    >
                                                        <p className="text-gray-900 whitespace-no-wrap">
                                                            2023-02-04
                                                        </p>
                                                    </td>
                                                </tr>
                                            );
                                        })
                                        : (
                                            <tr>
                                                <td colSpan={12} className="text-center">
                                                    <div className="flex items-center p-2">
                                                        <div className="w-full">
                                                            <p className="text-gray-900 whitespace-no-wrap text-center">
                                                                Nenhum usuário encontrado!
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    }
                                    {/* <tr>
                                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                            <div className="flex items-center">
                                                <div>
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        Jean marc
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                Admin
                                            </p>
                                        </td>
                                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                12/09/2020
                                            </p>
                                        </td>
                                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                            <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                                                <span aria-hidden="true" className="absolute inset-0 bg-green-200 rounded-full opacity-50">
                                                </span>
                                                <span className="relative">
                                                    active
                                                </span>
                                            </span>
                                        </td>
                                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                            <div classNameName="flex gap-2">
                                                <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                                    Edit
                                                </a>
                                                <a href="#" className="text-red-600 hover:text-red-900">
                                                    Delete
                                                </a>
                                            </div>
                                        </td>
                                    </tr> */}
                                    
                                </tbody>
                            </table>
                            {
                                usuarios.length > 0
                                ? (
                                    <div className="flex flex-col items-center px-5 py-5 bg-white xs:flex-row xs:justify-between">
                                        <div className="flex items-center">
                                            <button type="button" className="w-full p-4 text-base text-gray-600 bg-white border rounded-l-xl hover:bg-gray-100">
                                                <svg width="9" fill="currentColor" height="8" className="" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z">
                                                    </path>
                                                </svg>
                                            </button>
                                            <button type="button" className="w-full px-4 py-2 text-base text-indigo-500 bg-white border-t border-b hover:bg-gray-100 ">
                                                1
                                            </button>
                                            <button type="button" className="w-full px-4 py-2 text-base text-gray-600 bg-white border hover:bg-gray-100">
                                                2
                                            </button>
                                            <button type="button" className="w-full px-4 py-2 text-base text-gray-600 bg-white border-t border-b hover:bg-gray-100">
                                                3
                                            </button>
                                            <button type="button" className="w-full px-4 py-2 text-base text-gray-600 bg-white border hover:bg-gray-100">
                                                4
                                            </button>
                                            <button type="button" className="w-full p-4 text-base text-gray-600 bg-white border-t border-b border-r rounded-r-xl hover:bg-gray-100">
                                                <svg width="9" fill="currentColor" height="8" className="" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                                                    </path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                )
                                : <></>
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;