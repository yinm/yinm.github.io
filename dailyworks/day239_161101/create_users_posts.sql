create table users
(
    id int not null primary key auto_increment
  , name varchar(255)
  , email varchar(255)
  , team enum('blue', 'red', 'yellow')
  , score double
  , created datetime
);

insert into users
(
    name
  , email
  , team
  , score
  , created
)
values
(
    'taguchi'
  , 'taguchi@dotinstall.com'
  , 'blue'
  , 5.5
  , '2012-05-11 11:00:00'
),
(
    'fkoji'
  , 'fkoji@dotinstall.com'
  , 'yellow'
  , 8.2
  , '2012-06-21 12:00:00'
),
(
    'dotinstall'
  , 'dotinstall@dotinstall.com'
  , 'red'
  , 2.3
  , '2012-06-21 13:00:00'
);


create table posts
(
    id int not null primary key auto_increment
  , user_id int not null
  , title varchar(255)
  , body text
  , created datetime
);

insert into posts
(
    user_id
  , title
  , body
  , created
)
values
(
    1
  , 'title-1 by taguchi'
  , 'body-1'
  , '2912-05-11 14:00:00'
),
(
    1
  , 'title-2 by taguchi'
  , 'body-2'
  , '2012-05-11 12:00:00'
),
(
    2
  , 'title-3 by fkoji'
  , 'body-3'
  , '2012-05-11 13:00:00'
),
(
    3
  , 'title-4 by dotinstall'
  , 'body-4'
  , '2012-05-11 10:00:00'
),
(
    3
  , 'title-5 by dotinstall'
  , 'body-5'
  , '2012-05-11 09:00:00'
);
