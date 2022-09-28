import { useState } from "react";

const url = 'http://localhost/3000:users';

function Fetch() {
    const [users, setUsers] = useState();
    const [counter, setCounter] = useState(1);
    const getUsers = () => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setUsers(data));
    }
    useEffect(() => {
        getUsers()
    }, []);
    const submit = () => {
        setCounter(counter + 1);
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
        });

    }


    return (
        <div>
            <button type='button' onClick={submit} className="w-[5%] h-[5%]" >Submit</button>
            <p>{JSON.stringify(users)}</p>
        </div>
    );
}
export default Fetch;