import leetcodeLogo from '../assets/images/leetcode.png';
import codeforcesLogo from '../assets/images/codeforce.png';
import geeksforgeeksLogo from '../assets/images/gfg.jpg';
import codechefLogo from '../assets/images/codechef.jpg';

export const profiles = [
    {
        platform: 'LeetCode',
        link: 'https://leetcode.com/u/231FA04F68/',
        username: '231FA04F68',
        questionsSolved: 125, // Fallback value, will be fetched from API
        logo: leetcodeLogo,
        apiEndpoint: 'https://leetcode-stats-api.herokuapp.com/231FA04F68',
    },
    {
        platform: 'Codeforces',
        link: 'https://codeforces.com/profile/your-username',
        username: 'gautamkumar00812',
        questionsSolved: 5, // Update manually or add API
        logo: codeforcesLogo,
        apiEndpoint: null,
    },
    {
        platform: 'GeeksforGeeks',
        link: 'https://www.geeksforgeeks.org/user/gautamkumar9297/',
        username: 'gautamkumar9297',
        questionsSolved: 80, // Update manually or add API
        logo: geeksforgeeksLogo,
        apiEndpoint: null,
    },
    {
        platform: 'CodeChef',
        link: 'https://www.codechef.com/users/gautamf68',
        username: 'gautamf68',
        questionsSolved: 100, // Fallback value, will be fetched from API
        logo: codechefLogo,
        apiEndpoint: 'https://codechef-api.vercel.app/handle/gautamf68',
    },
];
