import { afterEach, jest } from '@jest/globals';
import { createIssue, closeIssue, showOpenIssues } from './index.js';

const baseURL = "https://api.github.com/repos/hsy0810/JS-exercises";
const TOKEN = process.env.GITHUB_TOKEN;
const headers = {
  Authorization: `token ${TOKEN}`,
  "Content-Type": "application/json",
};

describe('GitHub Issues API', () => {
  afterEach(() => {
    global.fetch.mockClear();
  });

  test('createIssue', async () => {
    const title = 'test issue';
    const body = 'test body';

    global.fetch = jest.fn().mockImplementation(() => {
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ title, body }),
      })
    });
    // 関数を呼び出し
    await createIssue(title, body);

    // fetchが期待通りに呼び出されているか確認
    expect(global.fetch).toHaveBeenCalledWith(`${baseURL}/issues`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        title,
        body,
      }),
    });
  })
  test('closeIssue', async () => {
    const issueNumber = 1;
    global.fetch = jest.fn().mockImplementation(() => {
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ title, body }),
      })
    });
    await closeIssue(issueNumber)
    // fetchが期待通りに呼び出されているか確認
    expect(global.fetch).toHaveBeenCalledWith(`${baseURL}/issues/${issueNumber}`, {
      method: 'PATCH',
      headers,
      body: JSON.stringify({
        state: "closed",
      }),
    });

  });

  test('showOpenIssues', async () => {
    const mockResponse = [
      { id: 1, title: 'Open Issue 1' },
      { id: 2, title: 'Open Issue 2' },
    ];
    global.fetch = jest.fn().mockImplementation(() => {
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ mockResponse }),
      })
    });
    await showOpenIssues();
    // fetchが期待通りに呼び出されているか確認
    expect(global.fetch).toHaveBeenCalledWith(`${baseURL}/issues?state=open`, {
      method: 'GET',
      headers,
    });

  });

});
