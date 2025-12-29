import Client from './api'

export const GetReviews = async (bookId) => {
  try {
    const res = await Client.get(`/reviews/${bookId}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const AddReview = async (bookId, content) => {
  try {
    const res = await Client.post(`/reviews/${bookId}`, { message })
    return res.data
  } catch (error) {
    throw error
  }
}