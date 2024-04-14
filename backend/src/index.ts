import { Hono } from 'hono'
import { userRoute} from './routes/userRoutes'
import { BlogsRoute } from './routes/blogs'
import { check } from './routes/check'
import { cors } from 'hono/cors'
const app = new Hono<{
    	Bindings: {
		DATABASE_URL: string,
		JWT_TOKEN: string,
	},
	Variables : {
		userId: string
	}
}>()



app.use("*",cors())
app.route("/aman",check)
app.route("/user",userRoute)
app.route("/api/v1/blog",BlogsRoute)

export default app
