select
    users.name
  , posts.title
from
    users
  , posts
where
    users.id = posts.user_id
order by
    posts.created desc
;
