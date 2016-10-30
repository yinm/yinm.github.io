desc users2;

alter table users2 add full_name varchar(255) after name;
alter table users2 change full_name full_name2 varchar(100);
alter table users2 drop full_name2;

alter table users2 add index email_idx (email);
alter table users2 drop index email_idx;

alter table users rename blog_users;
show tables;
