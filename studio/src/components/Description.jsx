import React from "react";
import styles from "./Description.module.css";

function RecipeAuthor() {
    let authorLink = "https://www.cookinwithmima.com/easy-orange-chicken-recipe/";
    let authorPhoto = "https://www.cookinwithmima.com/wp-content/uploads/2024/05/CookinWithMima-Photo-edited-1.jpg";
    let authorName = "Miriam Ezzeddine";

    return (
        <div className={styles.recipeAuthorBlock}>
            <img src={authorPhoto} alt="Miriam" className={styles.imageUpdates} width={200} height={180} />
            <div>
                <h3>{authorName}</h3>
                <a href={authorLink} target="_blank">
                    Blog name
                </a>
            </div>
        </div>
    );
}

class RecipeDescription extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Easy Orange Chicken</h1>
                    <p>Simple guide and instructions for Orange Chicken</p>
                </div>
                <RecipeAuthor />
            </div>
        );
    }
}

export default RecipeDescription;
