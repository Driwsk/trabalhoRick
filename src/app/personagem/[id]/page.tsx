import api from "@/app/utils/api"
import CharacterDetail, { CharacterProps } from "@/components/CharacterDetail"

const Personagem = async ({params}: {params: {id: number}}) => {
    const { data } = await api.get(`/character/${params.id}`)

    return (
        <CharacterDetail {...data as CharacterProps} />
    )
}

export default Personagem