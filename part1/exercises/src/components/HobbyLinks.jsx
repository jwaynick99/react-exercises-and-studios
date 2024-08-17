export default function HobbyLinks() {
    let hobbyLinks = [
        "https://www.tcgplayer.com/search/yugioh/product?productLineName=yugioh&page=1&view=grid",
        "https://www.reddit.com/r/Pickleball/",
    ];

    return (
        <div>
            <h3>My Hobbies</h3>
            <div>
                <a href={hobbyLinks[0]}>Yugioh</a>
            </div>
            <div>
                <a href={hobbyLinks[1]}>Pickleball</a>
            </div>
        </div>
    );
}
