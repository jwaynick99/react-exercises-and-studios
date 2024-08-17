export default function BookList() {
    let pageTitle = "Best One Piece Arcs";
    let book1 = "https://qph.cf2.quoracdn.net/main-qimg-0561090213702634b186301b06945d4e-pjlq";
    let book2 = "https://comicvine.gamespot.com/a/uploads/scale_small/11158/111586527/9289609-4327592883-97840.jpg";
    let book3 =
        "https://64.media.tumblr.com/563af3a9949bdb2a9c50841778d94f84/6d819d65943c5b48-1a/s1280x1920/179f64852cfcff877a23b17f1489a79766780c45.png";

    return (
        <div>
            <h3>{pageTitle}</h3>
            <img src={book1} alt="Paramount War Cover Art" />
            <img src={book2} alt="Egghead Arc Cover Art" />
            <img src={book3} alt="Punk Hazard Cover Art" />
        </div>
    );
}
