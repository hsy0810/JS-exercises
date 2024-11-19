import { program } from 'commander';
// リクエストを設定
const baseURL =
"https://api.github.com/repos/hsy0810/JS-exercises";
const TOKEN = process.env.GITHUB_TOKEN;
const headers = {
Authorization: `token ${TOKEN}`,
"Content-Type": "application/json",
};

// Issue を作成できる
export async function createIssue(title, body) {
try {
  const response = await fetch(`${baseURL}/issues`, {
    method: "POST",
    headers,
    body: JSON.stringify({
      title,
      body,
    }),
  });
  const data = await response.json();
  if (!response.ok) {
    console.log(title, body);
    console.log(response);
    throw new Error(data.message);
  }
  console.log("Success to create issue", data.html_url);
} catch (e) {
  console.log(e.message);
}
}
// 指定した Issue をクローズできる
export async function closeIssue(issueNumber) {
try {
  const response = await fetch(`${baseURL}/issues/${issueNumber}`, {
    method: "PATCH",
    headers,
    body: JSON.stringify({
      state: "closed",
    }),
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message);
  }
  console.log("Success to close issue", data.html_url);
} catch (e) {
  console.log(e.message);
}
}
// オープンな Issue の Id と Title の一覧を表示できる
export async function showOpenIssues() {
try {
  const response = await fetch(`${baseURL}/issues?state=open`, {
    method: "GET",
    headers,
  });
  const data = await response.json();
  if (!response.ok) {
    console.log(response);
    throw new Error(data.message);
  }
  data.forEach((issue) => {
    console.log(`#${issue.id}: ${issue.title}`);
  });
} catch (e) {
  console.log(e.message);
}
}
// コマンドライン設定
// Issue を作成
program
  .command('create <title> [body]')
  .action((title, body) => {
    createIssue(title, body || '');
  });

// Issueをクローズ
program
  .command('close <issueNumber>')
  .action((issueNumber) => {
    closeIssue(issueNumber);
  });

// オープンな Issue 一覧を表示
program
  .command('list')
  .action(() => {
    showOpenIssues();
  });

program.parse(process.argv);


// ヘルプを表示
program
  .command('help')
  .action(() => {
    program.outputHelp();
  });

//HTTPログ出力（うまく行けてない）
program
  .option('-v, --verbose', 'output verbose logging');