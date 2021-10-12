import {Router} from 'express'
import {getAll, create, remove} from '../controllers/server.js'

const router = Router()

// прописываем соответствие между методами фронта и бэка
router.get('/api/server', getAll)

router.post('/api/server', create)

// динамический параметр через :
router.delete('/api/server/:id', remove)

//закинем в index.js
export default router