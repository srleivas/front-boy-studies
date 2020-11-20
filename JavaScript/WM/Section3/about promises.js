function speakAfter(seconds, phrase){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(resolve = {
                phrase: phrase,
                seconds: seconds
            });
        }, seconds * 1000);
    });
};

speakAfter(2, 'ohraaay!')
    .then(resolved => console.log(`Promise Resolved: ${resolved.phrase}\nSeconds requested: ${resolved.seconds}`));