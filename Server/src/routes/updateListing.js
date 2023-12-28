import {db} from '../database'

export const updateListingRoute = {
     method: 'POST',
    path: '/api/listings/{id}',
    handler: async (req, h) => {
        const {id} = req.params
        const {name, description, price} = req.payload
        const {user_id} = '12345';

        await db.query(
            'UPDATE listings SET name = ?, description = ?, price = ? WHERE id = ? ',
            [name, description, price, id, user_id],
        );
        const {results} = await db.query(
            'SELECT * FROM listings WHERE id = ? ',
            [id],

        );
        
        return  results[0];

    }
}