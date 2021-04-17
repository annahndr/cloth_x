import "./searchResults.scss";
import ProductCard from "../../components/productCard/ProductCard";
import Sweater from "../../assets/images/icecreamgreysweatersite.png";

const SearchResults = () => {
    const products = [
        {
            name: "Chunky Sweater",
            description: "This is a sweater",
            tags: ["Adult", "Used"],
            price: "10",
            image: Sweater,
            location: "Glasgow",
        },
        {
            name: "Chunky Sweater",
            description: "This is a sweater",
            tags: ["Adult", "Used"],
            price: "10",
            image: Sweater,
            location: "Glasgow",
        },
        {
            name: "Chunky Sweater",
            description: "This is a sweater",
            tags: ["Adult", "Used"],
            price: "10",
            image: Sweater,
            location: "Glasgow",
        },
        {
            name: "Chunky Sweater",
            description: "This is a sweater",
            tags: ["Adult", "Used"],
            price: "10",
            image: Sweater,
            location: "Glasgow",
        },
        {
            name: "Chunky Sweater",
            description: "This is a sweater",
            tags: ["Adult", "Used"],
            price: "10",
            image: Sweater,
            location: "Glasgow",
        },
        {
            name: "Chunky Sweater",
            description: "This is a sweater",
            tags: ["Adult", "Used"],
            price: "10",
            image: Sweater,
            location: "Glasgow",
        }
    ];

    return(
        <div className="search-results">
            <div className="col-12"><h2>You searched for...</h2></div>
            <div className="results-container">
                {searchResultsProducts(products)}
            </div>
        </div>
    );
};

const searchResultsProducts = (products) => {
    return products.map((product, i) => {
        return (
            <ProductCard
                key={i}
                name={product.name}
                description={product.description}
                tags={product.tags}
                price={product.price}
                image={product.image}
                location={product.location}
            />
        );
    });
};
 
export default SearchResults;