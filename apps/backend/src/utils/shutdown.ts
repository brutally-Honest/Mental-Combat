
export const shutdown = ({ signal, error }: { signal: string, error?: unknown }) => {
    //TODO: implement graceful shutdown by closing db connection ,logging and other resources

    const interruptionSignals = ['SIGINT', 'SIGTERM'];
    if (interruptionSignals.includes(signal)) {
        console.log(`Received ${signal} signal`);
        process.exit(0);
    }
    console.log(error, signal);
    process.exit(1);
};