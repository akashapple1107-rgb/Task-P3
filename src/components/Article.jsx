import { articleData } from "../data/data";
import Icon from './Icon';

function ArticleCard({ item }) {
    return (
        <div className="content-card">

            <img
                src={item.image}
                alt={item.title}
                className="card-image"
            />

            <h3>{item.title}</h3>

            <p>{item.description}</p>

            <div className="card-info">
                <span className="card-rating" aria-label={`Rating: ${item.rating} out of 5`}><Icon name="star" /> {item.rating}</span>
                <span>{item.author}</span>
            </div>

        </div>
    );
}


function ArticleSection() {
    return (
        <section className="content-section" id="articles">

            <h2>Featured Articles</h2>

            <div className="card-container">

                {articleData.map((item) => (
                    <ArticleCard
                        key={item.id}
                        item={item}
                    />
                ))}

            </div>

            <a className="see-all" href="#articles">See all articles</a>

        </section>
    );
}

export default ArticleSection;
