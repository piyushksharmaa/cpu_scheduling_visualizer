#include <bits/stdc++.h>

using namespace std;
#include <bits/stdc++.h>
vector<vector<pair<int, int>>> p_ans;
// vector<vector<int> > ratInAMaze(vector<vector<int> > &maze, int n);
// void solve(vector<vector<int> > &maze, vector<pair<int,int>> &temp, vector<vector<int>> &visited,int x,int y);

void solve(vector<vector<int>> &maze, vector<pair<int, int>> &temp, vector<vector<int>> &visited, int x, int y)
{
    int n = maze.size();
    cout << "Inside solve function top" << endl;
    cout << x << " " << y << " " << n - 1 << endl;
    if (x == y && y == n - 1)
    {
        cout << "Inside return fuunction" << endl;
        p_ans.push_back(temp);
        return;
    }
    cout << "Inside solve function top2" << endl;
    if (x + 1 < n && maze[x + 1][y] == 1 && visited[x + 1][y] == false)
    {
        cout << "Inside solve function if1" << endl;
        temp.push_back(make_pair(x + 1, y));
        visited[x + 1][y] == true;
        solve(maze, temp, visited, x + 1, y);
        visited[x + 1][y] == false;
        temp.pop_back();
    }
    if (x - 1 >= 0 && maze[x - 1][y] == 1 && visited[x - 1][y] == false)
    {
        cout << "Inside solve function if2" << endl;
        temp.push_back(make_pair(x - 1, y));
        visited[x - 1][y] == true;
        solve(maze, temp, visited, x - 1, y);
        visited[x - 1][y] == false;
        temp.pop_back();
    }
    if (y + 1 < n && maze[x][y + 1] == 1 && visited[x][y + 1] == false)
    {
        cout << "Inside solve function if3" << endl;
        temp.push_back(make_pair(x, y + 1));
        visited[x][y + 1] == true;
        solve(maze, temp, visited, x, y + 1);
        visited[x][y + 1] == false;
        temp.pop_back();
    }
    if (y - 1 >= 0 && maze[x][y - 1] == 1 && visited[x][y - 1] == false)
    {
        cout << "Inside solve function if4" << endl;
        temp.push_back(make_pair(x, y - 1));
        visited[x][y - 1] == true;
        solve(maze, temp, visited, x, y - 1);
        visited[x][y - 1] == false;
        temp.pop_back();
    }
}

vector<vector<int>> ratInAMaze(vector<vector<int>> &maze, int n)
{

    // Write your code here.
    cout << "Inside ratInAMaze" << endl;
    vector<pair<int, int>> temp;
    vector<vector<int>> ans;
    vector<vector<int>> visited(n, vector<int>(n, 0));
    if (maze[0][0] == 1)
    {
        temp.push_back(make_pair(0, 0));
    }
    int x = 0;
    int y = 0;
    cout << x << " " << y << endl;
    // solve(maze, temp, visited, x, y);
    for (int i = 0; i < p_ans.size(); i++)
    {
        cout << "Inside for loop" << endl;
        vector<int> temp2(n * n, 0);
        for (int j = 0; j < p_ans[0].size(); j++)
        {
            cout << "Inside for loop2" << endl;
            temp2[i * n + j] = 1;
        }
        ans.push_back(temp2);
    }
    return ans;
}
int main()
{
    cout << "Hello World" << endl;
    vector<vector<int>> maze = {{1, 0, 1}, {1, 0, 1}, {1, 1, 1}};
    ratInAMaze(maze, 3);
    return 0;
}
