import express from 'express';
import session from 'express-session';
import { ApolloServer } from 'apollo-server-express';
import depthLimit from 'graphql-depth-limit';
import { createServer } from 'http';
import compression from 'compression';
import cors from 'cors';
import connect from './schemas';
import dotenv from 'dotenv'
import schema from './schema';
import auth from './routes/auth';

const app = express();

dotenv.config();

// mongoose connect
connect();

// session
app.use(session({
  resave:false,           // 세션을 변경되지 않아도 무조건 저장할 지 정하는 값(false 권장)
  saveUninitialized:true, // 세션이 저장되기 전에 uninitialized 상태로 미리 만들어서 저장
  secret:"로또 1등!",     // 쿠키를 임의로 변조하는것을 방지하기 위한 값 
  cookie:{
      httpOnly:true,      // HttpOnly Set-Cookie 속성
      secure:false        // 쿠키 보안 설정(https 사용시 true 설정)
  }
}));

const server = new ApolloServer({
  schema,
  validationRules: [depthLimit(7)],
});

app.use('*', cors());
app.use(compression());
app.use(express.json());

server.applyMiddleware({ app, path: '/graphql' });

app.use("/auth", auth);

const httpServer = createServer(app);
httpServer.listen(
  { port: process.env.SERVER_PORT || 8000 },
  (): void => console.log(`server Start`)
);