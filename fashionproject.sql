drop database if exists fashionproject;
create database fashionproject;
use fashionproject;

create table clothingarticle(
    id int not null auto_increment,
    item varchar(50),
    name varchar(50) not null,
    quantity int,
    avgprice float,
    salesmargin float,
    budget float,
    primary key (id)
);

insert into clothingarticle values(default,"shirt","redshirt",2,3,0.5,200);

select * from clothingarticle;


--source C:\Users\Joni\Desktop\fashionproject.sql