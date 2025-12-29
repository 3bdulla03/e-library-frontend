import Client from "./api";

export const GetFavorites = async () => {
    try {
        const res = await Client.get('/favorites')
        return res.data
    } catch (error) {
        throw error
    }
}

export const AddFavorite = async (bookId) => {
    try {
        const res = await Client.post('/favorites', { bookId })
        return res.data
    } catch (error) {
        throw error  
    }
}

export const RemoveFavorite = async (favoriteId) => {
    try {
        const res = await Client.delete(`/favorites/${favoriteId}`)
        return res.data
    } catch (error) {
        throw error
    }
}
