import nextAppSession, { promisifyStore } from 'next-app-session';
import MongoStore from 'connect-mongo';
//import { getSecret } from './get_envs/route';

/*const mongoUrl = async() => await getSecret('DATABASE_URL');*/
/*const sessSecret = async() =>{ 
    return await getSecret('SESSION_SECRET');
}*/
const sessSecret = process.env.NEXT_PUBLIC_REACT_APP_SESSION_SECRET;
const mongoUrl = process.env.DATABASE_URL;
type SessionData = {
    access_token?: string;
    refresh_token?: string;
    counter?: number;
};


export const session = nextAppSession<SessionData>({
    name: 'appSession',
    secret: sessSecret,
    store: promisifyStore(
        MongoStore.create({
            mongoUrl: mongoUrl,
            dbName: 'next-app-sessions'
        })
    ) 
})
   
