let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];

function RateARecipe({ rating }) {
    function GiveRating() {
        return <h3>{stars[rating - 1]}</h3>;
    }

    return rating > 0 && rating < 6 ? <GiveRating /> : null;
}

export default RateARecipe;

//conditional to render stars based on a number provided in App.js
