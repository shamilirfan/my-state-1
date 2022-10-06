import { useState, useEffect } from "react";

const url = 'http://localhost:8000/users';

function Fetch() {
    const [users, setUsers] = useState();
    const [counter, setCounter] = useState();
    const getUsers = () => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setUsers(data))
            .then(() => {
                const ids = users.map(w => w.id);
                const maxId = Math.max(...ids);
                setCounter(maxId + 1);
            
        });
    

    }
    useEffect(() => {
        getUsers()
    }, []);
    const submit = () => {
        
        fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify({ name: "shamil irfan", id: counter }) // body data type must match "Content-Type" header
        }).then(() => getUsers());

    }


    return (
        <div>
            <button type='button' onClick={submit} className="w-[5%] h-[5%]" >Submit</button>
            <p>{JSON.stringify(users)}</p>
        </div>
    );
}
export default Fetch;