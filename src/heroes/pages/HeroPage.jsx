import { useParams, Navigate, useNavigate } from "react-router-dom"
import { getHeroeById } from "../helpers/getHeroById"
import { useMemo } from "react"

export const HeroPage = () => {

    const { id } = useParams()
    const navigate = useNavigate()

    const hero = useMemo(() => getHeroeById(id), [id])

    const heroUrl = `/assets/heroes/${id}.jpg`



    const onNavigateBack = () => {
        navigate(-1)
    }

    if (!hero) {
        // return <>404 - Not found</>

        return <Navigate to="/marvel" />
    }
    return (
        <div className="row mt-5">
            <div className="col-4">
                <img className="img-thumbnail animate__animated animate__fadeInLeft" src={heroUrl} alt={hero.superhero} />
            </div>

            <div className="col-8">
                <h3>{hero.superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter ego:</b> {hero.alter_ego}</li>
                    <li className="list-group-item"><b>Publisher:</b> {hero.publisher}</li>
                    <li className="list-group-item"><b>First Appearance:</b> {hero.first_appearance}</li>

                    <h5 className="mt-3">Characters </h5>
                    <p>{hero.characters}</p>


                </ul>
                <button
                    className="btn btn-outline-primary"
                    onClick={onNavigateBack}
                >
                    Volver
                </button>
            </div>
        </div>
    )
}