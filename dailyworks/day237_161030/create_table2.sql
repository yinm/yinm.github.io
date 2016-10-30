create table users2
(
    id int not null primary key auto_increment
  , name varchar(255)
  , email varchar(255)
  , team enum('blue', 'red', 'yellow')
  , score double
  , created datetime
);
