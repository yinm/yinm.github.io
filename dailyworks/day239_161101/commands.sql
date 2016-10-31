drop table if exists users;
create table users
(
    name varchar(255)
  , email varchar(255)
);

insert into users
(
    name
  , email
)
values
(
    'taguchi'
  , 'taguchi@gmail.com'
);
