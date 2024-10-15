import axios from 'axios';
import { program } from 'commander';
import dotenv from 'dotenv';

dotenv.config();

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const OWNER = 'hsy0810';
const REPO = 'JS-exercises';

const api = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
    },
});


// Issue を作成する関数
async function createIssue(title, body) {
    try {
        console.log(`Creating issue in repo: ${OWNER}/${REPO}`);
        console.log('Using GitHub Token:', GITHUB_TOKEN);
        const response = await api.post(`/repos/${OWNER}/${REPO}/issues`, {
            title,
            body,
        });
        console.log('Issue created:', response.data.html_url);
    } catch (error) {
        console.error('Error creating issue:', error.response ? error.response.data.message : error.message);
    }
}

//指定したIssueをクローズする関数
async function closeIssue(issueNumber) {
    try {
        const response = await api.patch(`/repos/${OWNER}/${REPO}/issues/${issueNumber}`, {
            state: 'closed',
        });
        console.log(`Issue #${issueNumber} closed:`, response.data.html_url);
    } catch (error) {
        console.error('Error closing issue:', error.response ? error.response.data.message : error.message);
    }
}

//オープンな Issue の Id と Title の一覧を表示
async function showListOfOpenIssues() {
    try {
        const response = await api.get(`/repos/${OWNER}/${REPO}/issues`, {
            params: { state: 'open' },
        });
        response.data.forEach(issue => {
            console.log(`#${issue.number}: ${issue.title}`);
        });
    } catch (error) {
        console.error('Error fetching issues:', error.response ? error.response.data.message : error.message);
    }
}


// コマンドライン設定
program
    .name('github-issue-cli')
    .option('-v, --verbose', 'Enable verbose HTTP logging');

// Issue を作成
program
    .command('create <title> [body]')
    .action((title, body) => {
        createIssue(title, body || '');
    });

// 指定した Issue をクローズ
program
    .command('close <issueNumber>')
    .action((issueNumber) => {
        closeIssue(issueNumber);
    });

// オープンな Issue の Id と Title の一覧を表示
program
    .command('list')
    .action(() => {
        showListOfOpenIssues();
    });


