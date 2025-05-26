import {} from './TwitterFollowCard.css'

export function TwitterFollowCard({name, userName, ifFollowing, formatUserName}) {
    const avatarSource = `https://unavatar.io/${userName}`;
    const avatarAlterText = `Avatar de ${name}`;

    console.log(`Valor isFollowing de ${name}: ${ifFollowing}`)

    return(
        <article className="tw-follow-card">
            <header className="tw-follow-cardHeader">
                <img src={avatarSource} alt={avatarAlterText} className="tw-follow-cardImage"/>

                <section className="tw-follow-card-userInfo">
                    <strong className="tw-follow-card-userInfo-name">{name}</strong>
                    <em className="tw-follow-card-userInfo-userName">{formatUserName}</em>
                    {/* <em className="tw-follow-card-userInfo-userName">@{userName}</em> */}
                </section>
            </header>
            <aside>
                <button className="tw-follow-card-followButton">Seguir</button>
            </aside>
        </article>
    )
    
}
  