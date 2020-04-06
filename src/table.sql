
Drop table if exists visitors;
Create Table visitors
(
    visitor_id serial primary key,
    visitor_name varchar(100),
    visitor_age integer,
    date_of_visit date,
    time_of_visit time,
    assistant_name varchar(100),
    Comments varchar(225)
);
