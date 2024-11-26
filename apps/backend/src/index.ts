import { createApp } from './server/app';
import { shutdown } from './utils/shutdown';
import { configureDB } from './config/db';
import { __ } from './config/env';

configureDB();

const app = createApp();

process.on('unhandledRejection', (rejectionReason, promise) => {
    shutdown({ error: { err: rejectionReason, promise }, signal: 'unhandledRejection' });
});

process.on('uncaughtException', (error) => {
    shutdown({ error, signal: 'uncaughtException' });
});

app.get("/", (req, res) => {
    res.json({ message: "Good to GO 👍" })
})

app.listen(__.PORT, () => {
    console.log(`Live at http://localhost:${__.PORT}`)
});

process.on('SIGTERM', () => {
    shutdown({ signal: 'SIGTERM' });
});
process.on('SIGINT', () => {
    shutdown({ signal: 'SIGINT' });
});
