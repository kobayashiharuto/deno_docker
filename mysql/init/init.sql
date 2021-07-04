use sample_db;

CREATE TABLE users (
  id int(10) unsigned not null auto_increment,
  name varchar(255) not null,
  address varchar(255) not null,
  created_time datetime not null default current_timestamp,
  updated_time datetime not null default current_timestamp on update current_timestamp,
  primary key (id)
);

insert into users (name, address) values ('John', 'Tokyo');
insert into users (name, address) values ('Remi', 'Osaka');
insert into users (name, address) values ('White', 'Losangeles');