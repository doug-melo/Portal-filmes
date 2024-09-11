import { NavLink } from "react-router-dom"
export default function Header(){
    return(
        <>
            <header className="h-20 flex bg-indigo-900 text-white justify-between w items-center p-8">
                <div>
                <h1 className="">Portal Filmes</h1>
                </div>
                <nav>
                    <ul className="flex gap-5">
                        <li className="hover:underline"><NavLink to={"/"}>Home</NavLink></li>
                        <li className="hover:underline"><NavLink to={"/movies"}>Filmes</NavLink></li>
                        <li className="hover:underline"><NavLink to={"/genre"}>Gêneros</NavLink></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}