import MediumLogo from "./assets/medium.svg"

function Card() {
    return(
        <div className="card">
            <img src={MediumLogo} alt="Card Image"></img>
            <h2>This post is not for unsuccessful humans</h2>
            <p>Make the best out of yourself for the life you have dreamt for years with these tips</p>
        </div>
    )
}

export default Card