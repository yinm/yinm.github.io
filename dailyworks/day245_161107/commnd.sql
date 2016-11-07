create database code_bu;
show databases;
use code_bu;

create table sample
(
  id varchar(3),
  name varchar(30),
  section varchar(3),
  partner varchar(3),
  grade varchar(3)
);
show tables;
desc sample;

insert into sample
(
  id,
  name,
  section,
  partner,
  grade
)
values
(
  "001",
  "Tanaka",
  "020",
  "",
  "G1"
);
select * from sample;

update sample
set
  section = "030"
where
  id = "001";
select * from sample;

delete from sample
where
  id = "001";
select * from sample;

drop table sample;
show tables;

drop database code_bu;
show databases;
