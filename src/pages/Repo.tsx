import { useQueryClient } from "react-query"
import { useParams } from "react-router-dom"
import { Repository } from "../types"

export const Repo = () => {
    const params = useParams()
    const currentRepo = params["*"] as string
    const queryClient = useQueryClient()

    const handleChangeRepositoryDescription = async () => {
        // await queryClient.invalidateQueries(["repos"]) // invalidate all queries
        const previousRepos = queryClient.getQueryData<Repository[]>("repos")

        if (previousRepos) {
            const nextRepos = previousRepos.map(repo => {
                if (repo.full_name === currentRepo) {
                    return { ...repo, description: "New description" }
                }
                else {
                    return repo
                }
            })
            queryClient.setQueryData("repos", nextRepos)
        }
    }

    return (
        <div>
            <h1>{currentRepo}</h1>
            <button onClick={handleChangeRepositoryDescription}>Alterar descrição</button>
        </div>
    )
}

