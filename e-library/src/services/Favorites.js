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
export const getBookStatus = async (bookId) => {
    try {
      const res = await Client.get(`/reading-status/${bookId}`)
      return res.data
    } catch (error) {
      if (error.response?.status === 404) {
        return null 
      }
      throw error
    }
  }
  
  export const setReadingStatus = async (bookId, status) => {
    try {
      const res = await Client.post('/reading-status', { bookId, status })
      return res.data
    } catch (error) {
      throw error
    }
  }
