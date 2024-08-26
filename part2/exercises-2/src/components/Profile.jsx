import "./styles.css";
import Button from "./Button";
import oceans from "./oceans.json";

function Profile() {
    let listitem = oceans.map((ocean) => (
        <div key={ocean.id} className="profile">
            <img src={ocean.image} alt={ocean.name} className={ocean.fishCheck === "true" ? "isAFish" : "profile"} />
            <h1>{ocean.name}</h1>
            <h3>
                Fun Facts:
                <ol>
                    <li>{ocean.fact1}</li>
                    <li>{ocean.fact2}</li>
                    <li>{ocean.fact3}</li>
                </ol>
            </h3>
            <Button />
        </div>
    ));
    return <ul>{listitem}</ul>;
}

export default Profile;
