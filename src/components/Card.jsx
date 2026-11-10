import { FaStar } from 'react-icons/fa'

// Props provide the details for each article or tutorial.
function Card({ item }) {
  return (
    <article className="card">
      <img src={item.image} alt={item.title} />
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <div className="card-details">
        <span className="rating"><FaStar aria-hidden="true" /> <span aria-label={item.rating + ' out of 5 stars'}>{item.rating}</span></span>
        <span>{item.author}</span>
      </div>
    </article>
  )
}

export default Card
