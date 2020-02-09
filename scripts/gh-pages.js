const ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export/portfolio',// <-- replace yourproject with your repo name
    {
        branch: 'gh-pages',
        repo: 'https://github.com/anshul2209/portfolio.git',
        user: {
            name: 'Anshul Bansal',
            email: 'anshulbansal2209@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)