select email, length(email) from users2;

select concat(name, '(', team, ')') from users2;

select concat(name, '(', team, ')') as label from users2;

select name, substring(team, 1, 1) from users2;

select now();

select name, month(created) from users2;

select name, datediff(now(), created) from users2;
