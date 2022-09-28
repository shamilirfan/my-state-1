import { useState } from "react";
import data from "./data";

function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setMobileNumber] = useState("");
    const [password, setPassword] = useState("");
    const [users, setUsers] = useState(data);

    const submit = () => {
        const user = {
            name: name,
            email: email,
            phone: phone,
            password: password
        };
        
        setUsers([...users, user]);
    };



    return (
        <div className="w-full h-screen flex-col">
            <div className="w-full h-1/6"></div>
            <div className="flex w-full h-4/6">
                <div className="w-[25%] h-full"></div>
                <div className="w-[50%] h-full bg-cyan-200 p-5 divide-x-2 divide-x-2">
                    <div className="mt-20"><label className="ml-6 pr-2 ">User Name :</label>
                        <input
                            type="text"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            className="h-[10%] w-[50%] p-4 border border-blue-300 rounded-md m-3"
                        />
                    </div>
                    <div><label className="ml-4 pr-3 pl-10">Email :</label>
                        <input
                            type="text"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            className="h-[10%] w-[50%] p-4 border border-blue-300 rounded-md m-3"
                        />
                    </div>
                    <div><label className="ml-4 pr-4 pl-8 ">Phone :</label>
                        <input
                            type="text"
                            value={phone}
                            onChange={e => setMobileNumber(e.target.value)}
                            className="h-[10%] w-[50%] ml-2 p-4 border border-blue-300 rounded-md m-3"
                        />
                    </div>
                    <div><label className=" ml-6 pr-3">Password :</label>
                        <input
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            className="h-[10%] w-[50%] p-4 border border-blue-300 rounded-md m-3"
                        />
                    </div>
                    <div className="ml-12 pr-3 pl-8">
                        <button
                            onClick={submit}
                            type="button"
                            className="text-center text-2xl text-white h-[90%] w-[55%] ml-14 bg-violet-400 hover:bg-sky-400 p-4 border rounded-md m-3">Submit</button>
                    </div>
                </div>
                <div className="w-[25%] h-full"></div>
            </div>
            <p>{JSON.stringify(users)}</p>
        </div>
    );
}
export default Form;