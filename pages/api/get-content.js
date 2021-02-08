import { query } from '../../config/db'

export default async (req, res) => {
  try {
    const results = await query(`
      SELECT * FROM days
    `)

    return res.json(results)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}
