import './TwitterFollowCard.css'

export function TwitterFollowCard() {
    return(
        <article className="tw-follow-card">
            <header className="tw-follow-cardHeader">
                <img src="https://unavatar.io/cucu" alt="Avatar de cucu" className="tw-follow-cardImage"/>

                <section className="tw-follow-card-userInfo">
                    <strong className="tw-follow-card-userInfo-name">Cucu</strong>
                    <em className="tw-follow-card-userInfo-userName">@cucu</em>
                </section>
            </header>
            <aside>
                <button className="tw-follow-card-followButton">Seguir</button>
            </aside>
        </article>
    )
    
}
  