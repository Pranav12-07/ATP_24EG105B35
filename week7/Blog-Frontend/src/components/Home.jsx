import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useAuth } from '../store/authStore'
import { NavLink } from 'react-router'

function Home() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const { isAuthenticated } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      fetchArticles()
    }
  }, [isAuthenticated])

  const fetchArticles = async () => {
    try {
      setLoading(true)
      const res = await axios.get('http://localhost:4000/user-api/articles', { withCredentials: true })
      setArticles(res.data.payload)
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch articles')
    } finally {
      setLoading(false)
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold mb-4">Welcome to Blog App</h1>
        <p className="text-lg mb-8">Please login to view articles</p>
        <div className="space-x-4">
          <NavLink to="/login" className="bg-blue-500 text-white px-4 py-2 rounded">Login</NavLink>
          <NavLink to="/register" className="bg-green-500 text-white px-4 py-2 rounded">Register</NavLink>
        </div>
      </div>
    )
  }

  if (loading) return <div className="text-center py-20">Loading...</div>
  if (error) return <div className="text-center py-20 text-red-500">{error}</div>

  return (
    <div className="py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Articles</h1>
      {articles.length === 0 ? (
        <p className="text-center">No articles available</p>
      ) : (
        <div className="grid gap-6">
          {articles.map(article => (
            <div key={article._id} className="border p-4 rounded shadow">
              <h2 className="text-xl font-semibold">{article.title}</h2>
              <p className="text-gray-600">{article.category}</p>
              <p className="mt-2">{article.content.substring(0, 200)}...</p>
              <NavLink to={`/article/${article._id}`} className="text-blue-500 mt-2 inline-block">Read more</NavLink>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Home