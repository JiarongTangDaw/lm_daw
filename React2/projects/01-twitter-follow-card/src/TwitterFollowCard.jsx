import { useState } from 'react';

import {} from './TwitterFollowCard.css'

// export function TwitterFollowCard({name = 'John Doe', userName = 'johndoe', ifFollowing = false, formatUserName = "@johndoe"})
export function TwitterFollowCard({name = 'John Doe', userName = 'johndoe', initialIsFollowing = false}) {
    const avatarSource = `https://unavatar.io/${userName}`;
    const avatarAlterText = `Avatar de ${name}`;

    // 1era posicion el valor y en 2da posicion la funcion que se encargara de actualizar ese valor
    const [isFollowing, setIsFollowing]= useState(initialIsFollowing)

    console.log(`Valor initialIsFollowing de ${name}: ${initialIsFollowing}`)

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    console.log(`Valor isFollowing de ${name}: ${isFollowing}`)

    // Sigue la nomenclatura de una condicion ternaria : condicion ? resultado si la  condicion es true : resultado si la condicion es false
    const isFollowingText = isFollowing ? 'Siguiendo' : 'Seguir'

    return(
        <article className="tw-follow-card">
            <header className="tw-follow-cardHeader">
                <img src={avatarSource} alt={avatarAlterText} className="tw-follow-cardImage"/>

                <section className="tw-follow-card-userInfo">
                    <strong className="tw-follow-card-userInfo-name">{name}</strong>
                    {/* <em className="tw-follow-card-userInfo-userName">{formatUserName}</em> */}
                    <em className="tw-follow-card-userInfo-userName">@{userName}</em>
                </section>
            </header>
            <aside>
                <button className="tw-follow-card-followButton" onClick={handleClick}>{isFollowingText}</button>
            </aside>
        </article>
    )
    
}
  