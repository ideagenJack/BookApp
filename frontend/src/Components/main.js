// import react from "react";

const Main = () => {
    return (
        <>
            <div className="header">
                <div className="row1">
                    <h1>
                        Book world
                    </h1>
                </div>
                <div className="row2">
                    <h2>
                        Take a look around
                    </h2>
                    <div className="search">
                        <input type="text" placeholder="Search book"/> 
                        <button><img src='/Imgs/zoom.png' style={{width: "10px"}} alt='Background'></img></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main;