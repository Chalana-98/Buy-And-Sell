import {db} from '../database'

export const getUserListingsRoute = {
    method: 'GET',
    path: '/api/users/{userId}/listings',
    handler: async (req, h) => {
        const user_id = req.params.use_iId
        const {results} = await db.query(
            'SELECT * FROM listings WHERE user_id=?',
            [user_id]
        );
        return results
    }
}