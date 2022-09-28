import {Link} from "react-router-dom";

function Links() {
    return (
        <div className="flex w-full h-screen">
            <div className="w-[25%] h-full"></div>
            <div className="flex flex-col justify-center m-5 w-[50%] h-[50%] mt-40 bg-sky-400">
                <Link to="/form" className="border p-5 m-5 text-3xl hover:text-blue-600 text-white">Form</Link>
                <Link to="/counter" className="border p-5 m-5 text-3xl hover:text-blue-600 text-white">Counter</Link>
                <Link to="/fetch" className="border p-5 m-5 text-3xl hover:text-blue-600 text-white">Fetch</Link>
            </div>
            <div className="w-[25%] h-full"></div>
        </div>
    );
}
export default Links;