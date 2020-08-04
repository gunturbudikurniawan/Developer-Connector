## Running the project

    $ yarn run dev

## user's endpoint
http://localhost:7000

| No  | HTTP Method | URI                                           | Operation                 |
| --- | ----------- | ---------------------                         | ------------------------- |
| 1   | POST        | /api/users                                    | Register user             |
| 2   | Post        | /api/auth                                     | Login user                |
| 3   | Get         | /api/profile/me                               | Get Logged profile        |
| 5   | Post        | /api/profile                                  | Create and update profile |
| 6   | Delete      | /api/profile                                  | Delete profile            |
| 7   | Put         | /api/profile/experience                       | Add experience by id      |
| 8   | Delete      | /api/profile/experience/:id                   | Delete experience by id   |
| 9   | Get         | /api/profile/github/:username                 | Get Github Repo           |
| 10  | Post        | /api/posts                                    | Add Post                  |
| 11  | Put         | /api/posts/like/:idPost                       | Like Post                 |
| 12  | Put         | /api/posts/unlike/:idPost                     | UnLike Post               |
| 13  | Post        | /api/posts/comment/:postId                    | Add Comment               |
| 14  | Delete      | /api/posts/comment/:postId                    | Delete Comment            |















