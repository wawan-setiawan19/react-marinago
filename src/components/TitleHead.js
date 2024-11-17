function TitleHead({title}) {
    return (
        <div className="title-head">
            <h2>{title}</h2>
            <div className="search-bar">
                <input type="text" placeholder="Cari" className="search-input" />
                <button className="search-btn">🔍</button>
            </div>
        </div>
    )
}

export default TitleHead