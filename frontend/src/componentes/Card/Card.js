import axios from "axios"
import { useEffect } from "react"

function Card(props) {
    
    function getNoticias() {
        axios.get("http://localhost:8000/news")
        .then(response => props.setNews(response.data))
        .catch(error => console.log(error))
    }

    useEffect(() =>{
        getNoticias()
    }, [])

    const newNews = props.news.map((item) =>{
        return(
            <div key={item.id}>
                <h2>{item.title}</h2>
                <p>{item.content}</p>
            </div>
        )
    })

    return(
    <>
    {newNews}
    </>
    )
}

export default Card