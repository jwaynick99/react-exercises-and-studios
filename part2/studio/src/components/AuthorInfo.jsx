import recipedata from "./recipe.json";
import "./styling.css";

function AuthorInfo() {
    const recipeAuthorImage = <img className="authorImage" src={recipedata[0].authorImage}></img>;
    const recipeAuthor = recipedata[0].author;
    const recipeWebsite = <a href={recipedata[0].website}>Web Link</a>;
    return (
        <div>
            {recipeAuthorImage}
            {recipeAuthor}
            {recipeWebsite}
        </div>
    );
}

export default AuthorInfo;

//import styles.css
//import json file for author info
//image, name, website
//css for styling image
