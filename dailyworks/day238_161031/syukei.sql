select count(*) from users2;

select distinct team from users2;

select max(score) from users2;

select avg(score) from users2;

select sum(score) from users2;

select team, sum(score) from users2 group by team;

select rand();

select * from users2 order by rand() limit 1;
