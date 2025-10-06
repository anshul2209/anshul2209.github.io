const ghpages = require('gh-pages');

ghpages.publish(
    'build',
    {
        branch: 'gh-pages',
        repo: 'https://github.com/anshul2209/anshul2209.github.io.git',
        user: {
            name: 'Anshul Bansal',
            email: 'anshulbansal2209@gmail.com'
        }
    },
    () => {
        console.log('Manual Deploy Complete!')
    }
)