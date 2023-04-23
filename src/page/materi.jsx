import axios from "axios";
import React, { useEffect, useState } from "react";

function Materi() {

    const [data, setData] = useState(null)
    const [input, setInput] = useState({
        name: ""
    })

    const [fetchStatus, setFetchStatus] = useState(true)

    useEffect(() => {
        if (fetchStatus === true) {
            axios.get('https://backendexample.sanbercloud.com/api/contestants')
                .then((res) => {
                setData([...res.data])
                }).catch((err) => {
                console.log(err)
            })
        }
        setFetchStatus(false)
    }, [fetchStatus, setFetchStatus])
    
    const handleInput = (event) => {
        let name = event.target.name
        let value = event.target.value

        if (name === "name") {
            setInput({ ...input, name:value })
        }
        
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        let {
            name
        } = input

        axios.post('https://backendexample.sanbercloud.com/api/contestants',{name})
            .then((res) => {
                console.log(res)
                setFetchStatus(true)
            })
        
        setInput({
            name: ""
        })
    }

    const handleDelete = (event) => {
        let idData = parseInt(event.target.value)

        axios.delete(`https://backendexample.sanbercloud.com/api/contestants/${idData}`)
            .then((res) => {
            setFetchStatus(true)
        })
    }

    return (
        <div className="container">
            <ul>
                {data !== null && data.map((res,index) => {
                    return (
                        <>
                            <li key={index}>{res.name} |&nbsp;</li>
                            <button value={res.id} onClick={handleDelete}>delete</button>
                        </>
                        
                        
                    )
                }) }
            </ul>

            <form className="form" onSubmit={handleSubmit}>
                <h3>Form Data</h3>
                <input type="text" placeholder="name..." onChange={handleInput} value={input.name} name="name"  />
                <button>submit</button>
            </form>
            
        </div>
    )
}

export default Materi;