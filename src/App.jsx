import "./App.css";

import ArticleSection from "./componets/Article";
import TutorialSection from "./componets/Tutorial";
import Newsletter from "./componets/Newsletter";
import Footer from "./componets/Footer";

function App() {

    return (
        <>

            <h1>DEV@Deakin</h1>

            <Newsletter />

            <ArticleSection />

            <TutorialSection />

            <Footer />

        </>
    );
}

export default App;